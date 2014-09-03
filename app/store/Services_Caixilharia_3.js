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
                text:'Servi�os',
                items: [{
                    text: 'Anodisation',
                    html: '<p>L�anodisation est bas�e sur le principe de l��lectrolyse de l�eau qui va permettre la formation d�une � pellicule � d�corative, protectrice et uniforme. Cette � pellicule �, ou couche d�alumine, est class�e et d�sign�e par un num�ro, lui m�me correspondant � son �paisseur en microns (�). L��paisseur est choisie et d�finie en fonction des conditions atmosph�riques auxquelles sera soumis le produit et conforme � la norme <strong>NP1476</strong>.</p><br><p>L��paisseur normale est de 15�, elle sera de 20� en zone maritime et, peut aller jusqu�� 25� en conditions sp�ciales (proximit� d�usines qui produisent des produits chimiques etc.). L�aspect de l�aluminium anodis� normal est mate laiteux, il peut aussi recevoir un traitement m�canique lui donnant un aspect : Poli (brillant) ou Bross�.</p><br><p>Le Grupo Sosoares dispose de deux unit�s industrielles d�tentrices des certificats de qualit� EURAS (QUALANOD) � Alfa Sul � Mem Martins et Metalfer S.A. � Fermentelos � qui r�pondent aux besoins du Groupe dans ce type de traitements mais �galement pour des tiers en tant que prestataires de services.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
               {
                    text: 'Laquage',
                     html: '<p>Le laquage est un proc�d� de peinture � base de polyester, thermodurcissable. Il se compose d�un cycle de pr�traitement par immersion, dont le but principal est de pr�parer les profil�s � la peinture, les prot�ger de la corrosion et optimiser l�adh�sion de la teinte.</p><br>'+
                        '<p>Le pr�traitement se compose des op�rations suivantes:</p><br>'+
                        '<ul class="lista">'+
                        '<li>-Bain de d�graissage</li>'+
                        '<li>-Rin�age</li>'+
                        '<li>-D�capage</li>'+
                        '<li>-Passivation</li>'+
                        '<li>-Lavage � l�eau</li>'+
                        '<li>-Lavage � l�eau d�min�ralis�e</li>'+
                        '<li>-Four de s�chage</li>'+
                        '</ul><br>'+
                        '<p style="text-align: justify;">Par la suite, les profil�s d�aluminium rejoindront les unit�s de peinture o� les particules de poussi�re, charg�es en �lectricit� statique, se d�posent uniform�ment sur la surface des profil�s. Apr�s ils entreront dans le four de polym�risation, la temp�rature provoquera l�homog�n�isation des diff�rentes couches de laquage sur les profil�s.</p><br><p style="text-align: justify;">Contr�le des produits finis:</p><br><p style="text-align: justify;">Tout le processus se d�roule en condition de contr�le en accord avec la norme de qualit� QUALICOAT.</p><p style="text-align: justify;">Ainsi, les bains de pr�traitement, la temp�rature de polym�risation sont contr�l�s, les �paisseurs des couches de laques et leur adh�rence sont v�rifi�es, les couleurs et leur brillance compar�es (normes NP EN ISO).</p><p style="text-align: justify;">Un laboratoire de soutien avec l��quipement appropri� garantit la r�alisation des tests chimiques et physiques.</p><p style="text-align: justify;">Sosoares laquage, constitue l�unit� de laquage du Grupo Sosoares et a obtenu le certificat europ�en de qualit� QUALICOAT.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Imitation Bois',
                    html: '<p>Pour r�pondre � la demande croissante de mat�riaux laqu�s imitation bois, Sosoares S.A a d�cid� courant 2004 d�installer une nouvelle unit� pour offrir � ses clients ces produits b�n�ficiant de ce nouveau traitement dans le respect de ces m�me normes de qualit�.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ]
            }
    }
});