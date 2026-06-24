function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ============================================================
   Shared UI primitives + animation helpers
   Exposed on window for the other section files.
   ============================================================ */
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;

/* ---- Reveal-on-scroll wrapper ---- */
function Reveal({
  children,
  as = 'div',
  delay = 0,
  line = false,
  className = '',
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          io.unobserve(el);
        }
      });
    }, {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  const cls = ['reveal', delay ? 'reveal-d' + delay : '', line ? 'tline' : '', shown ? 'in' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: cls,
    style: style
  }, rest), children);
}

/* ---- Animated counter ---- */
function Counter({
  to,
  prefix = '',
  suffix = '',
  duration = 1500
}) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          if (reduce) {
            setVal(to);
            return;
          }
          const t0 = performance.now();
          const tick = now => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, {
      threshold: 0.4
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, prefix, val, suffix);
}

/* ---- Icon (lucide) ---- */
function toPascal(name) {
  return name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}
function Icon({
  name,
  size = 22,
  stroke = 2,
  className = '',
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    let cancelled = false;
    const paint = () => {
      if (cancelled || !ref.current) return;
      const L = window.lucide;
      if (!L || !(L.icons || L.createElement)) {
        setTimeout(paint, 60);
        return;
      }
      const key = toPascal(name);
      const data = L.icons && (L.icons[key] || L.icons[name]) || L[key];
      if (!data) return;
      try {
        ref.current.innerHTML = '';
        const svg = L.createElement(data);
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);
        svg.setAttribute('stroke-width', stroke);
        ref.current.appendChild(svg);
      } catch (err) {/* icon unavailable */}
    };
    paint();
    return () => {
      cancelled = true;
    };
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: className,
    style: {
      display: 'inline-flex',
      ...style
    },
    "aria-hidden": "true"
  });
}

/* ---- Eyebrow ---- */
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, children);
}

/* ---- Button ---- */
function Button({
  variant = 'primary',
  children,
  arrow = false,
  onClick,
  href,
  className = ''
}) {
  const cls = `btn btn-${variant} ${className}`;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192"));
  if (href) return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: cls,
    onClick: onClick
  }, inner);
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    onClick: onClick
  }, inner);
}

/* ---- Check item (thin circle + check) ---- */
function CheckItem({
  children,
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 20,
      height: 20,
      borderRadius: 999,
      border: `1.5px solid ${dark ? 'var(--blue-bright)' : 'var(--blue)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: dark ? 'var(--blue-bright)' : 'var(--blue)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    stroke: 3
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: dark ? 'var(--on-dark-muted)' : 'var(--text-body)'
    }
  }, children));
}

/* ---- Technical placeholder image ---- */
function Placeholder({
  label,
  style,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ph ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "ph-label"
  }, label));
}
Object.assign(window, {
  Reveal,
  Counter,
  Icon,
  Eyebrow,
  Button,
  CheckItem,
  Placeholder
});