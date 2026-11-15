import PageHeading from "../../components/PageHeading";
import ProyekCard from "../../components/ProyekCard";
import { projects } from "../../data/projects";

export const metadata = {
  title: "Proyek",
};

export default function ProyekPage() {
  return (
    <main className="container page-main project-listing">
      <PageHeading
        title="Proyek Saya"
        description="Kumpulan hasil belajar saya di Kelas Industri UBIG. Klik kartu untuk melihat detailnya."
      />
      <div className="projects-grid projects-grid-page">
        {projects.map((project) => (
          <ProyekCard key={project.slug} proyek={project} />
        ))}
      </div>
    </main>
  );
}
