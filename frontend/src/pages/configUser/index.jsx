import React, { useEffect, useState } from "react";
import "./styles.css";
import ComponentHeader from "../../components/header";
import ComponentFooter from "../../components/footer";

import perfilIcon from "../../assets/svg/perfil.svg";
import entregaIcon from "../../assets/svg/entrega.svg";
import senhaIcon from "../../assets/svg/senha.svg";
import notificacaoIcon from "../../assets/svg/notificacao.svg";
import sobreIcon from "../../assets/svg/sobre.svg";

const ProfileHeader = () => {
  return (
    <div className="config-profile-header">
      <div className="config-avatar"></div>
      <div>
        <h2 className="config-name">Carlos Silva</h2>
        <p className="config-email">carlos.silva@gmail.com</p>
      </div>
    </div>
  );
};

const Switch = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`config-switch ${active ? "active" : ""}`}
      onClick={() => setActive((prev) => !prev)}
    ></div>
  );
};

const Section = ({ title, items }) => {
  return (
    <section className="config-section">
      <h3 className="config-section-title">{title}</h3>
      {items.map((item, index) => (
        <div
          className="config-item"
          key={index}
          onClick={item.onClick ? item.onClick : undefined}
        >
          <div className="config-item-info">
            <img src={item.icon} className="config-icon" alt="" />
            <span>{item.label}</span>
          </div>
          {item.type === "arrow" && <span className="config-arrow">›</span>}
          {item.type === "switch" && <Switch />}
        </div>
      ))}
    </section>
  );
};

const ConfigUser = () => {
  useEffect(() => {
    document.body.classList.add("config-user-page");
    return () => document.body.classList.remove("config-user-page");
  }, []);

  const contaItems = [
    { icon: perfilIcon, label: "Informações do Perfil", type: "arrow" },
    { icon: entregaIcon, label: "Endereços de Entrega", type: "arrow" },
    { icon: senhaIcon, label: "Alterar Senha", type: "arrow" },
  ];

  const geralItems = [
    { icon: notificacaoIcon, label: "Notificações", type: "switch" },
  ];

  const suporteItems = [
    { icon: sobreIcon, label: "Sobre o App", type: "arrow" },
  ];

  return (
    <>
      <ComponentHeader />
      <main className="config-user">
        <div className="config-wrapper">
          <div className="config-card">
            <ProfileHeader />
            <Section title="Conta" items={contaItems} />
            <Section title="Geral" items={geralItems} />
            <Section title="Suporte" items={suporteItems} />
          </div>
        </div>
      </main>
      <ComponentFooter />
    </>
  );
};

export default ConfigUser;