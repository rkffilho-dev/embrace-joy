import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Check, ChevronDown, Clock3, Gift, LockKeyhole, MonitorSmartphone, ShieldCheck, Sparkles } from "lucide-react";

import heroImg from "@/assets/hero-magazines.jpg";
import packA from "@/assets/pack-a.jpg";
import packB from "@/assets/pack-b.jpg";
import packC from "@/assets/pack-c.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Banca Digital — Revistas que marcaram gerações" },
      { name: "description", content: "Uma banca digital para redescobrir revistas clássicas, quadrinhos e coleções de outras épocas." },
      { property: "og:title", content: "Banca Digital — A banca que marcou gerações agora cabe no seu bolso" },
      { property: "og:description", content: "Entre, escolha uma prateleira e redescubra publicações de outras épocas em uma experiência digital organizada." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const shelves = [
  { img: packA, eyebrow: "PRATELEIRA 01", title: "Infância & diversão", copy: "Publicações que fizeram parte das tardes, férias e descobertas de uma geração." },
  { img: packB, eyebrow: "PRATELEIRA 02", title: "Variedades & clássicos", copy: "Edições de diferentes épocas reunidas para você navegar sem garimpar arquivo por arquivo." },
  { img: packC, eyebrow: "PRATELEIRA 03", title: "Cultura & curiosidades", copy: "Capas, matérias e páginas que ajudam a reconstruir o jeito de pensar e viver de outras décadas." },
];

const faq = [
  ["Como funciona o acesso?", "Depois da confirmação do pagamento, você recebe as instruções para acessar a área de membros e as coleções incluídas na sua compra."],
  ["Consigo ler no celular?", "Sim. O acervo digital pode ser acessado em celular, tablet ou computador, de acordo com o formato disponibilizado em cada coleção."],
  ["É uma assinatura mensal?", "Não. A oferta principal é apresentada como pagamento único. Antes de finalizar, confira no checkout exatamente o que está incluído."],
  ["O que fica bloqueado dentro da plataforma?", "Coleções adicionais podem aparecer como prateleiras separadas. Elas não fazem parte da compra inicial e só são liberadas se você decidir adquiri-las."],
];

function CTA({ children = "QUERO ENTRAR NA BANCA" }: { children?: React.ReactNode }) {
  return <a href="#oferta" className="cta">{children}<span aria-hidden>→</span></a>;
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="news-strip">
        <div><span>EDIÇÃO ESPECIAL</span><b> SUA BANCA DIGITAL ESTÁ ABERTA</b><span> ACESSO ONLINE</span></div>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Banca Digital"><span>BANCA</span><strong>DIGITAL</strong></a>
        <div className="header-note">REVISTAS • MEMÓRIAS • OUTRAS ÉPOCAS</div>
        <a href="#oferta" className="header-ticket">ENTRAR NA BANCA</a>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <div className="stamp">ABERTA 24 HORAS • DIRETO NO SEU CELULAR</div>
          <p className="kicker">A banca de jornal mudou. A sensação de descobrir uma revista, não.</p>
          <h1>A BANCA QUE MARCOU GERAÇÕES <em>AGORA CABE NO SEU BOLSO.</em></h1>
          <p className="hero-lead">Entre, escolha uma prateleira e redescubra revistas e publicações de outras épocas em uma experiência digital organizada para folhear quando quiser.</p>
          <div className="hero-actions"><CTA /><a href="#prateleiras" className="text-link">DAR UMA OLHADA PRIMEIRO ↓</a></div>
          <div className="mini-proof"><span><Clock3 /> acesso digital</span><span><MonitorSmartphone /> celular, tablet e PC</span><span><ShieldCheck /> compra protegida</span></div>
        </div>
        <div className="hero-visual">
          <div className="poster-tag">HOJE NA BANCA</div>
          <img src={heroImg} alt="Revistas clássicas reunidas em uma banca" />
          <div className="price-sticker"><small>UMA BANCA</small><b>INTEIRA</b><span>NO SEU BOLSO</span></div>
          <div className="tape tape-one" /><div className="tape tape-two" />
        </div>
      </section>

      <section className="memory-band">
        <p>VOCÊ LEMBRA DE...</p>
        <div className="memory-marquee"><span>ESPERAR A PRÓXIMA EDIÇÃO?</span><i>✦</i><span>ESCOLHER PELA CAPA?</span><i>✦</i><span>FOLHEAR SEM VER A HORA PASSAR?</span></div>
      </section>

      <section id="prateleiras" className="shelves section">
        <div className="section-heading">
          <span className="section-number">01 / PASSE PELAS PRATELEIRAS</span>
          <h2>NÃO É UMA PASTA JOGADA.<br/><em>É UMA BANCA PARA EXPLORAR.</em></h2>
          <p>Em vez de vender só “milhares de PDFs”, a proposta é simples: organizar a descoberta como uma banca — por temas, épocas e coleções.</p>
        </div>
        <div className="shelf-grid">
          {shelves.map((s) => <article className="shelf-card" key={s.title}>
            <div className="shelf-image"><img src={s.img} alt="" /><span>{s.eyebrow}</span></div>
            <div className="shelf-copy"><h3>{s.title}</h3><p>{s.copy}</p><b>VER NA BANCA →</b></div>
          </article>)}
        </div>
      </section>

      <section className="quantity">
        <div className="quantity-paper">
          <span>EDIÇÃO EXTRA</span>
          <h2>A BANCA É MAIOR<br/>DO QUE PARECE.</h2>
          <p>Um acervo amplo de revistas digitalizadas, organizado para você encontrar o que quer sem depender de buscas intermináveis pela internet.</p>
          <div className="quantity-note"><Sparkles/><div><b>O número exato entra aqui quando o catálogo estiver fechado.</b><small>Não vamos inventar “80 mil” ou “200 mil” só porque concorrentes usam números grandes.</small></div></div>
        </div>
      </section>

      <section className="platform section dark-section">
        <div className="section-heading light">
          <span className="section-number">02 / POR DENTRO DA BANCA</span>
          <h2>MEMÓRIA ANTIGA.<br/><em>EXPERIÊNCIA ATUAL.</em></h2>
          <p>O produto não termina no checkout. A área de membros vira sua banca particular, com o que você comprou à mão e novas prateleiras para descobrir depois.</p>
        </div>
        <div className="platform-window">
          <div className="window-top"><span/><span/><span/><b>BANCA DIGITAL / MINHAS PRATELEIRAS</b></div>
          <div className="window-body">
            <aside><strong>MINHA BANCA</strong><a className="active">Início</a><a>Minhas revistas</a><a>Bônus</a><a>Novidades</a></aside>
            <div className="library">
              <div className="library-head"><div><small>BOM TE VER POR AQUI</small><h3>Escolha uma prateleira</h3></div><span>⌕ Buscar na banca</span></div>
              <div className="library-grid">
                <div className="lib-card open"><BookOpen/><b>Revistas clássicas</b><small>LIBERADO</small></div>
                <div className="lib-card open"><Gift/><b>HQs bônus</b><small>LIBERADO</small></div>
                <div className="lib-card locked"><LockKeyhole/><b>Banca dos Games</b><small>COLEÇÃO EXTRA</small></div>
                <div className="lib-card locked"><LockKeyhole/><b>Edições especiais</b><small>COLEÇÃO EXTRA</small></div>
              </div>
            </div>
          </div>
        </div>
        <p className="mockup-note">Demonstração visual da experiência. A organização final acompanha o catálogo real.</p>
      </section>

      <section className="included section">
        <div className="section-heading">
          <span className="section-number">03 / SUA COMPRA</span>
          <h2>O QUE VOCÊ LEVA<br/><em>DA BANCA HOJE.</em></h2>
        </div>
        <div className="receipt">
          <div className="receipt-head"><b>BANCA DIGITAL</b><span>COMPROVANTE DE ACESSO</span></div>
          <div className="receipt-lines">
            <div><span>Acervo principal de revistas</span><b>INCLUÍDO</b></div>
            <div><span>Organização por coleções</span><b>INCLUÍDO</b></div>
            <div><span>Acesso pela área de membros</span><b>INCLUÍDO</b></div>
            <div><span>HQs selecionadas</span><b>BÔNUS</b></div>
            <div><span>Acesso em múltiplos dispositivos</span><b>INCLUÍDO</b></div>
          </div>
          <div className="receipt-total"><span>SEM MENSALIDADE</span><strong>PAGAMENTO ÚNICO</strong></div>
        </div>
      </section>

      <section className="bonus">
        <div className="bonus-inner">
          <div><span className="section-number">04 / PRESENTE DO JORNALEIRO</span><h2>PASSOU NA BANCA?<br/><em>LEVA HQ DE BÔNUS.</em></h2><p>Uma seleção extra de quadrinhos para complementar a experiência. Sem transformar a oferta principal numa lista infinita de “bônus” que ninguém entende.</p></div>
          <div className="bonus-ticket"><Gift/><small>BÔNUS DA CASA</small><strong>HQs<br/>DIGITAIS</strong><span>LIBERADAS COM A COMPRA</span></div>
        </div>
      </section>

      <section id="oferta" className="offer section">
        <div className="offer-card">
          <div className="offer-left"><span className="stamp">OFERTA DE INAUGURAÇÃO</span><h2>SUA BANCA,<br/><em>SEMPRE À MÃO.</em></h2><p>Entre pelo low ticket, conheça o acervo e acesse sua coleção pela plataforma.</p><ul><li><Check/>Acesso ao acervo anunciado</li><li><Check/>HQs selecionadas de bônus</li><li><Check/>Área de membros organizada</li><li><Check/>Acesso digital após confirmação</li></ul></div>
          <div className="offer-price"><small>VALOR DE LANÇAMENTO</small><div className="price-placeholder">R$ <b>--,--</b></div><p>Defina o preço final antes de publicar.</p><a className="cta big" href="#checkout">QUERO ENTRAR NA BANCA <span>→</span></a><div className="secure"><ShieldCheck/> Compra protegida • acesso digital</div></div>
        </div>
      </section>

      <section className="guarantee section">
        <ShieldCheck/>
        <div><span className="section-number">COMPRA TRANQUILA</span><h2>7 DIAS PARA CONHECER A BANCA.</h2><p>Use esta seção somente se sua oferta/checkout realmente adotar a garantia anunciada. O texto final deve refletir as condições reais da venda.</p></div>
      </section>

      <section className="faq section">
        <div className="section-heading"><span className="section-number">ÚLTIMA PÁGINA</span><h2>PERGUNTAS DE<br/><em>BALCÃO.</em></h2></div>
        <div className="faq-list">{faq.map(([q,a]) => <details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div>
      </section>

      <section className="final-cta">
        <small>A BANCA ESTÁ ABERTA</small><h2>QUAL PRATELEIRA<br/>VOCÊ VAI ABRIR PRIMEIRO?</h2><CTA>ENTRAR NA BANCA DIGITAL</CTA>
      </section>

      <footer><div className="brand footer-brand"><span>BANCA</span><strong>DIGITAL</strong></div><p>Uma experiência digital inspirada nas bancas que marcaram gerações.</p><small>© 2026 • Conteúdo digital. Use somente materiais que você tenha direito de distribuir.</small></footer>
    </main>
  );
}
