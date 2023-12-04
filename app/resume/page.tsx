"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Education from "@/components/Education/page";
import Experience from "@/components/Experience/page";

export default function Resume() {
  return (
    <div className="row">
      <Education />
      <Experience />
    </div>
  );
}
