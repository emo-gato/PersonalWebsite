import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import ImageCanvas from "../components/ImageCanvas";
import ProjectComponent from "../components/ProjectComponent";

const MirunaSpineanuPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-snow h-[5617px] overflow-hidden text-left text-51xl text-pencil-thick font-kalam">
      <Navbar />
      <div className="absolute top-[605px] left-[66px] flex flex-col items-start justify-start text-5xl text-gray-300 font-inter">
        <div className="flex flex-col items-start justify-start">
          <div className="w-[525px] relative leading-[34px] inline-block">
            <span>{`Hi, my name is `}</span>
            <b>Miruna Spineanu</b>
            <span>{` and I am a Computer Science student who is passionate about making things look pretty. Take a look at my work! `}</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[955px] left-[142px] rounded-[10px] w-[374px] h-[34px] flex flex-col items-start justify-start opacity-[0.7] text-5xl text-gray-300 font-inter">
        <div className="flex flex-col items-start justify-start">
          <div className="w-[374px] relative leading-[34px] inline-block">
            <i>{`Currently based in `}</i>
            <i className="font-bold">Metz, France</i>
          </div>
        </div>
      </div>
      <b className="absolute top-[1183px] left-[111px] leading-[125%] inline-block w-[1027px]">{`Web Interfaces Work `}</b>
      <b className="absolute top-[3042px] left-[111px] leading-[125%] inline-block w-[1027px]">
        Graphic Design and Illustration
      </b>
      <b className="absolute top-[4001px] left-[111px] leading-[125%] inline-block w-[1027px]">
        Want to work together?
      </b>
      <div className="absolute top-[307px] left-[66px] w-[603px] h-[264px]">
        <b className="absolute top-[0px] left-[0px] leading-[125%] inline-block w-[603px]">
          <p className="m-0">
            <span className="text-pencil-thick">{`Hi, I am `}</span>
            <span className="text-hotpink">Miruna</span>
            <span>.</span>
          </p>
          <p className="m-0">Welcome to my Portfolio :)</p>
        </b>
      </div>
      <img
        className="absolute h-[0.98%] w-[4.09%] top-[4.98%] right-[56.67%] bottom-[94.04%] left-[39.24%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute h-[0.67%] w-[2.23%] top-[5.03%] right-[59.02%] bottom-[94.3%] left-[38.75%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/vector1.svg"
      />
      <ImageCanvas />
      <img
        className="absolute w-[6.94%] top-[calc(50%_-_1434.3px)] right-[87.78%] left-[5.28%] max-w-full overflow-hidden h-[107.6px] object-contain"
        alt=""
        src="/star-4.svg"
      />
      <div className="absolute top-[1308px] left-[224px] shadow-[0px_6px_64px_rgba(112,_144,_176,_0.1)] rounded-3xl border-gray-600 border-solid border-[1px] box-border w-[992px] h-[524px] overflow-hidden flex flex-row items-start justify-start text-21xl text-font-high-emphasis">
        <div className="w-[496px] relative bg-bg-white h-[524px]">
          <div className="absolute w-[82%] top-[calc(50%_-_129px)] right-[7.84%] left-[10.16%] flex flex-col items-start justify-start gap-6">
            <b className="self-stretch relative leading-[150%]">
              Nokia React Project
            </b>
            <div className="self-stretch relative text-5xl leading-[150%] text-font-medium-emphasis font-nunito">
              <span>{`Created this Auditorium Rental React website under the supervising of `}</span>
              <i className="font-bold">Nokia Timișoara</i>
              <i>.</i>
            </div>
            <div className="rounded bg-pink flex flex-row items-start justify-start py-2 px-6 text-lg font-roboto">
              <div className="relative leading-[150%] font-medium">
                View Project
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[496px] relative h-[526px] object-cover"
          alt=""
          src="/auditorium-rental-1@2x.png"
        />
      </div>
      <ProjectComponent />
      <div className="absolute top-[2443px] left-[224px] shadow-[0px_6px_64px_rgba(112,_144,_176,_0.1)] rounded-3xl border-gray-600 border-solid border-[1px] box-border h-[524px] overflow-hidden flex flex-row items-start justify-start text-21xl text-font-high-emphasis">
        <div className="w-[496px] relative bg-bg-white h-[524px]">
          <div className="absolute w-[82%] top-[calc(50%_-_129px)] right-[7.84%] left-[10.16%] flex flex-col items-start justify-start gap-6">
            <b className="self-stretch relative leading-[150%]">
              AI Startup Page
            </b>
            <div className="self-stretch relative text-5xl leading-[150%] font-nunito text-font-medium-emphasis">
              You can also add in this description the type of the project, if
              it was for web, mobile, electron.
            </div>
            <div className="rounded bg-pink flex flex-row items-start justify-start py-2 px-6 text-lg font-roboto">
              <div className="relative leading-[150%] font-medium">
                View Project
              </div>
            </div>
          </div>
        </div>
        <div className="w-[496px] relative bg-ghostwhite-200 border-gray-600 border-solid border-l-[1px] box-border h-[524px]" />
      </div>
      <img
        className="absolute h-[1.89%] w-[7.38%] top-[14.74%] right-[60.75%] bottom-[83.37%] left-[31.88%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group.svg"
      />
      <img
        className="absolute h-[1.89%] w-[7.38%] top-[14.79%] right-[73.73%] bottom-[83.32%] left-[18.9%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group1.svg"
      />
      <img
        className="absolute h-[1.89%] w-[7.38%] top-[14.74%] right-[86.72%] bottom-[83.37%] left-[5.9%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group2.svg"
      />
      <div className="absolute top-[1311px] left-[720px] w-0 h-[511px]" />
      <img
        className="absolute top-[2540px] left-[737px] rounded-mini w-[461px] h-[329px] object-cover"
        alt=""
        src="/image-65@2x.png"
      />
      <img
        className="absolute w-[4.86%] top-[calc(50%_-_959.5px)] right-[9.03%] left-[86.11%] max-w-full overflow-hidden h-[86px]"
        alt=""
        src="/star-1.svg"
      />
      <img
        className="absolute w-[3.54%] top-[calc(50%_-_1241.5px)] right-[5.49%] left-[90.97%] max-w-full overflow-hidden h-[95px]"
        alt=""
        src="/star-9.svg"
      />
      <img
        className="absolute w-[4.86%] top-[calc(50%_-_335.5px)] right-[86.39%] left-[8.75%] max-w-full overflow-hidden h-[86px]"
        alt=""
        src="/star-1.svg"
      />
      <img
        className="absolute w-[4.75%] top-[calc(50%_-_432.5px)] right-[11.78%] left-[83.47%] max-w-full overflow-hidden h-[67px] object-contain"
        alt=""
        src="/star-7.svg"
      />
      <img
        className="absolute w-[3.87%] top-[calc(50%_-_984.5px)] right-[78.7%] left-[17.43%] max-w-full overflow-hidden h-[54.8px] object-contain"
        alt=""
        src="/star-8.svg"
      />
      <img
        className="absolute w-[4.49%] top-[calc(50%_-_113.5px)] right-[9.06%] left-[86.46%] max-w-full overflow-hidden h-[62.9px] object-contain"
        alt=""
        src="/star-11.svg"
      />
      <img
        className="absolute w-[2.92%] top-[calc(50%_-_350.5px)] right-[85.42%] left-[11.67%] max-w-full overflow-hidden h-[51px]"
        alt=""
        src="/star-6.svg"
      />
    </div>
  );
};

export default MirunaSpineanuPage;
