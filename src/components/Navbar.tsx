import { FunctionComponent } from "react";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] border-deeppink border-solid border-b-[3px] box-border w-[1440px] h-[125px] overflow-hidden text-center text-5xl text-gray-500 font-aoboshi-one ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[125px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[125px]">
          <div className="absolute top-[0px] left-[0px] w-[1440px] h-[125px]">
            <div className="absolute top-[0px] left-[0px] bg-pink w-[1440px] h-[125px]" />
          </div>
          <div className="absolute top-[calc(50%_-_54.5px)] left-[calc(50%_-_325px)] bg-pink h-[108px] flex flex-row items-start justify-start">
            <div className="w-[130px] h-[116px] flex flex-row items-center justify-center p-3xs box-border">
              <div className="relative leading-[40px]">Home</div>
            </div>
            <div className="w-[130px] h-[108px] flex flex-row items-center justify-center p-3xs box-border">
              <div className="relative leading-[40px]">About</div>
            </div>
            <div className="w-[130px] h-[108px] flex flex-row items-center justify-center p-3xs box-border">
              <div className="relative leading-[40px]">Skills</div>
            </div>
            <div className="w-[130px] h-[108px] flex flex-row items-center justify-center p-3xs box-border">
              <div className="relative leading-[40px]">Projects</div>
            </div>
            <div className="w-[130px] h-[108px] flex flex-row items-center justify-center p-3xs box-border">
              <div className="relative leading-[40px]">Contact</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[31px] left-[26px] text-29xl leading-[40px] font-medium font-kbtruebeliever flex items-center justify-center w-[314px] h-[68px]">
          Miruna Spineanu
        </div>
      </div>
    </div>
  );
};

export default Navbar;
