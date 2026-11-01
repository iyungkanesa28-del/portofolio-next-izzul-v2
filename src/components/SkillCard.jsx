import Link from "next/link";

export default function SkillCard({ skill }) {
  return (
    <Link className="skill-card skill-card-link" href={`/keahlian/${skill.slug}`}>
      <span className="skill-mark" aria-hidden="true">
        {skill.name.slice(0, 1)}
      </span>
      <span className="skill-card-copy">
        <span className="skill-title">{skill.name}</span>
        <span className="skill-level">Level: {skill.level}</span>
      </span>
      <span className="card-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
