Ext.define('ItalboxCatalog.store.Services_Vidro_2', {
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
                    text: 'Glass Services',
                    html: '<ul class="lista"><li>-Mechanization</li><li>-Drilling</li><li>-Cut</li><li>-Edges</li>'+
                           '<li>-Bevel</li><li>-Rincon</li><li>-Tempering</li><ul class="lista"><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minimum measurements: 80 mm x 275mm</li>'+
                           '<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maximum measurements: 2600 mm x 4500mm</li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thickness between 3mm and 19mm</li></ul><li>-HST</li><li>-Lamination</li>'+
                           '<li>-Delustring</li><li>-Digital Painting in P.V.B.</li></ul>',
                    foto: 'imgs/servico_vidro3.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
               {
                    text: 'Glazed Digital Painting',
                    html: '<p style="text-align: justify;">The possibility of create a glass façade and customize it with an image, a picture or a draw, is now possible by a process of digital painting. The process consists in the deposition of ink on the glass ceramic base, through a plotter. After printing, the glass passes through the kiln and then through the oven with the temperature of 750 for paint glaze. Once the molten glass, the ink stays unalterable to the solar radiation and resists abrasion, allowing the exposure of the painted surfaces to aggressive factors unaffected.</p>'+
                    '<br><p style="text-align: justify;">Although it can be applied in the interiors, their use is more directed to the outside because it allows, together with the appropriate glass, better solar control as well as the graduation of the light transmission without changing of printed colors.'+
                    '<br><br>This new technology allows the designers to combine the light intensity and solar control glass thermally efficient in a wide range of decorative solutions where the limit is the imagination.</p>',
                    foto: 'imgs/imagem3.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Serigraphy',
                    html: '<p>When the objective passes through the repetition of an image or a draw, the method that is used will be the silkscreen. This process consists in a micro perforated screen where the desired image is reproduced, which is superimposed on the glass. When applying the paint ceramic base above the screen, it will pass only in the spaces with holes and will be retained in the remaining areas. After receiving the ink, the glass is taken to the oven for the ink to glaze it.</p>'+
                    '<br><p>The screen printed glass has varied applications: in façades, besides the aesthetics, it functions as a form of solar control, ensuring a good visibility from the inside to the outside; from doors, partitions shower cubicles and also furniture, if applied with the proper glass.</p>'+
                    '<br><p>Whatever the reason for the intended subject, standard or custom, accomplished with one or more colors, applied in the inside or in the outside, the inalterability of the colors is guaranteed.</p>',
                    foto: 'imgs/imagem2.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Opacification',
                    html: '<p style="text-align: justify;">The opacification is the faster and simplest method when we want to paint a glass with a single color.</p>'+
                    '<br><p style="text-align: justify;">It consists in the total and equal coating of one side of the glass with ink.</p>'+
                    '<br><p style="text-align: justify;">The fusion of the ink in the glass guarantee the inalterability of the colors being the application also recommended for the outside.</p>'+
                    '<br><p style="text-align: justify;">The aesthetic effects accomplished by the light reflection highlight the beauty of the façade.</p>',
                    foto: 'imgs/imagem4.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ]
            }
    }
});