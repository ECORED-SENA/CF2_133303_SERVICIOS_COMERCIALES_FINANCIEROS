<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Matemática financiera

    .d-flex.flex-wrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/tema2/img-1.jpg" data-aos="fade-right").col-xl-5.mx-auto.mb-4.mb-xl-0
      p.col-xl-7.ps-xl-4.mb-0(data-aos="fade-left") La matemática financiera es un área de la matemática que permite ser aplicada en las finanzas; es decir, a todas las operaciones financieras, en el cual existe un intercambio de flujo de dinero y se le debe asignar un valor o un costo a estas operaciones. Las matemáticas permiten dar un valor al dinero, ya sea por su utilidad o debido a la pérdida de su valor en el tiempo, por lo cual se vale de estas para dar un valor a este dinero a través de los intereses. 
        br
        br
        |Las matemáticas son de gran utilidad para las organizaciones o las finanzas de las personas, debido a que permite realizar cálculos y análisis, para sus inversiones, sus ahorros o sus financiaciones, pues permite calcular el valor del dinero en el tiempo.
        br
        br
        |A través de la matemática financiera se pueden estimar el interés simple, interés compuesto, anualidades y amortizaciones.
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1. Interés simple y compuesto
    
    p.mb-5 Antes de comprender qué es el interés simple y el interés compuesto, se debe entender qué es el interés como tal, el cual permite recibir una compensación o pago por el uso del dinero, es lo que se cobra por el préstamo del dinero y depende del tiempo.
      br
      br
      |Ya sabiendo qué es el interés y para conocer la aplicación de las fórmulas para identificar tanto el interés simple como el compuesto, se invita a ver el siguiente video:

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem;" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/interes.png")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Interés simple y compuesto
              p.text-small Estimado aprendiz, para aplicar de manera práctica las fórmulas vistas en el video anterior, te <br class="d-none d-xl-flex"> invitamos a descargar el siguiente libro de Excel y practicar: 
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('downloads/COMPUESTO_133303.xlsx')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
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
