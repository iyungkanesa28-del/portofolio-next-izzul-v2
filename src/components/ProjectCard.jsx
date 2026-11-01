import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  const projectUrl = `/proyek/${project.slug}`;
  const imageClass =
    project.imageFit === "contain"
      ? "project-image project-image-contain"
      : "project-image";

  return (
    <article className="project-card">
      <Link
        className="project-preview"
        href={projectUrl}
        aria-label={`Lihat detail ${project.title}`}
      >
        <Image
          className={imageClass}
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 760px) 100vw, 33vw"
        />
      </Link>
      <div className="project-content">
        <div className="project-category" aria-label="Teknologi">
          {project.category.split(" · ").map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <h2>
          <Link href={projectUrl}>{project.title}</Link>
        </h2>
        <p className="project-description">{project.description}</p>
        <Link className="text-link" href={projectUrl}>
          Lihat detail <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
