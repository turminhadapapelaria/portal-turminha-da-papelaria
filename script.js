const characters = [
  {name:'Bia',type:'friends',role:'Protagonista',archetype:'Criadora / Sonhadora',image:'bia.webp',description:'A menina criativa, alegre e cheia de imaginação. Inspira criatividade, imaginação e expressão artística.',strengths:'Criatividade, entusiasmo, sensibilidade artística e pensamento positivo.',weakness:'Fica distraída quando tem muitas ideias ao mesmo tempo.',symbol:'Coração'},
  {name:'Lino',type:'friends',role:'Protagonista',archetype:'Explorador / Aprendiz',image:'lino.webp',description:'O menino curioso que adora aprender e ajudar. Representa a curiosidade, a amizade e a colaboração.',strengths:'Sede de conhecimento, observação, raciocínio rápido e trabalho em equipe.',weakness:'Pode agir por impulso e se distrair quando fica empolgado.',symbol:'Lápis'},
  {name:'Isa',type:'friends',role:'Turminha',archetype:'Acolhedora / Inspiradora',image:'isa.webp',description:'Curiosa, determinada e sempre pronta para incluir todo mundo. Mostra que todos têm valor.',strengths:'Empatia, inclusão, determinação, liderança positiva e criatividade.',weakness:'Fica chateada com injustiças ou quando alguém se sente excluído.',symbol:'Flor'},
  {name:'Aquarela',type:'friends',role:'Turminha',archetype:'Criativa / Sonhadora',image:'aquarela.webp',description:'A artista que transforma tudo em cores. Representa a imaginação e a beleza de transformar ideias.',strengths:'Criatividade ilimitada, comunicação, empatia e capacidade de inspirar.',weakness:'Dispersa, esquece detalhes práticos e se emociona facilmente.',symbol:'Paleta e pincel'},
  {name:'Cadu Caderno',type:'friends',role:'Turminha',archetype:'Sábio / Guardião do Conhecimento',image:'cadu-caderno.webp',description:'O caderno encantado que guarda grandes ideias, histórias e aprendizados.',strengths:'Memória incrível, organização, confiança e orientação aos amigos.',weakness:'Fica inseguro com páginas em branco e não gosta de bagunça.',symbol:'Régua'},
  {name:'Dino Leco',type:'friends',role:'Turminha',archetype:'Explorador / Aprendiz',image:'dino-leco.webp',description:'O dinossauro curioso, divertido e apaixonado por aprender e compartilhar descobertas.',strengths:'Inteligência curiosa, coragem para explorar e ótima memória.',weakness:'É impulsivo quando se empolga e pode se distrair com novidades.',symbol:'Pegada de dinossauro'},
  {name:'Fada Papelina',type:'friends',role:'Aliada',archetype:'Mágica / Protetora',image:'fada-papelina.webp',description:'A guardiã da imaginação e da criatividade, capaz de transformar ideias em realidade.',strengths:'Imaginação ilimitada, empatia, criatividade e gentileza.',weakness:'Entristece quando falta criatividade ou quando os sonhos são abandonados.',symbol:'Varinha de estrela'},
  {name:'Professor Borrachão',type:'friends',role:'Mentor',archetype:'Sábio / Educador',image:'professor-borrachao.webp',description:'O mestre da criatividade que apaga o erro e o transforma em aprendizado.',strengths:'Ensina com amor, inspira criatividade e transmite confiança.',weakness:'Muito tolerante, às vezes deixa escapar pequenas bagunças.',symbol:'Esquadro'},
  {name:'Tico Fogo',type:'friends',role:'Turminha',archetype:'Guerreiro / Motivador',image:'tico-fogo.webp',description:'O dragãozinho energético e corajoso que acende a chama da criatividade.',strengths:'Energia, coragem, determinação, otimismo e motivação.',weakness:'Impulsivo quando fica entediado e tenta fazer tudo ao mesmo tempo.',symbol:'Fogo'},
  {name:'Zig',type:'friends',role:'Turminha',archetype:'Pensador / Estrategista',image:'zig.webp',description:'O gatinho inteligente e curioso que sempre encontra soluções criativas.',strengths:'Raciocínio rápido, criatividade, lógica e soluções inovadoras.',weakness:'Pode se distrair quando algo interessante chama sua atenção.',symbol:'Patinha'},
  {name:'Ziper Zaza',type:'friends',role:'Turminha',archetype:'Cuidadora / Organizadora',image:'ziper-zaza.webp',description:'A estojo divertida e organizada que guarda tudo com muito carinho.',strengths:'Organização, responsabilidade, atenção aos detalhes e generosidade.',weakness:'Fica preocupada quando algo está fora do lugar ou não consegue fechá-la.',symbol:'Zíper'},
  {name:'Capitão Apagão',type:'villains',role:'Vilão',archetype:'Supressor / Sabotador',image:'capitao-apagao.webp',description:'O vilão que apaga ideias, cores e histórias e bagunça tudo por onde passa.',strengths:'Apaga instantaneamente, intimida e espalha tinta corretiva.',weakness:'Criatividade, cores, amizade e risadas sinceras.',symbol:'Pincel corretivo'},
  {name:'Conde Confusão',type:'villains',role:'Vilão',archetype:'Trapaceiro / Manipulador',image:'conde-confusao.webp',description:'Adora atrapalhar, embaralhar e colocar todo mundo de cabeça para baixo.',strengths:'Inteligência estratégica, criatividade para planos e habilidade de enganar.',weakness:'Seu excesso de ego e necessidade de atenção sempre o complicam.',symbol:'Tesoura'},
  {name:'Doutor Desbotado',type:'villains',role:'Vilão',archetype:'Cientista Maluco',image:'doutor-desbotado.webp',description:'O cientista maluco que quer roubar as cores e deixar tudo sem vida.',strengths:'Inteligência, inventividade e conhecimento de química e tecnologia.',weakness:'Não suporta alegria, cores e amizade; frustra-se quando seus planos dão errado.',symbol:'Tinta apagante'},
  {name:'Grampzilla',type:'villains',role:'Vilão',archetype:'Monstro Mecânico / Destruidor',image:'grampizilla.webp',description:'O monstruoso grampeador que prende tudo e transforma Papelândia em uma bagunça presa.',strengths:'Força bruta, resistência metálica e grampos poderosos.',weakness:'Óleo lubrificante, criatividade e trabalho em equipe.',symbol:'Grampo'},
  {name:'Some Tampas',type:'villains',role:'Vilão',archetype:'Caos / Destruidor / Bagunceiro',image:'some-tampas.svg',description:'O vilão bagunceiro que some com tudo o que encontra pela frente.',strengths:'Rapidez, habilidade para se esconder e causar confusão.',weakness:'Distrai-se com facilidade, não gosta de limpeza e odeia organização.',symbol:'Tampa'}
];
const films = [
  {id:'video-aquarela-zig',title:'Aquarela e Zig na Papelaria',file:'aquarela-e-zig.mp4',color:'#e44591',images:['aquarela.webp','zig.webp']},
  {id:'video-estojo',title:'Estojo do Amor',file:'estojo-do-amor.mp4',color:'#ff6470',images:['ziper-zaza.webp','bia.webp']},
  {id:'video-grampzilla',title:'Grampzilla Ataca',file:'grampzilla-ataca.mp4',color:'#52a643',images:['grampizilla.webp','lino.webp']},
  {id:'video-isa',title:'Isa e a Invenção Mágica',file:'isa-e-a-invencao-magica.mp4',color:'#7358c9',images:['isa.webp','professor-borrachao.webp']},
  {id:'video-ideias',title:'Onde as Ideias Ganham Vida',file:'onde-as-ideias-ganham-vida.mp4',color:'#f0a51d',images:['fada-papelina.webp','bia.webp']},
  {id:'video-papelopolis',title:'Papelópolis',file:'papelopolis.mp4',color:'#188bc1',images:['cadu-caderno.webp','fada-papelina.webp']},
  {id:'video-cores',title:'Confie nas Suas Cores',file:'confie-nas-suas-cores.mp4',color:'#ef4f79',images:['aquarela.webp','bia.webp']},
  {id:'video-jingle',title:'Jingle Turminha da Papelaria',file:'jingle-turminha.mp4',color:'#18a99d',images:['bia.webp','lino.webp','tico-fogo.webp']},
  {id:'video-lino-tico',title:'Lino e Tico Fogo na Papelaria Fofa',file:'lino-e-tico-fogo.mp4',color:'#f17a2e',images:['lino.webp','tico-fogo.webp']},
  {id:'video-persistir',title:'Persistir é Conquistar',file:'persistir-e-conquistar.mp4',color:'#4373c6',images:['dino-leco.webp','lino.webp']}
];
const coloring = [
  {name:'Bia',file:'bia-colorir.png'}, {name:'Lino',file:'lino-colorir.png'},
  {name:'Isa',file:'isa-colorir.png'}, {name:'Aquarela',file:'aquarela-colorir.png'},
  {name:'Fada Papelina',file:'fada-papelina-colorir.png'},
  {name:'Laboratório do Professor Borrachão',file:'laboratorio-professor-borrachao-colorir.png'},
  {name:'Árvore da Criatividade',file:'arvore-da-criatividade-colorir.png'}
];
const wallpapers = [
  {name:'Rio das Tintas',file:'rio-das-tintas'},
  {name:'Árvore da Criatividade',file:'arvore-da-criatividade'},
  {name:'Ateliê das Cores',file:'atelie-das-cores'},
  {name:'Bairro dos Cadernos',file:'bairro-dos-cadernos'},
  {name:'Castelo da Criatividade',file:'castelo-da-criatividade'},
  {name:'Floresta de Lápis',file:'floresta-de-lapis'},
  {name:'Papelópolis',file:'papelopolis'},
  {name:'Vale das Fagulhas',file:'vale-das-fagulhas'}
];
const characterGrid=document.querySelector('#character-grid');
function renderCharacters(filter='all'){
  characterGrid.innerHTML=characters.filter(c=>filter==='all'||c.type===filter).map(c=>`<button class="character-card ${c.type}" type="button" data-character="${c.name}"><span class="role">${c.role}</span><img src="assets/characters/${c.image}" alt="${c.name}" loading="lazy"><div><h3>${c.name}</h3><p>Conheça este personagem →</p></div></button>`).join('');
}
renderCharacters();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));button.classList.add('active');renderCharacters(button.dataset.filter)}));
const filmRow=document.querySelector('#film-row');
filmRow.innerHTML=films.map(f=>`<button class="film-card" type="button" data-video="${f.id}" style="--poster:${f.color}" aria-label="Assistir ${f.title}"><span class="poster">${f.images.map((image,index)=>`<img class="poster-character poster-character-${index+1}" src="assets/characters/${image}" alt="" loading="lazy">`).join('')}<span class="poster-brand">Turminha da Papelaria</span><span class="poster-play" aria-hidden="true">▶</span></span><h3>${f.title}</h3><span class="film-watch">Assistir agora →</span></button>`).join('');
const gallery=document.querySelector('#coloring-gallery');
gallery.innerHTML=coloring.map(c=>`<article class="coloring-card"><img src="assets/coloring/${c.file}" alt="Desenho de ${c.name} para colorir" loading="lazy"><div class="coloring-actions"><button type="button" data-print="assets/coloring/${c.file}">Imprimir</button><a href="assets/coloring/${c.file}" download>Baixar</a></div></article>`).join('');
const wallpaperGallery=document.querySelector('#wallpaper-gallery');
wallpaperGallery.innerHTML=wallpapers.map(w=>`<article class="wallpaper-card"><div class="wallpaper-preview"><img src="assets/wallpaper-${w.file}-preview.webp" alt="Papel de parede ${w.name}" loading="lazy"></div><h3>${w.name}</h3><p>1080 × 1920 px</p><a href="assets/wallpaper-${w.file}.jpg" download aria-label="Baixar papel de parede ${w.name}">↓ Baixar</a></article>`).join('');
const dialog=document.querySelector('#media-dialog');const dialogBody=document.querySelector('#dialog-body');
function openVideo(id){const film=films.find(f=>f.id===id);if(!film)return;dialogBody.innerHTML=`<video controls autoplay playsinline preload="metadata"><source src="assets/videos-web/${film.file}" type="video/mp4">Seu navegador não conseguiu reproduzir este vídeo.</video>`;dialog.showModal()}
document.addEventListener('click',e=>{const video=e.target.closest('[data-video]');if(video)openVideo(video.dataset.video);const card=e.target.closest('[data-character]');if(card){const c=characters.find(x=>x.name===card.dataset.character);dialogBody.innerHTML=`<div class="character-detail"><img src="assets/characters/${c.image}" alt="${c.name}"><div><span class="tag">${c.role}</span><h2>${c.name}</h2><p class="archetype">${c.archetype}</p><p>${c.description}</p><dl><dt>Forças</dt><dd>${c.strengths}</dd><dt>Fraqueza</dt><dd>${c.weakness}</dd><dt>Elemento-símbolo</dt><dd>${c.symbol}</dd></dl></div></div>`;dialog.showModal()}const print=e.target.closest('[data-print]');if(print){const w=window.open(print.dataset.print,'_blank');w?.addEventListener('load',()=>w.print())}});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>dialogBody.innerHTML='');dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const menuButton=document.querySelector('.menu-button');const nav=document.querySelector('.main-nav');menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open)});nav.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')});

