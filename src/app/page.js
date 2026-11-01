import Image from "next/image";
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
        </div>
      </section>

      <section className="container home-panel home-about" id="tentang">
        <h2 className="home-section-title">Tentang Saya</h2>
        <p>{profile.about}</p>
      </section>

      <div className="container home-two-column">
        <section className="home-panel home-list-panel">
          <h2 className="home-section-title">Hobi</h2>
          <ol>
            {profile.hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ol>
        </section>
        <section className="home-panel home-list-panel">
          <h2 className="home-section-title">Cita-cita</h2>
          <ol>
            {profile.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ol>
        </section>
      </div>

      <section className="container home-panel home-skills" id="keahlian">
        <h2 className="home-section-title">Keahlian</h2>
        <div className="skills-grid home-skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>
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
              {profile.studySchedule.map((item, index) => (
                <tr
                  key={`${item.day}-${item.time}`}
                  className={index % 2 ? "alternate-row" : undefined}
                >
                  <td>{item.day}</td>
                  <td>{item.time}</td>
                  <td>{item.activity}</td>
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
