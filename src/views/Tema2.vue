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
    
    p.mb-5(data-aos="fade-right") Antes de comprender qué es el interés simple y el interés compuesto, se debe entender qué es el interés como tal, el cual permite recibir una compensación o pago por el uso del dinero, es lo que se cobra por el préstamo del dinero y depende del tiempo.
      br
      br
      |Ya sabiendo qué es el interés y para conocer la aplicación de las fórmulas para identificar tanto el interés simple como el compuesto, se invita a ver el siguiente video:

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jEwCaJoqW5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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

    .container-img-edit-v2.col-xl-10.mx-auto.mb-5
      img(src="@/assets/curso/temas/tema2/img-2.png" style="max-width: 315px" data-aos="fade-right")
      .container-img-edit-v2-container.col-lg(data-aos="fade-left")
        p.mb-0 El pago de estos dineros, no se da solo con los préstamos, también se da con la captación del dinero, como el ahorro, los Certificado de Depósito a Término Fijo (CDT) e inversiones.
          br
          br
          |#[b Los intereses se encuentran compuestos por tres variables determinantes, las cuales son el tiempo, la tasa de interés y el capital.]
          br
          br
          |En cuanto al interés simple, es el valor de utilizar el dinero, sobre el monto de un capital que no sufre variaciones en el tiempo; es decir el capital inicial es el mismo durante todo el periodo de tiempo y se aplica la misma tasa de interés. 

    p.mb-5(data-aos="fade-right") A continuación, se presenta un ejemplo sobre cómo identificar el interés simple.

    .d-flex.flex-wrap.mb-5
      TabsA.color-acento-contenido.mb-5.tabs-edit.col-xl-9.pe-xl-3(data-aos="fade-right")
        .tarjeta.p-4(titulo="Paso 1" style="background-color: #E1F3D7")
          h4 Paso 1
          p Se pretende determinar el interés simple de un capital de $1.000.000 m/Cte., en un periodo de 5 años a una tasa de interés de 8% anual.
            br
            br
            |Para estimar el interés se emplea la fórmula #[b(style="background-color: #FED5B1; padding: 2px") I: c × i × n,] la cual al reemplazar arroja un valor de $400.000.
            br
            br
            |#[span(style="background-color: #FED5B1; padding: 2px") I: $1.000.000 × 0,08 ×  5= $400.000]
        
        .tarjeta.p-4(titulo="Paso 2" style="background-color: #E1F3D7")
          h4 Paso 2
          p Ahora, si se desea saber cuál es el monto total que se debe pagar al final de los 5 años, se emplea la siguiente fórmula:
          .d-flex
            img.position-relative(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 48px; margin-right: -24px;")
            p.mb-0.w-100.fw-bold(style="background-color: #FED5B1; padding: .5rem; padding-left: 35px")
              | VF: VA (1+(n × i)
              br
              |  VF: $1.000.000 (1+ (5 × 0,08))
              br
              |  VF: $1.400.000
        .tarjeta.p-4(titulo="Paso 3" style="background-color: #E1F3D7")
          h4 Paso 3
          p Se determina un valor futuro de $1.400.000, en el cual se estimó con anterioridad, que el interés simple para un periodo de cinco años es de $400.000, más la inversión del capital inicial, el cual es de $1.000.000.

        .tarjeta.p-4(titulo="Paso 4" style="background-color: #E1F3D7")
          h4 Paso 4
          p En cuanto al interés compuesto, los intereses que se van generando periodo a periodo, se va capitalizando al capital inicial; por lo cual periodo a periodo, el capital e interés va aumentando.
        
        .tarjeta.p-4(titulo="Paso 5" style="background-color: #E1F3D7")
          h4 Paso 5
          p Para determinar el interés compuesto, se emplea la siguiente fórmula: 
          .d-flex.mb-4
            img.position-relative(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 48px; margin-right: -24px;")
            p.mb-0.w-100(style="background-color: #FED5B1; padding: .5rem; padding-left: 35px")
              |#[em VF= VA(1+i)^n ]
              br
              |VF: valor futuro
              br
              |VA: valor actual o capital 
              br
              |i: tasa de interés
              br
              |n: periodo de tiempo
          p Se realiza la apertura de un CDT con un valor inicial de $10.000.000 que genera interés compuesto de 5% por 6 meses; por lo cual se estima cuál será el valor al final del periodo.
        .tarjeta.p-4(titulo="Paso 6" style="background-color: #E1F3D7")
          h4 Paso 6
          p Finalmente, para estimar el valor se emplea la fórmula #[b(style="background-color: #FED5B1; padding: 2px") VF= VA(1+i)^n.]
            br
            br
            |VF: $10.000.000 × (1+0,05)^(6)
            br
            |VF: $13.400.956,4
            br
            br
            |El valor que se recibe, al final del periodo por el CDT es de $13.400.956,4.
      img(src="@/assets/curso/temas/tema2/img-3.svg" style="max-width: 315px").col-xl-3

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2.  Conversión de tasas de interés
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.col-xl-10.mx-auto.bloque-texto-edit.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-5.svg')})`}"
        data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 En el mercado financiero, existen las tasas de interés nominales y tasas de interés efectivas, las cuales no pueden ser comparadas entre ellas, por tal motivo se requiere realizar una conversión, y de esta forma puedan ser equivalentes.
          br
          br
          |La tasa de interés nominal se encuentra determinada por el capital invertido, en un tiempo determinado o establecido, se encuentran representadas para el periodo de un año; estas tasas de interés no se capitalizan, por lo cual se determinan como un interés simple.

    p.mb-5(data-aos="fade-right") Las tasas nominales también se encuentran representadas de acuerdo con el periodo en el cual se encuentra liquidado el interés; es decir, pueden ser anticipadas o vencidas. Para clarificar un poco, a continuación, #[b se expone un ejemplo sobre cómo convertir la tasa de interés.]

    .d-flex.flex-wrap.mb-5
      .col-12.col-xl-6.pe-xl-3.order-2.order-xl-1.mt-auto
        h4 Por ejemplo:
        SlyderE.px-3(indicadores="derecha" data-aos="fade-left").mt-auto
          .row
            p Se realiza una inversión que pague un interés del 8% nominal al final de cada trimestre, por lo cual se denomina 8% Nominal Trimestre Vencido (NTV); de lo contrario también se puede establecer que el pago del interés es pago al principio de cada trimestre, por lo cual se denomina 8% Nominal Trimestre Anticipado (NTA).
              br
              br
              |La tasa efectiva se encuentra determinada por el capital invertido y los intereses que se generan en cada periodo; debido a que los intereses generados, son acumulados al capital invertido; por lo cual la tasa de interés se capitaliza.
              br
              br
              |Para convertir una tasa de interés efectiva a una tasa de interés nominal, se debe emplear la siguiente fórmula:
            .d-flex.mb-4
              img.position-relative(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 48px; margin-right: -24px;")
              p.mb-0.w-100.py-4(style="background-color: #FEC08A; padding: .5rem; padding-left: 35px")
                |#[b TN: ((1+TE)^(1/n)-1))*n]
                br
                |TN: Tasa nominal
                br
                |TE: Tasa efectiva
                br
                |n: Periodo de tiempo
          .row
            p Se tiene una inversión a una tasa efectiva anual del 24%, la cual se desea convertir  una tasa nominal mensual; por lo cual al ser una tasa efectiva anual, se toma como periodo de tiempo 12 meses. 
              br
              br
              |#[b.ps-4 TN:((1,24)^(1/12)-1) ×12]
              br
              |#[b.ps-4 TN: 1,81% NM]
              br
              br
              |Para convertir una tasa de interés nominal anual a una tasa de interés efectiva, se debe emplear la siguiente fórmula:
            .d-flex.mb-4
              img.position-relative(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 48px; margin-right: -24px;")
              p.mb-0.w-100.py-4(style="background-color: #FEC08A; padding: .5rem; padding-left: 35px")
                |#[b TE: ((1+(TN/N)^n-1]
                br
                |TN: Tasa nominal
                br
                |TE: Tasa efectiva
                br
                |n: Periodo de tiempo
          .row
            p Se tiene una inversión a una tasa nominal anual del 24%, la cual se desea convertir  una tasa efectiva anual; por lo cual al ser una tasa nominal anual, se toma como periodo de tiempo 12 meses. 
              br
              br
              |#[b.ps-4 TE = (1+ (0,24/12)) ^12-1]
              br
              |#[b.ps-4 TE: 26,82% EA]
              br
              br
              |Para convertir una tasa de interés nominal anual a una tasa de interés efectiva, se debe emplear la siguiente fórmula:
              br
              br
              |Al convertir una tasa nominal en otra nominal, se debe dividir o multiplicar por el periodo de tiempo; por ejemplo se tiene una tasa nominal anual del 20% y se busca su equivalencia mensual; por lo cual:
              br
              br
              |#[b.ps-4 NM= 20%/12]
              br
              |#[b.ps-4 NM=1,66%]
              br
              br
              |Al convertir una tasa efectiva en otra efectiva, se debe aplicar la siguiente fórmula: 
            .d-flex.mb-4
              img.position-relative(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 48px; margin-right: -24px;")
              p.mb-0.w-100.py-4(style="background-color: #FEC08A; padding: .5rem; padding-left: 35px")
                |#[b TE: ((1+i)^(p1/p2))-1]
                br
                |TE: Tasa equivalente
                br
                |i: Tasa de interés
                br
                |P1: Periodo actual
                br
                |P2: Periodo de pago
          .row
            p Se tiene una inversión a una tasa efectiva anual del 24%, la cual se desea convertir  una tasa efectiva mensual: 
              br
              br
              |#[b TE: ((1,21) ^(1/12))-1]
              br
              |TE: 1,81% efectiva mensual 
      img(src="@/assets/curso/temas/tema2/img-6.jpg" data-aos="fade-left").col-12.col-xl-6.order-1.order-xl-2.mb-4.my-xl-auto

    







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
