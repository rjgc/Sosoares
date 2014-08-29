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
                text:'Servi�os',
                items: [{
                    text: 'Anodizado',
                    html: '<p>La anodizaci�n es un proceso electrol�tico que promueve la formaci�n de una decoraci�n de "pel�cula", de protecci�n y uniforme. Esta "pel�cula" o la capa de �xido se clasifican y denominan mediante un n�mero que se corresponde con el espesor en micras (�). La elecci�n de este espesor se define en t�rminos de la agresividad del medio ambiente y normalizado por el <strong>NP1476</strong>.</p><br>'+
'<p>Siendo el espesor normal de 15� puede elegir a 20� a 25� cerca del mar o incluso en condiciones muy especiales (proximidad de f�bricas que producen productos qu�micos, etc). �reas. En el �nodo estado normal, el aluminio se vuelve un aspecto lechoso "mate" podr� recibir tratamientos mec�nicos: pulido (aspecto brillante) o cepillado.</p><br>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
               {
                    text: 'Lacado',
                     html: '<p>El proceso de lacado es una pintura a base de poli�ster, termoestable. Se compone de un ciclo de pretratamiento por inmersi�n principias cuyos efectos se est�n preparando los perfiles para la pintura, protegerlos de la corrosi�n y maximizar la aderencia de la pintura.</p><br>'+
                        '<p>El pretratamiento basado en las siguientes operaciones:</p><br>'+
                        '<ul class="lista">'+
                        '<li>-Ba�o de desengrase </li>'+
                        '<li>-Limpieza actual</li>'+
                        '<li>-Decapado </li>'+
                        '<li>-Limpieza actual</li>'+
                        '<li>-La pasivaci�n</li>'+
                        '<li>-Lave con agua</li>'+
                        '<li>-Lavado con agua desmineralizada </li>'+
                        '<li>-Horno de secado</li>'+
                        '</ul><br>'+
                        '<p>Posteriormente, los perfiles de aluminio entrar�n en las unidades de pintura en donde las part�culas de polvo cargadas con electricidad est�tica, se depositan uniformemente sobre las superficies de los perfiles. Una vez transportado al horno de curado, la temperatura que va a crear una capa uniforme de la laca en los perfiles. </p>'+
                        '<br><p>Control del producto terminado:</p><br>'+
                        '<p>Todo el proceso se lleva a cabo bajo condiciones de control, de acuerdo con la norma de calidad QUALICOAT.</p>'+
                        '<p>Por lo tanto, los ba�os est�n controladas de pre-tratamiento, la temperatura de polimerizaci�n, el espesor observado de la capa de barniz y la aderencia de los mismos, as� como para comprobar el color y el brillo para la comparaci�n (Normas EN ISO).</p>'+
                        '<br><p>Un soporte de laboratorio con equipamiento adecuado garantice el logro de las pruebas f�sicas y qu�micas. </p>'+
                        '<p>Sosoares lacado, constituye la unidad de barnizado Grupo Sosoares y cuenta con el certificado europeo de calidad QUALICOAT.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Imitaci�n Madera',
                    html: '<p>Para satisfacer la creciente demanda de materiales en imitaci�n madera lacada, la Sosoares SA decidi� a mediados de 2004 instalar una nueva unidad para ofrecer a sus clientes productos con este nuevo tratamiento con los mismos est�ndares de calidad aplicados.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ]
            }
        
    }



});