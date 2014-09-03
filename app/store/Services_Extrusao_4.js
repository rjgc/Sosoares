Ext.define('ItalboxCatalog.store.Services_Extrusao_4', {
        extend: 'Ext.data.TreeStore',
        config: {
             fields: [
                {name: 'id',type: 'string'},
                {name: 'text',type: 'string'},
                {name: 'html',type: 'string'},
                {name: 'foto',type: 'string'},
                {name: 'icon', type: 'string' },
             ],
        autoLoad: true,
            defaultRootProperty: 'items',
            root: {
                text:'Serviços',
               items: [{
                    text: 'Extrusión de Perfiles de Aluminio',
                    html: 'Después de desarrollar la solución con aluminio extruido y una herramienta de implementación que dará origen al perfil, se procede a la extrusión de dicho perfil.'+
                    '<br><br>El proceso de extrusión se inicia con precalentamiento (alrededor de 450 ° C) para palanquillas de aluminio que a continuación se insertan en la prensa de extrusión.'+
                    '<br><br>Con la ayuda de un pistón, se pulsa el tocho contra un orificio que es la sección deseada. Este agujero se ejecuta un troquel de acero especial de alta resistencia. El conjunto se llama la matriz y se compone de una placa y placa posterior.'+
                    '<br><br>La ficha está en su forma final, a través de la parte frontal de la prensa y es impulsado por un arrastre de engranajes. El perfil del proceso de refrigeración se acelera por convección forzada de aire, la obtención de una planimetría final con la ayuda de un proceso de estirado.'+
                    '<br><br>Luego viene el proceso de corte de las barras perfiladas en las medidas solicitadas por el cliente, por lo general 6.00m, 6.50m, 6.30m de largo'+
                    '<br><br>En seguida el proceso de endurecimiento de los perfiles es la siguiente operación y constituye su introducción en un horno durante un período de aproximadamente 7 horas a 200 ° C. Por último, el embalaje y el envío al cliente, el proceso de cierre.'+
                    '<br><br>La calidad del producto final está garantizada por el control específico aplicado a las diversas etapas del proceso de producción.',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Desarrollo y Producción de Dies',
                    html: 'Uno de los factores clave en la extrusión de perfiles de aluminio es de excelente calidad y diseño de producción de herramientas, moldes, que dan lugar a los mismos.'+
                    '<br><br>Para ofrecer a sus clientes los perfiles de aluminio de altísima calidad, y una capacidad de respuesta rápida en el desarrollo de nuevos diseños de perfiles Oeiras incorpora una unidad para la producción de sus madres.',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ],
            }
    }
});