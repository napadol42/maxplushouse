import { NextResponse } from "next/server";
import { getAllProjects, getProjectBySlug } from "@/lib/data";

// GET /api/projects — list all or filter by category
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const slug = searchParams.get("slug");

  // Single project by slug
  if (slug) {
    const project = getProjectBySlug(slug);
    if (!project) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(project);
  }

  // All projects, optionally filtered
  let projects = getAllProjects();
  if (category && category !== "All") {
    projects = projects.filter((p) => p.category === category);
  }

  return NextResponse.json(projects);
}
