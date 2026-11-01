import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        className={`project-preview ${project.preview}`}
        href={`/proyek/${project.slug}`}
        aria-label={`Lihat gambar dan detail ${project.title}`}
      >
        <Image
          className={`project-image ${project.imageFit === "contain" ? "project-image-contain" : ""}`}
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 760px) 100vw, 33vw"
        />
      </Link>
      <div className="project-content">
        <div className="project-category" aria-label="Teknologi">
          {project.category.split(" · ").map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <h2>
          <Link href={`/proyek/${project.slug}`}>{project.title}</Link>
        </h2>
        <p className="project-description">{project.description}</p>
        <Link className="text-link" href={`/proyek/${project.slug}`}>
          Lihat detail <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
