import './styles.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import logo_safehand from '../../assets/svg/logo_safehand.svg';

const PageLogin = () => {

    const [nickname, setNickname] = useState('');
    const [senha, setSenha] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3000/api/usuarios/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nickname, senha })
            });

            const data = await res.json();

            if (res.ok && data.token) {
                // Salva o token no localStorage
                localStorage.setItem('token', data.token);
                alert('Login realizado com sucesso!');

                setNickname('')
                setSenha('')

                setTimeout(() => {
                    navigate('/homepage');
                }, 1000);

            } else {
                alert('Erro: ' + (data.message || 'Falha no login.'));
            }

        } catch (erro) {
            console.error('Erro ao logar:', erro);
            alert('Erro de conexão com o servidor.');
        }
    };
    return (
        <div className="login_container">
            <img src={logo_safehand} alt="Logo SafeHand" className="logo_login" />

            <form onSubmit={handleLogin} className="formulario_login">
                <input
                    type="text"
                    placeholder="Nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    required
                    className="input_login"
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    className="input_login"
                />

                <button type="submit" className="btn_login"><Link to=''>Entrar</Link></button>
            </form>

            <Link className="link_criar_conta" to="/usuario/cadastro">
                Não tem uma conta? Cadastre-se
            </Link>
        </div>

    )
}

export default PageLogin