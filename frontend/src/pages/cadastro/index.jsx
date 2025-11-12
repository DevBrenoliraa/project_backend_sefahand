import './styles.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ importar useNavigate
import logo_safehand from '../../assets/svg/logo_safehand.svg';

const PageCadastro = () => {
  const [nome_completo, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [senha, setSenha] = useState('');
  const [verifica_senha, setVerificaSenha] = useState('');

  const navigate = useNavigate(); // ✅ cria o redirecionador

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = { nome_completo, email, nickname, senha, verifica_senha };

    try {
      const res = await fetch('http://localhost:3000/api/usuarios/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario),
      });

      const data = await res.json();

      if (data.success) {
        alert(`Cadastrado com sucesso: ${data.message}`);

        setNomeCompleto('');
        setEmail('');
        setNickname('');
        setSenha('');
        setVerificaSenha('');

        setTimeout(() => {
          navigate('/usuario/login');
        }, 1000);
      } else {
        alert(`Erro ao cadastrar: ${data.message}`);
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="cadastro_container">
      <img src={logo_safehand} alt="Logo SafeHand" className="logo_cadastro" />

      <form onSubmit={handleSubmit} className="formulario_cadastro">
        <input
          type="text"
          placeholder="Nome completo"
          value={nome_completo}
          onChange={(e) => setNomeCompleto(e.target.value)}
          required
          className="input_cadastro"
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input_cadastro"
        />

        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
          className="input_cadastro"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          className="input_cadastro"
          minLength={6}
          max={12}
        />

        <input
          type="password"
          placeholder="Confirmar senha"
          value={verifica_senha}
          onChange={(e) => setVerificaSenha(e.target.value)}
          required
          className="input_cadastro"
          minLength={6}
          max={12}
        />

        <button type="submit" className="btn_cadastro">Cadastrar</button>
      </form>

      <Link className="link_login" to="/usuario/login">
        Já tem uma conta? Fazer login
      </Link>
    </div>

  );
};

export default PageCadastro;
