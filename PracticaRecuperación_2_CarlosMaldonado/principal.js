const topics = [
  "Tecnología",
  "Gaming",
  "Música",
  "Vlogs",
  "Cocina",
  "Fitness",
  "Viajes",
  "Moda",
  "Belleza",
  "Comedia",
  "ASMR",
  "Cine",
  "Noticias",
  "Ciencia",
  "Historia",
  "Negocios",
  "Emprendimiento",
  "Educación",
  "Misterios",
  "Automóviles",
];

const miniaturas = [
    "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
    "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    "https://img.youtube.com/vi/YbJOTdZBX1g/maxresdefault.jpg",
    "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
    "https://img.youtube.com/vi/ktvTqknDobU/maxresdefault.jpg",
    "https://img.youtube.com/vi/RgKAFK5djSk/maxresdefault.jpg",
    "https://img.youtube.com/vi/60ItHLz5WEA/maxresdefault.jpg",

];


const nombresCanales = [
  "ElRubius",
  "Vegetta777",
  "DimeNacho",
  "AuronPlay",
  "Wismichu",
  "Xoda",
  "La Diversión de Sofía",
  "Cocina Casera",
  "Damares",
  "JuegaGerman",
  "HolaSoyGerman",
  "Javi Oliveira",
  "Pablo Pueyo",
  "Viky Vins",
  "Ana Albiol",
  "Patri De La Vega",
  "TheGrefg",
  "LethalCrysis",
  "Ales López",
  "Samantha Hudson",
];

const nombresVideos = [
  "Cómo Crear Arte Abstracto",
  "Recetas Fáciles para Principiantes",
  "Los Secretos de la Ciencia Detrás de la Magia",
  "Explorando la Historia de Antártida",
  "Yoga para la Relajación Total",
  "10 Trucos para Mejorar tus Habilidades Fotográficas",
  "Cómo Hacer un Jardín Vertical en Casa",
  "Un Viaje por los Mejores Destinos del Mundo",
  "Música que Cambia tu Estado de Ánimo",
  "La Evolución de la Tecnología en 50 Años",
  "Preparando Comida Saludable en 30 Minutos",
  "Descubriendo el Arte del Origami",
  "Desmitificando los Misterios del Espacio",
  "Cómo Escribir una Novela en 30 Días",
  "Tutorial de Maquillaje para Principiantes",
  "Guía para Crear tu Propio Podcast",
  "Actividades Divertidas para Hacer en Familia",
  "Cómo Empezar un Negocio desde Casa",
  "Los Beneficios de la Meditación Diaria",
  "Entendiendo el Cambio Climático",
];

const imagenesCanales = [
    "https://randomuser.me/api/portraits/men/1.jpg",  // Hombre 1
    "https://randomuser.me/api/portraits/women/1.jpg", // Mujer 1
    "https://randomuser.me/api/portraits/men/2.jpg",  // Hombre 2
    "https://randomuser.me/api/portraits/women/2.jpg", // Mujer 2
    "https://randomuser.me/api/portraits/men/3.jpg",  // Hombre 3
    "https://randomuser.me/api/portraits/women/3.jpg", // Mujer 3
    "https://randomuser.me/api/portraits/men/4.jpg",  // Hombre 4
    "https://randomuser.me/api/portraits/women/4.jpg", // Mujer 4
    "https://randomuser.me/api/portraits/men/5.jpg",  // Hombre 5
    "https://randomuser.me/api/portraits/women/5.jpg"  // Mujer 5
  
];

document.addEventListener("DOMContentLoaded", () => {
  let lista = document.querySelector(".contenidoBarra");

  lista.innerHTML = "";

  let div = document.createElement("div");
  let span = document.createElement("span");
  span.textContent = "Todo";
  div.className = "topic activo";
  div.appendChild(span);
  lista.appendChild(div);

  topics.forEach((element) => {
    let div = document.createElement("div");
    let span = document.createElement("span");
    div.className = "topic";
    span.textContent = element;
    div.appendChild(span);
    lista.appendChild(div);
  });


  let contenedorMain = document.querySelector('.contenedorMain');
  contenedorMain.innerHTML = "";

  for (let index = 0; index < 6; index++) {
    

    const video = {
        miniatura: miniaturas[index],
        titulo: nombresVideos[index],
        canal: nombresCanales[index],
        visualizaciones: "1,1M de visualizaciones · hace 20 horas",
        canalImg: imagenesCanales[index]
    };
    
    
        const link = document.createElement('a')
        link.href = "video.html";
        
        const tarjeta = document.createElement('div');
        link.appendChild(tarjeta)
        tarjeta.className = 'tarjeta-video';
    
        tarjeta.innerHTML = `
            <div class="miniatura">
                <img src="${video.miniatura}" alt="miniatura">
            </div>
            <div class="informacion">
                <img class="imgCanal" src="${video.canalImg}" alt="Imagen del canal">
                <div class="texto">
                    <h3>${video.titulo}</h3>
                    <span class="canal">${video.canal}</span>
                    <span class="patrocinado">${video.visualizaciones}</span>
                </div>
                <div class="puntos">⋮</div>
            </div>
        `;

        contenedorMain.appendChild(link)

      }

      let reels = document.createElement('div')
      reels.className = "reels";
      reels.innerHTML= "<h2>Reels</h2>";
      let contenedorReels = document.createElement('div')
      contenedorReels.className = "contenedorReels";
      reels.appendChild(contenedorReels)

      contenedorMain.appendChild(reels)

      for (let index = 0; index < 6; index++) {
    

        const video = {
            miniatura: miniaturas[index],
            titulo: nombresVideos[index],
            visualizaciones: "1,1M Visualizaciones"
        };
        
        
        
            const reel = document.createElement('div');
            reel.className = 'tarjeta-reel';
        
            reel.innerHTML = `
                <div class="miniatura-reel">
                    <img src="${video.miniatura}" alt="miniatura">
                </div>
                <div class="informacion-reel">
                    <div class="texto">
                        <h3>${video.titulo}</h3>
                        <span class="patrocinado">${video.visualizaciones}</span>
                    </div>
                </div>
            `;
    
            contenedorReels.appendChild(reel)
    
          }

});



