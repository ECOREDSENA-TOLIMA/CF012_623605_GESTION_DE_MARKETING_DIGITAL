<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 La edición
    Separador
    .row
      .col-xl-12
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 5.1 Técnicas y procedimiento de la edición
    Separador
    .row
      .col-xl-12
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 5.2 Los protocolos de la edición
    Separador
    .row
      .col-xl-12
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 5.3 La corrección de errores: concepto y procedimiento

</template>

<script>
export default {
  name: 'Tema5',
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