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
                        text: 'Sobre N�s',
                        icon: 'icon-sosoares',
                        leaf: true
                    },
                    {
                        text: 'Quem Somos',
                        icon: 'icon-obras',
                        leaf: true
                    },
                    {
                        text: 'Miss�es e Valores',
                        icon: 'icon-obras',
                        leaf: true
                    },
                    {
                        text: 'Mercados Alvo',
                        icon: 'icon-obras',
                        leaf: true
                    },
                    {
                        text: '�reas Comerciais',
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
                    '<p>El Grupo Sosoares tiene a su dispinibilidad, para la difusi�n de los sistemas de aluminio para arqutectura un total de 10 t�cnicos y representantes de ventas, cuya funci�n es apoyar a nuestros clientes. As�, el tiempo puede ser minimizado en la b�squeda de informaci�n y la obtenci�n de apoyo.</p><br>'+
                    '<p>Con la creciente necesidad de controlar y Asesor�a T�cnica era imperativo pasar de vendedor tradicional con alguien cuya experiencia permite otra cosa que no sea el apoyo comercial, intervino en la redacci�n y la formaci�n de nuestros sistemas de marco.</p><br>'+
                    '<p>Para ello, el Grupo Sosoares ha realizado el paso categor�a vendedor al delegado t�cnico comercial. Al ser algo m�s que un cambio de nombre fue una creciente y sostenida paso del conocimiento para que podamos estar cada vez m�s en realizar un apoyo personalizado.</p><br>'+
                    '<h3 class="title3">Departamento de Presupuesto Aluminio</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/orcamentacao.jpg" alt=""></p>'+
                    '<p>El Grupo Sosoares asegura que todos los sistemas de clarificaci�n t�cnicas necesarias para su correcta aplicaci�n. El presupuesto de los proyectos es un servicio confiable y valioso para nuestros clientes.</p>'+
                    '<p>Contamos con tres oficinas t�cnicas en todo el pa�s con empleados capaces, no s�lo para aclarar las dudas que puedan surgir con nuestros clientes, sino tambi�n de asesorar a la que mejor se adapte a los m�s diversos sistemas de situaciones. El presupuesto de los diferentes proyectos, hace que nuestros clientes pueden tener una alta capacidad de respuesta al cliente final. La fiabilidad y la precisi�n en nuestras propuestas fiscales evitar sorpresas en la adjudicaci�n de los proyectos.</p><br>'+               
                    '<h3 class="title3">Estudio de Obras / Detalle Aluminio</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Con la creciente preocupaci�n en estudios de energ�a, unos buenos marcos de soluci�n es cada vez m�s influyente en todo el rendimiento ac�stico y t�rmico de una vivienda.</p><br>'+
                    '<p>La nueva legislaci�n en materia de calificaci�n de la energ�a deja de ser asesorado y ser� obligatorio, de manera que las tramas cada vez m�s los sistemas tienen que ser estudiadas seg�n el tipo de vivienda, ubicaci�n, orientaci�n, etc.</p><br>'+
                    '<p>El Grupo Sosoares ayuda a sus clientes en todas las fases, desde la promoci�n y el apoyo, el asesoramiento y la elaboraci�n de presupuestos, para que nada falle en lo que puede tener influencia en el �ltimo nivel de confort de la vivienda. </p><br>'+
                    '<p>Para ello, ofrece los prescriptores para apoyar dise�adores durante el estudio t�cnico y los detalles de cualquier trabajo. Con este servicio, tratamos de hacer que las soluciones son tan apropiados como sea posible a las obras que se van a recibir.</p><br>'+
                    '<table style="">'+
                    '<tbody>'+
                    '<tr>'+
                    '<td><p style="color: #107ca4 !important;"><strong>ZONA NORTE</strong></p><br><span>Nuno Oliveira</span><br><span>+351 936 456 144</span><br><span><a href="mailto:nuno.oliveira@sosoares.pt">nuno.oliveira@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONA CENTRO</strong></p><br><span>Nuno Fernandes</span><br><span>+351 936 454 274</span><br><span><a href="mailto:nuno.fernandes@sosoares.pt">nuno.fernandes@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONA SUR</strong></p><br><span>N�lson Morganho</span><br><span>+351 918 193 949</span><br><span><a href="mailto:nelson.morganho@sosoares.pt">nelson.morganho@sosoares.pt</a></span>&nbsp;</td>'+
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
                        '<p>Rua do Baldeir�o, 4440-346</p>'+
                        '<p>Sobrado, Valongo - Portugal</p>'+
                        '<p>T +351 224 119 230</p>'+
                        '<p>F +351 224 119 231</p><br>'+
                        '<h3>Departamento Comercial</h3>'+
                        '<span id="mails"><a href="mailto:comercial@sosoares.pt">comercial@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto - Portugal</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                        '<h3>Departamento T�cnico</h3>'+
                        '<span id="mails"><a href="mailto:gabinete.tecnico@sosoares.pt">gabinete.tecnico@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                         '<h3>Departamento de Desarrollo </h3>'+
                        '<span id="mails"><a href="mailto:desenvolvimento@sosoares.pt">desenvolvimento@sosoares.pt</a></span>'+
                        '<p>Travessa do Boleg�o, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 740</p>'+
                        '<p>F +351 234 729 741</p><br>'+
                         '<h3>Departamento de Exportaci�n</h3>'+
                        '<span id="mails"><a href="mailto:export@sosoares.pt">export@sosoares.pt</a></span>'+
                        '<p>Travessa do Boleg�o, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 743</p>'+
                        '<p>F +351 234 729 741</p>',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                },
                {
                    id: 3,
                    text: 'D�nde estamos',
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
                        text: 'Portugu�s',
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
                        text: 'Fran�ais',
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