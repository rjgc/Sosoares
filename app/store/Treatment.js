Ext.define('ItalboxCatalog.store.Treatment', {
    extend: 'Ext.data.Store',
    config:{
        autoLoad: true,
        fields: [
            { name: 'id', type: 'int' },
            { name: 'html', type: 'string' }
        ],
        data : [{
                id : 1,
                html:   '<div style="margin:10px"><br><h3 style="font-size: 24px; color:#00aeef !important">Lacagem</h3><br>'+
                        '<p>A lacagem é um processo de pintura com base em'+ 'poliéster, termoendurecível. Compõe-se de um ciclo de pré-tratamento, por imersão, cujas principias finalidades são preparar os'+'perfis para a pintura, protegê-los da corrosão e maximizar a adesão da tinta.</p>'+
                        '<p>O Pré-tratamento assenta nas seguintes operações:</p>'+
                        '<ul class="lista">'+
                        '<li>Banho de desengorduramento</li>'+
                        '<li>Lavagem corrente</li>'+
                        '<li>Decapagem</li>'+
                        '<li>Lavagem corrente</li>'+
                        '<li>Passivação</li>'+
                        '<li>Lavagem com água</li>'+
                        '<li>Lavagem com água desmineralizada</li>'+
                        '<li>Estufa de secagem</li>'+
                        '</ul>'+
                        '<p>Posteriormente, os perfis de alumínio darão entrada nas unidades de pintura onde as partículas de pó, carregadas de'+ 'electricidade estática, se depositam uniformemente nas superfícies dos perfis. Depois de transportados para o forno de'+ 'polimerização, a temperatura fará com que se crie uma camada homogénea, de lacagem, nos perfis.</p>'+
                        '<p>Controlo de Produto Acabado:</p>'+
                        '<p>Todo o processo decorre em condições de controlo, de acordo com a norma de qualidade QUALICOAT.</p>'+
                        '<p>Assim, são controlados os banhos de pré-tratamento, a temperatura de polimerização, verificadas as espessuras da camada de'+'lacagem e a aderência da mesma, bem como a verificação da cor por comparação e brilho (Normas NP EN ISO).</p>'+
                        '<p>Um laboratório de apoio com equipamento apropriado garante a realização de ensaios químicos e físicos.</p>'+
                        '<p>Sosoares lacagem, constitui a unidade de lacagem do Grupo Sosoares e é detentora do certificado europeu de qualidade'+
                        'QUALICOAT.</p></div></div>'
                },
                {
                id : 2,
                html: ''
                },
                {
                id : 3,
                html: ''
                },
        ]
    }
});


