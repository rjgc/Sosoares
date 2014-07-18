Ext.define('ItalboxCatalog.store.Services_Vidro', {
        extend: 'Ext.data.TreeStore',
        //defaultRootProperty: 'items',
        config: {
             fields: [
                {name: 'id',type: 'string'},
                {name: 'text',type: 'string'},
                {name: 'html',type: 'string'},
                {name: 'foto',type: 'string'},
               /* {name: 'descricao',type: 'string'},*/
                {name: 'icon', type: 'string' },
             ],
      /*  defaultRootProperty: 'items',
        proxy: {
            type: 'ajax',
            url: 'http://critecns.com/sosoares_app/connect2.php?table=produtos_aluminio'
        },*/
        autoLoad: true,
        /*root: {
            text:'Menu'
        },*/
        //model: 'App.model.Grocery',
            defaultRootProperty: 'items',
            root: {
                text:'Servi�os',
                items: [{
                    text: 'Servi�os de Vidro',
                    html: '<ul class="lista"><li>-Mecaniza��o</li><li>-Fura��o</li><li>-Corte</li><li>-Arestas</li>'+
                           '<li>-Bisel</li><li>-Rincon</li><li>-T�mpera</li><ul class="lista"><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dimens�es m�nimas: 80 mm x 275mm</li>'+
                           '<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dimens�es m�ximas: 2600 mm x 4500mm</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Espessuras de 3mm a 19mm</li></ul><li>-HST</li><li>-Lamina��o</li>'+
                           '<li>-Foscagem</li><li>-Pintura digital no P.V.B.</li></ul>',
                    foto: 'imgs/servico_vidro3.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
               {
                    text: 'Pintura Digital Vitrificada',
                     html: 'A possibilidade de criar uma fachada em vidro e personaliz�-la com uma imagem, uma fotografia ou um desenho, � agora poss�vel, por interm�dio de um processo de pintura digital. O processo consiste na deposi��o da tinta de base cer�mica no vidro, atrav�s de uma plotter.'+
                           'Ap�s impress�o, o vidro passa pela estufa de secagem e seguidamente pelo forno de t�mpera a 750� para a tinta vitrificar. Uma vez fundida no vidro, a tinta mant�m-se inalter�vel � radia��o solar e resistente � abras�o, permitindo deste modo a exposi��o das superf�cies pintadas a fatores agressivos sem serem afetadas.'+
                           'Embora possa ser aplicado em interiores a sua utiliza��o est� mais direcionada para o exterior pois permite, juntamente com o vidro apropriado, um melhor controlo solar bem como de gradua��o da transmiss�o luminosa sem altera��o das cores impressas.'+
                           'Esta nova tecnologia permite aos projectistas combinar e graduar a intensidade luminosa e o controlo solar em vidros termicamente eficientes num amplo leque de solu��es decorativas onde o limite � o imagin�rio.',
                    foto: 'imgs/imagem3.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Serigrafia',
                    html: '<p>Quando o objectivo passa por uma repeti��o de uma imagem ou desenho, o m�todo a utilizar ser� a serigrafia. Este processo de grava��o consiste numa tela micro perfurada onde � reproduzida a imagem pretendida, a qual � sobreposta no vidro. Ao aplicar a tinta de base cer�mica por cima da tela, ela ir� passar apenas nos espa�os com orif�cios ficando retida nas restantes �reas. Depois de receber a tinta, o vidro � levado ao forno de t�mpera para que a tinta vitrifique nele.</p>'+
                          '<p>Os vidros serigrafados t�m variad�ssimas aplica��es: em fachadas, permite para al�m da parte est�tica, funcionar como forma de controlo solar, assegurando uma boa visibilidade do interior para o exterior; no interior, desde portas, divis�rias, cabines de duche ou at� mobili�rio, desde que aplicada com o vidro adequado.</p>'+
                          '<p>Qualquer que seja o motivo pretendido, standard ou personalizado, realizado com uma ou mais cores, aplicado no interior ou no exterior, a inalterabilidade das cores � garantida.</p>',
                    foto: 'imgs/imagem2.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Opacifica��o',
                    html: '<p style="text-align: justify;">A opacifica��o � o m�todo mais r�pido e simples quando se pretende pintar um vidro com uma �nica cor.</p>'+
                        '<p style="text-align: justify;">Consiste no revestimento total e uniforme de uma das faces do vidro com a tinta.</p>'+
                        '<p style="text-align: justify;">A fus�o da tinta no vidro garante a inalterabilidade das cores pelo que tamb�m se recomenda a sua aplica��o no exterior.</p>'+
                        '<p style="text-align: justify;">Os efeitos est�ticos conseguidos pela reflex�o da luz, real�am a beleza da fachada</p>',
                    foto: 'imgs/imagem4.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ]
            }
        
    }



});