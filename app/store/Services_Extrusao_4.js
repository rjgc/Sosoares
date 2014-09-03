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
                text:'Servi�os',
               items: [{
                    text: 'Extrusi�n de Perfiles de Aluminio',
                    html: 'Despu�s de desarrollar la soluci�n con aluminio extruido y una herramienta de implementaci�n que dar� origen al perfil, se procede a la extrusi�n de dicho perfil.'+
                    '<br><br>El proceso de extrusi�n se inicia con precalentamiento (alrededor de 450 � C) para palanquillas de aluminio que a continuaci�n se insertan en la prensa de extrusi�n.'+
                    '<br><br>Con la ayuda de un pist�n, se pulsa el tocho contra un orificio que es la secci�n deseada. Este agujero se ejecuta un troquel de acero especial de alta resistencia. El conjunto se llama la matriz y se compone de una placa y placa posterior.'+
                    '<br><br>La ficha est� en su forma final, a trav�s de la parte frontal de la prensa y es impulsado por un arrastre de engranajes. El perfil del proceso de refrigeraci�n se acelera por convecci�n forzada de aire, la obtenci�n de una planimetr�a final con la ayuda de un proceso de estirado.'+
                    '<br><br>Luego viene el proceso de corte de las barras perfiladas en las medidas solicitadas por el cliente, por lo general 6.00m, 6.50m, 6.30m de largo'+
                    '<br><br>En seguida el proceso de endurecimiento de los perfiles es la siguiente operaci�n y constituye su introducci�n en un horno durante un per�odo de aproximadamente 7 horas a 200 � C. Por �ltimo, el embalaje y el env�o al cliente, el proceso de cierre.'+
                    '<br><br>La calidad del producto final est� garantizada por el control espec�fico aplicado a las diversas etapas del proceso de producci�n.',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Desarrollo y Producci�n de Dies',
                    html: 'Uno de los factores clave en la extrusi�n de perfiles de aluminio es de excelente calidad y dise�o de producci�n de herramientas, moldes, que dan lugar a los mismos.'+
                    '<br><br>Para ofrecer a sus clientes los perfiles de aluminio de alt�sima calidad, y una capacidad de respuesta r�pida en el desarrollo de nuevos dise�os de perfiles Oeiras incorpora una unidad para la producci�n de sus madres.',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ],
            }
    }
});