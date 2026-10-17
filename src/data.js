export const EMAIL = 'sedaayeler@gmail.com';

export const NAV = [
  { href: '#deneyim', label: 'Deneyim' },
  { href: '#projeler', label: 'Projeler' },
  { href: '#yigin', label: 'Teknolojiler' },
  { href: '#yazilar', label: 'Yazılar' },
  { href: '#sertifikalar', label: 'Sertifikalar' },
  { href: '#iletisim', label: 'İletişim' },
];

export const EXPERIENCE = [
  {
    years: 'Tem — Ağu 2026',
    role: 'Yazılım Geliştirici',
    company: 'base-app',
    place: 'PharmaPulse',
    url: 'https://pharmapulse.ai/landing',
    desc: [
      '27 GB boyutundaki TİTCK ilaç verisini Current/History yapısına göre yeniden modelleyerek veri tekrarını azalttım.',
      'ABP Framework tabanlı PharmaPulse uygulamasının veritabanını Entity Framework Core migrations kullanarak SQL Server’dan PostgreSQL’e taşıdım.',
    ],
    tags: ['C#', '.NET', 'Entity Framework Core', 'PostgreSQL', 'MSSQL'],
  },
  {
    years: 'Tem — Ara 2025',
    role: 'Yazılım Geliştirici',
    company: 'Doğuş Teknoloji',
    place: 'Hybee',
    placeNote: 'Yapay zekâ ajanları',
    url: 'https://www.hybee.co/tr',
    desc: [
      'Hybee mobil uygulamasının yazılım geliştirme süreçlerine katkıda bulundum.',
      'GitHub issue’larını analiz eden, build/bug sorunlarını çözen ve unit test üreten Python, LangChain ve LLM tabanlı yapay zekâ ajanlarının geliştirilmesine katkıda bulundum.',
    ],
    tags: ['C#', 'ASP.NET Core Web API', 'Python', 'LangChain'],
  },
  {
    years: 'Eki 2024 — Oca 2025',
    role: 'Yazılım Geliştirici',
    company: 'Eskişehir Teknik Üniversitesi Bilgi İşlem Daire Başkanlığı',
    place: 'Çevrimiçi sınav sistemi',
    desc: 'Üniversitenin çevrimiçi sınav sisteminin geliştirilmesine C# ve ASP.NET Core MVC kullanarak katkıda bulundum.',
    tags: ['C#', 'ASP.NET Core MVC', 'Jira', 'Bitbucket'],
  },
  {
    years: 'Ağu — Eyl 2024',
    role: 'Yazılım Geliştirici Stajyeri',
    company: 'Piton Technology',
    place: 'Bankacılık sistemi',
    desc: 'Müşteri, hesap, kart ve işlem yönetimi için RESTful bir bankacılık API’si geliştirdim.',
    tags: ['C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'PostgreSQL'],
  },
  {
    years: 'Tem — Ağu 2024',
    role: 'Yazılım Geliştirici Stajyeri',
    company: 'Mergen Yazılım',
    place: 'Şirket projesi',
    desc: 'Şirket bünyesinde geliştirilen bir projenin yazılım geliştirme süreçlerine katkıda bulundum.',
    tags: ['Java', 'Spring Boot', 'Angular'],
  },
];

// Yeniden eskiye doğru sıralı.
export const PROJECTS = [
  {
    name: 'ben sana atarım',
    desc: 'Arkadaşlarla restoran hesabını bölüşmenin en kolay yolu. Fişi okut, herkes kendi yediğini seçsin, kim ne kadar ödeyecek kuruşu kuruşuna hesaplansın.',
    stack: ['C#','.NET 10', 'Entity Framework Core', 'PostgreSQL', 'SignalR', 'Gemini API', 'TypeScript', 'React'],
    demo: 'https://bensanaatarim.com.tr/',
    repo: 'https://github.com/sedayeler/ben-sana-atarim',
  },
  {
    name: 'Yorum Satırı',
    desc: 'Düşüncelerini paylaş, blog yazıları oluştur, gönderilere yorum yap ve yapay zekâ desteğiyle uzun içerikleri saniyeler içinde özetle.',
    stack: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'PostgreSQL', 'CQRS', 'Gemini API'],
    repo: 'https://github.com/sedayeler/blog-project',
  },
  {
    name: 'E-Ticaret',
    desc: 'Kullanıcıların ürünleri sepete ekleyip sipariş verdiği, yöneticilerin ürün ve siparişleri yönettiği e-ticaret sistemi.',
    stack: ['C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'PostgreSQL', 'JWT', 'CQRS', 'SignalR'],
    repo: 'https://github.com/sedayeler/e-commerce-api',
  },
  {
    name: 'Bankacılık Sistemi',
    desc: 'Müşteri, hesap, banka kartı ve kredi kartı yönetimini kapsayan, temel bankacılık işlemlerinin gerçekleştirilebildiği bir sistem.',
    stack: ['C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'PostgreSQL'],
    repo: 'https://github.com/sedayeler/banking-system',
  },
  {
    name: 'Bitirme Tezi',
    title:
      'Gastrointestinal Hastalıkların Sınıflandırılması için Yarı Denetimli ve Açıklanabilir Derin Öğrenme Modeli',
    desc: 'TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı kapsamında desteklenmeye hak kazandı.'
  },
];

export const POST = {
  title: 'Agentic AI Workflow Nedir?',
  emphasis: 'Proje geliştirirken nasıl kullandım?',
  href: 'https://medium.com/@sedaayeler/agentic-ai-workflow-nedir-proje-geli%C5%9Ftirirken-nas%C4%B1l-kulland%C4%B1m-19d6dc2a162d',
};

export const MARQUEE_1 = ['C#', '.NET', 'ASP.NET Core', 'Java', 'Python', 'SQL'];
export const MARQUEE_2 = ['PostgreSQL', 'SQL Server', 'Redis', 'RabbitMQ', 'LangChain', 'Spring Boot'];

// image verilirse satıra tıklayınca sertifika görseli açılır (görseller public/certificates içinde).
export const CERTIFICATES = [
  {
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations – Amazon Web Services (AWS)',
  },
  {
    title: 'HCCDA - Tech Essentials – Huawei Cloud',
    image: '/certificates/huawei-hccda.jpg',
    alt: 'Huawei Cloud Developer Certification: Seda Yeler, HCCDA – Tech Essentials',
  },
];

export const LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sedayeler' },
  { label: 'GitHub', href: 'https://github.com/sedayeler' },
  { label: 'Medium', href: 'https://medium.com/@sedaayeler' },
];

// Kod penceresi: düz metin = string, renkli parça = [sınıf, metin]
export const CODE = {
  'Developer.cs': {
    badge: 'C#',
    lang: 'C#',
    label: 'Developer.cs: Name Seda Yeler, University Eskişehir Teknik Üniversitesi, Degree Bilgisayar Mühendisliği, GraduationYear 2025, Skills C#, .NET, Entity Framework Core',
    lines: [
      [['kw', 'namespace'], ' Portfolio;'],
      [],
      [['kw', 'public class'], ' ', ['type', 'Developer']],
      ['{'],
      ['    ', ['kw', 'public'], ' ', ['kw', 'string'], ' Name { ', ['kw', 'get'], '; } = ', ['str', '"Seda Yeler"'], ';'],
      ['    ', ['kw', 'public'], ' ', ['kw', 'string'], ' University { ', ['kw', 'get'], '; } = ', ['str', '"Eskişehir Teknik Üniversitesi"'], ';'],
      ['    ', ['kw', 'public'], ' ', ['kw', 'string'], ' Degree { ', ['kw', 'get'], '; } = ', ['str', '"Bilgisayar Mühendisliği"'], ';'],
      ['    ', ['kw', 'public'], ' ', ['kw', 'int'], ' GraduationYear { ', ['kw', 'get'], '; } = ', ['num', '2025'], ';'],
      [],
      ['    ', ['kw', 'public'], ' ', ['kw', 'string'], '[] Skills { ', ['kw', 'get'], '; } ='],
      ['        [', ['str', '"C#"'], ', ', ['str', '".NET"'], ', ', ['str', '"Entity Framework Core"'], '];'],
      ['}'],
    ],
  },
  'Developer.java': {
    badge: 'J',
    lang: 'Java',
    label: 'Developer.java: name Seda Yeler, university Eskişehir Teknik Üniversitesi, degree Bilgisayar Mühendisliği, graduationYear 2025, skills Java, Spring Boot, Hibernate',
    lines: [
      [['kw', 'package'], ' com.sedayeler.portfolio;'],
      [],
      [['kw', 'public class'], ' ', ['type', 'Developer'], ' {'],
      ['    ', ['kw', 'private'], ' ', ['type', 'String'], ' name = ', ['str', '"Seda Yeler"'], ';'],
      ['    ', ['kw', 'private'], ' ', ['type', 'String'], ' university = ', ['str', '"Eskişehir Teknik Üniversitesi"'], ';'],
      ['    ', ['kw', 'private'], ' ', ['type', 'String'], ' degree = ', ['str', '"Bilgisayar Mühendisliği"'], ';'],
      ['    ', ['kw', 'private'], ' ', ['kw', 'int'], ' graduationYear = ', ['num', '2025'], ';'],
      [],
      ['    ', ['kw', 'private'], ' ', ['type', 'String'], '[] skills = {'],
      ['        ', ['str', '"Java"'], ', ', ['str', '"Spring Boot"'], ', ', ['str', '"Hibernate"']],
      ['    };'],
      ['}'],
    ],
  },
};
