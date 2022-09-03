<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .d-flex.flex-wrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/img.jpg" data-aos="fade-right").col-xl-5.mx-auto.mb-4.mb-xl-0
      p.col-xl-7.ps-xl-4.mb-0(data-aos="fade-left") Teniendo en cuenta las necesidades de las organizaciones, las instituciones educativas deben procurar espacios de aprendizaje soportados en normas de competencia laboral que fortalezcan conocimientos y desarrollen habilidades en estos contenidos que podrán ser ofertados a individuos interesados en adquirir dichos conocimientos, así como al personal que se encuentra inmerso dentro de las organizaciones.
        br
        br
        | La temática del componente formativo será abordada desde la óptica del conocimiento y el autoaprendizaje, el cual estará orientado por el experto, quien estará encargado de guiar y orientar al aprendiz, durante la etapa formativa; también se encontrará con unos retos de aprendizaje que le permitirán reforzar los conocimientos adquiridos, durante la formación. Como aspecto inicial, se invita a ver el siguiente video como preámbulo al contenido de este componente: 


    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0wyxV2EToL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
