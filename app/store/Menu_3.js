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
                    '<h3 class="title3">Assistance Technique Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/technical-support.jpg" alt=""></p>'+
                    '<p>Le Grupo Sosoares dispose d�une assistance technique en menuiserie/mise en ouvre.</p><br>'+
                    '<p>Ce service a pour objectif de former nos clients sur la modification de nos syst�mes. Un syst�me atteint ses r�elles capacit�s quand il est install� de mani�re correcte.</p><br>'+
                    '<p>Les clients amen�s � mettre en �uvre un nouveau syst�me de menuiseries et de ch�ssis, peuvent demander une formation technique par le biais de l�interlocuteur commercial du Grupo Sosoares. Apr�s acceptation, une date est fix�e pour la visite du technicien. Actuellement, le technicien du Grupo Sosoares pr�sente une session de formation pratique sur le syst�me afin que lors de l�ex�cution des travaux, tout le potentiel en mati�re de menuiseries et ch�ssis soit au maximum mis en ouvre.</p><br>'+
                    '<h3 class="title3">Etudes de Travaux / Description D�taill�e Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Avec la pr�occupation croissante dans nos �tudes de consommation d��nergie, une bonne solution de menuiserie est tr�s attractive gr�ce aux performances thermiques et acoustiques dans une construction.</p><br>'+
                    '<p>La nouvelle l�gislation sur la classification �nerg�tique ne repr�sente plus seulement un conseil, elle devient obligatoire. Ce qui fait que chaque fois les syst�mes de ch�ssis doivent �tre �tudi�s et conformes au type de construction, localisation, orientation, etc.</p><br>'+
                    '<p>Le Grupo Sosoares accompagne ses clients/partenaires dans toutes les phases, depuis la promotion et l�assistance, le conseil et l��tude des devis, afin que rien n��choue dans tout ce qui pourrait avoir un impact au niveau du confort final de la construction. C�est pourquoi, les techniciens projeteurs disposent de prescripteurs durant l��tude des d�tails de chaque chantier.</p><br>'+
                    '<p>Avec ce service, nous tentons de donner � chaque chantier les solutions les plus adapt�es.</p><br>'+
                    '<h3 class="title3">Programme de Gestion en Serrurerie</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/prefsuite.jpg" alt=""></p>'+
                    '<p>L�investissement r�alis� sur ce programme et dans le d�veloppement de la base de donn�es, avait pour but de garantir que le projet soit une plus value pour nos clients.<br>Ainsi, avec la constante actualisation soit des valeurs soit des nouveaux syst�mes, nous permettons � nos clients d�avoir un outil de plus pour les aider dans la gestion de la serrurerie.</p><br>'+
                    /*'<h3 class="title3">Budget / Technical Support Glass</h3><br>'+
                    '<p>A Sosoares Vidro conta com uma equipa de or�amenta��o pronta a ajudar em qualquer situa��o.</p><br>'+
                    '<p>Assim, com a constante actualiza��o quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gest�o da serralharia.</p><br>'+*/
                    '<h3 class="title3">Client Assistance Extrusion</h3><br>'+
                    '<p>Perfis Oeiras propose � ses clients un bureau et soutien au d�veloppement ont conduit � la connaissance dans le d�veloppement de solutions en aluminium extrud� pour diff�rents march�s, � partir d\'�nergies renouvelables, gr�ce � la construction de l\'industrie automobile.</p><br>'+
                    '<p>Ainsi, les clients peuvent compter sur Perfis Oeiras tout leur soutien dans le d�veloppement de solutions en aluminium extrud� qui r�pondent � vos besoins.</p><br>',
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