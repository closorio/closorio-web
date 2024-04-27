import React from "react";

interface Props {
  title: string;
  company: string;
  description: string;
  link?: string;
  date: string;
}

const ExperienceItem: React.FC<Props> = ({ title, company, description, link, date }) => (
  <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-primary/20 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4">
    <div className="relative pb-12 md:col-span-2">
      <div className="sticky top-0">
        <span className="text-primary -left-[42px] absolute rounded-full text-2xl">▶</span>
        <h3 className="text-xl font-bold text-gray-600">{title}</h3>
        <h4 className="font-semibold text-lg text-gray-500">{company}</h4>
        <time className="p-0 m-0 text-sm text-gray-600/80 ">{date}</time>
      </div>
    </div>
    <div className="relative flex flex-col gap-2 pb-4 text-slate-500  md:col-span-3">
      {description}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary">
          Ver más
        </a>
      )}
    </div>
  </div>
);

export default ExperienceItem;
