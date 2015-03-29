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
                    html: '<h4><strong>Histoire</strong></h4><br><p>Le Groupe Sosoares surgit de la cr�ation de la soci�t� �Sosoares � M�quinas e Ferragens, Lda.� en 26 D�cembre 1979,&nbsp;dont l\'activit� a commenc� avec le commerce des machines et mat�riel pour l\'industrie des cadres de fen�tres en aluminium.</p><p>Cons�quence d\'une strat�gie et le positionnement de l\'entreprise dans le � l\'innovation, la qualit� des produits et service � la client�le, ce d�velopp� de fa�on durable sa trajectoire, de devenir un Groupe par des acquisitions et des investissements dans le but d\'avoir une vue verticale de l\'entreprise orient�e vers le march�.</p><p><br><h4><strong>Pr�sent</strong></h4></p><p><br>Le Groupe est actuellement compos� de cinq PME, "Alfa Sul SA" "Alulider, Lda", "Metalfer SA", "Perfis Oeiras SA� et "Sosoares SA" - qui se compl�tent&nbsp;dans la conception, le d�veloppement, la production et la commercialisation de ch�ssis d\'aluminium et en verre pour l\'architecture dont la propre marque est&nbsp;"Sistemas Euro 2000�.</p><p>Il compte plus de 250 employ�s d�vou�s et motiv�s, dont 28 techniciens commerciaux cibl�s � un soutien direct aux services � la client�le. En 2013 a obtenu un chiffre d\'affaires d\'environ 32 M �.</p><p><br>Le groupe, en tenant compte de la situation actuelle et l\'�volution de l\'architecture des b�timents, a r�cemment conclu un investissement d\'environ 15 M � en une unit� de verre, int�grant les derni�res technologies et une gamme compl�te d\'�quipements modernes dans la transformation de verre pour l\'architecture. Visant d\'une part � compl�ter son activit� par l\'int�gration dans le produit final des deux mat�riaux, tels que l\'aluminium et le verre, les ajoutant la valeur et de la diff�renciation, d\'autre part, � r�pondre aux exigences des professionnels du secteur qui dirigent la cible de l\'architecture actuelle de transparence dans lequel le mat�riau est du verre dominant et les facteurs de relations sont les suivantes:</p><br><p>I � Esth�tique minimaliste (un maximum de transparence, vue structurel minimum)</p><br><p>II � Confort et environnement</p><ul class="lista"><li>-L\'�clairage naturel</li><li>-Transmission de la lumi�re</li><li>-Contr�le solaire (effet de serre par rapport � gain solaire)</li><li>-L\'efficacit� thermique (r�duction des pertes d\'�nergie)</li></ul><br><p>III � S�curit�</p><ul class="lista"><li>-Protection contre les pr�judices (feuillet�, tremp�, durci)</li><li>-Anti-intrusion</li><li>-Anti-projectile</li></ul><br><p>IV �  Int�gration d�coratif</p><ul class="lista"><li>-Opacification</li><li>-S�rigraphie</li><li>-Peinture digital vitr�e</li><li>-Peinture digital dans P.V.B (feuillet�)</li></ul>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Qui Sommes-Nous',
                    html: '<p><h4><strong>Un partenaire continue ...</strong></h4></p><br><p>Groupe Sosoares est engag� et valorise le partenariat avec ses clients et les transformateurs et dans le d�veloppement de produit, dans sa fabrication et le service apr�s-vente dans le but ultime d\'assurer la satisfaction du client. Avec cet objectif, le groupe a:</p><br><p>� <strong>Bureau de D�veloppent</strong> et analyse avec des professionnels qualifi�s dans l\'ing�nierie et de l\'architecture pour la cr�ation de nouveaux syst�mes et compl�ment de celles d�j� existantes.</p><br><p>� <strong>Menuiserie pour l\'atelier</strong> de formation et d�installation dans le chantier.</p><br><p>� <strong>D�partement du budget</strong> avec un equipe de estimateurs pour soutenir la budg�tisation pour les clients.</p><br><p>� <strong>Appui Helpdesk</strong> pour l\'installation de logiciels de budg�tisation, la cr�ation et la mise � jour de la base de donn�es ainsi que la formation des utilisateurs.</p><br><p>� Une<strong> �quipe commerciale</strong> pour promouvoir l\'aluminium et des syst�mes de verre pour l\'architecture avec d�l�gu�s commerciaux, dont la fonction est d\'accompagner ses clients. Donc, le temps peut �tre r�duit dans la recherche d\'informations et obtenir les meilleures solutions techniques.</p>',
                    foto: 'imgs/grupo.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 3,
                    text: 'Mission et Valeurs',
                    html: '<p>D�velopper, produire et commercialiser des syst�mes en aluminium et verre pour l�architecture qui constituent des solutions d�ensembles diff�rents alliant fonctionnalit�, confort, esth�tique et efficacit� �nerg�tique de fa�on � assurer la totale satisfaction des utilisateurs et contribuer � la protection de la plan�te.</p><br><p>Exporter, se substituer aux importations, cr�er des emplois, produire de la richesse, �lever le niveau de vie des collaborateurs et optimiser la comp�titivit� de vos clients, c�est la mission du Groupe.</p>',
                    foto: 'imgs/missao.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 4,
                    text: 'March� Cible',
                    html: '<p style="">Le d�veloppement des syst�mes de ch�ssis aluminium avec vitre int�gr�e a �t� une des priorit�s du Grupo Sosoares.</p><p style="text-align: justify;">Ces syst�mes int�gr�s permettent de r�pondre � toutes les exigences techniques et esth�tiques exig�es par toutes les entreprises de construction modernes.</p><br><p style="text-align: justify;">L�accompagnement du projet depuis la phase architecturale jusqu�� l�ex�cution des travaux, permet l�application correcte de la solution d�sir�e et la constante innovation des produits.</p>',
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