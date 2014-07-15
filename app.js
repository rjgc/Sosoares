var thumb_products = 'http://www.critecns.com/sosoares/assets/uploads/produtos/thumb/';
var products = 'http://www.critecns.com/sosoares/assets/uploads/produtos/';
var thumb_works = 'http://www.critecns.com/sosoares/assets/uploads/obras/thumb/';
var works = 'http://www.critecns.com/sosoares/assets/uploads/obras/';

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': 'sencha-touch-2.0.1.1/ux'
    }
});

Ext.define('Italbox.Viewport10', {
    extend: 'Ext.NestedList',
     xtype : 'my-viewport10',
      cls: 'pesquisa',
      id: 'multi',
    //alias: "widget.grocerieslist",
    config: {
        fullscreen: true,
        useToolbar: false,
        showAnimation: 
            {
                type: 'slideIn',
                duration: 1000,
                delay: 700,
                direction: 'down',
                easing: 'easeIn'
            },  
            hideAnimation: 
            {
                type: 'slideOut',
                duration: 700,
                direction: 'up',
                easing: 'easeOut'
            }, 

        title: '',
        displayField: 'text',
        store: '',
        listConfig:{
        cls: 'pesquisa2',
        itemTpl:  '<div class="lista-pesquisa">'+
            '<img src="" style="float:left; height:30px; margin-right:10px;"><i class="icon-front front"></i></img>' +
            '<div> <span>{text}</span></div>' +
            '</div>',
         
        emptyText: '<div class="lista-pesquisa">Sem resultados</div>',
        },
        detailCard:{
            xtype:'panel',
            //styleHtmlContent: true,
            scrollable: true,
            //padding: '0px !important',
            html: '',
            style: 'background-color: #054667;',
             items: [{
                     id: 'html_pic_multi',
                    html  : '',
                    },
                    {
                     id: 'html_multi',
                    html  : '',
                    },
            ]
        },
        items: [
               {
               xtype: 'toolbar',
               docked: 'top',
               cls: 'barraPesquisa',
               id: 'multi_toolbar',
               html: '<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-apoio" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Serviços</span>',
        }],
        listeners: {
            leafitemtap: function(me, list, index, target, record) {
               Ext.getCmp('html_pic_multi').setHtml('<img style="width:100%; height:100%; position:absolute" src="'+record.get('foto')+'">');
         
             
               Ext.getCmp('html_multi').setHtml('<div style="max-width:100%" class="leaf_panel">'+
                                        '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('html')+'</p></div></div>');
              // me.getDetailCard().setStyle('background-color: #054667;margin: 0px !important;padding: 0px !important');
               // me.getDetailCard().setFullscreen(true);
            }
        }
    },
     initialize: function() {
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('html_pic_multi').setHeight(Ext.Viewport.getWindowHeight()/2);
         }
         else {
            Ext.getCmp('html_multi').setHeight(Ext.Viewport.getWindowHeight());
         }
       
    },
    handleOrientationChange: function(viewport, orientation, width, height){
         
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('html_pic_multi').setHeight(Ext.Viewport.getWindowHeight()/2);
         }
         else {
            Ext.getCmp('html_multi').setHeight(Ext.Viewport.getWindowHeight());
         }
    }
});

Ext.define('Italbox.Viewport9', {
    extend: 'Ext.NestedList',
     xtype : 'my-viewport9',
      cls: 'pesquisa',
      id: 'works',
    //alias: "widget.grocerieslist",
    config: {
        fullscreen: true,
        useToolbar: false,
        showAnimation: 
            {
                type: 'slideIn',
                duration: 1000,
                delay: 700,
                direction: 'down',
                easing: 'easeIn'
            },  
            hideAnimation: 
            {
                type: 'slideOut',
                duration: 700,
                direction: 'up',
                easing: 'easeOut'
            }, 

        title: 'Obras',
        displayField: 'text',
        store: 'Obras',
        listConfig:{
        cls: 'pesquisa2',
        itemTpl:  '<div class="lista-pesquisa">'+
            '<img src="'+thumb_works+'{foto}" style="float:left; height:30px; margin-right:10px;"><i class="icon-front front"></i></img>' +
            '<div> <span>{text}</span></div>' +
            '</div>',
         
        emptyText: '<div class="lista-pesquisa">Sem resultados</div>',
        },
        detailCard:{
            xtype:'panel',
            //styleHtmlContent: true,
            scrollable: true,
            //padding: '0px !important',
            //html: '',
            style: 'background-color: #054667;',
           // fullscreen: true,
            //height: '50%',
            items: [{
                        xtype: 'carousel',
                        id: 'carousel_obras',
                        /*autoSlide: true,
                        carouselSlideDelay: 3500,*/
                        //cls: 'carousel_obras',
                       // height: 320,
                       /* maxHeight: 768,
                        minHeight: 320,*/
                        /*style: 'max-width:100%; max-height:70%',*/
                        
                    },
                    {
                     id: 'html_obras',
                    html  : '',
                    },
            ]
        },
        items: [
               {
               xtype: 'toolbar',
               docked: 'top',
               cls: 'barraPesquisa',
               id: 'works_toolbar',
               html: '<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-obras" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Obras</span>',
               }],
        listeners: {
            leafitemtap: function(me, list, index, target, record) {
                  Ext.getCmp('carousel_obras').removeAll();
                  Ext.getCmp('html_obras').setHtml('');
                  Ext.getStore('Works_Gallery').load( function(pictures , operation ) {
                    var items = [];
                    Ext.each( pictures, function(picture) {
                      if (picture.get('id_obra') == record.get('id_obra')) {
                        //return;
                      items.push({
                        xtype: 'image',
                        src: works+picture.get('foto'),
                        style: 'background-size: 100% 100%;'
                      });
                       /*items.push({
                        xtype: 'image',
                        src: works+record.get('foto'),
                        style: 'background-size: 100% 100%;'
                      });  */           
                   // });
                   
                    }})
                     Ext.getCmp('carousel_obras').setItems(items);
                    Ext.getCmp('carousel_obras').setActiveItem(0);
                    
                    Ext.getCmp('html_obras').setHtml('<div style="max-width:100%" class="leaf_panel"><br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('descricao')+'</p></div></div>');
                    
                    })
                    // fill items into carousel
                   
               // });
             /* me.getDetailCard().setHtml('<div style="max-width:100%" class="leaf_panel">'+
                                        '<img style="max-width:100%; max-height:70%" src="'+works+record.get('foto')+'">'+
                                        '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('descricao')+'</p></div></div>');*/
              // me.getDetailCard().setStyle('background-color: #054667;margin: 0px !important;padding: 0px !important');
               // me.getDetailCard().setFullscreen(true);
            }
        },
    },
    initialize: function() {
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('carousel_obras').setHeight(Ext.Viewport.getWindowHeight()/2);
         }
         else {
            Ext.getCmp('carousel_obras').setHeight(Ext.Viewport.getWindowHeight()-50);
         }
       
    },
    handleOrientationChange: function(viewport, orientation, width, height){
         
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('carousel_obras').setHeight(Ext.Viewport.getWindowHeight()/2);
         }
         else {
            Ext.getCmp('carousel_obras').setHeight(Ext.Viewport.getWindowHeight()-50);
         }
    }
});

Ext.define('Italbox.Viewport8', {
    extend: 'Ext.NestedList',
     xtype : 'my-viewport8',
      cls: 'pesquisa',
      id: 'products',
    //alias: "widget.grocerieslist",
    config: {
        fullscreen: true,
        useToolbar: false,
        showAnimation: 
            {
                type: 'slideIn',
                duration: 1000,
                delay: 700,
                direction: 'down',
                easing: 'easeIn'
            },  
            hideAnimation: 
            {
                type: 'slideOut',
                duration: 700,
                direction: 'up',
                easing: 'easeOut'
            }, 

        title: 'Produtos',
        displayField: 'text',
        store: '',
        listConfig:{
        cls: 'pesquisa2',
        itemTpl:  '<div class="lista-pesquisa">'+
            '<img src="'+thumb_products+'{foto}" style="float:left; height:30px; margin-right:10px;"><i class="icon-front front"></i></img>' +
            '<div> <span>{text}</span></div>' +
            '</div>',
         
        emptyText: '<div class="lista-pesquisa">Sem resultados</div>',
        },
        detailCard:{
            xtype:'panel',
            //styleHtmlContent: true,
            scrollable: true,
            //padding: '0px !important',
            html: '',
            style: 'background-color: #054667;',
             items: [{
                     id: 'html_pic_produtos',
                    html  : '',
                    },
                    {
                     id: 'html_produtos',
                    html  : '',
                    },
            ]
        },
        items: [
               {
               xtype: 'toolbar',
               docked: 'top',
               cls: 'barraPesquisa',
               id: 'products_toolbar',
               html: '<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_caixilharia" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Produtos</span>',
        }],
        listeners: {
            leafitemtap: function(me, list, index, target, record) {
               Ext.getCmp('html_pic_produtos').setHtml('<img style="width:100%; height:100%; position:absolute" src="'+products+record.get('foto')+'">');
         
             
               Ext.getCmp('html_produtos').setHtml('<div style="max-width:100%" class="leaf_panel">'+
                                        '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('descricao')+'</p></div></div>');
              // me.getDetailCard().setStyle('background-color: #054667;margin: 0px !important;padding: 0px !important');
               // me.getDetailCard().setFullscreen(true);
            }
        }
    },
     initialize: function() {
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('html_pic_produtos').setHeight(Ext.Viewport.getWindowHeight()/1.7);
         }
         else {
            Ext.getCmp('html_pic_produtos').setHeight(Ext.Viewport.getWindowHeight()*1.2);
         }
       
    },
    handleOrientationChange: function(viewport, orientation, width, height){
         
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('html_pic_produtos').setHeight(Ext.Viewport.getWindowHeight()/1.7);
         }
         else {
            Ext.getCmp('html_pic_produtos').setHeight(Ext.Viewport.getWindowHeight()*1.2);
         }
    }
});


