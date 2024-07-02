// import { useState } from "react";
import { useEffect, useState, useRef } from "react";
import "./App.css";
import "./index.css";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import videoSrc from "../src/assets/video2.mp4";
import posterSrc from "../src/assets/videobg2.jpg";
import iconDefault from "../src/assets/Icon.png";
import mainLogo from "../src/assets/mainlogo.png";
import arrowIcon from "../src/assets/Menu-icon.png";
import rightIcon from "../src/assets/arrowIcon.png";
import Icon3 from "../src/assets/Icon3.png";
import Icon5 from "../src/assets/icon5.png";
import Icon6 from "../src/assets/icon6.png";
import Icon7 from "../src/assets/icon7.png";
import Icon8 from "../src/assets/icon8.png";
import Icon9 from "../src/assets/icon9.png";
import Icon10 from "../src/assets/icon10.png";
import Icon11 from "../src/assets/icon11.png";
import Icon12 from "../src/assets/icon12.png";
import Icon13 from "../src/assets/icon13.png";
import Icon14 from "../src/assets/icon14.png";
import Icon2 from "../src/assets/Icon2.png";
import Scroll from "../src/assets/scroll.png";
import rang from "../src/assets/rang.png";
import colorRang from "../src/assets/colorrang.png";
import bg2 from "../src/assets/bg2.png";
import bg3 from "../src/assets/bg3.png";
import bg4 from "../src/assets/bg4.png";
import bg5 from "../src/assets/bg5.png";
import Imagecontainer1 from "../src/assets/Imagecontainer1.png";
import Imagecontainer2 from "../src/assets/Imagecontainer2.png";
import Imagecontainer3 from "../src/assets/Imagecontainer3.png";
import footertitle from "../src/assets/footertitle.png";
import useIntersectionObserver from "./useIntersectionObserver.tsx";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import Imagecontainer4 from "../src/assets/Imagecontainer4.png";
// import Imagecontainer5 from "../src/assets/Imagecontainer5.png";
import type { MenuProps } from "antd";
import { Menu, message } from "antd";
import iconArrow from "../src/assets/Icon4.png";
// import iconArrowHover from "../src/assets/Icon4Hover.png";

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

const items = [
  {
    key: "sub1",
    label: "LEARN",
    children: [
      { key: "1", label: "· What is UTXO?" },
      { key: "2", label: "· Why MVC?" },
      { key: "3", label: "· Roadmap" },
      { key: "4", label: "· Founder" },
      { key: "5", label: "· FAQ" },
    ],
  },
  {
    key: "sub2",
    label: "SOLUTION",
    children: [
      {
        key: "6",
        label: "· BVM",
      },
      { key: "7", label: "· MetaTXID" },
      { key: "8", label: "· MetaContract" },
      { key: "9", label: "· MetaID" },
      { key: "10", label: "· Zero-Confirmation" },
      { key: "11", label: "· Technical Doc" },
    ],
  },
  {
    key: "sub3",
    label: "BUILD",
    children: [
      { key: "12", label: "· Why Build on MVC?" },
      { key: "13", label: "· Builder Grant" },
    ],
  },
  {
    key: "sub4",
    label: "SPACE",
    children: [
      { key: "14", label: "· Mine SPACE" },
      { key: "15", label: "· Tokenomic" },
      { key: "16", label: "· Mine SPACE" },
    ],
  },
  {
    label: "ECOSYSTEM",
    key: "ECOSYSTEM",
  },
  {
    label: "DAO",
    key: "DAO",
  },
  {
    key: "sub5",
    label: "BRIDGE",
    children: [
      { key: "17", label: "· Bridge to Bitcoin" },
      { key: "18", label: "· Bridge to EVM" },
    ],
  },
];

