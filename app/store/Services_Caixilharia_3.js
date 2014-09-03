Ext.define('ItalboxCatalog.store.Services_Caixilharia_3', {
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
                    text: 'Anodisation',
                    html: '<p>L’anodisation est basée sur le principe de l’électrolyse de l’eau qui va permettre la formation d’une « pellicule » décorative, protectrice et uniforme. Cette « pellicule », ou couche d’alumine, est classée et désignée par un numéro, lui même correspondant à son épaisseur en microns (µ). L’épaisseur est choisie et définie en fonction des conditions atmosphériques auxquelles sera soumis le produit et conforme à la norme <strong>NP1476</strong>.</p><br><p>L’épaisseur normale est de 15µ, elle sera de 20µ en zone maritime et, peut aller jusqu’à 25µ en conditions spéciales (proximité d’usines qui produisent des produits chimiques etc.). L’aspect de l’aluminium anodisé normal est mate laiteux, il peut aussi recevoir un traitement mécanique lui donnant un aspect : Poli (brillant) ou Brossé.</p><br><p>Le Grupo Sosoares dispose de deux unités industrielles détentrices des certificats de qualité EURAS (QUALANOD) – Alfa Sul à Mem Martins et Metalfer S.A. à Fermentelos – qui répondent aux besoins du Groupe dans ce type de traitements mais également pour des tiers en tant que prestataires de services.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
               {
                    text: 'Laquage',
                     html: '<p>Le laquage est un procédé de peinture à base de polyester, thermodurcissable. Il se compose d’un cycle de prétraitement par immersion, dont le but principal est de préparer les profilés à la peinture, les protéger de la corrosion et optimiser l’adhésion de la teinte.</p><br>'+
                        '<p>Le prétraitement se compose des opérations suivantes:</p><br>'+
                        '<ul class="lista">'+
                        '<li>-Bain de dégraissage</li>'+
                        '<li>-Rinçage</li>'+
                        '<li>-Décapage</li>'+
                        '<li>-Passivation</li>'+
                        '<li>-Lavage à l’eau</li>'+
                        '<li>-Lavage à l’eau déminéralisée</li>'+
                        '<li>-Four de séchage</li>'+
                        '</ul><br>'+
                        '<p style="text-align: justify;">Par la suite, les profilés d’aluminium rejoindront les unités de peinture où les particules de poussière, chargées en électricité statique, se déposent uniformément sur la surface des profilés. Après ils entreront dans le four de polymérisation, la température provoquera l’homogénéisation des différentes couches de laquage sur les profilés.</p><br><p style="text-align: justify;">Contrôle des produits finis:</p><br><p style="text-align: justify;">Tout le processus se déroule en condition de contrôle en accord avec la norme de qualité QUALICOAT.</p><p style="text-align: justify;">Ainsi, les bains de prétraitement, la température de polymérisation sont contrôlés, les épaisseurs des couches de laques et leur adhérence sont vérifiées, les couleurs et leur brillance comparées (normes NP EN ISO).</p><p style="text-align: justify;">Un laboratoire de soutien avec l’équipement approprié garantit la réalisation des tests chimiques et physiques.</p><p style="text-align: justify;">Sosoares laquage, constitue l’unité de laquage du Grupo Sosoares et a obtenu le certificat européen de qualité QUALICOAT.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Imitation Bois',
                    html: '<p>Pour répondre à la demande croissante de matériaux laqués imitation bois, Sosoares S.A a décidé courant 2004 d’installer une nouvelle unité pour offrir à ses clients ces produits bénéficiant de ce nouveau traitement dans le respect de ces même normes de qualité.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ]
            }
    }
});