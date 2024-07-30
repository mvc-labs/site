import React from "react";
import topcoin from "../assets/top-img.png";
import iconDefault from "../assets/Icon.png";
import topflowchart from "../assets/topflowchart.png";
import bottomflowchart from "../assets/bottomflowchart.png";
import vector from "../assets/vector.png";

const BuilderGrant: React.FC = () => {
  const handlePushTo = (type: any) => {
    let url;
    switch (type) {
      case "1":
        url =
          "https://docs.google.com/presentation/d/1sSts6cvLgjEt2z85EW871K8v8pPdXaj8c6YwRcqdcCs/mobilepresent?slide=id.p";
        break;
      case "2":
        url = "https://docs.google.com/forms/d/e/1FAIpQLSdFjLdz_--l5lkfUvQGRb3c3YpimoVj7awGdlSgX9qFIr8UYg/viewform";
        break;
      case "3":
        url =
          "https://www.show3.io/talk/channels/mvc.metaid/index";
        break;
      case "4":
        url =
          "https://mvcdao.gitbook.io/mvc-dao/future-discussion/builder-program-grant-and-reward-program-rules";
        break;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="container box-border pt-12">
      <div className="flex items-center box-border border-solid border-[#3D3D3D] border-b pb-10 pt-20 relative">
        <div className="font-bold leading-tight text-2xl md:text-3xl lg:text-4xl lg:leading-tight xl2:text-title">
          <div>Builder Grant</div>
          <div className="text-gradient">250,000 $SPACE</div>
        </div>
        <img
          src={topcoin}
          alt=""
          className="w-[82px] h-[57px] md:w-[328px] md:h-[229px] ml-8"
        />
        <img src={vector} alt="" className="absolute top-0" />
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 text-lg text-white mt-20">
        <div className="flex-1">
          <p>
            The MVC Proof of Build Program aims to boost contributions to the
            MVC ecosystem, fostering innovation in BTCfi, dApps, and
            decentralized services. Managed by MVCDAO, developers can apply
            individually or in teams for funding up to 250,000 SPACE per
            quarter. The process involves submitting project details, undergoing
            review, potential revisions, and final approval either by committee
            consent or DAO on-chain voting.
          </p>
        </div>
        <div className="flex-1">
          <p>
            Successful projects receive rewards divided into three parts over
            three months, ensuring ongoing support and incentivizing continued
            development. This structured approach promotes transparency and
            accountability, driving the growth of the MVC ecosystem while
            unlocking the full potential of Bitcoin and Web3 technologies.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-20">
        <div
          className="inline-flex items-center group cursor-pointer mb-4 md:mr-14 md:mb-0"
          onClick={() => handlePushTo("1")}
        >
          <div className="text-base font-bold mr-4 lg:text-[22px] transition-transform transform duration-500 ease-in-out group-hover:translate-x-1">
            PROGRAM DETAIL
          </div>
          <img
            src={iconDefault}
            alt="Icon"
            className="w-10 h-10 transition-all duration-500 ease-in-out transform group-hover:-translate-x-1 group-hover:brightness-125 group-hover:contrast-150"
          />
        </div>
        <div className="inline-flex items-center group cursor-pointer mb-4 md:mr-14 md:mb-0" onClick={() => handlePushTo("2")}>
          <div className="text-base font-bold mr-4 lg:text-[22px] transition-transform transform duration-500 ease-in-out group-hover:translate-x-1">
            APPLY NOW
          </div>
          <img
            src={iconDefault}
            alt="Icon"
            className="w-10 h-10 transition-all duration-500 ease-in-out transform group-hover:-translate-x-1 group-hover:brightness-125 group-hover:contrast-150"
          />
        </div>
        <div className="inline-flex items-center group cursor-pointer" onClick={() => handlePushTo("3")}>
          <div className="text-base font-bold mr-4 lg:text-[22px] transition-transform transform duration-500 ease-in-out group-hover:translate-x-1">
            VOTE FOR OTHER PROJECTS
          </div>
          <img
            src={iconDefault}
            alt="Icon"
            className="w-10 h-10 transition-all duration-500 ease-in-out transform group-hover:-translate-x-1 group-hover:brightness-125 group-hover:contrast-150"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-28">
        <div className="text-innersubtitle leading-tight mb-4 md:mb-0">
          <div>POB Procedure</div>
          <div className="text-gradient">(Dapps with full completion)</div>
        </div>
        <div className="inline-flex items-center group cursor-pointer" onClick={() => handlePushTo("4")}>
          <div className="text-base font-bold mr-4 lg:text-[22px] transition-transform transform duration-500 ease-in-out group-hover:translate-x-1">
            POB PROGRAM RULES
          </div>
          <img
            src={iconDefault}
            alt="Icon"
            className="w-10 h-10 transition-all duration-500 ease-in-out transform group-hover:-translate-x-1 group-hover:brightness-125 group-hover:contrast-150"
          />
        </div>
      </div>
      <div className="box-border border-solid border-[#3D3D3D] border-b flex justify-center w-full items-center pb-28 mt-20">
        <img src={topflowchart} alt="" className="max-h-full max-w-full" />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-28">
        <div className="text-innersubtitle leading-tight mb-4 md:mb-0">
          <div>POB Procedure</div>
          <div className="text-gradient">(Planning to Build)</div>
        </div>
        <div className="inline-flex items-center group cursor-pointer" onClick={() => handlePushTo("4")}>
          <div className="text-base font-bold mr-4 lg:text-[22px] transition-transform transform duration-500 ease-in-out group-hover:translate-x-1">
            POB PROGRAM RULES
          </div>
          <img
            src={iconDefault}
            alt="Icon"
            className="w-10 h-10 transition-all duration-500 ease-in-out transform group-hover:-translate-x-1 group-hover:brightness-125 group-hover:contrast-150"
          />
        </div>
      </div>
      <div className="box-border flex justify-center w-full items-center pb-28 mt-20">
        <img src={bottomflowchart} alt="" className="max-h-full max-w-full" />
      </div>
    </div>
  );
};

export default BuilderGrant;