const comicPages=Array.from({length:7},(_,i)=>i===0?'assets/comics/primeira-ideia-1.svg':`assets/comics/primeira-ideia-${i+1}.webp`);
const comicDialog=document.querySelector('#comic-dialog');
const flipbookElement=document.querySelector('#flipbook');
const comicPageLabel=document.querySelector('#comic-page-label');
let comicBook=null;
function comicFallback(){
  flipbookElement.className='comic-fallback';
  flipbookElement.innerHTML=comicPages.map((src,i)=>`<img src="${src}" alt="Página ${i+1} do gibi A Primeira Ideia de Papelópolis">`).join('');
  comicPageLabel.textContent='Leitura vertical';
}
function initializeComic(){
  flipbookElement.className='';
  flipbookElement.innerHTML=comicPages.map((src,i)=>`<div class="comic-page" data-density="hard"><img src="${src}" alt="Página ${i+1} do gibi"></div>`).join('');
  if(!window.St?.PageFlip){comicFallback();return}
  try{
    const mobile=window.matchMedia('(max-width: 760px)').matches;
    comicBook=new St.PageFlip(flipbookElement,{width:520,height:736,size:'stretch',minWidth:280,maxWidth:560,minHeight:396,maxHeight:792,showCover:true,usePortrait:true,mobileScrollSupport:true,maxShadowOpacity:.35,flippingTime:700});
    comicBook.loadFromHTML(document.querySelectorAll('.comic-page'));
    comicBook.on('flip',e=>{comicPageLabel.textContent=e.data===0?'Capa':`Página ${e.data+1} de 7`});
    if(mobile)comicPageLabel.textContent='Capa';
  }catch(error){comicFallback()}
}
document.querySelector('#open-comic').addEventListener('click',()=>{comicDialog.showModal();requestAnimationFrame(initializeComic)});
document.querySelector('#comic-close').addEventListener('click',()=>{comicDialog.close();comicBook?.destroy();comicBook=null});
document.querySelector('#comic-prev').addEventListener('click',()=>comicBook?.flipPrev());
document.querySelector('#comic-next').addEventListener('click',()=>comicBook?.flipNext());
document.querySelector('#comic-fullscreen').addEventListener('click',()=>{if(!document.fullscreenElement)comicDialog.requestFullscreen?.();else document.exitFullscreen?.()});
document.addEventListener('keydown',e=>{if(!comicDialog.open)return;if(e.key==='ArrowRight')comicBook?.flipNext();if(e.key==='ArrowLeft')comicBook?.flipPrev();if(e.key==='Escape'&&comicDialog.open)comicDialog.close()});

