import { ReactNode } from "react";

export interface JobProps {
  title: String;
  icon: ReactNode;
  bgClass: String;
}

export const Job: React.FC<JobProps> = ({ title, icon, bgClass }) => {
  return (
    <div
      className={`${bgClass} flex flex-col items-center justify-center rounded-lg p-4`}
    >
      {icon}
      <p className="font-popi pt-4">{title}</p>
    </div>
  );
};
