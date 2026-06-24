/* ---- Seção 2 — Faixa de números ---- */
function Numbers() {
  const stats = [
    { to: 35, prefix: '+', label: 'Edifícios projetados' },
    { to: 4, prefix: '+', label: 'Estados atendidos', note: 'SC, BA, SP, DF e outros' },
    { to: 4, prefix: '+', label: 'Especializações em Engenharia Estrutural' },
    { to: 48, suffix: 'h', label: 'Para uma análise técnica preliminar' },
  ];
  return (
    <section className="section--dark" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border-dark)' }}>
      <div className="grid-bg grid-bg--dark" style={{ opacity: 0.5 }} />
      <div className="container" style={{ position: 'relative', padding: '64px 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="numbers-grid">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i + 1} style={{
              padding: '8px 28px',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border-dark)',
            }} className="num-cell">
              <div style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 'clamp(40px, 4.6vw, 58px)', color: '#fff', lineHeight: 1, letterSpacing: '-0.03em' }}>
                <Counter to={s.to} prefix={s.prefix || ''} suffix={s.suffix || ''} />
              </div>
              <div style={{ marginTop: 12, fontSize: 14.5, color: 'var(--on-dark-muted)', lineHeight: 1.4, fontWeight: 500 }}>{s.label}</div>
              {s.note && <div className="mono" style={{ marginTop: 6, fontSize: 11.5, color: 'var(--on-dark-faint)', letterSpacing: '0.04em' }}>{s.note}</div>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Seção 3 — O que muda na sua obra ---- */
function Differentials() {
  const blocks = [
    {
      icon: 'hard-hat',
      title: 'Estruturas desenhadas para a execução, não só para o papel',
      body: 'A maioria dos projetos é entregue sem considerar como a equipe do canteiro vai executar. Os nossos não. Cada detalhamento reduz incompatibilidades, evita retrabalho e simplifica a vida do canteiro.',
      gain: 'Menos paradas, menos discussão no canteiro, cronograma que se cumpre.',
    },
    {
      icon: 'layout-grid',
      title: 'Especialização em parede de concreto',
      body: 'Somos um dos poucos escritórios do DF e entorno especializados em parede de concreto. Conhecemos as armadilhas de projeto e os ganhos reais do sistema — produtividade, padronização e custo operacional menor.',
      gain: 'Fazer mais com o mesmo orçamento, em menos tempo.',
    },
    {
      icon: 'layers',
      title: 'Visão integrada de estrutura, fundação e geotecnia',
      body: 'Engenharia Civil com pós-graduação em Geotecnia. Estrutura, fundação e contenção tratadas juntas — não por escritórios separados que não conversam.',
      gain: 'Uma decisão técnica única, sem retrabalho de compatibilização.',
    },
    {
      icon: 'headset',
      title: 'Acompanhamento técnico até a obra rodar',
      body: 'Não desaparecemos depois da entrega. Acompanhamos o seu projeto durante o desenvolvimento e tiramos dúvidas técnicas do canteiro quando surgirem.',
      gain: 'Respostas rápidas quando a obra trava, sem contratar outro consultor.',
    },
    {
      icon: 'clock',
      title: 'Retorno técnico em 48h',
      body: 'Você manda os dados do empreendimento, devolvemos em até 2 dias úteis uma leitura técnica preliminar com sistema estrutural indicado e pontos de atenção.',
      gain: 'Clareza para decidir antes de comprometer qualquer valor.',
    },
    {
      icon: 'file-search',
      title: 'Análise Técnica do Projeto Arquitetônico',
      body: 'O projeto arquitetônico para parede de concreto precisa de otimização para o melhor aproveitamento das formas de alumínio. Fazemos essa análise por cortesia para a sua obra.',
      gain: 'Otimização do sistema construtivo, sem custo adicional na fase preliminar.',
    },
  ];
  return (
    <section className="section section--alt">
      <div className="container">
        <Reveal className="s-head" line>
          <Eyebrow>O que muda na sua obra</Eyebrow>
          <h2>Quando o projeto sai da <span className="hl">BETABIM</span></h2>
          <p className="sub">Engenharia para construtoras que decidem por dado e não por promessa.</p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 56 }} className="diff-grid">
          {blocks.map((b, i) => (
            <Reveal key={i} delay={(i % 3) + 1} className="card card--accent card-hover" style={{ padding: '30px 26px', display: 'flex', flexDirection: 'column' }}>
              <span style={{
                width: 46, height: 46, borderRadius: 'var(--radius-xs)', background: 'rgba(93,143,205,0.12)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue-deep)',
              }}>
                <Icon name={b.icon} size={23} />
              </span>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginTop: 20, lineHeight: 1.22 }}>{b.title}</h3>
              <p style={{ marginTop: 12, fontSize: 14.5, color: 'var(--text-body)', lineHeight: 1.55, flex: 1 }}>{b.body}</p>
              <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--border)', display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--blue-deep)', letterSpacing: '0.08em', fontWeight: 500, flex: 'none', marginTop: 1 }}>P/ VOCÊ</span>
                <span style={{ fontSize: 13.5, color: 'var(--ink)', fontWeight: 500, lineHeight: 1.45 }}>{b.gain}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Numbers, Differentials });