const gameBoard=document.querySelector('#game-board');
const gameStart=document.querySelector('#game-start');
const gameStartButton=document.querySelector('#game-start-button');
const gameTitle=document.querySelector('#game-title');
const gameMessage=document.querySelector('#game-message');
const gameAnnouncement=document.querySelector('#game-announcement');
const gameScore=document.querySelector('#game-score');
const gameRound=document.querySelector('#game-round');
const gameFound=document.querySelector('#game-found');
const gameTime=document.querySelector('#game-time');
const gameReset=document.querySelector('#game-reset');
const capColors=['#ff4f72','#ffc928','#31b85b','#23a9d8','#7657c8','#ff7b27','#ef50bb'];
const capPositions=[
  [9,13],[27,10],[47,14],[68,11],[88,15],
  [16,30],[37,27],[58,32],[79,28],[93,36],
  [8,49],[25,47],[45,51],[65,46],[84,52],
  [15,68],[35,65],[55,70],[75,64],[92,72],
  [8,87],[28,84],[49,88],[70,83],[89,89]
];
let gameState={score:0,round:1,found:0,target:8,time:30,active:false,timer:null};

function shuffle(items){return [...items].sort(()=>Math.random()-.5)}
function updateGameStats(){
  gameScore.textContent=gameState.score;
  gameRound.textContent=`${gameState.round}/3`;
  gameFound.textContent=`${gameState.found}/${gameState.target}`;
  gameTime.textContent=gameState.time;
}
function announceGame(text){
  gameAnnouncement.textContent=text;
  gameAnnouncement.classList.remove('pop');
  requestAnimationFrame(()=>gameAnnouncement.classList.add('pop'));
}
function clearGameCaps(){gameBoard.querySelectorAll('.game-cap').forEach(cap=>cap.remove())}
function renderGameCaps(){
  clearGameCaps();
  const positions=shuffle(capPositions).slice(0,gameState.target);
  positions.forEach(([x,y],index)=>{
    const cap=document.createElement('button');
    const golden=index===gameState.target-1;
    cap.type='button';
    cap.className=`game-cap${golden?' golden':''}`;
    cap.setAttribute('aria-label',golden?'Tampinha dourada escondida':'Tampinha escondida');
    cap.style.left=`${x}%`;
    cap.style.top=`${y}%`;
    cap.style.setProperty('--cap',golden?'#ffd21f':capColors[(index+gameState.round)%capColors.length]);
    cap.style.setProperty('--cap-size',`${Math.max(42,58-gameState.round*4+(index%3)*2)}px`);
    cap.addEventListener('click',()=>collectCap(cap,golden));
    gameBoard.appendChild(cap);
  });
}
function collectCap(cap,golden){
  if(!gameState.active||cap.classList.contains('found'))return;
  cap.classList.add('found');
  gameState.found+=1;
  const points=golden?250:100;
  gameState.score+=points;
  updateGameStats();
  announceGame(golden?`Tampinha dourada! +${points}`:`+${points} pontos`);
  setTimeout(()=>cap.remove(),190);
  if(gameState.found===gameState.target){
    gameState.active=false;
    clearInterval(gameState.timer);
    gameState.score+=gameState.time*10;
    updateGameStats();
    setTimeout(()=>gameState.round<3?startGameRound(gameState.round+1):finishGame(true),700);
  }
}
function startGameRound(round){
  clearInterval(gameState.timer);
  gameState.round=round;
  gameState.found=0;
  gameState.target=7+round;
  gameState.time=32-round*2;
  gameState.active=true;
  gameStart.hidden=true;
  updateGameStats();
  renderGameCaps();
  announceGame(`Fase ${round}`);
  gameState.timer=setInterval(()=>{
    if(!gameState.active)return;
    gameState.time-=1;
    updateGameStats();
    if(gameState.time<=0)finishGame(false);
  },1000);
}
function startGame(){
  clearInterval(gameState.timer);
  gameState.score=0;
  startGameRound(1);
}
function finishGame(won){
  gameState.active=false;
  clearInterval(gameState.timer);
  clearGameCaps();
  const previousBest=Number(localStorage.getItem('turminha-cap-score')||0);
  const best=Math.max(previousBest,gameState.score);
  localStorage.setItem('turminha-cap-score',String(best));
  gameTitle.textContent=won?'Papelópolis está salva!':'O tempo acabou!';
  gameMessage.textContent=`Você fez ${gameState.score} pontos. Melhor resultado: ${best}.`;
  gameStartButton.textContent='Jogar novamente';
  gameStart.hidden=false;
}
gameStartButton.addEventListener('click',startGame);
gameReset.addEventListener('click',startGame);

