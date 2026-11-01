import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Muhammad Izzul Faizin | Portofolio",
    template: "%s | Muhammad Izzul Faizin",
  },
  description:
    "Portofolio Muhammad Izzul Faizin, pelajar SMK yang tertarik dengan web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
