import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/lib/data";
import ProjectGallery from "@/components/ProjectGallery";

// --- Dynamic SEO Metadata ---
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description.slice(0, 160),
    openGraph: {
      title: `${project.title} — Maxplushouse`,
      description: project.description.slice(0, 160),
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "article",
      siteName: "Maxplushouse",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Maxplushouse`,
      description: project.description.slice(0, 160),
      images: [project.coverImage],
    },
  };
}

// --- Static Params for SSG ---
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// --- Page Component ---
export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-24 md:pt-32 pb-24 md:pb-32 bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Project Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-semibold tracking-widest uppercase mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left — Details */}
          <div className="lg:col-span-1 space-y-8">
            {project.location && (
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                  Location
                </h3>
                <p className="text-sm text-black">{project.location}</p>
              </div>
            )}
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                Category
              </h3>
              <p className="text-sm text-black">{project.category}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                Year
              </h3>
              <p className="text-sm text-black">
                {new Date(project.createdAt).getFullYear()}
              </p>
            </div>

            {/* Back Link */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-gray-500 hover:text-black transition-colors duration-300 pt-4"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              All Projects
            </Link>
          </div>

          {/* Right — Description & Concept */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {project.description}
              </p>
            </div>

            {project.concept && (
              <div>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
                  Concept
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {project.concept}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-8">
          Gallery
        </h2>
        <ProjectGallery images={project.galleryImages} title={project.title} />
      </section>
    </article>
  );
}
