/* ---- Hero ---- */
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "section--dark",
    style: {
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'calc(var(--header-h) + 84px)',
      paddingBottom: 96,
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-bg grid-bg--dark",
    style: {
      animation: 'gridDrift 24s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '46%',
      height: '100%',
      background: 'linear-gradient(155deg, rgba(93,143,205,0.10), transparent 62%)',
      clipPath: 'polygon(26% 0, 100% 0, 100% 100%, 0% 100%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 2,
      background: 'linear-gradient(90deg, transparent, rgba(93,143,205,0.5), transparent)',
      animation: 'scanline 7s linear infinite'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "container hero-grid",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '7px 14px',
      border: '1px solid rgba(93,143,205,0.35)',
      borderRadius: 2,
      background: 'rgba(93,143,205,0.06)',
      animation: 'fadeUp 700ms var(--ease) both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 6,
      height: 6,
      background: 'var(--blue-bright)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: '#BFD3EE',
      fontWeight: 600
    }
  }, "Betabim Engenharia e Consultoria Ltda")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(40px, 4.6vw, 62px)',
      fontWeight: 900,
      marginTop: 22,
      lineHeight: 1.06,
      letterSpacing: '-0.015em',
      maxWidth: 760,
      animation: 'fadeUp 700ms var(--ease) 80ms both'
    }
  }, "Projetos Estruturais em ", /*#__PURE__*/React.createElement("span", {
    className: "hl"
  }, "Parede de Concreto"), " e ", /*#__PURE__*/React.createElement("span", {
    className: "hl"
  }, "Concreto Armado")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 19,
      color: 'var(--on-dark-muted)',
      maxWidth: 580,
      lineHeight: 1.55,
      fontWeight: 400,
      animation: 'fadeUp 700ms var(--ease) 160ms both'
    }
  }, "Mais de ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff',
      fontWeight: 600
    }
  }, "35 edif\xEDcios"), " calculados em todo o Brasil. Estruturas projetadas para entregar economia, seguran\xE7a e durabilidade, reduzindo desperd\xEDcios, acelerando a execu\xE7\xE3o em campo e trazendo previsibilidade ao cronograma da sua obra."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34,
      flexWrap: 'wrap',
      animation: 'fadeUp 700ms var(--ease) 240ms both'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    onClick: () => onNav('Contato')
  }, "Solicitar an\xE1lise t\xE9cnica em 48h")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px 28px',
      marginTop: 32,
      maxWidth: 620,
      animation: 'fadeUp 700ms var(--ease) 320ms both'
    }
  }, ['35+ edifícios projetados', 'Atendimento em todo o Brasil', 'Especialistas em parede de concreto', 'Engenharia estrutural com foco em execução'].map(label => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--blue-bright)',
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: '#E6E8EC',
      fontWeight: 500,
      letterSpacing: '0.005em'
    }
  }, label))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-visual",
    style: {
      animation: 'fadeUp 800ms var(--ease) 280ms both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-dark-2)',
      boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
      overflow: 'hidden',
      background: '#0A1424'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.heroBimRender || "../assets/hero-bim-render.png",
    alt: "Render BIM de estrutura em parede de concreto e concreto armado",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(10,20,36,0.55) 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -22,
      bottom: 40,
      background: 'var(--graphite-800)',
      border: '1px solid var(--border-dark-2)',
      borderRadius: 'var(--radius)',
      padding: '14px 18px',
      boxShadow: '0 18px 40px rgba(0,0,0,0.5)',
      animation: 'floatY 6s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.1em',
      color: 'var(--blue-bright)',
      textTransform: 'uppercase'
    }
  }, "An\xE1lise t\xE9cnica"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 800,
      fontSize: 26,
      color: '#fff',
      marginTop: 2
    }
  }, "48", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--on-dark-muted)'
    }
  }, "h")))))));
}
window.Hero = Hero;