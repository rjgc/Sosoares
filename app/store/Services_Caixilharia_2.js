Ext.define('ItalboxCatalog.store.Services_Caixilharia_2', {
        extend: 'Ext.data.TreeStore',
        config: {
             fields: [
                {name: 'id',type: 'string'},
                {name: 'text',type: 'string'},
                {name: 'html',type: 'string'},
                {name: 'foto',type: 'string'},
                {name: 'icon', type: 'string' },
             ],
        autoLoad: true,
            defaultRootProperty: 'items',
            root: {
                text:'Serviços',
                items: [{
                    text: 'Anodizing',
                    html: '<p>Anodizing consists of an electrolytic procedure which stimulates the formation of a decorative, protective and uniform “pellicle”. This “pellicle” or oxide layer is classified and designated by a number corresponding to thickness in microns (µ). The selection of thickness is determined according to the aggressiveness of the environment and regulated by norm <strong>NP1476</strong>.</p><br><p>The standard thickness is 15µ, though 20µ for seashore locations or even 25µ under very special conditions (proximity to factories which produce chemicals, among others) are possible options. In a regular anodic state the aluminium acquires a “dull” milky colour, accepting mechanical treatments: Polished (shiny appearance) or Brushed.</p><br><p>Grupo Sosoares holds two industrial units which have been awarded the EURAS European quality certificate (<strong>QUALANOD</strong>)- Alfa Sul in Mem Martins and Metalfer S.A. in Fermentelos – which assure the needs of the group regarding this type of treatment, as well as providing services to third parties.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
               {
                    text: 'Powder Coating',
                     html: '<p>Powder coating is a painting process based on thermo-hardening polyester. It is composed of a pre-treatment cycle, by immersion, the main purposes of which are to prepare the profiles for painting, to protect them from corrosion and to maximize the paint adherence.</p><br>'+
                        '<p>Pre-treatment stands on the following procedures:</p><br>'+
                        '<ul class="lista">'+
                        '<li>-De-greasing bath</li>'+
                        '<li>-Water rinse</li>'+
                        '<li>-Pickling</li>'+
                        '<li>-Water rinse</li>'+
                        '<li>-Passivation</li>'+
                        '<li>-Washing with water</li>'+
                        '<li>-Demineralized water rinse</li>'+
                        '<li>-Drying oven</li>'+
                        '</ul><br>'+
                        '<p>Later, the aluminium profiles shall enter the painting units in which the dust particles, loaded with static, shall evenly adhere to the surface of the profiles. After having been taken to the polymerization oven, the temperature shall favour the creation of a homogenous layer of lacquering on the profiles.</p><p>Final Product Control:</p><p>The whole process is developed in accordance with the quality norm QUALICOAT.</p><p>Thus, the pre-treatment baths and the polymerization temperature are controlled, the thickness of the lacquering layer and its adherence are checked, as well as the colour, by comparison and brightness (Norms NP EN ISO).</p><p>An appropriately equipped support laboratory assures the performance of chemical and physical tests.</p><p>Sosoares lacquering is a unit which holds the QUALICOAT European quality certificate.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Wood Imitation',
                    html: '<p>To answer the growing demand of wood resembling lacquered materials, Sosoares SA decided in mid-2004 to have a new unit installed to offer its clients products with this new treatment and the same quality patterns.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ]
            }
    }
});