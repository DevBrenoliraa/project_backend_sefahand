import React from "react";
import './styles.css';
import ComponentHeader from "../../components/header/index";
import ComponentFooter from "../../components/footer";
import EpiCarousel from "../../components/carousel";

const Dashboard = () => {
    return (
        <>
        <ComponentHeader/>
        <div className='home'>
            <div className="bg-aviso">
                <div className='title-aviso'>
                    <img src='./src/assets/svg/iconAviso.svg'/>
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
                    <p>
                        Funcionários Cadastrados
                    </p>
                    <img src="./src/assets/svg/iconUsers.svg"/>
                    <h1>
                        23
                    </h1>
                </div>

                <div className="card-epis">
                    <p>
                        EPIs Cadastrados
                    </p>
                    <img src="./src/assets/svg/iconEPIcard.svg"/>
                    <h1>
                        26
                    </h1>
                </div>
            </div>
            <EpiCarousel/>
        </div>
        <ComponentFooter/>
        </>
    )
}

export default Dashboard;