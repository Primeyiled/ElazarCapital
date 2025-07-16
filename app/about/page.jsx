// app/about/page.jsx

import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us - ElazarCapital",
  description:
    "Discover ElazarCapital — a modern investment platform focused on transparency, innovation, and user-first financial tools. Learn who we are and what makes us different.",
  keywords: [
    "ElazarCapital",
    "About ElazarCapital",
    "investment company",
    "financial platform",
    "secure investing",
    "trading innovation",
  ],
};

export default function AboutPage() {
  return <AboutClient />;
}
