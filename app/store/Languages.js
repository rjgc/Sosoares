Ext.define('ItalboxCatalog.store.Languages', {
    extend: 'Ext.data.Store',
    config:{
        autoLoad: true,
        fields: [
            { name: 'id', type: 'int' },
            { name: 'lang', type: 'string' },
            { name: 'start_caixilharia', type: 'string' },
            { name: 'start_vidro', type: 'string' },
            { name: 'start_extrusao', type: 'string' },
            { name: 'start_tratamento', type: 'string' },
          /*{ name: 'company_html', type: 'string' },
            { name: 'help_html', type: 'string' },
            { name: 'italbox', type: 'string' },
            { name: 'catalogs', type: 'string' },
            { name: 'favorites', type: 'string' },
            { name: 'language', type: 'string' },
            { name: 'help', type: 'string' },
            { name: 'help2', type: 'string' },
            { name: 'pages', type: 'string' },
            { name: 'products', type: 'string' },
            { name: 'product', type: 'string' },
            { name: 'favorites_empty', type: 'string' },
            { name: 'products_empty', type: 'string' },
            { name: 'search', type: 'string' },
            { name: 'search_list', type: 'string' },
            { name: 'offline_catalogs', type: 'string' },
            { name: 'offline_favorites', type: 'string' },
            { name: 'offline_search', type: 'string' },
            { name: 'remove_favorite', type: 'string' },
            { name: 'open_page', type: 'string' },
            { name: 'open_favorite', type: 'string' },
            { name: 'open_product', type: 'string' },
            { name: 'open', type: 'string' },
            { name: 'no_pages', type: 'string' },
            { name: 'no_products', type: 'string' },
            { name: 'add_product', type: 'string' },
            { name: 'add_page', type: 'string' },
            { name: 'offline', type: 'string' },
            { name: 'offline_error', type: 'string' },
            { name: 'exit', type: 'string' },*/
            { name: 'yes', type: 'string' },
            { name: 'no', type: 'string' },
            { name: 'cancel', type: 'string' },/*
            { name: 'share_page_text', type: 'string' },
            { name: 'share_page_text2', type: 'string' },
            { name: 'share_product_text', type: 'string' },
            { name: 'share_product_text2', type: 'string' },*/
        ],
        data : [
        {
        id : 1,
        lang : 'pt',
        start_caixilharia:  'margin:20px 10px 10px 20px;'+
            'border-radius:5px; border-bottom: 7px solid #05698e;'+
            'background: url(imgs/icons/caixilharia_menu.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        start_vidro:  'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/vidro_menu.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        start_extrusao:  'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/extrusao_menu.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        start_tratamento:  'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/tratamento_menu.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
       /* company_html: '<div class="italbox"><img src="imgs/company.jpg"></img><br/><font color="#b69757">EMPRESA</font><br/><br/><p>A ITALBOX, LDA, empresa portuguesa fundada em 1999, � uma empresa especializada no fabrico de cabines de banho com design pr�prio e exclusivo, e uma excelente dicotomia qualidade/pre�o. Com uma equipa de 62 colaboradores, a Italbox � l�der no mercado Portugu�s e tem apresentado taxas de crescimento no volume de neg�cios de 20% por ano, nos �ltimos 5 anos.<br/><br/>Em 2011 lan�ou o novo catalogo com uma nova linha de produtos que completa, no nosso entender, solu��es que n�o estavam contempladas no nosso anterior cat�logo.<br/>Lan�amos tamb�m um cat�logo de m�veis de casa de banho, de fabrico pr�prio, no sentido de complementar a oferta.<br/><br/>Para que possam verificar os modelos que produzimos, queiram consultar o nosso Web site: <font color="#b69757">www.italbox.pt</font>.<br/>Informamos que estamos ao vosso dispor para qualquer informa��o e esclarecimento adicional atrav�s do e-mail: <font color="#b69757">comercial@italbox.pt</font>.</p></div>',
        help_html: '<div style="margin:20px; margin-top:0px !important;">'+
        '<font color="#b69757">AJUDA</font><br/><br/><p><i>Aceda  em qualquer lugar aos nossos cat�logos de forma r�pida e intuitiva. </i><br />'+
        '<i>Com a  APP ITALBOX consulte todos os nossos produtos e seus detalhes. </i><br />'+
        '<i>Escolha  e partilhe os seus favoritos.</i></p><br/><p>Precisa  de ajuda? Siga as nossas dicas aqui.</p>'+
        '<p>Ao  abrir a aplica��o o utilizador tem acesso aos menus que permitem explorar:<br /><br />'+
        '<i class="icon-italbox"></i> � menu Italbox � o perfil da empresa<br /><i class="icon-catalogos"></i> � menu Cat�logos � acesso aos cat�logos. <br />'+
        '<i class="icon-star"></i> � menu Favoritos � arquivo das suas p�ginas e/ou produtos favoritos.<br />'+
        '<i class="icon-mundo-catalogos"></i> � menu Language� alterar idioma </p><br /><p><font color="#b69757"><strong>Dicas de navega��o</strong></font><br /><br />'+
        'O  acesso � informa��o � disponibilizado atrav�s dos menus na p�gina principal, no  entanto,'+
        'a qualquer momento pode trocar de menu acedendo � barra superior.Esta  barra � composta por:<br /><br />'+
        '<i class="icon-back"></i> � Retroceder<br /><i class="icon-pesquisa"></i> � Pesquisar<br /><i class="icon-menu"></i> � Menus<br /><br />'+
        'Se  esta estiver ocultada toque na seta <i class="icon-baixo"></i> para a fazer reaparecer.'+
        'O  conte�do de cada menu � disponibilizado imediatamente abaixo desta.<br />'+
        'Se  j� sabe o nome do produto que quer consultar, pesquise atrav�s <i class="icon-pesquisa"></i>.<br /><br />'+
        '<font color="#b69757"><strong>Consultar Cat�logos</strong></font><br /><br />No  menu cat�logos toque na capa do cat�logo que pretende consultar.'+
        '<a name="_GoBack" id="_GoBack"></a><br />Confirme  a acesso ao cat�logo.'+
        'De seguida navegue entre as p�ginas fazendo deslizar o  seu dedo para a esquerda ou para a direita.'+
        'Para uma melhor visualiza��o, pode  ainda aumentar e mover a imagem da p�gina em consulta.<br />'+
        'Na  barra inferior est�o contabilizados os produtos existentes na p�gina que est� a  visualizar.'+
        'Ao tocar na seta poder� aceder aos detalhes do produto. <br />No  lado direito do ecr� encontrar�,'+
        'ainda, as seguintes fun��es:<br /><br /><i class="icon-lista"></i> � Consultar p�ginas espec�ficas do cat�logo<br />'+
        '<i class="icon-star-catalogos"></i> � Definir p�ginas e/ou produtos como favorito<br />'+
        '<i class="icon-partilha"></i> � Partilhar p�ginas e/ou produtos com amigos</p><br /><p><font color="#b69757"><strong>Consultar produto</strong></font>'+
        '<br /><br />Toque  na imagem do produto da barra inferior para ter acesso ao detalhe do mesmo.'+
        'Para visualizar os extras do produto toque no bot�o EXTRAS<br />'+
        'Retroceda  na seta <i class="icon-back"></i> para voltar ao detalhe. Para sair toque no <i class="icon-close"></i> para fechar e  continuar a consultar o catalogo.<br /><br />'+
        '<font color="#b69757"><strong>Favoritos </strong></font><br /><br />Para  adicionar uma p�gina e/ou produto como favorito utilize o <i class="icon-star-catalogos"></i> '+
        'apresentado �  sua direita. � notificado o �xito desta opera��o.<br />'+
        'Para  visualizar os favoritos aceda ao menu favoritos na p�gina inicial ou na barra  superior.<br />'+
        'Os  favoritos encontram-se divididos por p�ginas e produtos, para consultar toque  no separador correspondente.<br />'+
        'Pode  ainda editar os seus favoritos, apagando p�ginas e/ou produtos tocando no  <i class="icon-close3"></i>.</p></div>',
        italbox : 'ITALBOX',
        catalogs : 'CATALOGOS',
        favorites : 'FAVORITOS',
        language : 'IDIOMA',
        help : 'AJUDA',
        pages: 'P�GINAS',
        products : 'PRODUTOS',
        product : 'Produtos',
        favorites_empty: 'Sem Favoritos',
        products_empty: 'Sem Resultados',
        search : 'Pesquisa...',
        search_list : '<div class="lista-pesquisa">'+
            '<img src="http://www.critecns.com/italbox/assets/uploads/imgs/{foto}" style="float:left; height:40px; margin-right:10px;"></img>' +
            '<div><b>Nome:</b> <span>{nome}</span></div>' +
            '<div><b>Ref:</b> <span>{ref}</span></div>' +
            '</div>',
        offline_catalogs: 'Necessita de estar Online para aceder aos Catalogos',
        offline_favorites: 'Necessita de estar Online para aceder aos Favoritos',
        offline_search: 'Necessita de estar Online para aceder � Pesquisa',
        remove_favorite: 'Remover Favorito',
        open_page: 'Ir para P�gina',
        open_favorite: 'Abrir Favorito ',
        open_product: 'Abrir Pagina do Produto',
        open: 'Abrir',
        add_product: 'Produto adicionado aos favoritos',
        no_pages: 'Catalogo sem Paginas',
        no_products: 'N�o existem produtos nesta pagina',
        add_page: 'Pagina adicionada aos favoritos',
        offline: 'A trabalhar em modo offline',
        offline_error: 'Offline, necessita de estar online para aceder a este conte�do',
        exit: 'Sair da Aplica��o?',
        yes: 'Sim',
        no: 'N�o',
        cancel: 'Cancelar',
        share_page_text: 'Imagem do Catalogo ',
        share_page_text2: ' partilhada atrav�s da aplica��o Italbox',
        share_product_text: 'Imagem do Produto do Catalogo ',
        share_product_text2: ' partilhada atrav�s da aplica��o Italbox',*/
        },
        {
        id : 2,
        lang : 'en',
        start_caixilharia:  'margin:20px 10px 10px 20px;'+
            'border-radius:5px; border-bottom: 7px solid #05698e;'+
            'background: url(imgs/icons/caixilharia_menu_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        start_vidro:  'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/vidro_menu_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        start_extrusao:  'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/extrusao_menu_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        start_tratamento:  'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/tratamento_menu_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
       /* help_html: '<div style="margin:20px; margin-top:0px !important;">'+
        '<font color="#b69757">HELP</font><br/><br/><p><i>Join our catalogs anywhere and in any space, by a quick and intuitive way. </i><br />'+
        '<i>Consult all our products and all the details with the APP ITALBOX. </i><br />'+
        '<i>Select and share your Bookmarks.</i></p><br/><p>Do you need HELP?  Follow our tips in here.</p>'+
        '<p>When you open this application, you have access to the menus which allows you to explore all that you are looking for:<br /><br />'+
        '<i class="icon-italbox"></i> � ITALBOX MENU � company profile<br /><i class="icon-catalogos"></i> � CATALOG MENU � Catalogs Access. <br />'+
        '<i class="icon-star"></i> � FAVORITES MENU � storing your main pages or your favorites products .<br />'+
        '<i class="icon-mundo-catalogos"></i> � LANGUAGES MENU � switch language </p><br /><p><font color="#b69757"><strong>Browsing Tips</strong></font><br /><br />'+
        'All the informations is at your disposal on the MENU main page, however, '+
        'you can switch MENU�s by clicking on the Top bar. In this bar you will find:<br /><br />'+
        '<i class="icon-back"></i> � Fall back<br /><i class="icon-pesquisa"></i> � Research<br /><i class="icon-menu"></i> � Menu<br /><br />'+
        'If the bar is some way hidden, please click on this symbol <i class="icon-baixo"></i> this way you will see it again.'+
        'The content of all Menus will be below at your disposal.<br />'+
        'If you already know the name of the product you want to see, please research it on <i class="icon-pesquisa"></i>.<br /><br />'+
        '<font color="#b69757"><strong>How to consult the Catalogs</strong></font><br /><br />In the catalogs Menu, click on the the catalog that you want to consult.'+
        '<a name="_GoBack" id="_GoBack"></a><br />Confirm you want to acess it.'+
        'Move your finger either for the left side or right side to browsing the catalog pages.'+
        'For a better visualization, you can enlarge the page that you are consulting.<br />'+
        'In the bar below, you will find the number of products at your disposal.'+
        'By tapping the arrow symbol you will have access to all the details of the products. <br />In the right side of the screen,'+
        'you will find also the main functions:<br /><br /><i class="icon-lista"></i> � List of the Catalog Pages<br />'+
        '<i class="icon-star-catalogos"></i> � Bookmark your pages or products<br />'+
        '<i class="icon-partilha"></i> � Share your bookmarks pages or products with your friends</p><br /><p><font color="#b69757"><strong>Consulting Products</strong></font>'+
        '<br /><br />Touch the image product on the bar below to access all the details of the product you are seeing.'+
        'To visualize all EXTRAS of the product tap the button EXTRAS, '+
        'tap the button  <i class="icon-back"></i> to return to the product details. To leave the product details click on the <i class="icon-close"></i> and continue viewing the catalog.<br /><br />'+
        '<font color="#b69757"><strong>Favorites </strong></font><br /><br />To add a bookmark, please select <i class="icon-star-catalogos"></i> '+
        'in the right side of the screen. You will be notified for the operation.<br />'+
        'To see your favorites, please access the main page or the top bar.<br />'+
        'Your Favorites will be separated by pages and products, to consult them, please tap on the tab product.<br />'+
        'You erase your bookmarks by clicking on the <i class="icon-close3"></i>.</p></div>',
        italbox : 'ITALBOX',
        catalogs : 'CATALOGS',
        favorites : 'FAVORITES',
        language : 'LANGUAGE',
        help : 'HELP',
        pages: 'PAGES',
        products : 'PRODUCTS',
        product : 'Products',
        favorites_empty: 'Without Favorites',
        products_empty: 'Without Results',
        search : 'Search...',
        search_list : '<div class="lista-pesquisa">'+
            '<img src="http://www.critecns.com/italbox/assets/uploads/imgs/{foto}" style="float:left; height:40px; margin-right:10px;"></img>' +
            '<div><b>Name:</b> <span>{nome}</span></div>' +
            '<div><b>Ref:</b> <span>{ref}</span></div>' +
            '</div>',
        offline_catalogs: 'You need a Internet Connection to open the Catalogs',
        offline_favorites: 'You need a Internet Connection to open the Favorites',
        offline_search: 'You need a Internet Connection to open the Search',
        remove_favorite: 'Remove Favorite',
        open_page: 'Go to page',
        open_favorite: 'Open Favorite',
        open_product: 'Open Product Page',
        open: 'Open',
        add_product: 'Product added to Favorites',
        no_pages: 'Catalog without Pages',
        no_products: 'This page doesn\'t have any Products',
        add_page: 'Page added to Favorites',
        offline: 'Working in Offline Mode',
        offline_error: 'Offline, you need to be Online to view this content',
        exit: 'Exit Application?',
        yes: 'Yes',
        no: 'No',
        cancel: 'Cancel',
        share_page_text: 'Image from the Catalog ',
        share_page_text2: ' shared through the Italbox App',
        share_product_text: 'Image of a Product from the Catalog ',
        share_product_text2: ' shared through the Italbox App',*/
        },
        {
        id : 3,
        lang : 'fr',
        start_caixilharia:  'margin:20px 10px 10px 20px;'+
            'border-radius:5px; border-bottom: 7px solid #05698e;'+
            'background: url(imgs/icons/caixilharia_menu_fr.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        start_vidro:  'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/vidro_menu_fr.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        start_extrusao:  'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/extrusao_menu_fr.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        start_tratamento:  'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/tratamento_menu_fr.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
       /* company_html : '<div class="italbox"><img src="imgs/company.jpg"></img><br/><font color="#b69757">ENTREPRISE</font><br/><br/><p>ITALBOX, LDA, entreprise fond�e en 1999, fabrique des panneaux et des cabines en �tant une r�ference au Portugal.</br><br/>Le design distinctif et exclusif, l\'excellente dichotomie qualit�/prix et l\'importance que nous donnons � la satisfaction du client sont nos caract�ristiques d\'identication. Notre exp�rience et savoir-foire nos permet de rencontrer les solutions pr�tendu par les clients.</br>Pour que vous puissiez nous connaitre et v�ri er les mod�les que nous produisons, voulez-vous consulter notre web-site: <font color="#b69757">www.italbox.pt</font>.<br/><br/>Par del� des divers gammes de produits du catalogue, nous produisons aussi sur mesures. Les diff�rents h�tels o� nous avons appliqu� nos produits et solutions sont la reconnaissance de notre professionalisme.<br/><br/>Nous vous informons que nous sommes � votre service pour toutes renseignement suppl�mentaires � travers de notre e-mail: <font color="#b69757">export.italbox@italbox.pt</font>.</p></div>',
        help_html: '<div style="margin:20px; margin-top:0px !important;">'+
        '<font color="#b69757">AIDE</font><br/><br/><p><i>Acc�der rapidement et intuitivement n�importe o� � nos catalogues. </i><br />'+
        '<i>Avec APP ITALBOX vous pouvez voir tous nos produits et leurs d�tails. </i><br />'+
        '<i>Choisissez et partager vos favoris.</i></p><br/><p>Avez-vous besoin d�aide ? Suivez nos conseils ici.</p>'+
        '<p>Lors de l\'ouverture de l\'application l\'utilisateur a acc�s aux menus permettant d\'explorer:<br /><br />'+
        '<i class="icon-italbox"></i> � menu Italbox � profil de l�entreprise<br /><i class="icon-catalogos"></i> � menu Catalogues � acc�s aux catalogues. <br />'+
        '<i class="icon-star"></i> � menu Favoris � archives de vos pages et/ou produits favoris.<br />'+
        '<i class="icon-mundo-catalogos"></i> � menu Langue� changer la langue </p><br /><p><font color="#b69757"><strong>Conseils d�exploration</strong></font><br /><br />'+
        'L�acc�s � l�information est disponible dans les menus de la page d�accueil, cependant,'+
        'vous pouvez changer � tout moment de menu il suffit de parvenir � la barre du haut.Cette barre est composer par:<br /><br />'+
        '<i class="icon-back"></i> � R�troc�der<br /><i class="icon-pesquisa"></i> � Rechercher<br /><i class="icon-menu"></i> � Menus<br /><br />'+
        'Si celle-ci est cach�e il suffit de faire un clic <i class="icon-baixo"></i> sur pour la faire r�appara�tre.'+
        'Le contenu de chaque menu est disponible imm�diatement en dessous.<br />'+
        'Si vous connaissez d�j� le nom du produit que vous voulez <i class="icon-pesquisa"></i>consulter, recherch� � travers.<br /><br />'+
        '<font color="#b69757"><strong>Consulter les catalogues</strong></font><br /><br />Sur le menu catalogues faite un clic sur la couverture du catalogue que vous voulez consulter.'+
        '<a name="_GoBack" id="_GoBack"></a><br />Confirmer l�acc�s au catalogue.'+
        'De suite, passer d�une page � l�autre en faisant glisser votre doigt vers la gauche ou vers la droite.'+
        'Pour une meilleure vue vous pouvez encore augmenter et d�placer l\'image de la page en consultation.<br />'+
        'Sur la barre inf�rieure vous trouverez les produits existants sur la page de ce visionnement.'+
        'En appuyant sur la fl�che vous pourrez acc�der aux d�tails du produit. <br />Sur le c�t� droit de l\'�cran,'+
        'vous trouverez aussi les fonctions suivantes:<br /><br /><i class="icon-lista"></i> � Se reporter aux pages sp�cifiques du catalogue<br />'+
        '<i class="icon-star-catalogos"></i> � Mettre en pages et/ou des produits comme favori<br />'+
        '<i class="icon-partilha"></i> � Partager les pages et/ou les produits avec des amis</p><br /><p><font color="#b69757"><strong>Consulter les produits</strong></font>'+
        '<br /><br />Sur la barre inferieure vous pouvez avoir acc�s au d�tail du produit il suffit de faire un clic sur le m�me.'+
        'Pour voir les suppl�ments du produit faite un clic sur EXTRAS '+
        'et r�troc�der sur la fl�che <i class="icon-back"></i> pour retourner au d�tail. Pour sortir faite un clic sur <i class="icon-close"></i> pourfermer et continuer � consulter le catalogue.<br /><br />'+
        '<font color="#b69757"><strong>Favoris </strong></font><br /><br />Pour ajouter une page et/ou un produit au favori utiliser <i class="icon-star-catalogos"></i> '+
        'pr�sent� � votre droite. Vous serez notifi� � la r�ussite de cette op�ration.<br />'+
        'Pour voir les favoris acc�der au menu favori sur la page d\'accueil ou la barre sup�rieure.<br />'+
        'Les favoris sont divis�s par pages et produits, pour une consultation faite un clic sur le s�parateur correspondant.<br />'+
        'Vous pouvez encore publier vos favoris, en effa�ant des pages et /ou des produits en tapant sur le <i class="icon-close3"></i>.</p></div>',
        italbox : 'ITALBOX',
        catalogs : 'CATALOGUES',
        favorites : 'FAVORIS',
        language : 'LANGUE',
        help : 'AIDE',
        pages: 'PAGES',
        products : 'PRODUITS',
        product : 'Produits',
        favorites_empty: 'Sans Favoris',
        products_empty: 'Sans R�sultats',
        search : 'Recherche...',
        search_list : '<div class="lista-pesquisa">'+
            '<img src="http://www.critecns.com/italbox/assets/uploads/imgs/{foto}" style="float:left; height:40px; margin-right:10px;"></img>' +
            '<div><b>Name:</b> <span>{nome}</span></div>' +
            '<div><b>Ref:</b> <span>{ref}</span></div>' +
            '</div>',
        offline_catalogs: 'Vous avez besoin d\'une connexion � Internet pour ouvrir les Catalogues',
        offline_favorites: 'Vous avez besoin d\'une connexion � Internet pour ouvrir les Favoris',
        offline_search: 'Vous avez besoin d\'une connexion � Internet pour ouvrir la Recherche',
        remove_favorite: 'Retirer des Favoris',
        open_page: 'Ouvrir Page',
        open_favorite: 'Ouvrir Favori',
        open_product: 'Ouvrir la page du produit',
        open: 'Ouvrir',
        add_product: 'Produit ajout� aux Favoris',
        no_pages: 'Catalogue sans Pages',
        no_products: 'Cette page n\'est pas encore produits',
        add_page: 'Ajout� au Favoris',
        offline: 'En mode Offline',
        offline_error: 'Offline, vous devez �tre en Online pour voir ce Contenu',
        exit: 'Quitter l\'application?',
        yes: 'Oui',
        no: 'Non',
        cancel: 'Annuler',
        share_page_text: 'Image du catalogue ',
        share_page_text2: ' partag�e sur l\'App Italbox',
        share_product_text: 'Image d\'un produit du catalogue ',
        share_product_text2: ' partag�e sur l\'App Italbox',*/
        },
        {
        id : 4,
        lang : 'es',
        start_caixilharia:  'margin:20px 10px 10px 20px;'+
            'border-radius:5px; border-bottom: 7px solid #05698e;'+
            'background: url(imgs/icons/caixilharia_menu_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        start_vidro:  'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/vidro_menu_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        start_extrusao:  'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/extrusao_menu_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        start_tratamento:  'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/tratamento_menu_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
       /* company_html: '<div class="italbox"><img src="imgs/company.jpg"></img><br/><font color="#b69757">EMPRESA</font><br/><br/><p>Italbox, LDA, es una empresa fundada en 1999 especializada en la fabricaci�n de cabinas de ducha y es una referencia en Portugal.<br/><br/>El dise�o propio y �nico, la dicotom�a excelente relaci�n calidad/precio y el centrarse en las satisfacciones del cliente son nuestras se�as de identidad. Nuestra experiencia y conocimiento nos permiten encontrar soluciones deseadas por los clientes.<br/><br/>Para conocernos a nosotros y los modelos que producimos, por favor consulte nuestro web-site:  <font color="#b69757">www.italbox.pt</font>.<br/><br/>Al lado de las diferentes gamas de los productos del cat�logo, tambi�n adaptamos. Los diversos hoteles en cu�l nuestros productos y soluciones son aplicados son el reconocimiento de nuestro profissionalismo.<br/>Informamos que estamos a su disposici�n para cualquier informaci�n adicional atrav�s del correo electr�nico: <font color="#b69757">export.italbox@italbox.pt</font>.</p></div>',
        help_html: '<div style="margin:20px; margin-top:0px !important;">'+
        '<font color="#b69757">AYUDA</font><br/><br/><p><i>Ve a donde quieras nuestros cat�logos de manera r�pida e intuitiva. </i><br />'+
        '<i>Con la aplicati�n - APP ITALBOX � usted puede ver nuestros productos y sus detalles. </i><br />'+
        '<i>Elija y comparta sus favoritos.</i></p><br/><p>Necesita de ayuda? Siga nuestros consejos aqu�.</p>'+
        '<p>Al abrir la aplicaci�n, el usuario tiene acceso a los men�s que permiten la exploraci�n:<br /><br />'+
        '<i class="icon-italbox"></i> �  menu ITALBOX  � el perfil de la empresa<br /><i class="icon-catalogos"></i> � menu Cat�logos � acceso a los cat�logos. <br />'+
        '<i class="icon-star"></i> � menu FAVORITOS � archivo de sus p�ginas y/o productos favoritos.<br />'+
        '<i class="icon-mundo-catalogos"></i> � menu IDIOMA � cambiar de idioma</p><br /><p><font color="#b69757"><strong>Consejos de navegation</strong></font><br /><br />'+
        'El acceso a la informaci�n est� disponible mediante los men�s de la p�gina principal,'+
        'pero se puede cambiar en cualquier momento, accediendo a la barra del men� superior. En esta Barra encontrar� las siguientes funciones:<br /><br />'+
        '<i class="icon-back"></i> � Retroceder<br /><i class="icon-pesquisa"></i> � Investigar<br /><i class="icon-menu"></i> � Menus<br /><br />'+
        'Si est� oculta, puntee en la flecha <i class="icon-baixo"></i> para hacer que vuelva a aparecer.'+
        'El contenido de cada men� est� disponible inmediatamente por debajo de este.<br />'+
        'Si ya conoce el nombre del producto que desea ver, buscar a trav�s del <i class="icon-pesquisa"></i>.<br /><br />'+
        '<font color="#b69757"><strong>Consultar los Cat�logos</strong></font><br /><br/> En el men� Cat�logos, puntee en la portada del cat�logoque quieres ver.'+
        '<a name="_GoBack" id="_GoBack"></a><br />Validar el acceso al cat�logo.'+
        'Entonces navega entre las p�ginas deslizando el dedo hacia la izquierda y/o derecha.'+
        'Para una mejor visualizaci�n, puedes aumentar e mover la imagende la p�gina que se est� visualizando.<br />'+
        'En la barra inferior, puedes mirar e contabilizar los productos existentes en la p�gina que se est� visualizando.'+
        'Al hacer uso dela flecha puede acceder a los detalles del producto. <br />En el lado derecho de la pantalla '+
        'tambi�n puede encontrar las siguientes funciones:<br /><br /><i class="icon-lista"></i> � Consulte las p�ginas espec�ficas del cat�logo<br />'+
        '<i class="icon-star-catalogos"></i> � Configurar p�ginas y/o productos como favoritos<br />'+
        '<i class="icon-partilha"></i> � Compartir p�ginas y/o productos con los amigos</p><br /><p><font color="#b69757"><strong>Analizar los productos</strong></font>'+
        '<br /><br />Toque la imagen del producto en la barra inferior para acceder al detalle de la misma.'+
        'Para ver el otro producto,toque en la tecla EXTRAS.<br />'+
        'Para volver a atr�s, s�lo tiene que pulsar la flecha <i class="icon-back"></i> de este modo vuelve al detalle. Para salir, pulse en la <i class="icon-close"></i> para cerrar y continuar navegando por el cat�logo.<br /><br />'+
        '<font color="#b69757"><strong>Los Favoritos </strong></font><br /><br />Para agregar una p�gina o un producto favorito, utilice <i class="icon-star-catalogos"></i> '+
        'que est� a su derecha. Ser� notificado por el �xito de esta operaci�n.<br />'+
        'Para ver sus favoritos, vaya al men� de favoritos en la p�gina principal o en la barra superior.<br />'+
        'Los favoritos son divididos por p�ginas. Para ver puntee en la ficha correspondiente para acceder alo que quieres.<br />'+
        'Tambi�n puede editar todos sus favoritos, p�ginas y/o productos as� como eliminar las mimas solamente pulsando en lo s�mbolo<i class="icon-close3"></i>.</p></div>',
        italbox : 'ITALBOX',
        catalogs : 'CATALOGOS',
        favorites : 'FAVORITOS',
        language : 'IDIOMA',
        help : 'AYUDA',
        pages: 'P�GINAS',
        products : 'PRODUCTOS',
        product : 'Productos',
        favorites_empty: 'No hay Favoritos',
        products_empty: 'No hay Resultados',
        search : 'B�squeda...',
        search_list : '<div class="lista-pesquisa">'+
            '<img src="http://www.critecns.com/italbox/assets/uploads/imgs/{foto}" style="float:left; height:40px; margin-right:10px;"></img>' +
            '<div><b>Nome:</b> <span>{nome}</span></div>' +
            '<div><b>Ref:</b> <span>{ref}</span></div>' +
            '</div>',
        offline_catalogs: 'Necesitas estar conectado a Internet para acceder a los Cat�logos',
        offline_favorites: 'Necesitas estar conectado a Internet para acceder a los Favoritos',
        offline_search: 'Necesitas estar conectado a Internet para acceder a la B�squeda',
        remove_favorite: 'Eliminar Favorito',
        open_page: 'Abrir P�gina',
        open_favorite: 'Abrir Favorita',
        open_product: 'Abrir la p�gina del Producto',
        open: 'Abrir',
        add_product: 'Producto a�adido a Favoritos',
        no_pages: 'Sin P�ginas de cat�logo',
        no_products: 'No hay Productos en esta P�gina',
        add_page: 'P�gina a�adida a Favoritos',
        offline: 'Trabajar en el modo Offline',
        offline_error: 'Offline, usted necesita estar Online para acceder a este contenido',
        exit: 'Salir de la Aplicaci�n?',
        yes: 'S�',
        no: 'No',
        cancel: 'Cancelar',
        share_page_text: 'Imagen del Catalogo ',
        share_page_text2: ' compartida a trav�s de la aplicaci�n Italbox',
        share_product_text: 'Imagen de Produto del Catalogo ',
        share_product_text2: ' compartida a trav�s de la aplicaci�n Italbox',*/
        },
        ]
    }
});