const memoryPairs=[
  {id:'lino',character:'Lino',image:'lino.webp',material:'Lápis',icon:'✏'},
  {id:'bia',character:'Bia',image:'bia.webp',material:'Coração',icon:'♥'},
  {id:'cadu',character:'Cadu Caderno',image:'cadu-caderno.webp',material:'Régua',icon:'📏'},
  {id:'dino',character:'Dino Leco',image:'dino-leco.webp',material:'Pegada de dinossauro',icon:'🐾'},
  {id:'professor',character:'Professor Borrachão',image:'professor-borrachao.webp',material:'Esquadro',icon:'◢'},
  {id:'capitao',character:'Capitão Apagão',image:'capitao-apagao.webp',material:'Pincel corretivo',icon:'🖌'},
  {id:'conde',character:'Conde Confusão',image:'conde-confusao.webp',material:'Tesoura',icon:'✂'},
  {id:'tampas',character:'Some Tampas',image:'some-tampas.svg',material:'Tampa',icon:'●'}
];
const memoryBoard=document.querySelector('#memory-board');
const memoryStart=document.querySelector('#memory-start');
const memoryStartButton=document.querySelector('#memory-start-button');
const memoryTitle=document.querySelector('#memory-title');
const memoryMessage=document.querySelector('#memory-message');
const memoryAnnouncement=document.querySelector('#memory-announcement');
const memoryMoves=document.querySelector('#memory-moves');
const memoryMatches=document.querySelector('#memory-matches');
const memoryTime=document.querySelector('#memory-time');
const memoryBest=document.querySelector('#memory-best');
const memoryReset=document.querySelector('#memory-reset');
let memoryState={moves:0,matches:0,time:0,active:false,locked:false,flipped:[],timer:null};

