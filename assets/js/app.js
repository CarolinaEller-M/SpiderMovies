const filmes = {
  "destaques": [
    {
      "id": 1,
      "titulo": "Venom: Tempo de Carnificina",
      "duracao": "120 min",
      "genero": "Ação",
      "imagem": "assets/img/home1.webp",
      "subtitulo": "Marvel Universe",
      "detalhes": {
        "sinopse": "O jornalista Eddie Brock ganha superpoderes quando seu corpo se funde a um simbionte alienígena.",
        "diretor": "Andy Serkis",
        "elenco": ["Tom Hardy", "Woody Harrelson", "Michelle Williams"],
        "ano": 2021,
        "classificacao": "14 anos",
        "trailer": "assets/vid/venom.mp4"
      }
    },
    {
      "id": 2,
      "titulo": "Top Gun: Maverick",
      "duracao": "130 min",
      "genero": "Ação",
      "imagem": "assets/img/home2.jpg",
      "subtitulo": "Tom Cruise",
      "detalhes": {
        "sinopse": "Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete Mitchell está de volta.",
        "diretor": "Joseph Kosinski",
        "elenco": ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
        "ano": 2022,
        "classificacao": "12 anos",
        "trailer": "https://www.youtube.com/embed/giXco2jaZ_4"
      }
    },
    {
      "id": 3,
      "titulo": "Vingadores: Ultimato",
      "duracao": "181 min",
      "genero": "Ação",
      "imagem": "assets/img/home3.webp",
      "subtitulo": "Marvel Universe",
      "detalhes": {
        "sinopse": "Os Vingadores se reúnem novamente para desfazer as ações de Thanos e restaurar a ordem no universo.",
        "diretor": "Anthony e Joe Russo",
        "elenco": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
        "ano": 2019,
        "classificacao": "12 anos",
        "trailer": "https://www.youtube.com/embed/g6ng8iy-l0U"
      }
    },
    {
      "id": 4,
      "titulo": "Avatar: O Caminho da Água",
      "duracao": "192 min",
      "genero": "Aventura",
      "imagem": "assets/img/home4.jpg",
      "subtitulo": "Century Studios",
      "detalhes": {
        "sinopse": "Jake Sully vive com sua nova família em Pandora, mas uma ameaça familiar retorna para terminar o que começou.",
        "diretor": "James Cameron",
        "elenco": ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        "ano": 2022,
        "classificacao": "12 anos",
        "trailer": "https://www.youtube.com/embed/d9MyW72ELq0"
      }
    },
    {
      "id": 5,
      "titulo": "Homem-Aranha: De Volta ao Lar",
      "duracao": "133 min",
      "genero": "Ação",
      "imagem": "assets/img/home5.webp",
      "subtitulo": "Marvel Universe",
      "detalhes": {
        "sinopse": "Peter Parker equilibra sua vida como estudante com ser o Homem-Aranha, sob a orientação de Tony Stark.",
        "diretor": "Jon Watts",
        "elenco": ["Tom Holland", "Michael Keaton", "Robert Downey Jr."],
        "ano": 2017,
        "classificacao": "12 anos",
        "trailer": "https://www.youtube.com/embed/2x-2iYxgMFU"
      }
    }
  ],
    "lancamentos": [
      {
        "id": 6,
        "titulo": "Venom",
        "duracao": "120 min",
        "genero": "Ação",
        "imagem": "assets/img/m1.jpg",
        "detalhes": {
          "sinopse": "O jornalista Eddie Brock ganha superpoderes quando seu corpo se funde a um simbionte alienígena.",
          "diretor": "Ruben Fleischer",
          "elenco": ["Tom Hardy", "Michelle Williams", "Riz Ahmed"],
          "ano": 2018,
          "classificacao": "14 anos"
        }
      },
      {
        "id": 7,
        "titulo": "Dunkirk",
        "duracao": "106 min",
        "genero": "Guerra/Drama",
        "imagem": "assets/img/m2.jpg",
        "detalhes": {
          "sinopse": "Soldados aliados da Bélgica, do Império Britânico e da França são cercados pelo exército alemão e evacuados durante uma feroz batalha na Segunda Guerra Mundial.",
          "diretor": "Christopher Nolan",
          "elenco": ["Fionn Whitehead", "Tom Hardy", "Harry Styles"],
          "ano": 2017,
          "classificacao": "12 anos"
        }
      },
      {
        "id": 8,
        "titulo": "Batman vs Superman",
        "duracao": "151 min",
        "genero": "Ação",
        "imagem": "assets/img/m3.jpg",
        "detalhes": {
          "sinopse": "Temendo que as ações de Superman fiquem fora de controle, Batman enfrenta o Homem de Aço enquanto o mundo tenta decidir que tipo de herói realmente precisa.",
          "diretor": "Zack Snyder",
          "elenco": ["Ben Affleck", "Henry Cavill", "Gal Gadot"],
          "ano": 2016,
          "classificacao": "12 anos"
        }
      },
      {
        "id": 9,
        "titulo": "John Wick 2",
        "duracao": "122 min",
        "genero": "Ação",
     "imagem": "assets/img/m4.jpg",
        "detalhes": {
          "sinopse": "Forçado a cumprir uma promessa antiga, John Wick viaja a Roma e enfrenta alguns dos assassinos mais perigosos do mundo.",
          "diretor": "Chad Stahelski",
          "elenco": ["Keanu Reeves", "Riccardo Scamarcio", "Ruby Rose"],
          "ano": 2017,
          "classificacao": "16 anos"
        }
      },
      {
        "id": 10,
        "titulo": "Aquaman",
        "duracao": "143 min",
        "genero": "Ação",
      "imagem": "assets/img/m5.jpg",
        "detalhes": {
          "sinopse": "Arthur Curry descobre que é o herdeiro do reino subaquático de Atlântida e precisa assumir seu destino como Aquaman.",
          "diretor": "James Wan",
          "elenco": ["Jason Momoa", "Amber Heard", "Willem Dafoe"],
          "ano": 2018,
          "classificacao": "12 anos"
        }
      },
      {
        "id": 11,
        "titulo": "Pantera Negra",
        "duracao": "134 min",
        "genero": "Ação",
        "imagem": "assets/img/m6.jpg",
        "detalhes": {
          "sinopse": "T'Challa retorna à nação africana de Wakanda para assumir seu lugar como rei, mas é desafiado por um antigo adversário.",
          "diretor": "Ryan Coogler",
          "elenco": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
          "ano": 2018,
          "classificacao": "12 anos"
        }
      },
      {
        "id": 12,
        "titulo": "Thor: O Mundo Sombrio",
        "duracao": "112 min",
        "genero": "Ação",
        "imagem": "assets/img/m7.jpg",
        "detalhes": {
          "sinopse": "Thor precisa salvar o universo de uma ameaça sombria vinda de antes da criação do universo.",
          "diretor": "Alan Taylor",
          "elenco": ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston"],
          "ano": 2013,
          "classificacao": "12 anos"
        }
      },
      {
        "id": 13,
        "titulo": "Bumblebee",
        "duracao": "114 min",
        "genero": "Ação",
        "imagem": "assets/img/m8.png",
        "detalhes": {
          "sinopse": "Refugiado em um ferro-velho na Califórnia, Bumblebee é descoberto por uma jovem prestes a completar 18 anos.",
          "diretor": "Travis Knight",
          "elenco": ["Hailee Steinfeld", "John Cena", "Jorge Lendeborg Jr."],
          "ano": 2018,
          "classificacao": "10 anos"
        }
      },
      {
        "id": 14,
        "titulo": "Máquinas Mortais",
        "duracao": "128 min",
        "genero": "Ação",
        "imagem": "assets/img/m9.jpg",
        "detalhes": {
          "sinopse": "Em um mundo pós-apocalíptico, cidades móveis devoram umas às outras em busca de recursos. Uma jovem rebelde busca vingança e descobre uma conspiração.",
          "diretor": "Christian Rivers",
          "elenco": ["Hera Hilmar", "Robert Sheehan", "Hugo Weaving"],
          "ano": 2018,
          "classificacao": "12 anos"
        }
      },
      {
        "id": 15,
        "titulo": "Anjos da Noite: Guerras de Sangue",
        "duracao": "91 min",
        "genero": "Ação",
        "imagem": "assets/img/m10.jpg",
        "detalhes": {
          "sinopse": "Selene luta para encerrar a guerra eterna entre os clãs de Lycans e Vampiros, mesmo que isso custe sua vida.",
          "diretor": "Anna Foerster",
          "elenco": ["Kate Beckinsale", "Theo James", "Tobias Menzies"],
          "ano": 2016,
          "classificacao": "16 anos"
        }
      },
      {
        "id": 16,
        "titulo": "The Walking Dead",
        "duracao": "45 min (por episódio)",
        "genero": "Drama/Terror",
       "imagem": "assets/img/m11.webp",
        "detalhes": {
          "sinopse": "Um grupo de sobreviventes luta para permanecer vivo após um apocalipse zumbi que devastou o mundo.",
          "diretor": "Frank Darabont",
          "elenco": ["Andrew Lincoln", "Norman Reedus", "Danai Gurira"],
          "ano": 2010,
          "classificacao": "18 anos"
        }
      },
      {
        "id": 17,
        "titulo": "Velozes e Furiosos 9",
        "duracao": "145 min",
        "genero": "Ação",
        "imagem": "assets/img/m12.jpg",
        "detalhes": {
          "sinopse": "Dom Toretto e sua equipe enfrentam o irmão desaparecido de Dom, Jakob, um assassino habilidoso e motorista de elite.",
          "diretor": "Justin Lin",
          "elenco": ["Vin Diesel", "John Cena", "Michelle Rodriguez"],
          "ano": 2021,
          "classificacao": "14 anos"
        }
      }
    ]
  };
  

