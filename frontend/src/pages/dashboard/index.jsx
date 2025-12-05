import React, { useEffect, useState } from "react";
import './styles.css';
import ComponentHeader from "../../components/header/index";
import ComponentFooter from "../../components/footer";
import EpiCarousel from "../../components/carousel";

import iconAviso from '../../assets/svg/iconAviso.svg'
import iconUsers from '../../assets/svg/iconUsers.svg'
import iconEpis from '../../assets/svg/iconEPIcard.svg'

const Dashboard = () => {

    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {
        const fetchFuncionarios = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/funcionarios");
                const data = await response.json();

                if (data.success && Array.isArray(data.funcionarios)) {
                    setFuncionarios(data.funcionarios);
                }

            } catch (error) {
                console.log("Erro ao buscar funcionários:", error);
            }
        };

        fetchFuncionarios();
    }, []);

    return (
        <>
            <ComponentHeader />
            <div className='home'>
                
                <div className="bg-aviso">
                    <div className='title-aviso'>
                        <img src={iconAviso} />
                        <p>AVISO!</p>
                    </div>
                    <div className="title-text">
                        <p>
                            Os EPIs solicitados pelo setor de Recursos Humanos devem ser entregues hoje. 
                            Verifique o estoque e confirme a retirada.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="card-funcionarios">
                        <p>Funcionários Cadastrados</p>
                        <img src={iconUsers} />

                        <h1>
                            {
                                funcionarios.length > 0
                                ? funcionarios.map((f, index) => index + 1)[funcionarios.length - 1]
                                : 0
                            }
                        </h1>
                    </div>

                    <div className="card-epis">
                        <p>EPIs Cadastrados</p>
                        <img src={iconEpis} />
                        <h1>26</h1>
                    </div>
                </div>

                <EpiCarousel />
            </div>
            <ComponentFooter />
        </>
    );
};

export default Dashboard;
