import { Application, Status } from "@/types";
import { formatDateToLocaleString, timeAgo } from "@/utils";
import { useDraggable } from "@dnd-kit/core";
import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  application: Application;
  dragDisabled?: boolean;
}

/**
 * @author
 * @function @ApplicationCard
 **/

export const ApplicationCard: FC<IProps> = ({
  application,
  dragDisabled = false,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: application.id,
    disabled: dragDisabled,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)rotate(5deg)`,
        zIndex: 4,
        cursor: "grabbing",
      }
    : undefined;

  return (
    <div
      className="w-full bg-gray-00 relative flex flex-col gap-2 p-4 rounded-lg border border-solid cursor-grab border-gray-200"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {application.matched ? (
        <div className="absolute top-4 right-4 flex gap-1 rounded-[20px] bg-green-100 px-2 py-1">
          <img src="/company-avatar.svg" className="w-4 h-4" />
          <p className="text-green-400 text-xxs font-semibold">Matched</p>
        </div>
      ) : (
        <p className="absolute top-4 right-4 text-xxs text-gray-500">
          {`Applied ${timeAgo.format(new Date(application.appliedOn))}`}
        </p>
      )}
      {application.profilePhoto ? (
        <img
          src={application.profilePhoto}
          alt={application.name}
          className="w-8 h-8 rounded-full"
        />
      ) : null}
      <div>
        <div className="flex items-center gap-1 mb-0.5 ">
          <h3 className="font-semibold text-sm text-gray-1k">
            {application.name}
          </h3>
          {application.verified ? (
            <img src="/verified.svg" alt="verified" className="w-4 h-4" />
          ) : null}
        </div>
        <p className="text-xs text-gray-1k">{`${application.role} at ${application.company}`}</p>
      </div>
      {application.status === Status.REJECTED && application.rejected ? (
        <div className="flex items-center gap-1">
          <img src="/rejected.svg" className="w-3 h-3" />
          <p className="text-xxs text-gray-500">
            Rejected by{" "}
            <span className="font-semibold">{application.rejected?.by}</span> on{" "}
            {formatDateToLocaleString(application.rejected.on)}
          </p>
        </div>
      ) : (
        <>
          <div className="flex gap-4">
            {application.status === Status.APPLIED &&
            application.is_external &&
            application.resume ? (
              <div>
                <p className="text-xxs text-gray-500 mb-0.5">Resume</p>
                <Link
                  href={application.resume.url}
                  className="block text-xs font-semibold text-gray-1k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {application.resume.name} ↗
                </Link>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-xxs text-gray-500 mb-0.5">Experience</p>
                  <p className="text-xs font-semibold text-gray-1k">{`${application.totalExperience.years}y ${application.totalExperience.months}m`}</p>
                </div>
                <div>
                  <p className="text-xxs text-gray-500 mb-0.5">
                    Holding offer?
                  </p>
                  <p className="text-xs font-semibold text-gray-1k">
                    {application.holdingOffer ? "Yes" : "No"}
                  </p>
                </div>
              </>
            )}
            <div>
              <p className="text-xxs text-gray-500 mb-0.5">Notice Period</p>
              <p className="text-xs font-semibold text-gray-1k">{`${application.noticePeriod} days`}</p>
            </div>
          </div>
          {application.status === Status.SHORTLISTED &&
          application.shortlisted ? (
            <div className="flex items-center gap-1">
              <img src="/greentick.svg" className="w-3 h-3" />
              <p className="text-xxs text-gray-500">
                Shortlisted by{" "}
                <span className="font-semibold">
                  {application.shortlisted?.by}
                </span>{" "}
                on {formatDateToLocaleString(application.shortlisted.on)}
              </p>
            </div>
          ) : application.is_external ? null : (
            <div>
              <p className="text-xxs text-gray-500 mb-0.5">Contact</p>
              <p className="text-xs font-semibold text-gray-1k mb-0.5">
                {application.contact.email}
              </p>
              <p className="text-xs font-semibold text-gray-1k">
                {application.contact.phone}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
