const image = name => `/img/${name}`
const thumb = name => `/img/thumbs/${name}.webp`
const projects = [
  { title:'Espectrómetro Web', category:'DATOS / BLUETOOTH', year:'2025', description:'Una aplicación para visualizar gráficamente los datos de un espectrómetro de luz mediante Bluetooth.', tech:['React','Node.js','MySQL'], thumbnail:thumb('espectrometronew'), images:['espectrometronew.png','espectrometro1.jpeg','espectrometro2.png','espectrometro3.jpeg'].map(image) },
  { title:'Jarvis', category:'ASISTENTE / PRODUCTIVIDAD', year:'2026', description:'Un asistente para organizar actividades, gestionar ingresos y gastos, y recordar eventos.', tech:['React','Node.js','MongoDB'], thumbnail:thumb('jarvis3'), images:['jarvis3.png','jarvis1.png','jarvis2.png','jarvis4.png','jarvis5.png','jarvis6.png','jarvis7.png'].map(image) },
  { title:'Stremio (fork)', category:'ENTRETENIMIENTO / WEB', year:'2026', description:'Una aplicación web en desarrollo para visualizar series y películas desde distintos dispositivos.', tech:['Tailwind','JavaScript','MongoDB'], thumbnail:thumb('Stremio1'), images:['Stremio1.png','Stremio2.png','Stremio3.png'].map(image) },
  { title:'Portfolio interactivo', category:'PORTAFOLIO / WEB', year:'2024', description:'Un sitio web interactivo con animaciones y una experiencia de usuario cuidada.', tech:['HTML5','CSS3','JavaScript'], thumbnail:thumb('portfolio-actual'), images:['portfolio-actual-desktop.webp','portfolio-actual-mobile.webp'].map(image) },
  { title:'BLISS', category:'PLATAFORMA / RESERVAS', year:'2023', description:'Una plataforma para descubrir y puntuar salones de belleza, adquirir productos y hacer reservas.', tech:['HTML5','CSS3','JavaScript','MongoDB'], thumbnail:thumb('bliss'), images:['bliss.png','bliss1.png','bliss2.png','bliss3.png'].map(image) },
]

export default projects
