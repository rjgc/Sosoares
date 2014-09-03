Ext.define('ItalboxCatalog.store.Services_Vidro_3', {
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
                    text: 'Services de Verre',
                    html: '<ul class="lista"><li>-Mécanisation</li><li>-Perçage</li><li>-Coupe</li><li>-Bords</li>'+
                           '<li>-Chanfrein</li><li>-Angle</li><li>-Trempé</li><ul class="lista"><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dimensions minimales : 80 mm x 275mm</li>'+
                           '<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dimensions maximales: 2600 mm x 4500mm</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Epaisseurs de 3mm à 19mm</li></ul><li>-HST</li><li>-Stratification avec pellicules spéciales</li>'+
                           '<li>-Décors par dépolissage</li><li>-Stratifié contrôle acoustique</li></ul>',
                    foto: 'imgs/servico_vidro3.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
               {
                    text: 'Peinture Numérique Glacé',
                     html: 'A possibilidade de criar uma fachada em vidro e personalizá-la com uma imagem, uma fotografia ou um desenho, é agora possível, por intermédio de um processo de pintura digital.<br> O processo consiste na deposição da tinta de base cerâmica no vidro, através de uma plotter. '+
                           'Após impressão, o vidro passa pela estufa de secagem e seguidamente pelo forno de têmpera a 750° para a tinta vitrificar. Uma vez fundida no vidro, a tinta mantém-se inalterável à radiação solar e resistente à abrasão, permitindo deste modo a exposição das superfícies pintadas a fatores agressivos sem serem afetadas.'+
                           '<br><br>Embora possa ser aplicado em interiores a sua utilização está mais direcionada para o exterior pois permite, juntamente com o vidro apropriado, um melhor controlo solar bem como de graduação da transmissão luminosa sem alteração das cores impressas.'+
                           '<br><br>Esta nova tecnologia permite aos projectistas combinar e graduar a intensidade luminosa e o controlo solar em vidros termicamente eficientes num amplo leque de soluções decorativas onde o limite é o imaginário.',
                    foto: 'imgs/imagem3.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Serigraphie',
                    html: '<p>Quando o objectivo passa por uma repetição de uma imagem ou desenho, o método a utilizar será a serigrafia.<br>Este processo de gravação consiste numa tela micro perfurada onde é reproduzida a imagem pretendida, a qual é sobreposta no vidro. Ao aplicar a tinta de base cerâmica por cima da tela, ela irá passar apenas nos espaços com orifícios ficando retida nas restantes áreas. Depois de receber a tinta, o vidro é levado ao forno de têmpera para que a tinta vitrifique nele.</p>'+
                          '<br><p>Os vidros serigrafados têm variadíssimas aplicações: em fachadas, permite para além da parte estética, funcionar como forma de controlo solar, assegurando uma boa visibilidade do interior para o exterior; no interior, desde portas, divisórias, cabines de duche ou até mobiliário, desde que aplicada com o vidro adequado.</p>'+
                          '<br><p>Qualquer que seja o motivo pretendido, standard ou personalizado, realizado com uma ou mais cores, aplicado no interior ou no exterior, a inalterabilidade das cores é garantida.</p>',
                    foto: 'imgs/imagem2.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Opacification',
                    html: '<p style="text-align: justify;">A opacificação é o método mais rápido e simples quando se pretende pintar um vidro com uma única cor.</p>'+
                        '<br><p style="text-align: justify;">Consiste no revestimento total e uniforme de uma das faces do vidro com a tinta.</p>'+
                        '<br><p style="text-align: justify;">A fusão da tinta no vidro garante a inalterabilidade das cores pelo que também se recomenda a sua aplicação no exterior.</p>'+
                        '<br><p style="text-align: justify;">Os efeitos estéticos conseguidos pela reflexão da luz, realçam a beleza da fachada</p>',
                    foto: 'imgs/imagem4.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ]
            }
    }
});