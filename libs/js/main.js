
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
  * Preloader and animations
  */
  if (!!$.prototype.scrollUp) {
    $.scrollUp();
  }
  /* Parallax Effects */
  if (!!$.prototype.enllax) {
      $(window).enllax();
  }



  



  (function($mainRoot, w, d) {
    function smoothScroll() {
      var smoothScrollArray = ["#exploreButton"];
      $.each(smoothScrollArray, function(index, element) {
        if($(element).length > 0) {
          $(element).on("click", function(event) {
            event.preventDefault();
            var hashValue = $(this.hash);
            $('html, body').stop().animate({
             scrollTop: $(hashValue).offset().top
            }, 800);
            return false;
          });
        }
      });
    }
    
    /* 1º Card Vídeo */
    function jumbotronInit() {
      var thisitem = $mainRoot.find("#jumbotronTrigger");
      var thisitemBuild = new YoutubeOverlayModule({
        sourceUrl: thisitem.attr("data-video"),
        triggerElement: "#" + thisitem.attr("id"),
        progressCallback: function() {
          console.log("Item activated");
        }
      });
      thisitemBuild.activateDeployment();
    }

    /* 2º Card Vídeo */
    function jumbotronInit1() {
      var thisitem = $mainRoot.find("#jumbotronTrigger1");
      var thisitemBuild = new YoutubeOverlayModule({
        sourceUrl: thisitem.attr("data-video"),
        triggerElement: "#" + thisitem.attr("id"),
        progressCallback: function() {
          console.log("Item activated");
        }
      });
      thisitemBuild.activateDeployment();
    }
  
    /* helps control the demo section for the page */
    function demoSectionInit() {
      var pe = $mainRoot.find("#demoSectionParent");
      var cp = pe.find("#demoCarousel");
      var cpConfig = {
        loop: false,
        rewind: true,
        nav: false,
        dots: false,
        responsive: {
          0: {
            items: 1,
            stagePadding: 20
          },
          768: {
            items: 3,
            stagePadding: 20
          },
          992: {
            items: 3,
            stagePadding: 20
          },
          1200: {
            items: 3,
            stagePadding: 20,
            dots: true
          }
        }
      };
  
      cp.owlCarousel(cpConfig);
      demoSectionInit.loadVideoPlayer.call(cp);
    }
    /* loads the youtube js overlay */
    demoSectionInit.loadVideoPlayer = function() {
      var $this = this;
      var citems = $this.find(".carouselItem");
      var len = citems.length;
  
      for (var i = 0; i < len; ++i) {
        citems.eq(i).attr("id", "item" + i);
      }
  
      citems.each(function(index, thisitem) {
        var thisitem = $(thisitem);
        var thisitemBuild = new YoutubeOverlayModule({
          sourceUrl: thisitem.attr("data-video"),
          triggerElement: "#" + thisitem.attr("id"),
          progressCallback: function() {
            console.log("Item activated");
          }
        });
        thisitemBuild.activateDeployment();
      });
    }
  
    function centralController() {
      smoothScroll();
      jumbotronInit();
      jumbotronInit1();
      demoSectionInit();
      footerSectionInit();
    }
  
    $(d).ready(centralController);
  })($("#outerBorder"), window, document);



  





  

  /**
   * Tooltips function
   */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  /**
   * Popovers function
   */
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })

  /**
   * Youtube function
   */
  var options = {
    youtubeId: 'PM2UCQ13yd8',
    fluid: true,
    width: '1000px',
    height: '300px',
    playerVars: {
        iv_load_policy: 3,
        showinfo: 0,
        modestbranding: 1,
        wmode: 'transparent',
    },
    showTime: true,
    chapters: [
      {
        time: '00:16',
        title: '01 - Abertura',
        id: 'id1',
    },
    {
        time: '00:40',
        title: '02 - Compartilhamento',
        id: 'id2',
        
    },
    {
        time: '13:09',
        title: '03 - Transporte individual',
        id: 'id3',
       
    },
    {
        time: '17:18',
        title: '04 - Transporte público',
        id: 'id4',
        text: '',
    },
    {
      time: '23:30',
      title: '05 - Logística',
      id: 'id5',
      text: '',
  },
    {
      time: '27:23',
      title: '06 - Encerramento',
      id: 'id6',
      text: '',
  },
    ],
  };

  YTC('#player1', options);

  /**
   * Youtube function
   */
  var options = {
    youtubeId: 'k5DohHUftSw',
    fluid: true,
    width: '1000px',
    height: '350px',
    playerVars: {
        iv_load_policy: 3,
        showinfo: 0,
        modestbranding: 1,
        wmode: 'transparent',
    },
    showTime: true,
    chapters: [
      {
        time: '00:16',
        title: '01 - Abertura',
        id: 'id1',
    },
    {
        time: '00:34',
        title: '02 - Tarifação',
        id: 'id2',
        
    },
    {
        time: '15:06',
        title: '03 - Instrumentos de medição',
        id: 'id3',
       
    },
    {
        time: '19:11',
        title: '04 - Instrumentos de medição e monitoramento ',
        id: 'id4',
        text: '',
    },
    {
      time: '25:24',
      title: '05 - Encerramento',
      id: 'id5',
      text: '',
  },
    
   
    ],
  };

  YTC('#player2', options);

  /**
   * Youtube function
   */
  var options = {
    youtubeId: 'Lm590eViTDg',
    fluid: true,
    width: '1000px',
    height: '350px',
    playerVars: {
        iv_load_policy: 3,
        showinfo: 0,
        modestbranding: 1,
        wmode: 'transparent',
    },
    showTime: true,
    chapters: [
      {
        time: '00:16',
        title: '01 - Abertura',
        id: 'id1',
    },
    {
        time: '00:36',
        title: '02 - Definição dos recarregadores',
        id: 'id2',
        
    },
    {
        time: '03:10',
        title: '03 - Tipos de recarregadores: lento, semirrápido e rápido',
        id: 'id3',
       
    },
    {
        time: '07:56',
        title: '04 - Modelos de tomadas',
        id: 'id4',
        text: '',
    },
    {
      time: '13:29',
      title: '05 - Tomada chade MÓ / GTB  ',
      id: 'id5',
      text: '',
  },
    {
      time: '17:22',
      title: '06 - Tomada Tesla',
      id: 'id6',
      text: '',
  },
  {
    time: '18:39',
    title: '07 - Encerramento',
    id: 'id7',
    text: '',
},
     
    ],
  };

  YTC('#player3', options);

  /**
   * Youtube function
   */
  var options = {
    youtubeId: 'gp-0smoOUqw',
    fluid: true,
    width: '1000px',
    height: '350px',
    playerVars: {
        iv_load_policy: 3,
        showinfo: 0,
        modestbranding: 1,
        wmode: 'transparent',
    },
    showTime: true,
    chapters: [
        {
            time: '00:16',
            title: '01 - Abertura',
            id: 'id1',
            text: '',
        },
        {
            time: '00:33',
            title: '02 - Projetos de instalação de baixa tensão',
            id: 'id2',
            text: '',
        },
        {
            time: '03:20',
            title: '03 - Normas aplicadas a projetos de baixa tensão em estações de recarga',
            id: 'id3',
            text: '',
        },
        {
            time: '07:05',
            title: '04 - Proteção contra surto',
            id: 'id4',
            text: '',
        },
        {
            time: '11:43',
            title: '05 - Dispositivos de proteção',
            id: 'id5',
            text: '',
        },
        {
          time: '17:03',
          title: '06 - Aterramento e equipotencialização',
          id: 'id6',
          text: '',
      },
      {
        time: '20:53',
        title: '07 - Condutores elétricos',
        id: 'id7',
        text: '',
    },
    {
      time: '25:14',
      title: '08 - Padrão de entrada',
      id: 'id8',
      text: '',
  },
  /*{
    time: '27:26',
    title: '09 - Revisão dos pontos relevantes dos tópicos abordados',
    id: 'id9',
    text: '',
},*/
{
  time: '27:38',
  title: '09 - Encerramento',
  id: 'id9',
  text: '',
},

       
        
    ],
  };

  YTC('#player4', options);





  var options = {
    youtubeId: 'pzGKzs3Kfds',
    fluid: true,
    width: '1000px',
    height: '350px',
    playerVars: {
        iv_load_policy: 3,
        showinfo: 0,
        modestbranding: 1,
        wmode: 'transparent',
    },
    showTime: true,
    chapters: [
        {
            time: '00:16',
            title: '01 - Abertura',
            id: 'id1',
            
        },
        {
            time: '04:45',
            title: '02 - Tipos de cabines primárias',
            id: 'id2',
           
        },
        {
            time: '09:06',
            title: '03 - Proteção e seletividade',
            id: 'id3',
            text: '',
        },
        {
            time: '13:09',
            title: '04 - Componentes e dispositivos para média tensão',
            id: 'id4',
          
        },
        {
            time: '21:09',
            title: '05 - Solicitação de acesso',
            id: 'id5',
            
        },
        {
            time: '26:24',
            title: '06 - Inspeção e ensaios em sistemas de média tensão',
            id: 'id6',
            text: '',
        },
        {
            time: '29:13',
            title: '07 - Encerramento',
            id: 'id7',
            text: '',
        },
       
    ],
  };

  YTC('#player5', options);







  var options = {
    youtubeId: 'j6INuXhaEgY',
    fluid: true,
    width: '1000px',
    height: '350px',
    playerVars: {
        iv_load_policy: 3,
        showinfo: 0,
        modestbranding: 1,
        wmode: 'transparent',
    },
    showTime: true,
    chapters: [
        {
            time: '00:16',
            title: '01 - Abertura',
            id: 'id1',
            
        },
        {
            time: '00:40',
            title: '02 - Protocolo de infraestrutura de comunicação',
            id: 'id2',
           
        },
        {
            time: '09:36',
            title: '03 - Normas de segurança dos dispositivos envolvidos em veículo elétrico',
            id: 'id3',
            text: '',
        },
        {
            time: '15:29',
            title: '04 - Eletroposto e-smart grid - energy city',
            id: 'id4',
          
        },
        {
            time: '22:01',
            title: '05 - Normas ISO 14443-2, ISO 7816-4, ISO 15118 e plataforma de serviços de mobilidade elétrica',
            id: 'id5',
            
        },
        {
            time: '25:55',
            title: '06 - Protocolo de roaming entre redes e nuvem de dados IEC 63119',
            id: 'id6',
            text: '',
        },
        {
            time: '29:59',
            title: '07 - Encerramento',
            id: 'id7',
            text: '',
        },
       
    ],
  };

  YTC('#player6', options);


















  /**
     * Accordion function
     */
  $(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").addClass("highlight");
    });
    
    // Highlight open collapsed element 
    $(".card-header .btn").click(function(){
        $(".card-header").not($(this).parents()).removeClass("highlight");
        $(this).parents(".card-header").toggleClass("highlight");
    });
  });

  /**
     * Darkmode function
     */
  new Darkmode({
    bottom: '32px',
    right: '32px',
    time: '0.5s',
    label: '🌓'
  }).showWidget();

  /**
   * Text Marker function
   */
  $('.marker-animation').markerAnimation({
    // background color
    "color": '#ece4e8',
    // position
    'padding_bottom': '0.3em',
    // thickness
    "thickness": '5em',
    // font weight
    "font_weight": 'normal',
    // enabled stripes
    'stripe': false,
    'stripe_thickness': 2
  });

  /**
   * Close Toaster
   */
  $('body').on('click', '.btn-close', function () {
    $('.toast').toast('hide');
  });

  /**
   * Fade-in function
   */
  // $(window).scroll(function () {
  //   //Fade-in
  //   $('.fade-in').each(function () {

  //     if (isScrolledIntoView($(this))) {
  //       $(this).css({
  //         'opacity': 1,
  //         'visibility': 'visible'
  //       });
  //     }

  //     else {
  //       $(this).css({
  //         'opacity': 0,
  //         'visibility': 'hidden'
  //       });
  //     }
  //   });
  // });

  // function isScrolledIntoView(elem) {
  //   var $elem = $(elem);
  //   var $window = $(window);

  //   var docViewTop = $window.scrollTop() + 420;
  //   var docViewBottom = docViewTop + $window.height();

  //   var elemTop = $elem.offset().top;
  //   var elemBottom = elemTop + $elem.height();

  //   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  // }

  /**
   * Tour Multimídia
   */
  // $(window).on('load', function () {
  //   $('.mapVisibleBtn_2').on('click', function () {
  //     $('body').itour({
  //       tourTitle: 'Tour',
  //       steps: [{
  //         title: 'Youtube Vídeo',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor sagittis, lobortis tortor tincidunt, sed lobortis.',
  //         name: 'mapVisibleElement_5',
  //         delayBefore: 0,
  //         delayAfter: 0,
  //         "during": function () {
  //           var videoTag = '<iframe width="320" height="180" src="https://www.youtube.com/embed/9wOQVcnPNMk" frameborder="0" allowfullscreen></iframe>';
  //           $(".hContImage").html(videoTag);
  //         }
  //       }, {
  //         title: 'Áudio',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor sagittis, lobortis tortor tincidunt, sed lobortis.',
  //         name: 'mapVisibleElement_6',
  //         "during": function () {
  //           var audioTag = '<div style="margin:15px;"><audio style="width:100%;" src="./libs/audio/industria4.mp3" preload="auto" controls></audio></div>';
  //           $(".hContImage").html(audioTag);
  //         }
  //       }, {
  //         image: './libs/img/iTour/values-3.png',
  //         title: 'Imagem',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor sagittis, lobortis tortor tincidunt, sed lobortis.',
  //         name: 'mapVisibleElement_7',
  //       }, {
  //         title: 'HTML5 Vídeo',
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dolor sagittis, lobortis tortor tincidunt, sed lobortis.',
  //         name: 'mapVisibleElement_8',
  //         "during": function () {
  //           var videoTag = '<video width="320" height="180" controls="controls" poster="video/duel.jpg"><source src="./libs/video/vinheta.mp4" type="video/webm"><track label="PT-BR" kind="subtitles" srclang="pt-br" src="./libs/video/Desafio01-Fullstack-Final.vtt" default=""></video>';
  //           $(".hContImage").html(videoTag);
  //         }
  //       }]
  //     });
  //     return false;
  //   });
  // })

  /**
   * Sobre o Tour
   */
  $(window).on('load', function () {
    $('.mapVisibleBtn_1').on('click', function () {
      $('body').itour({
        tourTitle: 'Etapas',
        tourMapVisible: true,
        steps: [{
          image: './libs/img/aula-1/1_1diedro.jpg',
          title: 'Procedimento',
          content: '<p>Projeção ortogonal no 1º Diedro.</p><p>Clique em "<strong>Próximo</strong>" para continuar.</p>',
          name: 'mapVisibleElement_1'
        }, {
          image: './libs/img/aula-1/2_1diedro.jpg',
          title: 'Projeção Completa',
          content: '<p>Projeção completa no 1º Diedro.</p><p>Clique em "<strong>Próximo</strong>" para continuar.</p>',
          name: 'mapVisibleElement_2',
        }, {
          title: 'Projeção completa com os nomes das vistas',
          content: '<p>Projeção completa com os nomes das vistas</p><p>1 - Vista Frontal (elevação)</p><p>2 - Vista Superior (planta)</p><p>3 - Vista Lateral esquerda</p><p>4 - Vista Lateral direita</p><p>5 - Vista Inferior</p><p>6 - Vista Posterior</p><p>Clique em "<strong>Fechar</strong>" para encerrar.</p>',
          name: 'mapVisibleElement_3',
        }]
      });
      return false;
    });
  })

  /**
   * Jarallax function
   */
  // object-fit polyfill run
  // objectFitImages();

  // /* init Jarallax */
  // jarallax(document.querySelectorAll('.jarallax'));

  // jarallax(document.querySelectorAll('.jarallax-keep-img'), {
  //   keepImg: true,
  // });

  /**
   * Áudio function
   */
  $(function () {
    $('audio').audioPlayer();
  });
  // $('audio').audioPlayer({
  //     classPrefix: 'audioplayer',
  //     strPlay: '',
  //     strPause: '',
  //     strVolume: ''
  // });

  /**
   * Cards Animation function
   */
  // $(document).ready(function () {
  //   var zindex = 10;

  //   $("div.card").click(function (e) {
  //     e.preventDefault();

  //     var isShowing = false;

  //     if ($(this).hasClass("d-card-show")) {
  //       isShowing = true
  //     }

  //     if ($("div.dashboard-cards").hasClass("showing")) {
  //       $("div.card.d-card-show")
  //         .removeClass("d-card-show");

  //       if (isShowing) {
  //         $("div.dashboard-cards")
  //           .removeClass("showing");
  //       } else {
  //         $(this)
  //           .css({ zIndex: zindex })
  //           .addClass("d-card-show");

  //       }

  //       zindex++;

  //     } else {
  //       $("div.dashboard-cards")
  //         .addClass("showing");
  //       $(this)
  //         .css({ zIndex: zindex })
  //         .addClass("d-card-show");

  //       zindex++;
  //     }

  //   });
  // });

  /**
   * Add highlight-spot-visited function
   */
  $('.modal').click(function () {
    var id = $(this).attr('id');
    id = $(this).attr("id").replace(/Modal-/g, "");
    $("#item-spot" + id).addClass("highlight-spot-visited");
  });

  /**
   * Zoom function
   */
  $('[data-fancybox]').fancybox({
    protect: true,
    mobile: {
      preventCaptionOverlap: !1,
      idleTime: !1,
      clickContent: function (t, e) {
        return "image" === t.type && "close";
      },
      clickSlide: function (t, e) {
        return "image" === t.type && "close";
      }
    }
  });

  /**
   * Block Video function
   */
  $(document).ready(function () {
    $('#video1').bind('contextmenu', function () {
      return false;
    });
  });
  $(document).ready(function () {
    $('#video2').bind('contextmenu', function () {
      return false;
    });
  });
  $(document).ready(function () {
    $('#video3').bind('contextmenu', function () {
      return false;
    });
  });

  /**
   * Stick function
   */
  window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    var sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
    } else {
      header_navbar.classList.remove("sticky");
      innerFabs.classList.remove('show');
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  // let navbarlinks = select('#navbar .scrollto', true)
  // const navbarlinksActive = () => {
  //   let position = window.scrollY + 200
  //   navbarlinks.forEach(navbarlink => {
  //     if (!navbarlink.hash) return
  //     let section = select(navbarlink.hash)
  //     if (!section) return
  //     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
  //       navbarlink.classList.add('active')
  //     } else {
  //       navbarlink.classList.remove('active')
  //     }
  //   })
  // }
  // window.addEventListener('load', navbarlinksActive)
  // onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Hero carousel indicators
   */
  // let heroCarouselIndicators = select("#hero-carousel-indicators")
  // let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  // heroCarouselItems.forEach((item, index) => {
  //   (index === 0) ?
  //     heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>" :
  //     heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  // });

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function (direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  // window.addEventListener('load', () => {
  //   let portfolioContainer = select('.portfolio-container');
  //   if (portfolioContainer) {
  //     let portfolioIsotope = new Isotope(portfolioContainer, {
  //       itemSelector: '.portfolio-item',
  //       layoutMode: 'fitRows'
  //     });

  //     let portfolioFilters = select('#portfolio-flters li', true);

  //     on('click', '#portfolio-flters li', function (e) {
  //       e.preventDefault();
  //       portfolioFilters.forEach(function (el) {
  //         el.classList.remove('filter-active');
  //       });
  //       this.classList.add('filter-active');

  //       portfolioIsotope.arrange({
  //         filter: this.getAttribute('data-filter')
  //       });
  //       portfolioIsotope.on('arrangeComplete', function () {
  //         AOS.refresh()
  //       });
  //     }, true);
  //   }

  // });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });



 

})()

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {
  };
}
/*----------------
Flip Card
------------------*/
$(function () {
  $("#card-1").flip({
    axis: "y",
    reverse: true,
    trigger: "click"
  });
  $("#card-2").flip({
    axis: "y",
    reverse: true,
    trigger: "click"
  });
  $("#card-3").flip({
    axis: "y",
    reverse: true,
    trigger: "click"
  });
  $("#card-4").flip({
    axis: "y",
    reverse: true,
    trigger: "click"
  });
  $("#card-5").flip({
    axis: "y",
    reverse: true,
    trigger: "click"
  });
  $("#card-6").flip({
    axis: "y",
    reverse: true,
    trigger: "click"
  });
  $("#card-7").flip({
    axis: "y",
    reverse: true,
    trigger: "click"
  });
  $("#card-8").flip({
    axis: "y",
    reverse: true,
    trigger: "click"
  });
  $("#card-9").flip({
    axis: "y",
    reverse: true,
    trigger: "click"
  });
  $("#card-10").flip({
    axis: "y",
    reverse: true,
    trigger: "click"
  });
  $("#card-11").flip({
    axis: "y",
    reverse: true,
    trigger: "click"
  });
  $("#card-12").flip({
    axis: "y",
    reverse: true,
    trigger: "click"
  });
  $("#card-13").flip({
    axis: "y",
    reverse: true,
    trigger: "click"
  });
});


