<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 #[i Hashtag]
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-left")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema7/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0  Los #[i hashtags] son una parte integral de las estrategias de contenido digital, utilizados para referenciar y compartir contenido en redes sociales como Facebook, Instagram, TikTok y X a través de palabras clave. Su objetivo es ampliar la audiencia del contenido digital al permitir que los consumidores encuentren y accedan al material etiquetado con un #[i hashtag] específico. Los #[i hashtags] funcionan como etiquetas para el contenido, lo que significa que cuando un consumidor utiliza una de estas palabras clave, puede descubrir y acceder a contenido relacionado con ese #[i hashtag]. Además, los #[i hashtags] permiten que el contenido digital se agrupe en categorías según las palabras clave asignadas, lo que facilita la organización y la búsqueda de temas específicos.
    Separador
    .row
      .col-xl-12
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 7.1 Simbología
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9(data-aos="flip-left")
        p El #[i hashtag] se caracteriza por llevar el símbolo “#” antes de cada palabra clave, el cual se encuentra parametrizado dentro de las diferentes redes sociales para que sea reconocido como una etiqueta, la cual ya se clasifica dentro de un grupo o categorías.
        p El término #[i hashtag] y la simbología “#” se emplean inicialmente en la red social X, con la funcionalidad de etiquetar palabras claves de acuerdo con temas de interés o que se encuentran relacionados; estrategia que emigró posteriormente a redes sociales como Instagram y TikTok.
        p Para emplear los #[i hashtags] dentro de los contenidos digitales, se deben emplear palabras específicas, no muy largas; si el #[i hashtag] hace parte de dos palabras, se debe procurar escribirlas juntas, por ejemplo, #[b #[i #photooftheday]], y no #[b #[i #photoo]] #[b #[i #of]] #[b #[i #the]] #[b #[i #day]]. Los #[i hashtags] deben estar relacionados con el contenido a divulgar y es indispensable el uso adecuado de la ortografía.  
      .col-lg-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema7/img2.svg', alt='Imagen decorativa')
    Separador
    .row
      .col-xl-12
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 7.2 Importancia y alcance
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-left")
        p Los #[i hashtags] son una herramienta muy poderosa al momento de implementar estrategias en la divulgación del contenido digital, debido a que permiten el alcance de un mayor número de audiencia; otros elementos relevantes y de importancia al momento de implementar #[i hashtags] dentro de los contenidos digitales son:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0(data-aos="flip-left")
        .titulo-sexto.color-acento-contenido.offset-0
          h5 Figura 13.
          span  #[i  Beneficios de implementar hashtags dentro de los contenidos digitales]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema7/img3.svg', alt='En la figura 13 se muestran los beneficios de implementar <em>hashtags</em> dentro de los contenidos digitales.')
      .col-lg-12.movil
        figure
          img(src='@/assets/curso/temas/tema7/img3_1.svg', alt='En la figura 13 se muestran los beneficios de implementar <em>hashtags</em> dentro de los contenidos digitales.') 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-left")
        p El seguimiento de las tendencias de los #[i hashtags] es fundamental para una estrategia efectiva en redes sociales. Existen varias herramientas y plataformas que ayudan a identificar las tendencias de los #[i hashtags], lo que permite a los profesionales de #[i marketing] y creadores de contenido mantenerse al día y aprovechar temas populares.
</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
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
