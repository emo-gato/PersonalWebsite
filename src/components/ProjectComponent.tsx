import { FunctionComponent } from "react";

export type ProjectComponentType = {
  className?: string;
};

const ProjectComponent: FunctionComponent<ProjectComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[1874px] left-[224px] shadow-[0px_6px_64px_rgba(112,_144,_176,_0.1)] rounded-3xl border-gray-600 border-solid border-[1px] box-border h-[524px] overflow-hidden flex flex-row items-start justify-start text-left text-21xl text-font-high-emphasis font-kalam ${className}`}
    >
      <div className="w-[496px] relative bg-ghostwhite-100 h-[524px] z-[0]" />
      <div className="w-[496px] relative bg-bg-white border-gray-600 border-solid border-l-[1px] box-border h-[524px] z-[1]">
        <div className="absolute w-[82%] top-[calc(50%_-_111px)] right-[7.84%] left-[10.16%] flex flex-col items-start justify-start gap-6">
          <b className="self-stretch relative leading-[150%]">
            Spending Tracker
          </b>
          <div className="self-stretch relative text-5xl leading-[150%] text-font-medium-emphasis font-nunito">
            <span>{`Spending Tracker App done as a project for University in `}</span>
            <b>Angular</b>
            <span>.</span>
          </div>
          <div className="rounded bg-pink flex flex-row items-start justify-start py-2 px-6 text-lg font-roboto">
            <div className="relative leading-[150%] font-medium">
              View Project
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[469.6px] absolute !m-[0] top-[51px] left-[13px] rounded-xl max-h-full object-cover z-[2]"
        alt=""
        src="/landingpage-1@2x.png"
      />
    </div>
  );
};

export default ProjectComponent;
