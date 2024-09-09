import { useState } from "react";

interface User {
  name: string;
  job: string;
  avatar: string;
  tags: string[];
}

const users: User[] = [
  {
    name: "John Doe",
    job: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    name: "Jane Smith",
    job: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    tags: ["Figma", "Sketch", "Photoshop"],
  },
  {
    name: "Michael Brown",
    job: "DevOps Engineer",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    tags: ["Docker", "AWS", "Kubernetes"],
  },
  {
    name: "Emily Davis",
    job: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    tags: ["Agile", "Scrum", "Leadership"],
  },
  {
    name: "David Wilson",
    job: "Data Scientist",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    tags: ["Python", "Machine Learning", "Pandas"],
  },
  {
    name: "Sophia Martinez",
    job: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    tags: ["JavaScript", "CSS", "HTML"],
  },
];

export const UserList = () => {
  const filters = [
    "Repulation",
    "New users",
    "Voters",
    "Editors",
    "Moderators",
  ];

  const [query, setQuery] = useState("");
  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div className="min-w-[40rem] rounded-lg bg-white p-16 shadow">
      <h1 className="font-meri text-3xl font-black">Users</h1>

      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        <div>
          <div className="relative grow rounded-md border-2 border-gray-300">
            <input
              type="text"
              className="mr-2 w-full px-4 py-3 pl-10"
              placeholder="Search users"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <div className="space-x-2">
          {filters.map((item) => {
            return (
              <a
                className="inline-block rounded-lg bg-white px-4 py-3 hover:bg-[#849FFF] hover:text-white"
                href={item}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filterUsers.map((user) => (
          <div
            key={user.name}
            className="flex gap-x-4 rounded-2xl bg-[#FBFCFF] p-6 hover:border-[1px] hover:border-[#BFC8E5] hover:shadow-lg"
          >
            <img src={user.avatar} alt="" className="h-24 w-24 rounded-full" />

            <div>
              <h3 className="font-meri font-black">{user.name}</h3>
              <p className="font-popi text-sm">{user.job}</p>
              <div className="space-x-2">
                {user.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full border-[1px] border-slate-500 p-1 text-xs text-[#516FD4]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
