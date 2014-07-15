Ext.define('ItalboxCatalog.store.Services_Caixilharia', {
        extend: 'Ext.data.TreeStore',
        //defaultRootProperty: 'items',
        config: {
             fields: [
                {name: 'id',type: 'string'},
                {name: 'text',type: 'string'},
                {name: 'html',type: 'string'},
                {name: 'foto',type: 'string'},
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
                text:'Serviços',
                items: [{
                    text: 'Anodização',
                    html: '<p>A anodização consiste num processo electrolítico que promove a formação de uma “película” decorativa, protectora e uniforme. Essa “película” ou camada de óxido é classificada e designada por um número correspondente à espessura em microns (µ). A escolha dessa espessura é definida em função da agressividade do meio ambiente e normalizada pela norma <strong>NP1476</strong>.</p>'+
'<p>Sendo a espessura normal de 15µ pode-se optar por 20µ para zonas marítimas ou até 25µ em condições muito especiais (proximidade de fábricas que produzam agentes químicos, etc.). No estado anódico normal, o alumínio fica com uma aspecto “mate” leitoso, podendo receber tratamentos mecânicos: Polido (aspecto brilhante) ou Escovado.</p>'+
'<p>O Grupo Sosoares dispõe de duas unidades industriais detentoras do certificado de qualidade Europeu EURAS (<strong>QUALANOD</strong>)- Alfa Sul em Mem Martins e Metalfer S.A. em Fermentelos – que asseguram as necessidades do grupo neste tipo de tratamentos, prestando igualmente serviços a terceiros.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
               {
                    text: 'Lacagem',
                     html: '<p>A anodização consiste num processo electrolítico que promove a formação de uma “película” decorativa, protectora e uniforme. Essa “película” ou camada de óxido é classificada e designada por um número correspondente à espessura em microns (µ). A escolha dessa espessura é definida em função da agressividade do meio ambiente e normalizada pela norma <strong>NP1476</strong>.</p>'+
'<p>Sendo a espessura normal de 15µ pode-se optar por 20µ para zonas marítimas ou até 25µ em condições muito especiais (proximidade de fábricas que produzam agentes químicos, etc.). No estado anódico normal, o alumínio fica com uma aspecto “mate” leitoso, podendo receber tratamentos mecânicos: Polido (aspecto brilhante) ou Escovado.</p>'+
'<p>O Grupo Sosoares dispõe de duas unidades industriais detentoras do certificado de qualidade Europeu EURAS (<strong>QUALANOD</strong>)- Alfa Sul em Mem Martins e Metalfer S.A. em Fermentelos – que asseguram as necessidades do grupo neste tipo de tratamentos, prestando igualmente serviços a terceiros.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Imitação Madeira',
                      html: '<p>A anodização consiste num processo electrolítico que promove a formação de uma “película” decorativa, protectora e uniforme. Essa “película” ou camada de óxido é classificada e designada por um número correspondente à espessura em microns (µ). A escolha dessa espessura é definida em função da agressividade do meio ambiente e normalizada pela norma <strong>NP1476</strong>.</p>'+
'<p>Sendo a espessura normal de 15µ pode-se optar por 20µ para zonas marítimas ou até 25µ em condições muito especiais (proximidade de fábricas que produzam agentes químicos, etc.). No estado anódico normal, o alumínio fica com uma aspecto “mate” leitoso, podendo receber tratamentos mecânicos: Polido (aspecto brilhante) ou Escovado.</p>'+
'<p>O Grupo Sosoares dispõe de duas unidades industriais detentoras do certificado de qualidade Europeu EURAS (<strong>QUALANOD</strong>)- Alfa Sul em Mem Martins e Metalfer S.A. em Fermentelos – que asseguram as necessidades do grupo neste tipo de tratamentos, prestando igualmente serviços a terceiros.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ]
            }
        
    }



});