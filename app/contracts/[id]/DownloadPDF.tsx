"use client";

import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaDownload } from "react-icons/fa";
const DownloadPDF = ({ contract }: { contract: any }) => {
  const pdfContentRef = useRef<HTMLDivElement | null>(null);

  const handleDownloadPDF = async () => {
    if (pdfContentRef.current) {
      // Clone the content to avoid altering the on-screen appearance
      const clonedNode = pdfContentRef.current.cloneNode(true) as HTMLElement;

      // Create and insert the icon image element
      const icon = new Image();
      icon.src = "/icon.png"; // Assuming the icon is at /public/icon.png
      icon.style.width = "50px";
      icon.style.marginBottom = "10px";
      icon.style.margin = "auto";
      clonedNode.insertBefore(icon, clonedNode.firstChild);

      // Adjust the styles for the PDF
      clonedNode.style.backgroundColor = "white";
      clonedNode.style.color = "black";
      clonedNode.style.padding = "20px";
      clonedNode.style.margin = "20px";
      clonedNode.style.width = "650px";
      clonedNode.style.border = "1px solid #ccc";
      clonedNode.style.borderRadius = "4px";

      // Reduce the text size for better fit
      const title = clonedNode.querySelector("h1");
      if (title) {
        title.style.fontSize = "20px";
      }
      const contentDiv = clonedNode.querySelector("div");
      if (contentDiv) {
        contentDiv.style.fontSize = "14px";
      }

      document.body.appendChild(clonedNode);

      const canvas = await html2canvas(clonedNode, {
        backgroundColor: "white",
      });

      document.body.removeChild(clonedNode);

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");

      const imgWidth = 595.28;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      while (heightLeft > 0) {
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= 841.89; // A4 page height
        position -= 841.89;
        if (heightLeft > 0) {
          pdf.addPage();
        }
      }

      pdf.save(`${contract.title ?? "Contract"} - Blackrobe.pdf`);
    }
  };

  return (
    <div className="my-4">
      <button
        className="p-2 flex  items-center gap-2 bg-blue-500 text-white rounded"
        onClick={handleDownloadPDF}
      >
        <FaDownload /> Download PDF
      </button>

      <div
        className="border border-gray-200 p-2 my-4 rounded-md"
        ref={pdfContentRef}
      >
        <h1 className="text-center text-3xl font-semibold">
          {contract?.title ?? "Contract"}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: contract.content }} />
      </div>
    </div>
  );
};

export default DownloadPDF;
