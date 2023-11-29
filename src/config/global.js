export default {
  global: {
    componenteFormativo: 'Gestión de contenido digital',
    descripcionCurso:
      'El componente formativo permitirá que el aprendiz apropie conocimientos respecto a los medios digitales, la promoción y producción de contenido digital, la implementación de estrategias como el <em>Storytelling</em> y el <em>Hashtag</em>, aplicables en todos los campos y diferentes tipos de organizaciones que desean generar valor de marca a través del <em>marketing</em> digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Medios digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características de los medios digitales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de medios digitales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Plataformas digitales',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Promoción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de promoción',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Importancia de la promoción y su diferencia con el concepto de publicidad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Producción de contenido para medios digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'La parrilla de contenido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos y usos de la parrilla de contenidos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Cronograma de trabajo, calendarios y aplicabilidad de la parrilla de contenidos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'La edición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Técnicas y procedimiento de la edición',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Los protocolos de la edición',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'La corrección de errores: concepto y procedimiento',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Storytelling',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'La narrativa transmedia',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Protocolos',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Hashtag',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Simbología',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Importancia y alcance',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_012_623605.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. <em>Insights</em> y medios digitales.',
      referencia:
        'Rodríguez- Caro, O., Montoya-Restrepo, L. y Montoya-Restrepo, I. (2022). Reconocimiento del valor Storytelling y la Co-creación en la construcción de microsegmentos a través de la Estrategia de Marketing Digital. I+D Revista de Investigaciones,17(2), p. 1-17.',
      tipo: 'Documento en línea',
      link:
        'https://udi.edu.co/revistainvestigaciones/index.php/ID/article/view/337/438',
    },
    {
      tema:
        '2. <em>Influencers</em>, <em>storytelling</em> y emociones: <em>marketing</em> digital en el sector de las marcas de moda y el lujo.',
      referencia:
        'Velasco, A. (2021). <em>Influencers, storytelling</em> y emociones: <em>marketing</em> digital en el sector de las marcas de moda y el lujo. Vivat Academia, (154). ',
      tipo: 'Documento en línea',
      link: 'https://www.vivatacademia.net/index.php/vivat/article/view/1321',
    },
    {
      tema: '3. Navegando en las aguas digitales.',
      referencia:
        'Shum, Y. (2019). <em>Marketing digital. Navegando en aguas digitales</em>. Ediciones de la U.',
      tipo: 'Libro Digital ',
      link:
        'https://books.google.com.pe/books?id=RiwaEAAAQBAJ&printsec=frontcover&hl=es#v=onepage&q&f=false',
    },
    {
      tema: '4.  Comercio digital internacional.',
      referencia:
        'Martínez, J. y Rojas, F. (2017). <em>Comercio Digital Internacional</em>. Paraninfo.',
      tipo: 'Libro Digital',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=oDZuDwAAQBAJ&oi=fnd&pg=PA1&dq=Mart%C3%ADnez,+J.+Et+Al+(2017).+Comercio+Digital+Internacional.+Paraninfo+Ed,+Madrid.&ots=4QRdSb9dQb&sig=cg_nvsnH6uBaAmqG5e8SPkNuFvg#v=onepage&q=Mart%C3%ADnez%2C%20J.%20Et%20Al%20(2017).%20Comercio%20Digital%20Internacional.%20Paraninfo%20Ed%2C%20Madrid.&f=false',
    },
  ],
  glosario: [
    {
      termino: 'Comunidad <em>online</em>',
      significado:
        'conjunto de personas con presencia en medios digitales y redes sociales que comparten y dialogan en el entorno 2.0, generalmente, en torno a una marca o temática.',
    },
    {
      termino: 'Infografía',
      significado:
        'es una imagen que, con un conjunto de gráficos y textos, conforman un esquema visual que transmite, de forma rápida e intuitiva, conceptos e información.',
    },
    {
      termino: 'KPI',
      significado:
        'son las siglas de <em>key performance indicator</em>; son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia de social media marketing.',
    },
    {
      termino: '<em>Marketing</em> de contenidos',
      significado:
        'son estrategias de marketing enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios, principalmente, a través del <em>blog</em> y del social media <em>marketing</em>.',
    },
    {
      termino: 'Redes Sociales',
      significado: 'comunidad de personas que se forma en Internet.',
    },
    {
      termino: 'Sitio web',
      significado: 'conjunto de páginas web.',
    },
    {
      termino: '<em>Storytelling</em>',
      significado:
        'técnica de <em>marketing</em> cuyo objetivo es conectar y vincular al usuario directamente con el contenido contado en forma de historia gráfica o audiovisual.',
    },
    {
      termino: 'Webinars',
      significado:
        'también llamados <em>webminars</em>, son eventos o conferencias que tienen lugar en el medio <em>online</em>. Es una muy buena estrategia para enganchar nuevos seguidores en las redes sociales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adán, P., Arancibia, R., López, A., Ramírez, J. Sospedra, R. y Valladares, Á. (2017). B2S Business to Social. Marketing digital para empresas y personas. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Caldera, J. y Rodríguez, G. (2021). La narrativa transmedia en la publicidad: el caso de “LEGO”. Ámbitos Revista Internacional De Comunicación, (51), p. 45–59',
      link: 'https://doi.org/10.12795/Ambitos.2021.i51.03',
    },
    {
      referencia:
        'Lehnhoff, G. (2020). Manual de storytelling para comunicar el desarrollo. USAID y LAC Reads. ',
      link:
        'https://lacreads.org/sites/default/files/documents/manual_de_storytelling_para_el_desarrollo_validado_gl_pb.',
    },
    {
      referencia:
        'Martínez, J. y Rojas, F. (2017). Comercio Digital Internacional. Paraninfo.',
      link: '',
    },
    {
      referencia: 'Peiró, R. (2019). Marketing digital. Economipedia.',
      link: 'https://economipedia.com/definiciones/marketing-digital.html',
    },
    {
      referencia:
        'Rodríguez-Caro, O., Montoya-Restrepo, L. y Montoya-Restrepo, I. (2022). Reconocimiento del valor Storytelling y la Co-creación en la construcción de microsegmentos a través de la Estrategia de Marketing Digital. I+D Revista de Investigaciones,17(2), p. 1-17. ',
      link:
        'https://udi.edu.co/revistainvestigaciones/index.php/ID/article/view/337/438',
    },
    {
      referencia:
        'Segura, M. (2009), Plataformas educativas y redes docentes. Los desafíos de las TIC para el cambio educativo, p. 95-110.',
      link: '',
    },
    {
      referencia:
        'Shum, Y. (2019). Marketing digital. Navegando en aguas digitales. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Viteri, F., Herrera, L. y Bazurto, A. (2017). Las Tendencias del Marketing: Cuáles son y definiciones. Recimundo Revista Científica de la Investigación y el Conocimiento, 1(5), p. 974-988.',
      link: 'https://doi.org/10.26820/recimundo/1.5.2017.974-988',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Piezas gráficas [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=O7Ak6T34zro',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2021). Plan de medios [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=I2GzCNQl02I',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2021). Piezas publicitarias, material de promoción [Video]. YouTube. ',
      link: 'https://youtu.be/RGG-OLsce8c',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
