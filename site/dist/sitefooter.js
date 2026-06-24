/* ---- Seção 10 — Rodapé ---- */
function Footer({
  onNav
}) {
  const servicos = ['Projeto Estrutural em Concreto Armado', 'Projeto Estrutural em Parede de Concreto', 'Projeto de Fundações', 'Alvenaria Estrutural', 'Análise Técnica de Projeto'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--graphite-900)',
      color: 'var(--on-dark-muted)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-bg grid-bg--dark",
    style: {
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      padding: '72px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1fr',
      gap: 40
    },
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoWhite || "../assets/betabim-logo-white.png",
    alt: "Betabim Engenharia",
    style: {
      height: 36,
      marginBottom: 22
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 12,
      color: 'var(--on-dark-faint)',
      letterSpacing: '0.04em',
      marginBottom: 12,
      textTransform: 'uppercase'
    }
  }, "Betabim Engenharia e Consultoria T\xE9cnica Ltda"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.7
    }
  }, "CNPJ 46.303.629/0001-01", /*#__PURE__*/React.createElement("br", null), "Quadra 105, Lote 9 e 10 \u2013 Norte", /*#__PURE__*/React.createElement("br", null), "\xC1guas Claras, Bras\xEDlia \u2013 DF", /*#__PURE__*/React.createElement("br", null), "CEP 71.915-250")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'Montserrat',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#fff',
      marginBottom: 18
    }
  }, "Servi\xE7os"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, servicos.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('Contato');
    },
    className: "foot-link",
    style: {
      fontSize: 14,
      color: 'var(--on-dark-muted)'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'Montserrat',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#fff',
      marginBottom: 18
    }
  }, "Contato"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement(FootContact, {
    icon: "message-circle",
    text: "(61) 99142-3118",
    sub: "WhatsApp"
  }), /*#__PURE__*/React.createElement(FootContact, {
    icon: "mail",
    text: "engcivilorlandojr@gmail.com",
    sub: "E-mail"
  }), /*#__PURE__*/React.createElement(FootContact, {
    icon: "instagram",
    text: "@betabimengenharia",
    sub: "Instagram"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      padding: '26px 0',
      borderTop: '1px solid var(--border-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--on-dark-faint)'
    }
  }, "\xA9 BETABIM Engenharia e Consultoria T\xE9cnica Ltda"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--on-dark-muted)',
      fontStyle: 'italic'
    }
  }, "Engenharia que respeita o cronograma da sua obra."))));
}
function FootContact({
  icon,
  text,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-bright)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17,
    stroke: 2
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 500
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10.5,
      color: 'var(--on-dark-faint)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, sub)));
}
window.Footer = Footer;