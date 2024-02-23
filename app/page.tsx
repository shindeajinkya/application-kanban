"use client";
import { ApplicationCard } from "@/components/ApplicationCard";
import { Kanban } from "@/components/Kanban";
import { companyActions, mockApplications, navigationItems } from "@/mockData";
import { Status } from "@/types";
import { matchApplication, timeAgo } from "@/utils";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [applications, setApplications] = useState(mockApplications);

  const rejectedApplications = applications.filter((application) =>
    matchApplication(application, Status.REJECTED, query)
  );

  const appliedApplications = applications.filter((application) =>
    matchApplication(application, Status.APPLIED, query)
  );

  const shortlistedApplications = applications.filter((application) =>
    matchApplication(application, Status.SHORTLISTED, query)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    console.log(event, active, over);

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const updatedApplications = applications.map((application) => {
      if (application.id === activeId) {
        if (overId === Status.SHORTLISTED) {
          application.shortlisted = {
            by: "Yogini",
            on: new Date(),
          };
        }
        if (overId === Status.REJECTED) {
          application.rejected = {
            by: "Yogini",
            on: new Date(),
          };
        }
        return { ...application, status: overId as Status };
      }
      return application;
    });

    setApplications(updatedApplications);
  };

  return (
    <main className="lg:w-[1200px] mx-auto">
      <div className="flex">
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
        <div className="w-[212px] fixed lg:flex hidden border-r border-solid border-gray-200 h-full flex-shrink-0 max-h-screen pb-2 flex-col justify-between pr-6">
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
              <a href="#" className="hover:underline">
                Blog
              </a>
              {" • "}
              <a href="#" className="hover:underline">
                Help Center
              </a>
              {" • "}
              <a href="#" className="hover:underline">
                Feedback
              </a>
              {" • "}
              <a href="#" className="hover:underline">
                Code of Conduct
              </a>
              {" • "}
              <a href="#" className="hover:underline">
                Privacy
              </a>
              {" • "}
              <a href="#" className="hover:underline">
                T&C
              </a>
            </p>
            <p className="text-xxs text-gray-700">© 2023 Peerlist Inc.</p>
          </div>
        </div>
        <div className=" lg:pl-[212px] w-full border-r border-solid border-gray-200">
          <div className="py-10 px-6 flex flex-col gap-6 bg-gray-50 border-b border-solid border-gray-200">
            <div className="flex lg:flex-row flex-col gap-4">
              <div className="p-2 rounded-2xl w-max bg-gray-00 border border-solid border-gray-200">
                <img src="/company-avatar.svg" className="w-10 h-10" />
              </div>
              <div className="flex flex-grow flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  <p className=" text-lg font-semibold text-gray-1k">
                    Software Engineer, Front End
                  </p>
                  <img src="/arrow-down.svg" className="w-4 h-4" />
                </div>
                <p className=" text-sm text-gray-1k">
                  at Peerlist • Full time • Remote (United States, Canada)
                </p>
              </div>
              <div className="flex gap-2.5">
                {companyActions.map((action) => (
                  <div
                    key={action.key}
                    className="w-6 h-6 flex items-center justify-center cursor-pointer bg-gray-00 border border-solid border-gray-300 rounded-full"
                  >
                    <img src={action.icon} className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between lg:ml-[72px]">
              <div className="flex gap-4">
                <p className="flex gap-0.5 text-xs text-gray-1k">
                  <span className="block font-semibold">97</span>
                  <span className="block">applicants</span>
                </p>
                <p className="flex gap-0.5 text-xs text-gray-1k">
                  <span className="block font-semibold">69</span>
                  <span className="block">Applied w/ Peerlist</span>
                </p>
                <p className="flex gap-0.5 text-xs text-gray-1k">
                  <span className="block font-semibold">2872</span>
                  <span className="block">Views</span>
                </p>
              </div>
              <div className="flex gap-2">
                <p className="flex gap-0.5 text-xs text-gray-1k">
                  <span className="block text-gray-500">Posted</span>
                  <span className="block font-semibold">
                    {timeAgo.format(new Date("2024-02-22"))}
                  </span>
                </p>
                <p className="flex gap-0.5 text-xs text-gray-1k">
                  <span className="block text-gray-500">by</span>
                  <span className="block font-semibold">Peter Parker</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center flex-wrap p-6 lg:pb-6 pb-24">
            <div className="flex items-center gap-2 w-60">
              <img src="/search.svg" className="w-4 h-4" />
              <input
                type="text"
                placeholder="Search candidates"
                className="bg-gray-00 w-full text-sm placeholder:text-gray-400 focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="lg:hidden flex flex-col w-full gap-4">
              {applications.map((application) => (
                <ApplicationCard
                  key={application.id}
                  application={application}
                  dragDisabled={true}
                />
              ))}
            </div>
            <DndContext onDragEnd={handleDragEnd}>
              <Kanban
                rejectedApplications={rejectedApplications}
                appliedApplications={appliedApplications}
                shortlistedApplications={shortlistedApplications}
              />
            </DndContext>
          </div>
        </div>
      </div>
    </main>
  );
}
