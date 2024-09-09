import { ReactNode } from "react";

export interface JobProps {
  title: string;
  icon: ReactNode;
  bgClass: string;
}

export const Job: React.FC<JobProps> = ({ title, icon, bgClass }) => {
  return (
    <div
      className={`${bgClass} flex flex-col items-center justify-center rounded-lg p-4`}
    >
      {icon}
      <p className="pt-4 font-popi">{title}</p>
    </div>
  );
};
