import PageHeading from "../../components/PageHeading";
import SkillCard from "../../components/SkillCard";
import { skills } from "../../data/skills";

export const metadata = {
  title: "Keahlian",
};

export default function KeahlianPage() {
  return (
    <main className="container page-main">
      <PageHeading
        eyebrow="Proses belajar"
        title="Keahlian yang sedang saya kembangkan"
        description="Ini bukan daftar yang sudah selesai. Saya masih terus mencoba dan menambah pengalaman."
      />
      <div className="skills-grid skills-grid-page">
        {skills.map((skill) => (
          <SkillCard key={skill.slug} skill={skill} />
        ))}
      </div>
    </main>
  );
}
