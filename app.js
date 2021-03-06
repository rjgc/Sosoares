var thumb_products = 'http://grupososoares.pt/assets/uploads/produtos/thumb/';
var products = 'http://grupososoares.pt/assets/uploads/produtos/';
var thumb_works = 'http://grupososoares.pt/assets/uploads/obras/thumb/';
var works = 'http://grupososoares.pt/assets/uploads/obras/';
try{
//Onde Estamos
var position3 = new google.maps.LatLng(41.202625,-8.471071);  //Valongo
var position2 = new google.maps.LatLng(41.152985,-8.634299);  //Servi�os Tecnicos
var position13  = new google.maps.LatLng(41.785537,-8.861844);  //Viana do Castelo
var position4 = new google.maps.LatLng(39.618591,-8.86046); //Leiria
var position5 = new google.maps.LatLng(40.680569,-7.92256); //Viseu
var position6 = new google.maps.LatLng(40.629658,-7.869574); //Vidro
var position7 = new google.maps.LatLng(40.627238,-7.885404); //Lacagem
var position8 = new google.maps.LatLng(37.063602,-7.973403); //Faro
var position9 = new google.maps.LatLng(40.557855,-8.542814); //Metalfer
var position10 = new google.maps.LatLng(38.782509,-9.34036); //Alfasul
var position11 = new google.maps.LatLng(38.773087,-9.364134); //Perfisoeiras
var position12 = new google.maps.LatLng(32.668981,-16.855974); //ALULIDER
var position = new google.maps.LatLng(39.64357,-8.37321); //INTERALUM�NIOS
var position14 = new google.maps.LatLng(40.642065,-7.909108); //PEOVIS
//Areas Comerciais
var position_1 = new google.maps.LatLng(40.558133,-8.542492);  //Aveiro
var position_2 = new google.maps.LatLng(39.618106,-8.860048);  //Leiria
var position_3  = new google.maps.LatLng(41.785537,-8.479128);  //Viana do Castelo
var position_4 = new google.maps.LatLng(37.063602,-7.973403); //Algarve
var position_5 = new google.maps.LatLng(40.680569,-7.92256); //Viseu
var position_6 = new google.maps.LatLng(41.202625,-8.471071); //Porto
var position_7 = new google.maps.LatLng(41.202625,-8.471071); //Valongo
var position_8 = new google.maps.LatLng(40.557855,-8.542814); //Coimbra
var position_9 = new google.maps.LatLng(32.668981,-16.855974); //Madeira
var position_10 = new google.maps.LatLng(38.782509,-9.34036); //Lisboa Sul
var position_11 = new google.maps.LatLng(38.782509,-9.34036); //Lisboa Norte
var position_12 = new google.maps.LatLng(41.202625,-8.471071); //Vila Real
var position_13 = new google.maps.LatLng(37.765287,-25.67389); //A�ores
}
catch(e){}

var idioma;

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': 'sencha-touch-2.0.1.1/ux',
        'Ext.plugin': 'sencha-touch-2.0.1.1/plugin'
    }
});

Ext.define('Italbox.Viewport12', {
    extend: 'Ext.NestedList',
    xtype : 'my-viewport12',
    cls: 'pesquisa',
    id:'search',
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
            scrollable: {
                direction: 'vertical'
            },
            html: '',
            style: 'background-color: #04334b;',
             items: [{
                        xtype: 'carousel',
                        id: 'carousel_produtos_search',
                    },
                    {
                     id: 'html_produtos_search',
                     cls: 'html_produtos',
                    html  : '',
                    },
            ]
        },
       items: [
               {
               xtype: 'toolbar',
               docked: 'top',
               cls: 'barraPesquisa',
               items: [
               {
                    xtype: 'searchfield',
                    placeHolder: 'Pesquisa...',
                    itemId: 'searchBox',
                    id: 'searchBox',
                    cls: 'search',
                    listeners: {
                        keyup: function(searchBox) {
                            queryString = searchBox.getValue();
                            if (queryString == '') {
                                  Ext.getStore('Products_Search').getProxy().setExtraParams({
                                        lang: idioma,
                                        search: ''
                                    });
                                    Ext.getCmp('search').getActiveItem().setHtml('');
                                    Ext.getStore('Products_Search').load();
                            }else{
                                Ext.getStore('Products_Search').getProxy().setExtraParams({
                                        lang: idioma,
                                        search: queryString
                                    });
                                    Ext.getCmp('search').getActiveItem().setHtml('');
                                    Ext.getStore('Products_Search').load();
                                    return true;
                                /*Ext.getStore('Products_Search').clearFilter();
                                if(queryString){
                                    var thisRegEx = new RegExp(queryString, "i");
                                    Ext.getStore('Products_Search').filterBy(function(record) {
                                    if (thisRegEx.test(record.get('text'))) {
                                        return true;
                                    };
                                    return false;
                                 });
                                }*/
                            }
                        },
                        clearicontap: function() {
                             //Ext.getStore('Works').clearFilter();
                             Ext.getCmp('search').getActiveItem().setHtml('');
                             Ext.getStore('Products_Search').getProxy().setExtraParams({
                                        lang: idioma,
                                        search: ''
                                    });
                                   
                                    Ext.getStore('Products_Search').load();
                        },
                    }
                },
                ],
            }
        ],
         listeners: {
            leafitemtap: function(me, list, index, target, record) {
                  Ext.getCmp('carousel_produtos_search').removeAll();
                  Ext.getCmp('html_produtos_search').setHtml('');
                    var items = [];
                      items.push({
                        xtype: 'image',
                        src: products+record.get('foto'),
                        style: 'background-size: 100% 93%;'
                      });
                      if (record.get('foto2') != '') {
                         items.push({
                         xtype: 'image',
                         src: products+record.get('foto2'),
                         style: 'background-size: 100% 93%;'
                      });
                      }
                       if (record.get('foto3') != '') {
                         items.push({
                         xtype: 'image',
                         src: products+record.get('foto3'),
                         style: 'background-size: 100% 93%;'
                      });
                      }
                         if (record.get('foto4') != '') {
                         items.push({
                         xtype: 'image',
                         src: products+record.get('foto4'),
                         style: 'background-size: 100% 93%;'
                      });
                      }
                      
                    Ext.getCmp('carousel_produtos_search').setItems(items);
                    Ext.getCmp('carousel_produtos_search').setActiveItem(0);
                    
                    Ext.getCmp('html_produtos_search').setHtml('<div style="max-width:100%" class="leaf_panel"><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('descricao')+'</p></div></div>');
                  
               me.getDetailCard().getScrollable().getScroller().scrollTo(0,0.1, false);
            }
        }
    },
     initialize: function() {
        Ext.getStore('Products_Search').on('load', function(store, records) {
            if (records.length == 0) {
                Ext.getCmp('search').getActiveItem().setHtml('<div class="lista-pesquisa" style="color: #FFF; margin: 15px;">'+Ext.getStore('Languages').getById(idioma).get('noresults')+'</div>');
            }
        });
        Ext.getCmp('search').on('hide', function() {
                           Ext.getCmp('open-menu2').setStyle('color:#00aeef');
        });
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('carousel_produtos_search').setHeight(Ext.Viewport.getWindowHeight()/1.7);
         }
         else {
            Ext.getCmp('carousel_produtos_search').setHeight(Ext.Viewport.getWindowHeight()*1.4);
         }
       
    },
    handleOrientationChange: function(viewport, orientation, width, height){
         
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('carousel_produtos_search').setHeight(Ext.Viewport.getWindowHeight()/1.7);
         }
         else {
            Ext.getCmp('carousel_produtos_search').setHeight(Ext.Viewport.getWindowHeight()*1.4);
         }
    }
          
});

Ext.define('Italbox.Viewport11', {
    extend: 'Ext.Panel',
    xtype : 'my-viewport11',
    id: 'treatment',
    cls: 'tratamento',
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
                id: 'html_pic_treatment',
                html  : '',
            },
            {
                id: 'html_treatment',
                cls: '1',
                html  : '',
            },
            {
               xtype: 'toolbar',
               docked: 'top',
               cls: 'barraPesquisa',
               id: 'treatment_toolbar',
               html: '<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-apoio" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Tratamento</span>',
            }
        ],
    },
    initialize: function() {
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('html_pic_treatment').setHeight(Ext.Viewport.getWindowHeight()/2);
         }
         else {
            Ext.getCmp('html_pic_treatment').setHeight(Ext.Viewport.getWindowHeight());
         }
       
    },
    handleOrientationChange: function(viewport, orientation, width, height){
         
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('html_pic_treatment').setHeight(Ext.Viewport.getWindowHeight()/2);
         }
         else {
            Ext.getCmp('html_pic_treatment').setHeight(Ext.Viewport.getWindowHeight());
         }
    }
});

