/* =========================
   UTILIDADES
========================= */
function shuffle(array) {
  return array
    .map(v => ({ v, s: Math.random() }))
    .sort((a, b) => a.s - b.s)
    .map(({ v }) => v);
}

/* =========================
   ESTADO
========================= */
let stage = "intro";
let current = 0;
let selected = null;
let hasAnimated = false;

let scores = { I: 0, C: 0, A: 0, O: 0 };

const app = document.getElementById("app");
document.getElementById("resetBtn").onclick = reset;

/* =========================
   QUESTÕES (ORIGINAIS)
========================= */
const questions = [
  ["Eu sou...", [
    ["I", "Idealista, criativo e visionário"],
    ["C", "Divertido, espiritual e benéfico"],
    ["O", "Confiável, meticuloso e previsível"],
    ["A", "Focado, determinado e persistente"]
  ]],

  ["Eu gosto de...", [
    ["A", "Ser piloto"],
    ["C", "Conversar com os passageiros"],
    ["O", "Planejar a viagem"],
    ["I", "Explorar novas rotas"]
  ]],

  ["Se você quiser se dar bem comigo...", [
    ["I", "Me dê liberdade"],
    ["O", "Me deixe saber sua expectativa"],
    ["A", "Lidere, siga ou saia do caminho"],
    ["C", "Seja amigável e compreensivo"]
  ]],

  ["Para conseguir bons resultados é preciso...", [
    ["I", "Ter incertezas"],
    ["O", "Controlar o essencial"],
    ["C", "Diversão e celebração"],
    ["A", "Planejar e obter recursos"]
  ]],

  ["Eu me divirto quando...", [
    ["A", "Estou me exercitando"],
    ["I", "Tenho novidades"],
    ["C", "Estou com os outros"],
    ["O", "Determino as regras"]
  ]],

  ["Eu penso que...", [
    ["C", "Unidos venceremos, divididos perderemos"],
    ["A", "O ataque é melhor que a defesa"],
    ["I", "É bom ser manso, mas andar com um porrete"],
    ["O", "Um homem prevenido vale por dois"]
  ]],

  ["Minha preocupação é...", [
    ["I", "Gerar a ideia global"],
    ["C", "Fazer com que as pessoas gostem"],
    ["O", "Fazer com que funcione"],
    ["A", "Fazer com que aconteça"]
  ]],

  ["Eu prefiro...", [
    ["I", "Perguntas a respostas"],
    ["O", "Ter todos os detalhes"],
    ["A", "Vantagens a meu favor"],
    ["C", "Que todos tenham a chance de ser ouvidos"]
  ]],

  ["Eu gosto de...", [
    ["A", "Fazer progresso"],
    ["C", "Construir memórias"],
    ["O", "Fazer sentido"],
    ["I", "Tornar as pessoas confortáveis"]
  ]],

  ["Eu gosto de chegar...", [
    ["A", "Na frente"],
    ["C", "Junto"],
    ["O", "Na hora"],
    ["I", "Em outro lugar"]
  ]],

  ["Um ótimo dia para mim é quando...", [
    ["A", "Consigo fazer muitas coisas"],
    ["C", "Me divirto com meus amigos"],
    ["O", "Tudo segue conforme planejado"],
    ["I", "Desfruto de coisas novas e estimulantes"]
  ]],

  ["Eu vejo a morte como...", [
    ["I", "Uma grande aventura misteriosa"],
    ["C", "Oportunidade de rever os falecidos"],
    ["O", "Um modo de receber recompensas"],
    ["A", "Algo que sempre chega cedo"]
  ]],

  ["Minha filosofia de vida é...", [
    ["A", "Há ganhadores e perdedores, e eu acredito ser um ganhador"],
    ["C", "Para eu ganhar, ninguém precisa perder"],
    ["O", "Para ganhar é preciso seguir as regras"],
    ["I", "Para ganhar, é necessário inventar novas regras"]
  ]],

  ["Eu sempre gostei de...", [
    ["I", "Explorar"],
    ["O", "Evitar surpresas"],
    ["A", "Focar na meta"],
    ["C", "Realizar uma bordagem natural"]
  ]],

  ["Eu gosto de mudanças se...", [
    ["A", "Me der uma vantagem competitiva"],
    ["C", "For divertido e puder ser compartilhado"],
    ["I", "Me der mais liberdade e variedade"],
    ["O", "Melhorar ou me der mais controle"]
  ]],

  ["Não existe nada de errado em...", [
    ["A", "Se colocar na frente"],
    ["C", "Colocar os outros na frente"],
    ["I", "Mudar de ideia"],
    ["O", "Ser consistente"]
  ]],

  ["Eu gosto de buscar conselhos de...", [
    ["A", "Pessoas bem-sucedidas"],
    ["C", "Anciãos e conselheiros"],
    ["O", "Autoridades no assunto"],
    ["I", "Lugares, os mais estranhos"]
  ]],

  ["Meu lema é...", [
    ["I", "Fazer o que precisa ser feito"],
    ["O", "Fazer bem feito"],
    ["C", "Fazer junto com o grupo"],
    ["A", "Simplesmente fazer"]
  ]],

  ["Eu gosto de...", [
    ["I", "Complexidade, mesmo se confuso"],
    ["O", "Ordem e sistematização"],
    ["C", "Calor humano e animação"],
    ["A", "Coisas claras e simples"]
  ]],

  ["Tempo para mim é...", [
    ["A", "Algo que detesto desperdiçar"],
    ["C", "Um grande ciclo"],
    ["O", "Uma flecha que leva ao inevitável"],
    ["I", "Irrelevante"]
  ]],

  ["Se eu fosse bilionário...", [
    ["C", "Faria doações para entidades"],
    ["O", "Criaria uma poupança avantajada"],
    ["I", "Faria o que desse vontade"],
    ["A", "Exibiria bastante com algumas pessoas"]
  ]],

  ["Eu acredito que...", [
    ["A", "O destino é mais importante que a jornada"],
    ["C", "Jornada é mais importante que o destino"],
    ["O", "Um centavo economizado é um centavo ganho"],
    ["I", "Bastam um navio e uma estrela para navegar"]
  ]],

  ["Eu acredito também que...", [
    ["A", "Aquele que hesita está perdido"],
    ["O", "De grão em grão a galinha enche o papo"],
    ["C", "O que vai, volta"],
    ["I", "Um sorriso ou uma careta é o mesmo para quem é cego"]
  ]],

  ["Eu acredito ainda que...", [
    ["O", "É melhor prudência do que arrependimento"],
    ["I", "A autoridade deve ser desafiada"],
    ["A", "Ganhar é fundamental"],
    ["C", "O coletivo é mais importante do que o individual"]
  ]],

  ["Eu penso que...", [
    ["I", "Não é fácil ficar encurralado"],
    ["O", "É preferível olhar, antes de pular"],
    ["C", "Duas cabeças pensam melhor do que uma"],
    ["A", "Se não tem condições de competir, não compita"]
  ]]
];

