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
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Lacagem</h3><br>'+
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
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Anodiza��o</h3><br><p>A anodiza��o consiste num processo electrol�tico que promove a forma��o de uma �pel�cula� decorativa, protectora e uniforme. Essa �pel�cula� ou camada de �xido � classificada e designada por um n�mero correspondente � espessura em microns (�). A escolha dessa espessura � definida em fun��o da agressividade do meio ambiente e normalizada pela norma <strong>NP1476</strong>.</p>'+
                        '<p>Sendo a espessura normal de 15� pode-se optar por 20� para zonas mar�timas ou at� 25� em condi��es muito especiais (proximidade de f�bricas que produzam agentes qu�micos, etc.). No estado an�dico normal, o alum�nio fica com uma aspecto �mate� leitoso, podendo receber tratamentos mec�nicos: Polido (aspecto brilhante) ou Escovado.</p>'+
                        '<p>O Grupo Sosoares disp�e de duas unidades industriais detentoras do certificado de qualidade Europeu EURAS (<strong>QUALANOD</strong>)- Alfa Sul em Mem Martins e Metalfer S.A. em Fermentelos � que asseguram as necessidades do grupo neste tipo de tratamentos, prestando igualmente servi�os a terceiros.</p></div>'
                       
                },
                {
                id : 3,
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Imita��o Madeira</h3><br><p>Para responder � crescente procura de materiais em lacado imita��o madeira, a Sosoares SA decidiu em meados de 2004 instalar uma nova unidade para oferecer aos seus clientes, produtos com este novo tratamento com os mesmos padr�es de qualidade aplicados.</p></div>'
                },
        ]
    }
});


