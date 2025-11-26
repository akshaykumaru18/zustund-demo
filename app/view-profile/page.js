"use client";
import React from "react";
import profileStore from "../data-store/profiles-store";
export default function Profiles() {
  const { profiles } = profileStore();
  return (
    <div>
      {profiles.map((profile) => {
        return (
          <div className="flex flex-col border-2
          bg-blue-300
          border-amber-800 m-4 p-2">
            <div>{profile.name}</div>
            <div>{profile.phone}</div>
            <div>{profile.place}</div>
          </div>
        );
      })}
    </div>
  );
}
