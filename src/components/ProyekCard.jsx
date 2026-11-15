import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
  const categories = proyek.category
    .split("·")
    .map((category) => category.trim());

  return (
    <article className="project-card">
      <Link
        className="project-card-image-link"
        href={`/proyek/${proyek.slug}`}
        aria-label={`Lihat detail ${proyek.title}`}
      >
        <div className="project-preview">
          <Image
            className={`project-image${proyek.imageFit === "contain" ? " project-image-contain" : ""}`}
            src={proyek.image}
            alt={proyek.imageAlt}
            width={proyek.imageWidth}
            height={proyek.imageHeight}
          />
        </div>
      </Link>
      <div className="project-content">
        <div className="project-category" aria-label="Teknologi">
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <h2>
          <Link href={`/proyek/${proyek.slug}`}>{proyek.title}</Link>
        </h2>
        <p className="project-description">{proyek.description}</p>
        <Link className="text-link" href={`/proyek/${proyek.slug}`}>
          Lihat detail <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}