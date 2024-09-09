import { ReactNode } from "react";

interface CompanyProps {
  icon: ReactNode;
  title: string;
  url: string;
  count: number;
}

const companies: CompanyProps[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path
          fill="#1E88E5"
          d="M42 13.976L31.377 7.255 24 13.314 35.026 19.732zM6 25.647L16.933 32.055 24 26.633 13.528 19.969zM16.933 7.255L6 14.301 13.528 19.969 24 13.314zM24 26.633L31.209 32.055 42 25.647 35.026 19.732z"
        ></path>
        <path
          fill="#1E88E5"
          d="M32.195 33.779L31.047 34.462 29.979 33.658 24 29.162 18.155 33.646 17.091 34.464 15.933 33.785 13 32.066 13 34.738 23.988 42 35 34.794 35 32.114z"
        ></path>
      </svg>
    ),
    title: "Dropbox",
    url: "dropbox.com",
    count: 24,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" r="20" fill="#E60023"></circle>
        <path
          fill="#FFF"
          d="M24.4439087,11.4161377c-8.6323242,0-13.2153931,5.7946167-13.2153931,12.1030884	c0,2.9338379,1.5615234,6.5853882,4.0599976,7.7484131c0.378418,0.1762085,0.581543,0.1000366,0.668457-0.2669067	c0.0668945-0.2784424,0.4038086-1.6369019,0.5553589-2.2684326c0.0484619-0.2015381,0.0246582-0.3746338-0.1384277-0.5731201	c-0.8269653-1.0030518-1.4884644-2.8461304-1.4884644-4.5645752c0-4.4115601,3.3399658-8.6799927,9.0299683-8.6799927	c4.9130859,0,8.3530884,3.3484497,8.3530884,8.1369019c0,5.4099731-2.7322998,9.1584473-6.2869263,9.1584473	c-1.9630737,0-3.4330444-1.6238403-2.9615479-3.6153564c0.5654297-2.3769531,1.6569214-4.9415283,1.6569214-6.6584473	c0-1.5354004-0.8230591-2.8169556-2.5299683-2.8169556c-2.006958,0-3.6184692,2.0753784-3.6184692,4.8569336	c0,1.7700195,0.5984497,2.9684448,0.5984497,2.9684448s-1.9822998,8.3815308-2.3453979,9.9415283	c-0.4019775,1.72229-0.2453003,4.1416016-0.0713501,5.7233887l0,0c0.4511108,0.1768799,0.9024048,0.3537598,1.3687744,0.4981079l0,0	c0.8168945-1.3278198,2.0349731-3.5056763,2.4864502-5.2422485c0.2438354-0.9361572,1.2468872-4.7546387,1.2468872-4.7546387	c0.6515503,1.2438965,2.5561523,2.296936,4.5831299,2.296936c6.0314941,0,10.378418-5.546936,10.378418-12.4400024	C36.7738647,16.3591919,31.3823242,11.4161377,24.4439087,11.4161377z"
        ></path>
      </svg>
    ),
    title: "Pinterest",
    url: "pinterest.com",
    count: 3,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path
          fill="#ff5722"
          d="M6 6H22V22H6z"
          transform="rotate(-180 14 14)"
        ></path>
        <path
          fill="#4caf50"
          d="M26 6H42V22H26z"
          transform="rotate(-180 34 14)"
        ></path>
        <path
          fill="#ffc107"
          d="M26 26H42V42H26z"
          transform="rotate(-180 34 34)"
        ></path>
        <path
          fill="#03a9f4"
          d="M6 26H22V42H6z"
          transform="rotate(-180 14 34)"
        ></path>
      </svg>
    ),
    title: "Microsoft",
    url: "microsoft.com",
    count: 19,
  },
];

export const ListCompany = () => {
  return (
    <div className="w-[60rem] space-y-6 rounded-md bg-white p-16">
      <div className="flex items-center justify-between">
        <div className="relative">
          <input
            type="text"
            className="mr-2 rounded-md border-2 border-[#C5C5F8] px-4 py-3 pl-10"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-3 top-4 h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="flex items-center space-x-4">
          <svg
            className="h-6 w-6 scale-125 text-gray-800"
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
              d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
            />
          </svg>
          <p className="font-2xl flex h-16 w-16 items-center justify-center rounded-full bg-[#8598FC] text-3xl font-medium text-white">
            IG
          </p>
        </div>
      </div>

      <h1 className="font-meri text-3xl font-bold">Account</h1>

      <div className="w-full space-y-4">
        {companies.map((company) => (
          <div className="flex w-full items-center justify-between rounded-2xl p-4 hover:bg-[#FAF2FE]">
            <div className="mr-4 flex items-center space-x-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                {company.icon}
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="font-meri text-xl font-bold">{company.title}</h1>
                <p>{company.url}</p>
              </div>
            </div>

            <p className="font-popi text-sm font-medium">
              {company.count} accounts
            </p>

            <button className="rounded-full bg-white p-2">
              <svg
                className="h-8 w-8 text-2xl"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M6 12h.01m6 0h.01m5.99 0h.01"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
