import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";
import ComponentHeader from "../../components/header";
import ComponentFooter from "../../components/footer";
import iconHistory from "../../assets/svg/iconEntregas.svg";

const HISTORICO_ENTREGAS = [
  {
    id: 1,
    epi: "Luva PU",
    codigo: "18739",
    lote: "198732",
    status: "Entregue",
  },
  {
    id: 2,
    epi: "Protetor Auricular",
    codigo: "28711",
    lote: "298732",
    status: "Pendente",
  },
];

const DeliveriesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoria, setCategoria] = useState("luvas");
  const formRef = React.useRef(null);

  useEffect(() => {
    document.body.classList.add("deliveries-page");
    return () => document.body.classList.remove("deliveries-page");
  }, []);

  const handleScrollToForm = () => {
    if (!formRef.current) return;
    const top = formRef.current.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const filteredHistory = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return HISTORICO_ENTREGAS;
    return HISTORICO_ENTREGAS.filter((item) =>
      item.epi.toLowerCase().includes(term) ||
      item.codigo.includes(term) ||
      item.lote.includes(term)
    );
  }, [searchTerm]);

  return (
    <>
      <ComponentHeader />
      <main className="deliveries">
        <section className="deliveries-card">
          <div className="deliveries-card__title">
            <h1>Entregas de EPIs</h1>
            <p>Gerencie entregas rapidamente</p>
          </div>

          <button type="button" className="btn btn-dark" onClick={handleScrollToForm}>
            + Entregar EPI
          </button>

          <div className="deliveries-card__search">
            <input
              type="text"
              placeholder="Pesquisar EPI"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button type="button" className="btn btn-blue">
              Pesquisar
            </button>
          </div>
        </section>

        <section className="history-card">
          <h2>Histórico</h2>
          {filteredHistory.map((item) => (
            <article key={item.id} className="delivery-item">
              <div className="delivery-item__info">
                <p>
                  EPI: <strong>{item.epi}</strong>
                </p>
                <p>
                  Cod: <strong>{item.codigo}</strong>
                </p>
                <p>
                  Lote: <strong>{item.lote}</strong>
                </p>
              </div>
              <div className="delivery-item__icon">
                <img src={iconHistory} alt="Detalhes do EPI" />
              </div>
            </article>
          ))}
        </section>

        <section className="delivery-form-card" ref={formRef}>
          <h2>Entregas de EPIs</h2>
          <form className="delivery-form">
            <label>
              Nome do EPI
              <input type="text" placeholder="Nome do EPI" />
            </label>
            <label>
              Descrição
              <input type="text" placeholder="Descrição" />
            </label>
            <label>
              Categoria
              <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="luvas">Luvas</option>
                <option value="mascaras">Máscaras</option>
                <option value="aventais">Aventais</option>
                <option value="outros">Outros</option>
              </select>
            </label>
            <label>
              Código
              <input type="text" placeholder="Código" />
            </label>
            <label>
              Lote
              <input type="text" placeholder="Lote" />
            </label>
            <button type="button" className="btn btn-blue">
              Entregar EPI
            </button>
          </form>
        </section>
      </main>
      <ComponentFooter />
    </>
  );
};

export default DeliveriesPage;
