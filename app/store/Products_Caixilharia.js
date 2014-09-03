Ext.define('ItalboxCatalog.store.Products_Caixilharia', {
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
            url: 'http://critecns.com/sosoares_app/connect2.php?table=produtos_aluminio',
            extraParams:{
                format:'json'
            },
        },
        root: {
            text:'Produtos'
        }
    }
});