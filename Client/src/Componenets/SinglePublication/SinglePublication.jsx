import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReacherPaper } from "../../hocks/ResearchPaper";

const SinglePublication = () => {
  const { id } = useParams();
  const Paper = ReacherPaper(id);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const loadPdfData = async () => {
      if (Paper.length > 0 && Paper[0].File) {
        const pdfData = new Uint8Array(Paper[0].File.data);
        const blob = new Blob([pdfData], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      }
    };

    loadPdfData();
  }, [Paper]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  return (
    <div className="min-h-screen flex items-center justify-center mt-40">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Research Details
        </h1>
        <div className="mb-4">
          <strong className="text-gray-700">Authors:</strong>{" "}
          {Paper.length > 0 && Paper[0].authors}
        </div>
        <div className="mb-4">
          <strong className="text-gray-700">
            Resource Paper: {Paper.length > 0 && Paper[0].title}
          </strong>
        </div>
        <div className="mb-4">
          <strong className="text-gray-700">PDF Download:</strong>{" "}
          {pdfUrl && (
            <a
              href={pdfUrl}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              download="research_paper.pdf"
            >
              Download PDF
            </a>
          )}
        </div>
        <div className="relative overflow-hidden pb-[60%]">
          {Paper.length > 0 && Paper[0].File && (
            <a
              href={`data:application/pdf;base64,${arrayBufferToBase64(
                Paper[0].File.data
              )}`}
              download="certificate.pdf"
            >
              <object
                data={`data:application/pdf;base64,${arrayBufferToBase64(
                  Paper[0].File.data
                )}`}
                type="application/pdf"
                className="w-full h-full absolute top-0 left-0"
              >
                Your browser does not support PDFs.
              </object>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePublication;
