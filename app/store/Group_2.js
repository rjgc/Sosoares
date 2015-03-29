Ext.define('ItalboxCatalog.store.Group_2', {
        extend: 'Ext.data.TreeStore',
        config: {
             fields: [
                {name: 'id',type: 'int'},
                {name: 'text',type: 'string'},
                {name: 'html',type: 'string'},
                {name: 'foto',type: 'string'},
                {name: 'icon', type: 'string' },
             ],
        autoLoad: true,
            defaultRootProperty: 'items',
            root: {
                text:'Grupo Sosoares',
                items: [{
                    id: 1,
                    text: 'Grupo Sosoares',
                    html: '<h4><strong>History</strong></h4><br><p style="text-align: justify;">The Group Sosoares has its origins in the creation of society “Sosoares – Máquinas e Ferragens, Lda” in 26th December of 1979, whose activity began as trade in machinery and hardware for the industry of aluminum window frames.</p><br><p style="text-align: justify;">Consequence of a strategy and the company\'s positioning in the market-oriented to innovation, product quality and customer service, this developed in a sustained way its trajectory, becoming a Group through acquisitions and investments with the aim of having a vertical view of the business.</p><br><h4 style="text-align: justify;"><strong>Present</strong></h4><br><p style="text-align: justify;">The Group is currently composed of 5 SMEs, "Alfa Sul SA" "Alulider, Lda", "Metalfer SA", " Perfis Oeiras SA" and "Sosoares SA" – that complement each other in design, development, production and commercialization of aluminum frames and glass for architecture whose own brand is "Sistemas Euro 2000".</p><br><p style="text-align: justify;">It has more than 250 dedicated and motivated employees, including 28 commercial technicians targeted to direct support to customer service. In 2013 has obtained a turnover of approximately € 32 million.</p><br><p style="text-align: justify;">The group, bearing in mind the current situation and evolution of buildings architecture, recently concluded an investment of around € 15 million in a glass unit, integrating the latest technologies and a full range of modern equipments in transforming glass for architecture. Aiming on one hand to complement its activity by integrating in the final product the two materials such as the aluminum and glass, adding them value and differentiation, on the other hand to meet the demands of professionals of the sector who lead the current architecture target to transparency in which the dominant material is glass and the relation factors are:</p><br><p>I – Minimalist Aesthetics (maximum transparency, minimum structural view)</p><br><p>II – Comfort and environment</p><ul class="lista"><li>-Daylighting</li><li>-Light transmission</li><li>-Solar control (greenhouse versus solar gain)</li><li>-Thermal efficiency (reduction of energy losses)</li></ul><br><p>III – Security</p><ul class="lista"><li>-Injury Protection (laminated, tempered, heat-strengthened)</li><li>-Anti-intrusion</li><li>-Anti-projectile</li></ul><br><p>IV – Decorative Integration</p><ul class="lista"><li>-Opacification</li><li>-Serigraph</li><li>-Digital Painting Glazed</li><li>-Digital Painting in P.V.B (laminated)</li></ul>',
                    foto: 'imgs/grupo.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Who We Are',
                    html: '<h4><strong>A continuous partner...</strong></h4><br><p>Group Sosoares is committed and values &#8203;&#8203;the partnership with its customers and manufactures in the product development, in its manufacturing and after-sales service with the ultimate goal of ensuring customer satisfaction. With this objective the group has:</p><br><ul class="lista"><li><strong>Development Office</strong> and analysis with qualified professionals in engineering and architecture for the creation of new systems and complement of the existing ones.</li><br><li><strong>Locksmith</strong> for training workshop and assembly in work.</li><br><li><strong>Budgeting Department</strong> with a team of estimators to support budgeting to customers.</li><br><li><strong>Helpdesk</strong> support for the installation of budgeting software, creating and updating the database as well as user training.</li><br><li><strong>A commercial team</strong> to promote aluminum and glass systems for architecture with a commercial delegates, whose function is to support its customers. So time can be minimized in seeking information and obtaining the best technical solutions.</li></ul>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 3,
                    text: 'Mission and Values',
                    html: '<p>To develop, to produce and to commercialize aluminium and glass systems for architecture which consist of functionally positive differentiated frame solutions, comfort, aesthetic and energetic efficiency so as to assure the full satisfaction of the users and contribute to the preservation of the planet.</p><br><p>To export, to replace imports, to create job opportunities, to produce wealth, to elevate its workers’ level of life and to potentiate its clients’ competitiveness, is the mission of the Group.</p>',
                    foto: 'imgs/missao.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 4,
                    text: 'Target markets',
                    html: '<p style="">The development of integrated aluminium and glass frame systems has been one of the priorities of Grupo Sosoares.</p><p style="">These integrated systems support the answer to all technical and aesthetic demands posed by modern architectural projects.</p><br><p style="">The development of the project from the architectural drawing stage to the actual construction sustains the correct implementation of the intended answer and constant product innovation.</p> ',
                    foto: 'imgs/target_market.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 5,
                    text: 'Commercial Areas',
                    html: '',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                }
                ]
            }
    }
});