Ext.define('ItalboxCatalog.store.Menu', {
        extend: 'Ext.data.TreeStore',
        //defaultRootProperty: 'items',
        config: {
             fields: [
                {name: 'id',type: 'string'},
                {name: 'text',type: 'string'},
               /* {name: 'descricao',type: 'string'},*/
                {name: 'icon', type: 'string' },
             ],
      /*  defaultRootProperty: 'items',
        proxy: {
            type: 'ajax',
            url: 'http://critecns.com/sosoares_app/connect2.php?table=produtos_aluminio'
        },*/
        autoLoad: true,
        /*root: {
            text:'Menu'
        },*/
        //model: 'App.model.Grocery',
            defaultRootProperty: 'items',
            root: {
                text:'Menu',
                items: [/*{
                    id: 'grupo',
                    text: 'Grupo Sosoares',
                    icon: 'icon-sosoares',
                    items: [{
                        text: 'Sobre Nós',
                        icon: 'icon-sosoares',
                        leaf: true
                    },
                    {
                        text: 'Quem Somos',
                        icon: 'icon-obras',
                        leaf: true
                    },
                    {
                        text: 'Missões e Valores',
                        icon: 'icon-obras',
                        leaf: true
                    },
                    {
                        text: 'Mercados Alvo',
                        icon: 'icon-obras',
                        leaf: true
                    },
                    {
                        text: 'Áreas Comerciais',
                        icon: 'icon-obras',
                        leaf: true
                    }]
                },*/ {
                    text: 'Apoio a Clientes',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Contactos',
                    icon: 'icon-call',
                    leaf: true
                },
                {
                    text: 'Onde Estamos',
                    icon: 'icon-local',
                    leaf: true
                },
                {
                    text: 'Idiomas',
                    icon: 'icon-language',
                    leaf: true
                },
                {
                    text: 'Ajuda',
                    icon: 'icon-help',
                    leaf: true
                }
                ]
            }
        
    }



});