Ext.define('Italbox.Viewport7', {
    extend: 'Ext.Panel',
    xtype : 'my-viewport7',
    id:'menuI',
    cls: 'menuI',
    config: {
            showAnimation: 
            {
                type: 'slideIn',
                duration: 1000,
                delay: 700,
                direction: 'up',
                easing: 'easeIn'
            },  
            hideAnimation: 
            {
                type: 'slideOut',
                duration: 700,
                direction: 'down',
                easing: 'easeOut'
            }, 
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
    {
        flex:1, 
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [
        {
            id: 'start-caixilharia',
            flex: 1,
            style: 'margin:20px 10px 10px 20px;'+
            'border-radius:5px; border-bottom: 7px solid #05698e;'+
            'background: url(imgs/icons/caixilharia_menu.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        },
        {
            id: 'start-vidro',
            flex: 1,
            style: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/vidro_menu.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        },   
        ]
    },
    {
        flex:1,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            id: 'start-extrusao',
            flex: 1,
            style: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
            'background: url(imgs/icons/extrusao_menu.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        
        }, {
            id: 'start-tratamento',
            flex: 1,
            style: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
            'background: url(imgs/icons/tratamento_menu.png) no-repeat, rgba(16, 124, 164, .8);'+
            'background-size: contain; background-position: center;',
        },
        ]
    },
   /* {
        flex:1,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
      items: [
        {
            id: 'start-help',
            flex: 1,
            style: 'margin:5px 10px 10px 10px; background: url(imgs/icons/ajuda_menu.png) no-repeat, rgba(255, 255, 255, .4);'+
            'background-size: contain; background-position: center;',
        },
        ],    
    },*/
    ],
    listeners: [
    {
        element: 'element',
        delegate: '#start-vidro',
        event: 'tap',
        fn: function() {
            //if (connect === 1) {
               Ext.getCmp('menuI').hide();
            Ext.getCmp('back').show();
            Ext.getCmp('open-menu').show();
            Ext.getCmp('footer').hide();
            //Ext.getCmp('italbox').show();
            Ext.getCmp('favorites').setActiveItem(1);
            Ext.getCmp('favorites').show();
           /* }
            else{
                Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
            }*/
        }
    },
    {
        element: 'element',
        delegate: '#start-caixilharia',
        event: 'tap',
        fn: function() {
            Ext.getCmp('menuI').hide();
            Ext.getCmp('back').show();
            Ext.getCmp('open-menu').show();
            Ext.getCmp('footer').hide();
            //Ext.getCmp('italbox').show();
            Ext.getCmp('favorites').setActiveItem(0);
            Ext.getCmp('favorites').show();
        }
    },
     {
        element: 'element',
        delegate: '#start-extrusao',
        event: 'tap',
        fn: function() {
          //  if (connect === 1) {
               Ext.getCmp('menuI').hide();
            Ext.getCmp('back').show();
            Ext.getCmp('open-menu').show();
            Ext.getCmp('footer').hide();
            //Ext.getCmp('italbox').show();
            Ext.getCmp('favorites').setActiveItem(2);
            Ext.getCmp('favorites').show();
           /* }
            else{
                Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_favorites'), Ext.emptyFn);
            }*/
        }
    },
    {
        element: 'element',
        delegate: '#start-tratamento',
        event: 'tap',
        fn: function() {
          //  if (connect === 1) {
            Ext.getCmp('menuI').hide();
            Ext.getCmp('back').show();
            Ext.getCmp('open-menu').show();
            Ext.getCmp('footer').hide();
            //Ext.getCmp('italbox').show();
            Ext.getCmp('favorites').setActiveItem(3);
            Ext.getCmp('favorites').show();
           /* }
            else{
                Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_favorites'), Ext.emptyFn);
            }*/
        }
    },
   /* {
        element: 'element',
        delegate: '#start-language',
        event: 'tap',
        fn: function() {
        var panel_language = Ext.Viewport.add({ 
            xtype: 'container',
            id: 'menuL',
            modal: true,
            height    : '220px',
            width     : '100%',
            floating  : true,                               
            top       : '0px',
            bottom : 'auto',
            cls: 'menuL',
            hideOnMaskTap: true,
            showAnimation: 
            {
                type: 'slideIn',
                duration: 1000,
                direction: 'up',
                easing: 'easeOut'
            },  
            hideAnimation: 
            {
                type: 'slideOut',
                duration: 700,
                direction: 'down',
                easing: 'easeIn'
            }, 
            items: [
                {
                    html  : '<li class="menu-portugues" id="menu-portugues"></span><span style="padding-left: 20px; font-size: 14px;">PORTUGUÊS</span><span class="icon-front" style="vertical-align: middle; float: right;padding:3px 20px 0px 0px;"></li>',
                },
                {
                    html  : '<li class="menu-english" id="menu-english"><span style="padding-left: 20px; font-size: 14px;">ENGLISH</span><span class="icon-front" style="vertical-align: middle;float: right;padding:3px 20px 0px 0px;"></span></li>',
                },
                {
                    html  : '<li class="menu-francais" id="menu-francais"></span><span style="padding-left: 20px; font-size: 14px;">FRANÇAIS</span><span class="icon-front" style="vertical-align: middle;float: right; padding:3px 20px 0px 0px;"></li>'
                },
                {
                    html  : '<li class="menu-castellano" id="menu-castellano"></span><span style="padding-left: 20px; font-size: 14px;">CASTELLANO</span><span class="icon-front" style="vertical-align: middle;float: right;padding:3px 20px 0px 0px;"></li>'
                }
            ],
            listeners: [
                {
                    element: 'element',
                    delegate: '#menu-portugues',
                    event: 'tap',
                    fn: function() {
                        var valor = { id_setting: '1', lang: '1'};
                        Ext.getStore('Settings').getAt(0).set(valor);
                        Ext.getStore('Settings').sync();
                        idioma = Ext.getStore('Settings').getAt(0).get('lang');
                        Ext.getCmp('start-catalogos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_catalogs'));
                        Ext.getCmp('start-favoritos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_favorites'));
                        Ext.getCmp('start-language').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_language'));
                        Ext.getCmp('start-help').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_help'));
                        Ext.getCmp('italboxHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('company_html'));
                        Ext.getCmp('helpHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('help_html'));
                        Ext.getCmp('barraTab').getAt(0).setTitle(Ext.getStore('Languages').getById(idioma).get('pages'));
                        Ext.getCmp('barraTab').getAt(1).setTitle(Ext.getStore('Languages').getById(idioma).get('products'));
                        Ext.getCmp('data_paginas').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                        Ext.getCmp('data_produtos').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                        Ext.getCmp('search').setEmptyText(Ext.getStore('Languages').getById(idioma).get('products_empty'));
                        Ext.getCmp('searchBox').setPlaceHolder(Ext.getStore('Languages').getById(idioma).get('search'));
                        Ext.MessageBox.override({
                                confirm: function(title, message, fn, scope) {
                                return this.show({
                                    title       : title || null,
                                    message     : message || null,
                                    buttons     : [
                                    {text: Ext.getStore('Languages').getById(idioma).get('no'),  itemId: 'no'},
                                    {text: Ext.getStore('Languages').getById(idioma).get('yes'), itemId: 'yes', ui: 'action'}
                                ],
                                    promptConfig: false,
                                    scope       : scope,
                                    fn: function() {
                                        if (fn) {
                                            fn.apply(scope, arguments);
                                        }
                                    }
                                });
                            }
                        });
                        panel_language.hide();
                    }
                },
                {
                    element: 'element',
                    delegate: '#menu-english',
                    event: 'tap',
                    fn: function() {
                        var valor = { id_setting: '1', lang: '2'};
                        Ext.getStore('Settings').getAt(0).set(valor);
                        Ext.getStore('Settings').sync();
                        idioma = Ext.getStore('Settings').getAt(0).get('lang');
                        Ext.getCmp('start-catalogos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_catalogs'));
                        Ext.getCmp('start-favoritos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_favorites'));
                        Ext.getCmp('start-language').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_language'));
                        Ext.getCmp('start-help').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_help'));
                        Ext.getCmp('italboxHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('company_html'));
                        Ext.getCmp('helpHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('help_html'));
                        Ext.getCmp('barraTab').getAt(0).setTitle(Ext.getStore('Languages').getById(idioma).get('pages'));
                        Ext.getCmp('barraTab').getAt(1).setTitle(Ext.getStore('Languages').getById(idioma).get('products'));
                        Ext.getCmp('data_paginas').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                        Ext.getCmp('data_produtos').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                        Ext.getCmp('search').setEmptyText(Ext.getStore('Languages').getById(idioma).get('products_empty'));
                        Ext.getCmp('searchBox').setPlaceHolder(Ext.getStore('Languages').getById(idioma).get('search'));
                        Ext.MessageBox.override({
                                confirm: function(title, message, fn, scope) {
                                return this.show({
                                    title       : title || null,
                                    message     : message || null,
                                    buttons     : [
                                    {text: Ext.getStore('Languages').getById(idioma).get('no'),  itemId: 'no'},
                                    {text: Ext.getStore('Languages').getById(idioma).get('yes'), itemId: 'yes', ui: 'action'}
                                ],
                                    promptConfig: false,
                                    scope       : scope,
                                    fn: function() {
                                        if (fn) {
                                            fn.apply(scope, arguments);
                                        }
                                    }
                                });
                            }
                        });
                        panel_language.hide();
                    }
                },
                {
                    element: 'element',
                    delegate: '#menu-francais',
                    event: 'tap',
                    fn: function() {
                       var valor = { id_setting: '1', lang: '3'};
                        Ext.getStore('Settings').getAt(0).set(valor);
                        Ext.getStore('Settings').sync();
                        idioma = Ext.getStore('Settings').getAt(0).get('lang');
                        Ext.getCmp('start-catalogos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_catalogs'));
                        Ext.getCmp('start-favoritos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_favorites'));
                        Ext.getCmp('start-language').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_language'));
                        Ext.getCmp('start-help').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_help'));
                        Ext.getCmp('italboxHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('company_html'));
                        Ext.getCmp('helpHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('help_html'));
                        Ext.getCmp('barraTab').getAt(0).setTitle(Ext.getStore('Languages').getById(idioma).get('pages'));
                        Ext.getCmp('barraTab').getAt(1).setTitle(Ext.getStore('Languages').getById(idioma).get('products'));
                        Ext.getCmp('data_paginas').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                        Ext.getCmp('data_produtos').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                        Ext.getCmp('search').setEmptyText(Ext.getStore('Languages').getById(idioma).get('products_empty'));
                        Ext.getCmp('searchBox').setPlaceHolder(Ext.getStore('Languages').getById(idioma).get('search'));
                        Ext.MessageBox.override({
                                confirm: function(title, message, fn, scope) {
                                return this.show({
                                    title       : title || null,
                                    message     : message || null,
                                    buttons     : [
                                    {text: Ext.getStore('Languages').getById(idioma).get('no'),  itemId: 'no'},
                                    {text: Ext.getStore('Languages').getById(idioma).get('yes'), itemId: 'yes', ui: 'action'}
                                ],
                                    promptConfig: false,
                                    scope       : scope,
                                    fn: function() {
                                        if (fn) {
                                            fn.apply(scope, arguments);
                                        }
                                    }
                                });
                            }
                        });
                        panel_language.hide();
                    }
                },
                {
                    element: 'element',
                    delegate: '#menu-castellano',
                    event: 'tap',
                    fn: function() {
                     var valor = { id_setting: '1', lang: '4'};
                        Ext.getStore('Settings').getAt(0).set(valor);
                        Ext.getStore('Settings').sync();
                        idioma = Ext.getStore('Settings').getAt(0).get('lang');
                        Ext.getCmp('start-catalogos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_catalogs'));
                        Ext.getCmp('start-favoritos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_favorites'));
                        Ext.getCmp('start-language').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_language'));
                        Ext.getCmp('start-help').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_help'));
                        Ext.getCmp('italboxHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('company_html'));
                        Ext.getCmp('helpHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('help_html'));
                        Ext.getCmp('barraTab').getAt(0).setTitle(Ext.getStore('Languages').getById(idioma).get('pages'));
                        Ext.getCmp('barraTab').getAt(1).setTitle(Ext.getStore('Languages').getById(idioma).get('products'));
                        Ext.getCmp('data_paginas').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                        Ext.getCmp('data_produtos').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                        Ext.getCmp('search').setEmptyText(Ext.getStore('Languages').getById(idioma).get('products_empty'));
                        Ext.getCmp('searchBox').setPlaceHolder(Ext.getStore('Languages').getById(idioma).get('search'));
                        Ext.MessageBox.override({
                                confirm: function(title, message, fn, scope) {
                                return this.show({
                                    title       : title || null,
                                    message     : message || null,
                                    buttons     : [
                                    {text: Ext.getStore('Languages').getById(idioma).get('no'),  itemId: 'no'},
                                    {text: Ext.getStore('Languages').getById(idioma).get('yes'), itemId: 'yes', ui: 'action'}
                                ],
                                    promptConfig: false,
                                    scope       : scope,
                                    fn: function() {
                                        if (fn) {
                                            fn.apply(scope, arguments);
                                        }
                                    }
                                });
                            }
                        });
                        panel_language.hide();
                    }
                }
            ]
        });
        panel_language.show();
        panel_language.on('hide', function() {
            panel_language.destroy();
        });
        }
    },
    {
        element: 'element',
        delegate: '#start-help',
        event: 'tap',
        fn: function() {
         Ext.getCmp('menuI').hide();
         Ext.getCmp('back').show();
         Ext.getCmp('help').show();
        }
    },
    {
        element: 'element',
        delegate: '#start-help2',
        event: 'tap',
        fn: function() {
         Ext.getCmp('menuI').hide();
         Ext.getCmp('back').show();
         Ext.getCmp('help').show();
        }
    },*/
    ]
    },
    initialize: function() {
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
         /*if (Ext.Viewport.getOrientation() === 'portrait') {
           if (Ext.Viewport.getWindowWidth() > 767 ) {
                 Ext.getCmp('start-caixilharia').setMargin(Ext.Viewport.getWindowWidth()/10);
                 Ext.getCmp('start-vidro').setMargin(Ext.Viewport.getWindowWidth()/10);
                 Ext.getCmp('start-extrusao').setMargin(Ext.Viewport.getWindowWidth()/10);
                 Ext.getCmp('start-tratamento').setMargin(Ext.Viewport.getWindowWidth()/10);
           }else{
                Ext.getCmp('start-caixilharia').setMargin(20);
                 Ext.getCmp('start-vidro').setMargin(20);
                 Ext.getCmp('start-extrusao').setMargin(20);
                 Ext.getCmp('start-tratamento').setMargin(20);
           }
          
         }
         else {
            Ext.getCmp('start-caixilharia').setMargin(Ext.Viewport.getWindowHeight()/10);
            Ext.getCmp('start-vidro').setMargin(Ext.Viewport.getWindowHeight()/10);
            Ext.getCmp('start-extrusao').setMargin(Ext.Viewport.getWindowHeight()/10);
            Ext.getCmp('start-tratamento').setMargin(Ext.Viewport.getWindowHeight()/10);
            
         }*/
       
    },
    handleOrientationChange: function(viewport, orientation, width, height){
         
        /* if (Ext.Viewport.getOrientation() === 'portrait') {
           if (Ext.Viewport.getWindowWidth() > 767 ) {
                 Ext.getCmp('start-caixilharia').setMargin(Ext.Viewport.getWindowWidth()/10);
                 Ext.getCmp('start-vidro').setMargin(Ext.Viewport.getWindowWidth()/10);
                 Ext.getCmp('start-extrusao').setMargin(Ext.Viewport.getWindowWidth()/10);
                 Ext.getCmp('start-tratamento').setMargin(Ext.Viewport.getWindowWidth()/10);
           }else{
                Ext.getCmp('start-caixilharia').setMargin(20);
                 Ext.getCmp('start-vidro').setMargin(20);
                 Ext.getCmp('start-extrusao').setMargin(20);
                 Ext.getCmp('start-tratamento').setMargin(20);
           }
         }
         else {
              Ext.getCmp('start-caixilharia').setMargin(Ext.Viewport.getWindowHeight()/10);
            Ext.getCmp('start-vidro').setMargin(Ext.Viewport.getWindowHeight()/10);
            Ext.getCmp('start-extrusao').setMargin(Ext.Viewport.getWindowHeight()/10);
            Ext.getCmp('start-tratamento').setMargin(Ext.Viewport.getWindowHeight()/10);
           // Ext.getCmp('carousel_obras').setHeight(Ext.Viewport.getWindowHeight()-50);
         }*/
    }
});

