Ext.define('ItalboxCatalog.store.Services_Extrusao', {
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
                text:'Servi�os',
               items: [{
                    text: 'Extrus�o de Produtos de Alum�nio',
                    html: '<p style="">Depois do desenvolvimento da solu��o com perfil de alum�nio extrudido e da execu��o da ferramenta que lhe dar� origem, vemos proceder � extrus�o desse perfil.</p>'+
                        '<br><p style="">O processo de extrus�o inicia-se com o pr�-aquecimento (cerca de 450�C) dos biletes de alum�nio que s�o posteriormente inseridos dentro da prensa de extrus�o.</p>'+
                        '<p style="">Com a ajuda de um pist�o, o bilete � pressionado contra um orif�cio que representa a sec��o pretendida. Este orif�cio � executado numa fieira fabricada em a�o especial de grande resist�ncia. O conjunto denomina-se matriz e � composto por uma placa e contraplaca.</p>'+
                        '<p style="">O perfil, j� com a sua forma definitiva, sai pela parte frontal da prensa, sendo conduzido por um equipamento de arrasto. O processo de arrefecimento do perfil, � acelerado atrav�s da convex�o for�ada de ar, obtendo a sua planimetria final com o aux�lio de um processo de estiramento.</p>'+
                        '<p style="">Seguidamente vem a opera��o de corte das barras de perfil nas medidas solicitadas pelo cliente, geralmente 6.00m, 6.30m e 6.50m de comprimento.</p>'+
                        '<p style="">A t�mpera, ou o processo de endurecimento dos perfis, � a opera��o seguinte e consiste na sua introdu��o numa estufa por um per�odo de cerca de 7 horas, a 200�C. Finalmente, a embalagem e a expedi��o ao cliente, fecham o processo.</p>'+
                        '<p style="">A qualidade do produto final � garantida pelo controlo espec�fico aplicado �s diversas fases do processo produtivo.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Desenvolvimento e Produ��o de Matrizes',
                    html: '<p>Um dos fatores chave para a extrus�o de perfis de alum�nio de excelente qualidade � o desenho e forma de produ��o das ferramentas, matrizes, que lhes d�o origem.</p>'+
                          '<p>Para proporcionar aos seus clientes perfis de alum�nio de qualidade extrema, e uma r�pida capacidade de resposta no desenvolvimento de novos projetos a Perfis Oeiras incorpora uma unidade pr�pria para produ��o das suas matrizes.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ],
            }
        
    }



});