import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Dibuat dengan Next.js di
        Kelas Industri UBIG.
      </p>
    </footer>
  );
}
