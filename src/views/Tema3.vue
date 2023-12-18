<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Producción de contenido para medios digitales
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema3/img1.jpg', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-right") 
        p La producción o creación de contenido a través de los diferentes medios digitales es una parte esencial de las estrategias de #[i marketing] digital. En este proceso, se genera un mensaje utilizando diversos formatos que se eligen en función de los objetivos de la campaña y la audiencia a la que se dirige.
        p Estos formatos pueden incluir textos, audios, videos, imágenes, animaciones y otros elementos que el entorno digital ofrece para ser creados, difundidos y promocionados a través de diversos canales digitales. El propósito fundamental de la producción de contenido es atraer la atención de la audiencia, generar ventas y construir valor y reconocimiento de marca.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right") 
        p A continuación, se detalla el proceso de creación de contenido en el contexto del #[i marketing] digital: 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        PasosA.color-primario.mb-5(tipo="n")(data-aos="fade-right") 
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Planeación
              p En esta etapa, se realiza el diseño del plan de medios y la creación de su contenido, un análisis situacional de la organización y del entorno, se establecen los objetivos para el plan, se identifica el #[i buyer] persona, se crea y diseña el mensaje, se eligen los canales o medios digitales a emplear, se elabora el presupuesto, calendario y cronogramas, así como los KPI.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img2.jpg', alt='Imagen decorativa')
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img3.jpg', alt='Imagen decorativa')
            .col-md-6.mb-4.mb-md-0
              h3 Desarrollo
              p Es la etapa de elaboración, construcción e implementación del plan de contenido; todo lo pertinente al boceto del mensaje, la adaptación o los canales o medios digitales empleados.
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Distribución
              p Consiste en la divulgación del contenido digital en las diferentes plataformas o medios digitales elegidos en la planeación, de acuerdo con la audiencia o #[i buyer] persona, y se realiza de acuerdo con el calendario establecido. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img4.jpg', alt='Imagen decorativa')
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img5.jpg', alt='Imagen decorativa')
            .col-md-6.mb-4.mb-md-0
              h3 Análisis
              p En esta etapa, se miden y evalúan los resultados de acuerdo con      los KPI establecidos en el plan de medios, lo cual permite establecer si se lograron los objetivos o se deben crear planes de mejora. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right") 
        p En efecto, existen diversos formatos de contenido que permiten dar usabilidad a las herramientas más funcionales según la campaña de #[i marketing] digital que se desea gestionar. A continuación, se describen algunos de los formatos más comunes utilizados en el desarrollo de proyectos de #[i marketing] digital: 
    
    .BGIMG01.p-4.mb-5(data-aos="flip-up")
      SlyderB.mb-5(:datos="datosSlyder")(data-aos="flip-up")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right") 
        p Cada formato de contenido tiene su propio propósito y ventajas, y la elección depende de los objetivos de la campaña y la preferencia de la audiencia. En muchas estrategias de #[i marketing] digital, se combina una variedad de formatos para mantener la diversidad y el compromiso de la audiencia.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Imágenes',
        texto:
          'Son contenido creativo a través de imágenes, postales o fotografías; en muchas ocasiones, acompañan la publicación, también los <em>blogs</em>, videos, infografías y diversos contenidos publicados en los canales digitales.',
        imagen: require('@/assets/curso/temas/tema3/img6.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Textos',
        texto:
          'Son contenidos escritos, los cuales permiten informar y comunicar a la audiencia la información que se está gestionando, según la campaña diseñada. Algunos de estos mensajes podrán generar interacción y otros solo son de tipo informativo, como también pueden tener alguna interacción. ',
        imagen: require('@/assets/curso/temas/tema3/img7.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Animaciones',
        texto:
          'Consiste en dar vida o realidad mediante movimientos y sensaciones a figuras o personajes creados, los cuales transmiten información, un mensaje o una historia.',
        imagen: require('@/assets/curso/temas/tema3/img8.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Videos',
        texto:
          'Son una de las estrategias de <em>marketing</em> de contenido que ayudan a posicionar de manera más rápida un producto, servicio o marca. El contenido audiovisual es empleado para realizar publicidad, pero también en tutoriales, entrevistas, historias, retos, entre otros; puede integrar diferentes contenidos digitales, como los <em>Blogs</em> o las <em>Newsletters</em>.',
        imagen: require('@/assets/curso/temas/tema3/img9.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Infografías',
        texto:
          'El principal objetivo de las infografías es informar de una forma creativa; están creadas principalmente por imágenes y gráficos llamativos, y poco texto explicativo; deben ser creadas para transmitir información a los consumidores de una forma didáctica. Permiten que los sitios <em>web</em> sean atractivos. Las infografías se comparten en diferentes sitios, como las redes sociales; cuyo resultado es un aumento de tráfico en la página <em>web</em>.',
        imagen: require('@/assets/curso/temas/tema3/img10.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<em>E-book</em>',
        texto:
          'Sin lugar a dudas, una de las industrias que se ha debido transformar con la nueva era digital ha sido las editoriales, por lo cual empiezan a publicar libros en formatos digitales. Los libros digitales son más elaborados y extensos que los <em>posts</em> en los <em>blogs</em> ; también permiten que se descarguen en formatos establecidos; este contenido puede ser pago o gratuito, todo dependerá de la estrategia de <em>marketing</em>.',
        imagen: require('@/assets/curso/temas/tema3/img11.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<em>Whitepapers</em>',
        texto:
          'Es un término anglosajón, “libro en blanco”, el cual es un documento digital que explica un tema de interés o da solución a alguna necesidad.',
        imagen: require('@/assets/curso/temas/tema3/img12.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<em>Podcasts</em>',
        texto:
          'Permiten transmitir contenido digital mediante audios que son cargados a plataformas especializadas, como Spotify, SoundCloud, Google Podcasts, entre otras; por lo general, tratan de temas específicos, como salud, estilo de vida, cultura, historia, entrevistas, educación, noticias.',
        imagen: require('@/assets/curso/temas/tema3/img13.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '<em>Webinar</em>',
        texto:
          'Son contenido digital creado con la finalidad de captar suscriptores o <em>leads</em> a través de un tema específico de interés, como lo es la educación, cocina, historias, noticias, entre otros, mediante videos. Algunos pueden ser online y otros pregrabados, todo dependerá de la estrategia creada.',
        imagen: require('@/assets/curso/temas/tema3/img14.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
