import { footerLinks, navigationItems } from "@/mockData";
import React, { FC } from "react";

interface IProps {}

/**
 * @author
 * @function @SideBar
 **/

export const SideBar: FC<IProps> = (props) => {
  return (
    <>
      <div className="min-w-screen border-t border-solid border-gray-200 w-full z-10 bg-gray-00 lg:hidden fixed bottom-0 grid grid-cols-5">
        {navigationItems
          .filter((item) => !item.desktopOnly)
          .map((item, index) => (
            <div
              key={`${item.label}_${index}`}
              className="flex flex-col items-center gap-2 py-2.5 cursor-pointer"
            >
              <img src={item.icon} className="w-6 h-6" />
              <p
                className={`text-sm text-gray-1k ${
                  item?.active ? "font-semibold" : ""
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
      </div>
      <div className="w-[212px] fixed lg:flex hidden border-r border-solid border-gray-200 h-full flex-shrink-0 max-h-screen pb-4 flex-col justify-between pr-6">
        <div>
          <div className="flex gap-1 py-2">
            <img src="/peerlist-logo.svg" className="h-8" />
            <img src="/peerlist-logo-text.svg" />
          </div>
          <div className="flex flex-col gap-1 py-6">
            {navigationItems.map((item, index) => (
              <div
                key={`${item.label}_${index}`}
                className="min-w-[188px] flex items-center gap-2 py-2.5 cursor-pointer hover:gap-3 transition-all"
              >
                <img src={item.icon} className="w-6 h-6" />
                <p
                  className={`text-sm text-gray-1k ${
                    item?.active ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 py-2">
              <img src="/user3.png" className="w-6 h-6" />
              <p className="text-gray-1k text-sm">Yogini</p>
            </div>
            <div className="flex items-center gap-2 py-2">
              <img src="/loom.png" className="w-6 h-6" />
              <div>
                <p className="text-gray-1k text-sm">Loom</p>
                <p className="text-gray-1k text-xxs">
                  Manage jobs, teams, & more →
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-xxs">
            {footerLinks.map((link, index) => (
              <>
                <a href="#" key={index} className="hover:underline">
                  {link.label}
                </a>
                {index !== footerLinks.length - 1 && " • "}
              </>
            ))}
          </p>
          <p className="text-xxs text-gray-700">© 2023 Peerlist Inc.</p>
        </div>
      </div>
    </>
  );
};
