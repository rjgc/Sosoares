/*Ext.define('ItalboxCatalog.store.Languages', {
    extend: 'Ext.data.Store',
    config:{
        autoLoad: true,
        fields: [
            { name: 'id', type: 'int' },
           
        ],
        data : [
        {
        id : 1,
        },
        ]
    }
});*/

Ext.define('ItalboxCatalog.store.Teste', {
        extend: 'Ext.data.TreeStore',
        //defaultRootProperty: 'items',

        config: {
             fields: [
               // {name: 'id',type: 'string'},
                {name: 'text',type: 'string'},
                {name: 'foto', type: 'string' },
             ],
        //model: 'App.model.Grocery',
              defaultRootProperty: 'items',
            root: {
                items: [{
                    text: 'Drinks',
                    icon: 'icon-sosoares',
                    items: [{
                        text: 'Water',
                        icon: '',
                         proxy: {
            type: 'ajax',
            url: 'http://critecns.com/sosoares_app/connect2.php?table=produtos_aluminio'
        },
                    }, {
                        text: 'Soda',
                        icon: '',
                        leaf: true
                    }]
                }, {
                    text: 'Snacks',
                    icon: '',
                    items: [{
                        text: 'Nuts',
                        icon: '',
                        leaf: true
                    }, {
                        text: 'Pretzels',
                        icon: '',
                        leaf: true
                    }, {
                        text: 'Wasabi Peas',
                        icon: '',
                        leaf: true
                    }]
                }]
            }
       /* defaultRootProperty: 'items',
        proxy: {
            type: 'ajax',
            url: 'http://critecns.com/sosoares_app/connect2.php?table=produtos_aluminio'
        },
        autoLoad: true,
        root: {
            text:'Produtos'
        }*/
    }



});