import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronDown, Gift, LockKeyhole, MonitorSmartphone, Play, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-magazines.jpg";
import packA from "@/assets/pack-a.jpg";
import packB from "@/assets/pack-b.jpg";
import packC from "@/assets/pack-c.jpg";
import acaoGames from "@/assets/covers/acao-games-111.jpg";
import bizz from "@/assets/covers/bizz-1986.jpg";
import mad from "@/assets/covers/mad-52.jpg";
import mundoEstranho from "@/assets/covers/mundo-estranho-71.jpg";
import placar from "@/assets/covers/placar-1994.jpg";
import quatroRodas from "@/assets/covers/quatro-rodas-1988.png";
import recreio from "@/assets/covers/recreio-247.jpg";
import revistaXuxa from "@/assets/covers/revista-xuxa-1988.jpg";
import superInteressante from "@/assets/covers/superinteressante-1996.jpg";

export const Route=createFileRoute("/")({head:()=>({meta:[{title:"Banca Digital — Revistas antigas em uma banca online"},{name:"description",content:"Redescubra revistas antigas por categoria e época em uma banca digital organizada."}]}),component:Index});

const classicCovers=[
 recreio,
 acaoGames,
 placar,
 quatroRodas,
 bizz,
 superInteressante,
 mundoEstranho,
 revistaXuxa,
 mad,
];

const coverPool=[
 ...classicCovers,
 recreio,
 acaoGames,
 placar,
 superInteressante,
 mundoEstranho,
 bizz,
];

const categories=[
 {name:"Clássicos da Banca",sub:"Recreio, Ação Games, Placar, Quatro Rodas, Bizz, MAD e outras capas que marcaram época",covers:classicCovers},
 {name:"Esportes & Motores",sub:"Futebol, automobilismo e grandes momentos",covers:[placar,quatroRodas,placar,quatroRodas,...classicCovers]},
 {name:"Quentes",sub:"Publicações adultas e ensaios de outras épocas",covers:[packA,packB,packC,heroImg,packB,packA,packC,heroImg],adult:true},
 {name:"Moda & Cultura Pop",sub:"Música, comportamento, celebridades e tendências de cada década",covers:[bizz,revistaXuxa,mad,superInteressante,mundoEstranho,...classicCovers]},
 {name:"Infância & Adolescentes",sub:"Recreio, games, ídolos e cultura jovem dos anos 80, 90 e 2000",covers:[recreio,acaoGames,revistaXuxa,bizz,mad,superInteressante,mundoEstranho,...classicCovers]},
];

const faq=[
 ["Como recebo as revistas?","Após a confirmação do pagamento, o acesso à área de membros é liberado conforme as instruções da oferta."],
 ["Posso acessar pelo celular?","Sim. A experiência foi pensada para celular, tablet e computador."],
 ["É assinatura?","A oferta principal será de pagamento único. O checkout final mostrará exatamente o que está incluído."],
 ["As coleções bloqueadas estão incluídas?","Não. Elas aparecem como novas coleções disponíveis dentro da plataforma e só são liberadas se você optar por comprá-las."],
];

function CTA({children="QUERO ACESSAR A BANCA"}:{children?:React.ReactNode}){return <a className="cta" href="#oferta">{children}<span>→</span></a>}

function CoverRail({category,sub,covers,reverse=false,adult=false}:{category:string;sub:string;covers:string[];reverse?:boolean;adult?:boolean}){
 const loop=[...covers,...covers];
 return <div className="rail-block">
  <div className="rail-head"><div><small>CATEGORIA</small><h3>{category}</h3></div><p>{sub}</p></div>
  <div className={"cover-viewport "+(adult?"adult":"")}><div className={"cover-track "+(reverse?"reverse":"")}>{loop.map((src,i)=><div className="mag-cover" key={i}><img src={src} alt="" /><span>{adult?"18+":"EDIÇÃO DIGITAL"}</span></div>)}</div></div>
 </div>
}

