Ext.define('ItalboxCatalog.store.Works', {
        extend: 'Ext.data.TreeStore',
        config: {
             fields: [
                {name: 'id_obra',type: 'int'},
                {name: 'text',type: 'string'},
                {name: 'descricao',type: 'string'},
                {name: 'foto', type: 'string' },
             ],
        defaultRootProperty: 'items',
        proxy: {
            type: 'ajax',
            url: 'http://critecns.com/sosoares_app/connect2.php?table=obras',
            extraParams:{
                format:'json'
            },
        },
        root: {
            text:'Obras'
        }
    }
});