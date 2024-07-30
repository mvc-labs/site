import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
const RouteMenu = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
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
                <div
                  className="block rounded-lg py-2 px-3 transition hover:bg-white/5 cursor-pointer"
                >
                  <p className=" text-white" onClick={() => handleNavigation("/buildergrant")}>· Builder Grant</p>
                </div>
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
                <div className="block rounded-lg py-2 px-3 transition hover:bg-white/5 cursor-pointer">
                  <p
                    className=" text-white"
                  >
                    · Bridge to Bitcoin
                  </p>
                </div>
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
  );
};
export default RouteMenu;