const shuffledQuestions = shuffle(
  questions.map(q => [q[0], shuffle([...q[1]])])
);

/* =========================
   CONTROLE
========================= */
function reset() {
  current = 0;
  selected = null;
  hasAnimated = false;
  stage = "intro";
  scores = { I: 0, C: 0, A: 0, O: 0 };
  render();
}

function render() {
  if (stage === "intro") renderIntro();
  else if (stage === "quiz") {
    if (current < shuffledQuestions.length) renderQuestion();
    else {
      stage = "result";
      render();
    }
  } else renderResult();
}

/* =========================
   QUESTÃO
========================= */
function renderQuestion() {
  const q = shuffledQuestions[current];
  const progress = Math.round(((current + 1) / shuffledQuestions.length) * 100);

  app.innerHTML = `
    <div class="container">
      <div class="card ${hasAnimated ? "" : "animate-in"}">
        <div class="progress">
          <div class="progress-bar" style="width:${progress}%"></div>
        </div>

        <h2>${q[0]}</h2>

        ${q[1].map(o => `
          <div class="option" onclick="selectOption(this,'${o[0]}')">
            ${o[1]}
          </div>
        `).join("")}

        <button class="primary" disabled onclick="next()">Próxima</button>
        <div class="required">* Selecione uma opção para continuar</div>
      </div>
    </div>
  `;

  hasAnimated = true;
}

function selectOption(el, val) {
  selected = val;

  document.querySelectorAll(".option")
    .forEach(o => o.classList.remove("selected"));

  el.classList.add("selected");

  document.querySelector(".required").classList.add("hidden");
  document.querySelector("button.primary").disabled = false;
}

function next() {
  scores[selected]++;
  selected = null;
  current++;
  render();
}

/* =========================
   RESULTADO
========================= */
function renderResult() {
  const total = shuffledQuestions.length;

  const sorted = Object.entries(scores)
    .map(([k, v]) => ({ k, v, p: Math.round(v / total * 100) }))
    .sort((a, b) => b.v - a.v);

  app.innerHTML = `
    <div class="container">
      <div class="card">
        <h2>Resultado Final</h2>
        ${sorted.map((r, i) => `
          <div class="result-card ${i < 2 ? "highlight" : ""}">
            <img src="assets/${profiles[r.k].img}" />
            <h3>${profiles[r.k].name} – ${r.p}%</h3>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

/* =========================
   INTRO
========================= */
function renderIntro() {
  app.innerHTML = `
    <div class="container">
      <div class="card animate-in">
        <h2>Bem-vindo(a)</h2>
        <p>Este teste ajuda a identificar seus estilos predominantes de personalidade.</p>
        <button class="primary" onclick="startTest()">Iniciar teste</button>
      </div>
    </div>
  `;
}

function startTest() {
  stage = "quiz";
  render();
}

render();
