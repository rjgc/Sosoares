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
                        '<p>A lacagem � um processo de pintura com base em'+ 'poli�ster, termoendurec�vel. Comp�e-se de um ciclo de pr�-tratamento, por imers�o, cujas principias finalidades s�o preparar os'+'perfis para a pintura, proteg�-los da corros�o e maximizar a ades�o da tinta.</p>'+
                        '<p>O Pr�-tratamento assenta nas seguintes opera��es:</p>'+
                        '<ul class="lista">'+
                        '<li>Banho de desengorduramento</li>'+
                        '<li>Lavagem corrente</li>'+
                        '<li>Decapagem</li>'+
                        '<li>Lavagem corrente</li>'+
                        '<li>Passiva��o</li>'+
                        '<li>Lavagem com �gua</li>'+
                        '<li>Lavagem com �gua desmineralizada</li>'+
                        '<li>Estufa de secagem</li>'+
                        '</ul>'+
                        '<p>Posteriormente, os perfis de alum�nio dar�o entrada nas unidades de pintura onde as part�culas de p�, carregadas de'+ 'electricidade est�tica, se depositam uniformemente nas superf�cies dos perfis. Depois de transportados para o forno de'+ 'polimeriza��o, a temperatura far� com que se crie uma camada homog�nea, de lacagem, nos perfis.</p>'+
                        '<p>Controlo de Produto Acabado:</p>'+
                        '<p>Todo o processo decorre em condi��es de controlo, de acordo com a norma de qualidade QUALICOAT.</p>'+
                        '<p>Assim, s�o controlados os banhos de pr�-tratamento, a temperatura de polimeriza��o, verificadas as espessuras da camada de'+'lacagem e a ader�ncia da mesma, bem como a verifica��o da cor por compara��o e brilho (Normas NP EN ISO).</p>'+
                        '<p>Um laborat�rio de apoio com equipamento apropriado garante a realiza��o de ensaios qu�micos e f�sicos.</p>'+
                        '<p>Sosoares lacagem, constitui a unidade de lacagem do Grupo Sosoares e � detentora do certificado europeu de qualidade'+
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


