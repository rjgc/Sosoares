Ext.define('ItalboxCatalog.store.Works_Gallery', {
        extend: 'Ext.data.Store',
        config: {
          fields: [
                {name: 'id_obra',type: 'int'},
                {name: 'foto', type: 'string' },
             ],
          autoLoad: true,
          
          proxy: {
            type: 'ajax',
            url : 'http://critecns.com/sosoares_app/connect2.php?table=obras_gallery',
            method : "POST",
            reader: 'json',
            //id  : 'ProductKey',
            storeId : 'Works_Gallery',
         }
        }
        
});