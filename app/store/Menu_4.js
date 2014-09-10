Ext.define('ItalboxCatalog.store.Menu_4', {
        extend: 'Ext.data.TreeStore',
        //defaultRootProperty: 'items',
        config: {
             fields: [
                {name: 'id',type: 'int'},
                {name: 'text',type: 'string'},
               /* {name: 'descricao',type: 'string'},*/
                {name: 'foto', type: 'string' },
                {name: 'html', type: 'string' },
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
                text:'Menu',
                items: [/*{
                    id: 'grupo',
                    text: 'Grupo Sosoares',
                    icon: 'icon-sosoares',
                    items: [{
                        text: 'Sobre Nós',
                        icon: 'icon-sosoares',
                        leaf: true
                    },
                    {
                        text: 'Quem Somos',
                        icon: 'icon-obras',
                        leaf: true
                    },
                    {
                        text: 'Missões e Valores',
                        icon: 'icon-obras',
                        leaf: true
                    },
                    {
                        text: 'Mercados Alvo',
                        icon: 'icon-obras',
                        leaf: true
                    },
                    {
                        text: 'Áreas Comerciais',
                        icon: 'icon-obras',
                        leaf: true
                    }]
                },*/
                {
                    id: 1,
                    text: 'Asistencia al Cliente',
                    icon: 'icon-apoio',
                    html: '<h3 class="title3">Asistencia al Cliente Aluminio</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/comercial.png" alt=""></p>'+
                    '<p>El Grupo Sosoares tiene a su dispinibilidad, para la difusión de los sistemas de aluminio para arqutectura un total de 10 técnicos y representantes de ventas, cuya función es apoyar a nuestros clientes. Así, el tiempo puede ser minimizado en la búsqueda de información y la obtención de apoyo.</p><br>'+
                    '<p>Con la creciente necesidad de controlar y Asesoría Técnica era imperativo pasar de vendedor tradicional con alguien cuya experiencia permite otra cosa que no sea el apoyo comercial, intervino en la redacción y la formación de nuestros sistemas de marco.</p><br>'+
                    '<p>Para ello, el Grupo Sosoares ha realizado el paso categoría vendedor al delegado técnico comercial. Al ser algo más que un cambio de nombre fue una creciente y sostenida paso del conocimiento para que podamos estar cada vez más en realizar un apoyo personalizado.</p><br>'+
                    '<h3 class="title3">Departamento de Presupuesto Aluminio</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/orcamentacao.jpg" alt=""></p>'+
                    '<p>El Grupo Sosoares asegura que todos los sistemas de clarificación técnicas necesarias para su correcta aplicación. El presupuesto de los proyectos es un servicio confiable y valioso para nuestros clientes.</p>'+
                    '<p>Contamos con tres oficinas técnicas en todo el país con empleados capaces, no sólo para aclarar las dudas que puedan surgir con nuestros clientes, sino también de asesorar a la que mejor se adapte a los más diversos sistemas de situaciones. El presupuesto de los diferentes proyectos, hace que nuestros clientes pueden tener una alta capacidad de respuesta al cliente final. La fiabilidad y la precisión en nuestras propuestas fiscales evitar sorpresas en la adjudicación de los proyectos.</p><br>'+               
                    '<h3 class="title3">Estudio de Obras / Detalle Aluminio</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Con la creciente preocupación en estudios de energía, unos buenos marcos de solución es cada vez más influyente en todo el rendimiento acústico y térmico de una vivienda.</p><br>'+
                    '<p>La nueva legislación en materia de calificación de la energía deja de ser asesorado y será obligatorio, de manera que las tramas cada vez más los sistemas tienen que ser estudiadas según el tipo de vivienda, ubicación, orientación, etc.</p><br>'+
                    '<p>El Grupo Sosoares ayuda a sus clientes en todas las fases, desde la promoción y el apoyo, el asesoramiento y la elaboración de presupuestos, para que nada falle en lo que puede tener influencia en el último nivel de confort de la vivienda. </p><br>'+
                    '<p>Para ello, ofrece los prescriptores para apoyar diseñadores durante el estudio técnico y los detalles de cualquier trabajo. Con este servicio, tratamos de hacer que las soluciones son tan apropiados como sea posible a las obras que se van a recibir.</p><br>'+
                    '<table style="">'+
                    '<tbody>'+
                    '<tr>'+
                    '<td><p style="color: #107ca4 !important;"><strong>ZONA NORTE</strong></p><br><span>Nuno Oliveira</span><br><span>+351 936 456 144</span><br><span><a href="mailto:nuno.oliveira@sosoares.pt">nuno.oliveira@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONA CENTRO</strong></p><br><span>Nuno Fernandes</span><br><span>+351 936 454 274</span><br><span><a href="mailto:nuno.fernandes@sosoares.pt">nuno.fernandes@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONA SUR</strong></p><br><span>Nélson Morganho</span><br><span>+351 918 193 949</span><br><span><a href="mailto:nelson.morganho@sosoares.pt">nelson.morganho@sosoares.pt</a></span>&nbsp;</td>'+
                    '</tr>'+
                    '</tbody>'+
                    '</table><br><br>',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Contactos',
                    icon: 'icon-call',
                    html:'<h3>Departamento Administrativo</h3>'+
                        '<span id="mails"><a href="mailto:geral@sosoares.pt">geral@sosoares.pt</a></span>'+
                        '<p>Rua do Baldeirão, 4440-346</p>'+
                        '<p>Sobrado, Valongo - Portugal</p>'+
                        '<p>T +351 224 119 230</p>'+
                        '<p>F +351 224 119 231</p><br>'+
                        '<h3>Departamento Comercial</h3>'+
                        '<span id="mails"><a href="mailto:comercial@sosoares.pt">comercial@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto - Portugal</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                        '<h3>Departamento Técnico</h3>'+
                        '<span id="mails"><a href="mailto:gabinete.tecnico@sosoares.pt">gabinete.tecnico@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                         '<h3>Departamento de Desarrollo </h3>'+
                        '<span id="mails"><a href="mailto:desenvolvimento@sosoares.pt">desenvolvimento@sosoares.pt</a></span>'+
                        '<p>Travessa do Bolegão, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 740</p>'+
                        '<p>F +351 234 729 741</p><br>'+
                         '<h3>Departamento de Exportación</h3>'+
                        '<span id="mails"><a href="mailto:export@sosoares.pt">export@sosoares.pt</a></span>'+
                        '<p>Travessa do Bolegão, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 743</p>'+
                        '<p>F +351 234 729 741</p>',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                },
                {
                    id: 3,
                    text: 'Dónde estamos',
                    icon: 'icon-local',
                    html: '',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                },
                {
                    id: 4,
                    text: 'Idiomas',
                    icon: 'icon-language',
                    items: [
                    {
                        id: 10,
                        text: 'Português',
                        icon: '',
                        leaf: true,
                    },
                    {
                        id: 11,
                        text: 'English',
                        icon: '',
                        leaf: true,
                    },
                    {
                        id: 12,
                        text: 'Français',
                        icon: '',
                        leaf: true,
                    },
                    {
                        id: 13,
                        text: 'Espanhol',
                        icon: '',
                        leaf: true,
                    }
                    ]
                },
                /*{
                    id: 5,
                    text: 'Ayuda',
                    icon: 'icon-help',
                    html: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                }*/
                ]
            }
        
    }



});