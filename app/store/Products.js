Ext.define('ItalboxCatalog.store.Products', {
    extend: 'Ext.data.Store',
    config: {
      model: 'ItalboxCatalog.model.Product',
      autoLoad: true,
      
      proxy: {
        type: 'ajax',
        url : 'http://critecns.com/sosoares_app/connect.php?table=produtos_aluminio',
        method : "POST",
        reader: 'json',
        id  : 'ProductKey',
        storeId : 'Products',
     }
    }
});