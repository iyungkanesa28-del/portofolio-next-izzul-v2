import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container not-found-page">
      <p className="not-found-code">404</p>
      <h1>Halaman tidak ditemukan</h1>
      <p>
        Alamat atau halaman web yang Anda cari tidak ada, telah dihapus, atau
        sedang dipindahkan.
      </p>
      <Link className="button button-primary" href="/">
        Kembali ke Beranda
      </Link>
    </main>
  );
}
