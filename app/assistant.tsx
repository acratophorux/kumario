"use client";

import {
  Message,
  // import as useAssistant:
  experimental_useAssistant as useAssistant,
} from "ai/react";
import { ThemeProvider } from "next-themes";

const roleToColorMap: Record<Message["role"], string> = {
  system: "red",
  user: "black",
  function: "blue",
  assistant: "black",
  data: "orange",
  tool: "",
};

// hide image when the form is submitted using js doms

// image.style.display = "none";

export default function Chat() {
  const { status, messages, input, submitMessage, handleInputChange } =
    useAssistant({ api: "/api/assistant_chef" });

  return (
    <ThemeProvider>
      <div className="flex flex-col gap-4 w-full max-w-4xl py-24 mx-auto stretch">
        {messages.map((m: Message) => (
          <div
            key={m.id}
            className={`whitespace-pre-wrap flex flex-col   ${
              m.role === "user"
                ? "rounded-lg shadow-lg items-start text-right pt-4 pl-4 dark:bg-gray-600"
                : "gap-1"
            }`}
            style={{ color: roleToColorMap[m.role] }}
          >
            <div
              className={` text-white  px-4 w-32 max-w-fit max-h-fit rounded-full flex flex-col justify-center items-center ${
                m.role === "user"
                  ? "bg-black dark:bg-white dark:text-black"
                  : "bg-gradient-to-br from-amber-300 via-red-500 to-blue-500"
              }`}
            >
              <strong>{`${m.role === "user" ? "User" : "AIChef"}`}</strong>
            </div>
            <div className="text-black dark:text-gray-200">
              {m.role !== "data" && m.content}
            </div>
            {m.role === "data" && (
              <>
                {/* here you would provide a custom display for your app-specific data:*/}
                {(m.data as any).description}
                <br />
                <pre className={"bg-gray-200"}>
                  {JSON.stringify(m.data, null, 2)}
                </pre>
              </>
            )}
            <br />
            <br />
          </div>
        ))}

        {status === "in_progress" && (
          <div className="h-8 w-full max-w-md p-2 mb-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
        )}
        <div className="fixed left-0 bottom-0 flex items-center justify-center w-full  mb-3  px-1">
          <form
            id="myForm"
            onSubmit={submitMessage}
            className="h-12 p-1 flex flex-row text-black dark:text-white ring-2 ring-gray-600 dark:ring-gray-200 rounded-full backdrop-blur-lg "
          >
            <input
              disabled={status !== "awaiting_message"}
              className="w-full h-full rounded-full px-4 bg-gray-200 dark:bg-gray-600"
              value={input}
              placeholder="Enter ingredients"
              onChange={handleInputChange}
            />
            <button
              className="bg-gray-800 dark:bg-gray-100 text-white dark:text-black rounded-full px-3 ml-3"
              type="submit"
            >
              Cook
            </button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}

// "use client";

// import {
//   Message,
//   // import as useAssistant:
//   experimental_useAssistant as useAssistant,
// } from "ai/react";

// const roleToColorMap: Record<Message["role"], string> = {
//   system: "red",
//   user: "black",
//   function: "blue",
//   assistant: "black",
//   data: "orange",
//   tool: "",
// };

// export default function Chat() {
//   const { status, messages, input, submitMessage, handleInputChange } =
//     useAssistant({ api: "/api/assistant" });

//   return (
//     <div className="flex flex-col gap-4 w-full max-w-4xl py-24 mx-auto stretch">
//       {messages.map((m: Message) => (
//         <div
//           key={m.id}
//           className={`whitespace-pre-wrap flex flex-col  ${
//             m.role === "user"
//               ? "rounded-lg shadow-lg items-start text-right pt-4 pl-4 gap-1"
//               : "gap-1"
//           }`}
//           style={{ color: roleToColorMap[m.role] }}
//         >
//           <div
//             className={` text-white px-4 w-32 max-w-fit max-h-fit rounded-full flex flex-col justify-center items-center ${
//               m.role === "user"
//                 ? "bg-black"
//                 : "bg-gradient-to-br from-amber-300 via-red-500 to-blue-500"
//             }`}
//           >
//             <strong>{`${m.role === "user" ? "User" : "AIChef"}`}</strong>
//           </div>
//           {m.role !== "data" && m.content}
//           {m.role === "data" && (
//             <>
//               {/* here you would provide a custom display for your app-specific data:*/}
//               {(m.data as any).description}
//               <br />
//               <pre className={"bg-gray-200"}>
//                 {JSON.stringify(m.data, null, 2)}
//               </pre>
//             </>
//           )}
//           <br />
//           <br />
//         </div>
//       ))}

//       {status === "in_progress" && (
//         <div className="h-8 w-full max-w-md p-2 mb-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
//       )}

//       <form
//         onSubmit={submitMessage}
//         className="fixed bottom-0 w-full max-w-sm sm:max-w-md md:max-w-3xl h-12  mb-3 p-1 flex flex-row text-black dark:text-white ring-2 ring-gray-600 dark:ring-gray-200 rounded-full backdrop-blur-lg"
//       >
//         <input
//           disabled={status !== "awaiting_message"}
//           className="w-full h-full rounded-full px-4 bg-gray-200 dark:bg-gray-600"
//           //   className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
//           value={input}
//           placeholder="Fancy some Sabji of Sangri?"
//           onChange={handleInputChange}
//         />
//         <button
//           className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-full px-4 ml-3"
//           type="submit"
//         >
//           Generate
//         </button>
//       </form>
//     </div>
//   );
// }