Ext.define('Italbox.Viewport10', {
    extend: 'Ext.NestedList',
    xtype : 'my-viewport10',
    cls: 'pesquisa',
    id: 'multi',
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
            layout: 'fit',
            html: '',
            style: 'background-color: #04334b;',
             items: [{
                      xtype:'panel',
                      scrollable: true,
                      id: 'panel_multi',
                      items: [
                     {
                     id: 'html_pic_multi',
                    html  : '',
                    },
                    {
                     id: 'html_multi',
                    html  : '',
                    },
                     ]
             }]
        },
        items: [
               {
               xtype: 'toolbar',
               docked: 'top',
               cls: 'barraPesquisa',
               id: 'multi_toolbar',
               html: '<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-apoio" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Servi�os</span>',
        }],
        listeners: {
            leafitemtap: function(me, list, index, target, record) {
                if (record.get('id') == 5) {
                    Ext.getCmp('html_pic_multi').hide();
                    Ext.getCmp('html_multi').hide();
                    try{
                        Ext.getCmp('mapa2').show();
                    }catch(e){}
                
                        if (typeof Ext.getCmp('mapa2') === 'undefined') {
                        me.getDetailCard().add(
                            {
                            id: 'mapa2',
                            xtype: 'map',
                                mapOptions : {
                                center : new google.maps.LatLng(39.402244,-8.22876),  //Portugal
                                zoom : 5,
                                mapTypeId : google.maps.MapTypeId.ROADMAP,
                                navigationControl: true,
                                navigationControlOptions: {
                                    style: google.maps.NavigationControlStyle.DEFAULT
                                }
                            },
                            
                            mapListeners: {
                                dragstart: function() {
                                    var segmented = Ext.getCmp('segmented'),
                                        pressedButtons = segmented.getPressedButtons().slice(),
                                        trackingIndex = pressedButtons.indexOf(trackingButton);
                                    if (trackingIndex != -1) {
                                        pressedButtons.splice(trackingIndex, 1);
                                        segmented.setPressedButtons(pressedButtons);
                                    }
                                }
                            },
                
                            listeners: {
                                maprender: function(comp, map) {
                                    
                                     var marker_1 = new google.maps.Marker({
                                        position: position_1,
                                        title : 'SOSOARES - VIANA DO CASTELO',
                                        icon: 'imgs/marker.png',
                                        map: map
                                    });
                                     
                                     var infoWindow_1 = new google.maps.InfoWindow({
                                        content: 'SOSOARES - AVEIRO<br>'+
                                        'Trav. Do Boleg�o, 146 - Apartado 1 3754-904 Fermentelos<br>'+
                                        'Luis Ferreira<br>'+
                                        'Telf.: +351 936 457 232<br>'+
                                        'Email: luis.ferreira@sosoares.pt<br>',
                                         });
                    
                                    google.maps.event.addListener(marker_1,'click', function(){
                                        infoWindow_1.open(map,marker_1);
                                    });
                                    
                                    var marker_2 = new google.maps.Marker({
                                        position: position_2,
                                        title : 'SOSOARES - LEIRIA',
                                        icon: 'imgs/marker.png',
                                        map: map
                                    });
                                     
                                     var infoWindow_2 = new google.maps.InfoWindow({
                                        content: 'SOSOARES - LEIRIA<br>'+
                                        'E.N.8 - Ch�o da Feira, 9 2480-060 Calvaria de Cima<br>'+
                                        'Luis Santos<br>'+
                                        'Telf.: +351 936 454 294<br>'+
                                        'Email: luis.santos@sosoares.pt',
                                         });
                    
                                    google.maps.event.addListener(marker_2,'click', function(){
                                        infoWindow_2.open(map,marker_2);
                                    });
                                   
                                    var marker_3 = new google.maps.Marker({
                                        position: position_3,
                                        title : 'SOSOARES - VIANA DO CASTELO',
                                        icon: 'imgs/marker.png',
                                        map: map
                                    });
                                     
                                     var infoWindow_3 = new google.maps.InfoWindow({
                                        content: 'SOSOARES - VIANA DO CASTELO<br>'+
                                        'Lugar da Bandeira - Afife 4900-012 Viana do Castelo<br>'+
                                        'Vitor Gon�alves<br>'+
                                        'Telf.: +351 937 752 656<br>'+
                                        'Email: vitor.goncalves@sosoares.pt',
                                         });
                    
                                    google.maps.event.addListener(marker_3,'click', function(){
                                        infoWindow_3.open(map,marker_3);
                                    });
                                    
                                    var marker_4 = new google.maps.Marker({
                                        position: position_4,
                                        title : 'SOSOARES - ALGARVE',
                                        icon: 'imgs/marker.png',
                                        map: map
                                    });
                                     
                                     var infoWindow_4 = new google.maps.InfoWindow({
                                        content: 'SOSOARES - ALGARVE<br>'+
                                        'S�tio do Vale da Venda EN 125, Km 98.8 8135-037 Almancil<br>'+
                                        'Henrique Cintra<br>'+
                                        'Telf.: +351 917 982 470<br>'+
                                        'Email: henrique.cintra@sosoares.pt',
                                        });
                    
                                    google.maps.event.addListener(marker_4,'click', function(){
                                        infoWindow_4.open(map,marker_4);
                                    });
                                    
                                    var marker_5 = new google.maps.Marker({
                                        position: position_5,
                                        title : 'SOSOARES - VISEU',
                                        icon: 'imgs/marker.png',
                                        map: map
                                    });
                                     
                                     var infoWindow_5 = new google.maps.InfoWindow({
                                        content: 'SOSOARES - VISEU<br>'+
                                            'Zona Industrial de Abraveses 3515-157 Viseu<br>'+
                                            'Ricardo Rodrigues<br>'+
                                            'Telf.: +351 936 454 289<br>'+
                                            'Email: ricardo.rodrigues@sosoares.pt',
                                         });
                    
                                    google.maps.event.addListener(marker_5,'click', function(){
                                        infoWindow_5.open(map,marker_5);
                                    });
                                    
                                    var marker_6 = new google.maps.Marker({
                                        position: position_6,
                                        title : 'SOSOARES - PORTO',
                                        icon: 'imgs/marker.png',
                                        map: map
                                    });
                                     
                                     var infoWindow_6 = new google.maps.InfoWindow({
                                        content: 'SOSOARES - PORTO<br>'+
                                        'Rua do Baldeir�o, s/n 4440 - 346 Sobrado - Valongo<br>'+
                                        'Jo�o Pinto<br>'+
                                        'Telf.: +351 917 543 353<br>'+
                                        'Email: joao.pinto@sosoares.pt',
                                         });
                    
                                    google.maps.event.addListener(marker_6,'click', function(){
                                        infoWindow_6.open(map,marker_6);
                                    });
                                    
                                    var marker_7 = new google.maps.Marker({
                                        position: position_7,
                                        title : 'SOSOARES - VALONGO',
                                        icon: 'imgs/marker.png',
                                        map: map
                                    });
                                     
                                     var infoWindow_7 = new google.maps.InfoWindow({
                                        content: 'SOSOARES - VALONGO<br>'+
                                                'Rua do Baldeir�o, s/n 4440 - 346 Sobrado - Valongo<br>'+
                                                'Jo�o Pedro<br>'+
                                                'Telf.: +351 912 567 970<br>'+
                                                'Email: joao.pedro@sosoares.pt',
                                         });
                    
                                    google.maps.event.addListener(marker_7,'click', function(){
                                        infoWindow_7.open(map,marker_7);
                                    });
                                    
                                    var marker_8 = new google.maps.Marker({
                                        position: position_8,
                                        title : 'SOSOARES - COIMBRA',
                                        icon: 'imgs/marker.png',
                                        map: map
                                    });
                                     
                                     var infoWindow_8 = new google.maps.InfoWindow({
                                        content: 'SOSOARES - COIMBRA<br>'+
                                        'Travessa do Boleg�o, 146 Apartado 1 3754-904 Fermentelos'+
                                        'Paulo Arede<br>'+
                                        'Telf.: +351 913 549 929<br>'+
                                        'Email: paulo.arede@sosoares.pt',
                                         });
                    
                                    google.maps.event.addListener(marker_8,'click', function(){
                                        infoWindow_8.open(map,marker_8);
                                    });
                                    
                                    var marker_9 = new google.maps.Marker({
                                        position: position_9,
                                        title : 'SOSOARES - MADEIRA',
                                        icon: 'imgs/marker.png',
                                        map: map
                                    });
                                     
                                     var infoWindow_9 = new google.maps.InfoWindow({
                                        content: 'SOSOARES - MADEIRA<br>'+
                                        'Pav. Industrial H - Plataforma 13D Zona Franca Industrial 9200-047 Cani�al - Madeira<br>'+
                                        'Marco Ornelas<br>'+
                                        'Telf.: +351 969 032 025<br>'+
                                        'Email: marco.ornelas@sosoares.pt',
                                         });
                    
                                    google.maps.event.addListener(marker_9,'click', function(){
                                        infoWindow_9.open(map,marker_9);
                                    });
                                    
                                    var marker_10 = new google.maps.Marker({
                                        position: position_10,
                                        title : 'SOSOARES - LISBOA SUL',
                                        icon: 'imgs/marker.png',
                                        map: map
                                    });
                                     
                                     var infoWindow_10 = new google.maps.InfoWindow({
                                        content: 'SOSOARES - LISBOA SUL<br>'+
                                        'E.N. Lisboa - Sintra Km 14��Apartado�156<br>'+
                                        'Pedro Guise<br>'+
                                        'Telf.: +351 936 314 418<br>'+
                                        'Email: pedro.guise@sosoares.pt',
                                         });
                    
                                    google.maps.event.addListener(marker_10,'click', function(){
                                        infoWindow_10.open(map,marker_10);
                                    });
                                    
                                    var marker_11 = new google.maps.Marker({
                                        position: position_11,
                                        title : 'SOSOARES - LISBOA NORTE',
                                        icon: 'imgs/marker.png',
                                        map: map
                                    });
                                     
                                     var infoWindow_11 = new google.maps.InfoWindow({
                                        content: 'SOSOARES - LISBOA NORTE<br>'+
                                        'E.N. Lisboa - Sintra Km 14  Apartado 156<br>'+
                                        'Jo�o Costa<br>'+
                                        'Telf.: +351 967 575 728<br>'+
                                        'Email: joao.costa@sosoares.pt',
                                         });
                    
                                    google.maps.event.addListener(marker_11,'click', function(){
                                        infoWindow_11.open(map,marker_11);
                                    });
                                    
                                    var marker_12 = new google.maps.Marker({
                                        position: position_12,
                                        title : 'SOSOARES - VILA REAL',
                                        icon: 'imgs/marker.png',
                                        map: map
                                    });
                                     
                                     var infoWindow_12 = new google.maps.InfoWindow({
                                        content: 'SOSOARES - VILA REAL<br>'+
                                        'Rua do Baldeir�o, s/n 4440 - 346�Sobrado - Valongo<br>'+
                                        'Duarte Teixeira<br>'+
                                        'Telf.: +351 936 459 326<br>'+
                                        'Email: duarte.teixeira@sosoares.pt',
                                         });
                    
                                    google.maps.event.addListener(marker_12,'click', function(){
                                        infoWindow_12.open(map,marker_12);
                                    });
                                    
                                    var marker_13 = new google.maps.Marker({
                                        position: position_13,
                                        title : 'SOSOARES - LEIRIA',
                                        icon: 'imgs/marker.png',
                                        map: map
                                    });
                                     
                                     var infoWindow_13 = new google.maps.InfoWindow({
                                        content: 'SOSOARES - MADEIRA<br>'+
                                        'Pav. Industrial H - Plataforma 13D Zona Franca Industrial 9200-047 Cani�al - Madeira<br>'+
                                        'Marco Ornelas<br>'+
                                        'Telf.: +351 969 032 025<br>'+
                                        'Email: marco.ornelas@sosoares.pt',
                                         });
                    
                                    google.maps.event.addListener(marker_13,'click', function(){
                                        infoWindow_13.open(map,marker_13);
                                    });
                
                                    setTimeout(function() {
                                        map.panTo(position);
                                    }, 1000);
                                }
                
                            }
                           
                        }                        
                        );
                        }
                }else{
                    try{
                        Ext.getCmp('mapa2').destroy();
                    }catch(e){}
               Ext.getCmp('html_pic_multi').show();
               Ext.getCmp('html_multi').show();
               Ext.getCmp('html_pic_multi').setHtml('<img style="width:100%; height:100%; position:absolute" src="'+record.get('foto')+'">');
         
             
               Ext.getCmp('html_multi').setHtml('<div style="max-width:100%" class="leaf_panel">'+
                                        '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('html')+'</p></div></div>');
                
               }
               Ext.getCmp('panel_multi').getScrollable().getScroller().scrollTo(0,0.1, false);
            }
        }
    },
     initialize: function() {
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('html_pic_multi').setHeight(Ext.Viewport.getWindowHeight()/2);
         }
         else {
            Ext.getCmp('html_pic_multi').setHeight(Ext.Viewport.getWindowHeight());
         }
       
    },
    handleOrientationChange: function(viewport, orientation, width, height){
         
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('html_pic_multi').setHeight(Ext.Viewport.getWindowHeight()/2);
         }
         else {
            Ext.getCmp('html_pic_multi').setHeight(Ext.Viewport.getWindowHeight());
         }
    }
});

Ext.define('Italbox.Viewport9', {
    extend: 'Ext.NestedList',
     xtype : 'my-viewport9',
      cls: 'pesquisa',
      id: 'works',
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
            scrollable: true,
            style: 'background-color: #04334b;',
            items: [{
                        xtype: 'carousel',
                        id: 'carousel_obras',
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
                       
                      items.push({
                        xtype: 'image',
                        src: works+picture.get('foto'),
                        style: 'background-size: 100% 100%;'
                      });
                    }})
                     Ext.getCmp('carousel_obras').setItems(items);
                    Ext.getCmp('carousel_obras').setActiveItem(0);
                    })
                    Ext.getCmp('html_obras').setHtml('<div style="max-width:100%" class="leaf_panel"><br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('descricao')+'</p></div></div>');
                    me.getDetailCard().getScrollable().getScroller().scrollTo(0,0.1, false);
                   
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
            scrollable: {
                direction: 'vertical'
            },
            html: '',
            style: 'background-color: #04334b;',
             items: [{
                        xtype: 'carousel',
                        id: 'carousel_produtos',
                    },
                    {
                     id: 'html_produtos',
                     cls: 'html_produtos',
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
                  Ext.getCmp('carousel_produtos').removeAll();
                  Ext.getCmp('html_produtos').setHtml('');
                    var items = [];
                      items.push({
                        xtype: 'image',
                        src: products+record.get('foto'),
                        style: 'background-size: 100% 93%;'
                      });
                      if (record.get('foto2') != '') {
                         items.push({
                         xtype: 'image',
                         src: products+record.get('foto2'),
                         style: 'background-size: 100% 93%;'
                      });
                      }
                       if (record.get('foto3') != '') {
                         items.push({
                         xtype: 'image',
                         src: products+record.get('foto3'),
                         style: 'background-size: 100% 93%;'
                      });
                      }
                         if (record.get('foto4') != '') {
                         items.push({
                         xtype: 'image',
                         src: products+record.get('foto4'),
                         style: 'background-size: 100% 93%;'
                      });
                      }
                      
                    Ext.getCmp('carousel_produtos').setItems(items);
                    Ext.getCmp('carousel_produtos').setActiveItem(0);
                    
                    Ext.getCmp('html_produtos').setHtml('<div style="max-width:100%" class="leaf_panel"><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('descricao')+'</p></div></div>');
                  
               me.getDetailCard().getScrollable().getScroller().scrollTo(0,0.1, false);
            }
        }
    },
     initialize: function() {
        Ext.getStore('Products_Search').on('load', function(store, records) {
            if (records.length == 0) {
                Ext.getCmp('search').getActiveItem().setHtml('<div class="lista-pesquisa" style="color: #FFF; margin: 15px;">Sem resultados</div>');
            }
        });
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('carousel_produtos').setHeight(Ext.Viewport.getWindowHeight()/1.7);
         }
         else {
            Ext.getCmp('carousel_produtos').setHeight(Ext.Viewport.getWindowHeight()*1.4);
         }
       
    },
    handleOrientationChange: function(viewport, orientation, width, height){
         
         if (Ext.Viewport.getOrientation() === 'portrait') {
            Ext.getCmp('carousel_produtos').setHeight(Ext.Viewport.getWindowHeight()/1.7);
         }
         else {
            Ext.getCmp('carousel_produtos').setHeight(Ext.Viewport.getWindowHeight()*1.4);
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
    ],
    listeners: [
    {
        element: 'element',
        delegate: '#start-vidro',
        event: 'tap',
        fn: function() {
            Ext.getCmp('menuI').hide();
            Ext.getCmp('back').show();
            Ext.getCmp('open-menu').show();
            Ext.getCmp('open-menu2').show();
            Ext.getCmp('footer').hide();
            Ext.getCmp('favorites').setActiveItem(1);
            Ext.getCmp('favorites').show();
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
            Ext.getCmp('open-menu2').show();
            Ext.getCmp('footer').hide();
            Ext.getCmp('favorites').setActiveItem(0);
            Ext.getCmp('favorites').show();
        }
    },
     {
        element: 'element',
        delegate: '#start-extrusao',
        event: 'tap',
        fn: function() {
            Ext.getCmp('menuI').hide();
            Ext.getCmp('back').show();
            Ext.getCmp('open-menu').show();
            Ext.getCmp('open-menu2').show();
            Ext.getCmp('footer').hide();
            Ext.getCmp('favorites').setActiveItem(2);
            Ext.getCmp('favorites').show();
        }
    },
    {
        element: 'element',
        delegate: '#start-tratamento',
        event: 'tap',
        fn: function() {
            Ext.getCmp('menuI').hide();
            Ext.getCmp('back').show();
            Ext.getCmp('open-menu').show();
            Ext.getCmp('open-menu2').show();
            Ext.getCmp('footer').hide();
            Ext.getCmp('favorites').setActiveItem(3);
            Ext.getCmp('favorites').show();
        }
    },
    ]
    },
    initialize: function() {
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
       
    },
    handleOrientationChange: function(viewport, orientation, width, height){
         
        
    }
});

