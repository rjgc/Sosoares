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
            { name: 'produtos_caixilharia', type: 'string' },
            { name: 'obras_caixilharia', type: 'string' },
            { name: 'servicos_caixilharia', type: 'string' },
            { name: 'produtos_vidro', type: 'string' },
            { name: 'servicos_vidro', type: 'string' },
            { name: 'area_tecnica', type: 'string' },
            { name: 'produtos_extrusao', type: 'string' },
            { name: 'servicos_extrusao', type: 'string' },
            { name: 'apoio_cliente', type: 'string' },
            { name: 'tratamento_lacagem', type: 'string' },
            { name: 'tratamento_anodizacao', type: 'string' },
            { name: 'tratamento_imitacao', type: 'string' },
            { name: 'idiomas', type: 'string' },
            { name: 'ajuda', type: 'string' },
            { name: 'language_toolbar', type: 'string' },
            { name: 'help_toolbar', type: 'string' },
            { name: 'help_text', type: 'string' },
            { name: 'services', type: 'string' },
            { name: 'area', type: 'string' },
            { name: 'apoio', type: 'string' },
            { name: 'lacagem', type: 'string' },
            { name: 'anodizacao', type: 'string' },
            { name: 'madeira', type: 'string' },
            { name: 'produtos', type: 'string' },
            { name: 'obras', type: 'string' },
            { name: 'sair', type: 'string' },
            { name: 'exit', type: 'string' },
            { name: 'yes', type: 'string' },
            { name: 'no', type: 'string' },
            { name: 'cancel', type: 'string' },
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
        produtos_caixilharia: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/caixilharia.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        obras_caixilharia: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/obras.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        servicos_caixilharia: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/servicos_vidro.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        produtos_vidro: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/vidro.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        servicos_vidro: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/servicos_vidro.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        area_tecnica: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/tecnica.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        produtos_extrusao: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/extrusao.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        servicos_extrusao: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/servicos_extrusao.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        apoio_cliente: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/apoio.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        tratamento_lacagem: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/lacagem.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        tratamento_anodizacao: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/anodizacao.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        tratamento_imitacao: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/imitacao.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        idiomas: '<i class="icon-idioma"></i><br><font style="font-size:15px">Idiomas</font>',
        ajuda: '<i class="icon-call2"></i><br><font style="font-size:15px">Contactos</font>',
        language_toolbar: '<span style="background: #012f46; color:#FFF; float:left; font-size: 21px;margin-top: 7px; "><i class="icon-idioma" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Idiomas</span>',
        help_toolbar: '<span style="background: #012f46; color:#FFF; float:left; font-size: 21px;margin-top: 7px; "><i class="icon-call2" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Contactos</span>',
        help_text: '<div style="max-width:100%" class="leaf_panel">'+
            '<div style="margin:10px"><br><h3>Departamento Administrativo</h3>'+
                        '<span id="mails"><a href="mailto:geral@sosoares.pt">geral@sosoares.pt</a></span>'+
                        '<p>Rua do Baldeirão, 4440-346</p>'+
                        '<p>Sobrado, Valongo - Portugal</p>'+
                        '<p>T +351 224 119 230</p>'+
                        '<p>F +351 224 119 231</p><br>'+
                        '<h3>Departamento Comercial</h3>'+
                        '<span id="mails"><a href="mailto:comercial@sosoares.pt">comercial@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto - Portugal</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                        '<h3>Departamento Técnico</h3>'+
                        '<span id="mails"><a href="mailto:gabinete.tecnico@sosoares.pt">gabinete.tecnico@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                         '<h3>Departamento Desenvolvimento </h3>'+
                        '<span id="mails"><a href="mailto:desenvolvimento@sosoares.pt">desenvolvimento@sosoares.pt</a></span>'+
                        '<p>Travessa do Bolegão, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 740</p>'+
                        '<p>F +351 234 729 741</p><br>'+
                         '<h3>Departamento de Exportação</h3>'+
                        '<span id="mails"><a href="mailto:export@sosoares.pt">export@sosoares.pt</a></span>'+
                        '<p>Travessa do Bolegão, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 743</p>'+
                        '<p>F +351 234 729 741</p>'+
                        '</div></div>',
        services : 'Serviços',
        area: 'Área Técnica',
        apoio: 'Apoio Cliente',
        lacagem: 'Lacagem',
        anodizacao: 'Anodização',
        madeira: 'Imitação Madeira',
        produtos: 'Produtos',
        obras: 'Obras',
        sair: 'Sair',
        exit: 'Sair da Aplicação?',
        yes: 'Sim',
        no: 'Não',
        cancel: 'Cancelar',
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
        produtos_caixilharia: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/caixilharia_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        obras_caixilharia: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/obras_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        servicos_caixilharia: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/servicos_vidro_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        produtos_vidro: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/vidro_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        servicos_vidro: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/servicos_vidro_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        area_tecnica: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/tecnica_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        produtos_extrusao: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/extrusao_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        servicos_extrusao: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/servicos_extrusao_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        apoio_cliente: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/apoio_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        tratamento_lacagem: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/lacagem_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        tratamento_anodizacao: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/anodizacao_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        tratamento_imitacao: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/imitacao_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        idiomas: '<i class="icon-idioma"></i><br><font style="font-size:15px">Languages</font>',
        ajuda: '<i class="icon-call2"></i><br><font style="font-size:15px">Contacts</font>',
        language_toolbar: '<span style="background: #012f46; color:#FFF; float:left; font-size: 21px;margin-top: 7px; "><i class="icon-idioma" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Languages</span>',
        help_toolbar: '<span style="background: #012f46; color:#FFF; float:left; font-size: 21px;margin-top: 7px; "><i class="icon-call2" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Contacts</span>',
        help_text: '<div style="max-width:100%" class="leaf_panel">'+
            '<div style="margin:10px"><br><h3>Administrative Department</h3>'+
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
                        '<p>F +351 234 729 741</p>'+
                        '</div></div>',
        services : 'Services',
        area: 'Technical Area',
        apoio: 'Customer Service',
        lacagem: 'Lacquering',
        anodizacao: 'Anodizing',
        madeira: 'Wood Imitation',
        produtos: 'Products',
        obras: 'Works',
        sair: 'Exit',
        exit: 'Exit Application?',
        yes: 'Yes',
        no: 'No',
        cancel: 'Cancel',
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
        produtos_caixilharia: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/caixilharia_fr.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        obras_caixilharia: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/obras_fr.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        servicos_caixilharia: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/servicos_vidro_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        produtos_vidro: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/vidro_fr.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        servicos_vidro: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/servicos_vidro_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        area_tecnica: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/tecnica_fr.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        produtos_extrusao: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/extrusao_fr.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        servicos_extrusao: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/servicos_extrusao_en.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        apoio_cliente: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/apoio_fr.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        tratamento_lacagem: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/lacagem_fr.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        tratamento_anodizacao: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/anodizacao_fr.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        tratamento_imitacao: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/imitacao_fr.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        idiomas: '<i class="icon-idioma"></i><br><font style="font-size:15px">Langues</font>',
        ajuda: '<i class="icon-call2"></i><br><font style="font-size:15px">Contacts</font>',
        language_toolbar: '<span style="background: #012f46; color:#FFF; float:left; font-size: 21px;margin-top: 7px; "><i class="icon-idioma" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Langues</span>',
        help_toolbar: '<span style="background: #012f46; color:#FFF; float:left; font-size: 21px;margin-top: 7px; "><i class="icon-call2" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Contacts</span>',
        help_text: '<div style="max-width:100%" class="leaf_panel">'+
                        '<div style="margin:10px">'+
                        '<h3>Département Administratif</h3>'+
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
                        '<p>F +351 234 729 741</p>'+
                        '</div></div>',
        services : 'Services',
        area: 'Secteur Technique',
        apoio: 'Service Client',
        lacagem: 'Laquage',
        anodizacao: 'Anodisation',
        madeira: 'Imitation Bois',
        produtos: 'Produits',
        obras: 'Oeuvres',
        sair: 'Quitter',
        exit: 'Quitter l\'application?',
        yes: 'Oui',
        no: 'Non',
        cancel: 'Annuler',
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
        produtos_caixilharia: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/caixilharia_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        obras_caixilharia: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/obras.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        servicos_caixilharia: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/servicos_vidro_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        produtos_vidro: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/vidro_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        servicos_vidro: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/servicos_vidro_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        area_tecnica: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/tecnica.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        produtos_extrusao: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/extrusao_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        servicos_extrusao: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/servicos_extrusao_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        apoio_cliente: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/apoio_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        tratamento_lacagem: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/lacagem_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        tratamento_anodizacao: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/anodizacao_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        tratamento_imitacao: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/imitacao_es.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        idiomas: '<i class="icon-idioma"></i><br><font style="font-size:15px">Idiomas</font>',
        ajuda: '<i class="icon-call2"></i><br><font style="font-size:15px">Contactos</font>',
        language_toolbar: '<span style="background: #012f46; color:#FFF; float:left; font-size: 21px;margin-top: 7px; "><i class="icon-idioma" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Idiomas</span>',
        help_toolbar: '<span style="background: #012f46; color:#FFF; float:left; font-size: 21px;margin-top: 7px; "><i class="icon-call2" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Contactos</span>',
        help_text: '<div style="max-width:100%" class="leaf_panel">'+
            '<div style="margin:10px">'+
            '<h3>Departamento Administrativo</h3>'+
                        '<span id="mails"><a href="mailto:geral@sosoares.pt">geral@sosoares.pt</a></span>'+
                        '<p>Rua do Baldeirão, 4440-346</p>'+
                        '<p>Sobrado, Valongo - Portugal</p>'+
                        '<p>T +351 224 119 230</p>'+
                        '<p>F +351 224 119 231</p><br>'+
                        '<h3>Departamento Comercial</h3>'+
                        '<span id="mails"><a href="mailto:comercial@sosoares.pt">comercial@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto - Portugal</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                        '<h3>Departamento Técnico</h3>'+
                        '<span id="mails"><a href="mailto:gabinete.tecnico@sosoares.pt">gabinete.tecnico@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                         '<h3>Departamento de Desarrollo </h3>'+
                        '<span id="mails"><a href="mailto:desenvolvimento@sosoares.pt">desenvolvimento@sosoares.pt</a></span>'+
                        '<p>Travessa do Bolegão, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 740</p>'+
                        '<p>F +351 234 729 741</p><br>'+
                         '<h3>Departamento de Exportación</h3>'+
                        '<span id="mails"><a href="mailto:export@sosoares.pt">export@sosoares.pt</a></span>'+
                        '<p>Travessa do Bolegão, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 743</p>'+
                        '<p>F +351 234 729 741</p>'+
                        '</div></div>',
        services : 'Servicios',
        area: 'Área Técnica',
        apoio: 'Asistencia Cliente',
        lacagem: 'Lacado',
        anodizacao: 'Anodizacin',
        madeira: 'Imitación Madera',
        produtos: 'Productos',
        obras: 'Obras',
        sair: 'Salir',
        exit: 'Salir de la Aplicación?',
        yes: 'Sí',
        no: 'No',
        cancel: 'Cancelar',
        },
        ]
    }
});