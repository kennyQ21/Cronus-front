import type { Metadata } from "next";
import CareersPageClient from "@/components/pages/CareersPageClient";

export const metadata: Metadata = {
  title: "Careers at i-Cronus | Join Our Engineering Team",
  description:
    "Join our high-rigor, distributed engineering practice. We are hiring senior systems developers, AI platform engineers, database specialists, and cloud architects.",
  keywords: [
    "i-Cronus careers",
    "systems developer jobs",
    "senior Go engineer remote",
    "AI platform engineer jobs",
    "cloud devops careers",
  ],
};

export default function CareersPage() {
  return <CareersPageClient />;
}
