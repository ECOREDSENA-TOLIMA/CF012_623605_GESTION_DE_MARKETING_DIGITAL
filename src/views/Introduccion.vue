<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right") 
        p La gestión de contenido digital brinda a las organizaciones la capacidad de reconocer la amplia gama de medios digitales que se encuentran inmersos en las tendencias del mercado. Estos medios han experimentado una evolución significativa con la aparición de las nuevas tecnologías de la información y la comunicación.
    
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="flip-up")     
        figure
          .video          
            iframe(width="560" height="315" src="https://www.youtube.com/embed/aCYWuXra5n8" title="Gestión de contenido digital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