function carregarDestaques() {
  const carouselInner = document.getElementById('carousel-inner');
  carouselInner.innerHTML = '';

  filmes.destaques.forEach((filme, index) => {
      const carouselItem = document.createElement('div');
      carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
      carouselItem.setAttribute('data-bs-interval', index % 2 === 0 ? '2500' : '2000');
      
      carouselItem.innerHTML = `
          <img src="${filme.imagem}" class="d-block w-100" style="height: 80vh; object-fit: cover;" alt="${filme.titulo}">
          <div class="carousel-caption d-none d-md-block text-start" id="home-text">
              <span>${filme.subtitulo}</span>
              <h1>${filme.titulo.split(' ').slice(0, 2).join(' ')} <br> ${filme.titulo.split(' ').slice(2).join(' ')}</h1>
              <a href="detalhes.html?id=${filme.id}" class="btn btn-primary">Assistir</a>
          </div>
      `;
      
      carouselInner.appendChild(carouselItem);
  });
}
 
function carregarLancamentos() {
    const container = document.querySelector('#movies .row.g-4');
    container.innerHTML = ''; 

    filmes.lancamentos.forEach(filme => {
        const col = document.createElement('div');
        col.className = 'col-md-2 col-6';
        col.innerHTML = `
            <div class="card h-100 bg-dark text-secondary border-0">
                <div class="img-container overflow-hidden rounded">
                    <img class="card-img-top w-100" style="height: 300px; object-fit: cover;"
                        src="${filme.imagem}" alt="${filme.titulo}">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-white">${filme.titulo}</h5>
                    <p class="card-text">${filme.duracao} | ${filme.genero.toLowerCase()}</p>
                </div>
            </div>
        `;
        col.addEventListener('click', () => {
            window.location.href = `detalhes.html?id=${filme.id}`;
        });
        
        container.appendChild(col);
    });
}

