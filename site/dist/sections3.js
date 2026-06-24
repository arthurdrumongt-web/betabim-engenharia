/* ---- Seção 6 — Quem assina o seu projeto ---- */
function Engineer() {
  const degrees = ['Projeto, Desempenho e Construção de Estruturas e Fundações (IPOG)', 'Estruturas, Fundações e Concreto Armado com ênfase em BIM (EBPOS)', 'Engenharia Geotécnica (EBPOS)', 'Fundações e Contenções (IDD Educação Avançada — em andamento)'];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container eng-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '0.82fr 1.18fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "eng-photo",
    style: {
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border)',
      overflow: 'hidden',
      background: '#0e1620',
      boxShadow: '0 18px 40px rgba(27,23,27,0.12)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.orlandoPhoto || '../assets/orlando.png',
    alt: "Orlando da Fonseca Bezerra Junior \u2014 Engenheiro Civil Geot\xE9cnico",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center top',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      background: 'var(--graphite)',
      color: '#fff',
      borderRadius: 'var(--radius)',
      padding: '22px 24px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 900,
      fontSize: 42,
      color: 'var(--blue)',
      lineHeight: 0.6,
      display: 'block'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: 16,
      lineHeight: 1.5,
      color: '#fff',
      fontWeight: 500
    }
  }, "Projeto estrutural \xE9 compromisso. N\xE3o tem meio-termo entre estar correto e n\xE3o estar."))), /*#__PURE__*/React.createElement(Reveal, {
    line: true
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Quem assina o seu projeto"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(26px, 3vw, 38px)',
      fontWeight: 800,
      marginTop: 18
    }
  }, "Orlando da Fonseca Bezerra Junior"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: 17,
      color: 'var(--blue-deep)',
      fontWeight: 600,
      fontFamily: 'Montserrat'
    }
  }, "Engenheiro Civil Geot\xE9cnico"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 16,
      color: 'var(--text-body)',
      lineHeight: 1.65
    }
  }, "Formado em Engenharia Civil pelo Centro Universit\xE1rio do Distrito Federal (UDF). Desde ent\xE3o, dedicou-se \xE0 especializa\xE7\xE3o em projeto estrutural, funda\xE7\xF5es e geotecnia com quatro p\xF3s-gradua\xE7\xF5es:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 22
    }
  }, degrees.map((d, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i % 4 + 1,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 26,
      height: 26,
      borderRadius: 3,
      background: 'rgba(93,143,205,0.12)',
      color: 'var(--blue-deep)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'IBM Plex Mono',
      fontSize: 12,
      fontWeight: 500,
      marginTop: 1
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--ink)',
      fontWeight: 500,
      lineHeight: 1.4
    }
  }, d)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 16,
      color: 'var(--text-body)',
      lineHeight: 1.65
    }
  }, "Domina os principais softwares de c\xE1lculo do mercado (", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "TQS, EBERICK, SAP2000"), ") e mant\xE9m forma\xE7\xE3o atualizada em BIM, alvenaria estrutural, concreto armado e parede de concreto moldado in loco. J\xE1 assinou ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "mais de 35 projetos estruturais"), " para edif\xEDcios residenciais em diversos estados do Brasil."))));
}

/* ---- Seção 7 — Por que a Betabim ---- */
function WhyBetabim() {
  const reasons = [{
    icon: 'crosshair',
    title: 'Especialização técnica focada',
    body: 'Projetos estruturais, fundações, contenções e geotecnia — sem dispersão em serviços que não dominamos.'
  }, {
    icon: 'book-open',
    title: 'Atualização técnica permanente',
    body: 'Formação continuada em BIM, parede de concreto, concreto protendido e geotecnia. Estudo constante das normas mais recentes.'
  }, {
    icon: 'map',
    title: 'Atuação nacional',
    body: 'Projetos entregues em diferentes estados brasileiros, de construções verticais econômicas a empreendimentos de médio e alto padrão.'
  }, {
    icon: 'calendar-clock',
    title: 'Compromisso com o cronograma',
    body: 'Prazo é compromisso, não meta. Cada projeto é tratado com a seriedade que o cronograma da sua obra exige.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "s-head",
    line: true
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Por que a BETABIM"), /*#__PURE__*/React.createElement("h2", null, "Quatro motivos pelos quais ", /*#__PURE__*/React.createElement("span", {
    className: "hl"
  }, "construtoras nos escolhem"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 22,
      marginTop: 52
    },
    className: "why-grid"
  }, reasons.map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i % 2 + 1,
    style: {
      display: 'flex',
      gap: 20,
      padding: '28px 26px',
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)',
      background: 'var(--white)'
    },
    className: "card-hover"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-xs)',
      background: 'var(--graphite)',
      color: 'var(--blue-bright)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 24,
    stroke: 1.9
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 19,
      fontWeight: 700
    }
  }, r.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 9,
      fontSize: 14.5,
      color: 'var(--text-body)',
      lineHeight: 1.55
    }
  }, r.body)))))));
}
Object.assign(window, {
  Engineer,
  WhyBetabim
});