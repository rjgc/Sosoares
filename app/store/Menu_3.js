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
                    '<p>Le Grupo Sosoares met à votre disposition pour la diffusion de ses systèmes en aluminium pour l’architecture, un total de 10 techniciens et commerciaux dont la fonction est d’aider nos clients. Ainsi, la perte de temps dans la recherche d’informations ou l’obtention d’une assistance est minimisée.</p><br>'+
                    '<p>Avec l’augmentation des besoins dans l’accompagnement et le conseil technique, il était essentiel de faire évoluer le traditionnel vendeur vers quelqu’un, dont les connaissances techniques vont au delà de l’aspect commercial, qui est intervenu et a été formé dans l’élaboration de nos différents systèmes.</p><br>'+ 
                    '<h3 class="title3">Bureau des Devis Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/orcamentacao.jpg" alt=""></p>'+
                    '<p>Le Grupo Sosoares s’engage à donner toutes les explications techniques nécessaires de nos systèmes afin de garantir leur mise en œuvre. Le bureau d’étude des projets élaborant les devis est fiable et précieux pour nos clients.</p>'+
                    '<p>Pour cela, nous comptons trois bureaux techniques dispersés dans le pays avec des employés capables de lever tous les doutes pouvant surgir chez nos clients, mais également de les conseiller sur le système le plus adapté face aux situations les plus diverses.</p><br>'+
                    '<h3 class="title3">Assistance Technique Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/technical-support.jpg" alt=""></p>'+
                    '<p>Le Grupo Sosoares dispose d’une assistance technique en menuiserie/mise en ouvre.</p><br>'+
                    '<p>Ce service a pour objectif de former nos clients sur la modification de nos systèmes. Un système atteint ses réelles capacités quand il est installé de manière correcte.</p><br>'+
                    '<p>Les clients amenés à mettre en œuvre un nouveau système de menuiseries et de châssis, peuvent demander une formation technique par le biais de l’interlocuteur commercial du Grupo Sosoares. Après acceptation, une date est fixée pour la visite du technicien. Actuellement, le technicien du Grupo Sosoares présente une session de formation pratique sur le système afin que lors de l’exécution des travaux, tout le potentiel en matière de menuiseries et châssis soit au maximum mis en ouvre.</p><br>'+
                    '<h3 class="title3">Etudes de Travaux / Description Détaillée Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Avec la préoccupation croissante dans nos études de consommation d’énergie, une bonne solution de menuiserie est très attractive grâce aux performances thermiques et acoustiques dans une construction.</p><br>'+
                    '<p>La nouvelle législation sur la classification énergétique ne représente plus seulement un conseil, elle devient obligatoire. Ce qui fait que chaque fois les systèmes de châssis doivent être étudiés et conformes au type de construction, localisation, orientation, etc.</p><br>'+
                    '<p>Le Grupo Sosoares accompagne ses clients/partenaires dans toutes les phases, depuis la promotion et l’assistance, le conseil et l’étude des devis, afin que rien n’échoue dans tout ce qui pourrait avoir un impact au niveau du confort final de la construction. C’est pourquoi, les techniciens projeteurs disposent de prescripteurs durant l’étude des détails de chaque chantier.</p><br>'+
                    '<p>Avec ce service, nous tentons de donner à chaque chantier les solutions les plus adaptées.</p><br>'+
                    '<h3 class="title3">Programme de Gestion en Serrurerie</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/prefsuite.jpg" alt=""></p>'+
                    '<p>L’investissement réalisé sur ce programme et dans le développement de la base de données, avait pour but de garantir que le projet soit une plus value pour nos clients.<br>Ainsi, avec la constante actualisation soit des valeurs soit des nouveaux systèmes, nous permettons à nos clients d’avoir un outil de plus pour les aider dans la gestion de la serrurerie.</p><br>'+
                    /*'<h3 class="title3">Budget / Technical Support Glass</h3><br>'+
                    '<p>A Sosoares Vidro conta com uma equipa de orçamentação pronta a ajudar em qualquer situação.</p><br>'+
                    '<p>Assim, com a constante actualização quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gestão da serralharia.</p><br>'+*/
                    '<h3 class="title3">Client Assistance Extrusion</h3><br>'+
                    '<p>Perfis Oeiras propose à ses clients un bureau et soutien au développement ont conduit à la connaissance dans le développement de solutions en aluminium extrudé pour différents marchés, à partir d\'énergies renouvelables, grâce à la construction de l\'industrie automobile.</p><br>'+
                    '<p>Ainsi, les clients peuvent compter sur Perfis Oeiras tout leur soutien dans le développement de solutions en aluminium extrudé qui répondent à vos besoins.</p><br>',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Contacts',
                    icon: 'icon-call',
                    html:'<h3>Département Administratif</h3>'+
                        '<span id="mails"><a href="mailto:geral@sosoares.pt">geral@sosoares.pt</a></span>'+
                        '<p>Rua do Baldeirão, 4440-346</p>'+
                        '<p>Sobrado, Valongo - Portugal</p>'+
                        '<p>T +351 224 119 230</p>'+
                        '<p>F +351 224 119 231</p><br>'+
                        '<h3>Département Commercial</h3>'+
                        '<span id="mails"><a href="mailto:comercial@sosoares.pt">comercial@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto - Portugal</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                        '<h3>Département Technique</h3>'+
                        '<span id="mails"><a href="mailto:gabinete.tecnico@sosoares.pt">gabinete.tecnico@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                        '<h3>Département du développement </h3>'+
                        '<span id="mails"><a href="mailto:desenvolvimento@sosoares.pt">desenvolvimento@sosoares.pt</a></span>'+
                        '<p>Travessa do Bolegão, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 740</p>'+
                        '<p>F +351 234 729 741</p><br>'+
                        '<h3>Département de l\'exportation</h3>'+
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
                    text: 'Où Nous Sommes ',
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