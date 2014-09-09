Ext.define('ItalboxCatalog.store.Menu_2', {
        extend: 'Ext.data.TreeStore',
        config: {
             fields: [
                {name: 'id',type: 'int'},
                {name: 'text',type: 'string'},
               /* {name: 'descricao',type: 'string'},*/
                {name: 'foto', type: 'string' },
                {name: 'html', type: 'string' },
                {name: 'icon', type: 'string' },
             ],
        autoLoad: true,
            defaultRootProperty: 'items',
            root: {
                text:'Menu',
                items: [
                {
                    id: 1,
                    text: 'Customer Service',
                    icon: 'icon-apoio',
                    html: '<h3 class="title3">Client Assistance Aluminum</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/comercial.png" alt=""></p>'+
                    '<p>As the need for technical assistance and advice grew, the evolution of a traditional salesperson to someone whose technical knowledge goes beyond after-sales service, taking part in the development of our frame systems became imperative.</p><br>'+
                    '<p>In order for such to happen, Grupo Sosoares performed the change from salesperson to technical sales delegate. More than a simple change in category, it has been a growing and supported knowledge enhancement so that we can continuously and efficiently offer a present and personalized assistance.</p><br>'+
                    '<h3 class="title3">Budget Department Aluminum</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/orcamentacao.jpg" alt=""></p>'+
                    '<p>Grupo Sosoares assures all necessary technical clarification regarding the systems and their correct setting. Project budgeting is a reliable and precious service for our clients.</p>'+
                    '<p>For this we count on three technical departments around the country composed of people who are able to clear all doubts our clients may have, as well as provide advice on the most adequate systems to the most diverse situations. Budgeting the most diverse projects gifts our clients with a wider range of answers for the final client. The reliability and accuracy in our proposals avoid unexpected surprises when it comes to project awarding.</p><br>'+
                    '<h3 class="title3">Technical Support Aluminum</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/technical-support.jpg" alt=""></p>'+
                    '<p>Grupo Sosoares relies on technical support regarding blacksmith and construction works. This service aims at supplying our clients with information on our systems. A system will only reach its full purpose if transformed in the correct manner.</p><br>'+
                    '<p>Clients who intend to perform a work with a new metalwork system may require technical training from Grupo Sosoares. Once approved, a date for the technician’s visit is set.</p><br>'+
                    '<p>Once at the blacksmith’s, the technician from Grupo Sosoares develops a practical training session on the system, so that during performance the potential of the frame is applied to the fullest.</p><br>'+ 
                    '<h3 class="title3">Study of Works / Detailing Aluminum</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Regarding the increasing concern about energy studies, a good frame solution is ever more influent in all thermal and acoustic performance in a house.</p><br>'+
                    '<p>The new legislation on energetic classification changes from advisable to mandatory, meaning that frame systems have to be studied according to the type of housing, location, orientation, etc.</p><br>'+
                    '<p>Grupo Sosoares accompanies its clients / partners through all phases, from promotion and support, to advice and budgeting, so that nothing of which influences the comfort in the finished house risks failing. For that, it relies on prescribers to aid design technicians during the study and detailing of any work.</p><br>'+
                    '<p>Through this service we try to mould solutions to works the best way possible.</p><br>'+
                    '<h3 class="title3">Metalwork Management Software</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/prefsuite.jpg" alt=""></p>'+
                    '<p>The investment in this programme and the development of the database was pursued to assure the project would be a gain for our clients.Thus, with the continuous update of both the values as well as the new systems, we provide our clients with an extra tool to aid them in metalwork management.</p><br>'+
                    /*'<h3 class="title3">Budget / Technical Support Glass</h3><br>'+
                    '<p>A Sosoares Vidro conta com uma equipa de orçamentação pronta a ajudar em qualquer situação.</p><br>'+
                    '<p>Assim, com a constante actualização quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gestão da serralharia.</p><br>'+*/
                    '<h3 class="title3">Client Assistance Extrusion</h3><br>'+
                    '<p>Perfis Oeiras offers its customers a support office and development led to knowledge in developing solutions in extruded aluminum profiles for different markets, from renewable energies, through construction to the automotive industry.</p><br>'+
                    '<p>So customers can rely on Perfis Oeiras all their support in developing solutions in extruded aluminum profiles that meet your needs.</p><br>',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Contacts',
                    icon: 'icon-call',
                    html:'<h3>Administrative Department</h3>'+
                        '<span id="mails"><a href="mailto:geral@sosoares.pt">geral@sosoares.pt</a></span>'+
                        '<p>Rua do Baldeirão, 4440-346</p>'+
                        '<p>Sobrado, Valongo - Portugal</p>'+
                        '<p>T +351 224 119 230</p>'+
                        '<p>F +351 224 119 231</p><br>'+
                        '<h3>Comercial Department</h3>'+
                        '<span id="mails"><a href="mailto:comercial@sosoares.pt">comercial@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto - Portugal</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                        '<h3>Technical Department</h3>'+
                        '<span id="mails"><a href="mailto:gabinete.tecnico@sosoares.pt">gabinete.tecnico@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                         '<h3>Development Department </h3>'+
                        '<span id="mails"><a href="mailto:desenvolvimento@sosoares.pt">desenvolvimento@sosoares.pt</a></span>'+
                        '<p>Travessa do Bolegão, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 740</p>'+
                        '<p>F +351 234 729 741</p><br>'+
                        '<h3>Department of Export</h3>'+
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
                    text: 'Where We Are',
                    icon: 'icon-local',
                    html: '',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                },
                {
                    id: 4,
                    text: 'Languages',
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
                    text: 'Help',
                    icon: 'icon-help',
                    html: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                }*/
                ]
            }
        
    }



});