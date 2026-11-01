"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "keahlian", href: "/keahlian" },
  { label: "Proyek", href: "/proyek" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="navigation container" aria-label="Navigasi utama">
        <Link className="brand" href="/">
          Muhammad Izzul Faizin
        </Link>
        <div className="navigation-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : undefined}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
