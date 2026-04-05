# MobileTicketsIonic 🎉

Aplicativo para controle de **senhas em uma festa**, desenvolvido em Ionic + Angular com Capacitor.  
O sistema simula a organização de filas para entrada, retirada de brindes e atendimento prioritário, garantindo que todos os convidados sejam atendidos de forma organizada e divertida.

---

## 🍷 Funcionalidades

- Emissão de senhas:
  - **SP**: Senha Prioritária (VIPs)
  - **SG**: Senha Geral (convidados comuns)
  - **SE**: Senha para retirada de brindes/extras
- Atendimento com regras de prioridade (VIPs sempre primeiro).
- Painel de guichês para chamada de convidados.
- Relatórios simples de senhas emitidas e atendidas.

---

## 💻 Tecnologias

- **Ionic Framework** (template: tabs)
- **Angular**
- **Capacitor**
- **TypeScript**

---

## 📂 Estrutura

- `tab1`: Emissão de senhas (entrada da festa)
- `tab2`: Atendimento (controle dos guichês)
- `tab3`: Relatórios (quantidade de convidados atendidos e brindes entregues)
- `services/ticket.service.ts`: Lógica de geração e atendimento de senhas

---

## 🖼️ Telas do Projeto

### Tela 1 – Emissão de Senhas
![Tela de emissão de senhas](doc/imagens/login.png)

### Tela 2 – Atendimento
![Tela de atendimento](doc/imagens/ticket.png)

### Tela 3 – Relatórios
![Tela de relatórios](doc/imagens/contador.png)

### Tela 4 – Cronograma
![Tela de relatórios](doc/imagens/cronograma.png)