Ext.define('Italbox.Viewport6', {
    extend: 'Ext.dataview.List',
    xtype : 'my-viewport6',
    cls: 'pesquisa',
    id:'search',
    config: {       
        showAnimation: 
        {
            type: 'slideIn',
            duration: 1000,
            delay: 700,
            direction: 'up',
            easing: 'easeOut'
        },  
       hideAnimation: 
        {
            type: 'slideOut',
            duration: 700,
            direction: 'down',
            easing: 'easeIn'
        }, 
        store: 'Products',//Ext.getStore('Products').data.all,
            /*{id: 'produtos',
               /* fields: ['id_produto', 'nome', 'descricao_1','descricao_2','descricao_3','descricao_4', 'foto', 'ref', 'estado', 'lastModified'],
                data:tprodutos*/
        /*},*/
        itemTpl:  '<div class="lista-pesquisa">'+
            '<img src="'+thumb_products+'{foto_1}" style="float:left; height:30px; margin-right:10px;"><i class="icon-front front"></i></img>' +
            '<div> <span>{nome_pt}</span></div>' +
            '</div>',
         
        emptyText: '<div class="lista-pesquisa">Sem resultados</div>',
              
        items: [
               {
               xtype: 'toolbar',
               docked: 'top',
               cls: 'barraPesquisa',
               html: '<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_caixilharia" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Produtos</span>',
              /* items: [
               {
                //html: '<span style="background: transparent"><i class="icon-caixilharia2"></i>Produtos</span>'
                   /* xtype: 'searchfield',
                    placeHolder: 'Produtos',
                    itemId: 'searchBox',
                    id: 'searchBox',
                    cls: 'search',
                    listeners: {
                        keyup: function(searchBox) {
                            queryString = searchBox.getValue();
                            Ext.getStore('produtos').clearFilter();
                            if(queryString){
                                var thisRegEx = new RegExp(queryString, "i");
                                Ext.getStore('produtos').filterBy(function(record) {
                                if (thisRegEx.test(record.get('nome')) ||
                                    thisRegEx.test(record.get('ref'))) {
                                    return true;
                                };
                                return false;
                             });
                            }
                        },
                        clearicontap: function() {
                             Ext.getStore('produtos').clearFilter();
                        },
                    }*/
              /* },*/
              //  ],
            }
        ],
        listeners: {
            itemtap: function(list, index, target, record) {
                Ext.Msg.confirm(
                            "",
                            Ext.getStore('Languages').getById(idioma).get('open_product')+' '+record.get('nome')+"?",
                            function(buttonId) {
                           
                            if (buttonId === 'yes') {
                                if( typeof panel_produto !== 'undefined' ) {
                                 panel_produto.destroy();
                            }
                            panel_produto = Ext.Viewport.add({ 
                                xtype: 'container',
                                id: 'pop-produto',
                                cls: 'pop-produto',
                                float: true,
                                showAnimation: 
                                {
                                    type: 'pop',
                                    duration: 300,
                                },  
                                layout : {
                                    type : 'vbox',
                                },
                                items: [
                                    {
                                        xtype: 'toolbar',
                                        cls: 'header3',
                                        layout: {
                                                type: 'hbox',
                                                pack: 'right'
                                        },
                                       
                                        items: [
                                            {
                                            align: 'right', 
                                            ui:    'plain',
                                            xtype: 'button',
                                            cls: 'close icon-close',
                                            handler: function () {
                                                 panel_produto.hide();
                                                }
                                            },
                                        ]    
                                    },
                                    {
                                        html  : '<div class="pop-up">'+
                                        '<img src="'+caminho+record.get('foto')+'">'+
                                        '<br/><div class="btn-extras" id="btn-extras">EXTRAS</div>'+record.get('nome')+'<br/>'+
                                        'Ref '+record.get('ref')+'<br/>'+record.get('descricao_'+idioma)+'</div>'
                                    },
                                ],
                                listeners: [
                                    {
                                        element: 'element',
                                        delegate: '#btn-extras',
                                        event: 'tap',
                                        fn: function() {
                                         panel_extras = Ext.Viewport.add({
                                            xtype : 'tabpanel',
                                            id:'extras',
                                            cls: 'lista-extras',
                                            float: true,
                                            tabBar:    {
                                                cls: 'barraTab2',
                                                hidden: true,
                                            },
                                            items: [
                                            {
                                                xtype: 'toolbar',
                                                docked: 'top',
                                                cls: 'barraPaginas',
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        ui: 'plain',
                                                        cls: 'back icon-back',
                                                        handler: function () {
                                                            panel_extras.hide();
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                title: '',
                                                layout : 'fit',
                                                cls: 'tabPaginas',
                                                items: [
                                                {
                                                    xtype: 'dataview',
                                                    cls: 'favoritos',
                                                    flex: 1,
                                                    scrollable: {
                                                        direction: 'vertical',
                                                    },
                                                    inline: {
                                                        wrap: true
                                                    },
                                                     store: 
                                                     {
                                                        fields: ['descricao_1','descricao_2','descricao_3','descricao_4','estado','extra_id','foto','id','id_extra','lastModified','nome','priority','produto_id','ref'],
                                                        data: $.grep(textras_produtos, function(e) { return e.produto_id ==  record.get('id_produto')})
                                                     },
                                                    
                                                    itemTpl: '<img src="'+caminho2+'{foto}" style="width:130px; margin:10px 10px 0 10px;"></img><div style="text-align: center; font-size:10px;">{nome}</div>',
                                                    
                                                    listeners: {
                                                        itemtap: function(list, index, target, record,e) {
                                                            panel_extra = Ext.Viewport.add({ 
                                                                xtype: 'container',
                                                                id: 'extra',
                                                                cls: 'pop-produto',
                                                                float: true,
                                                                showAnimation: 
                                                                {
                                                                    type: 'pop',
                                                                    duration: 300,
                                                                },  
                                                                layout : {
                                                                    type : 'vbox',
                                                                },
                                                                items: [
                                                                    {
                                                                        xtype: 'toolbar',
                                                                        cls: 'header3',
                                                                        layout: {
                                                                                type: 'hbox',
                                                                                pack: 'right'
                                                                        },
                                                                       
                                                                        items: [
                                                                            {
                                                                            align: 'right', 
                                                                            ui:    'plain',
                                                                            xtype: 'button',
                                                                            cls: 'close icon-close',
                                                                            handler: function () {
                                                                                 panel_extra.hide();
                                                                                }
                                                                            },
                                                                        ]    
                                                                    },
                                                                    {
                                                                        html  : '<div class="pop-up">'+
                                                                        '<img src="'+caminho+record.get('foto')+'">'+
                                                                        '<br\>'+record.get('nome')+'<br/>'+
                                                                        'Ref '+record.get('ref')+'<br/>'+record.get('descricao_'+idioma)+'</div>'
                                                                    },
                                                                ],
                                                               
                                                            });
                                                        panel_extra.show();
                                                        panel_extra.on('hide', function() {
                                                           panel_extra.destroy();
                                                        });
                                                            
                                                        }
                                                    }
                                                }
                                                ], 
                                            }, 
                                            ],       
                                            });
                                            panel_extras.show();
                                            panel_extras.on('hide', function() {
                                               panel_extras.destroy();
                                            });
                                        }
                                    },
                                    ],
                               
                            });
                            panel_produto.show();
                            panel_produto.on('hide', function() {
                                panel_produto.destroy();
                            });   
                        }});
            }
        }
    }
});

Ext.define('Italbox.Viewport5', {
    extend: 'Ext.tab.Panel',
    xtype : 'my-viewport5',
    id:'favorites',
    cls: 'favorites',
    config: {
        showAnimation: 
            {
                type: 'slideIn',
                duration: 1000,
                delay: 1000,
                direction: 'up',
                easing: 'easeOut'
            },  
            hideAnimation: 
            {
                type: 'slideOut',
                duration: 700,
                direction: 'down',
                easing: 'easeIn'
            },
            tabBarPosition: 'bottom',
            tabBar:    {
                cls: 'barraTab',
                id: 'barraTab',
            },
           items: [
                {
                    //title: 'PÁGINAS',
                    iconCls: 'icon-caixilharia',
                    layout : 'fit',
                    cls: 'tabCaixilharia',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                    {
                        flex:1, 
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        items: [
                        {
                            id: 'start-italbox',
                            flex: 1,
                            style: 'margin:20px 10px 10px 20px;'+
                            'border-radius:5px; border-bottom: 7px solid #05698e;'+
                            'background: url(imgs/icons/sosoares.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },
                        {
                            id: 'produtos_caixilharia',
                            flex: 1,
                            style: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
                            'background: url(imgs/icons/caixilharia.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },   
                        ]
                    },
                    {
                        flex:1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        items: [{
                            id: 'obras_caixilharia',
                            flex: 1,
                            style: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
                            'background: url(imgs/icons/obras.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        
                        }, {
                            id: 'servicos_caixilharia',
                            flex: 1,
                            style: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
                            'background: url(imgs/icons/servicos_vidro.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },
                        ]
                    },
                   /* {
                        flex:1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                      items: [
                        {
                            id: 'start-help',
                            flex: 1,
                            style: 'margin:5px 10px 10px 10px; background: url(imgs/icons/ajuda_menu.png) no-repeat, rgba(255, 255, 255, .4);'+
                            'background-size: contain; background-position: center;',
                        },
                        ],    
                    },*/
                    ],
                    
                     listeners: [
                        {
                            element: 'element',
                            delegate: '#produtos_caixilharia',
                            event: 'tap',
                            fn: function() {
                                //if (connect === 1) {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                    Ext.getStore('Products_Caixilharia').load();
                                    Ext.getCmp('products').setStore('Products_Caixilharia');
                                    Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_caixilharia" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Produtos</span>');
                                    Ext.getCmp('products').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
                         {
                            element: 'element',
                            delegate: '#obras_caixilharia',
                            event: 'tap',
                            fn: function() {
                                //if (connect === 1) {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                    Ext.getStore('Works').load();
                                    Ext.getCmp('works').setStore('Works');
                                   /* Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_caixilharia" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Produtos</span>');*/
                                    Ext.getCmp('works').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
                         {
                            element: 'element',
                            delegate: '#servicos_caixilharia',
                            event: 'tap',
                            fn: function() {
                                //if (connect === 1) {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                   /* Ext.getStore('Services_Caixilharia').load();*/
                                    Ext.getCmp('multi').setStore('Services_Caixilharia');
                                   /* Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_caixilharia" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Produtos</span>');*/
                                    Ext.getCmp('multi').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
                    ],
                },
                {
                    //title: 'PRODUTOS',
                    layout : 'fit',
                    cls: 'tabVidro',
                    iconCls: 'icon-vidro',
                    //iconMask : false,   
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                    {
                        flex:1, 
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        items: [
                        {
                            id: 'start-italbox',
                            flex: 1,
                            style: 'margin:20px 10px 10px 20px;'+
                            'border-radius:5px; border-bottom: 7px solid #05698e;'+
                            'background: url(imgs/icons/sosoares.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },
                        {
                            id: 'produtos_vidro',
                            flex: 1,
                            style: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
                            'background: url(imgs/icons/vidro.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },   
                        ]
                    },
                    {
                        flex:1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        items: [{
                            id: 'start-favoritos',
                            flex: 1,
                            style: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
                            'background: url(imgs/icons/servicos_vidro.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        
                        }, {
                            id: 'start-language',
                            flex: 1,
                            style: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
                            'background: url(imgs/icons/tecnica.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },
                        ]
                    },
                   /* {
                        flex:1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                      items: [
                        {
                            id: 'start-help',
                            flex: 1,
                            style: 'margin:5px 10px 10px 10px; background: url(imgs/icons/ajuda_menu.png) no-repeat, rgba(255, 255, 255, .4);'+
                            'background-size: contain; background-position: center;',
                        },
                        ],    
                    },*/
                    ],
                     listeners: [
                        {
                            element: 'element',
                            delegate: '#produtos_vidro',
                            event: 'tap',
                            fn: function() {
                                //if (connect === 1) {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                    Ext.getStore('Products_Vidro').load();
                                     Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_vidro" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Produtos</span>');
                                    Ext.getCmp('products').setStore('Products_Vidro');
                                    Ext.getCmp('products').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
                    ],
                },
                {
                    //title: 'Teste',
                    layout : 'fit',
                    cls: 'tabExtrusao',
                    iconCls: 'icon-extrusao',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                    {
                        flex:1, 
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        items: [
                        {
                            id: 'start-italbox',
                            flex: 1,
                            style: 'margin:20px 10px 10px 20px;'+
                            'border-radius:5px; border-bottom: 7px solid #05698e;'+
                            'background: url(imgs/icons/sosoares.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },
                        {
                            id: 'produtos_extrusao',
                            flex: 1,
                            style: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
                            'background: url(imgs/icons/extrusao.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },   
                        ]
                    },
                    {
                        flex:1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        items: [{
                            id: 'start-favoritos',
                            flex: 1,
                            style: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
                            'background: url(imgs/icons/servicos_extrusao.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        
                        }, {
                            id: 'start-language',
                            flex: 1,
                            style: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
                            'background: url(imgs/icons/apoio.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },
                        ]
                    },
                    ],
                     listeners: [
                        {
                            element: 'element',
                            delegate: '#produtos_extrusao',
                            event: 'tap',
                            fn: function() {
                                //if (connect === 1) {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                    Ext.getStore('Products_Extrusao').load();
                                     Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Produtos</span>');
                                    Ext.getCmp('products').setStore('Products_Extrusao');
                                    Ext.getCmp('products').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
                    ],
                },
                {
                    //title: 'Teste',
                    layout : 'fit',
                    cls: 'tabTratamento',
                    iconCls: 'icon-tratamento',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                    {
                        flex:1, 
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        items: [
                        {
                            id: 'start-italbox',
                            flex: 1,
                            style: 'margin:20px 10px 10px 20px;'+
                            'border-radius:5px; border-bottom: 7px solid #05698e;'+
                            'background: url(imgs/icons/sosoares.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },
                        {
                            id: 'start-catalogos',
                            flex: 1,
                            style: 'margin:20px 20px 10px 10px;border-bottom: 7px solid #05698e;border-radius:5px;'+
                            'background: url(imgs/icons/lacagem.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },   
                        ]
                    },
                    {
                        flex:1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        items: [{
                            id: 'start-favoritos',
                            flex: 1,
                            style: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
                            'background: url(imgs/icons/anodizacao.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        
                        }, {
                            id: 'start-language',
                            flex: 1,
                            style: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
                            'background: url(imgs/icons/imitacao.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },
                        ]
                    },
                   /* {
                        flex:1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                      items: [
                        {
                            id: 'start-help',
                            flex: 1,
                            style: 'margin:5px 10px 10px 10px; background: url(imgs/icons/ajuda_menu.png) no-repeat, rgba(255, 255, 255, .4);'+
                            'background-size: contain; background-position: center;',
                        },
                        ],    
                    },*/
                    ],
                },
                
            ],   
    }
});
/*
Ext.define('Italbox.Viewport4', {
    extend: 'Ext.Panel',
    xtype : 'my-viewport4',
    id:'help',
    config: {
        showAnimation: 
            {
                type: 'slideIn',
                duration: 1000,
                delay: 700,
                direction: 'up',
                easing: 'easeOut'
            },  
            hideAnimation: 
            {
                type: 'slideOut',
                duration: 700,
                direction: 'down',
                easing: 'easeIn'
            }, 
            layout: {
                type: 'vbox',
            },
               scrollable: {
                direction: 'vertical'
            },
            items: [
            {
                id:   'helpHtml',
                html: '<div style="margin:20px; margin-top:0px !important;">'+
                      '<font color="#b69757">AJUDA</font><br/><br/><p><i>Aceda  em qualquer lugar aos nossos catálogos de forma rápida e intuitiva. </i><br />'+
                      '<i>Com a  APP ITALBOX consulte todos os nossos produtos e seus detalhes. </i><br />'+
                      '<i>Escolha  e partilhe os seus favoritos.</i></p><br/><p>Precisa  de ajuda? Siga as nossas dicas aqui.</p>'+
                      '<p>Ao  abrir a aplicação o utilizador tem acesso aos menus que permitem explorar:<br /><br />'+
                      '<i class="icon-italbox"></i> – menuItalbox – o perfil da empresa<br /><i class="icon-catalogos"></i> – menu catálogos – acesso aos catálogos. <br />'+
                      '<i class="icon-star"></i> – menu favoritos – arquivo das suas páginas e/ou produtos favoritos.<br />'+
                      '<i class="icon-mundo-catalogos"></i> – menu language– alterar idioma </p><br /><p><font color="#b69757"><strong>Dicas de navegação</strong></font><br /><br />'+
                      'O  acesso à informação é disponibilizado através dos menus na página principal, no  entanto,'+
                      'a qualquer momento pode trocar de menu acedendo à barra superior.Esta  barra é composta por:<br /><br />'+
                      '<i class="icon-back"></i> – retroceder<br /><i class="icon-pesquisa"></i> – pesquisar<br /><i class="icon-menu"></i> – Menus<br /><br />'+
                      'Se  esta estiver ocultada toque na seta <i class="icon-baixo"></i> para a fazer reaparecer.'+
                      'O  conteúdo de cada menu é disponibilizado imediatamente abaixo desta.<br />'+
                      'Se  já sabe o nome do produto que quer consultar, pesquise através <i class="icon-pesquisa"></i>.<br /><br />'+
                      '<font color="#b69757"><strong>Consultar Catálogos</strong></font><br /><br />No  menu catálogos toque na capa do catálogo que pretende consultar.'+
                      '<a name="_GoBack" id="_GoBack"></a><br />Confirme  a acesso ao catálogo.'+
                      'De seguida navegue entre as páginas fazendo deslizar o  seu dedo para a esquerda ou para a direita.'+
                      'Para uma melhor visualização, pode  ainda aumentar e mover a imagem da página em consulta.<br />'+
                      'Na  barra inferior estão contabilizados os produtos existentes na página que está a  visualizar.'+
                      'Ao tocar na seta poderá aceder aos detalhes do produto. <br />No  lado direito do ecrã encontrará,'+
                      'ainda, as seguintes funções:<br /><br /><i class="icon-lista"></i> – Consultar páginas específicas do catálogo<br />'+
                      '<i class="icon-star-catalogos"></i> – Definir páginas e/ou produtos como favorito<br />'+
                      '<i class="icon-partilha"></i> – Partilhar páginas e/ou produtos com amigos</p><br /><p><font color="#b69757"><strong>Consultar produto</strong></font>'+
                      '<br /><br />Toque  na imagem do produto da barra inferior para ter acesso ao detalhe do mesmo.'+
                      'Para visualizar os extras do produto toque no botão EXTRAS<br />'+
                      'Retroceda  na seta <i class="icon-back"></i> para voltar ao detalhe. Para sair toque no <i class="icon-close"></i> para fechar e  continuar a consultar o catalogo.<br /><br />'+
                      '<font color="#b69757"><strong>Favoritos </strong></font><br /><br />Para  adicionar uma página e/ou produto como favorito utilize o <i class="icon-star-catalogos"></i> '+
                      'apresentado à  sua direita. É notificado o êxito desta operação.<br />'+
                      'Para  visualizar os favoritos aceda ao menu favoritos na página inicial ou na barra  superior.<br />'+
                      'Os  favoritos encontram-se divididos por páginas e produtos, para consultar toque  no separador correspondente.<br />'+
                      'Pode  ainda editar os seus favoritos, apagando páginas e/ou produtos tocando no  <i class="icon-close3"></i>.</p></div>',
            },            
            ],
    }
});

Ext.define('Italbox.Viewport3', {
    extend: 'Ext.Panel',
    xtype : 'my-viewport3',
    id:'italbox',
    config: {
        showAnimation: 
        {
            type: 'slideIn',
            duration: 1000,
            delay: 700,
            direction: 'up',
            easing: 'easeOut'
        },  
        hideAnimation: 
        {
            type: 'slideOut',
            duration: 700,
            direction: 'down',
            easing: 'easeIn'
        }, 
        layout: {
            type: 'vbox',
        },
        scrollable: {
            direction: 'vertical'
        },
       items : [
        {
            id: 'italboxHtml',
            html  : '<div class="italbox"><img src="imgs/company.jpg"></img><br/>'+
            '<font color="#b69757">EMPRESA</font><br/><br/><p>A ITALBOX, LDA, empresa portuguesa fundada em 1999,'+
            'é uma empresa especializada no fabrico de cabines de banho com design próprio e exclusivo,'+
            'e uma excelente dicotomia qualidade/preço. Com uma equipa de 62 colaboradores,'+
            'a Italbox é líder no mercado Português e tem apresentado taxas de crescimentono volume'+
            'de negócios de 20% por ano, nos últimos 5 anos.<br/><br/>Em 2011 lançou o novo catalogo com uma nova'+
            'linha de produtos que completa, no nosso entender, soluções que não estavam contempladas no nosso'+
            'anterior catálogo.<br/>Lançamos também um catálogo de móveis de casa de banho, de fabrico próprio,'+
            'no sentido de complementar a oferta.<br/><br/>Para que possam verificar os modelos que produzimos,'+
            'queiram consultar o nosso Web site: <font color="#b69757">www.italbox.pt</font>.<br/>'+
            'Informamos que estamos ao vosso dispor para qualquer informação e esclarecimento adicional'+
            'através do e-mail: <font color="#b69757">comercial@italbox.pt</font>.</p></div>',
        },                  
        ],
    }
});

Ext.define('Italbox.Viewport2', {
    extend: 'Ext.Carousel',
    xtype : 'my-viewport2',
    id:'myCarroucel',
    config: {
        indicator: false,
        showAnimation: 
        {
            type: 'slideIn',
            duration: 1000,
            delay: 500,
            direction: 'up',
            easing: 'easeOut'
        },  
        hideAnimation: 
        {
            type: 'slideOut',
            duration: 700,
            direction: 'down',
            easing: 'easeIn'
        },
        listeners: {
            activeitemchange: function(container, value, oldValue, eOpts) {
                try{
                    if (oldValue) {
                    oldValue.resetZoom();
                    this.getActiveItem().resize();
                    }
                }
                catch(err){}
                idpagina = value.initialConfig.id_pagina;
                idcatalogo = value.initialConfig.id_catalogo;
                numero = value.initialConfig.numero;
                thumb = value.initialConfig.thumb;
                share = value.initialConfig.share;
                contador = 0;
                contador = ($.grep(tprodutos_paginas, function(e) { return e.pagina_id == idpagina })).length;
                Ext.getCmp('open-menu4').setText('<span style="text-align:center; padding-left: 25px; line-height: 2;">'+Ext.getStore('Languages').getById(idioma).get('product')+' '+contador+'</span><span style="text-align:right; float:right;"><i class="icon-cima"></i></span>');
            },
            resize: function(component, eOpts) {
                try{
                this.getActiveItem().resize();
                }
                catch(err){}
            },
        }
    },
    onDragStart: function(e) {
        var scroller = this.getActiveItem().getScrollable().getScroller();
        if (e.targetTouches.length === 1 && (e.deltaX < 0 && scroller.getMaxPosition().x === scroller.position.x) || (e.deltaX > 0 && scroller.position.x === 0)) {
            this.callParent(arguments);
        }
    },
    onDrag: function(e) {
        if (e.targetTouches.length == 1){
            this.callParent(arguments);
        try {
            Ext.getCmp('myList2').hide();
        }
        catch(err) {}
        Ext.getCmp('footer').show();
        Ext.getCmp('barra').hide();
        Ext.getCmp('barra2').show();
        }
    },
    onDragEnd: function(e) {
        if (e.targetTouches.length < 2)
            this.callParent(arguments);
    },
    initialize: function() {
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
        this.callParent(arguments);
        
        this.element.on('tap',function() {
            Ext.getCmp('barra').show();
            Ext.getCmp('barra2').hide();
        });
    },
    handleOrientationChange: function(viewport, orientation, width, height){
         ind = Ext.getCmp('myCarroucel').getActiveIndex();
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('myCarroucel').setItems($.grep(tpaginas2, function(e) { return e.id_catalogo == idcatalogo }));
            var round1 = Math.round(ind*2);
            Ext.getCmp('myCarroucel').setActiveItem(round1-1);
         }
         else {
            Ext.getCmp('myCarroucel').setItems($.grep(tpaginas, function(e) { return e.id_catalogo == idcatalogo }));
            var round2 = Math.round(ind/2);
            Ext.getCmp('myCarroucel').setActiveItem(round2);
         }
    }
});

Ext.define('Italbox.Viewport', {
    extend: 'Ext.Panel',
    xtype : 'my-viewport',
    id:'myList',
    config: {
        showAnimation: 
            {
                type: 'slideIn',
                duration: 1000,
                delay: 700,
                direction: 'up',
                easing: 'easeOut'
            },  
            hideAnimation: 
            {
                type: 'slideOut',
                duration: 700,
                direction: 'down',
                easing: 'easeIn'
            }, 
            layout: {
                type: 'vbox',
                pack: 'center',
            },
            items: [
                {
                    xtype: 'dataview',
                    cls: 'lista',
                    scrollable: {
                        direction: 'horizontal',
                        indicators: false
                    },
                    inline: {
                        wrap: false
                    },
                     store: {
                        fields: ['id_catalogo','nome','capa','cor','estado','lastModified'],
                        data: tcatalogos
                    },
                    
                    itemTpl: '<img src="'+caminho+'{capa}" class="capa"><div class="texto-capa">{nome}</div>',
                    listeners: {
                        itemtap: function(list, index, target, record) {
                            Ext.Msg.confirm(
                            "",
                            Ext.getStore('Languages').getById(idioma).get('open')+' '+record.get('nome')+"?",
                            function(buttonId) {
                                if (buttonId === 'yes') {
                                     nomec = record.get('nome');
                                     Ext.getCmp('myList').hide();
                                     Ext.getCmp('myCarroucel').removeAll(true,true);
                                     idcatalogo = record.get('id_catalogo');
                                 if (Ext.Viewport.getOrientation() === 'portrait') {
                                     Ext.getCmp('myCarroucel').setItems($.grep(tpaginas2, function(e) { return e.id_catalogo == idcatalogo }));
                                 }
                                 else{
                                     Ext.getCmp('myCarroucel').setItems($.grep(tpaginas, function(e) { return e.id_catalogo == idcatalogo }));
                                 }
                                     Ext.getCmp('myCarroucel').setActiveItem(0);
                                     Ext.getCmp('myCarroucel').show();
                                     Ext.getCmp('barra').hide();
                                     Ext.getCmp('barra2').show();
                                     Ext.getCmp('barra5').show();
                                     Ext.getCmp('footer').show();
                                     Ext.getCmp('open-menu4').show();
                                     Ext.getCmp('back').show();
                                    }
                                }
                            );
                        }
                    }
                }
            ],
    }
});
*/

Ext.define('Italbox.ViewportPanel', {
    extend: 'Ext.Panel',
    xtype : 'my-viewport-panel',
    config: {
        fullscreen: true,
        layout: 'fit',
        items: [{
            xtype: 'toolbar',
            title: '<div class="logotipo"></div>',
            id: 'barra',
            cls: 'header',
            docked: 'top',
            showAnimation:  
            {
                type: 'slideIn',
                duration: 1000,
                direction: 'down',
                easing: 'easeIn'
            },  
            hideAnimation: 
            {
                type: 'slideOut',
                duration: 1000,
                direction: 'up',
                easing: 'easeOut'
            }, 
            items: [
                {
                    align: 'left',
                    ui:    'plain',
                    xtype: 'button',
                    id: 'back',
                    cls: 'back icon-back',
                    hidden: true,
                    handler: function () {
                        if(Ext.getCmp('search')._hidden === false)
                        {
                            Ext.getCmp('search').hide();
                            Ext.getCmp('products').hide();
                            Ext.getCmp('works').hide();
                            Ext.getCmp('favorites').show();
                        }else if (typeof panel_list_menu !== 'undefined') {
                            if (panel_list_menu.getBackButton()._hidden === false) {
                                panel_list_menu.onBackTap();
                            }
                            else{
                                panel_list_menu.hide();  
                                panel_list_menu.destroy();    
                            }
                        }else if (Ext.getCmp('multi')._hidden === false && Ext.getCmp('multi').getBackButton()._hidden === false){
                            
                            Ext.getCmp('multi').onBackTap();
                               //console.dir(Ext.getCmp('teste').getBackButton());
                     
                        }else if (Ext.getCmp('products')._hidden === false && Ext.getCmp('products').getBackButton()._hidden === false){
                            
                            Ext.getCmp('products').onBackTap();
                               //console.dir(Ext.getCmp('teste').getBackButton());
                         }else if (Ext.getCmp('works')._hidden === false && Ext.getCmp('works').getBackButton()._hidden === false){
                            
                            Ext.getCmp('works').onBackTap();
                               //console.dir(Ext.getCmp('teste').getBackButton());
                        
                         }else if (Ext.getCmp('products')._hidden === false && Ext.getCmp('products').getBackButton( )._hidden === true || Ext.getCmp('works')._hidden === false && Ext.getCmp('works').getBackButton( )._hidden === true || Ext.getCmp('multi')._hidden === false && Ext.getCmp('multi').getBackButton( )._hidden === true){
                             Ext.getCmp('menuI').hide();
                            Ext.getCmp('footer').hide();
                            Ext.getCmp('products').hide();
                             Ext.getCmp('works').hide();
                             Ext.getCmp('multi').hide();
                             Ext.getCmp('favorites').show();
                        }
                        else{
                            Ext.getCmp('favorites').hide();
                            Ext.getCmp('menuI').show();
                            Ext.getCmp('footer').show();
                            // Ext.getCmp('teste').goToNode( Ext.getCmp('teste').getStore().getRoot() );
                               Ext.getCmp('open-menu').hide();
                              Ext.getCmp('back').hide();
                        }
                    /*if(Ext.getCmp('myList')._hidden === false || Ext.getCmp('italbox')._hidden === false || Ext.getCmp('favorites')._hidden === false || Ext.getCmp('help')._hidden === false || Ext.getCmp('search')._hidden === false )
	            {
                        Ext.getCmp('menuI').show();
                        Ext.getCmp('myCarroucel').hide();
                        Ext.getCmp('myCarroucel').on('hide', function() {
                        Ext.getCmp('myCarroucel').removeAll(true,true);
                        });
                        Ext.getCmp('barra2').hide();
                        Ext.getCmp('footer').hide();
                         Ext.getCmp('barra5').hide();
                        try {
                        Ext.getCmp('myList2').hide();
                        Ext.getCmp('myList').hide();
                        }
                        catch(err) {}
                        Ext.getCmp('back').hide();
                        Ext.getCmp('italbox').hide();
                        Ext.getCmp('favorites').hide();
                        Ext.getCmp('help').hide();
                        Ext.getCmp('search').hide();
                        Ext.getCmp('myList').hide();
                    }
                    else
                    {
                    Ext.getCmp('myCarroucel').hide();
                    Ext.getCmp('myCarroucel').on('hide', function() {
                         Ext.getCmp('myCarroucel').removeAll(true,true);
                    });
                    Ext.getCmp('barra2').hide();
                    Ext.getCmp('footer').hide();
                    Ext.getCmp('barra5').hide();
                    try {
                        Ext.getCmp('myList2').hide();
                        Ext.getCmp('myList').hide();
                    }
                    catch(err) {}
                    Ext.getCmp('italbox').hide();
                    Ext.getCmp('favorites').hide();
                    Ext.getCmp('help').hide();
                    Ext.getCmp('search').hide();
                    Ext.getCmp('myList').show();
                    }*/
                    }, 
                },
                {
                    align: 'right',
                    ui:      'plain',
                    xtype: 'button',
                    id: 'open-menu',
                    style: 'color: #00aeef',
                    hidden: true,
                    cls: 'open-menu icon-menu',
                    handler: function() {
                 
                       if (typeof panel_list_menu === 'undefined')  {
                        Ext.getCmp('open-menu').setStyle('color:#FFF');
                        panel_list_menu = Ext.Viewport.add({
                        xtype : 'nestedlist',
                        id:'list-menu',
                        //cls: 'lista-extras',
                        float: true,
                        title: 'Menu',
                        displayField: 'text',
                        store: 'Menu',
                        useToolbar: false,
                       /*   showAnimation:  
            {
                type: 'slideIn',
                //duration: 1000,
                direction: 'left',
                //easing: 'easeIn'
            },  
            /*hideAnimation: 
            {
                type: 'slideOut',
                duration: 1000,
                direction: 'up',
                easing: 'easeOut'
            }, */
                        listConfig:{
                        cls: 'menu-sosoares',
                        itemTpl:  '<div class="lista-pesquisa">'+
                            '<i class="{icon}" style="font-size:27px; color:#FFF; float:left; margin-right:10px;"></i><i class="icon-front front"></i></img>' +
                            '<div> <span>{text}</span></div>' +
                            '</div>',
                        emptyText: '<div class="lista-pesquisa">Sem resultados</div>',
                        },
                        detailCard:{
                            xtype:'panel',
                            //styleHtmlContent: true,
                            scrollable: true,
                            //padding: '0px !important',
                            html: '',
                            style: 'background-color: #054667;',
                            zIndex: 50,
                        },
                        items: [
                               {
                               xtype: 'toolbar',
                               docked: 'top',
                               cls: 'barra-menu',
                               zIndex: 50,
                               id: 'menu_toolbar',
                               html: '<span style="background: #012f46; color:#FFF; float:left; font-size: 21px;margin-top: 7px; "><i class="" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Menu</span>',
                               }],
                        listeners: {
                            leafitemtap: function(me, list, index, target, record) {
                              /*me.getDetailCard().setHtml('<div style="max-width:100%" class="leaf_panel">'+
                                                        '<img style="max-width:100%; max-height:70%" src="'+products+record.get('foto')+'">'+
                                                        '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('descricao')+'</p></div></div>');*/
                              // me.getDetailCard().setStyle('background-color: #054667;margin: 0px !important;padding: 0px !important');
                               // me.getDetailCard().setFullscreen(true);
                            }
                        }
                        });
                        panel_list_menu.show();
                        panel_list_menu.on('hide', function() {
                           panel_list_menu.destroy();
                           panel_list_menu = undefined;
                           Ext.getCmp('open-menu').setStyle('color:#00aeef');
                        });     
                       }else{
                             //console.dir(panel_list_menu);
                            //alert('TESTE!!');
                           // panel_menu.hide();
                       }
                     }, 
                },
                {
                    align: 'right',
                    ui:      'plain',
                    xtype: 'button',
                     hidden: true,
                    cls: 'open-menu2 icon-pesquisa',
                    handler: function () {
                       if (connect === 1) {
                            Ext.getCmp('menuI').hide();
                            Ext.getCmp('myList').hide();
                            Ext.getCmp('myCarroucel').hide();
                            Ext.getCmp('italbox').hide();
                            Ext.getCmp('help').hide();
                            Ext.getCmp('favorites').hide();
                            Ext.getCmp('barra2').hide();
                            Ext.getCmp('footer').hide();
                            Ext.getCmp('open-menu4').hide();
                            Ext.getCmp('barra5').hide();
                            Ext.getCmp('back').show();
                            Ext.getCmp('search').show();
                        }
                        else{
                            Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_search'), Ext.emptyFn);
                        }
                    }, 
                }
            ]
        },
        {
            xtype: 'toolbar',
            id: 'barra2',
            cls: 'header2',
            docked: 'top',
            hidden: true,
            layout: {
                    type: 'hbox',
                    pack: 'center'
            },
            showAnimation:  
                {
                    type: 'slideIn',
                    duration: 1000,
                    direction: 'down',
                    easing: 'easeIn'
                },  
                hideAnimation: 
                {
                    type: 'slideOut',
                    duration: 1000,
                    direction: 'up',
                    easing: 'easeOut'
                }, 
            items: [
              {
                    align: 'center', 
                    ui:    'plain',
                    xtype: 'button',
                    cls: 'open-menu3 icon-baixo',
                    handler: function () {
                    Ext.getCmp('barra2').hide();
                    Ext.getCmp('barra').show();
                    }
                },
           ]    
        },
        {
            xtype: 'toolbar',
            id: 'footer',
            cls: 'foot',
            docked: 'bottom',
            //hidden: true,
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                showAnimation:  
                {
                    type: 'slideIn',
                    duration: 1000,
                    direction: 'up',
                    easing: 'easeIn'
                },  
                hideAnimation: 
                {
                    type: 'slideOut',
                    duration: 1000,
                    direction: 'down',
                    easing: 'easeOut'
                }, 
            items: [
            {
                    align: 'left', 
                    ui:    'plain',
                    xtype: 'button',
                    text: '<i class="icon-idioma"></i><br><font style="font-size:15px">Idiomas</font>',
                    cls: 'open-menu4',
                    id: 'open-menu4',
                    //hidden: true,
                    handler: function () {
                       if (contador > 0) { 
                        Ext.getCmp('footer').hide();
                        Ext.getCmp('barra5').hide();
                         if( typeof panel1 !== 'undefined' ) {
                                 panel1.destroy();
                        }
                        panel1 = Ext.Viewport.add({
                        xtype : 'container',
                        id: 'myList2',
                        cls: 'menu3',
                        top: 'auto !important',
                        modal: true,
                        hideOnMaskTap: true,
                        showAnimation:  
                        {
                            type: 'slideIn',
                            duration: 1000,
                            direction: 'up',
                            easing: 'easeIn'
                        },  
                        hideAnimation: 
                        {
                            type: 'slideOut',
                            duration: 1000,
                            direction: 'down',
                            easing: 'easeOut'
                        }, 
                        items: [
                        {
                           xtype: 'toolbar',
                           cls: 'header4',
                           docked: 'top',
                           layout: {
                                   type: 'hbox',
                                   pack: 'center'
                           },
                           items: [
                               {
                               ui:    'plain',
                               xtype: 'button',
                               cls: 'close-menu4',
                               text:  '<span style="text-align:center; padding-left: 25px; line-height: 2;">'+Ext.getStore('Languages').getById(idioma).get('product')+' '+contador+'</span><span style="text-align:right; float:right;"><i class="icon-baixo2"></i></span>',
                               handler: function () {
                                   panel1.hide();
                                   }
                               },
                           ]    
                        },
                   {   
                   xtype: 'dataview',
                   height: '100px',
                   cls: 'lista2',
                   scrollable: {
                       direction: 'horizontal',
                       indicators: false
                   },
                   inline: {
                       wrap: false
                   },
                    store: {
                       fields: ['descricao_1','descricao_2','descricao_3','descricao_4','estado','foto','id','id_produto', 'lastModified','nome','pagina_id','priority','produto_id','ref'],
                       data: $.grep(tprodutos_paginas, function(e) { return e.pagina_id ==  idpagina })
                   },
                   itemTpl: '<img style="margin-right:10px;margin-top:10px; height:75px;" src="'+caminho2+'{foto}">',
                  
                   listeners: {
                        itemtap: function(list, index, target, record)
                        {
                            if( typeof panel2 !== 'undefined' ) {
                                 panel2.destroy();
                            }
                            panel2 = Ext.Viewport.add({ 
                                xtype: 'container',
                                id: 'pop-image',
                                cls: 'pop-image',
                                float: true,
                                showAnimation: 
                                {
                                    type: 'pop',
                                    duration: 300,
                                },  
                                layout : {
                                    type : 'vbox',
                                },
                                items: [
                                {
                                xtype: 'toolbar',
                                cls: 'right_bar2',
                                docked: 'right',
                                layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                },
                                items: [
                                {
                                      ui:    'plain',
                                      xtype: 'button',
                                      cls: 'open-menu9 icon-star-catalogos-white',
                                      handler: function () {
                                         Ext.getStore('Favorites2').load();
                                         var newRecord2 = {nome: record.get('nome') ,descricao_1: record.get('descricao_1'),descricao_2: record.get('descricao_2'), descricao_3: record.get('descricao_3'), descricao_4: record.get('descricao_4') , foto: caminho+record.get('foto'), thumb: caminho2+record.get('foto'), ref: record.get('ref'), id_produto: record.get('id_produto'),id_pagina: record.get('pagina_id')};
                                         Ext.getStore('Favorites2').add(newRecord2);
                                         Ext.getStore('Favorites2').sync();
                                          Ext.Msg.alert('', Ext.getStore('Languages').getById(idioma).get('add_product'), Ext.emptyFn);
                                         
                                      }
                                  },
                                  /*{
                                      ui:    'plain',
                                      xtype: 'button',
                                      cls: 'open-menu8 icon-lista-white',
                                      handler: function () {
                                       /////////////////////////////////////////////////////////////////////////////////////////  
                                      }
                                  },*/
                                  {
                                      ui:    'plain',
                                      xtype: 'button',
                                      cls: 'open-menu10 icon-partilha-white',
                                      handler: function () {
                                         window.plugins.socialsharing.share(Ext.getStore('Languages').getById(idioma).get('share_product_text')+nomec+Ext.getStore('Languages').getById(idioma).get('share_product_text2'), null, caminho+record.get('foto'), null);
                                      }
                                  },
                                ]
                                },
                                {
                                    xtype: 'toolbar',
                                    cls: 'header3',
                                    layout: {
                                            type: 'hbox',
                                            pack: 'right'
                                    },
                                    items: [
                                        {
                                        align: 'right', 
                                        ui:    'plain',
                                        xtype: 'button',
                                        cls: 'close icon-close',
                                        handler: function () {
                                             panel2.hide();
                                            }
                                        },
                                    ]    
                                },
                                {
                                    html  : '<div class="pop-up"><img src="'+caminho+record.get('foto')+'">'+
                                            '<br/><div class="btn-extras" id="btn-extras">EXTRAS</div>'+record.get('nome')+
                                            '<br/>Ref '+record.get('ref')+
                                            '<br/>'+record.get('descricao_'+idioma)+'</div>'
                                },
                                ],
                                listeners: [
                                {
                                    element: 'element',
                                    delegate: '#btn-extras',
                                    event: 'tap',
                                    fn: function() {
                                     panel_extras = Ext.Viewport.add({
                                        xtype : 'tabpanel',
                                        id:'extras',
                                        cls: 'lista-extras',
                                        float: true,
                                        tabBar:    {
                                            cls: 'barraTab2',
                                            hidden: true,
                                        },
                                        items: [
                                        {
                                            xtype: 'toolbar',
                                            docked: 'top',
                                            cls: 'barraPaginas',
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    ui: 'plain',
                                                    cls: 'back icon-back',
                                                    handler: function () {
                                                        panel_extras.hide();
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            title: '',
                                            layout : 'fit',
                                            cls: 'tabPaginas',
                                            items: [
                                            {
                                                xtype: 'dataview',
                                                cls: 'favoritos',
                                                flex: 1,
                                                scrollable: {
                                                    direction: 'vertical',
                                                },
                                                inline: {
                                                    wrap: true
                                                },
                                                 store: 
                                                 {
                                                    fields: ['descricao_1','descricao_2','descricao_3','descricao_4','estado','extra_id','foto','id','id_extra','lastModified','nome','priority','produto_id','ref'],
                                                    data: $.grep(textras_produtos, function(e) { return e.produto_id ==  record.get('id_produto')})
                                                 },
                                                
                                                itemTpl: '<img src="'+caminho2+'{foto}" style="width:130px; margin:10px 10px 0 10px;"></img><div style="text-align: center; font-size:10px;">{nome}</div>',
                                                
                                                listeners: {
                                                    itemtap: function(list, index, target, record,e) {
                                                        panel_extra = Ext.Viewport.add({ 
                                                            xtype: 'container',
                                                            id: 'extra',
                                                            cls: 'pop-produto',
                                                            float: true,
                                                            showAnimation: 
                                                            {
                                                                type: 'pop',
                                                                duration: 300,
                                                            },  
                                                            layout : {
                                                                type : 'vbox',
                                                            },
                                                            items: [
                                                                {
                                                                    xtype: 'toolbar',
                                                                    cls: 'header3',
                                                                    layout: {
                                                                            type: 'hbox',
                                                                            pack: 'right'
                                                                    },
                                                                   
                                                                    items: [
                                                                        {
                                                                        align: 'right', 
                                                                        ui:    'plain',
                                                                        xtype: 'button',
                                                                        cls: 'close icon-close',
                                                                        handler: function () {
                                                                             panel_extra.hide();
                                                                            }
                                                                        },
                                                                    ]    
                                                                },
                                                                {
                                                                    html  : '<div class="pop-up">'+
                                                                    '<img src="'+caminho+record.get('foto')+'">'+
                                                                    '<br\>'+record.get('nome')+'<br/>'+
                                                                    'Ref '+record.get('ref')+'<br/>'+record.get('descricao_'+idioma)+'</div>'
                                                                },
                                                            ],
                                                           
                                                        });
                                                    panel_extra.show();
                                                    panel_extra.on('hide', function() {
                                                       panel_extra.destroy();
                                                    });
                                                        
                                                    }
                                                }
                                            }
                                            ], 
                                        }, 
                                        ],       
                                        });
                                        panel_extras.show();
                                        panel_extras.on('hide', function() {
                                           panel_extras.destroy();
                                        });
                                    }
                                },
                                ]
                            });
                        panel2.show();
                        panel2.on('hide', function() {
                           panel2.destroy();
                        });
                        },
                    },
                    }
                    ],
                    initialize: function() {
                        this.callParent(arguments);
                        this.getHideAnimation().on({
                            animationend: this.destroy,
                            scope: this
                        });
                    }
                    });
                    panel1.show();
                    panel1.on('hide', function() {
                        if(Ext.getCmp('myList')._hidden === true)
                        {
                            Ext.getCmp('footer').show();
                            Ext.getCmp('barra5').show();
                        }
                        try
                        {
                            Ext.getCmp('pop-image').destroy();
                        }
                        catch(e){}
                        panel1.destroy();
                    });
                    } 
                    else{
                         Ext.Msg.alert('', Ext.getStore('Languages').getById(idioma).get('no_products'), Ext.emptyFn);
                    }
                    }
            },
            {
                    align: 'right', 
                    ui:    'plain',
                    xtype: 'button',
                    text: '<i class="icon-ajuda"></i><br><font style="font-size:15px">Ajuda</font>',
                    cls: 'open-menu4_2',
                    id: 'open-menu5',
                    //hidden: true,
            }
            ]    
        },
        {
            xtype: 'toolbar',
            id: 'barra5',
            cls: 'right_bar',
            docked: 'right',
            hidden: true,
            layout: {
                    type: 'vbox',
                    pack: 'center',
            },
            showAnimation:  
                {
                    type: 'slideIn',
                    duration: 1000,
                    direction: 'left',
                    easing: 'easeIn'
                },  
                hideAnimation: 
                {
                    type: 'slideOut',
                    duration: 1000,
                    direction: 'right',
                    easing: 'easeOut'
                }, 
            items: [
            {
                    ui:    'plain',
                    xtype: 'button',
                    cls: 'open-menu5 icon-star-catalogos',
                    handler: function () {
                        if (Ext.getCmp('myCarroucel').getItems().length == 0) {
                             Ext.Msg.alert('', Ext.getStore('Languages').getById(idioma).get('no_pages'), Ext.emptyFn);
                        }
                        else{
                            Ext.getStore('Favorites').load();
                            var newRecord = {imag: thumb ,nome: 'Cat. '+idcatalogo+' Pag. '+numero , id_pagina: ''+idpagina+'', id_catalogo: idcatalogo,numero: numero};
                            Ext.getStore('Favorites').add(newRecord);
                            Ext.getStore('Favorites').sync();
                            Ext.Msg.alert('', Ext.getStore('Languages').getById(idioma).get('add_page'), Ext.emptyFn);
                       }
                    }
            },
            {
              ui:    'plain',
              xtype: 'button',
              cls: 'open-menu6 icon-lista',
              handler: function () {
                  if (Ext.getCmp('myCarroucel').getItems().length == 0) {
                       Ext.Msg.alert('', Ext.getStore('Languages').getById(idioma).get('no_pages'), Ext.emptyFn);
                  }
                  else{
                  panel_paginas = Ext.Viewport.add({
                  xtype : 'tabpanel',
                  id:'listaPag',
                  cls: 'pop-produto',
                  float: true,
                  tabBar:    {
                      cls: 'barraTab2',
                      hidden: true,
                  },
                  items: [
                  {
                      xtype: 'toolbar',
                      docked: 'top',
                      cls: 'barraPaginas',
                      items: [
                          {
                              xtype: 'button',
                              ui: 'plain',
                              cls: 'back icon-back',
                              handler: function () {
                                  panel_paginas.hide();
                              }
                          }
                      ]
                  },
                  {
                      title: Ext.getStore('Languages').getById(idioma).get('pages'),
                      layout : 'fit',
                      cls: 'tabPaginas',
                      items: [
                      {
                      xtype: 'dataview',
                      cls: 'favoritos',
                      flex: 1,
                      scrollable: {
                          direction: 'vertical',
                      },
                      inline: {
                          wrap: true
                      },
                       store: 
                       {
                          fields: ['id_catalogo','id_pagina','imageSrc','numero','share','thumb','xtype'],
                          data:  $.grep(tpaginas, function(e) { return e.id_catalogo == idcatalogo })
                       },
                      
                      itemTpl: '<img src="{thumb}" style="width:130px; margin:10px 10px 0 10px;"></img><div style="text-align: center; font-size:12px;">Pag. {numero}</div>',
                      
                      listeners: {
                          itemtap: function(list, index, target, record,e) {
                               Ext.Msg.confirm(
                              "",
                              Ext.getStore('Languages').getById(idioma).get('open_page')+' '+record.get('numero')+"?",
                              function(buttonId) {
                              if (buttonId === 'yes') {
                               if (Ext.Viewport.getOrientation() === 'portrait') {
                                   Ext.getCmp('myCarroucel').setActiveItem((record.get('numero')*2)-3);
                               }
                               else{
                                   Ext.getCmp('myCarroucel').setActiveItem(record.get('numero')-1);
                               }
                                  panel_paginas.hide();
                              }});
                          }
                      }
                      }
                      ],
                  },
                  ],       
                  });
                  panel_paginas.show();
                  panel_paginas.on('hide', function() {
                     panel_paginas.destroy();
                  });
                  }
              }
            },
            {
                ui: 'plain',
                xtype: 'button',
                cls: 'open-menu7 icon-partilha',
                handler: function () {
                    if (Ext.getCmp('myCarroucel').getItems().length == 0) {
                         Ext.Msg.alert('', Ext.getStore('Languages').getById(idioma).get('no_pages'), Ext.emptyFn);
                    }
                    else{
                        window.plugins.socialsharing.share(Ext.getStore('Languages').getById(idioma).get('share_page_text')+nomec+Ext.getStore('Languages').getById(idioma).get('share_page_text2'), null, share, null);                          
                    }
                }
            },
        ]
        },
        /*{
            xtype: 'my-viewport',
            hidden: true,
            id: 'myList',
        },
        {
            xtype: 'my-viewport2',
            hidden: true,
            id: 'myCarroucel'
        },
        {
            xtype: 'my-viewport3',
            hidden: true,
            id: 'italbox',
            cls: 'about',
        },
        {
            xtype: 'my-viewport4',
            hidden: true,
            id: 'help',
            cls: 'help'
        },*/
        {
            xtype: 'my-viewport5',
            hidden: true,
            id: 'favorites',
            cls: 'favorites'
        },
        {
            xtype: 'my-viewport6',
            hidden: true,
            id: 'search',
            cls: 'pesquisa',
        },
        {
            xtype: 'my-viewport7',
            id: 'menuI',
            cls: 'menuI',
        },
        {
            xtype: 'my-viewport8',
            id: 'products',
            cls: 'pesquisa',
            hidden: true,
        },
        {
            xtype: 'my-viewport9',
            id: 'works',
            cls: 'pesquisa',
            hidden: true,
        },
         {
            xtype: 'my-viewport10',
            id: 'multi',
            cls: 'pesquisa',
            hidden: true,
        },
        ]
    }
});

Ext.application({

    name  : 'ItalboxCatalog',
    appFolder: 'app',
    
    views : [
        'Ext.ux.ImageViewer'
    ],
  
    models : [
       /* 'Setting',
        'Favorite',
        'Favorite2',*/
       // 'Product'
              
    ],
    stores : [
       /* 'Settings',
        'Languages',
        'Favorites',*/
        'Menu',
        'Products_Caixilharia',
        'Products_Extrusao',
        'Products_Vidro',
        'Works',
        'Works_Gallery',
        'Services_Caixilharia'
    ],
    
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },
    startupImage: {
        '320x460': 'resources/startup/Default.jpg', // Non-retina iPhone, iPod touch, and all Android devices
        '640x920': 'resources/startup/640x920.png', // Retina iPhone and iPod touch
        '640x1096': 'resources/startup/640x1096.png', // iPhone 5 and iPod touch (fifth generation)
        '768x1004': 'resources/startup/768x1004.png', //  Non-retina iPad (first and second generation) in portrait orientation
        '748x1024': 'resources/startup/748x1024.png', //  Non-retina iPad (first and second generation) in landscape orientation
        '1536x2008': 'resources/startup/1536x2008.png', // : Retina iPad (third generation) in portrait orientation
        '1496x2048': 'resources/startup/1496x2048.png' // : Retina iPad (third generation) in landscape orientation
    },

    isIconPrecomposed: false,

    glossOnIcon: false,
    phoneStartupScreen: 'resources/startup/italboxStartUp.jpg',
    tabletStartupScreen: 'resources/startup/italboxStartUp.jpg',
    
    launch: function() {
        Ext.fly('loading').destroy();
    
        Ext.Viewport.add({
            xtype: 'my-viewport-panel',
            cls: 'body_bg',
            id: 'painel'
        });
        
        //Ext.getStore('Products');
        //Ext.getStore('produtos') = Ext.getStore('Products');
        //console.dir( Ext.getStore('Teste'));
        Ext.Msg.setZIndex(20);
        
        try{
            var existe = Ext.getStore('Settings').getAt(0).get('lang');
        }
        catch(e){}
        /*if (existe === undefined) {
              var valor = { id_setting: '1', lang: '1'};
              Ext.getStore('Settings').add(valor);
              Ext.getStore('Settings').sync();
              idioma = Ext.getStore('Settings').getAt(0).get('lang');
              Ext.MessageBox.override({
                    confirm: function(title, message, fn, scope) {
                    return this.show({
                        title       : title || null,
                        message     : message || null,
                        buttons     : [
                        {text: Ext.getStore('Languages').getById(idioma).get('no'),  itemId: 'no'},
                        {text: Ext.getStore('Languages').getById(idioma).get('yes'), itemId: 'yes', ui: 'action'}
                    ],
                        promptConfig: false,
                        scope       : scope,
                        fn: function() {
                            if (fn) {
                                fn.apply(scope, arguments);
                            }
                        }
                    });
                }
            });
        }
        else{
            idioma = Ext.getStore('Settings').getAt(0).get('lang');
            Ext.getCmp('start-catalogos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_catalogs'));
            Ext.getCmp('start-favoritos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_favorites'));
            Ext.getCmp('start-language').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_language'));
            Ext.getCmp('start-help').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_help'));
            Ext.getCmp('italboxHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('company_html'));
            Ext.getCmp('helpHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('help_html'));
            Ext.getCmp('barraTab').getAt(0).setTitle(Ext.getStore('Languages').getById(idioma).get('pages'));
            Ext.getCmp('barraTab').getAt(1).setTitle(Ext.getStore('Languages').getById(idioma).get('products'));
            Ext.getCmp('data_paginas').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
            Ext.getCmp('data_produtos').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
            Ext.getCmp('search').setEmptyText(Ext.getStore('Languages').getById(idioma).get('products_empty'));
            Ext.getCmp('searchBox').setPlaceHolder(Ext.getStore('Languages').getById(idioma).get('search'));
            Ext.MessageBox.override({
                    confirm: function(title, message, fn, scope) {
                    return this.show({
                        title       : title || null,
                        message     : message || null,
                        buttons     : [
                        {text: Ext.getStore('Languages').getById(idioma).get('no'),  itemId: 'no'},
                        {text: Ext.getStore('Languages').getById(idioma).get('yes'), itemId: 'yes', ui: 'action'}
                    ],
                        promptConfig: false,
                        scope       : scope,
                        fn: function() {
                            if (fn) {
                                fn.apply(scope, arguments);
                            }
                        }
                    });
                }
            });
        }*/
       
     _IS_RIPPLE_EMULATOR = $('#tinyhippos-injected').length > 0;    
        
    function onLoad() {
        try{
        if(_IS_RIPPLE_EMULATOR) {cordova.addDocumentEventHandler('backbutton'); cordova.addDocumentEventHandler('menubutton');}
        document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);
        document.addEventListener("deviceready", onDeviceReady, false);
         if(device.platform == "Android"){
                document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);
                document.addEventListener("menubutton", Ext.bind(onMenuKeyDown, this), false);
         }
         if(navigator.network.connection.type == Connection.NONE) {
		 Ext.Msg.alert('', Ext.getStore('Languages').getById(idioma).get('offline'), Ext.emptyFn);
                 connect = 0;
	} else {
                connect = 1;
	}
        }
         catch(e){}
    }

    function onDeviceReady() {
        console.log("onDeviceReady");
    }

    function onOnline() {
        connect = 1;
    }
 
    function onOffline() {
        connect = 0;
        try {
               Ext.getCmp('menuP').hide();
               Ext.getCmp('menuL').hide();
               Ext.getCmp('listaPag').hide();
               Ext.getCmp('extras').hide();
               Ext.getCmp('extra').hide();
        }
        catch(err) {}
        
        if (Ext.getCmp('menuI')._hidden === false || Ext.getCmp('italbox')._hidden === false || Ext.getCmp('help')._hidden === false ) {
            Ext.Msg.alert('', Ext.getStore('Languages').getById(idioma).get('offline'), Ext.emptyFn);
        }
        else{
            Ext.Msg.alert(
                "",
                Ext.getStore('Languages').getById(idioma).get('offline_error'),
            function(buttonId) {
                  if (buttonId === 'ok') {
            
            Ext.getCmp('myCarroucel').hide();
            Ext.getCmp('myCarroucel').on('hide', function() {
            Ext.getCmp('myCarroucel').removeAll(true,true);
            });
            Ext.getCmp('barra2').hide();
            Ext.getCmp('footer').hide();
            Ext.getCmp('barra5').hide();
            try {
               Ext.getCmp('myList2').hide();
               Ext.getCmp('myList').hide();
               Ext.getCmp('pop-produto').hide();
            }
            catch(err) {}
            Ext.getCmp('italbox').hide();
            Ext.getCmp('favorites').hide();
            Ext.getCmp('help').hide();
            Ext.getCmp('search').hide();
            Ext.getCmp('myList').hide();
            Ext.getCmp('back').hide();
            Ext.getCmp('barra').show();
            Ext.getCmp('menuI').show();                 
                                                
            }});
        } 
    }
    
    function onBackKeyDown(eve) {
            eve.preventDefault();
            try {
                Ext.getCmp('menuP').hide();
                Ext.getCmp('menuL').hide();
                Ext.getCmp('listaPag').hide();
                Ext.getCmp('extras').hide();
                Ext.getCmp('extra').hide();
            }
            catch(err) {}
            
            if(Ext.getCmp('myList')._hidden === false || Ext.getCmp('italbox')._hidden === false || Ext.getCmp('favorites')._hidden === false || Ext.getCmp('help')._hidden === false || Ext.getCmp('search')._hidden === false )
            {
                Ext.getCmp('myCarroucel').hide();
                Ext.getCmp('myCarroucel').on('hide', function() {
                Ext.getCmp('myCarroucel').removeAll(true,true);
                });
                Ext.getCmp('barra2').hide();
                Ext.getCmp('footer').hide();
                Ext.getCmp('barra5').hide();
                try {
                    Ext.getCmp('myList2').hide();
                    Ext.getCmp('myList').hide();
                    Ext.getCmp('pop-produto').hide();
                }
                catch(err) {}
                Ext.getCmp('italbox').hide();
                Ext.getCmp('favorites').hide();
                Ext.getCmp('help').hide();
                Ext.getCmp('search').hide();
                Ext.getCmp('myList').hide();
                Ext.getCmp('back').hide();
                Ext.getCmp('barra').show();
                Ext.getCmp('menuI').show();
            }
            
            else if (Ext.getCmp('myCarroucel')._hidden === false) 
            {
                Ext.getCmp('myCarroucel').hide();
                Ext.getCmp('myCarroucel').on('hide', function() {
                     Ext.getCmp('myCarroucel').removeAll(true,true);
                });
                Ext.getCmp('barra2').hide();
                Ext.getCmp('footer').hide();
                Ext.getCmp('barra5').hide();
                try {
                    Ext.getCmp('myList2').hide();
                    Ext.getCmp('myList').hide(); 
                }
                catch(err) {}
               
                Ext.getCmp('italbox').hide();
                Ext.getCmp('favorites').hide();
                Ext.getCmp('help').hide();
                Ext.getCmp('search').hide();
                Ext.getCmp('barra').show();
                Ext.getCmp('myList').show();
            }
            else
	    {
            Ext.Msg.confirm("", Ext.getStore('Languages').getById(idioma).get('exit'),  function ( answer ) { 
                    if ( answer == 'yes') { 
                        navigator.app.exitApp();
                    } else { 
                   
                    } 
                });
	    }
            
    }
    
    function onMenuKeyDown(eve) {
            eve.preventDefault();
            var panel_menu = Ext.Viewport.add({ 
            xtype: 'container',
            id: 'menuP',
            modal: true,
            height    : 100,
            width     : 240,
            floating  : true,                               
            top       : -160,
            cls: 'menu',
            hideOnMaskTap: true,
            showAnimation: 
            {
                type: 'slideIn',
                duration: 1000,
                direction: 'up',
                easing: 'easeOut'
            },  
            hideAnimation: 
            {
                type: 'slideOut',
                duration: 700,
                direction: 'down',
                easing: 'easeIn'
            }, 
            items     : [
                {
                    html  : '<li class="menu-italbox" id="menu-italbox"><span class="icon-italbox" style="vertical-align: middle;"></span><span style="padding-left: 20px; font-size: 13px;">'+Ext.getStore('Languages').getById(idioma).get('italbox')+'</span></li>',
                },
                {
                    html  : '<li class="menu-catalogos" id="menu-catalogos"><span class="icon-catalogos" style="vertical-align: middle;"></span><span style="padding-left: 20px; font-size: 13px;">'+Ext.getStore('Languages').getById(idioma).get('catalogs')+'</span></li>',
                },
                {
                    html  : '<li class="menu-favoritos" id="menu-favoritos"><span class="icon-star" style="vertical-align: middle;"></span><span style="padding-left: 20px; font-size: 13px;">'+Ext.getStore('Languages').getById(idioma).get('favorites')+'</span></li>'
                },
                {
                    html  : '<li class="menu-language" id="menu-language"><span class="icon-mundo-catalogos" style="vertical-align: middle;"></span><span style="padding-left: 20px; font-size: 13px;">'+Ext.getStore('Languages').getById(idioma).get('language')+'</span></li>'
                },
                {
                    html  : '<li class="menu-ajuda" id="menu-help"><span class="icon-ajuda" style="vertical-align: middle;"></span><span style="padding-left: 20px; font-size: 13px;">'+Ext.getStore('Languages').getById(idioma).get('help')+'</span></li>'
                }
            ],
            listeners: [
            {
                element: 'element',
                delegate: '#menu-italbox',
                event: 'tap',
                fn: function() {
                 Ext.getCmp('menuI').hide();
                 Ext.getCmp('myCarroucel').hide();
                 Ext.getCmp('myList').hide();
                 Ext.getCmp('footer').hide();
                 Ext.getCmp('barra5').hide();
                 Ext.getCmp('favorites').hide();
                 Ext.getCmp('help').hide();
                 Ext.getCmp('search').hide();
                 Ext.getCmp('back').show();
                 Ext.getCmp('italbox').show();
                 panel_menu.hide();
                }
            },
            {
                element: 'element',
                delegate: '#menu-catalogos',
                event: 'tap',
                fn: function() {
                    if (connect === 1) {
                        Ext.getCmp('menuI').hide();
                        Ext.getCmp('myCarroucel').hide();
                        Ext.getCmp('italbox').hide();
                        Ext.getCmp('footer').hide();
                        Ext.getCmp('barra5').hide();
                        Ext.getCmp('favorites').hide();
                        Ext.getCmp('help').hide();
                        Ext.getCmp('search').hide();
                        Ext.getCmp('back').show();
                        Ext.getCmp('myList').show();
                        panel_menu.hide();
                  }
                    else{
                        Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                    }  
                }
            },
             {
                element: 'element',
                delegate: '#menu-favoritos',
                event: 'tap',
                fn: function() {
                   if (connect === 1) {
                        Ext.getCmp('menuI').hide();
                        Ext.getCmp('myCarroucel').hide();
                        Ext.getCmp('myList').hide();
                        Ext.getCmp('footer').hide();
                        Ext.getCmp('barra5').hide();
                        Ext.getCmp('italbox').hide();
                        Ext.getCmp('help').hide();
                        Ext.getCmp('search').hide();
                        Ext.getCmp('back').show();
                        Ext.getCmp('favorites').show();
                        panel_menu.hide();
                    }
                    else{
                        Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_favorites'), Ext.emptyFn);
                    }  
                }
            },
            {
            element: 'element',
            delegate: '#menu-language',
            event: 'tap',
            fn: function() {
            var panel_language = Ext.Viewport.add({ 
            xtype: 'container',
            id: 'menuL',
            modal: true,
            height    : '230px',
            width     : '100%',
            floating  : true,                               
            top       : '0px',
            bottom : 'auto',
            cls: 'menuL',
            hideOnMaskTap: true,
            showAnimation: 
            {
                type: 'slideIn',
                duration: 1000,
                delay: 1000,
                direction: 'up',
                easing: 'easeOut'
            },  
            hideAnimation: 
            {
                type: 'slideOut',
                duration: 700,
                direction: 'down',
                easing: 'easeIn'
            }, 
            items     : [
                {
                    html  : '<li class="menu-portugues" id="menu-portugues"></span><span style="padding-left: 20px; font-size: 14px;">PORTUGUÊS</span><span class="icon-front" style="vertical-align: middle; float: right;padding:3px 20px 0px 0px;"></li>',
                },
                {
                    html  : '<li class="menu-english" id="menu-english"><span style="padding-left: 20px; font-size: 14px;">ENGLISH</span><span class="icon-front" style="vertical-align: middle;float: right;padding:3px 20px 0px 0px;"></span></li>',
                },
                {
                    html  : '<li class="menu-francais" id="menu-francais"></span><span style="padding-left: 20px; font-size: 14px;">FRANÇAIS</span><span class="icon-front" style="vertical-align: middle;float: right; padding:3px 20px 0px 0px;"></li>'
                },
                {
                    html  : '<li class="menu-castellano" id="menu-castellano"></span><span style="padding-left: 20px; font-size: 14px;">CASTELLANO</span><span class="icon-front" style="vertical-align: middle;float: right;padding:3px 20px 0px 0px;"></li>'
                }
            ],
            listeners: [
                {
            element: 'element',
            delegate: '#menu-portugues',
            event: 'tap',
            fn: function() {
                var valor = { id_setting: '1', lang: '1'};
                Ext.getStore('Settings').getAt(0).set(valor);
                Ext.getStore('Settings').sync();
                idioma = Ext.getStore('Settings').getAt(0).get('lang');
                Ext.getCmp('start-catalogos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_catalogs'));
                Ext.getCmp('start-favoritos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_favorites'));
                Ext.getCmp('start-language').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_language'));
                Ext.getCmp('start-help').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_help'));
                Ext.getCmp('italboxHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('company_html'));
                Ext.getCmp('helpHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('help_html'));
                Ext.getCmp('barraTab').getAt(0).setTitle(Ext.getStore('Languages').getById(idioma).get('pages'));
                Ext.getCmp('barraTab').getAt(1).setTitle(Ext.getStore('Languages').getById(idioma).get('products'));
                Ext.getCmp('data_paginas').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                Ext.getCmp('data_produtos').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                Ext.getCmp('search').setEmptyText(Ext.getStore('Languages').getById(idioma).get('products_empty'));
                Ext.getCmp('searchBox').setPlaceHolder(Ext.getStore('Languages').getById(idioma).get('search'));
                Ext.MessageBox.override({
                        confirm: function(title, message, fn, scope) {
                        return this.show({
                            title       : title || null,
                            message     : message || null,
                            buttons     : [
                            {text: Ext.getStore('Languages').getById(idioma).get('no'),  itemId: 'no'},
                            {text: Ext.getStore('Languages').getById(idioma).get('yes'), itemId: 'yes', ui: 'action'}
                        ],
                            promptConfig: false,
                            scope       : scope,
                            fn: function() {
                                if (fn) {
                                    fn.apply(scope, arguments);
                                }
                            }
                        });
                    }
                });
                panel_language.hide();
            }
        },
        {
            element: 'element',
            delegate: '#menu-english',
            event: 'tap',
            fn: function() {
                var valor = { id_setting: '1', lang: '2'};
                Ext.getStore('Settings').getAt(0).set(valor);
                Ext.getStore('Settings').sync();
                idioma = Ext.getStore('Settings').getAt(0).get('lang');
                Ext.getCmp('start-catalogos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_catalogs'));
                Ext.getCmp('start-favoritos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_favorites'));
                Ext.getCmp('start-language').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_language'));
                Ext.getCmp('start-help').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_help'));
                Ext.getCmp('italboxHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('company_html'));
                Ext.getCmp('helpHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('help_html'));
                Ext.getCmp('barraTab').getAt(0).setTitle(Ext.getStore('Languages').getById(idioma).get('pages'));
                Ext.getCmp('barraTab').getAt(1).setTitle(Ext.getStore('Languages').getById(idioma).get('products'));
                Ext.getCmp('data_paginas').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                Ext.getCmp('data_produtos').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                Ext.getCmp('search').setEmptyText(Ext.getStore('Languages').getById(idioma).get('products_empty'));
                Ext.getCmp('searchBox').setPlaceHolder(Ext.getStore('Languages').getById(idioma).get('search'));
                Ext.MessageBox.override({
                        confirm: function(title, message, fn, scope) {
                        return this.show({
                            title       : title || null,
                            message     : message || null,
                            buttons     : [
                            {text: Ext.getStore('Languages').getById(idioma).get('no'),  itemId: 'no'},
                            {text: Ext.getStore('Languages').getById(idioma).get('yes'), itemId: 'yes', ui: 'action'}
                        ],
                            promptConfig: false,
                            scope       : scope,
                            fn: function() {
                                if (fn) {
                                    fn.apply(scope, arguments);
                                }
                            }
                        });
                    }
                });
                panel_language.hide();
            }
            },
            {
               element: 'element',
               delegate: '#menu-francais',
               event: 'tap',
               fn: function() {
                  var valor = { id_setting: '1', lang: '3'};
                Ext.getStore('Settings').getAt(0).set(valor);
                Ext.getStore('Settings').sync();
                idioma = Ext.getStore('Settings').getAt(0).get('lang');
                Ext.getCmp('start-catalogos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_catalogs'));
                Ext.getCmp('start-favoritos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_favorites'));
                Ext.getCmp('start-language').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_language'));
                Ext.getCmp('start-help').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_help'));
                Ext.getCmp('italboxHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('company_html'));
                Ext.getCmp('helpHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('help_html'));
                Ext.getCmp('barraTab').getAt(0).setTitle(Ext.getStore('Languages').getById(idioma).get('pages'));
                Ext.getCmp('barraTab').getAt(1).setTitle(Ext.getStore('Languages').getById(idioma).get('products'));
                Ext.getCmp('data_paginas').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                Ext.getCmp('data_produtos').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                Ext.getCmp('search').setEmptyText(Ext.getStore('Languages').getById(idioma).get('products_empty'));
                Ext.getCmp('searchBox').setPlaceHolder(Ext.getStore('Languages').getById(idioma).get('search'));
                Ext.MessageBox.override({
                        confirm: function(title, message, fn, scope) {
                        return this.show({
                            title       : title || null,
                            message     : message || null,
                            buttons     : [
                            {text: Ext.getStore('Languages').getById(idioma).get('no'),  itemId: 'no'},
                            {text: Ext.getStore('Languages').getById(idioma).get('yes'), itemId: 'yes', ui: 'action'}
                        ],
                            promptConfig: false,
                            scope       : scope,
                            fn: function() {
                                if (fn) {
                                    fn.apply(scope, arguments);
                                }
                            }
                        });
                    }
                });
                panel_language.hide();
               }
           },
           {
               element: 'element',
               delegate: '#menu-castellano',
               event: 'tap',
               fn: function() {
                var valor = { id_setting: '1', lang: '4'};
                Ext.getStore('Settings').getAt(0).set(valor);
                Ext.getStore('Settings').sync();
                idioma = Ext.getStore('Settings').getAt(0).get('lang');
                Ext.getCmp('start-catalogos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_catalogs'));
                Ext.getCmp('start-favoritos').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_favorites'));
                Ext.getCmp('start-language').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_language'));
                Ext.getCmp('start-help').setStyle(Ext.getStore('Languages').getById(idioma).get('menu_help'));
                Ext.getCmp('italboxHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('company_html'));
                Ext.getCmp('helpHtml').setHtml(Ext.getStore('Languages').getById(idioma).get('help_html'));
                Ext.getCmp('barraTab').getAt(0).setTitle(Ext.getStore('Languages').getById(idioma).get('pages'));
                Ext.getCmp('barraTab').getAt(1).setTitle(Ext.getStore('Languages').getById(idioma).get('products'));
                Ext.getCmp('data_paginas').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                Ext.getCmp('data_produtos').setEmptyText(Ext.getStore('Languages').getById(idioma).get('favorites_empty'));
                Ext.getCmp('search').setEmptyText(Ext.getStore('Languages').getById(idioma).get('products_empty'));
                Ext.getCmp('searchBox').setPlaceHolder(Ext.getStore('Languages').getById(idioma).get('search'));
                Ext.MessageBox.override({
                        confirm: function(title, message, fn, scope) {
                        return this.show({
                            title       : title || null,
                            message     : message || null,
                            buttons     : [
                            {text: Ext.getStore('Languages').getById(idioma).get('no'),  itemId: 'no'},
                            {text: Ext.getStore('Languages').getById(idioma).get('yes'), itemId: 'yes', ui: 'action'}
                        ],
                            promptConfig: false,
                            scope       : scope,
                            fn: function() {
                                if (fn) {
                                    fn.apply(scope, arguments);
                                }
                            }
                        });
                    }
                });
                panel_language.hide();
               }
           }
            ]
            });
            panel_language.show();
            panel_language.on('hide', function() {
                panel_language.destroy();

            });   
            panel_menu.hide();        
                   
                    }
                },
                {
                    element: 'element',
                    delegate: '#menu-help',
                    event: 'tap',
                    fn: function() {
                     Ext.getCmp('menuI').hide();
                     Ext.getCmp('myCarroucel').hide();
                     Ext.getCmp('myList').hide();
                     Ext.getCmp('footer').hide();
                     Ext.getCmp('barra5').hide();
                     Ext.getCmp('italbox').hide();
                     Ext.getCmp('favorites').hide();
                     Ext.getCmp('search').hide();
                     Ext.getCmp('back').show();
                     Ext.getCmp('help').show();
                     panel_menu.hide();
                    }
                }
            ]
        });
        panel_menu.show();
        panel_menu.on('hide', function() {
            panel_menu.destroy();

        });
    }
    onLoad();
    }
});
//});
//};
