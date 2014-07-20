Ext.define('ItalboxCatalog.store.Menu_Language', {
        extend: 'Ext.data.TreeStore',
        //defaultRootProperty: 'items',
        config: {
             fields: [
                {name: 'id',type: 'int'},
                {name: 'text',type: 'string'},
                {name: 'icon', type: 'string' },
             ],
      /*  defaultRootProperty: 'items',
        proxy: {
            type: 'ajax',
            url: 'http://critecns.com/sosoares_app/connect2.php?table=produtos_aluminio'
        },*/
        autoLoad: true,
            defaultRootProperty: 'items',
            root: {
                text:'Language',
                items: [
                    {
                        id: 10,
                        text: 'Português',
                        icon: '',
                        leaf: false,
                    },
                    {
                        id: 11,
                        text: 'English',
                        icon: '',
                        leaf: false,
                    },
                    {
                        id: 12,
                        text: 'Français',
                        icon: '',
                        leaf: false,
                    },
                    {
                        id: 13,
                        text: 'Espanhol',
                        icon: '',
                        leaf: false,
                    }
                    ]
                },
                
            
        
    }



});