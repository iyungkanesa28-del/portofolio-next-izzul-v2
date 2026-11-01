import Image from "next/image";
import Link from "next/link";
import PageHeading from "../../../components/PageHeading";
import { profile } from "../../../data/profile";

export const metadata = {
  title: "Profil Singkat",
};

export default function ProfilDiriPage() {
  return (
    <main className="container page-main narrow-page">
      <PageHeading
        eyebrow="Profil singkat"
        title="Kenalan lebih dekat"
        description="Beberapa hal dasar tentang saya."
      />
      <div className="profile-sheet">
        <Image
          className="avatar profile-avatar profile-photo"
          src="/profile-izzul.jpg"
          alt={`Foto ${profile.name}`}
          width={100}
          height={100}
        />
        <dl className="profile-facts">
          <div>
            <dt>Nama</dt>
            <dd>{profile.name}</dd>
          </div>
          <div>
            <dt>Kegiatan</dt>
            <dd>{profile.role}</dd>
          </div>
          <div>
            <dt>Minat</dt>
            <dd>{profile.hobbies.join(", ")}</dd>
          </div>
        </dl>
      </div>
      <p className="about-copy profile-note">{profile.about}</p>
      <Link className="text-link" href="/tentang">
        ← Kembali ke tentang saya
      </Link>
    </main>
  );
}
