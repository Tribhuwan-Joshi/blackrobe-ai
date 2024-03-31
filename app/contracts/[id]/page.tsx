import prisma from "@/prisma/index";
import DeleteBtn from "./DeleteBtn";
import { notFound } from "next/navigation";

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
    <div className="m-5 md:m-10">
      <div className="w-[80%] mx-auto">
        <DeleteBtn contractId={params.id} />
        <div className=" border  border-gray-800 p-2 my-4 rounded-md">
          <h1 className="text-center text-3xl font-semibold">
            {contract?.title ?? "Contract"}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: contract!.content }} />;
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
