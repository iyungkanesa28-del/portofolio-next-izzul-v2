import PageHeading from "../../components/PageHeading";
import FormKontak from "../../components/FormKontak";

export const metadata = {
  title: "Kontak",
};

export default function KontakPage() {
  return (
    <main className="container page-main contact-page">
      <PageHeading
        eyebrow="Kontak"
        title="Hubungi saya"
        description="Punya pertanyaan atau ingin bekerja sama? Kirim pesan melalui formulir ini."
      />
      <div className="contact-layout">
        <section className="contact-form-card" aria-label="Formulir kontak">
          <FormKontak />
        </section>
        <aside className="contact-info-card">
          <div>
            <h2>Temukan Saya di</h2>
            <div className="contact-method">
              <h3>GitHub</h3>
              <a
                href="https://github.com/iyungkanesa28-del"
                target="_blank"
                rel="noreferrer"
              >
                @iyungkanesa28-del
              </a>
            </div>
            <div className="contact-method">
              <h3>Email</h3>
              <a href="mailto:iyungkanesa28@gmail.com">
                iyungkanesa28@gmail.com
              </a>
            </div>
          </div>
          <p className="contact-response-time">
            Terima kasih sudah mengunjungi portofolio saya.
          </p>
        </aside>
      </div>
    </main>
  );
}
