"use client";

import React from "react";
import { useParams } from "next/navigation";
import Themetwopage from "@/components/preview/theme_two";

const TheamTwo = () => {
  const params = useParams();
  const slug = params?.slug || null; // get slug from URL

  return <Themetwopage slug={slug} />;
};

export default TheamTwo;
