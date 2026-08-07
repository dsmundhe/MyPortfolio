import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, children, align = "left" }) {
  return <Reveal className={`section-heading ${align === "center" ? "section-heading--center" : ""}`}>
    <p className="eyebrow"><span /> {eyebrow}</p><h2>{title}</h2>{children && <p className="section-copy">{children}</p>}
  </Reveal>;
}
