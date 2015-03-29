Ext.define('ItalboxCatalog.store.Products_Search', {
        extend: 'Ext.data.TreeStore',
        config: {
             fields: [
                {name: 'id_caixilharia',type: 'int'},
                {name: 'text',type: 'string'},
                {name: 'descricao',type: 'string'},
                {name: 'foto', type: 'string' },
                {name: 'foto2',type: 'string'},
                {name: 'foto3',type: 'string'},
                {name: 'foto4',type: 'string'}
             ],
        defaultRootProperty: 'items',
        proxy: {
            type: 'ajax',
            url: 'http://grupososoares.pt/sosoares_app/connect.php?table=produtos_search',
            extraParams:{
                format:'json'
            },
        },
        root: {
            text:'Produtos'
        }
    }
});