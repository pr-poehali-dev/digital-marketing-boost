import { ArtDecoSunburst } from "@/components/ArtDecoSunburst";
import { ArtDecoDivider } from "@/components/ArtDecoDivider";
import { ServiceCard } from "@/components/ServiceCard";

const attractions = [
  {
    title: "Храм-на-Крови",
    description: "Величественный православный собор, возведённый на месте расстрела царской семьи Романовых в 1918 году. Один из главных символов города и место памяти.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M12 2v4M10 4h4M8 22V10l4-4 4 4v12H8z" />
        <path d="M9 22v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Плотинка",
    description: "Историческая плотина городского пруда — место основания Екатеринбурга в 1723 году. Центр городской жизни и излюбленное место прогулок горожан.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M3 17c1.5-2 3-3 4.5-3s3 2 4.5 2 3-3 4.5-3 3 1 4.5 3" />
        <path d="M2 9h20M6 9V5h12v4" />
      </svg>
    ),
  },
  {
    title: "Ельцин Центр",
    description: "Культурный центр и президентский музей, посвящённый Борису Ельцину. Современная архитектура, интерактивные экспозиции о 90-х и свободе.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <rect x="3" y="9" width="18" height="13" rx="1" />
        <path d="M8 9V7a4 4 0 018 0v2" />
        <circle cx="12" cy="15" r="2" />
      </svg>
    ),
  },
  {
    title: "Невьянская башня",
    description: "Загадочная наклонная башня XVIII века в Невьянске, построенная промышленниками Демидовыми. Уральская легенда и уникальный памятник архитектуры.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M8 22L9 6l3-4 3 4 1 16H8z" />
        <path d="M9 10h6M9 14h6" />
      </svg>
    ),
  },
  {
    title: "Скала Чёртово Городище",
    description: "Живописные гранитные останцы высотой 20 метров в окрестностях Екатеринбурга. Популярное место для походов с панорамным видом на уральскую тайгу.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M3 20l5-8 4 5 3-4 6 7H3z" />
        <path d="M17 8a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
  },
  {
    title: "Музей истории Екатеринбурга",
    description: "Старейший городской музей, хранящий три века истории Урала. Уникальные экспонаты от основания завода-крепости до современного мегаполиса.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M3 21h18M3 10h18M5 21V10l7-7 7 7v11" />
        <rect x="9" y="14" width="6" height="7" />
      </svg>
    ),
  },
  {
    title: "Уральский геологический музей",
    description: "Один из крупнейших геологических музеев России с коллекцией уральских минералов и самоцветов. Более 30 000 экспонатов — настоящая сокровищница земли.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M12 2l3 6 6 1-4.5 4.5 1 6.5L12 17l-5.5 3 1-6.5L3 9l6-1 3-6z" />
      </svg>
    ),
  },
  {
    title: "Свято-Троицкий собор",
    description: "Барочный собор XIX века — один из старейших православных храмов Екатеринбурга. Восстановленная жемчужина уральского зодчества в самом сердце города.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M12 3v3M11 6h2M6 22V12l6-5 6 5v10H6z" />
        <path d="M10 22v-5h4v5" />
      </svg>
    ),
  },
  {
    title: "Граница Европа — Азия",
    description: "Знаменитый обелиск на 17-м км Новомосковского тракта, обозначающий условную границу двух частей света. Обязательная точка на карте каждого гостя Урала.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7" />
      </svg>
    ),
  },
  {
    title: "Парк «Оленьи ручьи»",
    description: "Природный парк с живописными скалами, пещерами и рекой Серга. Тысячи туристов ежегодно открывают для себя дикую природу Среднего Урала всего в 100 км от города.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M17 8c.7-1 1-2 1-3a6 6 0 00-12 0c0 1 .3 2 1 3" />
        <path d="M12 2v8M8 12c-1 1-2 3-2 5h12c0-2-1-4-2-5" />
        <path d="M6 22h12" />
      </svg>
    ),
  },
  {
    title: "Екатеринбургский цирк",
    description: "Один из старейших и крупнейших цирков России, основанный в 1873 году. Уникальное здание в форме летающей тарелки стало настоящей архитектурной достопримечательностью.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <ellipse cx="12" cy="10" rx="9" ry="5" />
        <path d="M3 10v4c0 2.8 4 5 9 5s9-2.2 9-5v-4" />
        <path d="M12 5v14" />
      </svg>
    ),
  },
];

