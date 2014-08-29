Ext.define('ItalboxCatalog.store.Services_Caixilharia_4', {
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
                text:'Serviços',
                items: [{
                    text: 'Anodizado',
                    html: '<p>La anodización es un proceso electrolítico que promueve la formación de una decoración de "película", de protección y uniforme. Esta "película" o la capa de óxido se clasifican y denominan mediante un número que se corresponde con el espesor en micras (µ). La elección de este espesor se define en términos de la agresividad del medio ambiente y normalizado por el <strong>NP1476</strong>.</p><br>'+
'<p>Siendo el espesor normal de 15µ puede elegir a 20µ a 25µ cerca del mar o incluso en condiciones muy especiales (proximidad de fábricas que producen productos químicos, etc). Áreas. En el ánodo estado normal, el aluminio se vuelve un aspecto lechoso "mate" podrá recibir tratamientos mecánicos: pulido (aspecto brillante) o cepillado.</p><br>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
               {
                    text: 'Lacado',
                     html: '<p>El proceso de lacado es una pintura a base de poliéster, termoestable. Se compone de un ciclo de pretratamiento por inmersión principias cuyos efectos se están preparando los perfiles para la pintura, protegerlos de la corrosión y maximizar la aderencia de la pintura.</p><br>'+
                        '<p>El pretratamiento basado en las siguientes operaciones:</p><br>'+
                        '<ul class="lista">'+
                        '<li>-Baño de desengrase </li>'+
                        '<li>-Limpieza actual</li>'+
                        '<li>-Decapado </li>'+
                        '<li>-Limpieza actual</li>'+
                        '<li>-La pasivación</li>'+
                        '<li>-Lave con agua</li>'+
                        '<li>-Lavado con agua desmineralizada </li>'+
                        '<li>-Horno de secado</li>'+
                        '</ul><br>'+
                        '<p>Posteriormente, los perfiles de aluminio entrarán en las unidades de pintura en donde las partículas de polvo cargadas con electricidad estática, se depositan uniformemente sobre las superficies de los perfiles. Una vez transportado al horno de curado, la temperatura que va a crear una capa uniforme de la laca en los perfiles. </p>'+
                        '<br><p>Control del producto terminado:</p><br>'+
                        '<p>Todo el proceso se lleva a cabo bajo condiciones de control, de acuerdo con la norma de calidad QUALICOAT.</p>'+
                        '<p>Por lo tanto, los baños están controladas de pre-tratamiento, la temperatura de polimerización, el espesor observado de la capa de barniz y la aderencia de los mismos, así como para comprobar el color y el brillo para la comparación (Normas EN ISO).</p>'+
                        '<br><p>Un soporte de laboratorio con equipamiento adecuado garantice el logro de las pruebas físicas y químicas. </p>'+
                        '<p>Sosoares lacado, constituye la unidad de barnizado Grupo Sosoares y cuenta con el certificado europeo de calidad QUALICOAT.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Imitación Madera',
                    html: '<p>Para satisfacer la creciente demanda de materiales en imitación madera lacada, la Sosoares SA decidió a mediados de 2004 instalar una nueva unidad para ofrecer a sus clientes productos con este nuevo tratamiento con los mismos estándares de calidad aplicados.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ]
            }
        
    }



});