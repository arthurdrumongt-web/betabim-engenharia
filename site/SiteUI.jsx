/* ============================================================
   Shared UI primitives + animation helpers
   Exposed on window for the other section files.
   ============================================================ */
const { useState, useEffect, useRef, useCallback } = React;

/* ---- Reveal-on-scroll wrapper ---- */
function Reveal({ children, as = 'div', delay = 0, line = false, className = '', style, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setShown(true); io.unobserve(el); }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  const cls = [
    'reveal',
    delay ? 'reveal-d' + delay : '',
    line ? 'tline' : '',
    shown ? 'in' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={cls} style={style} {...rest}>
      {children}
    </Tag>
  );
}

/* ---- Animated counter ---- */
function Counter({ to, prefix = '', suffix = '', duration = 1500 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          if (reduce) { setVal(to); return; }
          const t0 = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

/* ---- Icon (lucide) ---- */
function toPascal(name) {
  return name.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}
function Icon({ name, size = 22, stroke = 2, className = '', style }) {
  const ref = useRef(null);
  useEffect(() => {
    let cancelled = false;
    const paint = () => {
      if (cancelled || !ref.current) return;
      const L = window.lucide;
      if (!L || !(L.icons || L.createElement)) { setTimeout(paint, 60); return; }
      const key = toPascal(name);
      const data = (L.icons && (L.icons[key] || L.icons[name])) || L[key];
      if (!data) return;
      try {
        ref.current.innerHTML = '';
        const svg = L.createElement(data);
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);
        svg.setAttribute('stroke-width', stroke);
        ref.current.appendChild(svg);
      } catch (err) { /* icon unavailable */ }
    };
    paint();
    return () => { cancelled = true; };
  }, [name, size, stroke]);
  return <span ref={ref} className={className} style={{ display: 'inline-flex', ...style }} aria-hidden="true" />;
}

/* ---- Eyebrow ---- */
function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

/* ---- Button ---- */
function Button({ variant = 'primary', children, arrow = false, onClick, href, className = '' }) {
  const cls = `btn btn-${variant} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <span className="arrow">→</span>}
    </>
  );
  if (href) return <a href={href} className={cls} onClick={onClick}>{inner}</a>;
  return <button className={cls} onClick={onClick}>{inner}</button>;
}

/* ---- Check item (thin circle + check) ---- */
function CheckItem({ children, dark = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{
        flex: 'none', width: 20, height: 20, borderRadius: 999,
        border: `1.5px solid ${dark ? 'var(--blue-bright)' : 'var(--blue)'}`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: dark ? 'var(--blue-bright)' : 'var(--blue)',
      }}>
        <Icon name="check" size={12} stroke={3} />
      </span>
      <span style={{ fontSize: 14.5, color: dark ? 'var(--on-dark-muted)' : 'var(--text-body)' }}>{children}</span>
    </div>
  );
}

/* ---- Technical placeholder image ---- */
function Placeholder({ label, style, className = '' }) {
  return (
    <div className={`ph ${className}`} style={style}>
      <span className="ph-label">{label}</span>
    </div>
  );
}

Object.assign(window, { Reveal, Counter, Icon, Eyebrow, Button, CheckItem, Placeholder });
