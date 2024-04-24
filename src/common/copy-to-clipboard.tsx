import React, { useState } from "react";

const CopyToClipboard: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const email = "leonardo.clog@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="w-full max-w-[18rem] mx-auto">
      <div className="relative">
        <label htmlFor="email-copy-text" className="sr-only">
          Email Address
        </label>
        <input
          id="email-copy-text"
          type="text"
          className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4"
          value="leonardo.clog@gmail.com"
          disabled
          readOnly
        />
        <button
          onClick={handleCopyClick}
          className="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 hover:bg-gray-100 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
          disabled={isCopied}
        >
          <span id="default-message" className="inline-flex items-center">
            <svg
              className="w-3 h-3 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
            </svg>
            <span className="text-xs font-semibold">Copy</span>
          </span>
         
        </button>
      </div>
    </div>
  );
};

export default CopyToClipboard;
