/* ---- Seção 10 — Rodapé ---- */
function Footer({ onNav }) {
  const servicos = [
    'Projeto Estrutural em Concreto Armado',
    'Projeto Estrutural em Parede de Concreto',
    'Projeto de Fundações',
    'Alvenaria Estrutural',
    'Análise Técnica de Projeto',
  ];
  return (
    <footer style={{ background: 'var(--graphite-900)', color: 'var(--on-dark-muted)', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-bg grid-bg--dark" style={{ opacity: 0.4 }} />
      <div className="container" style={{ position: 'relative', padding: '72px 28px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: 40 }} className="footer-grid">
          {/* Empresa */}
          <div>
            <img src={(window.__resources && window.__resources.logoWhite) || "../assets/betabim-logo-white.png"} alt="Betabim Engenharia" style={{ height: 36, marginBottom: 22 }} />
            <div className="mono" style={{ fontSize: 12, color: 'var(--on-dark-faint)', letterSpacing: '0.04em', marginBottom: 12, textTransform: 'uppercase' }}>
              Betabim Engenharia e Consultoria Técnica Ltda
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7 }}>
              CNPJ 46.303.629/0001-01<br />
              Quadra 105, Lote 9 e 10 – Norte<br />
              Águas Claras, Brasília – DF<br />
              CEP 71.915-250
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 style={{ fontFamily: 'Montserrat', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', marginBottom: 18 }}>Serviços</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {servicos.map((s) => (
                <a key={s} href="#" onClick={(e) => { e.preventDefault(); onNav('Contato'); }}
                   className="foot-link" style={{ fontSize: 14, color: 'var(--on-dark-muted)' }}>{s}</a>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 style={{ fontFamily: 'Montserrat', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', marginBottom: 18 }}>Contato</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              <FootContact icon="message-circle" text="(61) 99142-3118" sub="WhatsApp" />
              <FootContact icon="mail" text="engcivilorlandojr@gmail.com" sub="E-mail" />
              <FootContact icon="instagram" text="@betabimengenharia" sub="Instagram" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 56, padding: '26px 0', borderTop: '1px solid var(--border-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <p style={{ fontSize: 13, color: 'var(--on-dark-faint)' }}>
            © BETABIM Engenharia e Consultoria Técnica Ltda
          </p>
          <p style={{ fontSize: 13, color: 'var(--on-dark-muted)', fontStyle: 'italic' }}>
            Engenharia que respeita o cronograma da sua obra.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FootContact({ icon, text, sub }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
      <span style={{ color: 'var(--blue-bright)', flex: 'none' }}><Icon name={icon} size={17} stroke={2} /></span>
      <div>
        <div style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>{text}</div>
        <div className="mono" style={{ fontSize: 10.5, color: 'var(--on-dark-faint)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{sub}</div>
      </div>
    </div>
  );
}

window.Footer = Footer;
