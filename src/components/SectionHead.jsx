export default function SectionHead({ no, title, aside }) {
  return (
    <div className="section-head">
      <span>
        ( {no} ) {title}
      </span>
      <span>{aside}</span>
    </div>
  );
}
