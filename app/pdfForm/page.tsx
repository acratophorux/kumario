"use client";

import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import "./Sample.css";

import type { PDFDocumentProxy } from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};

const maxWidth = 800;

type PDFFile = string | File | null;

// export default function Sample() {
//   const [file, setFile] = useState<PDFFile>("./sample.pdf");
//   const [numPages, setNumPages] = useState<number>();
//   const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
//   const [containerWidth, setContainerWidth] = useState<number>();

//   const onResize = useCallback<ResizeObserverCallback>((entries) => {
//     const [entry] = entries;

//     if (entry) {
//       setContainerWidth(entry.contentRect.width);
//     }
//   }, []);

//   useResizeObserver(containerRef, resizeObserverOptions, onResize);

//   function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
//     const { files } = event.target;

//     if (files && files[0]) {
//       setFile(files[0] || null);
//     }
//   }

//   function onDocumentLoadSuccess({
//     numPages: nextNumPages,
//   }: PDFDocumentProxy): void {
//     setNumPages(nextNumPages);
//   }

//   return (
//     <div className="Example">
//       <header>
//         <h1>react-pdf sample page</h1>
//       </header>
//       <div className="Example__container">
//         <div className="Example__container__load">
//           <label htmlFor="file">Load from file:</label>{" "}
//           <input onChange={onFileChange} type="file" />
//         </div>
//         <div className="Example__container__document" ref={setContainerRef}>
//           <Document
//             file={file}
//             onLoadSuccess={onDocumentLoadSuccess}
//             options={options}
//           >
//             {Array.from(new Array(numPages), (el, index) => (
//               <Page
//                 key={`page_${index + 1}`}
//                 pageNumber={index + 1}
//                 width={
//                   containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
//                 }
//               />
//             ))}
//           </Document>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";

import React, { useRef } from "react";
// import { Document, Page } from "react-pdf";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface FormData {
  [key: string]: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({});
  const [pageNumber, setPageNumber] = useState(1);

  function handlePreviousPage() {
    setPageNumber((prev) => prev - 1);
  }
  function handleNextPage() {
    setPageNumber((prev) => prev + 1);
  }
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setPageNumber(numPages);
  }

  const formRef = useRef<HTMLDivElement>(null);

  function updateForm(name: string, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function downloadPDF() {
    // Fill out PDF form programmatically

    const docDefinition: TDocumentDefinitions = {
      content: [
        {
          text: "This is a header, using header style",
          style: "header",
        },
        {
          text: [
            "This paragraph will have a bigger ",
            { text: "font size", fontSize: 15 },
            " than the rest of the paragraph.",
          ],
        },
      ],
    };

    pdfMake.createPdf(docDefinition).download();
  }
  const [file, setFile] = useState<PDFFile>("./sample.pdf");
  const [numPages, setNumPages] = useState<number>();

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target;

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  }
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  return (
    <div>
      <div className="Example">
        <header>
          <h1>react-pdf sample page</h1>
        </header>
        <div className="Example__container">
          <div className="Example__container__load">
            <label htmlFor="file">Load from file:</label>{" "}
            <input onChange={onFileChange} type="file" />
          </div>
          <div className="Example__container__document" ref={setContainerRef}>
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={
                    containerWidth
                      ? Math.min(containerWidth, maxWidth)
                      : maxWidth
                  }
                />
              ))}
            </Document>
          </div>
        </div>
      </div>
      {/* <Document file={file} ref={formRef} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}

      {/* Render inputs bound to state */}

      <button onClick={downloadPDF}>Download</button>
    </div>
  );
}
