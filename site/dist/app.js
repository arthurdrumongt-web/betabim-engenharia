function App() {
  const refs = {
    'Diferenciais': React.useRef(),
    'Edifícios': React.useRef(),
    'Parede de Concreto': React.useRef(),
    'Engenheiro': React.useRef(),
    'Contato': React.useRef()
  };
  const onNav = label => {
    const r = refs[label];
    if (r && r.current) {
      const top = r.current.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Numbers, null), /*#__PURE__*/React.createElement("div", {
    ref: refs['Diferenciais']
  }, /*#__PURE__*/React.createElement(Differentials, null)), /*#__PURE__*/React.createElement("div", {
    ref: refs['Edifícios']
  }, /*#__PURE__*/React.createElement(Buildings, null)), /*#__PURE__*/React.createElement("div", {
    ref: refs['Parede de Concreto']
  }, /*#__PURE__*/React.createElement(WallSystem, null)), /*#__PURE__*/React.createElement("div", {
    ref: refs['Engenheiro']
  }, /*#__PURE__*/React.createElement(Engineer, null)), /*#__PURE__*/React.createElement(WhyBetabim, null), /*#__PURE__*/React.createElement(Offer, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    ref: refs['Contato']
  }, /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));