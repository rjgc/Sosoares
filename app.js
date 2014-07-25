var thumb_products = 'http://www.critecns.com/sosoares/assets/uploads/produtos/thumb/';
var products = 'http://www.critecns.com/sosoares/assets/uploads/produtos/';
var thumb_works = 'http://www.critecns.com/sosoares/assets/uploads/obras/thumb/';
var works = 'http://www.critecns.com/sosoares/assets/uploads/obras/';
try{
//Onde Estamos
var position3 = new google.maps.LatLng(41.202625,-8.471071);  //Valongo
var position2 = new google.maps.LatLng(41.152985,-8.634299);  //Serviços Tecnicos
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
var position = new google.maps.LatLng(39.64357,-8.37321); //INTERALUMÍNIOS
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
var position_13 = new google.maps.LatLng(37.765287,-25.67389); //Açores
}
catch(e){}

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': 'sencha-touch-2.0.1.1/ux',
        'Ext.plugin': 'sencha-touch-2.0.1.1/plugin'
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
           // id: 'detail_multi',
            //styleHtmlContent: true,
            layout: 'fit',
           // scrollable: true,
            //padding: '0px !important',
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
               html: '<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-apoio" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Serviços</span>',
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
            
                            /*plugins : [
                                new Ext.plugin.google.Tracker({
                                    trackSuspended: true,   //suspend tracking initially
                                    allowHighAccuracy: false,
                                    marker: new google.maps.Marker({
                                        position: position,
                                        title: 'My Current Location',
                                        shadow: shadow,
                                        icon: image
                                    })
                                }),
                                new Ext.plugin.google.Traffic()
                            ],*/
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
                                        'Trav. Do Bolegão, 146 - Apartado 1 3754-904 Fermentelos<br>'+
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
                                        'E.N.8 - Chão da Feira, 9 2480-060 Calvaria de Cima<br>'+
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
                                        'Vitor Gonçalves<br>'+
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
                                        'Sítio do Vale da Venda EN 125, Km 98.8 8135-037 Almancil<br>'+
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
                                        'Rua do Baldeirão, s/n 4440 - 346 Sobrado - Valongo<br>'+
                                        'João Pinto<br>'+
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
                                                'Rua do Baldeirão, s/n 4440 - 346 Sobrado - Valongo<br>'+
                                                'João Pedro<br>'+
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
                                        'Travessa do Bolegão, 146 Apartado 1 3754-904 Fermentelos'+
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
                                        'Pav. Industrial H - Plataforma 13D Zona Franca Industrial 9200-047 Caniçal - Madeira<br>'+
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
                                        'E.N. Lisboa - Sintra Km 14  Apartado 156<br>'+
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
                                        'João Costa<br>'+
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
                                        'Rua do Baldeirão, s/n 4440 - 346 Sobrado - Valongo<br>'+
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
                                        'Pav. Industrial H - Plataforma 13D Zona Franca Industrial 9200-047 Caniçal - Madeira<br>'+
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
              // me.getDetailCard().setStyle('background-color: #054667;margin: 0px !important;padding: 0px !important');
               // me.getDetailCard().setFullscreen(true);
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
            style: 'background-color: #04334b;',
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
                    })
                    Ext.getCmp('html_obras').setHtml('<div style="max-width:100%" class="leaf_panel"><br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('descricao')+'</p></div></div>');
                    me.getDetailCard().getScrollable().getScroller().scrollTo(0,0.1, false);
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
            scrollable: {
                direction: 'vertical'
            },
            //padding: '0px !important',
            html: '',
            style: 'background-color: #04334b;',
             items: [{
                        xtype: 'carousel',
                        id: 'carousel_produtos',
                        /*autoSlide: true,
                        carouselSlideDelay: 3500,*/
                        //cls: 'carousel_obras',
                       // height: 320,
                       /* maxHeight: 768,
                        minHeight: 320,*/
                        /*style: 'max-width:100%; max-height:70%',*/
                        
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
                  Ext.getCmp('carousel_produtos').removeAll();
                  Ext.getCmp('html_produtos').setHtml('');
                 /* Ext.getStore('Works_Gallery').load( function(pictures , operation ) {*/
                    var items = [];
                   /* Ext.each( pictures, function(picture) {
                      if (picture.get('id_obra') == record.get('id_obra')) {
                        //return;*/
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
                       /*items.push({
                        xtype: 'image',
                        src: works+record.get('foto'),
                        style: 'background-size: 100% 100%;'
                      });  */           
                   // });
                   
                   // }})
                    Ext.getCmp('carousel_produtos').setItems(items);
                    Ext.getCmp('carousel_produtos').setActiveItem(0);
                    
                    Ext.getCmp('html_produtos').setHtml('<div style="max-width:100%" class="leaf_panel"><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('descricao')+'</p></div></div>');
                    
                  //  })
                
                
           /*    Ext.getCmp('html_pic_produtos').setHtml('<img style="width:100%; height:100%; position:absolute" src="'+products+record.get('foto')+'">');
         
             
               Ext.getCmp('html_produtos').setHtml('<div style="max-width:100%" class="leaf_panel">'+
                                        '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('descricao')+'</p></div></div>');*/
              // me.getDetailCard().setStyle('background-color: #054667;margin: 0px !important;padding: 0px !important');
               // me.getDetailCard().setFullscreen(true);
               me.getDetailCard().getScrollable().getScroller().scrollTo(0,0.1, false);
            }
        }
    },
     initialize: function() {
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

/*Ext.define('Italbox.Viewport6', {
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
     /*   itemTpl:  '<div class="lista-pesquisa">'+
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
        /*    }
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
});*/

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
                            delegate: '#sosoares',
                            event: 'tap',
                            fn: function() {
                                //if (connect === 1) {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                   /* Ext.getStore('Services_Caixilharia').load();*/
                                    Ext.getCmp('multi').setStore('Group');
                                   /* Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_caixilharia" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Produtos</span>');*/
                                   Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-sosoares" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Grupo Sosoares</span>');
                                    Ext.getCmp('multi').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
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
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-servicos_vidro" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Serviços</span>');
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
                            delegate: '#sosoares',
                            event: 'tap',
                            fn: function() {
                                //if (connect === 1) {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                   /* Ext.getStore('Services_Caixilharia').load();*/
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-sosoares" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Grupo Sosoares</span>');
                                    Ext.getCmp('multi').setStore('Group');
                                   /* Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_caixilharia" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Produtos</span>');*/
                                    Ext.getCmp('multi').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
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
                        {
                            element: 'element',
                            delegate: '#servicos_vidro',
                            event: 'tap',
                            fn: function() {
                                //if (connect === 1) {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                   /* Ext.getStore('Services_Caixilharia').load();*/
                                    Ext.getCmp('multi').setStore('Services_Vidro');
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-servicos_vidro" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Serviços</span>');
                                    Ext.getCmp('multi').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
                        {
                            element: 'element',
                            delegate: '#area_tecnica',
                            event: 'tap',
                            fn: function() {
                                   Ext.getCmp('favorites').hide();
                                    /*Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                   /* Ext.getStore('Services_Caixilharia').load();*/
                                   Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-tecnica" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Área Técnica</span>');
                                    Ext.getCmp('html_pic_treatment').setHtml('<img style="width:100%; height:100%; position:absolute" src="imgs/sosoares.jpg">');
                                   /* Ext.getCmp('multi').setStore('Group');*/
                                    Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(4).get('html'));
                                    Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                    Ext.getCmp('treatment').show();
                            }
                        }
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
                                //if (connect === 1) {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                   /* Ext.getStore('Services_Caixilharia').load();*/
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-sosoares" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Grupo Sosoares</span>');
                                    Ext.getCmp('multi').setStore('Group');
                                   /* Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_caixilharia" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Produtos</span>');*/
                                    Ext.getCmp('multi').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
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
                            },
                        },
                        {
                            element: 'element',
                            delegate: '#servicos_extrusao',
                            event: 'tap',
                            fn: function() {
                                //if (connect === 1) {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                   /* Ext.getStore('Services_Caixilharia').load();*/
                                    Ext.getCmp('multi').setStore('Services_Extrusao');
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-servicos_extrusao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Serviços</span>');
                                    Ext.getCmp('multi').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
                        {
                            element: 'element',
                            delegate: '#apoio_cliente',
                            event: 'tap',
                            fn: function() {
                                   Ext.getCmp('favorites').hide();
                                    /*Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                   /* Ext.getStore('Services_Caixilharia').load();*/
                                   Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-tecnica" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Apoio Cliente</span>');
                                    Ext.getCmp('html_pic_treatment').setHtml('<img style="width:100%; height:100%; position:absolute" src="imgs/sosoares.jpg">');
                                   /* Ext.getCmp('multi').setStore('Group');*/
                                    Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(5).get('html'));
                                    Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                    Ext.getCmp('treatment').show();
                            }
                        }
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
                            delegate: '#sosoares',
                            event: 'tap',
                            fn: function() {
                                //if (connect === 1) {
                                    Ext.getCmp('favorites').hide();
                                    Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                   /* Ext.getStore('Services_Caixilharia').load();*/
                                    Ext.getCmp('multi_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-sosoares" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Grupo Sosoares</span>');
                                    Ext.getCmp('multi').setStore('Group');
                                   /* Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_caixilharia" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Produtos</span>');*/
                                    Ext.getCmp('multi').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
                         {
                            element: 'element',
                            delegate: '#tratamento-lacagem',
                            event: 'tap',
                            fn: function() {
                                //if (connect === 1) {
                                     Ext.getCmp('favorites').hide();
                                    /*Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                   /* Ext.getStore('Services_Caixilharia').load();*/
                                   Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-lacagem" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Lacagem</span>');
                                    Ext.getCmp('html_pic_treatment').setHtml('<img style="width:100%; height:100%; position:absolute" src="imgs/sosoares.jpg">');
                                   /* Ext.getCmp('multi').setStore('Group');*/
                                    Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(1).get('html'));
                                    Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                    Ext.getCmp('treatment').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
                        {
                            element: 'element',
                            delegate: '#tratamento-anodizacao',
                            event: 'tap',
                            fn: function() {
                                //if (connect === 1) {
                                     Ext.getCmp('favorites').hide();
                                    /*Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                   /* Ext.getStore('Services_Caixilharia').load();*/
                                     Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-anodizacao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Anodização</span>');
                                   /* Ext.getCmp('multi').setStore('Group');*/
                                   /* Ext.getCmp('products_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-produtos_caixilharia" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Produtos</span>');*/
                                     Ext.getCmp('html_pic_treatment').setHtml('<img style="width:100%; height:100%; position:absolute" src="imgs/sosoares.jpg">');
                                   /* Ext.getCmp('multi').setStore('Group');*/
                                    Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(2).get('html'));
                                    Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                    Ext.getCmp('treatment').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
                        {
                            element: 'element',
                            delegate: '#tratamento-imitacao',
                            event: 'tap',
                            fn: function() {
                                //if (connect === 1) {
                                    Ext.getCmp('favorites').hide();
                                    /*Ext.getCmp('back').show();
                                    /*Ext.getCmp('search').show();*/
                                   /* Ext.getStore('Services_Caixilharia').load();*/
                                 Ext.getCmp('treatment_toolbar').setHtml('<span style="background: transparent; color:#FFF; float:left; font-size: 21px;margin-top: 10px; "><i class="icon-imitacao" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Imitação Madeira</span>');
                                   /* Ext.getCmp('multi').setStore('Group');*/
                                     Ext.getCmp('html_pic_treatment').setHtml('<img style="width:100%; height:100%; position:absolute" src="imgs/sosoares.jpg">');
                                   /* Ext.getCmp('multi').setStore('Group');*/
                                    Ext.getCmp('html_treatment').setHtml(Ext.getStore('Treatment').getById(3).get('html'));
                                    Ext.getCmp('treatment').getScrollable().getScroller().scrollTo(0,0.1, false);
                                    Ext.getCmp('treatment').show();
                               /* }
                                else{
                                    Ext.Msg.alert('Offline', Ext.getStore('Languages').getById(idioma).get('offline_catalogs'), Ext.emptyFn);
                                }*/
                            }
                        },
                        
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
                        /*if(Ext.getCmp('search')._hidden === false)
                        {
                            Ext.getCmp('search').hide();
                            Ext.getCmp('products').hide();
                            Ext.getCmp('works').hide();
                            Ext.getCmp('favorites').show();
                        }else */if (typeof Ext.getCmp('list-menu-language') != 'undefined') {
                        
                               if (Ext.getCmp('list-menu-language').getBackButton()._hidden === false) {
                                   Ext.getCmp('list-menu-language').onBackTap();
                               }
                               else{
                                   Ext.getCmp('list-menu-language').destroy();
                                   Ext.getCmp('back').hide();
                                   panel_language = undefined;
                                   /*try{
                                   
                                   panel_list_menu.destroy();
                                   panel_list_menu = undefined;
                                   }catch(e){}*/
                               }
                         }else if (typeof Ext.getCmp('list-help') != 'undefined') {
                         
                              /*  if (Ext.getCmp('list-help').getBackButton()._hidden === false) {
                                    Ext.getCmp('list-help').onBackTap();
                                }
                                else{*/
                                    Ext.getCmp('list-help').destroy();
                                    Ext.getCmp('back').hide();
                                    panel_help = undefined;
                                    /*try{
                                    
                                    panel_list_menu.destroy();
                                    panel_list_menu = undefined;
                                    }catch(e){}*/
                              /*  }*/
                                
                        }else if (typeof Ext.getCmp('list-menu') != 'undefined') {
                         
                                if (Ext.getCmp('list-menu').getBackButton()._hidden === false) {
                                    Ext.getCmp('list-menu').onBackTap();
                                }
                                else{
                                    Ext.getCmp('list-menu').destroy();
                                    Ext.getCmp('open-menu').setStyle('color:#00aeef');
                                    panel_list_menu = undefined;
                                    /*try{
                                    
                                    panel_list_menu.destroy();
                                    panel_list_menu = undefined;
                                    }catch(e){}*/
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
                        
                         }else if (Ext.getCmp('products')._hidden === false && Ext.getCmp('products').getBackButton( )._hidden === true || Ext.getCmp('works')._hidden === false && Ext.getCmp('works').getBackButton( )._hidden === true || Ext.getCmp('multi')._hidden === false && Ext.getCmp('multi').getBackButton( )._hidden === true ||  Ext.getCmp('treatment')._hidden === false){
                            Ext.getCmp('treatment').hide();
                            Ext.getCmp('menuI').hide();
                            Ext.getCmp('footer').hide();
                            Ext.getCmp('products').hide();
                             Ext.getCmp('works').hide();
                             Ext.getCmp('multi').hide();
                             Ext.getCmp('favorites').show();
                             try{
                                Ext.getCmp('mapa2').destroy();
                            }catch(e){}
                        }
                        else {
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
                       /* try{
                       console.dir(panel_list_menu);
                       }catch(e){}*/
                       if (typeof panel_list_menu === 'undefined')  {
                        Ext.getCmp('open-menu').setStyle('color:#FFF');
                        panel_list_menu = Ext.Viewport.add({
                        xtype : 'nestedlist',
                        id:'list-menu',
                        //cls: 'lista-extras',
                        float: true,
                        zIndex: 45,
                        title: 'Menu',
                        displayField: 'text',
                        store: 'Menu',
                        useToolbar: false,
                        showAnimation:  
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
                            xtype: 'panel',
                             layout: 'fit',
                            //styleHtmlContent: true,
                            //scrollable: true,
                            //padding: '0px !important',
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
                                    //alert('teste');
                                    try{
                                    Ext.getCmp('mapa').show();
                                    }catch(e){}
                                     me.getDetailCard().setHtml('');
                                      //me.getDetailCard().setLayout();
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
                        
                                        /*plugins : [
                                            new Ext.plugin.google.Tracker({
                                                trackSuspended: true,   //suspend tracking initially
                                                allowHighAccuracy: false,
                                                marker: new google.maps.Marker({
                                                    position: position,
                                                    title: 'My Current Location',
                                                    shadow: shadow,
                                                    icon: image
                                                })
                                            }),
                                            new Ext.plugin.google.Traffic()
                                        ],*/
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
                                                    title : 'SOSOARES - SERVIÇOS TÉCNICOS E COMERCIAIS',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow2 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - SERVIÇOS TÉCNICOS E COMERCIAIS<br>'+
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
                                                    'Rua do Baldeirão, s/n 4440 - 346 Sobrado - Valongo<br>'+
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
                                                    'Armazém nº1 E.N.8 - Chão da Feira, 9 2480-060 Calvaria de Cima<br>'+
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
                                                    title : 'SOSOARES - FÁBR. TRANSF. VIDRO',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow6 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - FÁBR. TRANSF. VIDRO<br>'+
                                                    'Zona Ind. Coimbrões, Lt. 101/102 S. João de Lourosa - 3500-618  VISEU<br>'+
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
                                                    'Zona Ind. Coimbrões, Lt.41 3500-886 S.João Lourosa - Viseu<br>'+
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
                                                    'Sítio do Vale da Venda EN 125, Km 98.8 8135-037 Almancil<br>'+
                                                    'Telf.: (indisponível)<br>'+
                                                    'Email: sosoares.faro@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker8,'click', function(){
                                                    infoWindow8.open(map,marker8);
                                                });
                                                
                                                var marker9 = new google.maps.Marker({
                                                    position: position9,
                                                    title : 'METALFER - METALÚRGICA DE FERMENTELOS, S.A.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow9 = new google.maps.InfoWindow({
                                                    content: 'METALFER - METALÚRGICA DE FERMENTELOS, S.A.<br>'+
                                                    'Travessa do Bolegão, 146 Apartado1 3754-904 Fermentelos<br>'+
                                                    'Telf.: 234 729 740  |   Fax: 234 729 741<br>'+
                                                    'Email: metalfer@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker9,'click', function(){
                                                    infoWindow9.open(map,marker9);
                                                });
                                                
                                                var marker10 = new google.maps.Marker({
                                                    position: position10,
                                                    title : 'ALFA SUL - ALUMÍNIOS DO SUL, LDA',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow10 = new google.maps.InfoWindow({
                                                    content: 'ALFA SUL - ALUMÍNIOS DO SUL, LDA<br>'+
                                                    'E.N. Lisboa - Sintra Km 14 Apartado 156 2726-936 Mem Martins<br>'+
                                                    'Telf.: 219 265 090  |   Fax: 219 256 098<br>'+
                                                    'Email: alfa.sul@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker10,'click', function(){
                                                    infoWindow10.open(map,marker10);
                                                });
                                                
                                                var marker11 = new google.maps.Marker({
                                                    position: position11,
                                                    title : 'PERFISOEIRAS - SOC. EXTRUSÃO ALUMÍNIO E COBRE, SA.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow11 = new google.maps.InfoWindow({
                                                    content: 'PERFISOEIRAS - SOC. EXTRUSÃO ALUMÍNIO E COBRE, SA.<br>'+
                                                    'Rua da Colónia - Quinta da Cardosa Apartado 214 - Abrunheira 2711-952 Sintra<br>'+
                                                    'Telf.: 219 156 660  |   Fax: 219 156 661<br>'+
                                                    'Email: perfis.oeiras@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker11,'click', function(){
                                                    infoWindow11.open(map,marker11);
                                                });
                                                
                                                var marker12 = new google.maps.Marker({
                                                    position: position12,
                                                    title : 'ALULIDER - INDÚSTRIA E COMÉRCIO DE ALUMÍNIO, LDA',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow12 = new google.maps.InfoWindow({
                                                    content: 'ALULIDER - INDÚSTRIA E COMÉRCIO DE ALUMÍNIO, LDA'+
                                            'Pav. Industrial H - Plataforma 13D Zona Franca Industrial 9200-047 Caniçal - Madeira'+
                                            'Telf.: 291 960 488 / 291 960 494  |   Fax: 291 960 497'+
                                            'Email: Alulider@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker12,'click', function(){
                                                    infoWindow12.open(map,marker12);
                                                });
                                                
                                                var marker13 = new google.maps.Marker({
                                                    position: position,
                                                    title : 'INTERALUMÍNIOS - SOC. COMERCIALIZAÇÃO ALUMÍNIOS, LDA.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow13 = new google.maps.InfoWindow({
                                                    content: 'INTERALUMÍNIOS - SOC. COMERCIALIZAÇÃO ALUMÍNIOS, LDA.<br>'+
                                                    'Alto da Venda Nova, 68 B - Apartado 251 2304-909 Tomar<br>'+
                                                    'Telf.: 249 301 493  |   Fax: 249 301 628<br>'+
                                                    'Email: interaluminios@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker13,'click', function(){
                                                    infoWindow13.open(map,marker13);
                                                });
                                                
                                                var marker14 = new google.maps.Marker({
                                                    position: position14,
                                                    title : 'PEOVIS - COMÉRCIO DE ALUMÍNIOS, LDA.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow14 = new google.maps.InfoWindow({
                                                    content: 'PEOVIS - COMÉRCIO DE ALUMÍNIOS, LDA.<br>'+
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
                                }else{
                                try{
                                    Ext.getCmp('mapa').hide();
                                    }catch(e){}
                                   // me.getDetailCard().setHtml('');
                                  //  Ext.getCmp('teste99').setLayout('');
                                    me.getDetailCard().setScrollable(true);
                                    me.getDetailCard().setHtml('<div style="max-width:100%" class="leaf_panel">'+
                                    '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+
                                    record.get('text')+'</h3><br><p style="color:#FFF !important;">'+
                                    record.get('html')+'</p></div></div>');
                                    me.getDetailCard().getScrollable().getScroller().scrollTo(0,0.1, false);
                                }
                              /*me.getDetailCard().setHtml('<div style="max-width:100%" class="leaf_panel">'+
                                                        '<img style="max-width:100%; max-height:70%" src="'+products+record.get('foto')+'">'+
                                                        '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('descricao')+'</p></div></div>');*/
                              // me.getDetailCard().setStyle('background-color: #054667;margin: 0px !important;padding: 0px !important');
                               // me.getDetailCard().setFullscreen(true);
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
                             //panel_list_menu.show();
                             //console.dir(panel_list_menu);
                            //alert('TESTE!!');
                           // panel_menu.hide();
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
                         if (typeof panel_language === 'undefined')  {
                        //Ext.getCmp('open-menu').setStyle('color:#FFF');
                        Ext.getCmp('back').show();
                        panel_language = Ext.Viewport.add({
                        xtype : 'nestedlist',
                        id:'list-menu-language',
                        //cls: 'lista-extras',
                        float: true,
                        title: 'Idiomas',
                        displayField: 'text',
                        store: 'Menu_Language',
                        useToolbar: false,
                        zIndex: 45,
                        showAnimation:  
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
                            xtype: 'panel',
                             layout: 'fit',
                            //styleHtmlContent: true,
                            //scrollable: true,
                            //padding: '0px !important',
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
                               id: 'language_toolbar',
                               html: '<span style="background: #012f46; color:#FFF; float:left; font-size: 21px;margin-top: 7px; "><i class="icon-idioma" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Idiomas</span>',
                               }],
                        listeners: {
                            leafitemtap: function(me, list, index, target, record) {
                    
                                
                                   // me.getDetailCard().setHtml('');
                                  //  Ext.getCmp('teste99').setLayout('');
                                    me.getDetailCard().setScrollable(true);
                                    me.getDetailCard().setHtml('<div style="max-width:100%" class="leaf_panel">'+
                                    '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+
                                    record.get('text')+'</h3><br><p style="color:#FFF !important;">'+
                                    record.get('html')+'</p></div></div>');
                                    
                                }
                              /*me.getDetailCard().setHtml('<div style="max-width:100%" class="leaf_panel">'+
                                                        '<img style="max-width:100%; max-height:70%" src="'+products+record.get('foto')+'">'+
                                                        '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+record.get('text')+'</h3><br><p style="color:#FFF !important;">'+record.get('descricao')+'</p></div></div>');*/
                              // me.getDetailCard().setStyle('background-color: #054667;margin: 0px !important;padding: 0px !important');
                               // me.getDetailCard().setFullscreen(true);
                            
                            
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
                           //Ext.getCmp('open-menu').setStyle('color:#00aeef');
                        });     
                       }else{
                             //panel_list_menu.show();
                             //console.dir(panel_list_menu);
                            //alert('TESTE!!');
                           // panel_menu.hide();
                       }
                        
                        
                        
                        
                        
                        /*Ext.getCmp('menuI').hide();
                          Ext.getCmp('footer').hide();
                        Ext.getCmp('map').show();
                      /* if (contador > 0) { 
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
                                /*  {
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
                    }*/
                    
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
                           //cls: 'pesquisa2',
                           style: 'background: rgb(4, 51, 75);',
                           scrollable: {
                              direction: 'vertical',
                           },
                           float: true,
                           zIndex: 45,
                           showAnimation:  
                           {
                               type: 'slideIn',
                               //duration: 1000,
                               direction: 'left',
                               //easing: 'easeIn'
                           },  
                           items: [
                               {
                               xtype: 'toolbar',
                               docked: 'top',
                               cls: 'barra-menu',
                               zIndex: 50,
                               id: 'help_toolbar',
                               html: '<span style="background: #012f46; color:#FFF; float:left; font-size: 21px;margin-top: 7px; "><i class="icon-ajuda" style="font-size: 30px !important; margin: 12px; vertical-align: middle ;"></i>Ajuda</span>',
                               },
                               {
                                   html  : '<div style="max-width:100%" class="leaf_panel">'+
                                    '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+
                                    'Ajuda</h3><br><p style="color:#FFF !important;"><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>'+
                                     '</p></div></div>'
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
                               //Ext.getCmp('open-menu').setStyle('color:#00aeef');
                            });     
                       }else{
                             //panel_list_menu.show();
                             //console.dir(panel_list_menu);
                            //alert('TESTE!!');
                           // panel_menu.hide();
                       }
                    }
                    //hidden: true,
            }
            ]    
        },
      /*  {
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
        },*/
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
            cls: 'favorites',
             plugins: 'swipetabs',
        },
       /* {
            xtype: 'my-viewport6',
            hidden: true,
            id: 'search',
            cls: 'pesquisa',
        },*/
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
        'Menu_Language',
        'Group',
        'Products_Caixilharia',
        'Products_Extrusao',
        'Products_Vidro',
        'Works',
        'Works_Gallery',
        'Services_Caixilharia',
        'Services_Vidro',
        'Services_Extrusao',
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
        
        //Ext.getStore('Products');
        //Ext.getStore('produtos') = Ext.getStore('Products');
        //console.dir( Ext.getStore('Teste'));
        Ext.Msg.setZIndex(100);
        
        Ext.MessageBox.override({
                    confirm: function(title, message, fn, scope) {
                    return this.show({
                        title       : title || null,
                        message     : message || null,
                        buttons     : [
                        {text: "Não",  itemId: 'no'},
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
        
        /*itry{
            var existe = Ext.getStore('Settings').getAt(0).get('lang');
        }
        catch(e){}
        f (existe === undefined) {
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
        /*try {
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
        } */
    }
    
    function onBackKeyDown(eve) {
            eve.preventDefault();
            /*if(Ext.getCmp('search')._hidden === false)
                        {
                            Ext.getCmp('search').hide();
                            Ext.getCmp('products').hide();
                            Ext.getCmp('works').hide();
                            Ext.getCmp('favorites').show();
                        }else*/ if (typeof Ext.getCmp('list-menu-language') != 'undefined') {
                         
                                if (Ext.getCmp('list-menu-language').getBackButton()._hidden === false) {
                                    Ext.getCmp('list-menu-language').onBackTap();
                                }
                                else{
                                    Ext.getCmp('list-menu-language').destroy();
                                    Ext.getCmp('back').hide();
                                    panel_language = undefined;
                                    /*try{
                                    
                                    panel_list_menu.destroy();
                                    panel_list_menu = undefined;
                                    }catch(e){}*/
                                }
                         }else if (typeof Ext.getCmp('list-help') != 'undefined') {
                         
                                /*if (Ext.getCmp('list-help').getBackButton()._hidden === false) {
                                    Ext.getCmp('list-help').onBackTap();
                                }
                                else{*/
                                    Ext.getCmp('list-help').destroy();
                                    Ext.getCmp('back').hide();
                                    panel_help = undefined;
                                    /*try{
                                    
                                    panel_list_menu.destroy();
                                    panel_list_menu = undefined;
                                    }catch(e){}*/
                               /* }*/
                           
                        }else if (typeof Ext.getCmp('list-menu') != 'undefined') {
                         
                                if (Ext.getCmp('list-menu').getBackButton()._hidden === false) {
                                    Ext.getCmp('list-menu').onBackTap();
                                }
                                else{
                                    Ext.getCmp('list-menu').destroy();
                                    Ext.getCmp('open-menu').setStyle('color:#00aeef');
                                    panel_list_menu = undefined;
                                    /*try{
                                    
                                    panel_list_menu.destroy();
                                    panel_list_menu = undefined;
                                    }catch(e){}*/
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
                             try{
                                Ext.getCmp('mapa2').destroy();
                            }catch(e){}
                        }
                        else if(Ext.getCmp('favorites')._hidden === false) {
                            Ext.getCmp('favorites').hide();
                            Ext.getCmp('menuI').show();
                            Ext.getCmp('footer').show();
                            // Ext.getCmp('teste').goToNode( Ext.getCmp('teste').getStore().getRoot() );
                               Ext.getCmp('open-menu').hide();
                              Ext.getCmp('back').hide();
                        }else
                        {
                        Ext.Msg.confirm("Sair", "Deseja sair da aplicação?",  function ( answer ) { 
                                if ( answer == 'yes') { 
                                    navigator.app.exitApp();
                                } else { 
                               
                                } 
                            });
                        }
            
            
            
           /* try {
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
            */
    }
    
    function onMenuKeyDown(eve) {
            eve.preventDefault();
             if (typeof panel_list_menu === 'undefined' && Ext.getCmp('menuI')._hidden === true)  {
                        Ext.getCmp('open-menu').setStyle('color:#FFF');
                        panel_list_menu = Ext.Viewport.add({
                        xtype : 'nestedlist',
                        id:'list-menu',
                        //cls: 'lista-extras',
                        float: true,
                        zIndex: 45,
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
                            xtype: 'panel',
                             layout: 'fit',
                            //styleHtmlContent: true,
                            //scrollable: true,
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
                                if (record.get('id') == 3) {
                                    //alert('teste');
                                    try{
                                    Ext.getCmp('mapa').show();
                                    }catch(e){}
                                     me.getDetailCard().setHtml('');
                                      //me.getDetailCard().setLayout();
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
                        
                                        /*plugins : [
                                            new Ext.plugin.google.Tracker({
                                                trackSuspended: true,   //suspend tracking initially
                                                allowHighAccuracy: false,
                                                marker: new google.maps.Marker({
                                                    position: position,
                                                    title: 'My Current Location',
                                                    shadow: shadow,
                                                    icon: image
                                                })
                                            }),
                                            new Ext.plugin.google.Traffic()
                                        ],*/
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
                                                    title : 'SOSOARES - SERVIÇOS TÉCNICOS E COMERCIAIS',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow2 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - SERVIÇOS TÉCNICOS E COMERCIAIS<br>'+
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
                                                    'Rua do Baldeirão, s/n 4440 - 346 Sobrado - Valongo<br>'+
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
                                                    'Armazém nº1 E.N.8 - Chão da Feira, 9 2480-060 Calvaria de Cima<br>'+
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
                                                    title : 'SOSOARES - FÁBR. TRANSF. VIDRO',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow6 = new google.maps.InfoWindow({
                                                    content: 'SOSOARES - FÁBR. TRANSF. VIDRO<br>'+
                                                    'Zona Ind. Coimbrões, Lt. 101/102 S. João de Lourosa - 3500-618  VISEU<br>'+
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
                                                    'Zona Ind. Coimbrões, Lt.41 3500-886 S.João Lourosa - Viseu<br>'+
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
                                                    'Sítio do Vale da Venda EN 125, Km 98.8 8135-037 Almancil<br>'+
                                                    'Telf.: (indisponível)<br>'+
                                                    'Email: sosoares.faro@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker8,'click', function(){
                                                    infoWindow8.open(map,marker8);
                                                });
                                                
                                                var marker9 = new google.maps.Marker({
                                                    position: position9,
                                                    title : 'METALFER - METALÚRGICA DE FERMENTELOS, S.A.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow9 = new google.maps.InfoWindow({
                                                    content: 'METALFER - METALÚRGICA DE FERMENTELOS, S.A.<br>'+
                                                    'Travessa do Bolegão, 146 Apartado1 3754-904 Fermentelos<br>'+
                                                    'Telf.: 234 729 740  |   Fax: 234 729 741<br>'+
                                                    'Email: metalfer@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker9,'click', function(){
                                                    infoWindow9.open(map,marker9);
                                                });
                                                
                                                var marker10 = new google.maps.Marker({
                                                    position: position10,
                                                    title : 'ALFA SUL - ALUMÍNIOS DO SUL, LDA',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow10 = new google.maps.InfoWindow({
                                                    content: 'ALFA SUL - ALUMÍNIOS DO SUL, LDA<br>'+
                                                    'E.N. Lisboa - Sintra Km 14 Apartado 156 2726-936 Mem Martins<br>'+
                                                    'Telf.: 219 265 090  |   Fax: 219 256 098<br>'+
                                                    'Email: alfa.sul@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker10,'click', function(){
                                                    infoWindow10.open(map,marker10);
                                                });
                                                
                                                var marker11 = new google.maps.Marker({
                                                    position: position11,
                                                    title : 'PERFISOEIRAS - SOC. EXTRUSÃO ALUMÍNIO E COBRE, SA.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow11 = new google.maps.InfoWindow({
                                                    content: 'PERFISOEIRAS - SOC. EXTRUSÃO ALUMÍNIO E COBRE, SA.<br>'+
                                                    'Rua da Colónia - Quinta da Cardosa Apartado 214 - Abrunheira 2711-952 Sintra<br>'+
                                                    'Telf.: 219 156 660  |   Fax: 219 156 661<br>'+
                                                    'Email: perfis.oeiras@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker11,'click', function(){
                                                    infoWindow11.open(map,marker11);
                                                });
                                                
                                                var marker12 = new google.maps.Marker({
                                                    position: position12,
                                                    title : 'ALULIDER - INDÚSTRIA E COMÉRCIO DE ALUMÍNIO, LDA',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow12 = new google.maps.InfoWindow({
                                                    content: 'ALULIDER - INDÚSTRIA E COMÉRCIO DE ALUMÍNIO, LDA'+
                                            'Pav. Industrial H - Plataforma 13D Zona Franca Industrial 9200-047 Caniçal - Madeira'+
                                            'Telf.: 291 960 488 / 291 960 494  |   Fax: 291 960 497'+
                                            'Email: Alulider@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker12,'click', function(){
                                                    infoWindow12.open(map,marker12);
                                                });
                                                
                                                var marker13 = new google.maps.Marker({
                                                    position: position,
                                                    title : 'INTERALUMÍNIOS - SOC. COMERCIALIZAÇÃO ALUMÍNIOS, LDA.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow13 = new google.maps.InfoWindow({
                                                    content: 'INTERALUMÍNIOS - SOC. COMERCIALIZAÇÃO ALUMÍNIOS, LDA.<br>'+
                                                    'Alto da Venda Nova, 68 B - Apartado 251 2304-909 Tomar<br>'+
                                                    'Telf.: 249 301 493  |   Fax: 249 301 628<br>'+
                                                    'Email: interaluminios@sosoares.pt'
                                                });
                                
                                                google.maps.event.addListener(marker13,'click', function(){
                                                    infoWindow13.open(map,marker13);
                                                });
                                                
                                                var marker14 = new google.maps.Marker({
                                                    position: position14,
                                                    title : 'PEOVIS - COMÉRCIO DE ALUMÍNIOS, LDA.',
                                                    icon: 'imgs/marker.png',
                                                    map: map
                                                });
                                                
                                                var infoWindow14 = new google.maps.InfoWindow({
                                                    content: 'PEOVIS - COMÉRCIO DE ALUMÍNIOS, LDA.<br>'+
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
                                }else{
                                try{
                                    Ext.getCmp('mapa').hide();
                                    }catch(e){}
                                   // me.getDetailCard().setHtml('');
                                  //  Ext.getCmp('teste99').setLayout('');
                                    me.getDetailCard().setScrollable(true);
                                    me.getDetailCard().setHtml('<div style="max-width:100%" class="leaf_panel">'+
                                    '<br/><div style="margin:10px"><h3 style="font-size: 24px; color:#00aeef !important">'+
                                    record.get('text')+'</h3><br><p style="color:#FFF !important;">'+
                                    record.get('html')+'</p></div></div>');
                                    me.getDetailCard().getScrollable().getScroller().scrollTo(0,0.1, false);
                                    
                                }
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
                           panel_list_menu.setDetailCard('')
                           panel_list_menu.destroy();
                           panel_list_menu = undefined;
                           Ext.getCmp('open-menu').setStyle('color:#00aeef');
                        });     
                       }else{
                             //panel_list_menu.show();
                             //console.dir(panel_list_menu);
                            //alert('TESTE!!');
                           // panel_menu.hide();
                           Ext.getCmp('list-menu').destroy();
                           Ext.getCmp('open-menu').setStyle('color:#00aeef');
                           panel_list_menu = undefined;
                       }
            
            
           /* var panel_menu = Ext.Viewport.add({ 
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

        });*/
    }
    onLoad();
    
    }
});
//});
//};