function Index(){return <main>
 <div className="topline">BANCA DIGITAL <span>•</span> REVISTAS DE OUTRAS ÉPOCAS, ORGANIZADAS PARA REDESCOBRIR</div>
 <header><a className="logo" href="#top"><b>BANCA</b><span>DIGITAL</span></a><nav><a href="#categorias">Categorias</a><a href="#plataforma">Como funciona</a><a href="#oferta">Acesso</a></nav><a className="mini-cta" href="#oferta">ENTRAR NA BANCA</a></header>

 <section className="hero" id="top">
  <div className="hero-copy">
   <div className="eyebrow">REVISTAS • HQs • CULTURA POP • OUTRAS ÉPOCAS</div>
   <h1>AS REVISTAS QUE SUMIRAM DAS BANCAS <em>NÃO PRECISAM SUMIR DA SUA MEMÓRIA.</em></h1>
   <p>Uma banca digital feita para quem sente falta de abrir uma revista e descobrir o que tinha dentro — agora organizada por categorias e pronta para acessar online.</p>
   <div className="hero-buttons"><CTA/><a className="ghost" href="#categorias">VER O QUE TEM NA BANCA ↓</a></div>
   <div className="trust"><span><Check/> acesso digital</span><span><MonitorSmartphone/> celular, tablet e PC</span><span><Gift/> HQs de bônus</span></div>
  </div>
  <div className="video-wrap">
   <div className="video-label"><span>APERTE O PLAY</span><b>VEJA A BANCA POR DENTRO</b></div>
   <div className="video-frame">
    <video controls playsInline preload="metadata" poster={heroImg}>
      <source src="/video-banca.mp4" type="video/mp4"/>
    </video>
    <div className="video-empty"><Play/><b>VÍDEO HERO 9:16</b><small>Adicione o arquivo <code>public/video-banca.mp4</code></small></div>
   </div>
   <div className="video-caption">Do balcão para a tela — sem perder a graça de procurar a próxima revista.</div>
  </div>
 </section>

 <section className="hook"><span>QUAL ERA A SUA PRATELEIRA?</span><b>CLÁSSICOS</b><i>•</i><b>ESPORTE</b><i>•</i><b>MODA</b><i>•</i><b>ADOLESCENTES</b><i>•</i><b>HQs</b><i>•</i><b>VARIEDADES</b></section>

 <section className="discovery" id="categorias">
  <div className="intro"><small>ENTRE E OLHE À VONTADE</small><h2>UMA BANCA NÃO É FEITA DE TRÊS CARDS.<br/><em>É FEITA DE CAPAS.</em></h2><p>Aqui o produto aparece antes da explicação: fileiras de revistas, separadas como você procuraria numa banca de verdade.</p></div>
  {categories.map((c,i)=><CoverRail key={c.name} {...c} reverse={i%2===1}/>)}
 </section>

 <section className="era">
  <div><small>PROCURE PELA ÉPOCA</small><h2>QUAL DELAS<br/>TE PEGA PRIMEIRO?</h2></div>
  <div className="era-grid"><button>ANOS 70</button><button>ANOS 80</button><button>ANOS 90</button><button>ANOS 2000</button></div>
 </section>

 <section className="showcase">
  <div className="showcase-copy"><small>NÃO É SÓ QUANTIDADE</small><h2>É ABRIR UMA CAPA<br/>E LEMBRAR NA HORA.</h2><p>O tamanho do acervo entra como prova de valor. O desejo vem de reconhecer uma época, uma capa, um assunto que você não via há anos.</p><CTA>QUERO VER MINHA BANCA</CTA></div>
  <div className="cover-wall">{classicCovers.map((src,i)=><img src={src} alt="" key={i}/>)}</div>
 </section>

 <section className="platform" id="plataforma">
  <div className="platform-copy"><small>SUA BANCA PARTICULAR</small><h2>TUDO ORGANIZADO.<br/><em>SEM CAÇAR LINK.</em></h2><p>Depois da compra, você entra em uma área de membros simples: suas coleções ficam liberadas e outras podem aparecer como novas prateleiras para desbloquear.</p></div>
  <div className="app">
   <div className="app-top"><b>BANCA DIGITAL</b><span>Pesquisar revista...</span></div>
   <div className="app-body">
    <aside><b>Minha banca</b><span className="on">Início</span><span>Revistas</span><span>Bônus</span><span>Novidades</span></aside>
    <div className="app-content"><div className="app-title"><small>CONTINUE EXPLORANDO</small><h3>Suas coleções</h3></div><div className="app-cards">
      <article><img src={recreio} alt="Capa de revista clássica"/><b>Revistas clássicas</b><span>LIBERADO</span></article>
      <article><img src={packC} alt="HQs bônus"/><b>HQs bônus</b><span>LIBERADO</span></article>
      <article className="locked"><LockKeyhole/><b>Banca dos Games</b><span>DESBLOQUEAR</span></article>
      <article className="locked"><LockKeyhole/><b>Coleções especiais</b><span>DESBLOQUEAR</span></article>
    </div></div>
   </div>
  </div>
 </section>

 <section className="bonus">
  <div className="bonus-badge"><Gift/><b>BÔNUS</b><span>HQs DIGITAIS</span></div>
  <div><small>ALÉM DAS REVISTAS</small><h2>ENTROU NA BANCA?<br/>TEM HQ TE ESPERANDO.</h2><p>Uma seleção de quadrinhos entra como bônus da oferta principal. A quantidade e os títulos serão exibidos quando o catálogo estiver fechado.</p></div>
 </section>

 <section className="offer" id="oferta">
  <div className="offer-copy"><small>ACESSO À BANCA DIGITAL</small><h2>ESCOLHA UMA CAPA.<br/>DEPOIS OUTRA.<br/><em>E OUTRA.</em></h2><ul><li><Check/>acervo principal anunciado</li><li><Check/>categorias organizadas</li><li><Check/>HQs selecionadas de bônus</li><li><Check/>área de membros</li><li><Check/>acesso digital</li></ul></div>
  <div className="price-card"><span>OFERTA LOW TICKET</span><small>pagamento único</small><div className="price">R$ <b>--,--</b></div><p>Preço final entra quando você definir a oferta.</p><a href="#checkout" className="cta">QUERO ENTRAR NA BANCA <span>→</span></a><div className="safe"><ShieldCheck/> compra protegida</div></div>
 </section>

 <section className="faq"><div><small>ANTES DE ENTRAR</small><h2>DÚVIDAS RÁPIDAS.</h2></div><div>{faq.map(([q,a])=><details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></section>
 <section className="closing"><small>A BANCA ESTÁ ABERTA</small><h2>QUAL REVISTA VOCÊ<br/>PROCURARIA PRIMEIRO?</h2><CTA>ENTRAR NA BANCA DIGITAL</CTA></section>
 <footer><div className="logo"><b>BANCA</b><span>DIGITAL</span></div><p>Revistas de outras épocas em uma experiência digital organizada.</p><small>© 2026 • Conteúdo digital. Disponibilize somente materiais que você tenha direito de distribuir.</small></footer>
 </main>}