//flipcard 

/*! flip - v1.1.2 - 2016-10-20
* https://github.com/nnattawat/flip
* Copyright (c) 2016 Nattawat Nonsung; Licensed MIT */
(function ($) {
  /*
   * Private attributes and method
   */

  // Function from David Walsh: http://davidwalsh.name/css-animation-callback licensed with http://opensource.org/licenses/MIT
  var whichTransitionEvent = function () {
    var t, el = document.createElement("fakeelement"),
      transitions = {
        "transition": "transitionend",
        "OTransition": "oTransitionEnd",
        "MozTransition": "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
      };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  };

  /*
   * Model declaration
   */
  var Flip = function ($el, options, callback) {
    // Define default setting
    this.setting = {
      axis: "y",
      reverse: false,
      trigger: "click",
      speed: 800,
      forceHeight: false,
      forceWidth: false,
      autoSize: true,
      front: '.front',
      back: '.back'
    };

    this.setting = $.extend(this.setting, options);

    if (typeof options.axis === 'string' && (options.axis.toLowerCase() === 'x' || options.axis.toLowerCase() === 'y')) {
      this.setting.axis = options.axis.toLowerCase();
    }

    if (typeof options.reverse === "boolean") {
      this.setting.reverse = options.reverse;
    }

    if (typeof options.trigger === 'string') {
      this.setting.trigger = options.trigger.toLowerCase();
    }

    var speed = parseInt(options.speed);
    if (!isNaN(speed)) {
      this.setting.speed = speed;
    }

    if (typeof options.forceHeight === "boolean") {
      this.setting.forceHeight = options.forceHeight;
    }

    if (typeof options.forceWidth === "boolean") {
      this.setting.forceWidth = options.forceWidth;
    }

    if (typeof options.autoSize === "boolean") {
      this.setting.autoSize = options.autoSize;
    }

    if (typeof options.front === 'string' || options.front instanceof $) {
      this.setting.front = options.front;
    }

    if (typeof options.back === 'string' || options.back instanceof $) {
      this.setting.back = options.back;
    }

    // Other attributes
    this.element = $el;
    this.frontElement = this.getFrontElement();
    this.backElement = this.getBackElement();
    this.isFlipped = false;

    this.init(callback);
  };

  /*
   * Public methods
   */
  $.extend(Flip.prototype, {
    flipDone: function (callback) {
      var self = this;
      // Providing a nicely wrapped up callback because transform is essentially async
      self.element.one(whichTransitionEvent(), function () {
        self.element.trigger('flip:done');
        if (typeof callback === 'function') {
          callback.call(self.element);
        }
      });
    },

    flip: function (callback) {
      if (this.isFlipped) {
        return;
      }

      this.isFlipped = true;

      var rotateAxis = "rotate" + this.setting.axis;
      this.frontElement.css({
        transform: rotateAxis + (this.setting.reverse ? "(-180deg)" : "(180deg)"),
        "z-index": "0"
      });

      this.backElement.css({
        transform: rotateAxis + "(0deg)",
        "z-index": "1"
      });
      this.flipDone(callback);
    },

    unflip: function (callback) {
      if (!this.isFlipped) {
        return;
      }

      this.isFlipped = false;

      var rotateAxis = "rotate" + this.setting.axis;
      this.frontElement.css({
        transform: rotateAxis + "(0deg)",
        "z-index": "1"
      });

      this.backElement.css({
        transform: rotateAxis + (this.setting.reverse ? "(180deg)" : "(-180deg)"),
        "z-index": "0"
      });
      this.flipDone(callback);
    },

    getFrontElement: function () {
      if (this.setting.front instanceof $) {
        return this.setting.front;
      } else {
        return this.element.find(this.setting.front);
      }
    },

    getBackElement: function () {
      if (this.setting.back instanceof $) {
        return this.setting.back;
      } else {
        return this.element.find(this.setting.back);
      }
    },

    init: function (callback) {
      var self = this;

      var faces = self.frontElement.add(self.backElement);
      var rotateAxis = "rotate" + self.setting.axis;
      var perspective = self.element["outer" + (rotateAxis === "rotatex" ? "Height" : "Width")]() * 2;
      var elementCss = {
        'perspective': perspective,
        'position': 'relative',
        'height':'auto',//adicionei height para poder fazer a responsividade do card
      };
      var backElementCss = {
        "transform": rotateAxis + "(" + (self.setting.reverse ? "180deg" : "-180deg") + ")",
        "z-index": "0",
        "position": "relative"
      };
      var faceElementCss = {
        "backface-visibility": "hidden",
        "transform-style": "preserve-3d",
        "position": "absolute",
        "z-index": "1"
      };

      if (self.setting.forceHeight) {
        faces.outerHeight(self.element.height());
      } else if (self.setting.autoSize) {
        faceElementCss.height = '100%';
      }

      if (self.setting.forceWidth) {
        faces.outerWidth(self.element.width());
      } else if (self.setting.autoSize) {
        faceElementCss.width = '100%';
      }

      // Back face always visible on Chrome #39
      if ((window.chrome || (window.Intl && Intl.v8BreakIterator)) && 'CSS' in window) {
        //Blink Engine, add preserve-3d to self.element
        elementCss["-webkit-transform-style"] = "preserve-3d";
      }


      faces.css(faceElementCss).find('*').css({
        "backface-visibility": "hidden"
      });

      self.element.css(elementCss);
      self.backElement.css(backElementCss);

      setTimeout(function () {
        
        var speedInSec = self.setting.speed / 1000 || 0.5;
        faces.css({
          "transition": "all " + speedInSec + "s ease-out"
        });
       
        if (typeof callback === 'function') {
          callback.call(self.element);
        }

      }, 20);

      self.attachEvents();
    },

    clickHandler: function (event) {
      if (!event) { event = window.event; }
      if (this.element.find($(event.target).closest('button, a, input[type="submit"]')).length) {
        return;
      }

      if (this.isFlipped) {
        this.unflip();
      } else {
        this.flip();
      }
    },

    hoverHandler: function () {
      var self = this;
      self.element.off('mouseleave.flip');

      self.flip();

      setTimeout(function () {
        self.element.on('mouseleave.flip', $.proxy(self.unflip, self));
        if (!self.element.is(":hover")) {
          self.unflip();
        }
      }, (self.setting.speed + 150));
    },

    attachEvents: function () {
      var self = this;
      if (self.setting.trigger === "click") {
        self.element.on($.fn.tap ? "tap.flip" : "click.flip", $.proxy(self.clickHandler, self));
      } else if (self.setting.trigger === "hover") {
        self.element.on('mouseenter.flip', $.proxy(self.hoverHandler, self));
        self.element.on('mouseleave.flip', $.proxy(self.unflip, self));
      }
    },

    flipChanged: function (callback) {
      this.element.trigger('flip:change');
      if (typeof callback === 'function') {
        callback.call(this.element);
      }
    },

    changeSettings: function (options, callback) {
      var self = this;
      var changeNeeded = false;

      if (options.axis !== undefined && self.setting.axis !== options.axis.toLowerCase()) {
        self.setting.axis = options.axis.toLowerCase();
        changeNeeded = true;
      }

      if (options.reverse !== undefined && self.setting.reverse !== options.reverse) {
        self.setting.reverse = options.reverse;
        changeNeeded = true;
      }

      if (changeNeeded) {
        var faces = self.frontElement.add(self.backElement);
        var savedTrans = faces.css(["transition-property", "transition-timing-function", "transition-duration", "transition-delay"]);

        faces.css({
          transition: "none"
        });

        // This sets up the first flip in the new direction automatically
        var rotateAxis = "rotate" + self.setting.axis;

        if (self.isFlipped) {
          self.frontElement.css({
            transform: rotateAxis + (self.setting.reverse ? "(-180deg)" : "(180deg)"),
            "z-index": "0"
          });
        } else {
          self.backElement.css({
            transform: rotateAxis + (self.setting.reverse ? "(180deg)" : "(-180deg)"),
            "z-index": "0"
          });
        }
        // Providing a nicely wrapped up callback because transform is essentially async
        setTimeout(function () {
          faces.css(savedTrans);
          self.flipChanged(callback);
        }, 0);
      } else {
        // If we didnt have to set the axis we can just call back.
        self.flipChanged(callback);
      }
    }

  });

  /*
   * jQuery collection methods
   */
  $.fn.flip = function (options, callback) {
    if (typeof options === 'function') {
      callback = options;
    }

    if (typeof options === "string" || typeof options === "boolean") {
      this.each(function () {
        var flip = $(this).data('flip-model');

        if (options === "toggle") {
          options = !flip.isFlipped;
        }

        if (options) {
          flip.flip(callback);
        } else {
          flip.unflip(callback);
        }
      });
    } else {
      this.each(function () {
        if ($(this).data('flip-model')) { // The element has been initiated, all we have to do is change applicable settings
          var flip = $(this).data('flip-model');

          if (options && (options.axis !== undefined || options.reverse !== undefined)) {
            flip.changeSettings(options, callback);
          }
        } else { // Init
          $(this).data('flip-model', new Flip($(this), (options || {}), callback));
        }
      });
    }

    return this;
  };

}(jQuery));


