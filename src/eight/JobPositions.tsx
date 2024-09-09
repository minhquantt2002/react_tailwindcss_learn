import { ReactNode } from "react";

interface JobProps {
  icon: ReactNode;
  title: string;
  count: number;
}

const jobs: JobProps[] = [
  {
    icon: (
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#BBCBFB] to-[#F1D4FF]">
        <svg
          className="h-6 w-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
          />
        </svg>
      </div>
    ),
    title: "Design",
    count: 4,
  },
  {
    icon: (
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FBBBDA] to-[#FFD4D4]">
        <svg
          className="h-6 w-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
          />
        </svg>
      </div>
    ),
    title: "Engineering",
    count: 8,
  },
  {
    icon: (
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#BBEBFB] to-[#EFD4FF]">
        <svg
          className="h-6 w-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          />
        </svg>
      </div>
    ),
    title: "Operations",
    count: 2,
  },
  {
    icon: (
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#BBFBE4] to-[#D4E0FF]">
        <svg
          className="h-6 w-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    ),
    title: "People",
    count: 6,
  },
  {
    icon: (
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#BBD8FB] to-[#FFD4D4]">
        <svg
          className="h-6 w-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Zm2 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    ),
    title: "Sales",
    count: 7,
  },
  {
    icon: (
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFDEC7] to-[#D4D9FF]">
        <svg
          className="h-6 w-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
          />
        </svg>
      </div>
    ),
    title: "University",
    count: 8,
  },
];

export const JobPositions = () => {
  return (
    <div className="w-full space-y-24 text-center">
      <h1 className="font-meri text-3xl font-black">Open positions</h1>

      <div className="grid grid-cols-3 gap-8 px-4">
        {jobs.map((job) => (
          <div className="flex flex-col space-y-8 rounded-2xl bg-white px-10 py-12">
            <div className="flex items-center justify-center space-x-4">
              {job.icon}
              <p className="font-popi text-2xl font-medium">{job.title}</p>
            </div>
            <button className="rounded-md border-[1px] border-gray-300 px-6 py-4 text-lg hover:bg-[#1E2246] hover:text-white">
              {job.count} open positions
            </button>
          </div>
        ))}
      </div>

      <p className="mx-auto max-w-5xl [text-wrap:balance]">
        We are proud to be an equal opportunity employer that values diversity.
        We do not discriminate on the basis of race, religion, color, national
        origin, gender, sexual orientation, age, marital status, veteran status,
        or disability status.
      </p>
    </div>
  );
};
