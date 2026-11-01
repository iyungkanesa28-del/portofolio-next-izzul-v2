import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero container home-panel" id="beranda">
        <Image
          className="avatar hero-photo"
          src="/profile-izzul.jpg"
          alt={`Foto ${profile.name}`}
          width={108}
          height={108}
          priority
        />
        <div className="hero-copy">
          <h1>Halo, saya {profile.name}!</h1>
          <p className="hero-description">
            Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri
            UBIG.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/tentang">
              Tentang saya
            </Link>
            <Link className="button button-secondary" href="/keahlian">
              Lihat keahlian
            </Link>
          </div>
        </div>
      </section>

      <section className="container home-panel home-skills" id="keahlian">
        <h2 className="home-section-title">Keahlian</h2>
        <div className="skills-grid home-skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>
        <Link className="button button-primary section-more" href="/keahlian">
          Lihat semua keahlian
        </Link>
      </section>

      <section className="container home-panel home-schedule">
        <h2 className="home-section-title">Jadwal Belajar</h2>
        <div className="schedule-table-wrap">
          <table className="schedule-table">
            <thead>
              <tr>
                <th scope="col">Hari</th>
                <th scope="col">Waktu</th>
                <th scope="col">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {profile.studySchedule.map((jadwal) => (
                <tr key={`${jadwal.day}-${jadwal.time}`}>
                  <td>{jadwal.day}</td>
                  <td>{jadwal.time}</td>
                  <td>{jadwal.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container home-panel home-projects" id="proyek">
        <h2 className="home-section-title">Proyek Saya</h2>
        <p>
          Kumpulan hasil belajar saya di Kelas Industri UBIG. Klik kartu untuk
          melihat detailnya.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
