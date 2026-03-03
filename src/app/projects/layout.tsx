import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of minimalist architecture and home design projects across Thailand. Interior, Exterior, and Minimalist design categories.",
  openGraph: {
    title: "Projects — Maxplushouse",
    description:
      "Explore our portfolio of minimalist architecture and home design projects.",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
