<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Contabilidad básica

    p.mb-5(data-aos="fade-right") Todas las personas y las organizaciones deben de llevar registrada su información financiera y económica, la cual permite contar con un control de sus actividades económicas.

    .container-img-edit-v2.col-xl-10.mx-auto.mb-5
      img(src="@/assets/curso/temas/tema3/img-1.png" style="max-width: 315px" data-aos="fade-right")
      .container-img-edit-v2-container.col-lg(data-aos="fade-left")
        p.mb-0 La contabilidad básica es una técnica que produce sistemática y estructuralmente información cuantitativa expresada en unidades monetarias, sobre los eventos económicos identificables y cuantificables que realiza una entidad a través de un proceso de captación de las operaciones que cronológicamente mida, clasifique, registre y resuma con claridad (Moreno, 2014).
          br
          br
          |El registro de la información financiera y económica, empleando la contabilidad, es de gran utilidad para las entidades, debido a que permite analizar e identificar la situación económica, la cual permite la toma de decisiones; el registro de esta información también permite el seguimiento y control de la entidad.
    p.mb-5(data-aos="fade-right") Algunas de las principales características de la contabilidad básica son:

    .d-flex.flex-wrap.mb-5(data-aos="fade-right")
      .tarjeta-edit-border.col-lg-6.col-xl-4.pe-3
        img(src="@/assets/curso/temas/tema3/img-2.jpg" style="max-width: 85px")
        p Registro de los movimientos financieros de las organizaciones.
      .tarjeta-edit-border.col-lg-6.col-xl-4.pe-3
        img(src="@/assets/curso/temas/tema3/img-2.jpg" style="max-width: 85px")
        p Análisis financiero de los estados financieros. 
      .tarjeta-edit-border.col-lg-6.col-xl-4.pe-3
        img(src="@/assets/curso/temas/tema3/img-2.jpg" style="max-width: 85px")
        p Contabilización de partida doble. 

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1 Tipos de registros contables
    
    p.mb-5(data-aos="fade-right") Los registros contables, o libros contables, permiten el registro contable de todas las actividades económicas y financieras de las entidades; en el Art. 48 del Código de Comercio, se establece la conformidad de libros y papeles del comerciante a las normas comerciales y medios para el asiento de operaciones. 

    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem;")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/img-3.png")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0.text-small Para tener mayor conocimiento sobre los tipos de registros contables y lo que establece el Código de Comercio, te
                br.d-none.d-xl-flex
                |invitamos a revisar el siguiente documento: #[b(style="font-size: 1rem") Tipos de registros contables y los libros de comercio]
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro(:href="obtenerLink('downloads/comercio.docx')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.mb-5(data-aos="fade-right") Continuando con los tipos de registros contables y los libros de comercio, es relevante puntualizar que las cuentas T en contabilidad representan el registro de los movimientos contables, lo cual consta del débito y del haber; en el momento en que se realiza el registro se debe diligenciar el código y nombre de la cuenta.

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h5 Figura 5
      span Cuenta T
    img(src="@/assets/curso/temas/tema3/img-4.jpg" style="max-width: 610px" data-aos="fade-left").mb-5.mx-auto

    p.mb-5(data-aos="fade-right") Por ejemplo, la empresa Andina S.A. vende mercancía por un valor de $2.000.000 de la cual se realiza pago en efectivo por valor de $1.200.000 y el saldo a crédito por 30 días, al registrar en las cuentas T, tendremos:

    .d-flex.flex-wrap.mb-5(data-aos="fade-left")
      .col-md-6.col-xl-4.mb-4.px-md-3
        table.table-v2
          tr.text-center
            th(colspan="2")
              p.head-table 4135 comercio al por mayor y al por menor
          tr.text-center
            td
              p.body-table-left Debe
            td
              p.body-table-right Haber
          tr.text-center
            td
              p.body-table-bottom-left 
            td
              p.body-table-bottom-right $2.000.000
      .col-md-6.col-xl-4.mb-4.px-md-3
        table.table-v2
          tr.text-center
            th(colspan="2")
              p.head-table 110505 caja
          tr.text-center
            td
              p.body-table-left Debe
            td
              p.body-table-right Haber
          tr.text-center
            td
              p.body-table-bottom-left $1.200.000
            td
              p.body-table-bottom-right 
      .col-md-6.col-xl-4.mb-4.px-md-3
        table.table-v2
          tr.text-center
            th(colspan="2")
              p.head-table 138020 cuentas por cobrar de terceros
          tr.text-center
            td
              p.body-table-left Debe
            td
              p.body-table-right Haber
          tr.text-center
            td
              p.body-table-bottom-left $700.000
            td
              p.body-table-bottom-right
    
    p.mb-5(data-aos="fade-right") Los registros contables se deben registrar por el sistema de doble partida, el cual busca un equilibrio en los movimientos contables, de acuerdo con las cuentas estas disminuyen o aumentan en él debe o haber; en el debe se registran todos los ingresos y en el haber todas las salidas.
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h5 Figura 6
      span Movimiento contable

    img(src="@/assets/curso/temas/tema3/img-5.svg" data-aos="fade-right").mb-5
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Clasificación de los estados financieros

    p.mb-5(data-aos="fade-right") Los estados financieros son el reflejo de la contabilidad de las empresas y muestran su estructura económica y financiera, con base en su actividad económica que ejercen; dentro de los estados financieros se encuentran:

    .d-flex.flex-wrap.mb-5(data-aos="fade-left")
      .d-flex.flex-wrap.col-xl-3.px-2.mb-4
        img.mx-auto.p-0.position-relative(src="@/assets/curso/temas/tema3/tj-1.png" style="margin-bottom: -50px; max-width: 107px")
        .tarjeta.w-100(style="background-color: #FEC08A; padding-top: 45px")
          p.text-center.p-4.mb-0 Estado de situación financiera

      .d-flex.flex-wrap.col-xl-3.px-2.mb-4
        img.mx-auto.p-0.position-relative(src="@/assets/curso/temas/tema3/tj-2.png" style="margin-bottom: -50px; max-width: 107px")
        .tarjeta.w-100(style="background-color: #FEC08A; padding-top: 45px")
          p.text-center.p-4.mb-0 Estado de resultados
      
      .d-flex.flex-wrap.col-xl-3.px-2.mb-4
        img.mx-auto.p-0.position-relative(src="@/assets/curso/temas/tema3/tj-3.png" style="margin-bottom: -50px; max-width: 107px")
        .tarjeta.w-100(style="background-color: #FEC08A; padding-top: 45px")
          p.text-center.p-4.mb-0 Estado de cambio en el patrimonio
      
      .d-flex.flex-wrap.col-xl-3.px-2.mb-4
        img.mx-auto.p-0.position-relative(src="@/assets/curso/temas/tema3/tj-4.png" style="margin-bottom: -50px; max-width: 107px")
        .tarjeta.w-100(style="background-color: #FEC08A; padding-top: 45px")
          p.text-center.p-4.mb-0 Estado de flujo de efectivo

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h5 Figura 7
      span Estados financieros
    .d-flex.flex-wrap.mb-5
      .col-xl-3.col-lg-6.px-lg-5.px-xl-2.mb-4
        .tarjeta.p-0.h-100.d-flex.flex-wrap(style="background-color: #FED5B1")
          .p-4.w-100.mb-auto(style="background-color: #FDAB64; border-top-right-radius: 15px; border-top-left-radius: 15px;")
            img.mx-auto.mb-4(src="@/assets/curso/temas/tema3/sl-1.svg" style="max-width: 46px")
            h4.text-center.mb-2(style="min-height: 44px;") Estado de situación financiera (balance general)
          .px-5.py-4.w-100(style="background-color: #FED5B1; border-bottom-right-radius: 15px; border-bottom-left-radius: 15px;")
            p Bienes, dinero y derechos (activos).
              | Obligaciones (pasivos).
              | Capital y reservas (patrimonio)
      
      .col-xl-3.col-lg-6.px-lg-5.px-xl-2.mb-4
        .tarjeta.p-0.h-100.d-flex.flex-wrap(style="background-color: #E1F3D7")
          .p-4.w-100.mb-auto(style="background-color: #85D161; border-top-right-radius: 15px; border-top-left-radius: 15px;")
            img.mx-auto.mb-4(src="@/assets/curso/temas/tema3/sl-1.svg" style="max-width: 46px")
            h4.text-center.mb-2(style="min-height: 44px;") Estado de resultados
          .px-5.py-4.w-100(style="background-color: #E1F3D7; border-bottom-right-radius: 15px; border-bottom-left-radius: 15px;")
            p Refleja los ingresos y costos de la empresa y detalla si en el periodo hubo beneficios o pérdidas.

      .col-xl-3.col-lg-6.px-lg-5.px-xl-2.mb-4
        .tarjeta.p-0.h-100.d-flex.flex-wrap(style="background-color: #FEEFBF")
          .p-4.w-100.mb-auto(style="background-color: #FDE07E; border-top-right-radius: 15px; border-top-left-radius: 15px;")
            img.mx-auto.mb-4(src="@/assets/curso/temas/tema3/sl-1.svg" style="max-width: 46px")
            h4.text-center.mb-2(style="min-height: 44px;") Estado de cambio en el patrimonio
          .px-5.py-4.w-100(style="background-color: #FEEFBF; border-bottom-right-radius: 15px; border-bottom-left-radius: 15px;")
            p Refleja la variación de entradas y salidas de dinero en un periodo determinado; se detalla la evolución del patrimonio.

      .col-xl-3.col-lg-6.px-lg-5.px-xl-2.mb-4
        .tarjeta.p-0.h-100.d-flex.flex-wrap(style="background-color: #F6FBD1")
          .p-4.w-100.mb-auto(style="background-color: #E4F476; border-top-right-radius: 15px; border-top-left-radius: 15px;")
            img.mx-auto.mb-4(src="@/assets/curso/temas/tema3/sl-1.svg" style="max-width: 46px")
            h4.text-center.mb-2(style="min-height: 44px;") Estado de flujo de efectivo
          .px-5.py-4.w-100(style="background-color: #F6FBD1; border-bottom-right-radius: 15px; border-bottom-left-radius: 15px;")
            p Refleja las fuentes y usos del efectivo en la empresa.

    p.mb-5(data-aos="fade-right") De acuerdo con la Norma Internacional de Contabilidad (NIC), el estado de situación financiera, o balance general, refleja los bienes, dineros y derechos de la empresa, los cuales son denominamos activos y se dividen en activos no corrientes y activos corrientes.
      br
      br
      |En cuanto a las obligaciones en el estado de situación financiera, se denominan pasivo y también se dividen en pasivos no corrientes y pasivos corrientes; por su parte el capital y las reservas de la empresa se denomina patrimonio.

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h5 Figura 8
      span El estado de situación financiera

    table.mx-auto.mb-5(style="max-width: 610px")
      tr
        td.p-3(rowspan="2" style="background-color: #FEE89F; border: 3px solid black;") #[b Activos corrientes]
          br
          |Activos líquidos en el corto plazo.
        td.p-3(style="background-color: #FED5B1; border: 3px solid black;") #[b Pasivos corrientes]
          br
          |Deuda y obligaciones a corto plazo.
      tr
        td.p-3(style="background-color: #FED5B1; border: 3px solid black;") #[b Pasivos no corrientes]
          br
          |Deuda y obligaciones a largo plazo.
      tr
        td.p-3(style="background-color: #FEE89F; border: 3px solid black;") #[b Activos no corrientes]
          br
          |Hacen parte de la empresa por su estructura, pero no de su etapa de productiva - largo plazo.
        td.p-3(style="background-color: #C2E8B0; border: 3px solid black;") #[b Patrimonio]
          br
          |Capital, reservas y resultados.
    

    p.mb-5(data-aos="fade-right") Dentro de las organizaciones es indispensable tener presente la estructura de costos, por lo cual se encuentra la contabilidad de costos, que se encarga de informar los costos de productos o servicios.

    .container-img-edit-v2.col-xl-10.mx-auto.mb-5
      img(src="@/assets/curso/temas/tema3/img-8.png" style="max-width: 285px" data-aos="fade-right")
      .container-img-edit-v2-container.col-lg.my-auto(data-aos="fade-left")
        p.mb-0 En la estructura de costos se identifican los costos directos e indirectos los costos directos son los que directamente están relacionados con el producto o servicio, por ejemplo, las materias primas en la fabricación de productos o la mano de obra calificada en la prestación de un servicio.
          br
          br
          |Y, por su parte, los costos indirectos se encuentran relacionados con el producto o servicio, pero no pueden asignarse equitativamente a cada uno, como por ejemplo suministro de servicios públicos.
          br
          br
          |Los costos directos, se conocen también como costos variables y dependen de las unidades de productos o servicios, y los costos indirectos se conocen como costos fijos.

    p.mb-5(data-aos="fade-right") Estos costos permiten identificar la cantidad de unidades de producto a fabricar o servicios a ofrecer, para alcanzar el punto de equilibrio; por lo cual la fórmula de costos totales es:

    .d-flex.flex-wrap.p-3.p-xl-4.mb-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-9-bg.svg')})`}")
      .col-xl-7.order-2.order-xl-1
        .content-box-info.mb-2
          p.mb-0 #[b CT: CV+CF ]
            br
            |CT: cotos totales. 
            br
            |CV: costos variables.
            br
            |CF: costos fijos.
        p.ps-3.mb-2 Para determinar el costo por unidad, el cual se conoce como #[b costo medio] o costo unitario, se estima

        .content-box-info.mb-2
          p.mb-0 #[b CTme: CT/Q ]
            br
            |CTme: costo total medio.
            br
            |CT: costo total.
            br
            |Q: unidades.
        p.ps-3.mb-2 Dentro de los costos, también se estima #[b el costo marginal] que es el costo por una unidad adicional a producir, la cual se estima como:
        .content-box-info.mb-2
          p.mb-0 #[b CM: dCT/dQ ]
            br
            |CM: coto marginal.
            br
            |dCT: derivada de costo total.
            br
            |dCT: derivada de unidades o cantidad.
        p.ps-3.mb-2 En el análisis de costos se debe estimar el punto de equilibrio, el cual indica las unidades a vender en el cual se cubren los costos totales, el cual se representa con la siguiente fórmula:

        .content-box-info.mb-4
          p.mb-0 #[b PE: (Costo fijo) / (PV-Costo variable unitario). ]
      .col-xl-5.order-1.order-xl-2.d-flex
        img.mx-auto.mb-4.mb-xl-0.mt-auto(src="@/assets/curso/temas/tema3/img-9.svg" data-aos="fade-left")

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h5 Figura 9
      span Punto de equilibrio

    img.col-xl-10.mx-auto.mb-5(src="@/assets/curso/temas/tema3/img-10.svg" data-aos="fade-right")
    p.mb-5(style="background-color: #E8E8E8; padding: .4rem 1rem;") Nota. Tomada de Econta (s. f.).

    p.mb-5 Para estimar el precio de venta, se emplea la siguiente fórmula:

    .col-xl-6(data-aos="fade-left")
      .d-flex.mb-4
        img.position-relative(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 48px; margin-right: -24px;")
        p.mb-0.w-100.py-4(style="background-color: #FED5B1; padding: .5rem; padding-left: 35px")
          |#[b PV: CTme/(1-%utilidad)]
          br
          |PV: precio de venta.
          br
          |CTme: costo total medio.
          br
          |% utilidad: porcentaje deseado de utilidad.
    
    p.mb-5(data-aos="fade-right") Ahora, se aborda mediante un ejemplo los conceptos de contabilidad de costos:
      br
      br
      |La empresa Andina S. A. fabrica pan tajado el cual tiene la siguiente estructura de costos:

    table.col-xl-10.mx-auto.mb-5.text-center(style="border: 2px solid #707070;")
      tr(style="border: 2px solid #707070;")
        td(colspan="2" style="background-color: #FEE89F") #[b Costos variables]
        td(colspan="2" style="background-color: #FEE89F") #[b Costos fijos]
      tr(style="border: 2px solid #707070;")
        td(style="background-color: #FFF7DF") Harina de trigo
        td(style="border: 2px solid #707070;") $13.000.000
        td(style="background-color: #FFF7DF") Arrendamiento
        td(style="border: 2px solid #707070;") $2.500.000
      tr(style="border: 2px solid #707070;")
        td(style="background-color: #FFF7DF") Mantequilla
        td(style="border: 2px solid #707070;") $6.000.000
        td(style="background-color: #FFF7DF") Mano de obra indirecta
        td(style="border: 2px solid #707070;") $3.000.000
      tr(style="border: 2px solid #707070;")
        td(style="background-color: #FFF7DF") Levadura
        td(style="border: 2px solid #707070;") $1.500.000
        td(style="background-color: #FFF7DF") Servicios públicos
        td(style="border: 2px solid #707070;") $700.000
      tr(style="border: 2px solid #707070;")
        td(style="background-color: #FFF7DF") Sal
        td(style="border: 2px solid #707070;") $700.000
        td(style="background-color: #FFF7DF") Personal de vigilancia
        td(style="border: 2px solid #707070;") $1.500.000
      tr(style="border: 2px solid #707070;")
        td(style="background-color: #FFF7DF") Bolsa de empacado
        td(style="border: 2px solid #707070;") $1.900.00
        td(style="background-color: #FFF7DF") 
        td(style="border: 2px solid #707070;") 
      tr(style="border: 2px solid #707070;")
        td(style="background-color: #FFF7DF") Mano de obra directa
        td(style="border: 2px solid #707070;") $5.000.000
        td(style="background-color: #FFF7DF") 
        td(style="border: 2px solid #707070;") 

    p.mb-5(data-aos="fade-right") La empresa Andina S. A. espera una utilidad del 15% por unidad de producto y para el mes de enero fabricó 5.100 bolsas de pan tajado. 

    .d-flex.flex-wrap.p-3.p-xl-4.mb-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-9-bg.svg')})`}")
      .col-xl-7.order-2.order-xl-1
        p.ps-3.mb-2 Con los datos anteriores se obtiene unos costos totales de $33.900.000:
        .content-box-info.mb-2
          p.mb-0 #[b CT: CV+CF ]
            br
            |CT: $ 26.200.000 + $ 7.700.000
            br
            |CT: $ 33.900.000

        p.ps-3.mb-2 Para continuar con el ejemplo, se debe de estimar el precio de venta el cual es de: 

        .content-box-info.mb-2
          p.mb-0 #[b PV: CTme/(1-%utilidad)]
            br
            |PV: ($ 5.100) / (1-15%)
            br
            |PV: $6.000
        p.ps-3.mb-2 Ahora se estima el punto de equilibrio, el cual indica el número de producto a vender, para cubrir los costos totales de la empresa Andina S.A.:
        .content-box-info.mb-2
          p.mb-0 #[b PE: (Costo fijo) / (PV-Costo variable unitario)]
            br
            |PE: ($ 7.700.000) / ($6.000 - $5.137)
            br
            |PE: 8.925 unidades
      .col-xl-5.order-1.order-xl-2.d-flex
        img.mx-auto.mb-4.mb-xl-0.mt-auto(src="@/assets/curso/temas/tema3/img-12.svg" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") Con el análisis anterior se puede decir que la empresa tiene problemas de costos, debido a que solo produce 5.100 unidades de pan y para cubrir los costos totales requiere producir 8.925 unidades.
      br
      br
      |Otra de las utilidades que se encuentran con la contabilidad es la posibilidad de planeación, mediante la implementación de los presupuestos, que permiten la planeación operativa de la empresa en un periodo de tiempo futuro, dentro de los cuales se encuentran: 

    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h5 Figura 10
      span Presupuesto maestro

    img.mx-auto.mb-5(src="@/assets/curso/temas/tema3/img-13.svg" data-aos="fade-left")

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3 Análisis financiero 

    p.mb-5(data-aos="fade-right") El análisis financiero se encarga de realizar análisis de la información contable de una persona o de una entidad, mediante indicadores y razones financieras, los cuales permiten identificar la situación y desempeño económico de las organizaciones.

    .container-img-edit-v2.col-xl-10.mx-auto.mb-5
      img(src="@/assets/curso/temas/tema3/img-14.png" style="max-width: 285px" data-aos="fade-right")
      .container-img-edit-v2-container.col-lg.my-auto(style="background-color: #EDF8A4" data-aos="fade-left")
        p.mb-0 La contabilidad es base fundamental para realizar los análisis financieros, es de vital importancia que cada organización esté verificando los indicadores y razones financieras para estar enterada de su comportamiento económico y financiero, de nada sirve tener una información contable que no es analizada.
          br
          br
          |Los análisis financieros permiten a las organizaciones tomar decisiones financieras a partir del diagnóstico realizado con los análisis financieros y realizar seguimiento y control sobre la organización. 
          br
          br
          |Los indicadores financieros permiten analizar la situación económica y financiera de una empresa, son de vital importancia, debido a que permiten realizar un adecuado seguimiento y control a los estados financieros para la toma de decisiones dentro de las organizaciones.

    p.mb-5(data-aos="fade-right") Complementando lo anterior, a continuación, se podrán encontrar algunos de los indicadores económicos que permiten analizar situaciones:

    SlyderA.tarjeta.slide-a-edit.p-3.p-md-4.mb-5(tipo="b" data-aos="fade-right")
      .d-flex.flex-wrap.col-xl-11.mx-auto
        .mb-4.mb-md-0
          h4 Indicador de liquidez o solvencia
          p Es la capacidad que tienen los activos de la empresa, de convertirse en efectivo en el corto plazo.
          table.table-slide
            tr
              th(style="border-top: 0; border-left: 0;")
                p.fw-bold.text-center.header-table(style="margin-left: -1px; margin-top: -1px; border-top-left-radius: 20px; border-top: 1px solid #707070; border-left: 1px solid #707070;") Indicador
              th 
                p.fw-bold.text-center.header-table Concepto
              th(style="border-top: 0; border-right: 0;")
                p.fw-bold.text-center.header-table(style="margin-top: -1px; border-top-right-radius: 20px; border-top: 1px solid #707070; border-right: 1px solid #707070;") Fórmula
            tr
              td
                p.justify-content-center.fw-bold.body-table-td Capital de trabajo neto
              td
                p.body-table-td Son los recursos que emplea la empresa a corto plazo.
              td
                p.justify-content-center.text-center.body-table-td (Activo corriente – Pasivo Corriente)
            tr
              td
                p.justify-content-center.fw-bold.body-table-td Índice corriente
              td
                p.body-table-td Es la capacidad que tiene la empresa de pagar en el corto plazo y con el activo corriente sus pasivos corrientes.
              td
                p.justify-content-center.text-center.body-table-td (Activo corriente / Pasivo corriente)
            tr
              td(style="border-bottom: 0; border-left: 0; background-color: transparent")
                p.justify-content-center.fw-bold.body-table-td(style="background-color: white; min-height: 100px; margin-bottom: -1px; margin-left: -1px; border-bottom-left-radius: 20px; border-bottom: 1px solid #707070; border-left: 1px solid #707070;") Prueba ácida
              td
                p.body-table-td Es la capacidad de cubrir los pasivos a corto plazo, con los activos, sin contar con los inventarios.
              td(style="border-bottom: 0; border-right: 0; background-color: transparent")
                p.justify-content-center.text-center.body-table-td(style="background-color: white; min-height: 100px; margin-bottom: -1px; border-bottom-right-radius: 20px; border-bottom: 1px solid #707070; border-right: 1px solid #707070;") ((Activo corriente-inventario) / Pasivo corriente)).
            
      
      .d-flex.flex-wrap.col-xl-11.mx-auto
        .mb-4.mb-md-0
          h4 Indicador de endeudamiento
          p Indica el nivel de obligaciones que tiene la empresa frente a terceros.
          table.table-slide
            tr
              th(style="border-top: 0; border-left: 0;")
                p.fw-bold.text-center.header-table(style="margin-left: -1px; margin-top: -1px; border-top-left-radius: 20px; border-top: 1px solid #707070; border-left: 1px solid #707070;") Indicador
              th 
                p.fw-bold.text-center.header-table Concepto
              th(style="border-top: 0; border-right: 0;")
                p.fw-bold.text-center.header-table(style="margin-top: -1px; border-top-right-radius: 20px; border-top: 1px solid #707070; border-right: 1px solid #707070;") Fórmula
            tr
              td
                p.justify-content-center.fw-bold.body-table-td Endeudamiento total
              td
                p.body-table-td Indican el porcentaje que se encuentran comprometidos los activos para el pago de la deuda
              td
                p.justify-content-center.text-center.body-table-td ((Pasivo total × 100) / Activo total)).
            tr
              td
                p.justify-content-center.fw-bold.body-table-td Endeudamiento financiero
              td
                p.body-table-td Indican el porcentaje que se encuentran comprometidos las ventas para el pago de la obligación financiera.
              td
                p.justify-content-center.text-center.body-table-td (Obligación financiera / Venta neta) × 100.
            tr
              td(style="border-bottom: 0; border-left: 0; background-color: transparent")
                p.justify-content-center.fw-bold.body-table-td(style="background-color: white; min-height: 100px; margin-bottom: -1px; margin-left: -1px; border-bottom-left-radius: 20px; border-bottom: 1px solid #707070; border-left: 1px solid #707070;") Apalancamiento a corto plazo
              td
                p.body-table-td Indican el porcentaje que se encuentran comprometidos los el patrimonio para el pago de la deuda.
              td(style="border-bottom: 0; border-right: 0; background-color: transparent")
                p.justify-content-center.text-center.body-table-td(style="background-color: white; min-height: 100px; margin-bottom: -1px; border-bottom-right-radius: 20px; border-bottom: 1px solid #707070; border-right: 1px solid #707070;") (Pasivo corriente / Patrimonio).
      
      .d-flex.flex-wrap.col-xl-11.mx-auto
        .mb-4.mb-md-0
          h4 Indicador de rentabilidad
          p Miden la capacidad que tienen los bienes de la empresa para generar ingresos y rentabilidad.
          table.table-slide
            tr
              th(style="border-top: 0; border-left: 0;")
                p.fw-bold.text-center.header-table(style="margin-left: -1px; margin-top: -1px; border-top-left-radius: 20px; border-top: 1px solid #707070; border-left: 1px solid #707070;") Indicador
              th 
                p.fw-bold.text-center.header-table Concepto
              th(style="border-top: 0; border-right: 0;")
                p.fw-bold.text-center.header-table(style="margin-top: -1px; border-top-right-radius: 20px; border-top: 1px solid #707070; border-right: 1px solid #707070;") Fórmula
            tr
              td
                p.justify-content-center.fw-bold.body-table-td Margen de utilidad bruta
              td
                p.body-table-td Indica el porcentaje de utilidad de las ventas, una vez se cubre los costos de producción.
              td
                p.justify-content-center.text-center.body-table-td (Utilidad bruta / ventas netas ) × 100
            tr
              td
                p.justify-content-center.fw-bold.body-table-td Margen de rentabilidad operacional.
              td
                p.body-table-td Indica el porcentaje de utilidad de las ventas, una vez se cubre los costos de producción y gastos operativos.
              td
                p.justify-content-center.text-center.body-table-td (Utilidad operacional/ ventas netas ) × 100
            tr
              td
                p.justify-content-center.fw-bold.body-table-td Margen neto de utilidad.
              td
                p.body-table-td Indica el porcentaje de utilidad de las ventas, una vez se cubre los costos de producción, gastos operativos e impuestos.
              td
                p.justify-content-center.text-center.body-table-td (Pasivo corriente / Patrimonio).
            tr
              td(style="border-bottom: 0; border-left: 0; background-color: transparent")
                p.justify-content-center.fw-bold.body-table-td(style="background-color: white; min-height: 100px; margin-bottom: -1px; margin-left: -1px; border-bottom-left-radius: 20px; border-bottom: 1px solid #707070; border-left: 1px solid #707070;") Rendimiento de patrimonio.
              td
                p.body-table-td Indica el porcentaje de rendimiento de las utilidades netas sobre el patrimonio.
              td(style="border-bottom: 0; border-right: 0; background-color: transparent")
                p.justify-content-center.text-center.body-table-td(style="background-color: white; min-height: 100px; margin-bottom: -1px; border-bottom-right-radius: 20px; border-bottom: 1px solid #707070; border-right: 1px solid #707070;") (Utilidad operacional/ ventas netas ) × 100
      
      .d-flex.flex-wrap.col-xl-11.mx-auto
        .mb-4.mb-md-0
          h4 Indicadores de eficiencia
          p Permiten medir la productividad de las empresas.
          table.table-slide
            tr
              th(style="border-top: 0; border-left: 0;")
                p.fw-bold.text-center.header-table(style="margin-left: -1px; margin-top: -1px; border-top-left-radius: 20px; border-top: 1px solid #707070; border-left: 1px solid #707070;") Indicador
              th 
                p.fw-bold.text-center.header-table Concepto
              th(style="border-top: 0; border-right: 0;")
                p.fw-bold.text-center.header-table(style="margin-top: -1px; border-top-right-radius: 20px; border-top: 1px solid #707070; border-right: 1px solid #707070;") Fórmula
            tr
              td
                p.justify-content-center.fw-bold.body-table-td Rotación de cartera
              td
                p.body-table-td Mide el tiempo que tarda la empresa en recuperar su cartera.
              td
                p.d-block.body-table-td (Venta crédito / promedio de cuentas por cobrar). 
                  br
                  |#[b El promedio de cuentas por cobrar se determina:] (saldo inicial + saldo final) / 2. 
                  br
                  |#[b Para determinar el día N.° de días se estima:] (360 / rotación de cartera).
            tr
              td
                p.justify-content-center.fw-bold.body-table-td Rotación de inventarios
              td
                p.body-table-td Mide el tiempo que tarda la empresa en rotar el inventario.
              td
                p.d-block.body-table-td (Costo de venta del periodo / Inventario promedio de mercancías) N.° de veces.
                  br
                  |#[b Para determinar el día N.° de días se estima:] (360 / rotación de inventario).
            tr
              td
                p.justify-content-center.fw-bold.body-table-td Cuentas por pagar
              td
                p.body-table-td Mide el tiempo que tarda la empresa en pagar sus obligaciones.
              td
                p.d-block.body-table-td #[b (Compras a crédito / Promedio de cuentas por pagar):] N.° de veces.
                  br
                  |#[b Para determinar el N.° de días se estima:] (360 / N.° veces).
            tr
              td(style="border-bottom: 0; border-left: 0; background-color: transparent")
                p.justify-content-center.fw-bold.body-table-td(style="background-color: white; min-height: 100px; margin-bottom: -1px; margin-left: -1px; border-bottom-left-radius: 20px; border-bottom: 1px solid #707070; border-left: 1px solid #707070;") Rotación de activos fijos.
              td
                p.body-table-td Indica la eficiencia de las empresas para generar ingresos.
              td(style="border-bottom: 0; border-right: 0; background-color: transparent")
                p.justify-content-center.text-center.body-table-td(style="background-color: white; min-height: 100px; margin-bottom: -1px; border-bottom-right-radius: 20px; border-bottom: 1px solid #707070; border-right: 1px solid #707070;") Ventas / Activos fijos.

    p.mb-5(data-aos="fade-right") La capacidad de las empresas de analizar estos indicadores financieros permite que se tenga una correcta educación financiera, que busca tener un concepto más profundo de las finanzas y del manejo del dinero, tanto en lo personal como al interior de las organizaciones.
      br
      |Todos los análisis que se realicen alrededor de los estados financieros permiten tomar mejores decisiones, tanto para invertir, mejorar o para tomar la decisión de dejar un negocio.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_4 3.4 Plataformas de consultas del sector financiero 

    p.mb-5(data-aos="fade-right") Las entidades financieras emplean plataformas tecnológicas, para la comunicación con los consumidores, llegando a la banca digital, donde el consumidor a un solo clic puede gestionar diferente transacción desde cualquier lugar, sin la necesidad de trasladarse de forma presencial a la entidad.

    p.mb-5(data-aos="fade-right") Existen diferentes tipos de plataformas digitales en el sector financiero: 

    .tarjeta-edit-bg.col-xl-10.mx-auto.mb-5
      .col-xl-6.d-flex.pt-3.order-2.order-xl-1.mx-auto(data-aos="fade-right")
        img.mb-auto(src='@/assets/curso/temas/tema3/img-15.svg' style="max-width: 43px")
        .col.ps-4.d-flex.flex-wrap.align-content-center.mb-auto
          ul.mb-0.lista-ul--color
            li
              .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Aplicaciones de bancas electrónicas.
            li
              .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Billeteras digitales.
            li
              .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              | Compra de divisas.
            li
              .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              p.mb-0 Plataformas para realizar operaciones de #[em  trading].
            li
              .my-auto.me-3(style="height: 11px; min-width: 11px; border-radius: 50%; background-color: #FC8116")
              p.mb-0 Plataformas de franquicias para realizar pagos #[em  online].
      .col-xl-6.order-1.order-xl-2.mx-auto.mb-4.mb-xl-0
        img(src='@/assets/curso/temas/tema3/img-15.png' data-aos="fade-left")

    p.pt-xl-4.mb-5(data-aos="fade-right") Algunas de las plataformas en las que se pueden realizar consultas del sector financiero en Colombia son la Superintendencia Financiera de Colombia (SFC), el Banco de la República, Asobancaria, centrales de riesgo como Datacrédito, Central de información Financiera (Cifin), Fenalcheque, Covinoc, Procrédito; y también las páginas web de cada entidad financiera.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_5 3.5 Centrales de riesgo
    
    p.mb-5(data-aos="fade-right") Las centrales de riesgo son entidades privadas que administran bases de datos que almacenan información respecto al comportamiento financiero de la personas o entidades. Cuando una persona o empresa solicita un préstamo, las entidades financieras consultan estas centrales de riesgo, para verificar el comportamiento de los consumidores; y de acuerdo con el comportamiento de cada consumidor, estos están clasificado por puntajes.
    p.mb-5(data-aos="fade-right") En el siguiente video se podrá encontrar información sobre las principales centrales de riesgo de Colombia como Datacrédito, Cifin, Covinoc, Fenalcheque:

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2NkIrpE6G7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass">
.tarjeta-edit-border
  display: flex
  align-items: center
  margin-bottom: 1rem
  p
    background-color: #A4DC88
    padding: .7rem 1rem
    margin-bottom: 0
    border-top-right-radius: 10px
    border-bottom-right-radius: 10px
    font-weight: bold
    min-height: 70px
.content-box-info
  background-color: #FFF5EC
  border: 2px solid #FC8116
  border-radius: 20px
  padding: 1rem
  width: 70%
  @media (max-width: 768px)
    width: 100%
.table-slide
  td,th
    padding: 0
    border: 1px solid #707070
  .header-table
    background-color: #FFEAD8
    padding: 1.3rem
    margin-bottom: 0
  td
    background-color: white
  .body-table-td
    padding: 1.3rem
    margin-bottom: 0
    display: flex
    height: 100%
.tarjeta-edit-bg
  display: flex
  flex-wrap: wrap
  background-color: #FFEAD8
  border-top-right-radius: 109px
  padding: 1rem
  padding-top: 0
  padding-right: 0
  max-height: 259px
  .img-v2
    position: relative
    top: -1rem
  @media (max-width: 1200px)
    max-height: 100%
</style>
