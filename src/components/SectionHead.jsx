export default function SectionHead({ title, aside }) {
  return (
    <div className="section-head">
      <h2 className="section-title">{title}</h2>
      {aside && <span>{aside}</span>}
    </div>
  );
}
