import React, { FC } from "react";
import { ApplicationCard } from "../ApplicationCard";
import { useDroppable } from "@dnd-kit/core";
import { Application, Status } from "@/types";

interface IProps {
  rejectedApplications: Application[];
  appliedApplications: Application[];
  shortlistedApplications: Application[];
}

/**
 * @author
 * @function @Kanban
 **/

export const Kanban: FC<IProps> = ({
  rejectedApplications,
  appliedApplications,
  shortlistedApplications,
}) => {
  const { isOver: rejectedOver, setNodeRef: rejectedRef } = useDroppable({
    id: Status.REJECTED,
  });

  const { isOver: appliedOver, setNodeRef: appliedRef } = useDroppable({
    id: Status.APPLIED,
  });

  const { isOver: shortlistedOver, setNodeRef: shortlistedRef } = useDroppable({
    id: Status.SHORTLISTED,
  });

  return (
    <div className="hidden w-full lg:grid grid-cols-3 gap-2">
      <div
        ref={rejectedRef}
        className={`bg-gray-50 border border-solid  rounded-lg ${
          rejectedOver ? "border-red-300" : "border-red-00"
        }`}
      >
        <div className="bg-red-100 p-2 flex gap-2 rounded-t-lg">
          <img src="/rejected-filled.svg" className="w-4 h-4" alt="rejected" />
          <p className="text-xs font-semibold text-red-300">
            REJECTED • {rejectedApplications.length}
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          {rejectedApplications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      </div>
      <div
        ref={appliedRef}
        className={`bg-gray-50 border border-solid border-gray-200 rounded-lg ${
          appliedOver ? "border-gray-500" : "border-gray-200"
        }`}
      >
        <div className="bg-gray-200 p-2 flex gap-2 rounded-t-lg">
          <img src="/circle-outline.svg" className="w-4 h-4" alt="rejected" />
          <p className="text-xs font-semibold text-gray-1k">
            APPLIED • {appliedApplications.length}
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          {appliedApplications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      </div>
      <div
        ref={shortlistedRef}
        className={`bg-gray-50 border border-solid  rounded-lg ${
          shortlistedOver ? "border-green-400" : "border-green-100"
        }`}
      >
        <div className="bg-green-100 p-2 flex gap-2 rounded-t-lg">
          <img src="/greentick-filled.svg" className="w-4 h-4" alt="rejected" />
          <p className="text-xs font-semibold text-green-400">
            SHORTLISTED • {shortlistedApplications.length}
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          {shortlistedApplications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      </div>
    </div>
  );
};