function App() {
  return (
    <main className="min-h-screen bg-background dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <ArtDecoSunburst />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-primary" />
              <div className="w-3 h-3 rotate-45 border border-primary" />
              <div className="w-16 h-px bg-primary" />
            </div>
          </div>

          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">Урал · Россия · основан в 1723 году</p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            <span className="text-gold-gradient">Екатерин</span>бург
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Столица Урала — город, где Европа встречает Азию, промышленное наследие соседствует с современным искусством, а суровая природа открывает путь к удивительным открытиям.
          </p>

          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-primary" />
              <div className="w-2 h-2 rotate-45 bg-primary" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="stepped" />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">О городе</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight text-balance">
                Где история обретает новое дыхание
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Екатеринбург — четвёртый по численности город России, основанный Петром I как металлургический завод-крепость. Здесь на рубеже Европы и Азии сложилась особая культура — суровая, честная и невероятно богатая.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Сегодня это крупнейший деловой и культурный центр Урала: современная архитектура, мировые музеи, живая рок-сцена и нетронутая природа — всё это Екатеринбург.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Что посмотреть</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Достопримечательности</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <ServiceCard
                key={attraction.title}
                title={attraction.title}
                description={attraction.description}
                icon={attraction.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ArtDecoDivider variant="fan" />

          <div className="relative text-center py-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/20 font-serif text-9xl leading-none">
              &ldquo;
            </div>

            <blockquote className="relative z-10">
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic mb-8">
                Екатеринбург — это город, который удивляет. Он не пытается казаться красивым — он просто живёт, и в этой жизни есть своя особая, уральская красота.
              </p>
              <footer className="text-muted-foreground">
                <span className="text-primary">—</span> Путешественник,{" "}
                <span className="text-primary">впервые посетивший Урал</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ArtDecoSunburst />
        </div>

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ArtDecoDivider variant="chevron" />
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Планируй поездку</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">Откройте Екатеринбург</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            Город ждёт вас круглый год: зимой — заснеженный и сказочный, летом — зелёный и солнечный. Каждый сезон дарит новые впечатления.
          </p>

          <div className="relative p-8 md:p-12 border border-border inline-block w-full max-w-md">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />

            <div className="flex flex-col gap-4 items-center">
              <p className="text-foreground font-serif text-2xl">Екатеринбург</p>
              <div className="flex gap-8 text-center">
                <div>
                  <p className="text-gold-gradient font-serif text-3xl font-bold">300+</p>
                  <p className="text-muted-foreground text-sm mt-1">лет истории</p>
                </div>
                <div>
                  <p className="text-gold-gradient font-serif text-3xl font-bold">1.5M</p>
                  <p className="text-muted-foreground text-sm mt-1">жителей</p>
                </div>
                <div>
                  <p className="text-gold-gradient font-serif text-3xl font-bold">4-й</p>
                  <p className="text-muted-foreground text-sm mt-1">город России</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="font-serif text-xl text-foreground">Екатеринбург</span>
              <div className="w-12 h-px bg-primary" />
            </div>
            <p className="text-muted-foreground text-sm tracking-widest uppercase">Столица Урала · 1723</p>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rotate-45 border border-primary/50" />
              <div className="w-3 h-3 rotate-45 border border-primary" />
              <div className="w-2 h-2 rotate-45 border border-primary/50" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
