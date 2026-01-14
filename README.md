# 🧠 Teste de Personalidades – IASD Rafard

Aplicação web interativa para identificação de estilos predominantes de personalidade, baseada em perfis simbólicos representados por animais.  
Desenvolvida para uso educacional, formativo e de autoconhecimento na **Igreja Adventista do Sétimo Dia de Rafard**.

---

## ✨ Objetivo

Este teste tem como finalidade promover **autoconhecimento**, **melhoria no relacionamento interpessoal**, **trabalho em equipe** e **serviço cristão**, respeitando a individualidade de cada pessoa.

O resultado apresenta os **dois perfis predominantes**, destacando características, pontos fortes, oportunidades de melhoria, motivações e valores.

> Não existem respostas certas ou erradas. O valor do teste está na reflexão pessoal.

---

## 🧩 Perfis Avaliados

O teste trabalha com quatro perfis simbólicos:

- 🦅 **Águia (I – Idealista)**  
  Criatividade, visão de futuro, inovação e liberdade.

- 🐱 **Gato (C – Comunicador)**  
  Relacionamentos, harmonia, empatia e trabalho em equipe.

- 🦈 **Tubarão (A – Executor)**  
  Ação, foco em resultados, iniciativa e senso de urgência.

- 🐺 **Lobo (O – Organizador)**  
  Planejamento, consistência, estratégia e atenção aos detalhes.

---

## 🖥️ Sobre a Aplicação

- SPA (Single Page Application)
- Funciona **100% no navegador**
- **Nenhum dado é salvo**
- Totalmente **offline-friendly**
- Interface moderna, limpa e responsiva
- Animações suaves e controladas
- Sem uso de frameworks (Vanilla JS)

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
  - Flexbox
  - Animações CSS
  - Design responsivo
- **JavaScript (Vanilla)**
  - DOM persistente (sem re-render desnecessário)
  - Estado controlado manualmente
  - Lógica de embaralhamento de questões e respostas

---

## 🧠 Decisões Técnicas Importantes

### Por que não usar `innerHTML` para interações?
Para evitar **flicker**, **repaint excessivo** e perda de performance, o DOM da área do quiz é renderizado **uma única vez**.  
As interações acontecem apenas via:
- Atualização de texto
- Adição/remoção de classes
- Atualização de atributos

Essa abordagem garante:
- Estabilidade visual
- Melhor performance
- Experiência próxima de um app nativo

---

## ▶️ Como Executar o Projeto

### Opção 1 – Abrir localmente
1. Baixe ou clone este repositório
2. Abra o arquivo `index.html` no navegador

> ⚠️ Não é necessário servidor, backend ou banco de dados.

### Opção 2 – Usando Live Server (opcional)
- Recomendado apenas para desenvolvimento
- Não é obrigatório

---

### 🔄 Funcionalidades
- ✔️ Etapa inicial explicativa
- ✔️ Barra de progresso
- ✔️ Questões e respostas embaralhadas
- ✔️ Respostas obrigatórias
- ✔️ Botão “Próxima” habilitado apenas após seleção
- ✔️ Reset do teste a qualquer momento
- ✔️ Destaque para os dois perfis predominantes
- ✔️ Interface responsiva (mobile, tablet e desktop)

---

### 🔒 Privacidade
 - Nenhuma informação pessoal é coletada
 - Nenhum dado é salvo
 - Nenhum cookie é utilizado
 - Todo o processamento ocorre localmente no navegador

---

### 📌 Público-alvo
 - Membros da igreja
 - Líderes
 - Jovens
 - Pequenos grupos
 - Atividades de integração, discipulado e desenvolvimento pessoal

---

### 🙏 Contexto Cristão

Este teste é uma ferramenta auxiliar, não um diagnóstico psicológico ou espiritual.
Seu uso deve sempre estar associado a:
 - Diálogo
 - Respeito
 - Empatia
 - Princípios cristãos

## 📁 Estrutura de Pastas

```text
/
├── index.html
├── styles.css
├── app.js
├── assets/
│   ├── aguia.svg
│   ├── gato.svg
│   ├── tubarao.svg
│   └── lobo.svg
└── README.md