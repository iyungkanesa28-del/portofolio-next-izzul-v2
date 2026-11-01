import Link from "next/link";
import PageHeading from "../../components/PageHeading";
import { profile } from "../../data/profile";

export const metadata = {
  title: "Kontak",
};

export default function KontakPage() {
  return (
    <main className="container page-main narrow-page">
      <PageHeading
        eyebrow="Kontak"
        title="Terima kasih sudah mampir."
        description="Saya senang bisa berbagi proses belajar lewat portofolio ini."
      />
      <div className="contact-card">
        <span className="contact-initials" aria-hidden="true">
          {profile.initials}
        </span>
        <div>
          <h2>{profile.name}</h2>
          <p>
            Informasi kontak akan ditambahkan di sini. Untuk saat ini, silakan
            lihat kembali proyek dan hal-hal yang sedang saya pelajari.
          </p>
        </div>
      </div>
      <Link className="button button-primary contact-back" href="/">
        Kembali ke beranda
      </Link>
    </main>
  );
}
