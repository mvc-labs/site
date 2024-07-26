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
import Icon2 from "../src/assets/Icon2.png";
import Scroll from "../src/assets/scroll.png";
import rang from "../src/assets/rang.png";
import colorRang from "../src/assets/colorrang.png";
import bg2 from "../src/assets/bg2.png";
import bg3 from "../src/assets/bg3.png";
import bg4 from "../src/assets/bg4.png";
import bg5 from "../src/assets/bg5.png";
import bg6 from "../src/assets/bg6.png";
import bg7 from "../src/assets/bg7.png";
import Imagecontainer1 from "../src/assets/Imagecontainer1.png";
import Imagecontainer2 from "../src/assets/Imagecontainer2.png";
import Imagecontainer3 from "../src/assets/Imagecontainer3.png";
import iconClose from "../src/assets/icon_close.png";
import imgCoin from "../src/assets/imgCoin.png";
import useIntersectionObserver from "./useIntersectionObserver.tsx";
import placard from "../src/assets/placard.png";

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

  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleLinkTo = () => {
    window.open("https://docs.google.com/presentation/u/0/d/1sSts6cvLgjEt2z85EW871K8v8pPdXaj8c6YwRcqdcCs/mobilepresent", "_blank", "noopener,noreferrer");
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
      <div className="overflow-auto font-sans">
        <div
          className="fixed top-0 left-0 w-full transition-colors duration-500 ease-in-out bg-transparent h-12 z-50"
          id="navbar"
        >
          <div className="container h-12 mx-auto flex items-center justify-between">
            <div className="flex-shrink-0 flex items-end">
              {/* <img
                src={mainLogo}
                alt="Main Logo"
                className="w-[95px] h-[26px]"
              /> */}
              <svg
                width="95"
                height="26"
                viewBox="0 0 80 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.82223 6.61586C2.81634 6.61586 3.6281 5.79722 3.6281 4.77819C3.6281 3.77567 2.81634 2.95703 1.82223 2.95703C0.811764 2.95703 0 3.77567 0 4.77819C0 5.79722 0.811764 6.61586 1.82223 6.61586Z"
                  fill="url(#paint0_linear_676_80)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.1954 0.652344C8.59605 0.652344 4.04047 5.23 4.04047 10.8768C4.04047 11.6288 4.12346 12.3638 4.27248 13.0651V13.0486L0.511719 19.0296L7.56922 18.6288C9.34177 20.1824 11.6613 21.1183 14.196 21.1183C19.7954 21.1183 24.3509 16.5407 24.3509 10.8774C24.3509 10.1424 24.2679 9.40748 24.1189 8.70554L27.8791 2.7234L20.8216 3.12417C19.049 1.58768 16.7301 0.652344 14.1954 0.652344ZM14.1954 3.60923C10.2032 3.60923 6.97252 6.86728 6.97252 10.8768C6.97252 11.8121 7.15486 12.6809 7.45292 13.4995L6.29342 15.5711H8.67904C10.0045 17.1583 11.9921 18.1608 14.1954 18.1608C18.1876 18.1608 21.4183 14.9028 21.4183 10.8768C21.4183 9.95795 21.236 9.07271 20.9379 8.27058L22.0974 6.18243H19.7118C18.3869 4.61175 16.415 3.60923 14.1954 3.60923Z"
                  fill="white"
                />
                <path
                  d="M34.5042 21.9289H33.9745V19.6614L33.6211 20.8664H33.2148L32.8969 19.6614V21.9289H32.3672V18.5808H32.9854L33.4273 20.1046L33.8691 18.5808H34.5048L34.5042 21.9289ZM37.0144 21.9288H35.4065V21.4507H35.9362V19.0589H35.4065V18.5807H37.0144V19.0589H36.4666V21.4507H37.0144V21.9288ZM40.0733 20.9013C40.0378 21.0782 39.9848 21.2201 39.9144 21.3619C39.844 21.4857 39.7555 21.6101 39.667 21.6988C39.561 21.7876 39.4551 21.8582 39.3136 21.9113C39.1902 21.9644 39.0307 22.0001 38.8717 22.0001C38.6243 22.0001 38.4299 21.9469 38.271 21.8407C38.112 21.7519 37.9706 21.6282 37.8646 21.4688C37.7761 21.2919 37.6883 21.1145 37.6527 20.902C37.5998 20.6895 37.5823 20.477 37.5823 20.2645C37.5823 20.0338 37.5998 19.8213 37.6527 19.6089C37.6883 19.3964 37.7587 19.2189 37.8646 19.0595C37.9706 18.9001 38.094 18.7757 38.2535 18.6695C38.4124 18.5807 38.6069 18.5276 38.8362 18.5276C38.9066 18.5276 38.9777 18.5276 39.0662 18.5451C39.1366 18.5807 39.2077 18.5982 39.2606 18.6339C39.3311 18.687 39.384 18.7226 39.437 18.7757C39.49 18.8464 39.5255 18.8995 39.5429 18.9707V18.5807H40.0197V19.8563H39.5429C39.5429 19.7501 39.5255 19.6438 39.5074 19.5376C39.4719 19.4489 39.437 19.3426 39.384 19.272C39.3311 19.2014 39.2606 19.1301 39.1721 19.077C39.0836 19.0239 38.9777 19.0064 38.8717 19.0064C38.7128 19.0064 38.5888 19.042 38.5009 19.1126C38.395 19.1832 38.3246 19.2895 38.2716 19.4139C38.2012 19.5201 38.1656 19.662 38.1482 19.8038C38.1307 19.9632 38.1127 20.1051 38.1127 20.2645C38.1127 20.4063 38.1301 20.5657 38.1482 20.7076C38.1656 20.867 38.2012 20.9913 38.2716 21.1151C38.3246 21.2388 38.395 21.3276 38.5009 21.3988C38.5894 21.4876 38.7128 21.5226 38.8717 21.5226C39.0836 21.5226 39.2426 21.4519 39.3666 21.3101C39.4906 21.1682 39.5785 20.9913 39.6495 20.7432L40.0733 20.9013ZM42.9351 21.9288H42.2639L41.3983 20.5826H41.1509V21.9288H40.6211V18.5807H41.7161C42.0869 18.5807 42.3699 18.6695 42.5818 18.8289C42.7762 19.0057 42.8822 19.2539 42.8822 19.5907C42.8822 19.7326 42.8647 19.8563 42.8117 19.9807C42.7762 20.087 42.7058 20.1757 42.6173 20.2645C42.5469 20.3532 42.4409 20.4063 42.3343 20.4595C42.2284 20.4951 42.1044 20.5301 41.981 20.5482L42.9351 21.9288ZM42.3524 19.5726C42.3524 19.4132 42.2994 19.2714 42.1935 19.1826C42.0701 19.112 41.9286 19.0589 41.7167 19.0589H41.1515V20.1038H41.7167C41.9286 20.1038 42.0701 20.0507 42.1935 19.962C42.2994 19.8913 42.3524 19.7495 42.3524 19.5726ZM43.271 20.2632C43.271 20.0326 43.3066 19.8201 43.3415 19.6076C43.3944 19.3951 43.4649 19.2176 43.5714 19.0582C43.6774 18.8989 43.8008 18.7745 43.9603 18.6682C44.1367 18.5795 44.3311 18.5264 44.5611 18.5264C44.7905 18.5264 44.9849 18.5795 45.1438 18.6682C45.3027 18.7745 45.4442 18.8989 45.5502 19.0582C45.6561 19.2176 45.7265 19.3951 45.762 19.6076C45.815 19.8201 45.8325 20.0326 45.8325 20.2632C45.8325 20.4757 45.815 20.6882 45.762 20.9007C45.7265 21.1132 45.6561 21.2907 45.5502 21.4676C45.4442 21.6269 45.3202 21.7513 45.1613 21.8394C44.9849 21.9457 44.7905 21.9988 44.5605 21.9988C44.3305 21.9988 44.1186 21.9457 43.9597 21.8394C43.8008 21.7507 43.6593 21.6269 43.5708 21.4676C43.4649 21.2907 43.3944 21.1132 43.3408 20.9007C43.3059 20.6888 43.271 20.4763 43.271 20.2632ZM43.8008 20.2632C43.8008 20.4051 43.8182 20.5645 43.8363 20.7063C43.8718 20.8657 43.9067 20.9901 43.9597 21.1138C44.0127 21.2376 44.0831 21.3263 44.1897 21.3976C44.2782 21.4863 44.4016 21.5213 44.5605 21.5213C44.702 21.5213 44.8253 21.4857 44.9313 21.3976C45.0198 21.3269 45.1077 21.2382 45.1606 21.1138C45.2136 20.9901 45.2491 20.8657 45.2666 20.7063C45.3021 20.5645 45.3021 20.4051 45.3021 20.2632C45.3021 20.1038 45.3021 19.962 45.2666 19.8026C45.2491 19.6607 45.2136 19.5189 45.1606 19.4126C45.1077 19.2889 45.0192 19.182 44.9313 19.1114C44.8253 19.0407 44.7013 19.0051 44.5605 19.0051C44.3131 19.0051 44.1367 19.1114 43.9952 19.342C43.8718 19.5551 43.8008 19.8563 43.8008 20.2632ZM48.7653 18.5807L47.7233 21.9288H47.1225L46.0805 18.5807H46.6283L47.4235 21.2382L48.2188 18.5807H48.7653ZM51.0968 21.9288H49.4889V21.4507H50.0186V19.0589H49.4889V18.5807H51.0968V19.0589H50.549V21.4507H51.0968V21.9288ZM54.259 21.0076C54.259 21.167 54.2235 21.3088 54.1886 21.4326C54.1356 21.5388 54.0652 21.6451 53.9592 21.7338C53.8707 21.8226 53.7648 21.8757 53.6414 21.9288C53.518 21.9644 53.394 21.9994 53.2525 21.9994C53.0936 21.9994 52.9521 21.9638 52.8287 21.9107C52.7053 21.8576 52.5994 21.7513 52.4928 21.6269V21.9282H52.016V20.8301H52.4928C52.4928 20.9538 52.5283 21.0426 52.5632 21.1313C52.5988 21.202 52.6517 21.2732 52.7047 21.3438C52.7751 21.3969 52.8462 21.4326 52.934 21.4676C53.0225 21.5032 53.1104 21.5207 53.1989 21.5207C53.3578 21.5207 53.4819 21.4851 53.5878 21.3969C53.6763 21.3263 53.7293 21.2201 53.7293 21.0601C53.7293 20.9713 53.7118 20.9007 53.6763 20.8295C53.6588 20.7763 53.6059 20.7232 53.5529 20.6701C53.4999 20.6345 53.4295 20.5813 53.3585 20.5463C53.27 20.5107 53.1821 20.4757 53.0755 20.4401C52.9521 20.4045 52.8281 20.3513 52.7047 20.2982C52.5988 20.2451 52.4747 20.192 52.3869 20.1213C52.2984 20.0326 52.2105 19.9445 52.1569 19.8376C52.0865 19.7313 52.0684 19.5895 52.0684 19.4126C52.0684 19.2707 52.0858 19.147 52.1388 19.0226C52.1918 18.9164 52.2622 18.8276 52.3507 18.757C52.4567 18.6864 52.5452 18.6151 52.6686 18.5801C52.792 18.5445 52.916 18.527 53.0574 18.527C53.1989 18.527 53.3404 18.5626 53.4463 18.6157C53.5523 18.6864 53.6408 18.7751 53.6938 18.8814V18.5801H54.1705V19.6251H53.6938C53.6938 19.4301 53.6582 19.2707 53.5523 19.1645C53.4463 19.0582 53.3049 19.0051 53.1285 19.0051C52.9696 19.0051 52.8456 19.0407 52.7396 19.1114C52.6511 19.182 52.5981 19.2707 52.5981 19.4126C52.5981 19.4832 52.6156 19.5364 52.6337 19.572C52.6692 19.6251 52.7041 19.6782 52.7571 19.7138C52.7926 19.7495 52.863 19.7845 52.9334 19.8201C53.0219 19.8557 53.1098 19.8907 53.1983 19.9263C53.3398 19.962 53.4632 20.0151 53.5872 20.0857C53.7106 20.1388 53.8165 20.2095 53.9231 20.2807C54.0116 20.3695 54.0995 20.4576 54.1705 20.582C54.2241 20.7063 54.259 20.8482 54.259 21.0076ZM56.8204 21.9288H55.2125V21.4507H55.7423V19.0589H55.2125V18.5807H56.8204V19.0589H56.2726V21.4507H56.8204V21.9288ZM57.5982 20.2632C57.5982 20.0326 57.6157 19.8201 57.6686 19.6076C57.7216 19.3951 57.792 19.2176 57.8986 19.0582C57.9871 18.8989 58.1286 18.7745 58.2875 18.6682C58.4464 18.5795 58.6409 18.5264 58.8883 18.5264C59.1182 18.5264 59.3121 18.5795 59.471 18.6682C59.6299 18.7745 59.7714 18.8989 59.8599 19.0582C59.9658 19.2176 60.0362 19.3951 60.0898 19.6076C60.1434 19.8201 60.1603 20.0326 60.1603 20.2632C60.1603 20.4757 60.1428 20.6882 60.0898 20.9007C60.0369 21.1132 59.9664 21.2907 59.8779 21.4676C59.772 21.6269 59.6305 21.7513 59.4716 21.8394C59.3127 21.9457 59.1182 21.9988 58.8889 21.9988C58.6415 21.9988 58.447 21.9457 58.2881 21.8394C58.1292 21.7507 57.9877 21.6269 57.8818 21.4676C57.7933 21.2907 57.7054 21.1132 57.6699 20.9007C57.6157 20.6888 57.5982 20.4763 57.5982 20.2632ZM58.128 20.2632C58.128 20.4051 58.1454 20.5645 58.1635 20.7063C58.1809 20.8657 58.2339 20.9901 58.2869 21.1138C58.3398 21.2376 58.4103 21.3263 58.5168 21.3976C58.6053 21.4863 58.7287 21.5213 58.8877 21.5213C59.0291 21.5213 59.1525 21.4857 59.241 21.3976C59.347 21.3269 59.4174 21.2382 59.471 21.1138C59.524 20.9901 59.5769 20.8657 59.5944 20.7063C59.6118 20.5645 59.6299 20.4051 59.6299 20.2632C59.6299 20.1038 59.6125 19.962 59.5944 19.8026C59.5769 19.6607 59.524 19.5189 59.471 19.4126C59.418 19.2889 59.3476 19.182 59.241 19.1114C59.1525 19.0407 59.0291 19.0051 58.8877 19.0051C58.6402 19.0051 58.4458 19.1114 58.3224 19.342C58.199 19.5551 58.128 19.8563 58.128 20.2632ZM62.8096 21.9288H62.1913L61.2023 19.502V21.9288H60.6726V18.5807H61.3438L62.2798 20.9013V18.5807H62.8096V21.9288ZM68.7102 20.9013C68.6747 21.0782 68.6217 21.2201 68.5513 21.3619C68.4809 21.4857 68.3924 21.6101 68.3039 21.6988C68.1979 21.7876 68.092 21.8582 67.9505 21.9113C67.8271 21.9644 67.6856 22.0001 67.5086 22.0001C67.2793 22.0001 67.0848 21.9469 66.9079 21.8407C66.7489 21.7519 66.6249 21.6282 66.519 21.4688C66.413 21.2919 66.3426 21.1145 66.2896 20.902C66.2366 20.6895 66.2192 20.477 66.2192 20.2645C66.2192 20.0338 66.2366 19.8213 66.2896 19.6089C66.3426 19.3964 66.413 19.2189 66.519 19.0595C66.6075 18.9001 66.7489 18.7757 66.9079 18.6695C67.0493 18.5807 67.2438 18.5276 67.4731 18.5276C67.5435 18.5276 67.632 18.5276 67.7031 18.5451C67.7735 18.5807 67.8446 18.5982 67.915 18.6339C67.9679 18.687 68.0384 18.7226 68.0739 18.7757C68.1269 18.8464 68.1624 18.8995 68.1798 18.9707V18.5807H68.6566V19.8563H68.1798C68.1798 19.7501 68.1798 19.6438 68.1443 19.5376C68.1269 19.4489 68.0739 19.3426 68.0209 19.272C67.9679 19.2014 67.8975 19.1301 67.809 19.077C67.7205 19.0239 67.6327 19.0064 67.5086 19.0064C67.3672 19.0064 67.2438 19.042 67.1378 19.1126C67.0493 19.1832 66.9614 19.2895 66.9085 19.4139C66.8555 19.5201 66.8025 19.662 66.7851 19.8038C66.7676 19.9632 66.7496 20.1051 66.7496 20.2645C66.7496 20.4063 66.767 20.5657 66.7851 20.7076C66.8025 20.867 66.8555 20.9913 66.9085 21.1151C66.9614 21.2388 67.0319 21.3276 67.1378 21.3988C67.2263 21.4876 67.3497 21.5226 67.5086 21.5226C67.7205 21.5226 67.8975 21.4519 68.0035 21.3101C68.1269 21.1682 68.2154 20.9913 68.2864 20.7432L68.7102 20.9013ZM71.395 21.9288H70.8653V20.4582H69.7877V21.9288H69.258V18.5807H69.7877V19.9801H70.8653V18.5807H71.395V21.9288ZM73.992 21.9288L73.7446 21.1313H72.6496L72.4021 21.9288H71.8543L72.8964 18.5807H73.4971L74.5392 21.9288H73.992ZM72.791 20.6707H73.6037L73.1974 19.2889L72.791 20.6707ZM76.8719 21.9288H75.264V21.4507H75.7937V19.0589H75.264V18.5807H76.8719V19.0589H76.3241V21.4507H76.8719V21.9288ZM79.9986 21.9288H79.3803L78.3913 19.502V21.9288H77.8615V18.5807H78.5153L79.4694 20.9013V18.5807H79.9992V21.9288H79.9986Z"
                  fill="#177DDB"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.7073 8.0361L40.819 11.6784H37.9366L36.0811 8.0697V16.6734H32.3203V0.267575H36.5445L39.3772 6.54911L42.2099 0.267575H46.4675V16.6734H42.7067V8.0361H42.7073ZM56.3746 11.9283L60.5328 0.266986H64.4753L58.3459 16.6734H54.3864L48.257 0.267575H52.1995L56.3746 11.9283ZM76.1714 1.2365V0.267575H79.6171V6.90038H76.1714V6.56562C76.1714 6.09765 76.0884 5.64678 75.9563 5.19591C75.8406 4.77805 75.6249 4.37727 75.3269 4.0431C75.0452 3.69242 74.6811 3.42485 74.2498 3.22446C73.7857 2.99048 73.2557 2.92388 72.7256 2.92388C72.0792 2.92388 71.4171 3.02407 70.887 3.37475C70.3733 3.69242 69.9922 4.12679 69.6942 4.61125C69.3628 5.17941 69.1641 5.78057 69.0478 6.41533C68.9152 7.08367 68.8655 7.76853 68.8655 8.47047C68.8655 9.15532 68.9315 9.85726 69.0478 10.5421C69.1635 11.1604 69.3628 11.7786 69.6772 12.3297C69.9589 12.8307 70.3563 13.2485 70.87 13.5662C71.4001 13.9169 72.0629 14.0342 72.7256 14.0342C73.7028 14.0342 74.6139 13.8167 75.2766 13.1654C75.989 12.4635 76.453 11.5446 76.7675 10.6594L76.9001 10.3252L79.9982 11.3107L79.9152 11.6112C79.6832 12.3633 79.3687 13.0982 78.9544 13.7831C78.557 14.4178 78.0766 14.986 77.4635 15.4705C76.8674 15.9549 76.1714 16.3056 75.4093 16.5567C74.5478 16.8407 73.6367 16.9409 72.7256 16.9409C71.4995 16.9409 70.2739 16.7571 69.1968 16.2225C68.2197 15.738 67.4243 15.0862 66.8112 14.2846C66.1818 13.466 65.7511 12.5472 65.5027 11.5782C65.221 10.5592 65.1053 9.50659 65.1053 8.45397C65.1053 7.40135 65.221 6.36582 65.5027 5.3297C65.7511 4.37727 66.1654 3.45844 66.7949 2.6398C67.391 1.85476 68.17 1.20291 69.0975 0.735538C70.1413 0.183884 71.3504 0 72.5596 0C73.0067 0 73.4707 0.0500967 73.9015 0.15029C74.3655 0.233981 74.7962 0.384271 75.1936 0.584658C75.5583 0.768542 75.8733 0.985432 76.1714 1.2365Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_676_80"
                    x1="-1.98585"
                    y1="6.5781"
                    x2="4.26308"
                    y2="4.76683"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#48AAAD" />
                    <stop offset="1" stopColor="#177DDB" />
                  </linearGradient>
                </defs>
              </svg>
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
                <img src={iconClose} alt="" className="w-8 h-8 md:w-12 md:h-12 absolute -top-8 -right-8 md:-top-11 md:-right-11 cursor-pointer" onClick={handleCloseModal}/>
                <img src={imgCoin} alt="" className="absolute w-[43px] h-[49px] -top-6 md:w-[86px] md:h-[95px] md:-top-12 left-1/2"/>
                <img src={placard} alt="" className="md:w-[560px] md:h-[424px]"/>
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

        <div className="container font-normal text-base mt-16">
          <div className="flex box-border border-solid border-[#3D3D3D] border-y py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
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
            <div className="w-1/3 md:w-1/6 flex items-center justify-center box-border border-r border-solid border-[#3D3D3D]">
              {/* <img src={mainLogo} alt="" className="w-[80px] h-[22px]" /> */}
              <svg
                width="80"
                height="22"
                viewBox="0 0 80 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.82223 6.61586C2.81634 6.61586 3.6281 5.79722 3.6281 4.77819C3.6281 3.77567 2.81634 2.95703 1.82223 2.95703C0.811764 2.95703 0 3.77567 0 4.77819C0 5.79722 0.811764 6.61586 1.82223 6.61586Z"
                  fill="url(#paint0_linear_676_80)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.1954 0.652344C8.59605 0.652344 4.04047 5.23 4.04047 10.8768C4.04047 11.6288 4.12346 12.3638 4.27248 13.0651V13.0486L0.511719 19.0296L7.56922 18.6288C9.34177 20.1824 11.6613 21.1183 14.196 21.1183C19.7954 21.1183 24.3509 16.5407 24.3509 10.8774C24.3509 10.1424 24.2679 9.40748 24.1189 8.70554L27.8791 2.7234L20.8216 3.12417C19.049 1.58768 16.7301 0.652344 14.1954 0.652344ZM14.1954 3.60923C10.2032 3.60923 6.97252 6.86728 6.97252 10.8768C6.97252 11.8121 7.15486 12.6809 7.45292 13.4995L6.29342 15.5711H8.67904C10.0045 17.1583 11.9921 18.1608 14.1954 18.1608C18.1876 18.1608 21.4183 14.9028 21.4183 10.8768C21.4183 9.95795 21.236 9.07271 20.9379 8.27058L22.0974 6.18243H19.7118C18.3869 4.61175 16.415 3.60923 14.1954 3.60923Z"
                  fill="white"
                />
                <path
                  d="M34.5042 21.9289H33.9745V19.6614L33.6211 20.8664H33.2148L32.8969 19.6614V21.9289H32.3672V18.5808H32.9854L33.4273 20.1046L33.8691 18.5808H34.5048L34.5042 21.9289ZM37.0144 21.9288H35.4065V21.4507H35.9362V19.0589H35.4065V18.5807H37.0144V19.0589H36.4666V21.4507H37.0144V21.9288ZM40.0733 20.9013C40.0378 21.0782 39.9848 21.2201 39.9144 21.3619C39.844 21.4857 39.7555 21.6101 39.667 21.6988C39.561 21.7876 39.4551 21.8582 39.3136 21.9113C39.1902 21.9644 39.0307 22.0001 38.8717 22.0001C38.6243 22.0001 38.4299 21.9469 38.271 21.8407C38.112 21.7519 37.9706 21.6282 37.8646 21.4688C37.7761 21.2919 37.6883 21.1145 37.6527 20.902C37.5998 20.6895 37.5823 20.477 37.5823 20.2645C37.5823 20.0338 37.5998 19.8213 37.6527 19.6089C37.6883 19.3964 37.7587 19.2189 37.8646 19.0595C37.9706 18.9001 38.094 18.7757 38.2535 18.6695C38.4124 18.5807 38.6069 18.5276 38.8362 18.5276C38.9066 18.5276 38.9777 18.5276 39.0662 18.5451C39.1366 18.5807 39.2077 18.5982 39.2606 18.6339C39.3311 18.687 39.384 18.7226 39.437 18.7757C39.49 18.8464 39.5255 18.8995 39.5429 18.9707V18.5807H40.0197V19.8563H39.5429C39.5429 19.7501 39.5255 19.6438 39.5074 19.5376C39.4719 19.4489 39.437 19.3426 39.384 19.272C39.3311 19.2014 39.2606 19.1301 39.1721 19.077C39.0836 19.0239 38.9777 19.0064 38.8717 19.0064C38.7128 19.0064 38.5888 19.042 38.5009 19.1126C38.395 19.1832 38.3246 19.2895 38.2716 19.4139C38.2012 19.5201 38.1656 19.662 38.1482 19.8038C38.1307 19.9632 38.1127 20.1051 38.1127 20.2645C38.1127 20.4063 38.1301 20.5657 38.1482 20.7076C38.1656 20.867 38.2012 20.9913 38.2716 21.1151C38.3246 21.2388 38.395 21.3276 38.5009 21.3988C38.5894 21.4876 38.7128 21.5226 38.8717 21.5226C39.0836 21.5226 39.2426 21.4519 39.3666 21.3101C39.4906 21.1682 39.5785 20.9913 39.6495 20.7432L40.0733 20.9013ZM42.9351 21.9288H42.2639L41.3983 20.5826H41.1509V21.9288H40.6211V18.5807H41.7161C42.0869 18.5807 42.3699 18.6695 42.5818 18.8289C42.7762 19.0057 42.8822 19.2539 42.8822 19.5907C42.8822 19.7326 42.8647 19.8563 42.8117 19.9807C42.7762 20.087 42.7058 20.1757 42.6173 20.2645C42.5469 20.3532 42.4409 20.4063 42.3343 20.4595C42.2284 20.4951 42.1044 20.5301 41.981 20.5482L42.9351 21.9288ZM42.3524 19.5726C42.3524 19.4132 42.2994 19.2714 42.1935 19.1826C42.0701 19.112 41.9286 19.0589 41.7167 19.0589H41.1515V20.1038H41.7167C41.9286 20.1038 42.0701 20.0507 42.1935 19.962C42.2994 19.8913 42.3524 19.7495 42.3524 19.5726ZM43.271 20.2632C43.271 20.0326 43.3066 19.8201 43.3415 19.6076C43.3944 19.3951 43.4649 19.2176 43.5714 19.0582C43.6774 18.8989 43.8008 18.7745 43.9603 18.6682C44.1367 18.5795 44.3311 18.5264 44.5611 18.5264C44.7905 18.5264 44.9849 18.5795 45.1438 18.6682C45.3027 18.7745 45.4442 18.8989 45.5502 19.0582C45.6561 19.2176 45.7265 19.3951 45.762 19.6076C45.815 19.8201 45.8325 20.0326 45.8325 20.2632C45.8325 20.4757 45.815 20.6882 45.762 20.9007C45.7265 21.1132 45.6561 21.2907 45.5502 21.4676C45.4442 21.6269 45.3202 21.7513 45.1613 21.8394C44.9849 21.9457 44.7905 21.9988 44.5605 21.9988C44.3305 21.9988 44.1186 21.9457 43.9597 21.8394C43.8008 21.7507 43.6593 21.6269 43.5708 21.4676C43.4649 21.2907 43.3944 21.1132 43.3408 20.9007C43.3059 20.6888 43.271 20.4763 43.271 20.2632ZM43.8008 20.2632C43.8008 20.4051 43.8182 20.5645 43.8363 20.7063C43.8718 20.8657 43.9067 20.9901 43.9597 21.1138C44.0127 21.2376 44.0831 21.3263 44.1897 21.3976C44.2782 21.4863 44.4016 21.5213 44.5605 21.5213C44.702 21.5213 44.8253 21.4857 44.9313 21.3976C45.0198 21.3269 45.1077 21.2382 45.1606 21.1138C45.2136 20.9901 45.2491 20.8657 45.2666 20.7063C45.3021 20.5645 45.3021 20.4051 45.3021 20.2632C45.3021 20.1038 45.3021 19.962 45.2666 19.8026C45.2491 19.6607 45.2136 19.5189 45.1606 19.4126C45.1077 19.2889 45.0192 19.182 44.9313 19.1114C44.8253 19.0407 44.7013 19.0051 44.5605 19.0051C44.3131 19.0051 44.1367 19.1114 43.9952 19.342C43.8718 19.5551 43.8008 19.8563 43.8008 20.2632ZM48.7653 18.5807L47.7233 21.9288H47.1225L46.0805 18.5807H46.6283L47.4235 21.2382L48.2188 18.5807H48.7653ZM51.0968 21.9288H49.4889V21.4507H50.0186V19.0589H49.4889V18.5807H51.0968V19.0589H50.549V21.4507H51.0968V21.9288ZM54.259 21.0076C54.259 21.167 54.2235 21.3088 54.1886 21.4326C54.1356 21.5388 54.0652 21.6451 53.9592 21.7338C53.8707 21.8226 53.7648 21.8757 53.6414 21.9288C53.518 21.9644 53.394 21.9994 53.2525 21.9994C53.0936 21.9994 52.9521 21.9638 52.8287 21.9107C52.7053 21.8576 52.5994 21.7513 52.4928 21.6269V21.9282H52.016V20.8301H52.4928C52.4928 20.9538 52.5283 21.0426 52.5632 21.1313C52.5988 21.202 52.6517 21.2732 52.7047 21.3438C52.7751 21.3969 52.8462 21.4326 52.934 21.4676C53.0225 21.5032 53.1104 21.5207 53.1989 21.5207C53.3578 21.5207 53.4819 21.4851 53.5878 21.3969C53.6763 21.3263 53.7293 21.2201 53.7293 21.0601C53.7293 20.9713 53.7118 20.9007 53.6763 20.8295C53.6588 20.7763 53.6059 20.7232 53.5529 20.6701C53.4999 20.6345 53.4295 20.5813 53.3585 20.5463C53.27 20.5107 53.1821 20.4757 53.0755 20.4401C52.9521 20.4045 52.8281 20.3513 52.7047 20.2982C52.5988 20.2451 52.4747 20.192 52.3869 20.1213C52.2984 20.0326 52.2105 19.9445 52.1569 19.8376C52.0865 19.7313 52.0684 19.5895 52.0684 19.4126C52.0684 19.2707 52.0858 19.147 52.1388 19.0226C52.1918 18.9164 52.2622 18.8276 52.3507 18.757C52.4567 18.6864 52.5452 18.6151 52.6686 18.5801C52.792 18.5445 52.916 18.527 53.0574 18.527C53.1989 18.527 53.3404 18.5626 53.4463 18.6157C53.5523 18.6864 53.6408 18.7751 53.6938 18.8814V18.5801H54.1705V19.6251H53.6938C53.6938 19.4301 53.6582 19.2707 53.5523 19.1645C53.4463 19.0582 53.3049 19.0051 53.1285 19.0051C52.9696 19.0051 52.8456 19.0407 52.7396 19.1114C52.6511 19.182 52.5981 19.2707 52.5981 19.4126C52.5981 19.4832 52.6156 19.5364 52.6337 19.572C52.6692 19.6251 52.7041 19.6782 52.7571 19.7138C52.7926 19.7495 52.863 19.7845 52.9334 19.8201C53.0219 19.8557 53.1098 19.8907 53.1983 19.9263C53.3398 19.962 53.4632 20.0151 53.5872 20.0857C53.7106 20.1388 53.8165 20.2095 53.9231 20.2807C54.0116 20.3695 54.0995 20.4576 54.1705 20.582C54.2241 20.7063 54.259 20.8482 54.259 21.0076ZM56.8204 21.9288H55.2125V21.4507H55.7423V19.0589H55.2125V18.5807H56.8204V19.0589H56.2726V21.4507H56.8204V21.9288ZM57.5982 20.2632C57.5982 20.0326 57.6157 19.8201 57.6686 19.6076C57.7216 19.3951 57.792 19.2176 57.8986 19.0582C57.9871 18.8989 58.1286 18.7745 58.2875 18.6682C58.4464 18.5795 58.6409 18.5264 58.8883 18.5264C59.1182 18.5264 59.3121 18.5795 59.471 18.6682C59.6299 18.7745 59.7714 18.8989 59.8599 19.0582C59.9658 19.2176 60.0362 19.3951 60.0898 19.6076C60.1434 19.8201 60.1603 20.0326 60.1603 20.2632C60.1603 20.4757 60.1428 20.6882 60.0898 20.9007C60.0369 21.1132 59.9664 21.2907 59.8779 21.4676C59.772 21.6269 59.6305 21.7513 59.4716 21.8394C59.3127 21.9457 59.1182 21.9988 58.8889 21.9988C58.6415 21.9988 58.447 21.9457 58.2881 21.8394C58.1292 21.7507 57.9877 21.6269 57.8818 21.4676C57.7933 21.2907 57.7054 21.1132 57.6699 20.9007C57.6157 20.6888 57.5982 20.4763 57.5982 20.2632ZM58.128 20.2632C58.128 20.4051 58.1454 20.5645 58.1635 20.7063C58.1809 20.8657 58.2339 20.9901 58.2869 21.1138C58.3398 21.2376 58.4103 21.3263 58.5168 21.3976C58.6053 21.4863 58.7287 21.5213 58.8877 21.5213C59.0291 21.5213 59.1525 21.4857 59.241 21.3976C59.347 21.3269 59.4174 21.2382 59.471 21.1138C59.524 20.9901 59.5769 20.8657 59.5944 20.7063C59.6118 20.5645 59.6299 20.4051 59.6299 20.2632C59.6299 20.1038 59.6125 19.962 59.5944 19.8026C59.5769 19.6607 59.524 19.5189 59.471 19.4126C59.418 19.2889 59.3476 19.182 59.241 19.1114C59.1525 19.0407 59.0291 19.0051 58.8877 19.0051C58.6402 19.0051 58.4458 19.1114 58.3224 19.342C58.199 19.5551 58.128 19.8563 58.128 20.2632ZM62.8096 21.9288H62.1913L61.2023 19.502V21.9288H60.6726V18.5807H61.3438L62.2798 20.9013V18.5807H62.8096V21.9288ZM68.7102 20.9013C68.6747 21.0782 68.6217 21.2201 68.5513 21.3619C68.4809 21.4857 68.3924 21.6101 68.3039 21.6988C68.1979 21.7876 68.092 21.8582 67.9505 21.9113C67.8271 21.9644 67.6856 22.0001 67.5086 22.0001C67.2793 22.0001 67.0848 21.9469 66.9079 21.8407C66.7489 21.7519 66.6249 21.6282 66.519 21.4688C66.413 21.2919 66.3426 21.1145 66.2896 20.902C66.2366 20.6895 66.2192 20.477 66.2192 20.2645C66.2192 20.0338 66.2366 19.8213 66.2896 19.6089C66.3426 19.3964 66.413 19.2189 66.519 19.0595C66.6075 18.9001 66.7489 18.7757 66.9079 18.6695C67.0493 18.5807 67.2438 18.5276 67.4731 18.5276C67.5435 18.5276 67.632 18.5276 67.7031 18.5451C67.7735 18.5807 67.8446 18.5982 67.915 18.6339C67.9679 18.687 68.0384 18.7226 68.0739 18.7757C68.1269 18.8464 68.1624 18.8995 68.1798 18.9707V18.5807H68.6566V19.8563H68.1798C68.1798 19.7501 68.1798 19.6438 68.1443 19.5376C68.1269 19.4489 68.0739 19.3426 68.0209 19.272C67.9679 19.2014 67.8975 19.1301 67.809 19.077C67.7205 19.0239 67.6327 19.0064 67.5086 19.0064C67.3672 19.0064 67.2438 19.042 67.1378 19.1126C67.0493 19.1832 66.9614 19.2895 66.9085 19.4139C66.8555 19.5201 66.8025 19.662 66.7851 19.8038C66.7676 19.9632 66.7496 20.1051 66.7496 20.2645C66.7496 20.4063 66.767 20.5657 66.7851 20.7076C66.8025 20.867 66.8555 20.9913 66.9085 21.1151C66.9614 21.2388 67.0319 21.3276 67.1378 21.3988C67.2263 21.4876 67.3497 21.5226 67.5086 21.5226C67.7205 21.5226 67.8975 21.4519 68.0035 21.3101C68.1269 21.1682 68.2154 20.9913 68.2864 20.7432L68.7102 20.9013ZM71.395 21.9288H70.8653V20.4582H69.7877V21.9288H69.258V18.5807H69.7877V19.9801H70.8653V18.5807H71.395V21.9288ZM73.992 21.9288L73.7446 21.1313H72.6496L72.4021 21.9288H71.8543L72.8964 18.5807H73.4971L74.5392 21.9288H73.992ZM72.791 20.6707H73.6037L73.1974 19.2889L72.791 20.6707ZM76.8719 21.9288H75.264V21.4507H75.7937V19.0589H75.264V18.5807H76.8719V19.0589H76.3241V21.4507H76.8719V21.9288ZM79.9986 21.9288H79.3803L78.3913 19.502V21.9288H77.8615V18.5807H78.5153L79.4694 20.9013V18.5807H79.9992V21.9288H79.9986Z"
                  fill="#177DDB"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42.7073 8.0361L40.819 11.6784H37.9366L36.0811 8.0697V16.6734H32.3203V0.267575H36.5445L39.3772 6.54911L42.2099 0.267575H46.4675V16.6734H42.7067V8.0361H42.7073ZM56.3746 11.9283L60.5328 0.266986H64.4753L58.3459 16.6734H54.3864L48.257 0.267575H52.1995L56.3746 11.9283ZM76.1714 1.2365V0.267575H79.6171V6.90038H76.1714V6.56562C76.1714 6.09765 76.0884 5.64678 75.9563 5.19591C75.8406 4.77805 75.6249 4.37727 75.3269 4.0431C75.0452 3.69242 74.6811 3.42485 74.2498 3.22446C73.7857 2.99048 73.2557 2.92388 72.7256 2.92388C72.0792 2.92388 71.4171 3.02407 70.887 3.37475C70.3733 3.69242 69.9922 4.12679 69.6942 4.61125C69.3628 5.17941 69.1641 5.78057 69.0478 6.41533C68.9152 7.08367 68.8655 7.76853 68.8655 8.47047C68.8655 9.15532 68.9315 9.85726 69.0478 10.5421C69.1635 11.1604 69.3628 11.7786 69.6772 12.3297C69.9589 12.8307 70.3563 13.2485 70.87 13.5662C71.4001 13.9169 72.0629 14.0342 72.7256 14.0342C73.7028 14.0342 74.6139 13.8167 75.2766 13.1654C75.989 12.4635 76.453 11.5446 76.7675 10.6594L76.9001 10.3252L79.9982 11.3107L79.9152 11.6112C79.6832 12.3633 79.3687 13.0982 78.9544 13.7831C78.557 14.4178 78.0766 14.986 77.4635 15.4705C76.8674 15.9549 76.1714 16.3056 75.4093 16.5567C74.5478 16.8407 73.6367 16.9409 72.7256 16.9409C71.4995 16.9409 70.2739 16.7571 69.1968 16.2225C68.2197 15.738 67.4243 15.0862 66.8112 14.2846C66.1818 13.466 65.7511 12.5472 65.5027 11.5782C65.221 10.5592 65.1053 9.50659 65.1053 8.45397C65.1053 7.40135 65.221 6.36582 65.5027 5.3297C65.7511 4.37727 66.1654 3.45844 66.7949 2.6398C67.391 1.85476 68.17 1.20291 69.0975 0.735538C70.1413 0.183884 71.3504 0 72.5596 0C73.0067 0 73.4707 0.0500967 73.9015 0.15029C74.3655 0.233981 74.7962 0.384271 75.1936 0.584658C75.5583 0.768542 75.8733 0.985432 76.1714 1.2365Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_676_80"
                    x1="-1.98585"
                    y1="6.5781"
                    x2="4.26308"
                    y2="4.76683"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#48AAAD" />
                    <stop offset="1" stopColor="#177DDB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex items-center box-border border-l border-solid border-[#3D3D3D] pl-4 md:pl-8">
              {/* <img
                src={Icon11}
                alt=""
                className="w-6 h-6 cursor-pointer"
                onClick={() => handleBottomClick("1")}
              /> */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={() => handleBottomClick("1")}
              >
                <g mask="url(#mask0_676_170)">
                  <path
                    d="M17.75 2.9375H20.8171L14.1171 10.6146L22 21.0632H15.8286L10.9914 14.7275L5.46286 21.0632H2.39286L9.55857 12.8489L2 2.93893H8.32857L12.6943 8.72893L17.75 2.9375ZM16.6714 19.2232H18.3714L7.4 4.68179H5.57714L16.6714 19.2232Z"
                    fill="#EEEEFB"
                  />
                </g>
              </svg>
              {/* <svg
                width="24"
                height="24"
                id="Calque_1"
                data-name="Calque 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 800"
                style={{ width: "100%" }}
              >
                <path
                  style={{ fill: "#fff", strokeWidth: 0 }}
                  d="M450.5,359.4l197.5-224.9h-46.8l-171.6,195.2-137-195.2h-158l207.1,295.2-207.1,235.8h46.8l181.1-206.2,144.7,206.2h158M198.4,169.1h71.9l330.9,463.6h-71.9"
                />
              </svg>
              <svg
                width="24"
                height="24"
                id="Calque_1"
                data-name="Calque 1"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 800"
                style={{ width: "100%" }}
              >
                <path
                  style={{ fill: "#fff", strokeWidth: 0 }}
                  d="M673.1,162.9H126.9c-27.9,0-50.6,22.6-50.6,50.6v373c0,27.9,22.6,50.6,50.6,50.6h546.2c27.9,0,50.6-22.6,50.6-50.6V213.5c0-27.9-22.6-50.6-50.6-50.6ZM126.9,194.5h546.2c10.5,0,19,8.5,19,19v38.3l-292.1,159.4L107.9,251.8v-38.3c0-10.5,8.5-19,19-19ZM673.1,605.5H126.9c-10.5,0-19-8.5-19-19v-298.7l284.5,155.3c2.3,1.3,5,1.9,7.6,1.9,2.6,0,5.2-.6,7.6-1.9l284.5-155.3v298.7c0,10.5-8.5,19-19,19Z"
                />
              </svg>
              <svg
                width="24"
                height="24"
                id="Calque_1"
                data-name="Calque 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 800"
                style={{ width: "100%" }}
              >
                <path
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "16.7px",
                  }}
                  d="M293.2,569.6c-14.8,21.8-31.6,43.6-48.5,63.8-123-3.5-169.7-83.3-169.7-83.3,1.7-113.1,29.2-224.4,80.2-325.3,44.8-35.1,99.5-55.3,156.3-58l16.7,38.5c23.8-3.3,47.8-5,71.8-5.2,24.1,0,48.2,1.7,72.2,5l16.7-38.5c56.9,2.8,111.6,23.2,156.3,58.5,50.8,100.9,78.1,212,79.8,325,0,0-46.7,79.8-169.7,83.3-16.9-20.4-32.9-41.5-47.7-63.5M615.3,521.5c-64,32.4-125.9,64.8-215.3,64.8s-151.3-32.4-215.3-64.8"
                />
                <circle
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "16.7px",
                  }}
                  cx="297.4"
                  cy="437.2"
                  r="55.8"
                />
                <circle
                  style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "16.7px",
                  }}
                  cx="502.5"
                  cy="437.2"
                  r="55.8"
                  transform="translate(-9.5 863.2) rotate(-80.8)"
                />
              </svg>

              <svg
                width="24"
                height="24"
                id="Calque_1"
                data-name="Calque 1"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 800"
                style={{ width: "100%" }}
              >
                <path
                  style={{ fill: "#fff", strokeWidth: 0 }}
                  d="M692.3,133.9c-9.8-8.5-23.6-10.8-35.7-6.1L117.8,339.5c-18,7.1-26.9,27.4-19.8,45.4,4.4,11.1,14.1,19.2,25.7,21.5l146.2,29.3v180.5c-.1,14.2,8.4,27.1,21.6,32.4,4.3,1.8,8.9,2.7,13.6,2.8,9.2,0,18.1-3.8,24.5-10.4l83.5-83.5,123.2,108.4c6.3,5.6,14.5,8.8,23,8.8,3.7,0,7.4-.6,10.9-1.7,11.8-3.7,20.7-13.5,23.4-25.5l109.8-479.2c2.9-12.7-1.4-25.9-11.3-34.4ZM119,373.1c-.6-5.2,2.4-10.1,7.4-11.9l493.9-194-341.3,246.5-150.6-30.1c-5.2-.9-9-5.2-9.3-10.4ZM313.3,624.4c-4.6,4.6-12,4.6-16.5,0-2.2-2.2-3.4-5.2-3.4-8.3v-164.3l102.4,90.1-82.4,82.4ZM680.8,163l-109.8,479.2c-1.4,6.3-7.7,10.2-14,8.8-1.9-.4-3.6-1.3-5.1-2.6l-251.5-221.3,378.5-273.4c2,2.7,2.7,6.1,1.9,9.4Z"
                />
              </svg> */}

              {/* <img
                src={Icon12}
                alt=""
                className="w-6 h-6 ml-4 md:ml-8 cursor-pointer"
                onClick={() => handleBottomClick("2")}
              /> */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" ml-4 md:ml-8 cursor-pointer"
                onClick={() => handleBottomClick("2")}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.80215 8.35243C2.52215 10.9554 2.53415 13.9574 2.92415 16.5504C3.02883 17.2473 3.36502 17.8886 3.87857 18.3712C4.39212 18.8537 5.05313 19.1493 5.75515 19.2104L7.26515 19.3404C10.4151 19.6144 13.5811 19.6144 16.7311 19.3404L18.2411 19.2104C18.9432 19.1493 19.6042 18.8537 20.1177 18.3712C20.6313 17.8886 20.9675 17.2473 21.0721 16.5504C21.4621 13.9574 21.4741 10.9554 21.1941 8.35243C21.158 8.0505 21.1173 7.74914 21.0721 7.44843C20.9675 6.75158 20.6313 6.11024 20.1177 5.62771C19.6042 5.14518 18.9432 4.84955 18.2411 4.78843L16.7311 4.65843C13.5821 4.38469 10.4152 4.38469 7.26615 4.65843L5.75615 4.78843C5.05395 4.84934 4.39271 5.14487 3.87896 5.62742C3.36521 6.10997 3.02888 6.75142 2.92415 7.44843C2.87906 7.74915 2.83839 8.05052 2.80215 8.35243ZM7.39515 6.15243C10.4577 5.8862 13.5376 5.8862 16.6001 6.15243L18.1101 6.28343C18.4768 6.31544 18.822 6.46982 19.0902 6.72176C19.3585 6.9737 19.5342 7.30854 19.5891 7.67243L19.6231 7.90543L14.0621 10.9954C13.4308 11.3462 12.7204 11.5303 11.9981 11.5303C11.2759 11.5303 10.5655 11.3462 9.93415 10.9954L4.37315 7.90543L4.40715 7.67243C4.4617 7.30855 4.63718 6.97363 4.9053 6.72165C5.17343 6.46967 5.51858 6.31531 5.88515 6.28343L7.39515 6.15243ZM19.8061 9.51943C20.0005 11.7891 19.9277 14.0737 19.5891 16.3264C19.5346 16.6903 19.3591 17.0252 19.091 17.2772C18.8229 17.5292 18.4777 17.6836 18.1111 17.7154L16.6011 17.8464C13.5383 18.1127 10.458 18.1127 7.39515 17.8464L5.88515 17.7154C5.51858 17.6836 5.17343 17.5292 4.9053 17.2772C4.63718 17.0252 4.4617 16.6903 4.40715 16.3264C4.0683 14.0738 3.99513 11.7891 4.18915 9.51943L9.20515 12.3064C10.0594 12.781 11.0204 13.0301 11.9976 13.0301C12.9748 13.0301 13.9359 12.781 14.7901 12.3064L19.8061 9.51943Z"
                  fill="#EEEEFB"
                />
              </svg>
              {/* <img
                src={Icon13}
                alt=""
                className="w-6 h-6 ml-4 md:ml-8 cursor-pointer"
                onClick={() => handleBottomClick("3")}
              /> */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" ml-4 md:ml-8 cursor-pointer"
                onClick={() => handleBottomClick("3")}
              >
                <g clipPath="url(#clip0_676_179)">
                  <path
                    d="M15.0059 4C15.2649 4 15.5899 4.068 15.8509 4.132C16.7609 4.352 17.8399 4.625 18.6059 5.2C19.3189 5.735 19.8729 6.668 20.3009 7.616C21.1909 9.591 21.8099 12.224 22.0239 14.226C22.1259 15.176 22.1509 16.132 21.9679 16.775C21.8779 17.091 21.6829 17.329 21.5459 17.475C21.1279 17.918 20.5899 18.249 20.0579 18.55L19.7939 18.699C19.6201 18.7957 19.4451 18.8904 19.2689 18.983L18.7469 19.253L18.0299 19.61L17.4529 19.894C17.2418 19.9998 17 20.0274 16.7705 19.972C16.5409 19.9166 16.3383 19.7817 16.1987 19.5913C16.059 19.4008 15.9913 19.1671 16.0074 18.9315C16.0236 18.6959 16.1226 18.4736 16.2869 18.304L15.8529 17.436C14.605 17.8152 13.3072 18.0054 12.0029 18C10.6329 18 9.32594 17.8 8.15294 17.436L7.71994 18.302C7.8849 18.4713 7.98455 18.6936 8.0012 18.9294C8.01786 19.1652 7.95045 19.3992 7.81093 19.5901C7.67141 19.7809 7.46881 19.9161 7.23907 19.9717C7.00933 20.0274 6.76731 19.9998 6.55594 19.894L6.01194 19.624C5.40794 19.326 4.80394 19.028 4.21594 18.699C3.60194 18.356 2.95094 17.991 2.46394 17.474C2.2696 17.2776 2.12493 17.0376 2.04194 16.774C1.85794 16.132 1.88394 15.177 1.98494 14.226C2.19894 12.224 2.81794 9.591 3.70894 7.616C4.13594 6.668 4.68994 5.735 5.40294 5.2C6.16894 4.625 7.24794 4.352 8.15794 4.132C8.41894 4.068 8.74294 4 9.00294 4C9.14676 3.99988 9.28892 4.03078 9.41971 4.09059C9.5505 4.15041 9.66685 4.23773 9.76082 4.3466C9.85479 4.45548 9.92418 4.58334 9.96424 4.72147C10.0043 4.8596 10.0141 5.00474 9.99294 5.147C10.6584 5.04854 11.3302 4.9994 12.0029 5C12.6939 5 13.3689 5.05 14.0169 5.148C13.9956 5.00567 14.0053 4.86041 14.0453 4.72216C14.0853 4.58391 14.1546 4.45592 14.2486 4.34693C14.3426 4.23794 14.459 4.15052 14.5899 4.09065C14.7208 4.03078 14.862 3.99985 15.0059 4ZM16.3599 6.363C16.2099 6.315 16.1739 6.336 16.1199 6.426L16.0579 6.538C15.8963 6.81506 15.6509 7.03367 15.3571 7.16234C15.0633 7.29102 14.7362 7.32311 14.4229 7.254C13.6276 7.08328 12.8164 6.99813 12.0029 7C11.1509 7 10.3359 7.09 9.58294 7.254C9.26971 7.32311 8.94263 7.29102 8.64881 7.16234C8.35498 7.03367 8.10958 6.81506 7.94794 6.538L7.88594 6.427C7.83294 6.337 7.79694 6.316 7.64794 6.363C7.29194 6.476 6.90994 6.597 6.60294 6.8C6.31594 7.015 5.93294 7.55 5.53194 8.439C4.76594 10.136 4.16594 12.643 3.97394 14.439C3.93394 14.818 3.91294 15.143 3.90794 15.411V15.705C3.91194 15.883 3.92494 16.024 3.94294 16.127C4.19694 16.375 4.51094 16.57 4.82594 16.749L5.50794 17.126L5.95394 17.361L6.31794 16.633C6.14171 16.4688 6.03067 16.2465 6.00524 16.007C5.97981 15.7674 6.0417 15.5268 6.17952 15.3292C6.31735 15.1317 6.52185 14.9905 6.75543 14.9317C6.98902 14.8728 7.23599 14.9003 7.45094 15.009C8.66694 15.62 10.2489 16 12.0029 16C13.7559 16 15.3389 15.618 16.5549 15.01C16.7607 14.9069 16.9957 14.878 17.2204 14.928C17.445 14.9781 17.6455 15.1041 17.788 15.2848C17.9306 15.4655 18.0064 15.6899 18.0027 15.92C17.9991 16.1501 17.9161 16.3719 17.7679 16.548L17.6879 16.633L18.0519 17.363C18.3499 17.209 18.6489 17.046 18.9489 16.88C19.3389 16.664 19.7489 16.437 20.0659 16.127C20.0839 16.024 20.0959 15.883 20.1009 15.705V15.411C20.0928 15.0859 20.0708 14.7612 20.0349 14.438C19.8429 12.643 19.2429 10.136 18.4769 8.438C18.0769 7.55 17.6929 7.015 17.4069 6.8C17.0989 6.597 16.7169 6.476 16.3599 6.363ZM8.75294 10.5C9.21707 10.5 9.66219 10.6844 9.99038 11.0126C10.3186 11.3408 10.5029 11.7859 10.5029 12.25C10.5029 12.7141 10.3186 13.1592 9.99038 13.4874C9.66219 13.8156 9.21707 14 8.75294 14C8.28882 14 7.8437 13.8156 7.51551 13.4874C7.18732 13.1592 7.00294 12.7141 7.00294 12.25C7.00294 11.7859 7.18732 11.3408 7.51551 11.0126C7.8437 10.6844 8.28882 10.5 8.75294 10.5ZM15.2529 10.5C15.7171 10.5 16.1622 10.6844 16.4904 11.0126C16.8186 11.3408 17.0029 11.7859 17.0029 12.25C17.0029 12.7141 16.8186 13.1592 16.4904 13.4874C16.1622 13.8156 15.7171 14 15.2529 14C14.7888 14 14.3437 13.8156 14.0155 13.4874C13.6873 13.1592 13.5029 12.7141 13.5029 12.25C13.5029 11.7859 13.6873 11.3408 14.0155 11.0126C14.3437 10.6844 14.7888 10.5 15.2529 10.5Z"
                    fill="#EEEEFB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_676_179">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {/* <img
                src={Icon14}
                alt=""
                className="w-6 h-6 ml-4 md:ml-8 cursor-pointer"
                onClick={() => handleBottomClick("4")}
              /> */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" ml-4 md:ml-8 cursor-pointer"
                onClick={() => handleBottomClick("4")}
              >
                <path
                  d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.249 15.723"
                  stroke="#EEEEFB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="container">
          {/* <img src={footertitle} alt="" className="w-full" /> */}
          <svg
            viewBox="0 0 1312 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M65.1729 123H50.0117V58.3271L40.417 92.6777H28.6982L19.25 58.3271V123H4.08887V27.4189H22.1064L34.5576 70.6318L47.0088 27.4189H65.1729V123ZM139.66 123H93.8105V109.377H108.898V41.1152H93.8105V27.4189H139.66V41.1152H124.06V109.377H139.66V123ZM233.996 93.7764C232.824 98.4639 231.262 102.712 229.309 106.521C227.355 110.329 224.963 113.576 222.131 116.262C219.348 118.947 216.076 121.022 212.316 122.487C208.605 123.952 204.333 124.685 199.499 124.685C192.81 124.685 187.146 123.317 182.507 120.583C177.868 117.8 174.06 114.113 171.081 109.523C168.151 104.885 166.027 99.6113 164.709 93.7031C163.439 87.7461 162.805 81.5693 162.805 75.1729C162.805 68.7764 163.439 62.5996 164.709 56.6426C166.027 50.6855 168.127 45.4365 171.008 40.8955C173.938 36.3545 177.648 32.7168 182.141 29.9824C186.633 27.1992 192.126 25.8076 198.62 25.8076C200.72 25.8076 202.844 26.0762 204.992 26.6133C207.141 27.1504 209.143 27.9805 210.998 29.1035C212.854 30.1777 214.465 31.5205 215.832 33.1318C217.248 34.7432 218.249 36.5986 218.835 38.6982V27.4189H232.531V63.6006H218.835C218.835 60.6221 218.469 57.6924 217.736 54.8115C217.004 51.8818 215.832 49.2939 214.221 47.0479C212.609 44.8018 210.583 42.9707 208.142 41.5547C205.7 40.1387 202.819 39.4307 199.499 39.4307C195.202 39.4307 191.687 40.4805 188.952 42.5801C186.218 44.6797 184.021 47.4385 182.36 50.8564C180.7 54.2744 179.528 58.1074 178.845 62.3555C178.21 66.6035 177.893 70.876 177.893 75.1729C177.893 79.4697 178.21 83.7666 178.845 88.0635C179.528 92.3604 180.676 96.2178 182.287 99.6357C183.898 103.005 186.096 105.739 188.879 107.839C191.662 109.938 195.202 110.988 199.499 110.988C205.7 110.988 210.461 109.011 213.781 105.056C217.15 101.101 219.836 95.7783 221.838 89.0889L233.996 93.7764ZM315.734 123H296.545L271.789 84.3281H264.904V123H249.743V27.4189H281.237C291.735 27.4189 299.89 29.8359 305.7 34.6699C311.511 39.4551 314.416 46.5596 314.416 55.9834C314.416 60.1826 313.757 63.8936 312.438 67.1162C311.169 70.29 309.338 73.0244 306.945 75.3193C304.602 77.6143 301.843 79.4453 298.669 80.8125C295.544 82.1309 292.15 83.0342 288.488 83.5225L315.734 123ZM299.255 55.7637C299.255 50.8809 297.644 47.2187 294.421 44.7773C291.247 42.3359 286.853 41.1152 281.237 41.1152H264.904V70.6318H281.237C286.853 70.6318 291.247 69.4111 294.421 66.9697C297.644 64.5283 299.255 60.793 299.255 55.7637ZM325.622 75.1729C325.622 68.7764 326.306 62.5996 327.673 56.6426C329.04 50.6855 331.164 45.4365 334.045 40.8955C336.926 36.3545 340.686 32.7168 345.324 29.9824C350.012 27.1992 355.651 25.8076 362.243 25.8076C368.835 25.8076 374.45 27.1992 379.089 29.9824C383.776 32.7168 387.585 36.3545 390.515 40.8955C393.444 45.4365 395.568 50.6855 396.887 56.6426C398.205 62.5996 398.864 68.7764 398.864 75.1729C398.864 81.5693 398.205 87.7461 396.887 93.7031C395.568 99.6113 393.469 104.885 390.588 109.523C387.707 114.113 383.923 117.8 379.235 120.583C374.597 123.317 368.933 124.685 362.243 124.685C355.554 124.685 349.865 123.317 345.178 120.583C340.539 117.8 336.755 114.113 333.825 109.523C330.944 104.885 328.869 99.6113 327.6 93.7031C326.281 87.7461 325.622 81.5693 325.622 75.1729ZM340.783 75.1729C340.783 79.4697 341.101 83.7666 341.735 88.0635C342.419 92.3604 343.542 96.2178 345.104 99.6357C346.716 103.005 348.889 105.739 351.623 107.839C354.406 109.938 357.946 110.988 362.243 110.988C366.54 110.988 370.056 109.938 372.79 107.839C375.573 105.739 377.746 103.005 379.309 99.6357C380.92 96.2178 382.043 92.3604 382.678 88.0635C383.361 83.7666 383.703 79.4697 383.703 75.1729C383.703 70.876 383.361 66.6035 382.678 62.3555C382.043 58.1074 380.92 54.2744 379.309 50.8564C377.746 47.4385 375.549 44.6797 372.717 42.5801C369.934 40.4805 366.442 39.4307 362.243 39.4307C355.261 39.4307 349.938 42.5801 346.276 48.8789C342.614 55.1777 340.783 63.9424 340.783 75.1729ZM482.507 27.4189L452.697 123H435.412L405.603 27.4189H421.496L444.128 103.078L466.613 27.4189H482.507ZM549.084 123H503.234V109.377H518.322V41.1152H503.234V27.4189H549.084V41.1152H533.483V109.377H549.084V123ZM639.538 96.7793C639.538 101.174 638.781 105.104 637.268 108.571C635.803 111.989 633.776 114.895 631.188 117.287C628.649 119.68 625.598 121.511 622.033 122.78C618.518 124.05 614.758 124.685 610.754 124.685C606.262 124.685 602.209 123.879 598.596 122.268C594.982 120.656 591.882 117.995 589.294 114.284V123H575.671V91.7988H589.294C589.294 94.9238 589.831 97.6826 590.905 100.075C592.028 102.468 593.493 104.494 595.3 106.154C597.106 107.766 599.206 109.011 601.599 109.89C603.991 110.72 606.53 111.135 609.216 111.135C613.757 111.135 617.419 110.085 620.202 107.985C622.985 105.886 624.377 102.541 624.377 97.9512C624.377 95.5586 623.938 93.5078 623.059 91.7988C622.229 90.0898 621.008 88.5762 619.396 87.2578C617.834 85.8906 615.905 84.7188 613.61 83.7422C611.315 82.7168 608.703 81.6426 605.773 80.5195C602.307 79.3477 598.84 78.0293 595.373 76.5645C591.906 75.0996 588.806 73.293 586.071 71.1445C583.337 68.9961 581.115 66.3594 579.406 63.2344C577.697 60.0605 576.843 56.0811 576.843 51.2959C576.843 47.0967 577.6 43.4346 579.113 40.3096C580.676 37.1357 582.727 34.4746 585.266 32.3262C587.854 30.1777 590.832 28.5664 594.201 27.4922C597.619 26.3691 601.232 25.8076 605.041 25.8076C609.436 25.8076 613.195 26.7354 616.32 28.5908C619.494 30.4463 621.936 32.9121 623.645 35.9883V27.4189H637.268V57.1553H623.645C623.645 51.54 622.155 47.1699 619.177 44.0449C616.247 40.8711 612.292 39.2842 607.312 39.2842C602.917 39.2842 599.255 40.3096 596.325 42.3604C593.444 44.4111 592.004 47.292 592.004 51.0029C592.004 52.9072 592.37 54.543 593.103 55.9102C593.884 57.2285 594.982 58.4492 596.398 59.5723C597.863 60.6465 599.694 61.6719 601.892 62.6484C604.089 63.5762 606.628 64.6016 609.509 65.7246C613.122 66.9941 616.711 68.4346 620.275 70.0459C623.84 71.6572 627.038 73.6348 629.87 75.9785C632.702 78.3223 635.021 81.1787 636.828 84.5479C638.635 87.8682 639.538 91.9453 639.538 96.7793ZM712.854 123H667.004V109.377H682.092V41.1152H667.004V27.4189H712.854V41.1152H697.253V109.377H712.854V123ZM735.046 75.1729C735.046 68.7764 735.729 62.5996 737.097 56.6426C738.464 50.6855 740.588 45.4365 743.469 40.8955C746.35 36.3545 750.109 32.7168 754.748 29.9824C759.436 27.1992 765.075 25.8076 771.667 25.8076C778.259 25.8076 783.874 27.1992 788.513 29.9824C793.2 32.7168 797.009 36.3545 799.938 40.8955C802.868 45.4365 804.992 50.6855 806.311 56.6426C807.629 62.5996 808.288 68.7764 808.288 75.1729C808.288 81.5693 807.629 87.7461 806.311 93.7031C804.992 99.6113 802.893 104.885 800.012 109.523C797.131 114.113 793.347 117.8 788.659 120.583C784.021 123.317 778.356 124.685 771.667 124.685C764.978 124.685 759.289 123.317 754.602 120.583C749.963 117.8 746.179 114.113 743.249 109.523C740.368 104.885 738.293 99.6113 737.023 93.7031C735.705 87.7461 735.046 81.5693 735.046 75.1729ZM750.207 75.1729C750.207 79.4697 750.524 83.7666 751.159 88.0635C751.843 92.3604 752.966 96.2178 754.528 99.6357C756.14 103.005 758.312 105.739 761.047 107.839C763.83 109.938 767.37 110.988 771.667 110.988C775.964 110.988 779.479 109.938 782.214 107.839C784.997 105.739 787.17 103.005 788.732 99.6357C790.344 96.2178 791.467 92.3604 792.102 88.0635C792.785 83.7666 793.127 79.4697 793.127 75.1729C793.127 70.876 792.785 66.6035 792.102 62.3555C791.467 58.1074 790.344 54.2744 788.732 50.8564C787.17 47.4385 784.973 44.6797 782.141 42.5801C779.357 40.4805 775.866 39.4307 771.667 39.4307C764.685 39.4307 759.362 42.5801 755.7 48.8789C752.038 55.1777 750.207 63.9424 750.207 75.1729ZM884.021 123H866.442L838.098 53.7129V123H822.937V27.4189H841.979L868.859 93.2637V27.4189H884.021V123ZM970.959 93.7764C969.787 98.4639 968.225 102.712 966.271 106.521C964.318 110.329 961.926 113.576 959.094 116.262C956.311 118.947 953.039 121.022 949.279 122.487C945.568 123.952 941.296 124.685 936.462 124.685C929.772 124.685 924.108 123.317 919.47 120.583C914.831 117.8 911.022 114.113 908.044 109.523C905.114 104.885 902.99 99.6113 901.672 93.7031C900.402 87.7461 899.768 81.5693 899.768 75.1729C899.768 68.7764 900.402 62.5996 901.672 56.6426C902.99 50.6855 905.09 45.4365 907.971 40.8955C910.9 36.3545 914.611 32.7168 919.104 29.9824C923.596 27.1992 929.089 25.8076 935.583 25.8076C937.683 25.8076 939.807 26.0762 941.955 26.6133C944.104 27.1504 946.105 27.9805 947.961 29.1035C949.816 30.1777 951.428 31.5205 952.795 33.1318C954.211 34.7432 955.212 36.5986 955.798 38.6982V27.4189H969.494V63.6006H955.798C955.798 60.6221 955.432 57.6924 954.699 54.8115C953.967 51.8818 952.795 49.2939 951.184 47.0479C949.572 44.8018 947.546 42.9707 945.104 41.5547C942.663 40.1387 939.782 39.4307 936.462 39.4307C932.165 39.4307 928.649 40.4805 925.915 42.5801C923.181 44.6797 920.983 47.4385 919.323 50.8564C917.663 54.2744 916.491 58.1074 915.808 62.3555C915.173 66.6035 914.855 70.876 914.855 75.1729C914.855 79.4697 915.173 83.7666 915.808 88.0635C916.491 92.3604 917.639 96.2178 919.25 99.6357C920.861 103.005 923.059 105.739 925.842 107.839C928.625 109.938 932.165 110.988 936.462 110.988C942.663 110.988 947.424 109.011 950.744 105.056C954.113 101.101 956.799 95.7783 958.801 89.0889L970.959 93.7764ZM1047.79 123H1032.63V81.1787H1001.87V123H986.706V27.4189H1001.87V67.4824H1032.63V27.4189H1047.79V123ZM1121.84 123L1114.95 100.222H1083.31L1076.57 123H1060.68L1090.49 27.4189H1107.92L1137.73 123H1121.84ZM1087.34 86.8184H1110.92L1099.21 47.4141L1087.34 86.8184ZM1204.16 123H1158.31V109.377H1173.4V41.1152H1158.31V27.4189H1204.16V41.1152H1188.56V109.377H1204.16V123ZM1293.44 123H1275.87L1247.52 53.7129V123H1232.36V27.4189H1251.4L1278.28 93.2637V27.4189H1293.44V123Z"
              fill="white"
              width="100%"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default App;
