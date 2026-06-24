/* ---- Seção 6 — Quem assina o seu projeto ---- */
function Engineer() {
  const degrees = [
    'Projeto, Desempenho e Construção de Estruturas e Fundações (IPOG)',
    'Estruturas, Fundações e Concreto Armado com ênfase em BIM (EBPOS)',
    'Engenharia Geotécnica (EBPOS)',
    'Fundações e Contenções (IDD Educação Avançada — em andamento)',
  ];
  return (
    <section className="section section--alt">
      <div className="container eng-grid" style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 56, alignItems: 'start' }}>
        <Reveal className="eng-photo" style={{ position: 'sticky', top: 100 }}>
          <div style={{
            position: 'relative', aspectRatio: '4 / 5',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            overflow: 'hidden', background: '#0e1620',
            boxShadow: '0 18px 40px rgba(27,23,27,0.12)',
          }}>
            <img
              src={(window.__resources && window.__resources.orlandoPhoto) || '../assets/orlando.png'}
              alt="Orlando da Fonseca Bezerra Junior — Engenheiro Civil Geotécnico"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>
          <div style={{
            marginTop: 18, background: 'var(--graphite)', color: '#fff', borderRadius: 'var(--radius)',
            padding: '22px 24px', position: 'relative',
          }}>
            <span style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 42, color: 'var(--blue)', lineHeight: 0.6, display: 'block' }}>“</span>
            <p style={{ marginTop: 8, fontSize: 16, lineHeight: 1.5, color: '#fff', fontWeight: 500 }}>
              Projeto estrutural é compromisso. Não tem meio-termo entre estar correto e não estar.
            </p>
          </div>
        </Reveal>

        <Reveal line>
          <Eyebrow>Quem assina o seu projeto</Eyebrow>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 800, marginTop: 18 }}>
            Orlando da Fonseca Bezerra Junior
          </h2>
          <p style={{ marginTop: 8, fontSize: 17, color: 'var(--blue-deep)', fontWeight: 600, fontFamily: 'Montserrat' }}>
            Engenheiro Civil Geotécnico
          </p>
          <p style={{ marginTop: 20, fontSize: 16, color: 'var(--text-body)', lineHeight: 1.65 }}>
            Formado em Engenharia Civil pelo Centro Universitário do Distrito Federal (UDF). Desde então, dedicou-se à especialização em projeto estrutural, fundações e geotecnia com quatro pós-graduações:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 22 }}>
            {degrees.map((d, i) => (
              <Reveal key={i} delay={(i % 4) + 1} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{
                  flex: 'none', width: 26, height: 26, borderRadius: 3, background: 'rgba(93,143,205,0.12)',
                  color: 'var(--blue-deep)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'IBM Plex Mono', fontSize: 12, fontWeight: 500, marginTop: 1,
                }}>{i + 1}</span>
                <span style={{ fontSize: 15, color: 'var(--ink)', fontWeight: 500, lineHeight: 1.4 }}>{d}</span>
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: 24, fontSize: 16, color: 'var(--text-body)', lineHeight: 1.65 }}>
            Domina os principais softwares de cálculo do mercado (<strong style={{ color: 'var(--ink)' }}>TQS, EBERICK, SAP2000</strong>) e mantém formação atualizada em BIM, alvenaria estrutural, concreto armado e parede de concreto moldado in loco. Já assinou <strong style={{ color: 'var(--ink)' }}>mais de 35 projetos estruturais</strong> para edifícios residenciais em diversos estados do Brasil.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---- Seção 7 — Por que a Betabim ---- */
function WhyBetabim() {
  const reasons = [
    { icon: 'crosshair', title: 'Especialização técnica focada', body: 'Projetos estruturais, fundações, contenções e geotecnia — sem dispersão em serviços que não dominamos.' },
    { icon: 'book-open', title: 'Atualização técnica permanente', body: 'Formação continuada em BIM, parede de concreto, concreto protendido e geotecnia. Estudo constante das normas mais recentes.' },
    { icon: 'map', title: 'Atuação nacional', body: 'Projetos entregues em diferentes estados brasileiros, de construções verticais econômicas a empreendimentos de médio e alto padrão.' },
    { icon: 'calendar-clock', title: 'Compromisso com o cronograma', body: 'Prazo é compromisso, não meta. Cada projeto é tratado com a seriedade que o cronograma da sua obra exige.' },
  ];
  return (
    <section className="section">
      <div className="container">
        <Reveal className="s-head" line>
          <Eyebrow>Por que a BETABIM</Eyebrow>
          <h2>Quatro motivos pelos quais <span className="hl">construtoras nos escolhem</span></h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22, marginTop: 52 }} className="why-grid">
          {reasons.map((r, i) => (
            <Reveal key={i} delay={(i % 2) + 1} style={{
              display: 'flex', gap: 20, padding: '28px 26px', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', background: 'var(--white)',
            }} className="card-hover">
              <span style={{
                flex: 'none', width: 52, height: 52, borderRadius: 'var(--radius-xs)',
                background: 'var(--graphite)', color: 'var(--blue-bright)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}><Icon name={r.icon} size={24} stroke={1.9} /></span>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700 }}>{r.title}</h3>
                <p style={{ marginTop: 9, fontSize: 14.5, color: 'var(--text-body)', lineHeight: 1.55 }}>{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Engineer, WhyBetabim });
