import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeading from "../../../components/PageHeading";
import { skills } from "../../../data/skills";

export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const skill = skills.find((item) => item.slug === slug);

  return {
    title: skill ? skill.name : "Keahlian tidak ditemukan",
  };
}

export default async function SkillDetailPage({ params }) {
  const { slug } = await params;
  const skill = skills.find((item) => item.slug === slug);

  if (!skill) {
    notFound();
  }

  return (
    <main className="container page-main narrow-page">
      <PageHeading
        eyebrow={skill.category}
        title={skill.name}
        description={`Level saat ini: ${skill.level}`}
      />
      <div className="detail-panel">
        <p className="detail-copy">{skill.description}</p>
        <h2>Hal yang pernah saya coba</h2>
        <ul className="learning-list">
          {skill.practice.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Link className="text-link back-link" href="/keahlian">
        ← Kembali ke semua keahlian
      </Link>
    </main>
  );
}
