import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { connectToDB } from "../helpers/db";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (user && bcrypt.compareSync(password, user.hashedPassword!)) {
          return { id: user.id, email: user.email };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      let email = user.email; // This should be available from all providers

      // Check if the user exists in our database
      let existingUser = await prisma.user.findUnique({
        where: {
          email: email!,
        },
      });

      // If the user doesn't exist, create them
      if (!existingUser) {
        existingUser = await prisma.user.create({
          data: {
            email: email!,
            // Assuming we want to store some info for OAuth users, but not a hashedPassword
            name: user.name || profile?.name, // Use the name from the profile if available
            image: user.image,
            // Additional fields from the OAuth profile could be included here if necessary
          },
        });

        // Optionally, link the OAuth account info in the `Account` model
        await prisma.account.create({
          data: {
            userId: existingUser.id,
            type: account?.type!,
            provider: account?.provider!,
            providerAccountId: account?.providerAccountId!,
            // Include any other relevant fields from the `account` object
          },
        });
      }

      // Signal that the signIn process should continue
      return true;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/",
  },
};

export default authOptions;
