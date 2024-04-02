import prisma from "@/prisma/index";
import DeleteBtn from "./DeleteBtn";
import { notFound } from "next/navigation";
import HomeBtn from "./HomeBtn";

const page = async ({ params }: { params: { id: string } }) => {
  const getContract = async () => {
    const contract = await prisma.contract.findUnique({
      where: { id: params.id },
    });
    return contract;
  };
  const contract = await getContract();
  if (!contract) notFound();
  return (
    <div className="p-5 md:p-10 text-lg  text-gray-200 bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-700">
      <div className="w-[80%] mx-auto">
        <div className="flex items-center flex-row gap-4">
          <DeleteBtn contractId={params.id} />
          <HomeBtn />
        </div>

        <div className=" border  border-gray-200 p-2 my-4 rounded-md">
          <h1 className="text-center text-3xl font-semibold">
            {contract?.title ?? "Contract"}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: contract!.content }} />
        </div>
      </div>
    </div>
  );
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const contract = await prisma.contract.findUnique({
    where: { id: params.id },
  });
  return {
    title: contract?.title || `contract - ${contract?.id}`,
    description: "Details of issue" + contract?.id,
  };
}

export default page;
