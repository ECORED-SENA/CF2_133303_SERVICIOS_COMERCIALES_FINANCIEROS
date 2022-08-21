export default {
  global: {
    componenteFormativo: 'Gestión de la información y la comunicación',
    descripcionCurso:
      'El componente formativo permitirá que el aprendiz apropie conocimientos de gestión de la información, matemática financiera, contabilidad básica, análisis financiero, así como técnicas de venta y comunicación; aplicables en todos los campos y diferentes tipos de organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-7.png'),
      },
      {
        clases: ['banner-principal-decorativo-8', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-8.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de información',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Métodos de recolección de información',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipo de base de datos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Ciclo vital del documento',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Matemática financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Interés simple y compuesto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Conversión de tasas de interés',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Contabilidad básica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de registros contables',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Clasificación de los estados financieros',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Análisis financiero',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Plataformas de consultas del sector financiero',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Centrales de riesgo',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Métodos de ventas',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Estrategias de ventas',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Entrevista comercial',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Protocolo de servicio',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Evaluación del servicio',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Canales de comunicación organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos de canales de comunicación',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Propuesta comercial',
            hash: 't_5_2',
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
      tema: 'Contabilidad básica',
      referencia:
        'Moreno, F., J. (2014). <em>Contabilidad básica.</em> Grupo Editorial Patria, S.A. de C.V.',
      tipo: 'Ebook',
      link: 'https://editorialpatria.com.mx/pdffiles/9786074386189.pdf',
    },
    {
      tema: 'Análisis financiero',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). <em>Ciclo contable.</em> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=fKYnZt2xTs4&list=PLkc5n6npRWkjKKk9kQvo7hrdPEmUuWoN8&index=4',
    },
    {
      tema: 'Estrategias de ventas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). <em>Servicio al cliente.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dB6FOVF-wWs',
    },
  ],
  glosario: [
    {
      termino: 'Análisis financiero',
      significado:
        'estudio minucioso que se realiza a la información contable de una organización, de las cuales se determinan unos indicadores, que nos indican la realidad de la organización.',
    },
    {
      termino: 'Centrales de riesgo',
      significado:
        'vigila y reporta la información respecto al comportamiento crediticio de las persona u organizaciones.',
    },
    {
      termino: 'Cliente',
      significado:
        'persona o entidad que compra los bienes y servicios que ofrece una empresa (Quiroa, 2019).',
    },
    {
      termino: 'Contabilidad',
      significado:
        'parte de las finanzas que estudia las distintas partidas que reflejan los movimientos económicos y financieros de una empresa o entidad (Gil, 2015).',
    },
    {
      termino: 'Encuesta',
      significado:
        'instrumento de recolección de datos para posteriormente ser analizados.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'reflejan las operaciones o transacciones diarias que demuestra una empresa en sus actividades, siendo resumidas en la estructura exhibida como estado financiero. Los estados financieros se alimentan de la información suministrada por los libros contables (Elizalde, 2019).',
    },
    {
      termino: 'Indicadores financieros',
      significado:
        'un análisis o estudio financiero se llega a basar en el cálculo de los indicadores de las finanzas los mismos que son expresados por la eficiencia, solvencia, rendimiento, liquidez, endeudamiento, y la rentabilidad que posee la entidad (Moreno, 2014).',
    },
    {
      termino: 'Servicio',
      significado:
        'en el ámbito económico es la acción o conjunto de actividades destinadas a satisfacer una determinada necesidad de los clientes, brindando un producto inmaterial y personalizado (Sánchez, 2016).',
    },
    {
      termino: 'Riesgo',
      significado: 'la posibilidad de un suceso no deseado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1971). Decreto 410 de 1971. Por el cual se expide el Código de Comercio. (27 de marzo de 1971).',
      link: '',
    },
    {
      referencia:
        'Elizalde, L. (2019). <em>Los estados financieros y las políticas contables.</em> Escuela Superior Politécnica del Chimborazo.',
      link:
        'https://www.593dp.com/index.php/593_Digital_Publisher/article/view/159',
    },
    {
      referencia: 'Gil, S. (2015). Contabilidad. Economipedia.',
      link: 'https://economipedia.com/definiciones/contabilidad.html',
    },
    {
      referencia:
        'Marcillo, C., C., Aguilar, G., C., y Gutiérrez, J., N. (2021). Análisis financiero: una herramienta clave para la toma de decisiones de gerencia. Digital Publisher CEIT.',
      link:
        'https://www.593dp.com/index.php/593_Digital_Publisher/article/view/544',
    },
    {
      referencia:
        'Moreno, F., J. (2014). Contabilidad básica. Grupo Editorial Patria, S.A. de C.V.',
      link: '',
    },
    {
      referencia:
        'Oficina Nacional de Normalización. (2015). NC ISO 9000:2015. <em>Sistemas de gestión de la calidad. Fundamentos y vocabulario.</em> Oficina Nacional de Normalización.',
      link: '',
    },
    {
      referencia: 'Palomo, M., M. (2014). Atención al cliente. Paraninfo S.A.',
      link: '',
    },
    {
      referencia: 'Peiró, R. (2020). Calidad. Economipedia.',
      link: 'https://economipedia.com/definiciones/calidad-2.html',
    },
    {
      referencia: 'Quiroa, M. (2019). Cliente. Economipedia.',
      link: 'https://economipedia.com/definiciones/cliente.html',
    },
    {
      referencia: 'Sánchez, G., J. (2015). Empresa. Economipedia.',
      link: 'https://economipedia.com/definiciones/empresa.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'María Alejandra Tovar',
        cargo: 'Experta Temática',
        centro: 'Regional Tolima - Centro de la industria y la Construcción',
      },
      {
        nombre: 'Gloria Alexandra Orejarena Barrios',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distro Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
