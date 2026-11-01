import Image from "next/image";
import Link from "next/link";
import PageHeading from "../../components/PageHeading";
import { profile } from "../../data/profile";

export const metadata = {
  title: "Tentang Saya",
};

export default function TentangPage() {
  return (
    <main className="container page-main">
      <PageHeading
        eyebrow="Tentang saya"
        title={`Halo, saya ${profile.name}.`}
        description="Sedikit cerita tentang diri saya dan hal-hal yang sedang saya pelajari."
      />
      <div className="story-layout">
        <Image
          className="avatar story-avatar profile-photo"
          src="/profile-izzul.jpg"
          alt={`Foto ${profile.name}`}
          width={128}
          height={128}
        />
        <div className="story-copy">
          <h2>Masih belajar, tapi selalu ingin mencoba.</h2>
          <p>{profile.about}</p>
          <p>
            Saya percaya kemampuan bisa berkembang lewat latihan. Karena itu,
            saya mencoba mencatat proses belajar dan menyimpan hasilnya di
            halaman ini.
          </p>
          <Link className="text-link" href="/tentang/diri">
            Baca profil singkat <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <section className="section page-section">
        <div className="section-heading">
          <p className="eyebrow">Kegiatan favorit</p>
          <h2>Hobi saya</h2>
        </div>
        <div className="interest-list">
          {profile.hobbies.map((interest, index) => (
            <p className="interest-item" key={interest}>
              <span>0{index + 1}</span>
              {interest}
            </p>
          ))}
        </div>
      </section>
      <section className="section page-section">
        <div className="section-heading">
          <p className="eyebrow">Rencana ke depan</p>
          <h2>Cita-cita saya</h2>
        </div>
        <div className="interest-list">
          {profile.goals.map((goal, index) => (
            <p className="interest-item" key={goal}>
              <span>0{index + 1}</span>
              {goal}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
