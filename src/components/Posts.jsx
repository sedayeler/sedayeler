import { POST } from '../data.js';
import SectionHead from './SectionHead.jsx';
import { ArrowUpRight } from './Icons.jsx';

export default function Posts() {
  return (
    <section id="yazilar" className="section">
      <SectionHead no="04" title="Yazılar" />
      <a className="post" href={POST.href} target="_blank" rel="noopener noreferrer">
        <div className="post-text">
          <h3>
            {POST.title} <em>{POST.emphasis}</em>
          </h3>
          <p>{POST.desc}</p>
        </div>
        <span className="link post-cta">
          Medium’da oku <ArrowUpRight size={18} />
        </span>
      </a>
    </section>
  );
}
