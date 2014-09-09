Ext.define('ItalboxCatalog.store.Services_Caixilharia_1', {
        extend: 'Ext.data.TreeStore',
        config: {
             fields: [
                {name: 'id',type: 'string'},
                {name: 'text',type: 'string'},
                {name: 'html',type: 'string'},
                {name: 'foto',type: 'string'},
                {name: 'icon', type: 'string' },
             ],
        autoLoad: true,
            defaultRootProperty: 'items',
            root: {
                text:'Serviços',
                items: [{
                    text: 'Anodização',
                    html: '<p>A anodização consiste num processo electrolítico que promove a formação de uma “película” decorativa, protectora e uniforme. Essa “película” ou camada de óxido é classificada e designada por um número correspondente à espessura em microns (µ). A escolha dessa espessura é definida em função da agressividade do meio ambiente e normalizada pela norma <strong>NP1476</strong>.</p><br>'+
'<p>Sendo a espessura normal de 15µ pode-se optar por 20µ para zonas marítimas ou até 25µ em condições muito especiais (proximidade de fábricas que produzam agentes químicos, etc.). No estado anódico normal, o alumínio fica com uma aspecto “mate” leitoso, podendo receber tratamentos mecânicos: Polido (aspecto brilhante) ou Escovado.</p><br>'+
'<p>O Grupo Sosoares dispõe de duas unidades industriais detentoras do certificado de qualidade Europeu EURAS (<strong>QUALANOD</strong>)- Alfa Sul em Mem Martins e Metalfer S.A. em Fermentelos – que asseguram as necessidades do grupo neste tipo de tratamentos, prestando igualmente serviços a terceiros.</p>',
                    foto: 'imgs/anodizacao.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
               {
                    text: 'Lacagem',
                     html: '<p>A lacagem é um processo de pintura com base em poliéster, termoendurecível. Compõe-se de um ciclo de pré-tratamento, por imersão, cujas principias finalidades são preparar os perfis para a pintura, protegê-los da corrosão e maximizar a adesão da tinta.</p><br>'+
                        '<p>O Pré-tratamento assenta nas seguintes operações:</p><br>'+
                        '<ul class="lista">'+
                        '<li>-Banho de desengorduramento</li>'+
                        '<li>-Lavagem corrente</li>'+
                        '<li>-Decapagem</li>'+
                        '<li>-Lavagem corrente</li>'+
                        '<li>-Passivação</li>'+
                        '<li>-Lavagem com água</li>'+
                        '<li>-Lavagem com água desmineralizada</li>'+
                        '<li>-Estufa de secagem</li>'+
                        '</ul><br>'+
                        '<p>Posteriormente, os perfis de alumínio darão entrada nas unidades de pintura onde as partículas de pó, carregadas de electricidade estática, se depositam uniformemente nas superfícies dos perfis. Depois de transportados para o forno de polimerização, a temperatura fará com que se crie uma camada homogénea, de lacagem, nos perfis.</p>'+
                        '<br><p>Controlo de Produto Acabado:</p><br>'+
                        '<p>Todo o processo decorre em condições de controlo, de acordo com a norma de qualidade QUALICOAT.</p>'+
                        '<p>Assim, são controlados os banhos de pré-tratamento, a temperatura de polimerização, verificadas as espessuras da camada de lacagem e a aderência da mesma, bem como a verificação da cor por comparação e brilho (Normas NP EN ISO).</p>'+
                        '<br><p>Um laboratório de apoio com equipamento apropriado garante a realização de ensaios químicos e físicos.</p>'+
                        '<p>Sosoares lacagem, constitui a unidade de lacagem do Grupo Sosoares e é detentora do certificado europeu de qualidade QUALICOAT.</p>',
                    foto: 'imgs/lacagem.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    text: 'Imitação Madeira',
                    html: '<p>Para responder à crescente procura de materiais em lacado imitação madeira, a Sosoares SA decidiu em meados de 2004 instalar uma nova unidade para oferecer aos seus clientes, produtos com este novo tratamento com os mesmos padrões de qualidade aplicados.</p>',
                    foto: 'imgs/imitacao_madeira.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                ]
            }
        
    }
});