function formatMemoryTime(seconds){
  return `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;
}
function readMemoryBest(){
  const best=Number(localStorage.getItem('turminha-memory-best')||0);
  memoryBest.textContent=best?String(best):'–';
  return best;
}
function updateMemoryStats(){
  memoryMoves.textContent=memoryState.moves;
  memoryMatches.textContent=`${memoryState.matches}/${memoryPairs.length}`;
  memoryTime.textContent=formatMemoryTime(memoryState.time);
}
function announceMemory(text){
  memoryAnnouncement.textContent=text;
  memoryAnnouncement.classList.remove('pop');
  requestAnimationFrame(()=>memoryAnnouncement.classList.add('pop'));
}
function memoryCardMarkup(pair,kind){
  const isCharacter=kind==='character';
  const face=isCharacter
    ? `<img src="assets/characters/${pair.image}" alt=""><strong>${pair.character}</strong>`
    : `<span class="memory-symbol" aria-hidden="true">${pair.icon}</span><strong>${pair.material}</strong>`;
  const label=isCharacter?`Personagem ${pair.character}`:`Símbolo ou material ${pair.material}`;
  return `<button class="memory-card" type="button" data-memory-pair="${pair.id}" aria-label="Carta virada para baixo: ${label}"><span class="memory-card-inner"><span class="memory-card-face memory-card-back"><span>?</span></span><span class="memory-card-face memory-card-front ${isCharacter?'character':'material'}">${face}</span></span></button>`;
}
function renderMemoryCards(){
  memoryBoard.querySelectorAll('.memory-card').forEach(card=>card.remove());
  const cards=shuffle(memoryPairs.flatMap(pair=>[
    {pair,kind:'character'},
    {pair,kind:'material'}
  ]));
  cards.forEach(({pair,kind})=>{
    memoryBoard.insertAdjacentHTML('beforeend',memoryCardMarkup(pair,kind));
  });
}
function flipMemoryCard(card){
  if(!memoryState.active||memoryState.locked||card.classList.contains('flipped')||card.classList.contains('matched'))return;
  card.classList.add('flipped');
  card.setAttribute('aria-label',card.textContent.trim());
  memoryState.flipped.push(card);
  if(memoryState.flipped.length<2)return;
  memoryState.moves+=1;
  updateMemoryStats();
  const [first,second]=memoryState.flipped;
  if(first.dataset.memoryPair===second.dataset.memoryPair){
    first.classList.add('matched');
    second.classList.add('matched');
    memoryState.flipped=[];
    memoryState.matches+=1;
    updateMemoryStats();
    announceMemory('Par encontrado!');
    if(memoryState.matches===memoryPairs.length)setTimeout(finishMemoryGame,500);
    return;
  }
  memoryState.locked=true;
  setTimeout(()=>{
    first.classList.remove('flipped');
    second.classList.remove('flipped');
    first.setAttribute('aria-label','Carta virada para baixo');
    second.setAttribute('aria-label','Carta virada para baixo');
    memoryState.flipped=[];
    memoryState.locked=false;
  },850);
}
function startMemoryGame(){
  clearInterval(memoryState.timer);
  memoryState={moves:0,matches:0,time:0,active:true,locked:false,flipped:[],timer:null};
  memoryTitle.textContent='Memória da Turminha';
  memoryMessage.textContent='Encontre o símbolo ou material de cada personagem.';
  memoryStartButton.textContent='Jogar novamente';
  memoryStart.hidden=true;
  renderMemoryCards();
  updateMemoryStats();
  readMemoryBest();
  memoryState.timer=setInterval(()=>{
    if(!memoryState.active)return;
    memoryState.time+=1;
    memoryTime.textContent=formatMemoryTime(memoryState.time);
  },1000);
}
function finishMemoryGame(){
  memoryState.active=false;
  clearInterval(memoryState.timer);
  const previousBest=readMemoryBest();
  if(!previousBest||memoryState.moves<previousBest){
    localStorage.setItem('turminha-memory-best',String(memoryState.moves));
    memoryBest.textContent=memoryState.moves;
  }
  memoryTitle.textContent='Você encontrou todos!';
  memoryMessage.textContent=`Foram ${memoryState.moves} jogadas em ${formatMemoryTime(memoryState.time)}.`;
  memoryStart.hidden=false;
}
memoryBoard.addEventListener('click',event=>{
  const card=event.target.closest('.memory-card');
  if(card)flipMemoryCard(card);
});
memoryStartButton.addEventListener('click',startMemoryGame);
memoryReset.addEventListener('click',startMemoryGame);
readMemoryBest();

const adventureLevels=[
  {
    name:'Bairro dos Cadernos',
    background:'assets/wallpaper-bairro-dos-cadernos.jpg',
    start:35,
    exit:6,
    ideas:[9,20,31],
    obstacles:[1,8,15,22,29],
    hazards:[12,26]
  },
  {
    name:'Floresta de Lápis',
    background:'assets/wallpaper-floresta-de-lapis.jpg',
    start:41,
    exit:0,
    ideas:[7,17,23,32],
    obstacles:[5,12,19,26],
    hazards:[9,21,36]
  },
  {
    name:'Castelo da Criatividade',
    background:'assets/wallpaper-castelo-da-criatividade.jpg',
    start:38,
    exit:3,
    ideas:[7,19,27,40],
    obstacles:[8,9,15,25,26,32,33],
    hazards:[11,21,30,35]
  }
];
const adventureGrid=document.querySelector('#adventure-grid');
const adventureStage=document.querySelector('#adventure-stage');
const adventureStart=document.querySelector('#adventure-start');
const adventureStartButton=document.querySelector('#adventure-start-button');
const adventureTitle=document.querySelector('#adventure-title');
const adventureMessage=document.querySelector('#adventure-message');
const adventureAnnouncement=document.querySelector('#adventure-announcement');
const adventureScore=document.querySelector('#adventure-score');
const adventureLevel=document.querySelector('#adventure-level');
const adventureIdeas=document.querySelector('#adventure-ideas');
const adventureLives=document.querySelector('#adventure-lives');
const adventureBest=document.querySelector('#adventure-best');
const adventureReset=document.querySelector('#adventure-reset');
const adventureMoves=document.querySelectorAll('[data-adventure-move]');
let adventureState={level:0,position:35,score:0,lives:3,collected:new Set(),active:false,transitioning:false};

function readAdventureBest(){
  const best=Number(localStorage.getItem('turminha-adventure-best')||0);
  adventureBest.textContent=best;
  return best;
}
function updateAdventureStats(){
  const level=adventureLevels[adventureState.level];
  adventureScore.textContent=adventureState.score;
  adventureLevel.textContent=`${adventureState.level+1}/${adventureLevels.length}`;
  adventureIdeas.textContent=`${adventureState.collected.size}/${level.ideas.length}`;
  adventureLives.textContent='♥'.repeat(adventureState.lives)+'♡'.repeat(3-adventureState.lives);
}
function announceAdventure(text){
  adventureAnnouncement.textContent=text;
  adventureAnnouncement.classList.remove('pop');
  requestAnimationFrame(()=>adventureAnnouncement.classList.add('pop'));
}
function adventureTileLabel(index,level){
  if(index===adventureState.position)return 'Lino';
  if(level.obstacles.includes(index))return 'Obstáculo';
  if(level.hazards.includes(index))return 'Mancha de tinta';
  if(level.ideas.includes(index)&&!adventureState.collected.has(index))return 'Ideia brilhante';
  if(index===level.exit)return adventureState.collected.size===level.ideas.length?'Portal aberto':'Portal fechado';
  return 'Caminho livre';
}
function renderAdventure(){
  const level=adventureLevels[adventureState.level];
  const portalOpen=adventureState.collected.size===level.ideas.length;
  adventureStage.style.setProperty('--adventure-bg',`url("${level.background}")`);
  adventureGrid.setAttribute('aria-label',`Mapa: ${level.name}`);
  adventureGrid.innerHTML=Array.from({length:42},(_,index)=>{
    const classes=['adventure-tile'];
    if(level.obstacles.includes(index))classes.push('obstacle');
    if(level.hazards.includes(index))classes.push('hazard');
    if(level.ideas.includes(index)&&!adventureState.collected.has(index))classes.push('idea');
    if(index===level.exit)classes.push('portal',portalOpen?'open':'closed');
    const player=index===adventureState.position?'<img class="adventure-player" src="assets/characters/lino.webp" alt="">':'';
    return `<div class="${classes.join(' ')}" role="gridcell" aria-label="${adventureTileLabel(index,level)}">${player}</div>`;
  }).join('');
  updateAdventureStats();
}
function loadAdventureLevel(index){
  const level=adventureLevels[index];
  adventureState.level=index;
  adventureState.position=level.start;
  adventureState.collected=new Set();
  adventureState.active=true;
  adventureState.transitioning=false;
  renderAdventure();
  announceAdventure(`Fase ${index+1}: ${level.name}`);
}
function finishAdventure(won){
  adventureState.active=false;
  adventureState.transitioning=false;
  const previousBest=readAdventureBest();
  if(adventureState.score>previousBest){
    localStorage.setItem('turminha-adventure-best',String(adventureState.score));
    adventureBest.textContent=adventureState.score;
  }
  adventureTitle.textContent=won?'Papelópolis foi iluminada!':'Lino precisa de ajuda!';
  adventureMessage.textContent=won
    ? `Você completou as três fases com ${adventureState.score} pontos.`
    : `As vidas acabaram. Você conquistou ${adventureState.score} pontos.`;
  adventureStartButton.textContent='Jogar novamente';
  adventureStart.hidden=false;
}
function completeAdventureLevel(){
  adventureState.active=false;
  adventureState.transitioning=true;
  adventureState.score+=500;
  updateAdventureStats();
  if(adventureState.level===adventureLevels.length-1){
    setTimeout(()=>finishAdventure(true),650);
    return;
  }
  announceAdventure('Portal encontrado! Próxima fase...');
  setTimeout(()=>loadAdventureLevel(adventureState.level+1),750);
}
function moveAdventure(dx,dy){
  if(!adventureState.active||adventureState.transitioning)return;
  const level=adventureLevels[adventureState.level];
  const x=adventureState.position%7;
  const y=Math.floor(adventureState.position/7);
  const nextX=x+dx;
  const nextY=y+dy;
  if(nextX<0||nextX>6||nextY<0||nextY>5)return;
  const next=nextY*7+nextX;
  if(level.obstacles.includes(next)){
    announceAdventure('Esse caminho está bloqueado.');
    return;
  }
  adventureState.position=next;
  if(level.hazards.includes(next)){
    adventureState.lives-=1;
    adventureState.score=Math.max(0,adventureState.score-100);
    if(adventureState.lives===0){
      renderAdventure();
      finishAdventure(false);
      return;
    }
    adventureState.position=level.start;
    announceAdventure('Cuidado com a tinta! Você perdeu uma vida.');
  }
  if(level.ideas.includes(next)&&!adventureState.collected.has(next)){
    adventureState.collected.add(next);
    adventureState.score+=200;
    announceAdventure(adventureState.collected.size===level.ideas.length?'Todas as ideias! O portal abriu.':'Ideia brilhante encontrada!');
  }
  renderAdventure();
  if(next===level.exit){
    if(adventureState.collected.size===level.ideas.length)completeAdventureLevel();
    else announceAdventure('Encontre todas as ideias para abrir o portal.');
  }
}
function startAdventure(){
  adventureState={level:0,position:adventureLevels[0].start,score:0,lives:3,collected:new Set(),active:true,transitioning:false};
  adventureTitle.textContent='Aventura em Papelópolis';
  adventureMessage.textContent='Ajude Lino a encontrar as ideias e chegar ao portal.';
  adventureStartButton.textContent='Jogar novamente';
  adventureStart.hidden=true;
  readAdventureBest();
  loadAdventureLevel(0);
}
const adventureDirections={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};
adventureMoves.forEach(button=>button.addEventListener('click',()=>{
  const [dx,dy]=adventureDirections[button.dataset.adventureMove];
  moveAdventure(dx,dy);
}));
document.addEventListener('keydown',event=>{
  if(!adventureState.active)return;
  const keyDirections={ArrowUp:[0,-1],w:[0,-1],ArrowDown:[0,1],s:[0,1],ArrowLeft:[-1,0],a:[-1,0],ArrowRight:[1,0],d:[1,0]};
  const direction=keyDirections[event.key];
  if(!direction)return;
  event.preventDefault();
  moveAdventure(...direction);
});
adventureStartButton.addEventListener('click',startAdventure);
adventureReset.addEventListener('click',startAdventure);
readAdventureBest();
renderAdventure();

const labColors=[
  {id:'vermelho',name:'Vermelho',color:'#e84a52'},
  {id:'azul',name:'Azul',color:'#2f6bd8'},
  {id:'amarelo',name:'Amarelo',color:'#f1c51b'},
  {id:'branco',name:'Branco',color:'#f4f4ef'}
];
const labRecipes=[
  {name:'Laranja',color:'#f28a23',ingredients:['vermelho','amarelo']},
  {name:'Verde',color:'#39a95a',ingredients:['amarelo','azul']},
  {name:'Roxo',color:'#8c4ec6',ingredients:['azul','vermelho']},
  {name:'Rosa',color:'#f27aa5',ingredients:['vermelho','branco']},
  {name:'Azul-claro',color:'#73c9e8',ingredients:['azul','branco']}
];
const labBottles=document.querySelector('#lab-bottles');
const labSlotOne=document.querySelector('#lab-slot-one');
const labSlotTwo=document.querySelector('#lab-slot-two');
const labResult=document.querySelector('#lab-result');
const labTargetName=document.querySelector('#lab-target-name');
const labTargetColor=document.querySelector('#lab-target-color');
const labMix=document.querySelector('#lab-mix');
const labClear=document.querySelector('#lab-clear');
const labFeedback=document.querySelector('#lab-feedback');
const labScore=document.querySelector('#lab-score');
const labRound=document.querySelector('#lab-round');
const labCorrect=document.querySelector('#lab-correct');
const labLives=document.querySelector('#lab-lives');
const labBest=document.querySelector('#lab-best');
const labReset=document.querySelector('#lab-reset');
const labStart=document.querySelector('#lab-start');
const labTitle=document.querySelector('#lab-title');
const labMessage=document.querySelector('#lab-message');
const labStartButton=document.querySelector('#lab-start-button');
let labState={recipes:[...labRecipes],index:0,selected:[],score:0,lives:3,active:false,locked:false};

function readLabBest(){
  const best=Number(localStorage.getItem('turminha-lab-best')||0);
  labBest.textContent=best;
  return best;
}
function currentLabRecipe(){
  return labState.recipes[Math.min(labState.index,labState.recipes.length-1)];
}
function updateLabStats(){
  labScore.textContent=labState.score;
  labRound.textContent=`${Math.min(labState.index+1,labRecipes.length)}/${labRecipes.length}`;
  labCorrect.textContent=Math.min(labState.index,labRecipes.length);
  labLives.textContent='♥'.repeat(labState.lives)+'♡'.repeat(3-labState.lives);
}
function setLabFeedback(text,type=''){
  labFeedback.textContent=text;
  labFeedback.className=`lab-feedback ${type}`.trim();
}
function renderLabBottles(){
  labBottles.innerHTML=labColors.map(color=>{
    const selected=labState.selected.includes(color.id);
    return `<button class="lab-bottle${selected?' selected':''}" type="button" data-lab-color="${color.id}" style="--bottle:${color.color}" aria-pressed="${selected}" ${!labState.active||labState.locked?'disabled':''}>${color.name}</button>`;
  }).join('');
}
function renderLabSlot(element,colorId,number){
  const color=labColors.find(item=>item.id===colorId);
  if(!color){
    element.className='lab-slot';
    element.removeAttribute('style');
    element.innerHTML=`<span>${number}</span><strong>Escolha</strong>`;
    return;
  }
  element.className='lab-slot filled';
  element.style.setProperty('--slot-color',color.color);
  element.innerHTML=`<span aria-hidden="true">✓</span><strong>${color.name}</strong>`;
}
function renderLabSelection(){
  renderLabSlot(labSlotOne,labState.selected[0],1);
  renderLabSlot(labSlotTwo,labState.selected[1],2);
  labMix.disabled=!labState.active||labState.locked||labState.selected.length!==2;
  labClear.disabled=!labState.active||labState.locked||labState.selected.length===0;
  renderLabBottles();
}
function loadLabRecipe(){
  const recipe=currentLabRecipe();
  labState.selected=[];
  labState.locked=false;
  labTargetName.textContent=recipe.name;
  labTargetColor.style.background=recipe.color;
  labResult.className='lab-result';
  labResult.removeAttribute('style');
  labResult.innerHTML='<span aria-hidden="true">?</span><strong>Resultado</strong>';
  setLabFeedback('Escolha dois frascos para criar a cor pedida.');
  updateLabStats();
  renderLabSelection();
}
function chooseLabColor(colorId){
  if(!labState.active||labState.locked)return;
  const selectedIndex=labState.selected.indexOf(colorId);
  if(selectedIndex>=0)labState.selected.splice(selectedIndex,1);
  else{
    if(labState.selected.length===2)labState.selected.shift();
    labState.selected.push(colorId);
  }
  setLabFeedback(labState.selected.length===2?'Fórmula pronta. Acione a máquina!':'Escolha mais um frasco.');
  renderLabSelection();
}
function sameLabIngredients(first,second){
  return [...first].sort().join('|')===[...second].sort().join('|');
}
function finishLabGame(won){
  labState.active=false;
  labState.locked=false;
  const previousBest=readLabBest();
  if(labState.score>previousBest){
    localStorage.setItem('turminha-lab-best',String(labState.score));
    labBest.textContent=labState.score;
  }
  labTitle.textContent=won?'Experimentos concluídos!':'O laboratório precisa de você!';
  labMessage.textContent=won
    ? `Você descobriu as cinco fórmulas e fez ${labState.score} pontos.`
    : `Você descobriu ${labState.index} fórmulas e fez ${labState.score} pontos.`;
  labStartButton.textContent='Jogar novamente';
  labStart.hidden=false;
  renderLabSelection();
}
function resolveLabMix(){
  const recipe=currentLabRecipe();
  const correct=sameLabIngredients(labState.selected,recipe.ingredients);
  labResult.className='lab-result revealed';
  labResult.style.setProperty('--result-color',correct?recipe.color:'#616975');
  labResult.innerHTML=`<span aria-hidden="true">${correct?'✓':'×'}</span><strong>${correct?recipe.name:'Não foi dessa vez'}</strong>`;
  if(correct){
    labState.score+=300+labState.lives*50;
    labState.index+=1;
    updateLabStats();
    setLabFeedback('Fórmula correta! Uma nova cor ganhou vida.','success');
    if(labState.index===labRecipes.length){
      setTimeout(()=>finishLabGame(true),1000);
      return;
    }
    setTimeout(loadLabRecipe,1000);
    return;
  }
  labState.lives-=1;
  updateLabStats();
  setLabFeedback('A mistura não corresponde. Observe a cor e tente outra fórmula.','error');
  if(labState.lives===0){
    setTimeout(()=>finishLabGame(false),1000);
    return;
  }
  setTimeout(()=>{
    labState.selected=[];
    labState.locked=false;
    labResult.className='lab-result';
    labResult.removeAttribute('style');
    labResult.innerHTML='<span aria-hidden="true">?</span><strong>Resultado</strong>';
    setLabFeedback('Tente uma nova combinação.');
    renderLabSelection();
  },1000);
}
function mixLabColors(){
  if(!labState.active||labState.locked||labState.selected.length!==2)return;
  labState.locked=true;
  labResult.className='lab-result mixing';
  labResult.innerHTML='<span aria-hidden="true">↻</span><strong>Misturando...</strong>';
  renderLabSelection();
  setLabFeedback('A máquina está combinando as cores...');
  setTimeout(resolveLabMix,650);
}
function startLabGame(){
  labState={recipes:shuffle([...labRecipes]),index:0,selected:[],score:0,lives:3,active:true,locked:false};
  labTitle.textContent='Laboratório do Professor';
  labMessage.textContent='Você consegue descobrir as cinco fórmulas?';
  labStartButton.textContent='Jogar novamente';
  labStart.hidden=true;
  readLabBest();
  loadLabRecipe();
}
labBottles.addEventListener('click',event=>{
  const bottle=event.target.closest('[data-lab-color]');
  if(bottle)chooseLabColor(bottle.dataset.labColor);
});
labMix.addEventListener('click',mixLabColors);
labClear.addEventListener('click',()=>{
  if(!labState.active||labState.locked)return;
  labState.selected=[];
  setLabFeedback('Escolha dois frascos para criar a cor pedida.');
  renderLabSelection();
});
labStartButton.addEventListener('click',startLabGame);
labReset.addEventListener('click',startLabGame);
readLabBest();
loadLabRecipe();
labState.active=false;
renderLabSelection();
