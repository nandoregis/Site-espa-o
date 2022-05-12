$(function() {

    // Evento de click do menu mobile

    $('nav.menu-mobile img').click(function() {
        
        $('nav.menu-mobile ul').slideToggle();
        $('nav.menu-mobile ul').toggleClass('ative-mobile');

        let myClass = document.querySelector('nav.menu-mobile ul');
        let img = document.querySelector('nav.menu-mobile img');

        if(myClass.classList == 'ative-mobile') {
            img.setAttribute('src','./img/icon-close.svg');
        }else {
            img.setAttribute('src','./img/icon-hamburger.svg');

        }
    });

    // Evento da pagina destino---

    let planets = document.querySelectorAll('.grupo-satelites img');
    let planetCont = document.getElementById('planet-content');
    // arrPlanet = {
    //     europa: 'Europa é o sonho de um amante de inverno. Com uma superfície gelada, é perfeito para um pouco de patinação no gelo, curling, hóquei ou um simples relaxamento em sua confortável cabine de inverno.Avg. distância628 mil. kmEst. tempo de viagem 3 anos',
    //     lua: 'Uma viagem relaxante perfeita para ajudar a recuperar a perspectiva e voltar revigorado. Enquanto estiver lá, conheça um pouco da história visitando os locais de pouso da Luna 2 e da Apollo 11.Avg. distância384.400 kmEst. tempo de viagem3 dias',
    //     marte: 'Você precisará deles para enfrentar o Monte Olimpo, a montanha planetária mais alta do nosso sistema solar. É duas vezes e meia o tamanho do Everest!Avg. distância 225 mil. kmEst. tempo de viagem 9 meses',
    //     titan: 'Titan é um lar longe de casa (apenas algumas centenas de graus mais frio!). Como bônus, você obtém vistas impressionantes dos Anéis de Saturno.Avg. distância1,6 bil. kmEst. tempo de viagem 7 anos'
    // };

    arrPlanet2 = [
        'Europa é o sonho de um amante de inverno. Com uma superfície gelada, é perfeito para um pouco de patinação no gelo, curling, hóquei ou um simples relaxamento em sua confortável cabine de inverno.Avg. distância628 mil. kmEst. tempo de viagem 3 anos',
        'Uma viagem relaxante perfeita para ajudar a recuperar a perspectiva e voltar revigorado. Enquanto estiver lá, conheça um pouco da história visitando os locais de pouso da Luna 2 e da Apollo 11.Avg. distância384.400 kmEst. tempo de viagem3 dias',
        'Você precisará deles para enfrentar o Monte Olimpo, a montanha planetária mais alta do nosso sistema solar. É duas vezes e meia o tamanho do Everest!Avg. distância 225 mil. kmEst. tempo de viagem 9 meses',
        'Titan é um lar longe de casa (apenas algumas centenas de graus mais frio!). Como bônus, você obtém vistas impressionantes dos Anéis de Saturno.Avg. distância1,6 bil. kmEst. tempo de viagem 7 anos'
    ];
    for(let i = 0; i< planets.length; i++) {
        
        planets[i].addEventListener('mouseover', function() {
            planetCont.innerHTML = arrPlanet2[i];
            planets[i].classList.add('animate-gravity');
        });
    };

    // Evento da pagina equipe

    // evento do botão de abrir menu
    $('.btn-show-equipe').click(function() {
        
        if($('.box-menu-equipe').hasClass('equipe-up')) {
            $('.box-menu-equipe').removeClass('equipe-up');
            $('.btn-show-equipe i').removeClass('fa-angle-down');
            $('.btn-show-equipe i').addClass('fa-angle-up');
            
        }else {
            $('.box-menu-equipe').addClass('equipe-up');
            $('.btn-show-equipe i').removeClass('fa-angle-up');
            $('.btn-show-equipe i').addClass('fa-angle-down');
        } 
    });

    // equipe e evento de click para selecionar pessoa

    let btnEquipe = document.querySelectorAll('nav.menu-equipe li');
    let infoPessoa = document.getElementById('sobre-pessoa');
    let imgPessoa = document.querySelector('.img-pessoa');
    let boxInfo = document.querySelector('.conter-info');
    
    let arrEquipe = [
        [
            'Anousheh Ansari é uma engenheira iraniana americana e co-fundadora da Prodea Systems. Ansari foi a quarta turista espacial autofinanciada, a primeira mulher autofinanciada a voar para a ISS e a primeira iraniana no espaço.',
            'Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA. Ele foi lançado ao espaço pela terceira vez como comandante da Crew Dragon Demo-2.',
            'Mark Richard Shuttleworth é o fundador e CEO da Canonical, a empresa por trás do sistema operacional Ubuntu baseado em Linux. Shuttleworth se tornou o primeiro sul-africano a viajar para o espaço como turista espacial.',
            'Conheça seu piloto da tripulação, Victor GloverPilot, no primeiro voo operacional do SpaceX Crew Dragon para a Estação Espacial Internacional. Glover é um comandante da Marinha dos EUA, onde pilota um F/A-18. Ele foi um membro da tripulação da Expedição 64 e serviu como engenheiro de voo de sistemas de estação.'
        ],
        [
           'image-anousheh-ansari.png',
           'image-douglas-hurley.png',
           'image-mark-shuttleworth.png',
           'image-victor-glover.png'

        ]
];
    
    for(let i =0; i < btnEquipe.length; i++) {

        btnEquipe[i].addEventListener('click', function () {
            infoPessoa.style.opacity = '0';

            btnEquipe.forEach(item => {
                item.style.fontWeight = 'normal';
            });

            btnEquipe[i].style.fontWeight = 'bold';
            imgPessoa.innerHTML = `
                <img src="./img/crew/${arrEquipe[1][i]}" alt="">
            `;
            boxInfo.classList.add('ative-reval');
            infoPessoa.innerHTML= arrEquipe[0][i];
            infoPessoa.classList.add('text-fade');

            setTimeout(() => {
                infoPessoa.classList.remove('text-fade');
                infoPessoa.style.opacity = '1';
                boxInfo.classList.remove('ative-reval');
            }, 1100);

        });
    }

});
