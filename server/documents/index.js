module.exports = ({ name }) => {
    const today = new Date();
return `
   <!DOCTYPE html>
   <html lang="">
   <head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
   <title></title>
   <style>
      *{
         margin: 0px;
         padding: 0px;
         font-size: 12px;
      }
      body{
         margin-top: 40px;
      }
      th,td{
         padding-left: 1.5px;
      }
      .document{
         width: 720px;
         margin-left: auto;
         margin-right: auto;
         border: 2px solid;
         border-bottom: 0px;
      }
      .container{
         border-bottom: 2px solid;
      }
      .supervisor{
         width: 230px;
      }
      .title-document{
         padding: auto;
         border-bottom: 1px solid;
         text-align: center;
      }
      .logo{
         height: 50px;
      }
      .box{
         padding: 1px;
         border: 1px solid;
         width: auto;
      }
      .table{
         width: 100%;
         margin: 0px;
         border-style: none;
         border-collapse: collapse;
      }
      .text-align-left{
         text-align: left;
      }
      .celda{
         width: 20px;
      }
      .celdas-blade{
         border: 1px solid;
         width: 20px;
      }
      .celdas-height{
         border: 1px solid;
         height: 20px;
      }
      .celda-color{
         background: #1f497d;
         color: aliceblue
      }
      .space{
         width: 20px;
      }
      .space-long{
         width: 130px;
      }
      .space-left{
         width: 90px;
      }
      .p-name{
         text-align:left;
         padding-left: 5px;
      }
   </style>
   </head>
   <body>
   <div class="document">
      <div class="container">
         <p class="title-document"><strong>DIVISION MINERA BRECA</strong></p>
         <div>
         <table class="table">
            <tr class="box">
               <th class="box" rowspan="3">
               <img class="logo" src=${"https://ms-f7-sites-01-cdn.azureedge.net/docs/stories/minsur-artifical-intelligence-azure-cognitive-services-machine-learning-mining-oil-arkano-peru-es/resources/7a1e00db-5d4f-4ed9-986b-a86e84cb9bed/1098045776219165881_1098045776219165881"} alt="">
               </th>
               <th class="box" colspan="2">
               ORDEN DE TRABAJO
               </th>
               <th class="box" rowspan="3">
               UNIDAD SAN RAFAEL
               </th>
            </tr>
            <tr>
               <th class="box">
               CODIGO: F-8R-880-106
               </th>
               <th class="box">
               VERSIÓN: 01
               </th>
            </tr>
            <tr>
               <th class="box">
               TIPO. DOC: FORMATO
               </th>
               <th class="box">
               PÁGINA: 01 de 01
               </th>
            </tr>
            <tr>
               <th class="box" colspan="2">
               MACRO PROCESO: SEGURIDAD Y SALUD OCUPACIONAL
               </th>
               <th class="box" colspan="2">
               PROCESO: SEGURIDAD
               </th>
            </tr>
         </table>
         </div>
      </div>
      <div class="container">
         <table class="table">
         <tr>
            <th class="box text-align-left">FECHA: <span style="margin-left: 130px;" >${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</span></th>
            <th class="box text-align-left">TURNO :</th>
         </tr>
         <tr>
            <th class="box text-align-left">AREA DE TRABAJO: PLANTA CONCENTRADORA</th>
            <th class="box text-align-left"> LUGAR ESPECIFICO : CANCHA MINERAL</th>
         </tr>
         <tr>
            <th class="box text-align-left" colspan="2">TRABAJO A REALIZAR: OPERACIÓN DE CARGADOR FRONTAL</th>
         </tr>
         <tr>
            <th class="box text-align-left">HORA DE INICIO: </th>
            <th class="box text-align-left">HORA DE FIN:</th>
         </tr>
         </table>
      </div>
      <div class="container">
         <table class="table">
            <thead>
               <tr>
                  <th style="height:28px;" colspan="10">
                     <u> ACTIVIDADES PRINCIPALES: </u>
                  </th>
               </tr>
            </thead>
            <tbody>
                              <tr>
                                 <th class="space"></th>
                                 <th style="border-bottom: 1px solid" class="text-align-left"></th>
                                 <th style="border-bottom: 1px solid" class="celda"></th>
                                 <th class="space"></th>
                                 <th style="border-bottom: 1px solid" class="space-long"></th>
                                 <th style="border-bottom: 1px solid" class="celda"></th>
                                 <th class="space"></th>
                                 <th style="border-bottom: 1px solid" class="space-long"></th>
                                 <th style="border-bottom: 1px solid" class="celda"></th>
                                 <th class="space-left"></th>
                              </tr>
               <tr>
                  <th class="space"></th>
                  <th class="box text-align-left">Op. Cargador Frontal</th>
                  <th class="celdas-blade"></th>
                  <th class="space"></th>
                  <th class="box space-long"></th>
                  <th class="celdas-blade"></th>
                  <th class="space"></th>
                  <th class="box space-long"></th>
                  <th class="celdas-blade"></th>
                  <th class="space-left"></th>
               </tr>
               <tr>
                  <th class="space"></th>
                  <th class="box text-align-left">Operacion Rompebancos</th>
                  <th class="celdas-blade"></th>
                  <th class="space"></th>
                  <th class="box space-long"></th>
                  <th class="celdas-blade"></th>
                  <th class="space"></th>
                  <th class="box space-long"></th>
                  <th class="celdas-blade"></th>
                  <th class="space-left"></th>
               </tr>
               <tr>
                  <th class="space"></th>
                  <th class="box text-align-left">Operacion Inchancables</th>
                  <th class="celdas-blade"></th>
                  <th class="space"></th>
                  <th class="box space-long"></th>
                  <th class="celdas-blade"></th>
                  <th class="space"></th>
                  <th class="box space-long"></th>
                  <th class="celdas-blade"></th>
                  <th class="space-left"></th>
               </tr>
               <tr>
                  <th class="space"></th>
                  <th class="box text-align-left">Operacion Ch. Primario</th>
                  <th class="celdas-blade"></th>
                  <th class="space"></th>
                  <th class="box space-long"></th>
                  <th class="celdas-blade"></th>
                  <th class="space"></th>
                  <th class="Other text-align-left">Otros: (Detallar)</th>
                  <th style="border: none; font-size: 10px;" class="text-align-left" colspan="2">
                  .........................................
                  </th>
               </tr>
               <tr>
                  <th style="height:5px;" colspan="10"></th>
               </tr>
               <tr>
                  <th style="margin-top: 10px;" colspan="10" class="celda-color">
                     REALMENTE NO SON ACCIDENTES, SON COMPORTAMIENTOS INSEGUROS…...TU PUEDES EVITARLOS!
                  </th>
               </tr>
            </tbody>
         </table>
      </div>
      <div class="container">
         <table class="table">
         <thead>
            <tr>
               <th class="box"><u>PLANIFICACIÓN DEL TRABAJO: CUADRO 1</u></th>
               <th class="celdas-blade celda-color">SI</th>
               <th class="celdas-blade celda-color">NO</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>
               2. Es un trabajo rutinario?
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td>
               3. Requiere un análisis de trabajo Seguir (ATS).
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td>
               4. Requiere un Permiso Escrito de Alto Riesgo (PETAR)
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td>
               5. Realizar el llenado del formato IPERC en el frente/ lugar de trabajo.
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td>
               6. Orden y Limpieza realizar antes, durante y después del proceso.
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td>
               7. Cumplir con los Procedimientos o instrucciones marcadas en el CUADRO 2. 
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td>
               8. Eliminar las condiciones subestándar identificados, antes de continuar. 
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td>
               9. Si No hay Condiciones seguras para Trabajar, Aplique el derecho a negarse a trabajos inseguros y comunique a su supervisor
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td>
               10. Otros (especificar)……………………………………………………………………………………………………__
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
         </tbody>
         </table>
      </div>
      <div class="container">
         <table class="table">
         <thead>
            <tr>
               <th class="box">PROCEDIMIENTO O INSTRUCCIONES (CUADRO 2)</th>
               <th class="celdas-blade celda-color">SI</th>
               <th class="celdas-blade celda-color">NO</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td  class="box">
               1.- PETS-SR-PTA-01 Operación del Cargador Frontal.
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td class="box">
               2.- PETS-SR-PTA-02 Operación del Rompebancos Atlas Copco # 1.
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td class="box">
               3.- PETS-SR-PTA-04 Operación de Inchancables
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td class="box">
               4.- PETS-SR-PTA-03 Operación de Chancado Primario.
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td>
               |
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td class="box">
               |
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td class="box">
                  |
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td class="box">
               |
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td class="box">
               |
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td class="box">
               |
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td class="box">
               |
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td class="box">
               |
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td class="box">
               |
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td class="box">
               |
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
            <tr>
               <td class="box">
               |
               </td>
               <td class="celdas-blade"></td>
               <td class="celdas-blade"></td>
            </tr>
         </tbody>
         </table>
      </div>
      <div class="container">
         <table class="table">
         <tr>
            <th class="celdas-height" colspan="2">
               TRABAJADORES
            </th>
            <th class="celdas-height supervisor">
               SUPERVISOR DE TURNO
            </th>
         </tr>
         <tr>
            <th class="celdas-height text-align-left">
               NOMBRES:
            </th>
            <th class="celdas-height text-align-left">
               FIRMA
            </th>
            <th class="celdas-height text-align-left" rowspan="2">
               Nombre:
            </th>
         </tr>
         <tr>
            <th class="celdas-height p-name"><p>${name}</p></th>
            <th class="celdas-height"></th>
         </tr>
         <tr>
            <th class="celdas-height"></th>
            <th class="celdas-height"></th>
            <th class="celdas-height text-align-left" rowspan="4">
               FIRMA:
            </th>
         </tr>
         <tr>
            <th class="celdas-height"></th>
            <th class="celdas-height"></th>
         </tr>
         <tr>
            <th class="celdas-height"></th>
            <th class="celdas-height"></th>
         </tr>
         <tr>
            <th class="celdas-height"></th>
            <th class="celdas-height"></th>
         </tr>
         <tr>
            <th class="celda-color" colspan="3">
               NOTA: ANTE CUALQUIER CONDICION DIFERENTE DEBE REALIZAR UNA NUEVA ORDEN DE TRABAJO
            </th>
         </tr>
         </table>
      </div>
   </div>
   </body>
   </html>
   `;
};