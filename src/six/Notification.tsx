import { useState } from "react";

export const Notification = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-[44rem]">
      <div className="text-right">
        <button
          className="rounded-full bg-[#0C0E41] p-2 text-white"
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-12 w-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </button>
      </div>

      <div
        className={`mt-4 w-full bg-white p-10 ${show && "opacity-0"} shadow-sm transition-all duration-500`}
      >
        <h2 className="font-popi text-xl font-semibold">
          You have 1 new message
        </h2>

        <div className="mt-6 flex gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#FFE9F2] text-[#C83974]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>

          <div className="flex flex-col justify-center font-popi text-[#0C0E41]">
            <h3 className="font-semibold">Feb 22</h3>
            <p className="text-lg font-normal">
              If you like what we do, please tell your friends and share.
            </p>
          </div>
        </div>

        <div className="mt-8 space-x-4 text-center">
          <button className="rounded-full border-2 border-gray-800 px-4 py-1">
            <svg
              className="inline h-6 w-6 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
            </svg>
            Twitter
          </button>

          <button className="rounded-full border-2 border-[#205195] px-4 py-1 text-[#205195]">
            <svg
              className="inline h-6 w-6 text-[#205195]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};
