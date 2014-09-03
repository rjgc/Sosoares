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
                text:'Servi�os',
                items: [{
                    text: 'Servicios de Vidrio',
                    html: '<ul class="lista"><li>-Mecanizacion</li><li>-Furacion</li><li>-Corte</li><li>-Arestas</li>'+
                           '<li>-Bisel</li><li>-Rincon</li><li>-Tempra</li><ul class="lista"><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dimensiones m�nimas: 80 mm x 275mm</li>'+
                           '<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dimensiones m�ximas: 2600 mm x 4500mm</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Espesor de 3mm a 19mm</li></ul><li>-HST</li><li>-Laminacion</li>'+
                           '<li>-Foscaje</li><li>-Pintura dijital no P.V.B.</li></ul>',
                    foto: 'imgs/servico_vidro3.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
               {
                    text: 'Pintura Digital Ventanal',
                    html: 'La posibilidad de crear una fachada de cristal y personalizarlo con un cuadro, una fotograf�a o un dibujo, ahora es posible, a trav�s de un proceso de pintura digital. El proceso consiste en depositar la tinta sobre la base de cer�mica de vidrio, por un trazador. Despu�s de la impresi�n, el vidrio pasa a trav�s de un horno de secado y luego revenido a 750 � horno para pintura esmaltada. Una vez que el vidrio fundido, la tinta se mantiene sin cambios a la radiaci�n solar y resistente a la abrasi�n, permitiendo de este modo la exposici�n de los factores agresivos, superficies pintadas no afectados.'+
                    '<br><br<Aunque se puede utilizar en interiores su uso se dirige m�s hacia el exterior, ya que permite, junto con el vidrio apropiado, un mejor control solar y de transmisi�n de luz de la graduaci�n sin alteraci�n de los colores impresos.'+
                    '<br><br>Esta nueva tecnolog�a permite a los dise�adores para combinar y ampliar la intensidad de la luz y el control solar, acristalamiento t�rmico eficiente en una amplia gama de soluciones decorativas donde el l�mite es la imaginaci�n.',
                    foto: 'imgs/imagem3.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Serigrafia',
                    html: 'Cuando el objetivo es por una repetici�n de una imagen o dibujo, el m�todo es la impresi�n de pantalla. Este proceso de grabaci�n es una pantalla micro perforada donde se reproduce la imagen deseada, que se superpone sobre el cristal. Al aplicar la pintura de cer�mica encima de la pantalla b�sica, pasar� s�lo en espacios con agujeros que se conservan en las �reas restantes. Despu�s de recibir la tinta, el vidrio es llevado a horno de revenido para glasear de la tinta en su interior.'+
                    '<br><br>Los vidrios serigrafiados tienen una gama de aplicaciones: para las paredes, permite, adem�s de la est�tica, la funci�n como una forma de control solar, lo que garantiza una buena visibilidad desde el interior hacia el exterior; el interior de las puertas, mamparas, cabinas de ducha o incluso muebles ya se aplica con la copa adecuada.'+
                    '<br><br>Cualquiera que sea el tema, o una norma, realizada con uno o varios colores, aplicados en el interior o al aire libre, se garantiza la inviolabilidad de los colores.',
                    foto: 'imgs/imagem2.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Opacificaci�n',
                    html: 'Opacidad es el m�todo m�s r�pido y sencillo cuando se quiere pintar un vidrio con un solo color.'+
                    '<br><br>Consiste en el recubrimiento total y uniforme de un lado del vidrio con pintura.'+
                    '<br><br>La fusi�n de la tinta sobre las garant�as de vidrio inviolabilidad de los colores as� que tambi�n se recomienda para aplicaciones en exteriores.'+
                    '<br><br>Los efectos est�ticos alcanzados por la reflexi�n de la luz, realzan la belleza de la fachada',
                    foto: 'imgs/imagem4.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ]
            }
    }
});