Ext.define('ItalboxCatalog.store.Menu_3', {
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
                items: [
                {
                    id: 1,
                    text: 'Service Client',
                    icon: 'icon-apoio',
                    html: '<h3 class="title3">Appui Commercial Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/comercial.png" alt=""></p>'+
                    '<p>Le Grupo Sosoares met � votre disposition pour la diffusion de ses syst�mes en aluminium pour l�architecture, un total de 10 techniciens et commerciaux dont la fonction est d�aider nos clients. Ainsi, la perte de temps dans la recherche d�informations ou l�obtention d�une assistance est minimis�e.</p><br>'+
                    '<p>Avec l�augmentation des besoins dans l�accompagnement et le conseil technique, il �tait essentiel de faire �voluer le traditionnel vendeur vers quelqu�un, dont les connaissances techniques vont au del� de l�aspect commercial, qui est intervenu et a �t� form� dans l��laboration de nos diff�rents syst�mes.</p><br>'+ 
                    '<h3 class="title3">Bureau des Devis Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/orcamentacao.jpg" alt=""></p>'+
                    '<p>Le Grupo Sosoares s�engage � donner toutes les explications techniques n�cessaires de nos syst�mes afin de garantir leur mise en �uvre. Le bureau d��tude des projets �laborant les devis est fiable et pr�cieux pour nos clients.</p>'+
                    '<p>Pour cela, nous comptons trois bureaux techniques dispers�s dans le pays avec des employ�s capables de lever tous les doutes pouvant surgir chez nos clients, mais �galement de les conseiller sur le syst�me le plus adapt� face aux situations les plus diverses.</p><br>'+
                    '<h3 class="title3">Etudes de Travaux / Description D�taill�e Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Avec la pr�occupation croissante dans nos �tudes de consommation d��nergie, une bonne solution de menuiserie est tr�s attractive gr�ce aux performances thermiques et acoustiques dans une construction.</p><br>'+
                    '<p>La nouvelle l�gislation sur la classification �nerg�tique ne repr�sente plus seulement un conseil, elle devient obligatoire. Ce qui fait que chaque fois les syst�mes de ch�ssis doivent �tre �tudi�s et conformes au type de construction, localisation, orientation, etc.</p><br>'+
                    '<p>Le Grupo Sosoares accompagne ses clients/partenaires dans toutes les phases, depuis la promotion et l�assistance, le conseil et l��tude des devis, afin que rien n��choue dans tout ce qui pourrait avoir un impact au niveau du confort final de la construction. C�est pourquoi, les techniciens projeteurs disposent de prescripteurs durant l��tude des d�tails de chaque chantier.</p><br>'+
                    '<p>Avec ce service, nous tentons de donner � chaque chantier les solutions les plus adapt�es.</p><br>'+
                    '<table style="">'+
                    '<tbody>'+
                    '<tr>'+
                    '<td><p style="color: #107ca4 !important;"><strong>ZONE NORD</strong></p><br><span>Nuno Oliveira</span><br><span>+351 936 456 144</span><br><span><a href="mailto:nuno.oliveira@sosoares.pt">nuno.oliveira@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONE CENTRALE</strong></p><br><span>Nuno Fernandes</span><br><span>+351 936 454 274</span><br><span><a href="mailto:nuno.fernandes@sosoares.pt">nuno.fernandes@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONE SUD</strong></p><br><span>N�lson Morganho</span><br><span>+351 918 193 949</span><br><span><a href="mailto:nelson.morganho@sosoares.pt">nelson.morganho@sosoares.pt</a></span>&nbsp;</td>'+
                    '</tr>'+
                    '</tbody>'+
                    '</table><br><br>',
                    
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Contacts',
                    icon: 'icon-call',
                    html:'<h3>D�partement Administratif</h3>'+
                        '<span id="mails"><a href="mailto:geral@sosoares.pt">geral@sosoares.pt</a></span>'+
                        '<p>Rua do Baldeir�o, 4440-346</p>'+
                        '<p>Sobrado, Valongo - Portugal</p>'+
                        '<p>T +351 224 119 230</p>'+
                        '<p>F +351 224 119 231</p><br>'+
                        '<h3>D�partement Commercial</h3>'+
                        '<span id="mails"><a href="mailto:comercial@sosoares.pt">comercial@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto - Portugal</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                        '<h3>D�partement Technique</h3>'+
                        '<span id="mails"><a href="mailto:gabinete.tecnico@sosoares.pt">gabinete.tecnico@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                        '<h3>D�partement du d�veloppement </h3>'+
                        '<span id="mails"><a href="mailto:desenvolvimento@sosoares.pt">desenvolvimento@sosoares.pt</a></span>'+
                        '<p>Travessa do Boleg�o, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 740</p>'+
                        '<p>F +351 234 729 741</p><br>'+
                        '<h3>D�partement de l\'exportation</h3>'+
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
                    text: 'O� Nous Sommes ',
                    icon: 'icon-local',
                    html: '',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                },
                {
                    id: 4,
                    text: 'Langues',
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
                    text: 'Aide',
                    icon: 'icon-help',
                    html: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                }*/
                ]
            }
        
    }



});