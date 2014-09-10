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
                text:'Serviços',
               items: [{
                    text: 'Extrusão de Produtos de Alumínio',
                    html: '<p style="">Depois do desenvolvimento da solução com perfil de alumínio extrudido e da execução da ferramenta que lhe dará origem, vemos proceder à extrusão desse perfil.</p>'+
                        '<br><p style="">O processo de extrusão inicia-se com o pré-aquecimento (cerca de 450ºC) dos biletes de alumínio que são posteriormente inseridos dentro da prensa de extrusão.</p>'+
                        '<p style="">Com a ajuda de um pistão, o bilete é pressionado contra um orifício que representa a secção pretendida. Este orifício é executado numa fieira fabricada em aço especial de grande resistência. O conjunto denomina-se matriz e é composto por uma placa e contraplaca.</p>'+
                        '<p style="">O perfil, já com a sua forma definitiva, sai pela parte frontal da prensa, sendo conduzido por um equipamento de arrasto. O processo de arrefecimento do perfil, é acelerado através da convexão forçada de ar, obtendo a sua planimetria final com o auxílio de um processo de estiramento.</p>'+
                        '<p style="">Seguidamente vem a operação de corte das barras de perfil nas medidas solicitadas pelo cliente, geralmente 6.00m, 6.30m e 6.50m de comprimento.</p>'+
                        '<p style="">A têmpera, ou o processo de endurecimento dos perfis, é a operação seguinte e consiste na sua introdução numa estufa por um período de cerca de 7 horas, a 200ºC. Finalmente, a embalagem e a expedição ao cliente, fecham o processo.</p>'+
                        '<p style="">A qualidade do produto final é garantida pelo controlo específico aplicado às diversas fases do processo produtivo.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Desenvolvimento e Produção de Matrizes',
                    html: '<p>Um dos fatores chave para a extrusão de perfis de alumínio de excelente qualidade é o desenho e forma de produção das ferramentas, matrizes, que lhes dão origem.</p>'+
                          '<p>Para proporcionar aos seus clientes perfis de alumínio de qualidade extrema, e uma rápida capacidade de resposta no desenvolvimento de novos projetos a Perfis Oeiras incorpora uma unidade própria para produção das suas matrizes.</p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ],
            }
        
    }



});