function App() {
  const secondScreenRef = useRef(null);

  const scrollToSecondScreen = () => {
    if (secondScreenRef.current) {
      const navbarHeight = 48;
      //@ts-ignore
      const offset = secondScreenRef.current.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
      // secondScreenRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const videoRef = useRef(null);
  //@ts-ignore
  const [isPlaying, setIsPlaying] = useState(false);
  //@ts-ignore
  // const handleVideoClick = () => {
  //   if (videoRef.current) {
  //   //@ts-ignore
  //     videoRef.current.play();
  //     setIsPlaying(true);
  //   }
  // };
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      //@ts-ignore
      navbar.classList.add("bg-gray-950");
      //@ts-ignore
      navbar.classList.remove("bg-transparent");
    } else {
      //@ts-ignore
      navbar.classList.add("bg-transparent");
      //@ts-ignore
      navbar.classList.remove("bg-gray-950");
    }
  });
  const [current, setCurrent] = useState("mail");
  // const [horCurrent, setHorCurrent] = useState("mail");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  // const onClickHor: MenuProps["onClick"] = (e) => {
  //   console.log("click ", e);
  //   setHorCurrent(e.key);
  // };

  const [isOpen, setIsOpen] = useState(false);
  const menuContainerRef = useRef(null);
  const toggleMenu = (event: any) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleClickOutsideMenu = (event: any) => {
    //@ts-ignore
    if (
      isOpen &&
      menuContainerRef.current &&
      //@ts-ignore
      !menuContainerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };
  //@ts-ignore
  const textRef1 = useIntersectionObserver();
  //@ts-ignore
  const textRef2 = useIntersectionObserver();
  //@ts-ignore
  const imgRef = useIntersectionObserver();

  // const ListItem = React.forwardRef<
  //   React.ElementRef<"a">,
  //   React.ComponentPropsWithoutRef<"a">
  // >(({ className, title, children, ...props }, ref) => {
  //   return (
  //     <li>
  //       <NavigationMenuLink asChild>
  //         <a
  //           ref={ref}
  //           className={cn(
  //             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
  //             className
  //           )}
  //           {...props}
  //         >
  //           <div className="text-sm font-medium leading-none">{title}</div>
  //           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
  //             {children}
  //           </p>
  //         </a>
  //       </NavigationMenuLink>
  //     </li>
  //   );
  // });
  // ListItem.displayName = "ListItem";

  const warning = () => {
    // message.warning('coming soon')
    message.warning({
      duration: 2,
      content: "coming soon",
      className: "notice-text",
    });
  };

  useEffect(() => {
    const handleClick = (event: any) => {
      handleClickOutsideMenu(event);
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

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
  const handleBottomClick = (type: any) => {
    let bottomUrl;
    switch (type) {
      case "1":
        bottomUrl = "https://x.com/mvcglobal";
        break;
      case "2":
        bottomUrl = "mailto:partnerships@microvisionchain.com";
        break;
      case "3":
        bottomUrl = "https://discord.com/invite/RGHWazu9eS";
        break;
      case "4":
        bottomUrl = "https://t.me/mvcofficial";
        break;
    }
    window.open(bottomUrl, "_blank", "noopener,noreferrer");
  };

  const [isPopoverOpen1, setIsPopoverOpen1] = useState(false);
  const [isPopoverOpen2, setIsPopoverOpen2] = useState(false);
  const [isPopoverOpen3, setIsPopoverOpen3] = useState(false);
  const [isPopoverOpen4, setIsPopoverOpen4] = useState(false);
  const [isPopoverOpen5, setIsPopoverOpen5] = useState(false);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const buttonRef3 = useRef(null);
  const buttonRef4 = useRef(null);
  const buttonRef5 = useRef(null);

  const openPopover1 = () => {
    setIsPopoverOpen1(true);
  };

  const closePopover1 = () => {
    setIsPopoverOpen1(false);
  };
  const openPopover2 = () => {
    setIsPopoverOpen2(true);
  };

  const closePopover2 = () => {
    setIsPopoverOpen2(false);
  };
  const openPopover3 = () => {
    setIsPopoverOpen3(true);
  };

  const closePopover3 = () => {
    setIsPopoverOpen3(false);
  };
  const openPopover4 = () => {
    setIsPopoverOpen4(true);
  };

  const closePopover4 = () => {
    setIsPopoverOpen4(false);
  };
  const openPopover5 = () => {
    setIsPopoverOpen5(true);
  };

  const closePopover5 = () => {
    setIsPopoverOpen5(false);
  };

  return (
    <>
      <div className="overflow-auto font-sans">
        <div
          className="fixed top-0 left-0 w-full transition-colors duration-500 ease-in-out bg-transparent h-12 z-50"
          id="navbar"
        >
          <div className="container h-12 mx-auto flex items-center justify-between">
            <div className="flex-shrink-0 flex items-end">
              <img
                src={mainLogo}
                alt="Main Logo"
                className="w-[95px] h-[26px]"
              />
              {/* preview  */}
              <div className="ml-1 text-xs bg-sky-500/80 text-sky-50 px-2 rounded-full py-px italic shadow-md shadow-sky-500/50">
                PREVIEW
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:text-center lg:ml-16">
              {/* <Menu
                onClick={onClickHor}
                selectedKeys={[horCurrent]}
                mode="horizontal"
                items={items}
              /> */}
              <div className="flex gap-4">
                {/* <div className="text-sm/6 font-semibold text-white/50">
                  Products
                </div> */}
                <div>//</div>
                <Popover>
                  <div onMouseEnter={openPopover1} onMouseLeave={closePopover1}>
                    <PopoverButton
                      ref={buttonRef1}
                      className="text-sm/6  text-white focus:outline-none data-[active]:text-white data-[hover]:text-gradient data-[focus]:outline-1 data-[focus]:outline-white"
                    >
                      LEARN
                    </PopoverButton>
                    <Transition
                      show={isPopoverOpen1}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <PopoverPanel
                        anchor="bottom"
                        className="divide-y divide-white/5 rounded-xl text-sm/6 [--anchor-gap:var(--spacing-5)] bg-gradient-to-br from-black/50 to-black/25 backdrop-blur bg-menu-img"
                      >
                        <div className="p-3">
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· What is UTXO?</p>
                          </a>
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· Why MVC?</p>
                          </a>
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· Timeline</p>
                          </a>
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· Founder</p>
                          </a>

                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· FAQ</p>
                          </a>
                        </div>
                      </PopoverPanel>
                    </Transition>
                  </div>
                </Popover>
                <div>/</div>
                <Popover>
                  <div onMouseEnter={openPopover2} onMouseLeave={closePopover2}>
                    <PopoverButton
                      ref={buttonRef2}
                      className="text-sm/6  text-white focus:outline-none data-[active]:text-white data-[hover]:text-gradient data-[focus]:outline-1 data-[focus]:outline-white"
                    >
                      SOLUTION
                    </PopoverButton>
                    <Transition
                      show={isPopoverOpen2}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <PopoverPanel
                        anchor="bottom"
                        className="divide-y divide-white/5 rounded-xl text-sm/6 [--anchor-gap:var(--spacing-5)] bg-gradient-to-br from-black/50 to-black/25 backdrop-blur bg-menu-img"
                      >
                        <div className="p-3">
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· BVM</p>
                          </a>
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· MetaTXID</p>
                          </a>
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· MetaContract</p>
                          </a>
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· MetaID</p>
                          </a>

                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· Zero-Confirmation</p>
                          </a>
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· Technical Doc</p>
                          </a>
                        </div>
                      </PopoverPanel>
                    </Transition>
                  </div>
                </Popover>
                <div>/</div>
                <Popover>
                  <div onMouseEnter={openPopover3} onMouseLeave={closePopover3}>
                    <PopoverButton
                      ref={buttonRef3}
                      className="text-sm/6  text-white focus:outline-none data-[active]:text-white data-[hover]:text-gradient data-[focus]:outline-1 data-[focus]:outline-white"
                    >
                      BUILD
                    </PopoverButton>
                    <Transition
                      show={isPopoverOpen3}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <PopoverPanel
                        anchor="bottom"
                        className="divide-y divide-white/5 rounded-xl text-sm/6 [--anchor-gap:var(--spacing-5)] bg-gradient-to-br from-black/50 to-black/25 backdrop-blur bg-menu-img"
                      >
                        <div className="p-3">
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· Why Build on MVC?</p>
                          </a>
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· Builder Grant</p>
                          </a>
                        </div>
                      </PopoverPanel>
                    </Transition>
                  </div>
                </Popover>
                <div>/</div>
                <Popover>
                  <div onMouseEnter={openPopover4} onMouseLeave={closePopover4}>
                    <PopoverButton
                      ref={buttonRef4}
                      className="text-sm/6  text-white focus:outline-none data-[active]:text-white data-[hover]:text-gradient data-[focus]:outline-1 data-[focus]:outline-white"
                    >
                      SPACE
                    </PopoverButton>
                    <Transition
                      show={isPopoverOpen4}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <PopoverPanel
                        anchor="bottom"
                        className="divide-y divide-white/5 rounded-xl text-sm/6 [--anchor-gap:var(--spacing-5)] bg-gradient-to-br from-black/50 to-black/25 backdrop-blur bg-menu-img"
                      >
                        <div className="p-3">
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· Mine SPACE</p>
                          </a>
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· Tokenomic</p>
                          </a>
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· Mine SPACE</p>
                          </a>
                        </div>
                      </PopoverPanel>
                    </Transition>
                  </div>
                </Popover>
                <div>/</div>
                <div className="text-sm/6  text-white focus:outline-none data-[active]:text-white data-[hover]:text-gradient data-[focus]:outline-1 data-[focus]:outline-white cursor-pointer hover:text-gradient">
                  ECOSYSTEM
                </div>
                <div>/</div>
                <div className="text-sm/6  text-white focus:outline-none data-[active]:text-white data-[hover]:text-gradient data-[focus]:outline-1 data-[focus]:outline-white cursor-pointer hover:text-gradient">
                  DAO
                </div>
                <div>/</div>
                <Popover>
                  <div onMouseEnter={openPopover5} onMouseLeave={closePopover5}>
                    <PopoverButton
                      ref={buttonRef5}
                      className="text-sm/6  text-white focus:outline-none data-[active]:text-white data-[hover]:text-gradient data-[focus]:outline-1 data-[focus]:outline-white"
                    >
                      BRIDGE
                    </PopoverButton>
                    <Transition
                      show={isPopoverOpen5}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <PopoverPanel
                        anchor="bottom"
                        className="divide-y divide-white/5 rounded-xl text-sm/6 [--anchor-gap:var(--spacing-5)] bg-gradient-to-br from-black/50 to-black/25 backdrop-blur bg-menu-img"
                      >
                        <div className="p-3">
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· Bridge to Bitcoin</p>
                          </a>
                          <a
                            className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                            href="#"
                          >
                            <p className=" text-white">· Bridge to EVM</p>
                          </a>
                        </div>
                      </PopoverPanel>
                    </Transition>
                  </div>
                </Popover>
              </div>
            </div>

            <div className="hidden lg:flex-shrink-0 lg:flex lg:items-center group cursor-pointer">
              <div
                className="text-white mr-2 transition-transform transform duration-500 ease-in-out group-hover:translate-x-1"
                onClick={warning}
              >
                JOIN TO COMMUNITY
              </div>
              <img
                src={rightIcon}
                alt="Arrow Icon"
                className="h-4 ml-1 transition-all duration-500 ease-in-out transform group-hover:-translate-x-1 group-hover:brightness-125 group-hover:contrast-150"
              />
            </div>
            <div className="flex-shrink-0 flex items-center cursor-pointer lg:hidden">
              <img
                src={arrowIcon}
                alt="Arrow Icon"
                className="w-6 h-6"
                onClick={toggleMenu}
              />
            </div>

            <div
              ref={menuContainerRef}
              className={`fixed backdrop-blur top-0 left-0 w-full bg-black bg-opacity-75 text-white transform ${
                isOpen ? "translate-y-0" : "-translate-y-full"
              } transition-transform duration-500 ease-in-out`}
            >
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                items={items}
                mode="inline"
              />
            </div>
          </div>
        </div>
        <div className="lg:h-[100dvh] box-border bg-hero-pattern bg-no-repeat bg-center bg-contain relative">
          <div className="container relative pt-20 lg:pt-[6rem] 2xl:pt-40">
            {/* <div className="container relative pt-20 lg:pt-[18vh]"> */}
            <div className="font-bold text-2xl md:text-3xl lg:text-4xl lg:leading-tight xl2:text-title">
              The Blockchain for
            </div>
            <div className="font-bold  text-2xl md:text-3xl lg:text-4xl lg:mb-4 lg:leading-tight xl2:text-title 2xl:mb-8">
              BTC and Web3
            </div>
            {/* <div className="font-bold text-2xl md:text-[4.1vw] leading-none">
              The Blockchain
            </div>
            <div className="font-bold mb-[1vw] text-[4.1vw] leading-none">
              for Web3
            </div> */}
            <div className="block md:hidden mt-4">
              <div className="text-sm font-normal">
                AS AN IDEAL BITCOIN SIDECHAIN WITH DID SOLUTIONS, MVC UNLOCKS
                BITCOIN'S POTENTIAL FOR DAILY TRANSACTIONS AND WEB3
                APPLICATIONS.
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
              className="text-left text-subtitle mb-8 xl2:leading-none 2xl:mb-32"
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

            <div ref={textRef2} className="text-right text-subtitle ">
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
              <img src={Icon8} alt="" className="w-28 h-28 mb-8" />
              <div className="text-subhead mb-4 font-bold">KNOWLEDGE BASE</div>
              <div>
                <div className="text-sm text-[#86888B]">
                  Discover the unique background and compelling advantages of
                  MVC.
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
              <img src={Icon9} alt="" className="w-28 h-28 mb-8" />
              <div className="text-subhead font-bold">DECENTRALIZED VIA</div>
              <div className="text-subhead mb-4 font-bold">PROOF-OF-WORK</div>
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
              <img src={Icon10} alt="" className="w-28 h-28 mb-8" />
              <div className="text-subhead mb-4 font-bold">Why MVC</div>
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
            <div className="text-subtitle">
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
            <img src={bg5} alt="" className="max-h-full max-w-full" />
          </div>
        </div>
        <div className="container mb-28 mt-24 lg:mt-36">
          <div className="flex py-8 flex-col box-border border-solid border-[#3D3D3D] border-y md:flex-row md:items-center justify-between md:py-16">
            <div className="text-subtitle">
              <div>Entering the</div>
              <div>
                <span className="text-gradient">BVM</span> Era
              </div>
            </div>
            <img
              src={rang}
              alt=""
              className="w-8 my-4 md:my-0 md:w-16 xl:w-auto"
            />
            <div>
              <div>
                WE ARE PROUD TO PRESENT MVC BVM (BITCOIN VITUAL MACHINE) TO THE
              </div>
              <div>
                WORLD, PROVING THAT BITCOIN IS PROGRAMMABLE WITH CODE AND ABLE
                TO
              </div>
              <div>RUN UTXO TURING-COMPLETE SMART CONTRACTS.</div>
            </div>
          </div>
        </div>
        <div className="container mb-24 lg:mb-48">
          <div className="box-border border-solid border-[#3D3D3D] border-t flex justify-center w-full items-center pt-28">
            <img src={bg2} alt="" className="max-h-full max-w-full" />
          </div>
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
            Build an MVC in 30 Min
          </div>
          <img
            src={iconDefault}
            alt="Icon"
            className="w-10 h-10 transition-all duration-500 ease-in-out transform group-hover:-translate-x-1 group-hover:brightness-125 group-hover:contrast-150"
          />
        </div>
        <div className="container mb-20">
          <div className="flex py-8 flex-col box-border border-solid border-[#3D3D3D] border-y md:flex-row md:items-center justify-between md:py-16">
            <div className="text-subtitle">
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
          <div className="box-border border-solid border-[#3D3D3D] border-b flex justify-center w-full items-center pb-28 mb-24 lg:mb-28">
            <img src={bg4} alt="" className="max-h-full max-w-full" />
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
                  F2Pool supports Bitcoin sidechain MicrovisionChain (Token
                  SPACE) mining
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
          <div className="text-subtitle">
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

        <div className="container font-normal text-base mt-16">
          <div className="flex box-border border-solid border-[#3D3D3D] border-y py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24">
              <div className="flex flex-col space-y-2">
                <div className="text-2xl font-bold">Learn</div>
                <div className="space-y-1 text-[#86888B] text-base leading-7">
                  <div className="group">
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-white cursor-pointer">
                      About MVC
                    </div>
                  </div>
                  <div className="group">
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-white cursor-pointer">
                      How MVC Works
                    </div>
                  </div>
                  <div className="group">
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-white cursor-pointer">
                      Technical Documentation FAQ
                    </div>
                  </div>
                  <div className="group">
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-white cursor-pointer">
                      FAQ
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="text-2xl font-bold">Build</div>
                <div className="space-y-1 text-[#86888B] text-base leading-7">
                  <div className="group">
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-white cursor-pointer">
                      MetaTXID
                    </div>
                  </div>
                  <div className="group">
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-white cursor-pointer">
                      MetaContract
                    </div>
                  </div>
                  <div className="group">
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-white cursor-pointer">
                      MetaID Protocol
                    </div>
                  </div>
                  <div className="group">
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-white cursor-pointer">
                      MVC Github
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-2xl font-bold">Ecosystem</div>
                <div className="space-y-1 text-[#86888B] text-base leading-7">
                  <div className="group">
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-white cursor-pointer">
                      Wallets
                    </div>
                  </div>
                  <div className="group">
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-white cursor-pointer">
                      Web3 Applications
                    </div>
                  </div>
                  <div className="group">
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-white cursor-pointer">
                      Infrastructures
                    </div>
                  </div>
                  <div className="group">
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-white cursor-pointer">
                      Browsers/Tools
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-2xl font-bold">Resources</div>
                <div className="space-y-1 text-[#86888B] text-base leading-7">
                  <div className="group">
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-white cursor-pointer">
                      Press Kit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className=" h-12 box-border border-b border-solid border-[#3D3D3D] flex justify-between">
            <div className="w-1/6 flex items-center justify-center box-border border-r border-solid border-[#3D3D3D]">
              <img src={mainLogo} alt="" className="w-[80px] h-[22px]" />
            </div>
            <div className="flex items-center box-border border-l border-solid border-[#3D3D3D] pl-8">
              <img
                src={Icon11}
                alt=""
                className="w-6 h-6 cursor-pointer"
                onClick={() => handleBottomClick("1")}
              />
              <img
                src={Icon12}
                alt=""
                className="w-6 h-6 ml-8 cursor-pointer"
                onClick={() => handleBottomClick("2")}
              />
              <img
                src={Icon13}
                alt=""
                className="w-6 h-6 ml-8 cursor-pointer"
                onClick={() => handleBottomClick("3")}
              />
              <img
                src={Icon14}
                alt=""
                className="w-6 h-6 ml-8 cursor-pointer"
                onClick={() => handleBottomClick("4")}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <img src={footertitle} alt="" className="w-full" />
        </div>
      </div>
    </>
  );
}

export default App;
