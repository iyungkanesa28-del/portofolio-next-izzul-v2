"use client";

import { useState } from "react";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  const [hp, setHp] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false);

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    if (!nama.trim()) {
      errorBaru.nama = "Nama wajib diisi.";
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorBaru.email = "Masukkan alamat email yang valid.";
    }

    if (hp.replace(/\D/g, "").length < 10) {
      errorBaru.hp = "Nomor HP minimal 10 angka.";
    }
    if (keperluan === "") {
      errorBaru.keperluan = "Pilih salah satu keperluan.";
    }
    if (pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    setError(errorBaru);
    setBerhasil(Object.keys(errorBaru).length === 0);
  }

  return (
    <form
      id="form-kontak"
      onSubmit={kirim}
      noValidate
      className="contact-form"
    >
      <div>
        <label htmlFor="nama" className="contact-label">
          Nama lengkap
        </label>
        <input
          type="text"
          id="nama"
          autoComplete="name"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan nama lengkap"
          className="contact-input"
          aria-invalid={Boolean(error.nama)}
          aria-describedby={error.nama ? "error-nama" : undefined}
        />
        {error.nama && (
          <p className="contact-error" id="error-nama">{error.nama}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="contact-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nama@email.com"
          className="contact-input"
          aria-invalid={Boolean(error.email)}
          aria-describedby={error.email ? "error-email" : undefined}
        />
        {error.email && (
          <p className="contact-error" id="error-email">{error.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="nohp" className="contact-label">
          Nomor HP
        </label>
        <input
          type="tel"
          id="nohp"
          autoComplete="tel"
          placeholder="081234567890"
          className="contact-input"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          aria-invalid={Boolean(error.hp)}
          aria-describedby={error.hp ? "error-hp" : undefined}
        />
        {error.hp && (
          <p className="contact-error" id="error-hp">{error.hp}</p>
        )}
      </div>

      <div>
        <label htmlFor="keperluan" className="contact-label">
          Keperluan
        </label>
        <select
          id="keperluan"
          name="keperluan"
          value={keperluan}
          onChange={(e) => setKeperluan(e.target.value)}
          className="contact-input"
          aria-invalid={Boolean(error.keperluan)}
          aria-describedby={error.keperluan ? "error-keperluan" : undefined}
        >
          <option value="">-- Pilih keperluan --</option>
          <option value="bertanya">Bertanya</option>
          <option value="kerja-sama">Kerja sama proyek</option>
          <option value="lainnya">Lainnya</option>
        </select>
        {error.keperluan && (
          <p className="contact-error" id="error-keperluan">{error.keperluan}</p>
        )}
      </div>

      <div>
        <label htmlFor="pesan" className="contact-label">
          Pesan
        </label>
        <textarea
          id="pesan"
          rows="4"
          placeholder="Tulis pesan Anda di sini..."
          className="contact-input"
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          aria-invalid={Boolean(error.pesan)}
          aria-describedby={error.pesan ? "error-pesan" : undefined}
        />
        {error.pesan && (
          <p className="contact-error" id="error-pesan">{error.pesan}</p>
        )}
      </div>

      <button
        type="submit"
        className="button button-primary contact-submit"
      >
        Kirim Pesan
      </button>

      <p className="contact-form-note">
        Formulir ini belum mengirim pesan secara langsung.
      </p>

      {berhasil && (
        <p className="contact-success" role="status">
          Terima kasih, {nama}! Isian sudah diperiksa, tetapi pesan belum
          terkirim.
        </p>
      )}
    </form>
  );
}