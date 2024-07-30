import { useEffect, useState, useRef } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { message } from "antd";
import iconClose from "../assets/icon_close.png";
import imgCoin from "../assets/imgCoin.png";
import placard from "../assets/placard.png";
import iconDefault from "../assets/Icon.png";
import mainLogo from "../assets/mainlogo.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Icon5 from "../assets/icon5.png";
import Icon6 from "../assets/icon6.png";
import Icon7 from "../assets/icon7.png";
import Icon8 from "../assets/icon8.png";
import Icon9 from "../assets/icon9.png";
import Icon10 from "../assets/icon10.png";
import rang from "../assets/rang.png";
import Scroll from "../assets/scroll.png";
import iconArrow from "../assets/Icon4.png";
import colorRang from "../assets/colorrang.png";
import videoSrc from "../assets/video2.mp4";
import posterSrc from "../assets/videobg2.jpg";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";
import bg5 from "../assets/bg5.png";
import bg6 from "../assets/bg6.png";
import bg7 from "../assets/bg7.png";
import Imagecontainer1 from "../assets/Imagecontainer1.png";
import Imagecontainer2 from "../assets/Imagecontainer2.png";
import Imagecontainer3 from "../assets/Imagecontainer3.png";
import useIntersectionObserver from "../useIntersectionObserver.tsx";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const secondScreenRef = useRef(null);
  //@ts-ignore
  const textRef1 = useIntersectionObserver();
  //@ts-ignore
  const textRef2 = useIntersectionObserver();
  //@ts-ignore
  const imgRef = useIntersectionObserver();
  const testimonials = [
    {
      iconIndex: "1",
      name: "ANTPOOL",
    },
    {
      iconIndex: "2",
      name: "BitMart",
    },
    {
      iconIndex: "3",
      name: "BingX",
    },
    {
      iconIndex: "4",
      name: "Bitget",
    },
    {
      iconIndex: "5",
      name: "BITROO",
    },
    {
      iconIndex: "6",
      name: "BVM",
    },
    {
      iconIndex: "7",
      name: "Certik",
    },
    {
      iconIndex: "8",
      name: "CoinGecko",
    },
    {
      iconIndex: "9",
      name: "CoinMarketCap",
    },
    {
      iconIndex: "10",
      name: "CoinW",
    },
    {
      iconIndex: "11",
      name: "Fish_Pool",
    },
    {
      iconIndex: "12",
      name: "Gate.io",
    },
    {
      iconIndex: "13",
      name: "Mexc",
    },
    {
      iconIndex: "14",
      name: "RocketX",
    },
    {
      iconIndex: "15",
      name: "sCrypt",
    },
    {
      iconIndex: "16",
      name: "Uniport",
    },
    {
      iconIndex: "17",
      name: "VisionMoney",
    },
    {
      iconIndex: "18",
      name: "Xt",
    },
  ];
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const warning = () => {
    // message.warning('coming soon')
    message.warning({
      duration: 2,
      content: "coming soon",
      className: "notice-text",
    });
  };
  const handleLinkTo = () => {
    window.open(
      "https://docs.google.com/presentation/u/0/d/1sSts6cvLgjEt2z85EW871K8v8pPdXaj8c6YwRcqdcCs/mobilepresent",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const scrollToSecondScreen = () => {
    if (secondScreenRef.current) {
      const navbarHeight = 48;
      //@ts-ignore
      const offset = secondScreenRef.current.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
      // secondScreenRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleReadMoreClick = (type: any) => {
    let url;
    switch (type) {
      case "1":
        url =
          "https://cointelegraph.com/news/bitcoin-sidechain-developers-prepare-brc20-dex-launch";
        break;
      case "2":
        url = "https://www.binance.com/en/square/post/3259140848081";
        break;
      case "3":
        url =
          "https://cointelegraph.com/press-releases/microvisionchain-announce-mvc-20-the-first-protocol-for-free-minting-assets-on-the-bitcoin-sidechain";
        break;
      case "4":
        url =
          "https://www.bitcoininsider.org/article/235490/developers-bitcoin-sidechain-mvc-prepare-brc-20-dex-launch";
        break;
      case "5":
        url = "https://www.odaily.news/newsflash/361912?source=share";
        break;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);
  return (
    <>

      <div className="lg:h-[100dvh] box-border bg-hero-pattern bg-no-repeat bg-center bg-contain relative">
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-[80%] md:w-[560px] rounded shadow-lg bg-placard-img">
              {/* <button
              className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              &times;
            </button> */}
              {/* 弹窗内容 */}
              <img
                src={iconClose}
                alt=""
                className="w-8 h-8 md:w-12 md:h-12 absolute -top-8 -right-8 md:-top-11 md:-right-11 cursor-pointer"
                onClick={handleCloseModal}
              />
              <img
                src={imgCoin}
                alt=""
                className="absolute w-[43px] h-[49px] -top-6 md:w-[86px] md:h-[95px] md:-top-12 left-1/2"
              />
              <img src={placard} alt="" className="md:w-[560px] md:h-[424px]" />
              <div className="flex flex-col md:flex-row justify-center pl-4 py-4 md:py-12 md:pl-0">
                <div
                  className="text-xl inline-flex items-center group cursor-pointer"
                  onClick={handleCloseModal}
                >
                  <div className="text-base font-bold mr-4 transition-transform transform duration-500 ease-in-out group-hover:translate-x-1">
                    ENTER THE WEBSITE
                  </div>
                  <img
                    src={iconDefault}
                    alt="Icon"
                    className="w-10 h-10 transition-all duration-500 ease-in-out transform group-hover:-translate-x-1 group-hover:brightness-125 group-hover:contrast-150"
                  />
                </div>
                <div
                  className="text-xl inline-flex items-center group cursor-pointer mt-6 md:mt-0 md:ml-12"
                  onClick={handleLinkTo}
                >
                  <div className="text-base font-bold mr-4 transition-transform transform duration-500 ease-in-out group-hover:translate-x-1">
                    LEARN MORE
                  </div>
                  <img
                    src={iconDefault}
                    alt="Icon"
                    className="w-10 h-10 transition-all duration-500 ease-in-out transform group-hover:-translate-x-1 group-hover:brightness-125 group-hover:contrast-150"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container relative pt-20 lg:pt-[6rem] 2xl:pt-40">
          {/* <div className="container relative pt-20 lg:pt-[18vh]"> */}
          <div className="font-bold leading-tight text-2xl md:text-3xl lg:text-4xl lg:leading-tight xl2:text-title">
            The Blockchain for
          </div>
          <div className="font-bold leading-tight text-2xl md:text-3xl lg:text-4xl lg:mb-4 lg:leading-tight xl2:text-title 2xl:mb-8">
            BTC and Web3
          </div>
          {/* <div className="font-bold text-2xl md:text-[4.1vw] leading-none">
              The Blockchain
            </div>
            <div className="font-bold mb-[1vw] text-[4.1vw] leading-none">
              for Web3
            </div> */}
          <div className="block md:hidden mt-4 mb-6">
            <div className="text-sm font-normal">
              AS AN IDEAL BITCOIN SIDECHAIN WITH DID SOLUTIONS, MVC UNLOCKS
              BITCOIN'S POTENTIAL FOR DAILY TRANSACTIONS AND WEB3 APPLICATIONS.
            </div>
          </div>
          <div className="hidden md:block">
            <div className="text-sm font-normal">
              AS AN IDEAL BITCOIN SIDECHAIN WITH DID SOLUTIONS, MVC
            </div>
            <div className="text-sm font-normal">
              UNLOCKS BITCOIN'S POTENTIAL FOR DAILY TRANSACTIONS AND
            </div>
            <div className="text-sm font-normal mb-4 xl2:mb-8">
              WEB3 APPLICATIONS.
            </div>
          </div>
          {/* <div className="text-xl inline-flex items-center group cursor-pointer 2xl:mb-8">
              <div className="text-base font-bold mr-6 lg:text-[22px] transition-transform transform duration-500 ease-in-out group-hover:translate-x-1">
                GET STARTED
              </div>
              <img
                src={iconDefault}
                alt="Icon"
                className="w-10 h-10 transition-all duration-500 ease-in-out transform group-hover:-translate-x-1 group-hover:brightness-125 group-hover:contrast-150"
              />
            </div> */}

          <div
            className="text-xl inline-flex items-center group cursor-pointer mb-[8px] xl2:mb-4 2xl:mb-8"
            onClick={warning}
          >
            <div className="text-base font-bold mr-4 lg:text-[22px] transition-transform transform duration-500 ease-in-out group-hover:translate-x-1">
              GET STARTED
            </div>
            <img
              src={iconDefault}
              alt="Icon"
              className="w-10 h-10 transition-all duration-500 ease-in-out transform group-hover:-translate-x-1 group-hover:brightness-125 group-hover:contrast-150"
            />
          </div>

          <div className="flex flex-col sm:flex-row mt-8 mb-8 lg:mt-0 lg:mb-0 items-center w-full lg:justify-end">
            <div
              className="w-full sm:w-[32%] sm:mr-[2%] sm:mb-0 cursor-pointer p-4 h-56 bg-no-repeat mb-4 lg:mr-6 lg:mb-0 lg:p-2 lg:w-48 lg:h-44 xl:p-4 xl:h-48 xl2:w-52 xl2:h-52 2xl:h-56 2xl:p-4 2xl:w-60 bg-gradient-to-br from-black/50 to-black/25 backdrop-blur bg-custom-img border border-gray-700 rounded-bl-2xl relative hover:translate-x-2 transition duration-300"
              onClick={warning}
            >
              <img src={Icon5} alt="" className="w-16 h-16 mb-6" />
              <div className="mb-8 text-base 2xl:mb-12 2xl:text-xl">
                SCALING BITCOIN
              </div>

              <div className="absolute group bottom-4 right-4 inline-flex cursor-pointer items-center">
                <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                  Read more
                </div>
                <img
                  src={iconArrow}
                  alt="Arrow Icon"
                  className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
                />
              </div>
            </div>
            {/* <div className="w-[12vw] h-[26vh] mr-[0.75vw] p-[2vh] bg-gradient-to-br from-black/50 to-black/25 backdrop-blur bg-custom-img border border-gray-700 rounded-bl-2xl relative hover:translate-x-2 transition duration-300">
                <img src={Icon5} alt="" className="w-16 h-16 mb-6" />
                <div className="text-[0.8vw]">
                  SCALING BITCOIN
                </div>

                <div className="absolute group bottom-4 right-4 inline-flex cursor-pointer items-center">
                  <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                    Read more
                  </div>
                  <img
                    src={iconArrow}
                    alt="Arrow Icon"
                    className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
                  />
                </div>
              </div> */}

            <div
              className="w-full sm:w-[32%] sm:mr-[2%] sm:mb-0 cursor-pointer p-4 h-56 bg-no-repeat mb-4 lg:mb-0 lg:p-2 lg:w-48 lg:h-44 xl:p-4 xl:h-48 xl2:w-52 xl2:h-52 2xl:h-56 2xl:p-4 lg:mr-6 2xl:w-60 bg-gradient-to-br from-black/50 to-black/25 backdrop-blur bg-custom-img border border-gray-700 rounded-bl-2xl relative hover:translate-x-2 transition duration-300"
              onClick={warning}
            >
              <img src={Icon6} alt="" className="w-16 h-16 mb-6" />
              <div className="mb-8 text-base 2xl:mb-12 2xl:text-xl">
                ONBOARD WEB3
              </div>
              <div className="absolute group bottom-4 right-4 inline-flex cursor-pointer items-center">
                <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                  Read more
                </div>
                <img
                  src={iconArrow}
                  alt="Arrow Icon"
                  className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
                />
              </div>
            </div>
            {/* <div className="w-[12vw] h-[26vh] mr-[0.75vw] p-[2vh] bg-gradient-to-br from-black/50 to-black/25 backdrop-blur bg-custom-img border border-gray-700 rounded-bl-2xl relative hover:translate-x-2 transition duration-300">
                <img src={Icon6} alt="" className="w-16 h-16 mb-6" />
                <div className="mb-8 text-base 2xl:mb-12 2xl:text-xl">
                  ONBOARD WEB3
                </div>
                <div className="absolute group bottom-4 right-4 inline-flex cursor-pointer items-center">
                  <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                    Read more
                  </div>
                  <img
                    src={iconArrow}
                    alt="Arrow Icon"
                    className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
                  />
                </div>
              </div> */}
            <div
              className="w-full sm:w-[32%] cursor-pointer p-4 h-56 bg-no-repeat lg:p-2 lg:w-48 lg:h-44 xl:p-4 xl:h-48 xl2:w-52 xl2:h-52  2xl:h-56 2xl:p-4 2xl:w-60 bg-gradient-to-br from-black/50 to-black/25 backdrop-blur bg-custom-img border border-gray-700 rounded-bl-2xl relative hover:translate-x-2 transition duration-300"
              onClick={warning}
            >
              <img src={Icon7} alt="" className="w-16 h-16 mb-6" />
              <div className="mb-8 text-base 2xl:mb-12 2xl:text-xl">
                BUILD TOGETHER
              </div>
              <div className="absolute group bottom-4 right-4 inline-flex cursor-pointer items-center">
                <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                  Read more
                </div>
                <img
                  src={iconArrow}
                  alt="Arrow Icon"
                  className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
                />
              </div>
            </div>
            {/* <div className="w-[12vw] h-[26vh] mr-[0.75vw] p-[2vh] bg-gradient-to-br from-black/50 to-black/25 backdrop-blur bg-custom-img border border-gray-700 rounded-bl-2xl relative hover:translate-x-2 transition duration-300">
                <img src={Icon7} alt="" className="w-16 h-16 mb-6" />
                <div className="mb-8 text-base 2xl:mb-12 2xl:text-xl">
                  BUILD TOGETHER
                </div>
                <div className="absolute group bottom-4 right-4 inline-flex cursor-pointer items-center">
                  <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                    Read more
                  </div>
                  <img
                    src={iconArrow}
                    alt="Arrow Icon"
                    className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
                  />
                </div>
              </div> */}
          </div>
          <div className="hidden lg:flex absolute bottom-0 left-[2rem]">
            <div className="flex items-center group cursor-pointer">
              <img
                src={Icon2}
                alt=""
                className="w-4 h-4 mr-2 transition-filter duration-500 ease-in-out group-hover:brightness-125 group-hover:contrast-150"
              />
              <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white">
                Scalability
              </div>
            </div>
            <div className="flex items-center ml-12 group cursor-pointer">
              <img
                src={Icon2}
                alt=""
                className="w-4 h-4 mr-2 transition-filter duration-500 ease-in-out group-hover:brightness-125 group-hover:contrast-150"
              />
              <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white">
                Decentralized ID
              </div>
            </div>
          </div>
          <div className="hidden lg:flex absolute lg:top-[6rem] 2xl:top-32 right-[2rem]">
            <div className="flex items-center group cursor-pointer">
              <img
                src={Icon2}
                alt=""
                className="w-4 h-4 mr-2 transition-filter duration-500 ease-in-out group-hover:brightness-125 group-hover:contrast-150"
              />
              <img src={Icon3} alt="" className="w-4 h-4 mr-1" />
              <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white">
                Bitcoin
              </div>
            </div>
            <div className="flex items-center ml-12 group cursor-pointer">
              <img
                src={Icon2}
                alt=""
                className="w-4 h-4 mr-2 transition-filter duration-500 ease-in-out group-hover:brightness-125 group-hover:contrast-150"
              />
              <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white">
                Smart Contract
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:bottom-2 absolute ab-center 2xl:bottom-7">
          <img
            src={Scroll}
            alt=""
            onClick={scrollToSecondScreen}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="container" ref={secondScreenRef}>
        <div className="mb-12">
          <div
            ref={textRef1}
            className="text-left text-subtitle leading-tight mb-8 xl2:leading-none 2xl:mb-32"
          >
            <div>A UTXO model blockchain</div>
            <div>
              built to <span className="text-gradient">8 billion</span>
            </div>
            <div>users in mind.</div>
          </div>
          <div ref={imgRef} className="flex justify-center">
            <img
              src={colorRang}
              alt=""
              className="img-center w-8 md:w-16 xl:w-auto"
            />
          </div>

          <div
            ref={textRef2}
            className="text-right text-subtitle leading-tight xl2:leading-none"
          >
            <div className="block md:hidden">
              <div>1:1 Satoshi Mapping</div>
              <div> makes our blockchain </div>
              <div className="inline-flex items-baseline">
                the ideal{" "}
                <img
                  src={Icon3}
                  alt=""
                  className="self-center w-6 h-6 lg:w-12 lg:h-12 rounded-full mr-2 ml-2"
                />
                BTC
              </div>
              <div>scaling solution.</div>
            </div>
            <div className="hidden md:block">
              <div>1:1 Satoshi Mapping makes</div>
              <div>our blockchain the ideal</div>
              <div className="inline-flex items-baseline">
                <img
                  src={Icon3}
                  alt=""
                  className="self-center w-6 h-6 lg:w-12 lg:h-12 rounded-full mr-4"
                />
                BTC scaling solution.
              </div>
            </div>
          </div>
        </div>
        <div>
          <video
            className="w-full rounded-lg shadow-lg"
            // ref={videoRef}
            poster={posterSrc}
            // onClick={handleVideoClick}
            controls
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* <iframe
              className="w-full h-[800px]"
              src="https://www.youtube.com/embed/6U166vZyqUg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
        </div>

        <div className="grid grid-cols-1 mt-8 mb-24 lg:mb-48 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            className="cursor-pointer border box-border border-solid border-[#3D3D3D] p-7 h-96 relative rounded-tl-3xl hover:translate-x-2 transition duration-300"
            onClick={warning}
          >
            <img
              src={Icon8}
              alt=""
              className="w-20 h-20 md:w-28 md:h-28 mb-8"
            />
            <div className="text-[22px] md:text-subhead mb-4 font-bold">
              KNOWLEDGE BASE
            </div>
            <div>
              <div className="text-sm text-[#86888B]">
                Discover the unique background and compelling advantages of MVC.
              </div>
            </div>
            <div className="flex items-center absolute right-7 bottom-7 group cursor-pointer">
              <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                Read more
              </div>
              <img
                src={iconArrow}
                alt="Arrow Icon"
                className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
              />
            </div>
          </div>
          <div
            className="cursor-pointer border box-border border-solid border-[#3D3D3D] p-7 h-96 relative rounded-tl-3xl hover:translate-x-2 transition duration-300"
            onClick={warning}
          >
            <img
              src={Icon9}
              alt=""
              className="w-20 h-20 md:w-28 md:h-28 mb-8"
            />
            <div className="text-[22px] md:text-subhead font-bold">
              DECENTRALIZED VIA
            </div>
            <div className="text-[22px] md:text-subhead mb-4 font-bold">
              PROOF-OF-WORK
            </div>
            <div>
              <div className="text-sm text-[#86888B]">
                $SPACE, our native gas, is mined using the SHA-256 algorithm;
                popularised by Bitcoin.
              </div>
            </div>
            <div className="flex items-center absolute right-7 bottom-7 group cursor-pointer">
              <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                Read more
              </div>
              <img
                src={iconArrow}
                alt="Arrow Icon"
                className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
              />
            </div>
          </div>
          <div
            className="cursor-pointer border box-border border-solid border-[#3D3D3D] p-7 h-96 relative rounded-tl-3xl hover:translate-x-2 transition duration-300"
            onClick={warning}
          >
            <img
              src={Icon10}
              alt=""
              className="w-20 h-20 md:w-28 md:h-28 mb-8"
            />
            <div className="text-[22px] md:text-subhead mb-4 font-bold">
              Why MVC
            </div>
            <div className="text-sm text-[#86888B]">
              The Revolutionary Sidechain of Bitcoin
            </div>
            <div className="flex items-center absolute right-7 bottom-7 group cursor-pointer">
              <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                Read more
              </div>
              <img
                src={iconArrow}
                alt="Arrow Icon"
                className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-20">
        <div className="flex py-8 flex-col box-border border-solid border-[#3D3D3D] border-y md:flex-row md:items-center justify-between md:py-16">
          <div className="text-subtitle leading-none">
            <div>Bitcoin</div>
            <div className="text-gradient">Micropayment</div>
          </div>
          <img
            src={rang}
            alt=""
            className="w-8 my-4 md:my-0 md:w-16 xl:w-auto"
          />
          <div>
            <div>MICROVISIONCHAIN MAKES EVERYDAY SPENDING AFFORDABLE,</div>
            <div>ON-CHAIN AND TRANSACTIONS WITH NEAR-ZERO FEES.</div>
          </div>
        </div>
      </div>

      <div className="container relative">
        {/* <div className="container flex flex-wrap md:flex-nowrap shadow-lg rounded-lg overflow-hidden"> */}
        {/* <div className="border box-border border-solid border-[#3D3D3D] h-[30rem] w-full md:w-3/5 p-8 mb-4 md:mb-0 md:mr-4">
            <div className="flex items-center mb-8">
              <img src={logo} alt="" className="w-[4.5rem] h-[4.5rem] mr-4" />
              <div>
                <div>MVC</div>
                <div className="text-[#86888B]">@mvcglobal</div>
              </div>
            </div>
            <div className="text-[#86888B] text-lg">
              <div className="mb-4">
                What are the goals of MicroVisionChain?
              </div>
              <div className="mb-4">1. The blockchain that WEB3 deserves.</div>
              <div className="mb-4">
                2. The home for BTCFi & BTC micropayments for day-to-day
                spending.
              </div>
              <div className="mb-4">3. $SPACEisDiscovery.</div>
              <div>4. Code first.</div>
            </div>
          </div>

          <div className="border box-border border-solid border-[#3D3D3D] p-4 h-[30rem] w-full md:w-2/5">
            <img src={videoBg} alt="" className="h-full" />
          </div> */}
        {/* //new */}
        <div className="flex items-center justify-between md:mb-4">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={mainLogo}
              alt="Main Logo"
              className="w-[75px] h-[20px] md:w-[150px] md:h-[41px]"
            />
            <div className="font-bold ml-6 text-lg md:text-3xl lg:text-4xl xl2:text-[48px]">
              The Blockchain For Web3
            </div>
          </div>
          <div className="group cursor-pointer hidden md:block">
            <img
              src={Icon2}
              alt=""
              className="w-7 h-7 transition-filter duration-500 ease-in-out group-hover:brightness-125 group-hover:contrast-150"
            />
          </div>
        </div>

        <div className="md:flex md:justify-between md:items-end">
          <div className="mt-4 mb-4 md:mb-0">
            <div className="text-base font-normal lg:text-[24px] xl2:text-[30px] mb-1">
              The Blockchain for Web3 Massive Applications
            </div>
            <div className="mb-1 text-base text-[#86888B]">
              Empower digital life, and every kind of digital asset.
            </div>
            <div className="text-base text-[#86888B]">
              MVC is reinventing the original Bitcoin design and bringing up a
              revolutionary
            </div>
          </div>
          <div className="text-right leading-none">
            <div className="text-base lg:text-[22px] xl2:text-2xl font-bold">
              Layer 1 Scaling Solution
            </div>
            <div className="text-base text-gradient lg:text-[22px] xl2:text-2xl font-bold mt-2 md:mt-6">
              Genesis Block Launched on 26 Jan 2023
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full items-center mt-10">
          <img
            src={bg5}
            alt=""
            className="max-h-full max-w-full hidden md:block"
          />
          <img src={bg6} alt="" className="w-full block md:hidden" />
        </div>
      </div>

      <div className="container mb-28 mt-24 lg:mt-36">
        <div className="flex py-8 flex-col box-border border-solid border-[#3D3D3D] border-y md:flex-row md:items-center justify-between md:py-16">
          <div className="text-subtitle leading-none">
            <div>The parallel</div>
            <div>universe of</div>
            <div>
              <span className="text-gradient">Bitcoin</span>
            </div>
          </div>
          <img
            src={rang}
            alt=""
            className="w-8 my-4 md:my-0 md:w-16 xl:w-auto"
          />
          <div>
            <div>
              MVC IS THE ONLY SOLUTION FOR BITCOIN SCALING THAT USES BITCOIN
            </div>
            <div>
              CORE CODE TO RECURSIVELY SCALE ENDLESS LAYERS ON THE MOST SECURE
            </div>
            <div>BLOCKCHAIN GLOBALLY.</div>
          </div>
        </div>
      </div>

      <div className="container mb-24">
        <div className="box-border border-solid border-[#3D3D3D] border-t flex justify-center w-full items-center pt-14">
          <img src={bg2} alt="" className="max-h-full max-w-full" />
        </div>
      </div>

      <div
        className="container flex items-center justify-center mt-16 mb-20 lg:mb-40 group cursor-pointer"
        onClick={warning}
      >
        <div className="text-base font-bold mr-6 lg:text-3xl transition-transform transform duration-500 ease-in-out group-hover:translate-x-1">
          LEARN MORE
        </div>
        <img
          src={iconDefault}
          alt="Icon"
          className="w-10 h-10 transition-all duration-500 ease-in-out transform group-hover:-translate-x-1 group-hover:brightness-125 group-hover:contrast-150"
        />
      </div>

      <div className="container text-center">
        <div className="text-subtitle">The Ultimate Bitcoin</div>
        <div className="text-subtitle">Scaling Solution</div>
        <div className=" font-bold text-gradient mb-16 text-3xl md:text-3xl lg:text-4xl xl:text-[5rem]">
          100 MVC
        </div>
      </div>

      <div className="container container flex justify-center w-full items-center">
        <img src={bg3} alt="" className="max-h-full max-w-full" />
      </div>

      <div
        className="container flex items-center justify-center mt-16 mb-20 lg:mb-40 group cursor-pointer"
        onClick={warning}
      >
        <div className="text-base font-bold mr-6 lg:text-3xl transition-transform transform duration-500 ease-in-out group-hover:translate-x-1">
          BUILD AN BITCOIN SIDECHAIN IN 30 MINUTES
        </div>
        <img
          src={iconDefault}
          alt="Icon"
          className="w-10 h-10 transition-all duration-500 ease-in-out transform group-hover:-translate-x-1 group-hover:brightness-125 group-hover:contrast-150"
        />
      </div>

      <div className="container mb-20">
        <div className="flex py-8 flex-col box-border border-solid border-[#3D3D3D] border-y md:flex-row md:items-center justify-between md:py-16">
          <div className="text-subtitle leading-none">
            <div>
              Build <span className="text-gradient">Web3</span> with
            </div>
            <div>SPACE</div>
          </div>
          <img
            src={rang}
            alt=""
            className="w-8 my-4 md:my-0 md:w-16 xl:w-auto"
          />
          <div>
            <div>$SPACE IS OUR NATIVE GAS. IT’S OBTAINED VIA PROOF-OF-</div>
            <div>WORK OR PROOF-OF-BUILD. $SPACE IS VALUABLE AS A GAS AND</div>
            <div>
              THEREFORE SHOULD NOT BE SEEN AS A PRICE SPECULATIVE ASSET.
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="box-border border-solid border-[#3D3D3D] border-b flex justify-center w-full items-center pb-14 md:pb-28 mb-14 lg:mb-28">
          <img
            src={bg4}
            alt=""
            className="max-h-full max-w-full hidden md:block"
          />
          <img
            src={bg7}
            alt=""
            className="max-h-full max-w-full block md:hidden"
          />
        </div>
      </div>

      <div className="container flex justify-between mb-12">
        <div className="text-subtitle">
          In the <span className="text-gradient">News</span>
        </div>
        <div className="flex items-center">
          <div className="text-[1.125rem]">See all</div>
          <img src={iconArrow} alt="" className="w-4 h-4" />
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            className="cursor-pointer box-border flex flex-col shadow-md overflow-hidden rounded-tl-3xl hover:translate-x-2 transition duration-300"
            onClick={() => handleReadMoreClick("1")}
          >
            <div className="flex-shrink-0">
              <img
                src={Imagecontainer1}
                alt=""
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="box-border p-4 border-solid border-[#3D3D3D] border-x border-b h-64 relative">
              <div className="text-[#86888B] flex justify-between text-base mb-6">
                <div>DEC 08,2023</div>
                <div>Category</div>
              </div>
              <div className="text-xl 2xl:text-2xl font-bold leading-tight">
                Developers of Bitcoin sidechain MVC prepares for BRC-20 DEX
                launch
              </div>
              <div className="flex items-center text-lg absolute bottom-4 right-4 group cursor-pointer">
                <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                  Read more
                </div>
                <img
                  src={iconArrow}
                  alt=""
                  className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
                />
              </div>
            </div>
          </div>

          <div
            className="cursor-pointer flex flex-col shadow-md overflow-hidden rounded-tl-3xl hover:translate-x-2 transition duration-300"
            onClick={() => handleReadMoreClick("2")}
          >
            <div className="flex-shrink-0">
              <img
                src={Imagecontainer2}
                alt=""
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="box-border p-4 border-solid border-[#3D3D3D] border-x border-b h-64 relative">
              <div className="text-[#86888B] flex justify-between text-base mb-6">
                <div>Jan 26,2024</div>
                <div>Category</div>
              </div>
              <div className="text-xl 2xl:text-2xl font-bold leading-tight">
                F2Pool supports Bitcoin sidechain MicrovisionChain (Token SPACE)
                mining
              </div>
              <div className="flex items-center text-lg absolute bottom-4 right-4 group cursor-pointer">
                <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                  Read more
                </div>
                <img
                  src={iconArrow}
                  alt=""
                  className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
                />
              </div>
            </div>
          </div>

          <div
            className="cursor-pointer flex flex-col shadow-md overflow-hidden rounded-tl-3xl hover:translate-x-2 transition duration-300"
            onClick={() => handleReadMoreClick("3")}
          >
            <div className="flex-shrink-0">
              <img
                src={Imagecontainer3}
                alt=""
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="box-border p-4 border-solid border-[#3D3D3D] border-x border-b h-64 relative">
              <div className="text-[#86888B] flex justify-between text-base mb-6">
                <div>Jan 20,2024</div>
                <div>Category</div>
              </div>
              <div className="text-xl 2xl:text-2xl font-bold leading-tight">
                MicrovisionChain announces MVC-20: The first protocol for
                free-minting assets on the bitcoin sidechain
              </div>
              <div className="flex items-center text-lg absolute bottom-4 right-4 group cursor-pointer">
                <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                  Read more
                </div>
                <img
                  src={iconArrow}
                  alt=""
                  className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
                />
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col shadow-md overflow-hidden rounded-tl-3xl hover:translate-x-2 transition duration-300">
              <div className="flex-shrink-0">
                <img
                  src={Imagecontainer4}
                  alt=""
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="box-border p-4 border-solid border-[#3D3D3D] border-x border-b h-64 relative">
                <div className="text-[#86888B] flex justify-between text-base mb-6">
                  <div>DEC 08,2023</div>
                  <div>Category</div>
                </div>
                <div className="text-xl 2xl:text-2xl font-bold leading-tight">
                  Developers of Bitcoin sidechain MVC prepare for BRC-20 DEX
                  launch
                </div>
                <div
                  className="flex items-center text-lg absolute bottom-4 right-4 group cursor-pointer"
                  onClick={() => handleReadMoreClick("4")}
                >
                  <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                    Read more
                  </div>
                  <img
                    src={iconArrow}
                    alt=""
                    className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
                  />
                </div>
              </div>
            </div> */}

          {/* <div className="flex flex-col shadow-md overflow-hidden rounded-tl-3xl hover:translate-x-2 transition duration-300">
              <div className="flex-shrink-0">
                <img
                  src={Imagecontainer5}
                  alt=""
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="box-border p-4 border-solid border-[#3D3D3D] border-x border-b h-64 relative">
                <div className="text-[#86888B] flex justify-between text-base mb-6">
                  <div>Apr 01,2024</div>
                  <div>Category</div>
                </div>
                <div className="text-xl 2xl:text-2xl font-bold leading-tight">
                  
                </div>
                <div
                  className="flex items-center text-lg absolute bottom-4 right-4 group cursor-pointer"
                  onClick={() => handleReadMoreClick("5")}
                >
                  <div className="transition-colors duration-500 ease-in-out text-gray-400 group-hover:text-white text-lg">
                    Read more
                  </div>
                  <img
                    src={iconArrow}
                    alt=""
                    className="w-4 h-4 transition-transform duration-500 ease-in-out transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:brightness-125 group-hover:contrast-150 ml-2"
                  />
                </div>
              </div>
            </div> */}
        </div>
      </div>

      <div className="container flex mb-12 mt-24 lg:mt-36">
        <div className="text-subtitle leading-none">
          <div>
            <span className="text-gradient">Partnerships</span> &
          </div>
          <div>Integration</div>
        </div>
      </div>

      <div className="container">
        {/* <div className="bg-[#181818] w-40">
            <img
              src="../src/assets/Partnerslogo1.png"
              alt=""
            />
            <div className="text-[#7C7C7C]">sCrypt</div>
          </div> */}

        {/* <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"> */}
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        {/* </div> */}
      </div>

    </>
  );
};
export default Home;
