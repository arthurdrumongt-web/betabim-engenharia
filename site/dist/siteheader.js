/* ---- Sticky header ---- */
function Header({
  onNav
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['Diferenciais', 'Edifícios', 'Parede de Concreto', 'Engenheiro', 'Contato'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: 'var(--header-h)',
      display: 'flex',
      alignItems: 'center',
      background: scrolled ? 'rgba(20,17,20,0.92)' : 'rgba(20,17,20,0)',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--border-dark)' : 'transparent'}`,
      transition: 'background 280ms var(--ease), border-color 280ms var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logoWhite || "../assets/betabim-logo-white.png",
    alt: "BETABIM Engenharia",
    style: {
      height: 56,
      display: 'block',
      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.55)) brightness(1.1) contrast(1.08)'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    },
    className: "nav-desktop"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(l);
    },
    className: "nav-link",
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--on-dark-muted)',
      letterSpacing: '0.01em'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('Contato');
    },
    className: "btn btn-primary header-cta",
    style: {
      padding: '11px 18px',
      fontSize: 14
    }
  }, "An\xE1lise em 48h ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("button", {
    className: "nav-toggle",
    onClick: () => setOpen(!open),
    "aria-label": "Menu",
    style: {
      display: 'none',
      background: 'transparent',
      border: '1px solid var(--border-dark-2)',
      borderRadius: 3,
      color: '#fff',
      width: 40,
      height: 40,
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'x' : 'menu',
    size: 20
  })))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--header-h)',
      left: 0,
      right: 0,
      background: 'rgba(20,17,20,0.98)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-dark)',
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setOpen(false);
      onNav(l);
    },
    style: {
      padding: '12px 4px',
      color: 'var(--on-dark-muted)',
      fontSize: 15,
      borderBottom: '1px solid var(--border-dark)'
    }
  }, l)))));
}
window.Header = Header;