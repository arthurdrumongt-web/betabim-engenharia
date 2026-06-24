/* ---- Seção 4 — Edifícios calculados ---- */
function Buildings() {
  const items = [
    { name: 'Edifício Prive Garden', city: 'Florianópolis – SC', floors: '16 pavimentos + pilotis', area: '12.289 m²', system: 'Concreto Armado', image: (window.__resources && window.__resources.projPriveGarden) || '../assets/proj-prive-garden.png' },
    { name: 'Edifício Conceição II', city: 'Feira de Santana – BA', floors: '13 pavimentos + pilotis', area: '10.253 m²', system: 'Parede de Concreto', image: (window.__resources && window.__resources.projConceicaoII) || '../assets/proj-conceicao-ii.png' },
    { name: 'Edifício Central', city: 'Guarapuava – PR', floors: '04 pavimentos', area: '545,01 m²', system: 'Concreto Armado', image: (window.__resources && window.__resources.projGuarapuava) || '../assets/proj-guarapuava.png', imagePosition: 'top left' },
    { name: 'Edifício Santa Cruz', city: 'Guarapuava – PR', floors: '04 pavimentos', area: '545,01 m²', system: 'Concreto Armado', image: (window.__resources && window.__resources.projSantaCruz) || '../assets/proj-santa-cruz.png', imagePosition: 'left top' },
    { name: 'Edifício Lunabel', city: 'Novo Gama – GO', floors: '04 pavimentos', area: '2.137,17 m²', system: 'Concreto Armado', image: (window.__resources && window.__resources.projLunabel) || '../assets/proj-lunabel.png', imagePosition: 'left top' },
    { name: 'Edifício Jardim Paraíso', city: 'Feira de Santana – BA', floors: 'Térreo + 9 pavimentos', area: '21.068,12 m²', system: 'Parede de Concreto', image: (window.__resources && window.__resources.projJardimParaiso) || '../assets/proj-jardim-paraiso.png', imagePosition: 'left top' },
    { name: 'Edifício Paquetá', city: 'Campinas – SP', floors: '17 pavimentos + 2 subsolos', area: '4.675,41 m²', system: 'Concreto Armado', image: (window.__resources && window.__resources.projPaqueta) || '../assets/proj-paqueta.png', imagePosition: 'left top' },
  ];

  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightbox, setLightbox] = useState(null); // index of opened card, or null

  // close lightbox on ESC; lock body scroll while open
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((p) => (p === null ? p : Math.min(items.length - 1, p + 1)));
      if (e.key === 'ArrowLeft') setLightbox((p) => (p === null ? p : Math.max(0, p - 1)));
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  const updateNav = () => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < maxScroll - 4);
    // active card index based on first visible card
    const cards = el.querySelectorAll('[data-build-card]');
    let idx = 0;
    for (let i = 0; i < cards.length; i++) {
      const c = cards[i];
      if (c.offsetLeft >= el.scrollLeft - 8) { idx = i; break; }
    }
    setActiveIdx(idx);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateNav();
    el.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav);
    return () => {
      el.removeEventListener('scroll', updateNav);
      window.removeEventListener('resize', updateNav);
    };
  }, []);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-build-card]');
    const step = card ? (card.getBoundingClientRect().width + 24) : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const scrollToIdx = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('[data-build-card]');
    if (!cards[i]) return;
    el.scrollTo({ left: cards[i].offsetLeft - 4, behavior: 'smooth' });
  };

  return (
    <section className="section">
      <div className="container">
        <Reveal className="s-head" line>
          <Eyebrow>Edifícios calculados pela BETABIM</Eyebrow>
          <h2>Empreendimentos reais, em diferentes estados</h2>
          <p className="sub">Com sistemas construtivos diversos — concreto armado, parede de concreto e alvenaria estrutural.</p>
        </Reveal>

        <div className="build-carousel" style={{ marginTop: 56, position: 'relative' }}>
          {/* edge fades */}
          <div className="build-fade build-fade-l" data-show={canPrev ? '1' : '0'} aria-hidden="true" />
          <div className="build-fade build-fade-r" data-show={canNext ? '1' : '0'} aria-hidden="true" />

          {/* prev / next */}
          <button
            type="button"
            className="build-nav build-nav-prev"
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            aria-label="Anterior"
          >
            <Icon name="chevron-left" size={20} stroke={2.2} />
          </button>
          <button
            type="button"
            className="build-nav build-nav-next"
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            aria-label="Próximo"
          >
            <Icon name="chevron-right" size={20} stroke={2.2} />
          </button>

          <div ref={trackRef} className="build-track">
            {items.map((b, i) => (
              <div
                key={i}
                data-build-card
                className={`card card-hover build-card-wrap${b.image ? ' build-card-clickable' : ''}`}
                onClick={b.image ? () => setLightbox(i) : undefined}
                role={b.image ? 'button' : undefined}
                tabIndex={b.image ? 0 : undefined}
                onKeyDown={b.image ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightbox(i); } } : undefined}
                aria-label={b.image ? `Ver detalhes — ${b.name}` : undefined}
              >
                {b.image ? (
                  <div className="build-photo" style={{
                    position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden',
                    background: '#0e1620',
                  }}>
                    <img src={b.image} alt={b.name} style={{
                      position: 'absolute', inset: 0, width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: b.imagePosition || 'center', display: 'block',
                      transition: 'transform 700ms var(--ease)',
                    }} />
                    <span className="build-expand" aria-hidden="true">
                      <Icon name="maximize-2" size={16} stroke={2.2} />
                      Ver projeto
                    </span>
                  </div>
                ) : (
                  <Placeholder label="Foto do edifício" style={{ aspectRatio: '4 / 3' }} />
                )}
                <div style={{ padding: '22px 22px 24px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>
                    <Icon name="map-pin" size={14} stroke={2} /> {b.city}
                  </div>
                  <h3 style={{ fontSize: 21, fontWeight: 800 }}>{b.name}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 16 }}>
                    <Row icon="building-2" text={b.floors} />
                    <Row icon="ruler" text={b.area} />
                  </div>
                  <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                    <span style={{
                      fontFamily: 'IBM Plex Mono, monospace', fontSize: 11.5, letterSpacing: '0.05em',
                      color: 'var(--blue-deep)', background: 'rgba(93,143,205,0.10)',
                      border: '1px solid rgba(93,143,205,0.25)', padding: '5px 10px', borderRadius: 3, textTransform: 'uppercase',
                    }}>{b.system}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* progress dots */}
          <div className="build-dots" role="tablist" aria-label="Navegar entre edifícios">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className="build-dot"
                data-active={i === activeIdx ? '1' : '0'}
                aria-label={`Ir para edifício ${i + 1}`}
                onClick={() => scrollToIdx(i)}
              />
            ))}
          </div>
        </div>

        <Reveal style={{ marginTop: 36, textAlign: 'center' }}>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 720, margin: '0 auto' }}>
            Mais de <strong style={{ color: 'var(--ink)' }}>35 edifícios projetados</strong> em diferentes regiões do Brasil, com soluções em concreto armado, parede de concreto e alvenaria estrutural.
          </p>
        </Reveal>
      </div>

      {/* ---- Lightbox ---- */}
      {lightbox !== null && (
        <div className="lb-overlay" onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label={`Detalhes — ${items[lightbox].name}`}>
          <div className="lb-panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="lb-close" onClick={() => setLightbox(null)} aria-label="Fechar">
              <Icon name="x" size={22} stroke={2.2} />
            </button>

            {lightbox > 0 && (
              <button type="button" className="lb-arrow lb-arrow-prev" onClick={() => setLightbox(lightbox - 1)} aria-label="Projeto anterior">
                <Icon name="chevron-left" size={24} stroke={2.2} />
              </button>
            )}
            {lightbox < items.length - 1 && (
              <button type="button" className="lb-arrow lb-arrow-next" onClick={() => setLightbox(lightbox + 1)} aria-label="Próximo projeto">
                <Icon name="chevron-right" size={24} stroke={2.2} />
              </button>
            )}

            <div className="lb-img-wrap">
              <img key={lightbox} src={items[lightbox].image} alt={items[lightbox].name} className="lb-img" />
            </div>

            <div className="lb-info">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, color: 'var(--blue-bright)', marginBottom: 10 }}>
                <Icon name="map-pin" size={14} stroke={2} /> {items[lightbox].city}
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff', lineHeight: 1.15 }}>{items[lightbox].name}</h3>
              <div className="lb-meta">
                <div className="lb-meta-item">
                  <span className="mono lb-meta-k">Pavimentos</span>
                  <span className="lb-meta-v">{items[lightbox].floors}</span>
                </div>
                <div className="lb-meta-item">
                  <span className="mono lb-meta-k">Área</span>
                  <span className="lb-meta-v">{items[lightbox].area}</span>
                </div>
                <div className="lb-meta-item">
                  <span className="mono lb-meta-k">Sistema</span>
                  <span className="lb-meta-v">{items[lightbox].system}</span>
                </div>
              </div>
              <div className="mono lb-counter">{String(lightbox + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Row({ icon, text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-body)' }}>
      <span style={{ color: 'var(--blue-deep)', flex: 'none' }}><Icon name={icon} size={16} stroke={2} /></span>
      {text}
    </div>
  );
}

/* ---- Seção 5 — Por que parede de concreto ---- */
function WallSystem() {
  const pills = [
    { icon: 'gauge', title: 'Velocidade construtiva', body: 'Possibilidade de execução de um pavimento a cada 2 dias, contra 28 dias dos sistemas tradicionais em concreto armado.' },
    { icon: 'layout-grid', title: 'Padronização e menor desperdício', body: 'Formas industrializadas e armadura padronizada reduzem variação na obra e perdas de material.' },
    { icon: 'calendar-check', title: 'Previsibilidade de cronograma', body: 'Menos variáveis em obra significam menos surpresas no caminho crítico do empreendimento.' },
  ];
  return (
    <section className="section section--dark wall-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="grid-bg grid-bg--dark wall-grid-drift" />
      <div className="wall-corner-glow" style={{
        position: 'absolute', top: 0, left: 0, width: '40%', height: '100%',
        background: 'linear-gradient(120deg, rgba(93,143,205,0.08), transparent 70%)',
        clipPath: 'polygon(0 0, 78% 0, 0 100%)', pointerEvents: 'none',
      }} />
      <div className="wall-scanline" aria-hidden="true" />
      <div className="container" style={{ position: 'relative' }}>
        <Reveal className="s-head" line style={{ maxWidth: 820 }}>
          <Eyebrow>Por que parede de concreto</Eyebrow>
          <h2>O sistema que está mudando o <span className="hl">cronograma</span> da incorporação brasileira</h2>
          <p className="sub">
            Parede de concreto entrega o esqueleto estrutural junto com a vedação, em ciclos rápidos e altamente padronizados — a resposta técnica para empreendimentos que precisam de prazo curto, padronização executiva e escala.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 52 }} className="pill-grid">
          {pills.map((p, i) => (
            <Reveal key={i} delay={(i % 3) + 1} style={{
              background: 'var(--graphite-800)', border: '1px solid var(--border-dark)',
              borderRadius: 'var(--radius)', padding: '30px 26px', position: 'relative',
              overflow: 'hidden',
            }} className="card-hover wall-card">
              {/* animated top accent line that draws in on reveal */}
              <div className="wall-card-accent" aria-hidden="true" />
              <div className="wall-card-number" style={{
                fontFamily: 'Montserrat', fontWeight: 900, fontSize: 30, color: 'rgba(93,143,205,0.35)',
                position: 'absolute', top: 20, right: 22,
              }}>0{i + 1}</div>
              <span className="wall-card-icon" style={{ color: 'var(--blue-bright)', display: 'inline-flex' }}><Icon name={p.icon} size={28} stroke={1.8} /></span>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginTop: 20, color: '#fff' }}>{p.title}</h3>
              <p style={{ marginTop: 12, fontSize: 14.5, color: 'var(--on-dark-muted)', lineHeight: 1.55 }}>{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 40, maxWidth: 880 }}>
          <p style={{ fontSize: 16.5, color: 'var(--on-dark-muted)', lineHeight: 1.6, borderLeft: '2px solid var(--blue)', paddingLeft: 20 }}>
            A BETABIM é especialista em projetar essas estruturas considerando o fluxo real da obra desde a primeira prancha — porque parede de concreto mal projetada perde justamente o que faz dela vantajosa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Buildings, WallSystem });
