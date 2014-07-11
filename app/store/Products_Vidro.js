Ext.define('ItalboxCatalog.store.Products_Vidro', {
        extend: 'Ext.data.TreeStore',
        //defaultRootProperty: 'items',
        config: {
             fields: [
                {name: 'id_vidro',type: 'int'},
                {name: 'text',type: 'string'},
                {name: 'descricao',type: 'string'},
                {name: 'foto', type: 'string' },
             ],
        defaultRootProperty: 'items',
        proxy: {
            type: 'ajax',
            url: 'http://critecns.com/sosoares_app/connect2.php?table=produtos_vidro'
        },
        /*autoLoad: true,*/
        root: {
            text:'Produtos'
        }
        //model: 'App.model.Grocery',
          /*    defaultRootProperty: 'items',
            root: {
                items: [{
                    text: 'Drinks',
                    icon: 'icon-sosoares',
                    items: [{
                        text: 'Water',
                        icon: '',
                        items: [{
                            text: 'Still',
                            icon: '',
                            leaf: true
                        }, {
                            text: 'Sparkling',
                            icon: '',
                            leaf: true
                        }]
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
            }*/
        
    }



});