import CodeWindow from './CodeWindow.jsx';
import { ArrowDown } from './Icons.jsx';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <h1 className="hero-title">
          <span className="reveal">
            <span>
              Seda <em>Yeler</em>
            </span>
          </span>
        </h1>
        <p className="hero-role fade">Software Developer</p>
        <p className="hero-lead fade">
          Eskişehir Teknik Üniversitesi Bilgisayar Mühendisliği mezunuyum. C#/.NET ve Java/Spring Boot
          başta olmak üzere modern teknolojilerle yazılım geliştiriyor, yapay zekâ çözümlerini
          projelerime entegre ediyorum.
        </p>
      </div>

      <CodeWindow />

      <a className="scroll-btn" href="#deneyim" aria-label="Aşağı kaydır">
        <ArrowDown />
      </a>
    </section>
  );
}
