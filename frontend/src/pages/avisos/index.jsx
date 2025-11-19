import './style.css';
import React, { useState, useEffect } from 'react';
import atencao from '../../assets/svg/atencao.svg'
import caminhao from '../../assets/svg/caminhao.svg'
import verificado from '../../assets/svg/verificado.svg'
import info from '../../assets/svg/info.svg'
import ComponentFooter from '../../components/footer/index'


const AvisoItem = ({ tipo, titulo, mensagem, hora, lido }) => {
    let icon, iconColorClass;

    switch (tipo) {
        case 'envio':
            icon = caminhao;
            iconColorClass = 'iconBlue';
            break;
        case 'confirmacao':
            icon = info;
            iconColorClass = 'iconYellow';
            break;
        case 'entrega':
            icon = verificado;
            iconColorClass = 'iconGreen';
            break;
        case 'alerta':
            icon = atencao;
            iconColorClass = 'iconRed';
            break;
        default:
            icon = '💬';
            iconColorClass = '';
    }

    return (

        <div className={`avisoItem ${lido ? 'avisoLido' : ''}`}>
            <div className={`avisoIcon ${iconColorClass}`}>
                <img src={icon} alt={tipo} className={`avisoIcon ${iconColorClass}`} />
            </div>
            <div className="avisoContent">
                <div className="avisoHeader">
                    <span className="avisoTitulo">{titulo}</span>
                    <span className="avisoHora">{hora}</span>
                </div>
                <p className="avisoMensagem">{mensagem}</p>
            </div>
        </div>
    );
};

const Avisos = ({ avisosData = [] }) => {

    const [marcarComoLido, setMarcarComoLido] = useState(false);

    const avisosAgrupados = avisosData.reduce((acc, aviso) => {
        const grupo = aviso.grupo || "Outros";
        if (!acc[grupo]) acc[grupo] = [];
        acc[grupo].push(aviso);
        return acc;
    }, {});

    return (
        <div className="avisosContainer">

            <div className="header">
                <h1 className="title">Central de Avisos</h1>
            </div>

            <div className="readStatusToggle">
                <span>Marcar como lido</span>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={marcarComoLido}
                        onChange={() => setMarcarComoLido(!marcarComoLido)}
                    />
                    <span className="slider round"></span>
                </label>
            </div>

            <div className="avisoListWrapper">
                {Object.entries(avisosAgrupados).map(([grupo, avisosDoGrupo]) => (
                    <div key={grupo} className="avisoGroup">
                        <h2 className="groupTitle">{grupo}</h2>

                        {avisosDoGrupo.map((aviso, index) => (
                            <AvisoItem
                                key={index}
                                tipo={aviso.tipo}
                                titulo={aviso.titulo}
                                mensagem={aviso.mensagem}
                                hora={aviso.hora}
                                lido={marcarComoLido || aviso.lidoInicialmente}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <div className="bottomNavbar">
                <ComponentFooter />
            </div>
        </div>
    );
};




const avisosMock = [
  {
    tipo: 'envio',
    titulo: 'Pedido #1234 enviado',
    mensagem: 'Seu pedido foi enviado.',
    hora: '10:30',
    grupo: 'Hoje',
    lidoInicialmente: false
  },
  {
    tipo: 'confirmacao',
    titulo: 'Confirmação de concluída',
    mensagem: 'Confirme o recebimento do seu último pedido',
    hora: '09:15',
    grupo: 'Hoje',
    lidoInicialmente: false
  },
  {
    tipo: 'entrega',
    titulo: 'Entrega #1234 realizada',
    mensagem: 'Seu pedido foi entregue.',
    hora: '16:20',
    grupo: 'Semana Passada',
    lidoInicialmente: false
  },
  {
    tipo: 'alerta',
    titulo: 'Problema na entrega',
    mensagem: 'Não foi possível entregar o pedido #5678. Tente reagendar.',
    hora: 'Ontem, 17:45',
    grupo: 'Semana Passada',
    lidoInicialmente: false
  }
  ,
  {
    tipo: 'alerta',
    titulo: 'Problema na entrega',
    mensagem: 'Não foi possível entregar o pedido #5678. Tente reagendar.',
    hora: 'Ontem, 17:45',
    grupo: 'Semana Passada',
    lidoInicialmente: false
  }
  ,
  {
    tipo: 'alerta',
    titulo: 'Problema na entrega',
    mensagem: 'Não foi possível entregar o pedido #5678. Tente reagendar.',
    hora: 'Ontem, 17:45',
    grupo: 'Semana Passada',
    lidoInicialmente: false
  }
];
// Renderiza o componente usando o mock
export default function TesteAvisos() {
  return <Avisos avisosData={avisosMock} />;
}