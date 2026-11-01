import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeading from "../../../components/PageHeading";
import { projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project ? project.title : "Proyek tidak ditemukan",
    description: project?.description,
  };
}

export default async function DetailProyekPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container page-main narrow-page">
      <div className={`project-detail-preview project-preview ${project.preview}`}>
        <Image
          className={`project-detail-image ${project.imageFit === "contain" ? "project-detail-image-contain" : ""}`}
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          priority
        />
      </div>
      <PageHeading
        eyebrow={project.category}
        title={project.title}
        description={project.description}
      />
      <div className="detail-panel">
        <h2>Tentang latihan ini</h2>
        <p className="detail-copy">{project.details}</p>
        <h2>Yang saya pelajari</h2>
        <ul className="learning-list">
          {project.learning.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Link className="text-link back-link" href="/proyek">
        ← Kembali ke semua proyek
      </Link>
    </main>
  );
}
