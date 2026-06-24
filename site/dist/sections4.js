/* ---- Seção 8 — A oferta ---- */
function Offer({
  onNav
}) {
  const items = ['Sistema estrutural mais indicado para o seu caso', 'Viabilidade técnica de parede de concreto (quando aplicável)', 'Indicação preliminar de fundações e contenções', 'Principais pontos de atenção do projeto', 'Próximos passos para o desenvolvimento estrutural'];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--dark",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-bg grid-bg--dark",
    style: {
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--graphite-800)',
      border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-lg)',
      padding: 'clamp(32px, 5vw, 56px)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    },
    className: "offer-grid"
  }, /*#__PURE__*/React.createElement(Reveal, {
    line: true
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "A oferta"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(26px, 3vw, 38px)',
      fontWeight: 800,
      marginTop: 18,
      color: '#fff'
    }
  }, "Antes de fechar qualquer projeto estrutural, vale uma ", /*#__PURE__*/React.createElement("span", {
    className: "hl"
  }, "segunda leitura t\xE9cnica"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 16,
      color: 'var(--on-dark-muted)',
      lineHeight: 1.6
    }
  }, "Voc\xEA nos envia os dados do empreendimento \u2014 tipo, n\xFAmero de pavimentos, cidade e prazo desejado. Em at\xE9 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "48h \xFAteis"), ", devolvemos uma an\xE1lise t\xE9cnica preliminar."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    arrow: true,
    onClick: () => onNav('Contato')
  }, "Solicitar an\xE1lise t\xE9cnica do meu empreendimento"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2,
    style: {
      background: 'var(--graphite-900)',
      border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius)',
      padding: '30px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11.5,
      letterSpacing: '0.1em',
      color: 'var(--blue-bright)',
      textTransform: 'uppercase',
      marginBottom: 20
    }
  }, "Voc\xEA recebe em 48h"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      paddingBottom: i < items.length - 1 ? 16 : 0,
      borderBottom: i < items.length - 1 ? '1px solid var(--border-dark)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      borderRadius: 999,
      border: '1.5px solid var(--blue-bright)',
      color: 'var(--blue-bright)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    stroke: 3
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: '#e7eaef',
      lineHeight: 1.4
    }
  }, it))))))));
}