Ext.define('Italbox.Viewport5', {
    extend: 'Ext.tab.Panel',
    xtype : 'my-viewport5',
     plugins: 'swipetabs',
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
                            id: 'sosoares',
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
                  
                    ],
                    
                     listeners: [
                        {
                            element: 'element',
                            delegate: '#sosoares',
                            event: 'tap',
                            fn: function() {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    Ext.getCmp('multi').setStore('Group_'+idioma);
                                   Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-sosoares" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Grupo Sosoares</span>');
                                    Ext.getCmp('multi').show();
                               
                            }
                        },
                        {
                            element: 'element',
                            delegate: '#produtos_caixilharia',
                            event: 'tap',
                            fn: function() {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    Ext.getStore('Products_Caixilharia').getProxy().setExtraParams({
                                        lang: idioma
                                    });
                                    try{
                                        Ext.getCmp('products').getActiveItem().setHtml('');
                                    }
                                    catch(e){}
                                    Ext.getStore('Products_Caixilharia').on('load', function(store, records) {
                                        if (records.length == 0) {
                                            Ext.getCmp('products').getActiveItem().setHtml('<div class="lista-pesquisa" style="color: #FFF; margin: 15px;">'+Ext.getStore('Languages').getById(idioma).get('offline')+'</div>');
                                        }
                                    });
                                    Ext.getStore('Products_Caixilharia').load();
                                    Ext.getCmp('products').setStore('Products_Caixilharia');
                                    Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_caixilharia" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('produtos')+'</span>');
                                    Ext.getCmp('products').show();
                            }
                        },
                         {
                            element: 'element',
                            delegate: '#obras_caixilharia',
                            event: 'tap',
                            fn: function() {
                               
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    Ext.getStore('Works').getProxy().setExtraParams({
                                        lang: idioma
                                    });
                                    try{
                                        Ext.getCmp('works').getActiveItem().setHtml('');
                                    }
                                    catch(e){}
                                    Ext.getStore('Works').on('load', function(store, records) {
                                        if (records.length == 0) {
                                            Ext.getCmp('works').getActiveItem().setHtml('<div class="lista-pesquisa" style="color: #FFF; margin: 15px;">'+Ext.getStore('Languages').getById(idioma).get('offline')+'</div>');
                                        }
                                    });
                                    Ext.getStore('Works').load();
                                    Ext.getCmp('works').setStore('Works');
                                    Ext.getCmp('works_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-obras" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('obras')+'</span>');
                                    Ext.getCmp('works').show();
                              
                            }
                        },
                         {
                            element: 'element',
                            delegate: '#servicos_caixilharia',
                            event: 'tap',
                            fn: function() {
                              
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    Ext.getCmp('multi').setStore('Services_Caixilharia_'+idioma);
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-servicos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('services')+'</span>');
                                    Ext.getCmp('multi').show();
                            }
                        },
                    ],
                },
                {
                    layout : 'fit',
                    cls: 'tabVidro',
                    iconCls: 'icon-vidro',
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
                            id: 'sosoares',
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
                            id: 'servicos_vidro',
                            flex: 1,
                            style: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
                            'background: url(imgs/icons/servicos_vidro.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        
                        }, {
                            id: 'area_tecnica',
                            flex: 1,
                            style: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
                            'background: url(imgs/icons/tecnica.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },
                        ]
                    },
                    ],
                     listeners: [
                        {
                            element: 'element',
                            delegate: '#sosoares',
                            event: 'tap',
                            fn: function() {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-sosoares" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Grupo Sosoares</span>');
                                    Ext.getCmp('multi').setStore('Group_'+idioma);
                                    Ext.getCmp('multi').show();
                               
                            }
                        },
                        {
                            element: 'element',
                            delegate: '#produtos_vidro',
                            event: 'tap',
                            fn: function() {
                               
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    Ext.getStore('Products_Vidro').getProxy().setExtraParams({
                                        lang: idioma
                                    });
                                    try{
                                        Ext.getCmp('products').getActiveItem().setHtml('');
                                    }
                                    catch(e){}
                                    Ext.getStore('Products_Vidro').on('load', function(store, records) {
                                        if (records.length == 0) {
                                            Ext.getCmp('products').getActiveItem().setHtml('<div class="lista-pesquisa" style="color: #FFF; margin: 15px;">'+Ext.getStore('Languages').getById(idioma).get('offline')+'</div>');
                                        }
                                    });
                                    Ext.getStore('Products_Vidro').load();
                                     Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_vidro" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('produtos')+'</span>');
                                    Ext.getCmp('products').setStore('Products_Vidro');
                                    Ext.getCmp('products').show();
                            }
                        },
                        {
                            element: 'element',
                            delegate: '#servicos_vidro',
                            event: 'tap',
                            fn: function() {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    Ext.getCmp('multi').setStore('Services_Vidro_'+idioma);
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-servicos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('services')+'</span>');
                                    Ext.getCmp('multi').show();
                               
                            }
                        },
                        {
                            element: 'element',
                            delegate: '#area_tecnica',
                            event: 'tap',
                            fn: function() {
                                   Ext.getCmp('favorites').hide();
                                   Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-tecnica" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('area')+'</span>');
                                    Ext.getCmp('html_pic_treatment').setHtml('<img style="width:100%; height:100%; position:absolute" src="imgs/sosoares.jpg">');
                                    Ext.getCmp('html_pic_treatment').hide();
                                    Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_4').get('html'));
                                    Ext.getCmp('html_treatment').setCls('4');
                                    Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                    Ext.getCmp('treatment').show();
                            }
                        }
                    ],
                },
                {
                  
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
                            id: 'sosoares',
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
                            id: 'servicos_extrusao',
                            flex: 1,
                            style: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
                            'background: url(imgs/icons/servicos_extrusao.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        
                        }, {
                            id: 'apoio_cliente',
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
                            delegate: '#sosoares',
                            event: 'tap',
                            fn: function() {
                              
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-sosoares" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Grupo Sosoares</span>');
                                    Ext.getCmp('multi').setStore('Group_'+idioma);
                                    Ext.getCmp('multi').show();
                               
                            }
                        },
                        {
                            element: 'element',
                            delegate: '#produtos_extrusao',
                            event: 'tap',
                            fn: function() {
                                
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    Ext.getStore('Products_Extrusao').getProxy().setExtraParams({
                                        lang: idioma
                                    });
                                    try{
                                        Ext.getCmp('products').getActiveItem().setHtml('');
                                    }
                                    catch(e){}
                                    Ext.getStore('Products_Extrusao').on('load', function(store, records) {
                                        if (records.length == 0) {
                                            Ext.getCmp('products').getActiveItem().setHtml('<div class="lista-pesquisa" style="color: #FFF; margin: 15px;">'+Ext.getStore('Languages').getById(idioma).get('offline')+'</div>');
                                        }
                                    });
                                    Ext.getStore('Products_Extrusao').load();
                                    Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('produtos')+'</span>');
                                    Ext.getCmp('products').setStore('Products_Extrusao');
                                    Ext.getCmp('products').show();
                               
                            },
                        },
                        {
                            element: 'element',
                            delegate: '#servicos_extrusao',
                            event: 'tap',
                            fn: function() {
                                
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    Ext.getCmp('multi').setStore('Services_Extrusao_'+idioma);
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-servicos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('services')+'</span>');
                                    Ext.getCmp('multi').show();
                              
                            }
                        },
                        {
                            element: 'element',
                            delegate: '#apoio_cliente',
                            event: 'tap',
                            fn: function() {
                                   Ext.getCmp('favorites').hide();
                                   Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-apoio" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('apoio')+'</span>');
                                    Ext.getCmp('html_pic_treatment').setHtml('<img style="width:100%; height:100%; position:absolute" src="imgs/sosoares.jpg">');
                                    Ext.getCmp('html_pic_treatment').hide();
                                    Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_5').get('html'));
                                    Ext.getCmp('html_treatment').setCls('5');
                                    Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                    Ext.getCmp('treatment').show();
                            }
                        }
                    ],
                },
                {
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
                            id: 'sosoares',
                            flex: 1,
                            style: 'margin:20px 10px 10px 20px;'+
                            'border-radius:5px; border-bottom: 7px solid #05698e;'+
                            'background: url(imgs/icons/sosoares.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },
                        {
                            id: 'tratamento-lacagem',
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
                            id: 'tratamento-anodizacao',
                            flex: 1,
                            style: 'margin:10px 10px 20px 20px;border-bottom: 7px solid #05698e;border-radius:5px;'+
                            'background: url(imgs/icons/anodizacao.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        
                        }, {
                            id: 'tratamento-imitacao',
                            flex: 1,
                            style: 'margin:10px 20px 20px 10px;border-bottom: 7px solid #05698e; border-radius:5px;'+
                            'background: url(imgs/icons/imitacao.png) no-repeat, rgba(16, 124, 164, .8);'+
                            'background-size: contain; background-position: center;',
                        },
                        ]
                    },
                    ],
                    listeners: [
                        {
                            element: 'element',
                            delegate: '#sosoares',
                            event: 'tap',
                            fn: function() {
                               
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-sosoares" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Grupo Sosoares</span>');
                                    Ext.getCmp('html_pic_treatment').show();
                                    Ext.getCmp('multi').setStore('Group_'+idioma);
                                    Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                    Ext.getCmp('multi').show();
                            }
                        },
                         {
                            element: 'element',
                            delegate: '#tratamento-lacagem',
                            event: 'tap',
                            fn: function() {
                               
                                     Ext.getCmp('favorites').hide();
                                   Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-lacagem" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('lacagem')+'</span>');
                                    Ext.getCmp('html_pic_treatment').setHtml('<img style="width:100%; height:100%; position:absolute" src="imgs/lacagem.jpg">');
                                 
                                    Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_1').get('html'));
                                    Ext.getCmp('html_treatment').setCls('1');
                                    Ext.getCmp('html_pic_treatment').show();
                                    Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                    Ext.getCmp('treatment').show();
                               
                            }
                        },
                        {
                            element: 'element',
                            delegate: '#tratamento-anodizacao',
                            event: 'tap',
                            fn: function() {
                                
                                     Ext.getCmp('favorites').hide();
                                   
                                     Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-anodizacao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('anodizacao')+'</span>');
                                   
                                     Ext.getCmp('html_pic_treatment').setHtml('<img style="width:100%; height:100%; position:absolute" src="imgs/anodizacao.jpg">');
                                   
                                    Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_2').get('html'));
                                    Ext.getCmp('html_treatment').setCls('2');
                                    Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                    Ext.getCmp('treatment').show();
                               
                            }
                        },
                        {
                            element: 'element',
                            delegate: '#tratamento-imitacao',
                            event: 'tap',
                            fn: function() {
                                
                                    Ext.getCmp('favorites').hide();
                                  
                                    Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-imitacao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('madeira')+'</span>');
                                  
                                    Ext.getCmp('html_pic_treatment').setHtml('<img style="width:100%; height:100%; position:absolute" src="imgs/imitacao_madeira.jpg">');
                                   
                                    Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_3').get('html'));
                                    Ext.getCmp('html_treatment').setCls('3');
                                    Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                    Ext.getCmp('treatment').show();
                              
                            }
                        },
                        
                    ],
                },
                
            ],   
    }
});


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
            zIndex: 50,
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
                        if (typeof Ext.getCmp('list-menu-language') != 'undefined') {
                        
                               if (Ext.getCmp('list-menu-language').getBackButton()._hidden === false) {
                                   Ext.getCmp('list-menu-language').onBackTap();
                               }
                               else{
                                   Ext.getCmp('list-menu-language').destroy();
                                   Ext.getCmp('back').hide();
                                   panel_language = undefined;
                                 
                               }
                         }else if (typeof Ext.getCmp('list-help') != 'undefined') {
                                    Ext.getCmp('list-help').destroy();
                                    Ext.getCmp('back').hide();
                                    panel_help = undefined;
                                  
                                
                        }else if (typeof Ext.getCmp('list-menu') != 'undefined') {
                         
                                if (Ext.getCmp('list-menu').getBackButton()._hidden === false) {
                                    Ext.getCmp('list-menu').onBackTap();
                                }
                                else{
                                    Ext.getCmp('list-menu').destroy();
                                    Ext.getCmp('open-menu').setStyle('color:#00aeef');
                                    panel_list_menu = undefined;
                                   
                                }
                          
                        }else if (Ext.getCmp('multi')._hidden === false && Ext.getCmp('multi').getBackButton()._hidden === false){
                            Ext.getCmp('multi').onBackTap();
                        }else if (Ext.getCmp('products')._hidden === false && Ext.getCmp('products').getBackButton()._hidden === false){
                            Ext.getCmp('products').onBackTap();
                          }else if (Ext.getCmp('search')._hidden === false && Ext.getCmp('search').getBackButton()._hidden === false){
                            Ext.getCmp('search').onBackTap();     
                         }else if (Ext.getCmp('works')._hidden === false && Ext.getCmp('works').getBackButton()._hidden === false){
                            Ext.getCmp('works').onBackTap();
                         }else if (Ext.getCmp('products')._hidden === false && Ext.getCmp('products').getBackButton( )._hidden === true || Ext.getCmp('works')._hidden === false && Ext.getCmp('works').getBackButton( )._hidden === true || Ext.getCmp('multi')._hidden === false && Ext.getCmp('multi').getBackButton( )._hidden === true || Ext.getCmp('search')._hidden === false && Ext.getCmp('search').getBackButton( )._hidden === true || Ext.getCmp('treatment')._hidden === false){
                            Ext.getCmp('treatment').hide();
                            Ext.getCmp('menuI').hide();
                            Ext.getCmp('footer').hide();
                            Ext.getCmp('products').hide();
                             Ext.getCmp('works').hide();
                             Ext.getCmp('multi').hide();
                             Ext.getCmp('search').hide();
                             Ext.getCmp('searchBox').setValue('');
                             Ext.getCmp('favorites').show();
                             try{
                                Ext.getCmp('mapa2').destroy();
                            }catch(e){}
                        }
                        else {
                            Ext.getCmp('favorites').hide();
                            Ext.getCmp('menuI').show();
                            Ext.getCmp('footer').show();
                            Ext.getCmp('open-menu').hide();
                            Ext.getCmp('open-menu2').hide();
                            Ext.getCmp('back').hide();
                        }
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
                        float: true,
                        zIndex: 45,
                        title: 'Menu',
                        displayField: 'text',
                        store: 'Menu_'+idioma,
                        useToolbar: false,
                        showAnimation:  
                        {
                            type: 'slideIn',
                            direction: 'left',
                        },  
                        listConfig:{
                        cls: 'menu-sosoares',
                        itemTpl:  '<div class="lista-pesquisa">'+
                            '<i class="{icon}" style="font-size:27px; color:#FFF; float:left; margin-right:10px;"></i><i class="icon-front front"></i></img>' +
                            '<div> <span>{text}</span></div>' +
                            '</div>',
                        emptyText: '<div class="lista-pesquisa">Sem resultados</div>',
                        },
                        detailCard:{
                            xtype: 'panel',
                            layout: 'fit',
                            html: '',
                            style: 'background-color: #04334b;',
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
                                if (record.get('id') == 3) {
                                    try{
                                    Ext.getCmp('mapa').show();
                                    }catch(e){}
                                    me.getDetailCard().setHtml('');
                                    me.getDetailCard().setScrollable(false);
                                
                                    if (typeof Ext.getCmp('mapa') === 'undefined') {
                                    me.getDetailCard().add(
                                        {
                                        id: 'mapa',
                                        xtype: 'map',
                                            mapOptions : {
                                            center : new google.maps.LatLng(39.402244,-8.22876),  //Portugal
                                            zoom : 5,
                                            mapTypeId : google.maps.MapTypeId.ROADMAP,
                                            navigationControl: true,
                                            navigationControlOptions: {
                                                style: google.maps.NavigationControlStyle.DEFAULT
                                            }
                                        },
                                        mapListeners: {
                                            dragstart: function() {
                                                var segmented = Ext.getCmp('segmented'),
                                                    pressedButtons = segmented.getPressedButtons().slice(),
                                                    trackingIndex = pressedButtons.indexOf(trackingButton);
                                                if (trackingIndex != -1) {
                                                    pressedButtons.splice(trackingIndex, 1);
                                                    segmented.setPressedButtons(pressedButtons);
                                                }
                                            }
                                        },
                            
                                        listeners: {
                                            maprender: function(comp, map) {
                                                 var marker = new google.maps.Marker({
                                                    position: position13,
                                                    title : 'SOSOARES - VIANA DO CASTELO',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                 
                                                 var infoWindow = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - VIANA DO CASTELO<br>'+
                                                    'Lugar da Bandeira - Afife 4900-012 Viana do Castelo<br>'+
                                                    'Telf.: 258 981 299  |   Fax: 258 981 274<br>'+
                                                    'Email: sosoares.viana@sosoares.pt',
                                                });
                                
                                                google.maps.event.addListener(marker,'click', function(){
                                                    infoWindow.open(map,marker);
                                                });
                                                
                                                 var marker2 = new google.maps.Marker({
                                                    position: position2,
                                                    title : 'SOSOARES - SERVI�OS T�CNICOS E COMERCIAIS',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow2 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - SERVI�OS T�CNICOS E COMERCIAIS<br>'+
                                                    'Rua do Campo Alegre, 474 4150-170 Porto<br>'+
                                                    'Telf.: 226 096 709  |   Fax: 226 005 642<br>'+
                                                    'Email: comercial@sosoares.pt |   gabinete.tecnico@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker2,'click', function(){
                                                    infoWindow2.open(map,marker2);
                                                });
                                                
                                                 var marker3 = new google.maps.Marker({
                                                    position: position3,
                                                    title : 'SOSOARES - VALONGO',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow3 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - VALONGO<br>'+
                                                    'Rua do Baldeir�o, s/n 4440 - 346 Sobrado - Valongo<br>'+
                                                    'Telf.: 224 119 230  |   Fax: 224 119 231<br>'+
                                                    'Email: geral@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker3,'click', function(){
                                                    infoWindow3.open(map,marker3);
                                                });
                                                
                                                 var marker4 = new google.maps.Marker({
                                                    position: position4,
                                                    title : 'SOSOARES - LEIRIA',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow4 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - LEIRIA<br>'+
                                                    'Armaz�m n�1 E.N.8 - Ch�o da Feira, 9 2480-060 Calvaria de Cima<br>'+
                                                    'Telf.: 244 481 136  |   Fax: 244 482 186 <br>'+
                                                    'Email: sosoares.leiria@sosoares.pt<br>'
                                                });
                                
                                                google.maps.event.addListener(marker4,'click', function(){
                                                    infoWindow4.open(map,marker4);
                                                });
                                                
                                                var marker5 = new google.maps.Marker({
                                                    position: position5,
                                                    title : 'SOSOARES - VISEU',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow5 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - VISEU<br>'+
                                                    'Zona Industrial de Abraveses 3515-157 Viseu<br>'+
                                                    'Telf.: 232 459 731  |   Fax: 232 450 623<br>'+
                                                    'Email: sosoares.viseu@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker5,'click', function(){
                                                    infoWindow5.open(map,marker5);
                                                });
                                                
                                                var marker6 = new google.maps.Marker({
                                                    position: position6,
                                                    title : 'SOSOARES - F�BR. TRANSF. VIDRO',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow6 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - F�BR. TRANSF. VIDRO<br>'+
                                                    'Zona Ind. Coimbr�es, Lt. 101/102 S. Jo�o de Lourosa - 3500-618  VISEU<br>'+
                                                    'Telf.: 232 458 567  |   Fax: 232 458 566<br>'+
                                                    'Email: geral.vidro@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker6,'click', function(){
                                                    infoWindow6.open(map,marker6);
                                                });
                                                
                                                 var marker7 = new google.maps.Marker({
                                                    position: position7,
                                                    title : 'SOSOARES - LACAGEM',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow7 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - LACAGEM<br>'+
                                                    'Zona Ind. Coimbr�es, Lt.41 3500-886 S.Jo�o Lourosa - Viseu<br>'+
                                                    'Telf.: 232 479 448  |   Fax: 232 478 643<br>'+
                                                    'Email: sosoares.viseu@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker7,'click', function(){
                                                    infoWindow7.open(map,marker7);
                                                });
                                                
                                                var marker8 = new google.maps.Marker({
                                                    position: position8,
                                                    title : 'SOSOARES - ALMANCIL - FARO',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow8 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - ALMANCIL - FARO<br>'+
                                                    'S�tio do Vale da Venda EN 125, Km 98.8 8135-037 Almancil<br>'+
                                                    'Telf.: (indispon�vel)<br>'+
                                                    'Email: sosoares.faro@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker8,'click', function(){
                                                    infoWindow8.open(map,marker8);
                                                });
                                                
                                                var marker9 = new google.maps.Marker({
                                                    position: position9,
                                                    title : 'METALFER - METAL�RGICA DE FERMENTELOS, S.A.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow9 = new google.maps.InfoWindow({
                                                    content: 'METALFER - METAL�RGICA DE FERMENTELOS, S.A.<br>'+
                                                    'Travessa do Boleg�o, 146 Apartado1 3754-904 Fermentelos<br>'+
                                                    'Telf.: 234 729 740  |   Fax: 234 729 741<br>'+
                                                    'Email: metalfer@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker9,'click', function(){
                                                    infoWindow9.open(map,marker9);
                                                });
                                                
                                                var marker10 = new google.maps.Marker({
                                                    position: position10,
                                                    title : 'ALFA SUL - ALUM�NIOS DO SUL, LDA',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow10 = new google.maps.InfoWindow({
                                                    content: 'ALFA SUL - ALUM�NIOS DO SUL, LDA<br>'+
                                                    'E.N. Lisboa - Sintra Km 14 Apartado 156 2726-936 Mem Martins<br>'+
                                                    'Telf.: 219 265 090  |   Fax: 219 256 098<br>'+
                                                    'Email: alfa.sul@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker10,'click', function(){
                                                    infoWindow10.open(map,marker10);
                                                });
                                                
                                                var marker11 = new google.maps.Marker({
                                                    position: position11,
                                                    title : 'PERFISOEIRAS - SOC. EXTRUS�O ALUM�NIO E COBRE, SA.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow11 = new google.maps.InfoWindow({
                                                    content: 'PERFISOEIRAS - SOC. EXTRUS�O ALUM�NIO E COBRE, SA.<br>'+
                                                    'Rua da Col�nia - Quinta da Cardosa Apartado 214 - Abrunheira 2711-952 Sintra<br>'+
                                                    'Telf.: 219 156 660  |   Fax: 219 156 661<br>'+
                                                    'Email: perfis.oeiras@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker11,'click', function(){
                                                    infoWindow11.open(map,marker11);
                                                });
                                                
                                                var marker12 = new google.maps.Marker({
                                                    position: position12,
                                                    title : 'ALULIDER - IND�STRIA E COM�RCIO DE ALUM�NIO, LDA',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow12 = new google.maps.InfoWindow({
                                                    content: 'ALULIDER - IND�STRIA E COM�RCIO DE ALUM�NIO, LDA'+
                                            'Pav. Industrial H - Plataforma 13D Zona Franca Industrial 9200-047 Cani�al - Madeira'+
                                            'Telf.: 291 960 488 / 291 960 494  |   Fax: 291 960 497'+
                                            'Email: Alulider@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker12,'click', function(){
                                                    infoWindow12.open(map,marker12);
                                                });
                                                
                                                var marker13 = new google.maps.Marker({
                                                    position: position,
                                                    title : 'INTERALUM�NIOS - SOC. COMERCIALIZA��O ALUM�NIOS, LDA.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow13 = new google.maps.InfoWindow({
                                                    content: 'INTERALUM�NIOS - SOC. COMERCIALIZA��O ALUM�NIOS, LDA.<br>'+
                                                    'Alto da Venda Nova, 68 B - Apartado 251 2304-909 Tomar<br>'+
                                                    'Telf.: 249 301 493  |   Fax: 249 301 628<br>'+
                                                    'Email: interaluminios@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker13,'click', function(){
                                                    infoWindow13.open(map,marker13);
                                                });
                                                
                                                var marker14 = new google.maps.Marker({
                                                    position: position14,
                                                    title : 'PEOVIS - COM�RCIO DE ALUM�NIOS, LDA.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow14 = new google.maps.InfoWindow({
                                                    content: 'PEOVIS - COM�RCIO DE ALUM�NIOS, LDA.<br>'+
                                                    'Manhosa - Ranhados 3500-631 Viseu<br>'+
                                                    'Telf.: 232 461 005  |   Fax: 232 469 346<br>'+
                                                    'Email: peovis@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker14,'click', function(){
                                                    infoWindow14.open(map,marker14);
                                                });
                            
                                                setTimeout(function() {
                                                    map.panTo(position);
                                                }, 1000);
                                            }
                            
                                        }
                                       
                                    }                        
                                    );
                                    }
                                }else if(record.get('id') == 10 || record.get('id') == 11 || record.get('id') == 12 || record.get('id') == 13  ){
                                    if (record.get('id') == 10) {
                                        var valor = { id_setting: '1', lang: '1'};
                                    }
                                    else if (record.get('id') == 11) {
                                        var valor = { id_setting: '1', lang: '2'};
                                    }
                                    else if (record.get('id') == 12) {
                                        var valor = { id_setting: '1', lang: '3'};
                                    }
                                    else if (record.get('id') == 13) {
                                        var valor = { id_setting: '1', lang: '4'};
                                    }
                                    Ext.getStore('Settings').getAt(0).set(valor);
                                    Ext.getStore('Settings').sync();
                                    idioma = Ext.getStore('Settings').getAt(0).get('lang');
                                    Ext.getCmp('start-caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('start_caixilharia'));
                                    Ext.getCmp('start-vidro').setStyle(Ext.getStore('Languages').getById(idioma).get('start_vidro'));
                                    Ext.getCmp('start-extrusao').setStyle(Ext.getStore('Languages').getById(idioma).get('start_extrusao'));
                                    Ext.getCmp('start-tratamento').setStyle(Ext.getStore('Languages').getById(idioma).get('start_tratamento'));           
                                    Ext.getCmp('produtos_caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('produtos_caixilharia'));
                                    Ext.getCmp('obras_caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('obras_caixilharia'));
                                    Ext.getCmp('servicos_caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('servicos_caixilharia'));
                                    Ext.getCmp('produtos_vidro').setStyle(Ext.getStore('Languages').getById(idioma).get('produtos_vidro'));
                                    Ext.getCmp('servicos_vidro').setStyle(Ext.getStore('Languages').getById(idioma).get('servicos_vidro'));
                                    Ext.getCmp('area_tecnica').setStyle(Ext.getStore('Languages').getById(idioma).get('area_tecnica'));
                                    Ext.getCmp('produtos_extrusao').setStyle(Ext.getStore('Languages').getById(idioma).get('produtos_extrusao'));
                                    Ext.getCmp('servicos_extrusao').setStyle(Ext.getStore('Languages').getById(idioma).get('servicos_extrusao'));
                                    Ext.getCmp('apoio_cliente').setStyle(Ext.getStore('Languages').getById(idioma).get('apoio_cliente'));
                                    Ext.getCmp('tratamento-lacagem').setStyle(Ext.getStore('Languages').getById(idioma).get('tratamento_lacagem'));
                                    Ext.getCmp('tratamento-anodizacao').setStyle(Ext.getStore('Languages').getById(idioma).get('tratamento_anodizacao'));
                                    Ext.getCmp('tratamento-imitacao').setStyle(Ext.getStore('Languages').getById(idioma).get('tratamento_imitacao'));
                                    Ext.getCmp('open-menu4').setText(Ext.getStore('Languages').getById(idioma).get('idiomas'));
                                    Ext.getCmp('open-menu5').setText(Ext.getStore('Languages').getById(idioma).get('ajuda'));
                                    Ext.getCmp('searchBox').setPlaceHolder(Ext.getStore('Languages').getById(idioma).get('search'));
                                    
                                    if (Ext.getCmp('search')._hidden == false) {
                                       Ext.getStore('Products_Search').getProxy().setExtraParams({
                                        lang: idioma,
                                        search: ''
                                        });
                                       
                                        Ext.getStore('Products_Search').load();
                                        Ext.getCmp('search').setStore('Products_Search');
                                   }
                                  
                                   if(Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-group_1-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-group_2-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-group_3-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-group_4-1'){
                                        //Ext.getCmp('multi').goToNode( Ext.getCmp('multi').getStore().getRoot() );
                                        Ext.getCmp('multi').onBackTap();
                                         Ext.getCmp('multi').onBackTap();
                                        Ext.Function.defer(function(){
                                             Ext.getCmp('multi').setStore('Group_'+idioma);
                                        }, 100);
                                   }else if (Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_caixilharia_1-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_caixilharia_2-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_caixilharia_3-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_caixilharia_4-1')
                                   {
                                        //Ext.getCmp('multi').goToNode( Ext.getCmp('multi').getStore().getRoot() );
                                        Ext.getCmp('multi').onBackTap();
                                        Ext.getCmp('multi').onBackTap();
                                        Ext.Function.defer(function(){
                                             Ext.getCmp('multi').setStore('Services_Caixilharia_'+idioma);
                                        }, 100);
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-servicos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('services')+'</span>');
                                   }else if (Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_vidro_1-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_vidro_2-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_vidro_3-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_vidro_4-1')
                                   {
                                        //Ext.getCmp('multi').goToNode( Ext.getCmp('multi').getStore().getRoot() );
                                        Ext.getCmp('multi').onBackTap();
                                        Ext.getCmp('multi').onBackTap();
                                        Ext.Function.defer(function(){
                                             Ext.getCmp('multi').setStore('Services_Vidro_'+idioma);
                                        }, 100);
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-servicos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('services')+'</span>');
                                   }else if (Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_extrusao_1-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_extrusao_2-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_extrusao_3-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_extrusao_4-1')
                                   {
                                        //Ext.getCmp('multi').goToNode( Ext.getCmp('multi').getStore().getRoot() );
                                        Ext.getCmp('multi').onBackTap();
                                        Ext.getCmp('multi').onBackTap();
                                        Ext.Function.defer(function(){
                                            Ext.getCmp('multi').setStore('Services_Extrusao_'+idioma);
                                        }, 100);
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-servicos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('services')+'</span>');
                                   }
                                   
                                   if ((Ext.getCmp('html_treatment').getCls()[0]) == ('1')) {
                                        Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_1').get('html'));
                                        Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-lacagem" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('lacagem')+'</span>');
                                        Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                   }else if ((Ext.getCmp('html_treatment').getCls()[0]) == '2') {
                                        Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_2').get('html'));
                                         Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-anodizacao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('anodizacao')+'</span>');
                                        Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                   }else if ((Ext.getCmp('html_treatment').getCls()[0]) == '3') {
                                        Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_3').get('html'));
                                        Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-imitacao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('madeira')+'</span>');
                                        Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                   }else if ((Ext.getCmp('html_treatment').getCls()[0]) == '4') {
                                        Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_4').get('html'));
                                         Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-tecnica" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('area')+'</span>');
                                        Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                    }else if ((Ext.getCmp('html_treatment').getCls()[0]) == '5') {
                                        Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_5').get('html'));
                                        Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-apoio" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('apoio')+'</span>');
                                        Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                   }
                                   
                                   if (Ext.getCmp('works')._hidden == false) {
                                       //Ext.getCmp('works').goToNode( Ext.getCmp('works').getStore().getRoot() );
                                        Ext.getCmp('works').onBackTap();
                                        Ext.getCmp('works').onBackTap();
                                        Ext.getStore('Works').getProxy().setExtraParams({
                                            lang: idioma
                                        });
                                         Ext.Function.defer(function(){
                                             Ext.getCmp('works').setStore('Works');
                                        }, 100);
                                         Ext.getStore('Works').load();
                                        Ext.getCmp('works_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-obras" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('obras')+'</span>');
                                   
                                   }
                                   
                                if (Ext.getCmp('products')._hidden == false) {
                                    
                                   if (Ext.getCmp('products').getStore()._storeId == 'Products_Caixilharia'){
                                        //console.dir(Ext.getCmp('products').getStore().getRoot());
                                         Ext.getCmp('products').onBackTap();
                                         Ext.getCmp('products').onBackTap();
                                        Ext.getStore('Products_Caixilharia').getProxy().setExtraParams({
                                            lang: idioma
                                        });
                                        
                                        Ext.Function.defer(function(){
                                             Ext.getCmp('products').setStore('Products_Caixilharia');
                                        }, 100);
                                        Ext.getStore('Products_Caixilharia').load();
                                        Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_caixilharia" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('produtos')+'</span>');
                                        
                                    }
                                    
                                    if(Ext.getCmp('products').getStore()._storeId == 'Products_Vidro'){
                                         Ext.getCmp('products').onBackTap();
                                         Ext.getCmp('products').onBackTap();
                                         Ext.getStore('Products_Vidro').getProxy().setExtraParams({
                                            lang: idioma
                                        });
                                       
                                         Ext.Function.defer(function(){
                                             Ext.getCmp('products').setStore('Products_Vidro');
                                        }, 100);
                                        Ext.getStore('Products_Vidro').load();
                                        Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_vidro" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('produtos')+'</span>');
                                    }
                                   
                                   if(Ext.getCmp('products').getStore()._storeId == 'Products_Extrusao'){
                                       
                                        Ext.getCmp('products').onBackTap();
                                        Ext.getCmp('products').onBackTap();
                                        Ext.getStore('Products_Extrusao').getProxy().setExtraParams({
                                            lang: idioma
                                        });
                                      
                                         Ext.Function.defer(function(){
                                             Ext.getCmp('products').setStore('Products_Extrusao');
                                        }, 100);
                                         Ext.getStore('Products_Extrusao').load();
                                        Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('produtos')+'</span>');
                                    
                                   }
                                   
                                   }
                                  
                                    Ext.MessageBox.override({
                                              confirm: function(title, message, fn, scope) {
                                              return this.show({
                                                  title       : Ext.getStore('Languages').getById(idioma).get('sair') || null,
                                                  message     : Ext.getStore('Languages').getById(idioma).get('exit') || null,
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
                                      Ext.getCmp('open-menu').setStyle('color:#00aeef');
                                      Ext.getCmp('list-menu').destroy();
                                      panel_list_menu = undefined;
                                    
                                }else{
                                try{
                                    Ext.getCmp('mapa').hide();
                                    }catch(e){}
                                  
                                    me.getDetailCard().setScrollable(true);
                                    me.getDetailCard().setHtml('<div style="max-width:100%" class="leaf_panel">'+
                                    '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+
                                    record.get('text')+'</h3><br><p style="color:#FFF !important;">'+
                                    record.get('html')+'</p></div></div>');
                                    me.getDetailCard().getScrollable().getScroller().scrollTo(0,0.1, false);
                                }
                          
                            }
                            
                        },
                        initialize: function() {
                            this.callParent(arguments);
                            this.getHideAnimation().on({
                                animationend: this.destroy,
                                scope: this
                            });
                        }
                   
                        });
                        panel_list_menu.show();
                        panel_list_menu.on('hide', function() {
                           panel_list_menu.setDetailCard('');
                           Ext.getCmp('menu_toolbar').destroy();
                           try{
                           Ext.getCmp('mapa').destroy();
                           }catch(e){}
                           panel_list_menu.destroy();
                           panel_list_menu = undefined;
                           Ext.getCmp('open-menu').setStyle('color:#00aeef');
                        });     
                       }else{
                            Ext.getCmp('list-menu').destroy();
                            Ext.getCmp('open-menu').setStyle('color:#00aeef');
                            panel_list_menu = undefined;
                           
                       }
                     }, 
                },
                {
                    align: 'right',
                    ui:      'plain',
                    xtype: 'button',
                    
                    style: 'color: #00aeef',
                    hidden: true,
                    id: 'open-menu2',
                    cls: 'open-menu2 icon-search',
                    handler: function () {
                       /*if (connect === 1) {
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
                            Ext.getCmp('back').show();*/
                            if (Ext.getCmp('search')._hidden == false && typeof panel_list_menu === 'undefined') {
                                Ext.getCmp('treatment').hide();
                                Ext.getCmp('menuI').hide();
                                Ext.getCmp('footer').hide();
                                Ext.getCmp('products').hide();
                                Ext.getCmp('works').hide();
                                Ext.getCmp('multi').hide();
                                Ext.getCmp('search').hide();
                                Ext.getCmp('searchBox').setValue('');
                                Ext.getCmp('favorites').show();
                            }else{
                                Ext.getCmp('menuI').hide();
                                Ext.getCmp('footer').hide();
                                Ext.getCmp('products').hide();
                                Ext.getCmp('works').hide();
                                Ext.getCmp('multi').hide();
                                Ext.getCmp('favorites').hide();
                                try{
                                   Ext.getCmp('mapa2').destroy();
                               }catch(e){}
                                Ext.getStore('Products_Search').getProxy().setExtraParams({
                                           lang: idioma,
                                           search: ''
                                       });
                                      
                                       Ext.getStore('Products_Search').load();
                                       Ext.getCmp('search').setStore('Products_Search');
                               Ext.getCmp('search').show();
                               Ext.getCmp('open-menu2').setStyle('color:#FFF');
                            }
                        /*}
                        else{
                            Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_search'), Ext.emptyFn);
                        }*/
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
                    handler: function () {
                         if (typeof panel_language === 'undefined')  {
                        Ext.getCmp('back').show();
                        panel_language = Ext.Viewport.add({
                        xtype : 'nestedlist',
                        id:'list-menu-language',
                        float: true,
                        title: 'Idiomas',
                        displayField: 'text',
                        store: 'Menu_Language',
                        useToolbar: false,
                        zIndex: 45,
                        showAnimation:  
                        {
                            type: 'slideIn',
                            direction: 'left',
                        },  
                        listConfig:{
                        cls: 'menu-sosoares',
                        itemTpl:  '<div class="lista-pesquisa">'+
                            '<i class="{icon}" style="font-size:27px; color:#FFF; float:left; margin-right:10px;"></i><i class="icon-front front"></i></img>' +
                            '<div> <span>{text}</span></div>' +
                            '</div>',
                        emptyText: '<div class="lista-pesquisa">Sem resultados</div>',
                        },
                        items: [
                               {
                               xtype: 'toolbar',
                               docked: 'top',
                               cls: 'barra-menu',
                               zIndex: 50,
                               id: 'language_toolbar',
                               html: Ext.getStore('Languages').getById(idioma).get('language_toolbar'),
                               }],
                        listeners: {
                            leafitemtap: function(me, list, index, target, record) {
                                    if (record.get('id') == 10) {
                                        
                                        var valor = { id_setting: '1', lang: '1'};
                                        Ext.getStore('Settings').getAt(0).set(valor);
                                        Ext.getStore('Settings').sync();
                                        idioma = Ext.getStore('Settings').getAt(0).get('lang');
                                    }
                                    else if (record.get('id') == 11) {
                                        
                                        var valor = { id_setting: '1', lang: '2'};
                                        Ext.getStore('Settings').getAt(0).set(valor);
                                        Ext.getStore('Settings').sync();
                                        idioma = Ext.getStore('Settings').getAt(0).get('lang');
                                    }
                                    else if (record.get('id') == 12) {
                                        
                                        var valor = { id_setting: '1', lang: '3'};
                                        Ext.getStore('Settings').getAt(0).set(valor);
                                        Ext.getStore('Settings').sync();
                                        idioma = Ext.getStore('Settings').getAt(0).get('lang');
                                    }
                                    else if (record.get('id') == 13) {
                                        
                                        var valor = { id_setting: '1', lang: '4'};
                                        Ext.getStore('Settings').getAt(0).set(valor);
                                        Ext.getStore('Settings').sync();
                                        idioma = Ext.getStore('Settings').getAt(0).get('lang');
                                    }
                                    
                                    Ext.getCmp('start-caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('start_caixilharia'));
                                    Ext.getCmp('start-vidro').setStyle(Ext.getStore('Languages').getById(idioma).get('start_vidro'));
                                    Ext.getCmp('start-extrusao').setStyle(Ext.getStore('Languages').getById(idioma).get('start_extrusao'));
                                    Ext.getCmp('start-tratamento').setStyle(Ext.getStore('Languages').getById(idioma).get('start_tratamento'));           
                                    Ext.getCmp('produtos_caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('produtos_caixilharia'));
                                    Ext.getCmp('obras_caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('obras_caixilharia'));
                                    Ext.getCmp('servicos_caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('servicos_caixilharia'));
                                    Ext.getCmp('produtos_vidro').setStyle(Ext.getStore('Languages').getById(idioma).get('produtos_vidro'));
                                    Ext.getCmp('servicos_vidro').setStyle(Ext.getStore('Languages').getById(idioma).get('servicos_vidro'));
                                    Ext.getCmp('area_tecnica').setStyle(Ext.getStore('Languages').getById(idioma).get('area_tecnica'));
                                    Ext.getCmp('produtos_extrusao').setStyle(Ext.getStore('Languages').getById(idioma).get('produtos_extrusao'));
                                    Ext.getCmp('servicos_extrusao').setStyle(Ext.getStore('Languages').getById(idioma).get('servicos_extrusao'));
                                    Ext.getCmp('apoio_cliente').setStyle(Ext.getStore('Languages').getById(idioma).get('apoio_cliente'));
                                    Ext.getCmp('tratamento-lacagem').setStyle(Ext.getStore('Languages').getById(idioma).get('tratamento_lacagem'));
                                    Ext.getCmp('tratamento-anodizacao').setStyle(Ext.getStore('Languages').getById(idioma).get('tratamento_anodizacao'));
                                    Ext.getCmp('tratamento-imitacao').setStyle(Ext.getStore('Languages').getById(idioma).get('tratamento_imitacao'));
                                    Ext.getCmp('open-menu4').setText(Ext.getStore('Languages').getById(idioma).get('idiomas'));
                                    Ext.getCmp('open-menu5').setText(Ext.getStore('Languages').getById(idioma).get('ajuda'));
                                    Ext.getCmp('searchBox').setPlaceHolder(Ext.getStore('Languages').getById(idioma).get('search'));
                                        
                                        Ext.MessageBox.override({
                                              confirm: function(title, message, fn, scope) {
                                              return this.show({
                                                  title       : Ext.getStore('Languages').getById(idioma).get('sair') || null,
                                                  message     : Ext.getStore('Languages').getById(idioma).get('exit') || null,
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
                                        
                                        
                                        Ext.getCmp('back').hide();
                                        Ext.getCmp('list-menu-language').destroy();
                                        panel_language = undefined;
                                },
                          
                        },
                        initialize: function() {
                            this.callParent(arguments);
                            this.getHideAnimation().on({
                                animationend: this.destroy,
                                scope: this
                            });
                        }
                   
                        });
                        panel_language.show();
                        panel_language.on('hide', function() {
                            Ext.getCmp('back').hide();
                           panel_language.setDetailCard('');
                           Ext.getCmp('language_toolbar').destroy();
                           panel_language.destroy();
                           panel_language = undefined;
                           
                        });     
                       }else{
                          
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
                    handler: function () {
                        if (typeof panel_help === 'undefined')  {
                           Ext.getCmp('back').show();
                           panel_help = Ext.Viewport.add({
                           xtype: 'container',
                           id: 'list-help',
                           style: 'background: rgb(4, 51, 75);',
                           scrollable: {
                              direction: 'vertical',
                           },
                           float: true,
                           zIndex: 45,
                           showAnimation:  
                           {
                               type: 'slideIn',
                               direction: 'left',
                           },  
                           items: [
                               {
                               xtype: 'toolbar',
                               docked: 'top',
                               cls: 'barra-menu',
                               zIndex: 50,
                               id: 'help_toolbar',
                               html: Ext.getStore('Languages').getById(idioma).get('help_toolbar'),
                               },
                               {
                                   html  : Ext.getStore('Languages').getById(idioma).get('help_text')
                               },
                           ],   
                            initialize: function() {
                                this.callParent(arguments);
                                this.getHideAnimation().on({
                                    animationend: this.destroy,
                                    scope: this
                                });
                            }
                       
                            });
                            panel_help.show();
                            panel_help.on('hide', function() {
                                Ext.getCmp('back').hide();
                               panel_help.setDetailCard('');
                               Ext.getCmp('language_toolbar').destroy();
                              
                               panel_help.destroy();
                               panel_help = undefined;
                            });     
                       }else{
                       }
                    }
            }
            ]    
        },
        {
            xtype: 'my-viewport5',
            hidden: true,
            id: 'favorites',
            cls: 'favorites',
             plugins: 'swipetabs',
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
        {
            xtype: 'my-viewport11',
            id: 'treatment',
            cls: 'tratamento',
            hidden: true,
        },
        {
            xtype: 'my-viewport12',
            id: 'search',
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
        'Ext.ux.ImageViewer',
        'Ext.ux.touch.SwipeTabs'
    ],
  
    models : [
        'Setting',      
    ],
    stores : [
        'Settings',
        'Languages',
        'Menu_1',
        'Menu_2',
        'Menu_3',
        'Menu_4',
        'Menu_Language',
        'Group_1',
        'Group_2',
        'Group_3',
        'Group_4',
        'Products_Search',
        'Products_Caixilharia',
        'Products_Extrusao',
        'Products_Vidro',
        'Works',
        'Works_Gallery',
        'Services_Caixilharia_1',
        'Services_Caixilharia_2',
        'Services_Caixilharia_3',
        'Services_Caixilharia_4',
        'Services_Vidro_1',
        'Services_Vidro_2',
        'Services_Vidro_3',
        'Services_Vidro_4',
        'Services_Extrusao_1',
        'Services_Extrusao_2',
        'Services_Extrusao_3',
        'Services_Extrusao_4',
        'Treatment'
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
        
        Ext.Msg.setZIndex(100);
        
        Ext.MessageBox.override({
                    confirm: function(title, message, fn, scope) {
                    return this.show({
                        title       : title || null,
                        message     : message || null,
                        buttons     : [
                        {text: "N�o",  itemId: 'no'},
                        {text: "Sim", itemId: 'yes', ui: 'action'}
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
        
        try{
            var existe = Ext.getStore('Settings').getAt(0).get('lang');
        }
        catch(e){}
        if (existe === undefined) {
              var valor = { id_setting: '1', lang: '1'};
              Ext.getStore('Settings').add(valor);
              Ext.getStore('Settings').sync();
              idioma = Ext.getStore('Settings').getAt(0).get('lang');
              Ext.MessageBox.override({
                    confirm: function(title, message, fn, scope) {
                    return this.show({
                        title       : Ext.getStore('Languages').getById(idioma).get('sair') || null,
                        message     : Ext.getStore('Languages').getById(idioma).get('exit') || null,
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
            Ext.getCmp('start-caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('start_caixilharia'));
            Ext.getCmp('start-vidro').setStyle(Ext.getStore('Languages').getById(idioma).get('start_vidro'));
            Ext.getCmp('start-extrusao').setStyle(Ext.getStore('Languages').getById(idioma).get('start_extrusao'));
            Ext.getCmp('start-tratamento').setStyle(Ext.getStore('Languages').getById(idioma).get('start_tratamento'));          
            Ext.getCmp('produtos_caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('produtos_caixilharia'));
            Ext.getCmp('obras_caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('obras_caixilharia'));
            Ext.getCmp('servicos_caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('servicos_caixilharia'));
            Ext.getCmp('produtos_vidro').setStyle(Ext.getStore('Languages').getById(idioma).get('produtos_vidro'));
            Ext.getCmp('servicos_vidro').setStyle(Ext.getStore('Languages').getById(idioma).get('servicos_vidro'));
            Ext.getCmp('area_tecnica').setStyle(Ext.getStore('Languages').getById(idioma).get('area_tecnica'));
            Ext.getCmp('produtos_extrusao').setStyle(Ext.getStore('Languages').getById(idioma).get('produtos_extrusao'));
            Ext.getCmp('servicos_extrusao').setStyle(Ext.getStore('Languages').getById(idioma).get('servicos_extrusao'));
            Ext.getCmp('apoio_cliente').setStyle(Ext.getStore('Languages').getById(idioma).get('apoio_cliente'));
            Ext.getCmp('tratamento-lacagem').setStyle(Ext.getStore('Languages').getById(idioma).get('tratamento_lacagem'));
            Ext.getCmp('tratamento-anodizacao').setStyle(Ext.getStore('Languages').getById(idioma).get('tratamento_anodizacao'));
            Ext.getCmp('tratamento-imitacao').setStyle(Ext.getStore('Languages').getById(idioma).get('tratamento_imitacao'));
            Ext.getCmp('open-menu4').setText(Ext.getStore('Languages').getById(idioma).get('idiomas'));
            Ext.getCmp('open-menu5').setText(Ext.getStore('Languages').getById(idioma).get('ajuda'));
            Ext.getCmp('searchBox').setPlaceHolder(Ext.getStore('Languages').getById(idioma).get('search'));
            
            Ext.MessageBox.override({
                    confirm: function(title, message, fn, scope) {
                    return this.show({
                        title       : Ext.getStore('Languages').getById(idioma).get('sair') || null,
                        message     : Ext.getStore('Languages').getById(idioma).get('exit') || null,
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
		 //Ext.Msg.alert('', Ext.getStore('Languages').getById(idioma).get('offline'), Ext.emptyFn);
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
    }
    
    function onBackKeyDown(eve) {
            eve.preventDefault();
                         if (typeof Ext.getCmp('list-menu-language') != 'undefined') {
                         
                                if (Ext.getCmp('list-menu-language').getBackButton()._hidden === false) {
                                    Ext.getCmp('list-menu-language').onBackTap();
                                }
                                else{
                                    Ext.getCmp('list-menu-language').destroy();
                                    Ext.getCmp('back').hide();
                                    panel_language = undefined;
                                  
                                }
                         }else if (typeof Ext.getCmp('list-help') != 'undefined') {
                         
                                    Ext.getCmp('list-help').destroy();
                                    Ext.getCmp('back').hide();
                                    panel_help = undefined;
                                   
                        }else if (typeof Ext.getCmp('list-menu') != 'undefined') {
                         
                                if (Ext.getCmp('list-menu').getBackButton()._hidden === false) {
                                    Ext.getCmp('list-menu').onBackTap();
                                }
                                else{
                                    Ext.getCmp('list-menu').destroy();
                                    Ext.getCmp('open-menu').setStyle('color:#00aeef');
                                    panel_list_menu = undefined;
                                    
                                }
                                
                        }else if (Ext.getCmp('multi')._hidden === false && Ext.getCmp('multi').getBackButton()._hidden === false){
                            
                            Ext.getCmp('multi').onBackTap();
                     
                        }else if (Ext.getCmp('products')._hidden === false && Ext.getCmp('products').getBackButton()._hidden === false){
                            
                            Ext.getCmp('products').onBackTap();
                         }else if (Ext.getCmp('search')._hidden === false && Ext.getCmp('search').getBackButton()._hidden === false){
                            
                            Ext.getCmp('search').onBackTap();     
                         }else if (Ext.getCmp('works')._hidden === false && Ext.getCmp('works').getBackButton()._hidden === false){
                            
                            Ext.getCmp('works').onBackTap();
                         }else if (Ext.getCmp('products')._hidden === false && Ext.getCmp('products').getBackButton( )._hidden === true || Ext.getCmp('works')._hidden === false && Ext.getCmp('works').getBackButton( )._hidden === true || Ext.getCmp('multi')._hidden === false && Ext.getCmp('multi').getBackButton( )._hidden === true || Ext.getCmp('search')._hidden === false && Ext.getCmp('search').getBackButton( )._hidden === true || Ext.getCmp('treatment')._hidden === false){
                             Ext.getCmp('treatment').hide();
                             Ext.getCmp('menuI').hide();
                             Ext.getCmp('footer').hide();
                             Ext.getCmp('products').hide();
                             Ext.getCmp('works').hide();
                             Ext.getCmp('multi').hide();
                             Ext.getCmp('search').hide();
                             Ext.getCmp('searchBox').setValue('');
                             Ext.getCmp('favorites').show();
                             try{
                                Ext.getCmp('mapa2').destroy();
                            }catch(e){}
                        }
                        else if(Ext.getCmp('favorites')._hidden === false) {
                            Ext.getCmp('favorites').hide();
                            Ext.getCmp('menuI').show();
                            Ext.getCmp('footer').show();
                            Ext.getCmp('open-menu').hide();
                            Ext.getCmp('open-menu2').hide();
                            Ext.getCmp('back').hide();
                        }else
                        {
                        Ext.Msg.confirm("Sair", "Deseja sair da aplica��o?",  function ( answer ) { 
                                if ( answer == 'yes') { 
                                    navigator.app.exitApp();
                                } else { 
                               
                                } 
                            });
                        }
    }
    
    function onMenuKeyDown(eve) {
            eve.preventDefault();
             if (typeof panel_list_menu === 'undefined' && Ext.getCmp('menuI')._hidden === true)  {
                        Ext.getCmp('open-menu').setStyle('color:#FFF');
                        panel_list_menu = Ext.Viewport.add({
                        xtype : 'nestedlist',
                        id:'list-menu',
                        float: true,
                        zIndex: 45,
                        title: 'Menu',
                        displayField: 'text',
                        store: 'Menu_'+idioma,
                        useToolbar: false,
                        showAnimation:  
                        {
                            type: 'slideIn',
                            direction: 'left',
                        },  
                        listConfig:{
                        cls: 'menu-sosoares',
                        itemTpl:  '<div class="lista-pesquisa">'+
                            '<i class="{icon}" style="font-size:27px; color:#FFF; float:left; margin-right:10px;"></i><i class="icon-front front"></i></img>' +
                            '<div> <span>{text}</span></div>' +
                            '</div>',
                        emptyText: '<div class="lista-pesquisa">Sem resultados</div>',
                        },
                        detailCard:{
                            xtype: 'panel',
                            layout: 'fit',
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
                                if (record.get('id') == 3) {
                                    try{
                                        Ext.getCmp('mapa').show();
                                    }catch(e){}
                                    me.getDetailCard().setHtml('');
                                    me.getDetailCard().setScrollable(false);
                                    if (typeof Ext.getCmp('mapa') === 'undefined') {
                                    me.getDetailCard().add(
                                        {
                                        id: 'mapa',
                                        xtype: 'map',
                                            mapOptions : {
                                            center : new google.maps.LatLng(39.402244,-8.22876),  //Portugal
                                            zoom : 5,
                                            mapTypeId : google.maps.MapTypeId.ROADMAP,
                                            navigationControl: true,
                                            navigationControlOptions: {
                                                style: google.maps.NavigationControlStyle.DEFAULT
                                            }
                                        },
                                        mapListeners: {
                                            dragstart: function() {
                                                var segmented = Ext.getCmp('segmented'),
                                                    pressedButtons = segmented.getPressedButtons().slice(),
                                                    trackingIndex = pressedButtons.indexOf(trackingButton);
                                                if (trackingIndex != -1) {
                                                    pressedButtons.splice(trackingIndex, 1);
                                                    segmented.setPressedButtons(pressedButtons);
                                                }
                                            }
                                        },
                            
                                        listeners: {
                                            maprender: function(comp, map) {
                                                 var marker = new google.maps.Marker({
                                                    position: position13,
                                                    title : 'SOSOARES - VIANA DO CASTELO',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                 
                                                 var infoWindow = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - VIANA DO CASTELO<br>'+
                                                    'Lugar da Bandeira - Afife 4900-012 Viana do Castelo<br>'+
                                                    'Telf.: 258 981 299  |   Fax: 258 981 274<br>'+
                                                    'Email: sosoares.viana@sosoares.pt',
                                                });
                                
                                                google.maps.event.addListener(marker,'click', function(){
                                                    infoWindow.open(map,marker);
                                                });
                                                
                                                 var marker2 = new google.maps.Marker({
                                                    position: position2,
                                                    title : 'SOSOARES - SERVI�OS T�CNICOS E COMERCIAIS',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow2 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - SERVI�OS T�CNICOS E COMERCIAIS<br>'+
                                                    'Rua do Campo Alegre, 474 4150-170 Porto<br>'+
                                                    'Telf.: 226 096 709  |   Fax: 226 005 642<br>'+
                                                    'Email: comercial@sosoares.pt |   gabinete.tecnico@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker2,'click', function(){
                                                    infoWindow2.open(map,marker2);
                                                });
                                                
                                                 var marker3 = new google.maps.Marker({
                                                    position: position3,
                                                    title : 'SOSOARES - VALONGO',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow3 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - VALONGO<br>'+
                                                    'Rua do Baldeir�o, s/n 4440 - 346 Sobrado - Valongo<br>'+
                                                    'Telf.: 224 119 230  |   Fax: 224 119 231<br>'+
                                                    'Email: geral@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker3,'click', function(){
                                                    infoWindow3.open(map,marker3);
                                                });
                                                
                                                 var marker4 = new google.maps.Marker({
                                                    position: position4,
                                                    title : 'SOSOARES - LEIRIA',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow4 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - LEIRIA<br>'+
                                                    'Armaz�m n�1 E.N.8 - Ch�o da Feira, 9 2480-060 Calvaria de Cima<br>'+
                                                    'Telf.: 244 481 136  |   Fax: 244 482 186 <br>'+
                                                    'Email: sosoares.leiria@sosoares.pt<br>'
                                                });
                                
                                                google.maps.event.addListener(marker4,'click', function(){
                                                    infoWindow4.open(map,marker4);
                                                });
                                                
                                                var marker5 = new google.maps.Marker({
                                                    position: position5,
                                                    title : 'SOSOARES - VISEU',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow5 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - VISEU<br>'+
                                                    'Zona Industrial de Abraveses 3515-157 Viseu<br>'+
                                                    'Telf.: 232 459 731  |   Fax: 232 450 623<br>'+
                                                    'Email: sosoares.viseu@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker5,'click', function(){
                                                    infoWindow5.open(map,marker5);
                                                });
                                                
                                                var marker6 = new google.maps.Marker({
                                                    position: position6,
                                                    title : 'SOSOARES - F�BR. TRANSF. VIDRO',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow6 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - F�BR. TRANSF. VIDRO<br>'+
                                                    'Zona Ind. Coimbr�es, Lt. 101/102 S. Jo�o de Lourosa - 3500-618  VISEU<br>'+
                                                    'Telf.: 232 458 567  |   Fax: 232 458 566<br>'+
                                                    'Email: geral.vidro@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker6,'click', function(){
                                                    infoWindow6.open(map,marker6);
                                                });
                                                
                                                 var marker7 = new google.maps.Marker({
                                                    position: position7,
                                                    title : 'SOSOARES - LACAGEM',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow7 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - LACAGEM<br>'+
                                                    'Zona Ind. Coimbr�es, Lt.41 3500-886 S.Jo�o Lourosa - Viseu<br>'+
                                                    'Telf.: 232 479 448  |   Fax: 232 478 643<br>'+
                                                    'Email: sosoares.viseu@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker7,'click', function(){
                                                    infoWindow7.open(map,marker7);
                                                });
                                                
                                                var marker8 = new google.maps.Marker({
                                                    position: position8,
                                                    title : 'SOSOARES - ALMANCIL - FARO',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow8 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - ALMANCIL - FARO<br>'+
                                                    'S�tio do Vale da Venda EN 125, Km 98.8 8135-037 Almancil<br>'+
                                                    'Telf.: (indispon�vel)<br>'+
                                                    'Email: sosoares.faro@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker8,'click', function(){
                                                    infoWindow8.open(map,marker8);
                                                });
                                                
                                                var marker9 = new google.maps.Marker({
                                                    position: position9,
                                                    title : 'METALFER - METAL�RGICA DE FERMENTELOS, S.A.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow9 = new google.maps.InfoWindow({
                                                    content: 'METALFER - METAL�RGICA DE FERMENTELOS, S.A.<br>'+
                                                    'Travessa do Boleg�o, 146 Apartado1 3754-904 Fermentelos<br>'+
                                                    'Telf.: 234 729 740  |   Fax: 234 729 741<br>'+
                                                    'Email: metalfer@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker9,'click', function(){
                                                    infoWindow9.open(map,marker9);
                                                });
                                                
                                                var marker10 = new google.maps.Marker({
                                                    position: position10,
                                                    title : 'ALFA SUL - ALUM�NIOS DO SUL, LDA',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow10 = new google.maps.InfoWindow({
                                                    content: 'ALFA SUL - ALUM�NIOS DO SUL, LDA<br>'+
                                                    'E.N. Lisboa - Sintra Km 14 Apartado 156 2726-936 Mem Martins<br>'+
                                                    'Telf.: 219 265 090  |   Fax: 219 256 098<br>'+
                                                    'Email: alfa.sul@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker10,'click', function(){
                                                    infoWindow10.open(map,marker10);
                                                });
                                                
                                                var marker11 = new google.maps.Marker({
                                                    position: position11,
                                                    title : 'PERFISOEIRAS - SOC. EXTRUS�O ALUM�NIO E COBRE, SA.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow11 = new google.maps.InfoWindow({
                                                    content: 'PERFISOEIRAS - SOC. EXTRUS�O ALUM�NIO E COBRE, SA.<br>'+
                                                    'Rua da Col�nia - Quinta da Cardosa Apartado 214 - Abrunheira 2711-952 Sintra<br>'+
                                                    'Telf.: 219 156 660  |   Fax: 219 156 661<br>'+
                                                    'Email: perfis.oeiras@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker11,'click', function(){
                                                    infoWindow11.open(map,marker11);
                                                });
                                                
                                                var marker12 = new google.maps.Marker({
                                                    position: position12,
                                                    title : 'ALULIDER - IND�STRIA E COM�RCIO DE ALUM�NIO, LDA',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow12 = new google.maps.InfoWindow({
                                                    content: 'ALULIDER - IND�STRIA E COM�RCIO DE ALUM�NIO, LDA'+
                                            'Pav. Industrial H - Plataforma 13D Zona Franca Industrial 9200-047 Cani�al - Madeira'+
                                            'Telf.: 291 960 488 / 291 960 494  |   Fax: 291 960 497'+
                                            'Email: Alulider@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker12,'click', function(){
                                                    infoWindow12.open(map,marker12);
                                                });
                                                
                                                var marker13 = new google.maps.Marker({
                                                    position: position,
                                                    title : 'INTERALUM�NIOS - SOC. COMERCIALIZA��O ALUM�NIOS, LDA.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow13 = new google.maps.InfoWindow({
                                                    content: 'INTERALUM�NIOS - SOC. COMERCIALIZA��O ALUM�NIOS, LDA.<br>'+
                                                    'Alto da Venda Nova, 68 B - Apartado 251 2304-909 Tomar<br>'+
                                                    'Telf.: 249 301 493  |   Fax: 249 301 628<br>'+
                                                    'Email: interaluminios@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker13,'click', function(){
                                                    infoWindow13.open(map,marker13);
                                                });
                                                
                                                var marker14 = new google.maps.Marker({
                                                    position: position14,
                                                    title : 'PEOVIS - COM�RCIO DE ALUM�NIOS, LDA.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow14 = new google.maps.InfoWindow({
                                                    content: 'PEOVIS - COM�RCIO DE ALUM�NIOS, LDA.<br>'+
                                                    'Manhosa - Ranhados 3500-631 Viseu<br>'+
                                                    'Telf.: 232 461 005  |   Fax: 232 469 346<br>'+
                                                    'Email: peovis@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker14,'click', function(){
                                                    infoWindow14.open(map,marker14);
                                                });
                            
                                                setTimeout(function() {
                                                    map.panTo(position);
                                                }, 1000);
                                            }
                            
                                        }
                                    }                        
                                    );
                                    }
                                    }else if(record.get('id') == 10 || record.get('id') == 11 || record.get('id') == 12 || record.get('id') == 13  ){
                                    if (record.get('id') == 10) {
                                        var valor = { id_setting: '1', lang: '1'};
                                    }
                                    else if (record.get('id') == 11) {
                                        var valor = { id_setting: '1', lang: '2'};
                                    }
                                    else if (record.get('id') == 12) {
                                        var valor = { id_setting: '1', lang: '3'};
                                    }
                                    else if (record.get('id') == 13) {
                                        var valor = { id_setting: '1', lang: '4'};
                                    }
                                    Ext.getStore('Settings').getAt(0).set(valor);
                                    Ext.getStore('Settings').sync();
                                    idioma = Ext.getStore('Settings').getAt(0).get('lang');
                                    Ext.getCmp('start-caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('start_caixilharia'));
                                    Ext.getCmp('start-vidro').setStyle(Ext.getStore('Languages').getById(idioma).get('start_vidro'));
                                    Ext.getCmp('start-extrusao').setStyle(Ext.getStore('Languages').getById(idioma).get('start_extrusao'));
                                    Ext.getCmp('start-tratamento').setStyle(Ext.getStore('Languages').getById(idioma).get('start_tratamento'));           
                                    Ext.getCmp('produtos_caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('produtos_caixilharia'));
                                    Ext.getCmp('obras_caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('obras_caixilharia'));
                                    Ext.getCmp('servicos_caixilharia').setStyle(Ext.getStore('Languages').getById(idioma).get('servicos_caixilharia'));
                                    Ext.getCmp('produtos_vidro').setStyle(Ext.getStore('Languages').getById(idioma).get('produtos_vidro'));
                                    Ext.getCmp('servicos_vidro').setStyle(Ext.getStore('Languages').getById(idioma).get('servicos_vidro'));
                                    Ext.getCmp('area_tecnica').setStyle(Ext.getStore('Languages').getById(idioma).get('area_tecnica'));
                                    Ext.getCmp('produtos_extrusao').setStyle(Ext.getStore('Languages').getById(idioma).get('produtos_extrusao'));
                                    Ext.getCmp('servicos_extrusao').setStyle(Ext.getStore('Languages').getById(idioma).get('servicos_extrusao'));
                                    Ext.getCmp('apoio_cliente').setStyle(Ext.getStore('Languages').getById(idioma).get('apoio_cliente'));
                                    Ext.getCmp('tratamento-lacagem').setStyle(Ext.getStore('Languages').getById(idioma).get('tratamento_lacagem'));
                                    Ext.getCmp('tratamento-anodizacao').setStyle(Ext.getStore('Languages').getById(idioma).get('tratamento_anodizacao'));
                                    Ext.getCmp('tratamento-imitacao').setStyle(Ext.getStore('Languages').getById(idioma).get('tratamento_imitacao'));
                                    Ext.getCmp('open-menu4').setText(Ext.getStore('Languages').getById(idioma).get('idiomas'));
                                    Ext.getCmp('open-menu5').setText(Ext.getStore('Languages').getById(idioma).get('ajuda'));
                                    Ext.getCmp('searchBox').setPlaceHolder(Ext.getStore('Languages').getById(idioma).get('search'));
                                  
                                   if(Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-group_1-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-group_2-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-group_3-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-group_4-1'){
                                        //Ext.getCmp('multi').goToNode( Ext.getCmp('multi').getStore().getRoot() );
                                        Ext.getCmp('multi').onBackTap();
                                         Ext.getCmp('multi').onBackTap();
                                        Ext.Function.defer(function(){
                                             Ext.getCmp('multi').setStore('Group_'+idioma);
                                        }, 100);
                                   }else if (Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_caixilharia_1-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_caixilharia_2-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_caixilharia_3-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_caixilharia_4-1')
                                   {
                                        //Ext.getCmp('multi').goToNode( Ext.getCmp('multi').getStore().getRoot() );
                                        Ext.getCmp('multi').onBackTap();
                                        Ext.getCmp('multi').onBackTap();
                                        Ext.Function.defer(function(){
                                             Ext.getCmp('multi').setStore('Services_Caixilharia_'+idioma);
                                        }, 100);
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-servicos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('services')+'</span>');
                                   }else if (Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_vidro_1-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_vidro_2-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_vidro_3-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_vidro_4-1')
                                   {
                                        //Ext.getCmp('multi').goToNode( Ext.getCmp('multi').getStore().getRoot() );
                                        Ext.getCmp('multi').onBackTap();
                                        Ext.getCmp('multi').onBackTap();
                                        Ext.Function.defer(function(){
                                             Ext.getCmp('multi').setStore('Services_Vidro_'+idioma);
                                        }, 100);
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-servicos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('services')+'</span>');
                                   }else if (Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_extrusao_1-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_extrusao_2-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_extrusao_3-1' || Ext.getCmp('multi').getStore().id == 'italboxcatalog-store-services_extrusao_4-1')
                                   {
                                        //Ext.getCmp('multi').goToNode( Ext.getCmp('multi').getStore().getRoot() );
                                        Ext.getCmp('multi').onBackTap();
                                        Ext.getCmp('multi').onBackTap();
                                        Ext.Function.defer(function(){
                                            Ext.getCmp('multi').setStore('Services_Extrusao_'+idioma);
                                        }, 100);
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-servicos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('services')+'</span>');
                                   }
                                   
                                   if ((Ext.getCmp('html_treatment').getCls()[0]) == ('1')) {
                                        Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_1').get('html'));
                                        Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-lacagem" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('lacagem')+'</span>');
                                        Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                   }else if ((Ext.getCmp('html_treatment').getCls()[0]) == '2') {
                                        Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_2').get('html'));
                                         Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-anodizacao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('anodizacao')+'</span>');
                                        Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                   }else if ((Ext.getCmp('html_treatment').getCls()[0]) == '3') {
                                        Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_3').get('html'));
                                        Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-imitacao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('madeira')+'</span>');
                                        Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                   }else if ((Ext.getCmp('html_treatment').getCls()[0]) == '4') {
                                        Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_4').get('html'));
                                         Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-tecnica" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('area')+'</span>');
                                        Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                    }else if ((Ext.getCmp('html_treatment').getCls()[0]) == '5') {
                                        Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(idioma+'_5').get('html'));
                                        Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-apoio" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('apoio')+'</span>');
                                        Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                   }
                                   
                                   if (Ext.getCmp('search')._hidden == false) {
                                       Ext.getStore('Products_Search').getProxy().setExtraParams({
                                        lang: idioma,
                                        search: ''
                                        });
                                       
                                        Ext.getStore('Products_Search').load();
                                        Ext.getCmp('search').setStore('Products_Search');
                                   }
                                   
                                   if (Ext.getCmp('works')._hidden == false) {
                                       //Ext.getCmp('works').goToNode( Ext.getCmp('works').getStore().getRoot() );
                                        Ext.getCmp('works').onBackTap();
                                        Ext.getCmp('works').onBackTap();
                                        Ext.getStore('Works').getProxy().setExtraParams({
                                            lang: idioma
                                        });
                                         Ext.Function.defer(function(){
                                             Ext.getCmp('works').setStore('Works');
                                        }, 100);
                                         Ext.getStore('Works').load();
                                        Ext.getCmp('works_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-obras" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('obras')+'</span>');
                                   
                                   }
                                   
                                if (Ext.getCmp('products')._hidden == false) {
                                    
                                   if (Ext.getCmp('products').getStore()._storeId == 'Products_Caixilharia'){
                                        console.dir(Ext.getCmp('products').getStore().getRoot());
                                         Ext.getCmp('products').onBackTap();
                                         Ext.getCmp('products').onBackTap();
                                        Ext.getStore('Products_Caixilharia').getProxy().setExtraParams({
                                            lang: idioma
                                        });
                                        
                                        Ext.Function.defer(function(){
                                             Ext.getCmp('products').setStore('Products_Caixilharia');
                                        }, 100);
                                        Ext.getStore('Products_Caixilharia').load();
                                        Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_caixilharia" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('produtos')+'</span>');
                                        
                                    }
                                    
                                    if(Ext.getCmp('products').getStore()._storeId == 'Products_Vidro'){
                                         Ext.getCmp('products').onBackTap();
                                         Ext.getCmp('products').onBackTap();
                                         Ext.getStore('Products_Vidro').getProxy().setExtraParams({
                                            lang: idioma
                                        });
                                       
                                         Ext.Function.defer(function(){
                                             Ext.getCmp('products').setStore('Products_Vidro');
                                        }, 100);
                                        Ext.getStore('Products_Vidro').load();
                                        Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_vidro" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('produtos')+'</span>');
                                    }
                                   
                                   if(Ext.getCmp('products').getStore()._storeId == 'Products_Extrusao'){
                                       
                                        Ext.getCmp('products').onBackTap();
                                        Ext.getCmp('products').onBackTap();
                                        Ext.getStore('Products_Extrusao').getProxy().setExtraParams({
                                            lang: idioma
                                        });
                                      
                                         Ext.Function.defer(function(){
                                             Ext.getCmp('products').setStore('Products_Extrusao');
                                        }, 100);
                                         Ext.getStore('Products_Extrusao').load();
                                        Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>'+Ext.getStore('Languages').getById(idioma).get('produtos')+'</span>');
                                    
                                   }
                                   
                                   }
                                  
                                    Ext.MessageBox.override({
                                              confirm: function(title, message, fn, scope) {
                                              return this.show({
                                                  title       : Ext.getStore('Languages').getById(idioma).get('sair') || null,
                                                  message     : Ext.getStore('Languages').getById(idioma).get('exit') || null,
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
                                      Ext.getCmp('open-menu').setStyle('color:#00aeef');
                                      Ext.getCmp('list-menu').destroy();
                                      panel_list_menu = undefined;
                                    
                                }else{
                                try{
                                    Ext.getCmp('mapa').hide();
                                    }catch(e){}
                                    me.getDetailCard().setScrollable(true);
                                    me.getDetailCard().setHtml('<div style="max-width:100%" class="leaf_panel">'+
                                    '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+
                                    record.get('text')+'</h3><br><p style="color:#FFF !important;">'+
                                    record.get('html')+'</p></div></div>');
                                    me.getDetailCard().getScrollable().getScroller().scrollTo(0,0.1, false);
                                    
                                }
                            }
                            
                        }
                        });
                        panel_list_menu.show();
                        panel_list_menu.on('hide', function() {
                           panel_list_menu.setDetailCard('')
                           panel_list_menu.destroy();
                           panel_list_menu = undefined;
                           Ext.getCmp('open-menu').setStyle('color:#00aeef');
                        });     
                       }else{
                           Ext.getCmp('list-menu').destroy();
                           Ext.getCmp('open-menu').setStyle('color:#00aeef');
                           panel_list_menu = undefined;
                       }
    }
    onLoad();
    
    }
});