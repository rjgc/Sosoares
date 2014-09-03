Ext.define('ItalboxCatalog.store.Services_Vidro_4', {
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
                    text: 'Servicios de Vidrio',
                    html: '<ul class="lista"><li>-Mecanizacion</li><li>-Furacion</li><li>-Corte</li><li>-Arestas</li>'+
                           '<li>-Bisel</li><li>-Rincon</li><li>-Tempra</li><ul class="lista"><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dimensiones mínimas: 80 mm x 275mm</li>'+
                           '<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dimensiones máximas: 2600 mm x 4500mm</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Espesor de 3mm a 19mm</li></ul><li>-HST</li><li>-Laminacion</li>'+
                           '<li>-Foscaje</li><li>-Pintura dijital no P.V.B.</li></ul>',
                    foto: 'imgs/servico_vidro3.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
               {
                    text: 'Pintura Digital Ventanal',
                    html: 'La posibilidad de crear una fachada de cristal y personalizarlo con un cuadro, una fotografía o un dibujo, ahora es posible, a través de un proceso de pintura digital. El proceso consiste en depositar la tinta sobre la base de cerámica de vidrio, por un trazador. Después de la impresión, el vidrio pasa a través de un horno de secado y luego revenido a 750 ° horno para pintura esmaltada. Una vez que el vidrio fundido, la tinta se mantiene sin cambios a la radiación solar y resistente a la abrasión, permitiendo de este modo la exposición de los factores agresivos, superficies pintadas no afectados.'+
                    '<br><br<Aunque se puede utilizar en interiores su uso se dirige más hacia el exterior, ya que permite, junto con el vidrio apropiado, un mejor control solar y de transmisión de luz de la graduación sin alteración de los colores impresos.'+
                    '<br><br>Esta nueva tecnología permite a los diseñadores para combinar y ampliar la intensidad de la luz y el control solar, acristalamiento térmico eficiente en una amplia gama de soluciones decorativas donde el límite es la imaginación.',
                    foto: 'imgs/imagem3.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Serigrafia',
                    html: 'Cuando el objetivo es por una repetición de una imagen o dibujo, el método es la impresión de pantalla. Este proceso de grabación es una pantalla micro perforada donde se reproduce la imagen deseada, que se superpone sobre el cristal. Al aplicar la pintura de cerámica encima de la pantalla básica, pasará sólo en espacios con agujeros que se conservan en las áreas restantes. Después de recibir la tinta, el vidrio es llevado a horno de revenido para glasear de la tinta en su interior.'+
                    '<br><br>Los vidrios serigrafiados tienen una gama de aplicaciones: para las paredes, permite, además de la estética, la función como una forma de control solar, lo que garantiza una buena visibilidad desde el interior hacia el exterior; el interior de las puertas, mamparas, cabinas de ducha o incluso muebles ya se aplica con la copa adecuada.'+
                    '<br><br>Cualquiera que sea el tema, o una norma, realizada con uno o varios colores, aplicados en el interior o al aire libre, se garantiza la inviolabilidad de los colores.',
                    foto: 'imgs/imagem2.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Opacificación',
                    html: 'Opacidad es el método más rápido y sencillo cuando se quiere pintar un vidrio con un solo color.'+
                    '<br><br>Consiste en el recubrimiento total y uniforme de un lado del vidrio con pintura.'+
                    '<br><br>La fusión de la tinta sobre las garantías de vidrio inviolabilidad de los colores así que también se recomienda para aplicaciones en exteriores.'+
                    '<br><br>Los efectos estéticos alcanzados por la reflexión de la luz, realzan la belleza de la fachada',
                    foto: 'imgs/imagem4.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ]
            }
    }
});