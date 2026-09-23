import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero-magazines.jpg";
import packA from "@/assets/pack-a.jpg";
import packB from "@/assets/pack-b.jpg";
import packC from "@/assets/pack-c.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acervo Clássico — Packs de Revistas Vintage" },
      {
        name: "description",
        content:
          "Coleções digitalizadas em alta resolução de revistas clássicas de 1950 a 1980, prontas para download.",
      },
      { property: "og:title", content: "Acervo Clássico — Packs de Revistas Vintage" },
      {
        property: "og:description",
        content:
          "Coleções digitalizadas em alta resolução de revistas clássicas de 1950 a 1980, prontas para download.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const packs = [
  {
    img: packA,
    nome: "Pack Moda & Elegância",
    decada: "1950 — 1965",
    edicoes: 48,
    preco: "R$ 39",
    descricao: "Capas e editoriais de moda restaurados, com páginas duplas em 600 dpi.",
  },
  {
    img: packB,
    nome: "Pack Vida & Lar",
    decada: "1953 — 1972",
    edicoes: 62,
    preco: "R$ 49",
    descricao: "Revistas de casa, jardim e reportagem fotográfica da era dourada da imprensa.",
  },
  {
    img: packC,
    nome: "Pack Ciência & Cultura",
    decada: "1958 — 1980",
    edicoes: 35,
    preco: "R$ 45",
    descricao: "Ilustrações científicas, tipografia modernista e ensaios culturais raros.",
  },
];

const beneficios = [
  {
    titulo: "Digitalização 600 dpi",
    texto: "Cada página escaneada sem compressão destrutiva, com cores calibradas.",
  },
  {
    titulo: "Download imediato",
    texto: "Arquivos em PDF pesquisável e JPEG separado por capa e página.",
  },
  {
    titulo: "Uso livre em projetos",
    texto: "Licença para colagem, moodboard, impressão e conteúdo próprio.",
  },
];

function Index() {
  return (
    <div className="min-h-screen paper-grain">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-display text-lg font-extrabold tracking-[0.2em] uppercase">
            Acervo Clássico
          </span>
          <nav className="hidden gap-8 text-sm tracking-widest uppercase md:flex">
            <a href="#packs" className="hover:text-primary">
              Packs
            </a>
            <a href="#sobre" className="hover:text-primary">
              Sobre
            </a>
            <a href="#faq" className="hover:text-primary">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs tracking-[0.35em] text-primary uppercase">
              Edição colecionador · Vol. 12
            </p>
            <h1 className="mt-5 text-5xl leading-[0.95] font-extrabold lg:text-6xl">
              Packs de revistas clássicas, digitalizadas página por página
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Mais de 140 edições originais de 1950 a 1980 — moda, lar, ciência e cultura — prontas
              para você folhear, imprimir e usar nos seus projetos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#packs"
                className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold tracking-widest text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                Ver os packs
              </a>
              <a
                href="#sobre"
                className="rounded-sm border border-foreground px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-colors hover:bg-secondary"
              >
                Como funciona
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -rotate-1 border border-border bg-secondary" />
            <img
              src={heroImg}
              alt="Pilha de revistas clássicas dos anos 1960 e 1970"
              width={1600}
              height={1008}
              className="relative w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="packs" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <h2 className="text-3xl font-extrabold">Os packs</h2>
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            3 coleções
          </span>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {packs.map((p) => (
            <article key={p.nome} className="group border border-border bg-card">
              <img
                src={p.img}
                alt={p.nome}
                loading="lazy"
                width={912}
                height={1104}
                className="aspect-[4/5] w-full object-cover grayscale-[15%] transition-all group-hover:grayscale-0"
              />
              <div className="p-6">
                <p className="text-xs tracking-[0.25em] text-accent-foreground uppercase">
                  {p.decada}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{p.nome}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.descricao}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm text-muted-foreground">{p.edicoes} edições</span>
                  <span className="font-display text-2xl font-bold text-primary">{p.preco}</span>
                </div>
                <button className="mt-4 w-full rounded-sm bg-foreground px-4 py-3 text-xs font-semibold tracking-widest text-background uppercase transition-opacity hover:opacity-90">
                  Comprar pack
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="sobre" className="border-y border-border bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          {beneficios.map((b) => (
            <div key={b.titulo}>
              <h3 className="text-xl font-bold">{b.titulo}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-extrabold">Perguntas frequentes</h2>
        <dl className="mt-8 divide-y divide-border border-y border-border">
          <div className="py-5">
            <dt className="font-semibold">Como recebo os arquivos?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">
              O link de download é liberado assim que o pagamento é confirmado.
            </dd>
          </div>
          <div className="py-5">
            <dt className="font-semibold">Posso usar as imagens comercialmente?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">
              Sim, para colagens, impressões e conteúdo próprio; a revenda dos arquivos não é
              permitida.
            </dd>
          </div>
          <div className="py-5">
            <dt className="font-semibold">Existe pack com todas as coleções?</dt>
            <dd className="mt-2 text-sm text-muted-foreground">
              Sim — o combo completo sai por R$ 109 e inclui as edições novas do próximo ano.
            </dd>
          </div>
        </dl>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs tracking-widest text-muted-foreground uppercase sm:flex-row sm:justify-between">
          <span>Acervo Clássico</span>
          <span>Arquivo digital de revistas 1950 — 1980</span>
        </div>
      </footer>
    </div>
  );
}
