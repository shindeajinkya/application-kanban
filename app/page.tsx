"use client";
import { ApplicationCard } from "@/components/ApplicationCard";
import { Kanban } from "@/components/Kanban";
import { SideBar } from "@/components/Sidebar";
import { companyActions, mockApplications } from "@/mockData";
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

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const updatedApplications = applications.map((application) => {
      if (application.status === overId) return application;
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
        <SideBar />
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
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between lg:ml-[74px]">
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
                  <span className="block font-semibold">Pavitra Prabhakar</span>
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
              {applications
                .filter((application) =>
                  matchApplication(application, null, query)
                )
                .map((application) => (
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
