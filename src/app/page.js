import Image from "next/image";
import Link from "next/link";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export default function Page() {
  return (
    <main className="home-page">
      <div className="container">
        <section className="hero">
          <Image
            src="/profile-izzul.jpg"
            alt={`Foto ${profile.name}`}
            width={180}
            height={180}
            priority
            className="hero-photo"
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

        <section className="home-skills" aria-labelledby="home-skills-title">
          <h2 className="home-section-title" id="home-skills-title">
            Keahlian
          </h2>
          <div className="skills-grid home-skills-grid">
            {skills.map((skill) => (
              <SkillCard key={skill.slug} skill={skill} />
            ))}
          </div>
          <Link className="button button-secondary section-more" href="/keahlian">
            Lihat semua keahlian
          </Link>
        </section>

        <section className="home-schedule" aria-labelledby="schedule-title">
          <h2 className="home-section-title" id="schedule-title">
            Jadwal Belajar
          </h2>
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
                {profile.studySchedule.map((item) => (
                  <tr key={`${item.day}-${item.time}`}>
                    <td>{item.day}</td>
                    <td>{item.time}</td>
                    <td>{item.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="home-projects" aria-labelledby="projects-title">
          <h2 className="home-section-title" id="projects-title">
            Proyek Saya
          </h2>
          <p>
            Kumpulan hasil belajar saya di Kelas Industri UBIG. Klik kartu untuk
            melihat detailnya.
          </p>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProyekCard key={project.slug} proyek={project} />
            ))}
          </div>
          <Link className="button button-secondary section-more" href="/proyek">
            Lihat semua proyek
          </Link>
        </section>
      </div>
    </main>
  );
}
