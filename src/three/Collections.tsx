export const Collections = () => {
  const tags = ["Profile", "New York", "Relax", "Person", "Fashion"];

  return (
    <div className="w-full rounded-lg bg-[#EFF0F1] p-16 shadow-lg">
      <h1 className="font-meri text-3xl font-bold">Popular collections</h1>
      <div className="space-x-2 pt-6">
        {tags.map((item) => {
          return (
            <a
              className="inline-block rounded-lg bg-white px-4 py-3 hover:text-blue-400"
              href={item}
            >
              {item}
            </a>
          );
        })}
      </div>
      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6">
          <img
            src="https://placewaifu.com/image/100"
            alt=""
            className="aspect-video w-full rounded-2xl"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/200"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/300"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/400"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="flex pt-6">
            <p className="grow font-popi text-xl font-medium">People</p>
            <p className="flex items-center font-popi text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6">
          <img
            src="https://placewaifu.com/image/100"
            alt=""
            className="aspect-video w-full rounded-2xl"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/200"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/300"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/400"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="flex pt-6">
            <p className="grow font-popi text-xl font-medium">People</p>
            <p className="flex items-center font-popi text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6">
          <img
            src="https://placewaifu.com/image/100"
            alt=""
            className="aspect-video w-full rounded-2xl"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/200"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/300"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/400"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="flex pt-6">
            <p className="grow font-popi text-xl font-medium">People</p>
            <p className="flex items-center font-popi text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              144
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
