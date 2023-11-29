<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 #[i Hashtag]
    Separador
    .row
      .col-xl-12
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 7.1 Simbología
    Separador
    .row
      .col-xl-12
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 7.2 Importancia y alcance

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
