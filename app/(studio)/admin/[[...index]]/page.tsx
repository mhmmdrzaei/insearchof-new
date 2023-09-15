"use client";

import { NextStudio } from "next-sanity/studio";

// Ensures the Studio route is statically generated
export const dynamic = 'force-dynamic'

import config from "@/sanity.config";

export default function adminPage() {
    return <NextStudio config={config} />
}