function carregarDetalhes() {
  if (window.location.pathname.includes('detalhes.html')) {
      const urlParams = new URLSearchParams(window.location.search);
      const filmeId = parseInt(urlParams.get('id'));

      let filme = null;
      for (const categoria in filmes) {
          filme = filmes[categoria].find(f => f.id === filmeId);
          if (filme) break;
      }
      
      if (filme) {
          document.title = `Spider | ${filme.titulo}`;
          const container = document.createElement('div');
          container.className = 'container py-5 mt-5';
          container.innerHTML = `
              <div class="row">
                  <div class="col-md-4">
                      <img src="${filme.imagem}" class="img-fluid rounded" alt="${filme.titulo}">
                  </div>
                  <div class="col-md-8 text-white">
                      <h1>${filme.titulo}</h1>
                      <p><strong>Duração:</strong> ${filme.duracao}</p>
                      <p><strong>Gênero:</strong> ${filme.genero}</p>
                      <p><strong>Classificação:</strong> ${filme.detalhes.classificacao}</p>
                      <p><strong>Ano:</strong> ${filme.detalhes.ano}</p>
                      <p><strong>Diretor:</strong> ${filme.detalhes.diretor}</p>
                      <p><strong>Elenco:</strong> ${filme.detalhes.elenco.join(', ')}</p>
                      <h3 class="mt-4">Sinopse</h3>
                      <p>${filme.detalhes.sinopse}</p>
                      
                      ${filme.detalhes.trailer ? `
                          <h3 class="mt-4">Trailer</h3>
                          <div class="ratio ratio-16x9">
                              <iframe src="${filme.detalhes.trailer}" allowfullscreen></iframe>
                          </div>
                      ` : ''}
                      
                      <a href="index.html" class="btn btn-primary mt-5">Voltar</a>
                  </div>
              </div>
          `;
          document.body.appendChild(container);
      } else {
          document.body.innerHTML = `
              <div class="container py-5 mt-5 text-center text-white">
                  <h1>Filme não encontrado</h1>
                  <a href="index.html" class="btn btn-primary mt-5">Voltar</a>
              </div>
          `;
      }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
      carregarDestaques();  
      carregarLancamentos(); 
  } else if (window.location.pathname.includes('detalhes.html')) {
      carregarDetalhes();
  }
});