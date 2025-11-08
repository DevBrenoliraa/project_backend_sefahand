# 📘 Documentação de Rotas da API

Todas as rotas têm como base `http://localhost:3000/api`.

---

## 🧤 EPIs

| Método | Rota                  | Descrição                        | Middleware         |
|--------|-----------------------|----------------------------------|--------------------|
| GET    | /api/epis             | Lista todos os EPIs              | verificarToken     |
| POST   | /api/epis/cadastro    | Cadastra um novo EPI             | verificarToken     |

---

## 👷 Funcionários (via rota de EPIs)

| Método | Rota                  | Descrição                        | Middleware         |
|--------|-----------------------|----------------------------------|--------------------|
| GET    | /api/epis             | Lista todos os funcionários      | verificarToken     |
| POST   | /api/epis/cadastro    | Cadastra um novo funcionário     | verificarToken     |

> ⚠️ Observação: As rotas de funcionários estão misturadas com `/epis`. Pode ser interessante separar em `/funcionarios` para maior clareza.

---

## 👤 Usuários

| Método | Rota                     | Descrição                        | Middleware         |
|--------|--------------------------|----------------------------------|--------------------|
| GET    | /api/usuarios            | Lista todos os usuários          | verificarToken     |
| POST   | /api/usuarios/cadastro   | Cadastra um novo usuário         | —                  |
| POST   | /api/usuarios/login      | Autentica o usuário              | —                  |
2