/* ---- Seção 9 — Formulário de contato ---- */
function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    nome: '',
    email: '',
    tel: '',
    empresa: '',
    tipo: '',
    desc: ''
  });
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  const tipos = ['Concreto Armado', 'Parede de Concreto', 'Fundação', 'Alvenaria Estrutural', 'Avaliação Técnica'];
  const inputStyle = {
    width: '100%',
    padding: '13px 14px',
    fontSize: 15,
    fontFamily: 'Inter, sans-serif',
    border: '1.5px solid var(--border-strong)',
    borderRadius: 'var(--radius-xs)',
    background: '#fff',
    color: 'var(--ink)',
    outline: 'none',
    transition: 'border-color 160ms var(--ease)'
  };
  const labelStyle = {
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--ink)',
    marginBottom: 7,
    display: 'block',
    fontFamily: 'Montserrat'
  };
  const submit = async e => {
    e.preventDefault();
    setError('');
    setSending(true);
    try {
      const payload = {
        Nome: form.nome,
        'E-mail': form.email,
        Telefone: form.tel,
        Empresa: form.empresa,
        'Tipo de projeto': form.tipo,
        Descrição: form.desc,
        _subject: `[BETABIM] Nova solicitação — ${form.nome || 'sem nome'}`,
        _captcha: 'false',
        _template: 'table'
      };
      const resp = await fetch('https://formsubmit.co/ajax/engcivilorlandojr@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await resp.json().catch(() => ({}));
      if (resp.ok && (data.success === 'true' || data.success === true)) {
        setSent(true);
      } else {
        throw new Error(data.message || 'Não foi possível enviar agora. Tente novamente em instantes ou fale conosco pelo WhatsApp.');
      }
    } catch (err) {
      setError(err.message || 'Falha de conexão. Tente novamente em instantes.');
    } finally {
      setSending(false);
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container contact-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    line: true,
    className: "contact-intro",
    style: {
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Formul\xE1rio de contato"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(26px, 3vw, 38px)',
      fontWeight: 800,
      marginTop: 18
    }
  }, "Envie o projeto arquitet\xF4nico. ", /*#__PURE__*/React.createElement("span", {
    className: "hl"
  }, "A gente analisa.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 16,
      color: 'var(--text-muted)'
    }
  }, "Retornamos em at\xE9 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "48h \xFAteis"), " com a primeira leitura t\xE9cnica."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ContactLine, {
    icon: "message-circle",
    label: "WhatsApp",
    value: "(61) 99142-3118"
  }), /*#__PURE__*/React.createElement(ContactLine, {
    icon: "mail",
    label: "E-mail",
    value: "engcivilorlandojr@gmail.com"
  }), /*#__PURE__*/React.createElement(ContactLine, {
    icon: "instagram",
    label: "Instagram",
    value: "@betabimengenharia"
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2,
    className: "card",
    style: {
      padding: 'clamp(26px, 3vw, 40px)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 999,
      background: 'rgba(93,143,205,0.12)',
      color: 'var(--blue-deep)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-check",
    size: 32,
    stroke: 2
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 800
    }
  }, "Solicita\xE7\xE3o enviada"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 15.5,
      color: 'var(--text-muted)',
      maxWidth: 380,
      margin: '12px auto 0'
    }
  }, "Recebemos os dados do seu empreendimento. Retornamos em at\xE9 48h \xFAteis com a leitura t\xE9cnica preliminar."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    style: {
      marginTop: 26
    },
    onClick: () => {
      setSent(false);
      setError('');
      setForm({
        nome: '',
        email: '',
        tel: '',
        empresa: '',
        tipo: '',
        desc: ''
      });
    }
  }, "Enviar outra solicita\xE7\xE3o")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    },
    className: "form-row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome completo"
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    style: inputStyle,
    value: form.nome,
    onChange: set('nome'),
    placeholder: "Seu nome",
    onFocus: e => e.target.style.borderColor = 'var(--blue)',
    onBlur: e => e.target.style.borderColor = 'var(--border-strong)'
  })), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail corporativo"
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    style: inputStyle,
    value: form.email,
    onChange: set('email'),
    placeholder: "voce@construtora.com",
    onFocus: e => e.target.style.borderColor = 'var(--blue)',
    onBlur: e => e.target.style.borderColor = 'var(--border-strong)'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    },
    className: "form-row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Telefone com DDD"
  }, /*#__PURE__*/React.createElement("input", {
    required: true,
    style: inputStyle,
    value: form.tel,
    onChange: set('tel'),
    placeholder: "(00) 00000-0000",
    onFocus: e => e.target.style.borderColor = 'var(--blue)',
    onBlur: e => e.target.style.borderColor = 'var(--border-strong)'
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Empresa"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: form.empresa,
    onChange: set('empresa'),
    placeholder: "Construtora ou incorporadora",
    onFocus: e => e.target.style.borderColor = 'var(--blue)',
    onBlur: e => e.target.style.borderColor = 'var(--border-strong)'
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Tipo de projeto"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    required: true,
    style: {
      ...inputStyle,
      appearance: 'none',
      cursor: 'pointer',
      color: form.tipo ? 'var(--ink)' : 'var(--text-faint)'
    },
    value: form.tipo,
    onChange: set('tipo'),
    onFocus: e => e.target.style.borderColor = 'var(--blue)',
    onBlur: e => e.target.style.borderColor = 'var(--border-strong)'
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Selecione o tipo de projeto"), tipos.map(t => /*#__PURE__*/React.createElement("option", {
    key: t,
    value: t
  }, t))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 18
  })))), /*#__PURE__*/React.createElement(Field, {
    label: "Descri\xE7\xE3o breve do empreendimento"
  }, /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inputStyle,
      resize: 'vertical',
      minHeight: 96,
      lineHeight: 1.5
    },
    value: form.desc,
    onChange: set('desc'),
    placeholder: "Pavimentos, tipologia, localiza\xE7\xE3o e est\xE1gio atual",
    onFocus: e => e.target.style.borderColor = 'var(--blue)',
    onBlur: e => e.target.style.borderColor = 'var(--border-strong)'
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: sending,
    className: "btn btn-primary",
    style: {
      justifyContent: 'center',
      padding: '15px 22px',
      marginTop: 4,
      opacity: sending ? 0.7 : 1,
      cursor: sending ? 'wait' : 'pointer'
    }
  }, sending ? 'Enviando…' : /*#__PURE__*/React.createElement(React.Fragment, null, "Enviar solicita\xE7\xE3o ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192"))), error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: '#b8442e',
      background: 'rgba(184,68,46,0.08)',
      border: '1px solid rgba(184,68,46,0.25)',
      padding: '10px 14px',
      borderRadius: 4,
      lineHeight: 1.5
    }
  }, error), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      textAlign: 'center',
      lineHeight: 1.5
    }
  }, "Seus dados s\xE3o tratados conforme a ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-body)'
    }
  }, "LGPD"), " e usados exclusivamente para o atendimento desta solicita\xE7\xE3o.")))));
}
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink)',
      marginBottom: 7,
      display: 'block',
      fontFamily: 'Montserrat'
    }
  }, label), children);
}
function ContactLine({
  icon,
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-xs)',
      background: '#fff',
      border: '1px solid var(--border)',
      color: 'var(--blue-deep)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    stroke: 2
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.08em',
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      color: 'var(--ink)',
      fontWeight: 600
    }
  }, value)));
}
Object.assign(window, {
  Offer,
  Contact
});