Ext.define('ItalboxCatalog.store.Group_3', {
        extend: 'Ext.data.TreeStore',
        config: {
             fields: [
                {name: 'id',type: 'int'},
                {name: 'text',type: 'string'},
                {name: 'html',type: 'string'},
                {name: 'foto',type: 'string'},
               /* {name: 'descricao',type: 'string'},*/
                {name: 'icon', type: 'string' },
             ],
        autoLoad: true,
            defaultRootProperty: 'items',
            root: {
                text:'Grupo Sosoares',
                items: [{
                    id: 1,
                    text: 'Grupo Sosoares',
                    html: '<h4><strong>Histoire</strong></h4><br><p>Le Groupe Sosoares surgit de la création de la société “Sosoares – Máquinas e Ferragens, Lda.” en 26 Décembre 1979,&nbsp;dont l\'activité a commencé avec le commerce des machines et matériel pour l\'industrie des cadres de fenêtres en aluminium.</p><p>Conséquence d\'une stratégie et le positionnement de l\'entreprise dans le à l\'innovation, la qualité des produits et service à la clientèle, ce développé de façon durable sa trajectoire, de devenir un Groupe par des acquisitions et des investissements dans le but d\'avoir une vue verticale de l\'entreprise orientée vers le marché.</p><p><br><h4><strong>Présent</strong></h4></p><p><br>Le Groupe est actuellement composé de cinq PME, "Alfa Sul SA" "Alulider, Lda", "Metalfer SA", "Perfis Oeiras SA» et "Sosoares SA" - qui se complètent&nbsp;dans la conception, le développement, la production et la commercialisation de châssis d\'aluminium et en verre pour l\'architecture dont la propre marque est&nbsp;"Sistemas Euro 2000».</p><p>Il compte plus de 250 employés dévoués et motivés, dont 28 techniciens commerciaux ciblés à un soutien direct aux services à la clientèle. En 2013 a obtenu un chiffre d\'affaires d\'environ 32 M €.</p><p><br>Le groupe, en tenant compte de la situation actuelle et l\'évolution de l\'architecture des bâtiments, a récemment conclu un investissement d\'environ 15 M € en une unité de verre, intégrant les dernières technologies et une gamme complète d\'équipements modernes dans la transformation de verre pour l\'architecture. Visant d\'une part à compléter son activité par l\'intégration dans le produit final des deux matériaux, tels que l\'aluminium et le verre, les ajoutant la valeur et de la différenciation, d\'autre part, à répondre aux exigences des professionnels du secteur qui dirigent la cible de l\'architecture actuelle de transparence dans lequel le matériau est du verre dominant et les facteurs de relations sont les suivantes:</p><br><p>I – Esthétique minimaliste (un maximum de transparence, vue structurel minimum)</p><br><p>II – Confort et environnement</p><ul class="lista"><li>-L\'éclairage naturel</li><li>-Transmission de la lumière</li><li>-Contrôle solaire (effet de serre par rapport à gain solaire)</li><li>-L\'efficacité thermique (réduction des pertes d\'énergie)</li></ul><br><p>III – Sécurité</p><ul class="lista"><li>-Protection contre les préjudices (feuilleté, trempé, durci)</li><li>-Anti-intrusion</li><li>-Anti-projectile</li></ul><br><p>IV –  Intégration décoratif</p><ul class="lista"><li>-Opacification</li><li>-Sérigraphie</li><li>-Peinture digital vitrée</li><li>-Peinture digital dans P.V.B (feuilleté)</li></ul>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Qui Sommes-Nous',
                    html: '<p><h4><strong>Un partenaire continue ...</strong></h4></p><br><p>Groupe Sosoares est engagé et valorise le partenariat avec ses clients et les transformateurs et dans le développement de produit, dans sa fabrication et le service après-vente dans le but ultime d\'assurer la satisfaction du client. Avec cet objectif, le groupe a:</p><br><p>• <strong>Bureau de Développent</strong> et analyse avec des professionnels qualifiés dans l\'ingénierie et de l\'architecture pour la création de nouveaux systèmes et complément de celles déjà existantes.</p><br><p>• <strong>Menuiserie pour l\'atelier</strong> de formation et d’installation dans le chantier.</p><br><p>• <strong>Département du budget</strong> avec un equipe de estimateurs pour soutenir la budgétisation pour les clients.</p><br><p>• <strong>Appui Helpdesk</strong> pour l\'installation de logiciels de budgétisation, la création et la mise à jour de la base de données ainsi que la formation des utilisateurs.</p><br><p>• Une<strong> équipe commerciale</strong> pour promouvoir l\'aluminium et des systèmes de verre pour l\'architecture avec délégués commerciaux, dont la fonction est d\'accompagner ses clients. Donc, le temps peut être réduit dans la recherche d\'informations et obtenir les meilleures solutions techniques.</p>',
                    foto: 'imgs/grupo.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 3,
                    text: 'Mission et Valeurs',
                    html: '<p>Développer, produire et commercialiser des systèmes en aluminium et verre pour l’architecture qui constituent des solutions d’ensembles différents alliant fonctionnalité, confort, esthétique et efficacité énergétique de façon à assurer la totale satisfaction des utilisateurs et contribuer à la protection de la planète.</p><br><p>Exporter, se substituer aux importations, créer des emplois, produire de la richesse, élever le niveau de vie des collaborateurs et optimiser la compétitivité de vos clients, c’est la mission du Groupe.</p>',
                    foto: 'imgs/missao.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 4,
                    text: 'Marché Cible',
                    html: '<p style="">Le développement des systèmes de châssis aluminium avec vitre intégrée a été une des priorités du Grupo Sosoares.</p><p style="text-align: justify;">Ces systèmes intégrés permettent de répondre à toutes les exigences techniques et esthétiques exigées par toutes les entreprises de construction modernes.</p><br><p style="text-align: justify;">L’accompagnement du projet depuis la phase architecturale jusqu’à l’exécution des travaux, permet l’application correcte de la solution désirée et la constante innovation des produits.</p>',
                    foto: 'imgs/target_market.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 5,
                    text: 'Zones Commerciales',
                    html: '',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                }
                ]
            }
    }
});