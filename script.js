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
  {name:'Some Tampas',type:'villains',role:'Vilão',archetype:'Caos / Destruidor / Bagunceiro',image:'some-tampas.webp',description:'O vilão bagunceiro que some com tudo o que encontra pela frente.',strengths:'Rapidez, habilidade para se esconder e causar confusão.',weakness:'Distrai-se com facilidade, não gosta de limpeza e odeia organização.',symbol:'Tampa'}
];
const films = [
  {id:'video-aquarela-zig',title:'Aquarela e Zig na Papelaria',file:'aquarela-e-zig.mp4',color:'#d84b94'},
  {id:'video-estojo',title:'Estojo do Amor',file:'estojo-do-amor.mp4',color:'#ff646d'},
  {id:'video-grampzilla',title:'Grampzilla Ataca',file:'grampzilla-ataca.mp4',color:'#3f9e45'},
  {id:'video-isa',title:'Isa e a Invenção Mágica',file:'isa-e-a-invencao-magica.mp4',color:'#7555c8'},
  {id:'video-ideias',title:'Onde as Ideias Ganham Vida',file:'onde-as-ideias-ganham-vida.mp4',color:'#e89423'},
  {id:'video-papelopolis',title:'Papelópolis',file:'papelopolis.mp4',color:'#1677c8'},
  {id:'video-cores',title:'Confie nas Suas Cores',file:'confie-nas-suas-cores.mp4',color:'#ed4b75'},
  {id:'video-jingle',title:'Jingle Turminha da Papelaria',file:'jingle-turminha.mp4',color:'#22a99c'},
  {id:'video-lino-tico',title:'Lino e Tico Fogo na Papelaria Fofa',file:'lino-e-tico-fogo.mp4',color:'#ef7b30'},
  {id:'video-persistir',title:'Persistir é Conquistar',file:'persistir-e-conquistar.mp4',color:'#3d6fc2'}
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
filmRow.innerHTML=films.map(f=>`<button class="film-card" type="button" data-video="${f.id}" style="--poster:${f.color}"><span class="poster"><span>▶</span></span><h3>${f.title}</h3></button>`).join('');
const gallery=document.querySelector('#coloring-gallery');
gallery.innerHTML=coloring.map(c=>`<article class="coloring-card"><img src="assets/coloring/${c.file}" alt="Desenho de ${c.name} para colorir" loading="lazy"><div class="coloring-actions"><button type="button" data-print="assets/coloring/${c.file}">Imprimir</button><a href="assets/coloring/${c.file}" download>Baixar</a></div></article>`).join('');
const wallpaperGallery=document.querySelector('#wallpaper-gallery');
wallpaperGallery.innerHTML=wallpapers.map(w=>`<article class="wallpaper-card"><div class="wallpaper-preview"><img src="assets/wallpaper-${w.file}-preview.webp" alt="Papel de parede ${w.name}" loading="lazy"></div><h3>${w.name}</h3><p>1080 × 1920 px</p><a href="assets/wallpaper-${w.file}.jpg" download aria-label="Baixar papel de parede ${w.name}">↓ Baixar</a></article>`).join('');
const dialog=document.querySelector('#media-dialog');const dialogBody=document.querySelector('#dialog-body');
function openVideo(id){const film=films.find(f=>f.id===id);if(!film)return;dialogBody.innerHTML=`<video controls autoplay playsinline preload="metadata"><source src="assets/videos-web/${film.file}" type="video/mp4">Seu navegador não conseguiu reproduzir este vídeo.</video>`;dialog.showModal()}
document.addEventListener('click',e=>{const video=e.target.closest('[data-video]');if(video)openVideo(video.dataset.video);const card=e.target.closest('[data-character]');if(card){const c=characters.find(x=>x.name===card.dataset.character);dialogBody.innerHTML=`<div class="character-detail"><img src="assets/characters/${c.image}" alt="${c.name}"><div><span class="tag">${c.role}</span><h2>${c.name}</h2><p class="archetype">${c.archetype}</p><p>${c.description}</p><dl><dt>Forças</dt><dd>${c.strengths}</dd><dt>Fraqueza</dt><dd>${c.weakness}</dd><dt>Elemento-símbolo</dt><dd>${c.symbol}</dd></dl></div></div>`;dialog.showModal()}const print=e.target.closest('[data-print]');if(print){const w=window.open(print.dataset.print,'_blank');w?.addEventListener('load',()=>w.print())}});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>dialogBody.innerHTML='');dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const menuButton=document.querySelector('.menu-button');const nav=document.querySelector('.main-nav');menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open)});nav.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')});

const comicPages=Array.from({length:7},(_,i)=>`assets/comics/primeira-ideia-${i+1}.webp`);
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
