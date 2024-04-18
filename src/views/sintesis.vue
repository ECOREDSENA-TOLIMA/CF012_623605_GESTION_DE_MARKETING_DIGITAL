<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El componente formativo de Gestión de contenido digital se enfoca en la planificación, creación, distribución y administración de contenido en medios digitales, con el objetivo de comunicar efectivamente, llegar a la audiencia adecuada y lograr los objetivos de una organización. Esto incluye la producción de contenido en diversos formatos, como texto, imágenes, videos y audio, así como la implementación de estrategias de #[i marketing] digital, el uso de medios digitales y el seguimiento de métricas para evaluar el desempeño. La gestión de contenido digital es esencial en un mundo cada vez más digitalizado y competitivo, ya que permite a las organizaciones destacarse, interactuar con su audiencia y mantener una presencia relevante en línea.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
