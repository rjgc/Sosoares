Ext.define('ItalboxCatalog.store.Treatment', {
    extend: 'Ext.data.Store',
    config:{
        autoLoad: true,
        fields: [
            { name: 'id', type: 'int' },
            { name: 'html', type: 'string' }
        ],
        data : [{
                id : '1_1',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Lacagem</h3><br>'+
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
                id : '1_2',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Anodização</h3><br><p>A anodização consiste num processo electrolítico que promove a formação de uma “película” decorativa, protectora e uniforme. Essa “película” ou camada de óxido é classificada e designada por um número correspondente à espessura em microns (µ). A escolha dessa espessura é definida em função da agressividade do meio ambiente e normalizada pela norma <strong>NP1476</strong>.</p>'+
                        '<p>Sendo a espessura normal de 15µ pode-se optar por 20µ para zonas marítimas ou até 25µ em condições muito especiais (proximidade de fábricas que produzam agentes químicos, etc.). No estado anódico normal, o alumínio fica com uma aspecto “mate” leitoso, podendo receber tratamentos mecânicos: Polido (aspecto brilhante) ou Escovado.</p>'+
                        '<p>O Grupo Sosoares dispõe de duas unidades industriais detentoras do certificado de qualidade Europeu EURAS (<strong>QUALANOD</strong>)- Alfa Sul em Mem Martins e Metalfer S.A. em Fermentelos – que asseguram as necessidades do grupo neste tipo de tratamentos, prestando igualmente serviços a terceiros.</p></div>'
                       
                },
                {
                id : '1_3',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Imitação Madeira</h3><br><p>Para responder à crescente procura de materiais em lacado imitação madeira, a Sosoares SA decidiu em meados de 2004 instalar uma nova unidade para oferecer aos seus clientes, produtos com este novo tratamento com os mesmos padrões de qualidade aplicados.</p></div>'
                },
                {
                id : '1_4',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Área Técnica</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '1_5',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Apoio Cliente</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '2_1',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Lacquering</h3><br>'+
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
                id : '2_2',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Anodizing</h3><br><p>A anodização consiste num processo electrolítico que promove a formação de uma “película” decorativa, protectora e uniforme. Essa “película” ou camada de óxido é classificada e designada por um número correspondente à espessura em microns (µ). A escolha dessa espessura é definida em função da agressividade do meio ambiente e normalizada pela norma <strong>NP1476</strong>.</p>'+
                        '<p>Sendo a espessura normal de 15µ pode-se optar por 20µ para zonas marítimas ou até 25µ em condições muito especiais (proximidade de fábricas que produzam agentes químicos, etc.). No estado anódico normal, o alumínio fica com uma aspecto “mate” leitoso, podendo receber tratamentos mecânicos: Polido (aspecto brilhante) ou Escovado.</p>'+
                        '<p>O Grupo Sosoares dispõe de duas unidades industriais detentoras do certificado de qualidade Europeu EURAS (<strong>QUALANOD</strong>)- Alfa Sul em Mem Martins e Metalfer S.A. em Fermentelos – que asseguram as necessidades do grupo neste tipo de tratamentos, prestando igualmente serviços a terceiros.</p></div>'
                       
                },
                {
                id : '2_3',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Wood Imitation</h3><br><p>Para responder à crescente procura de materiais em lacado imitação madeira, a Sosoares SA decidiu em meados de 2004 instalar uma nova unidade para oferecer aos seus clientes, produtos com este novo tratamento com os mesmos padrões de qualidade aplicados.</p></div>'
                },
                {
                id : '2_4',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Technical Area</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '2_5',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Customer Service</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '3_1',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Laquage</h3><br>'+
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
                id : '3_2',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Anodisation</h3><br><p>A anodização consiste num processo electrolítico que promove a formação de uma “película” decorativa, protectora e uniforme. Essa “película” ou camada de óxido é classificada e designada por um número correspondente à espessura em microns (µ). A escolha dessa espessura é definida em função da agressividade do meio ambiente e normalizada pela norma <strong>NP1476</strong>.</p>'+
                        '<p>Sendo a espessura normal de 15µ pode-se optar por 20µ para zonas marítimas ou até 25µ em condições muito especiais (proximidade de fábricas que produzam agentes químicos, etc.). No estado anódico normal, o alumínio fica com uma aspecto “mate” leitoso, podendo receber tratamentos mecânicos: Polido (aspecto brilhante) ou Escovado.</p>'+
                        '<p>O Grupo Sosoares dispõe de duas unidades industriais detentoras do certificado de qualidade Europeu EURAS (<strong>QUALANOD</strong>)- Alfa Sul em Mem Martins e Metalfer S.A. em Fermentelos – que asseguram as necessidades do grupo neste tipo de tratamentos, prestando igualmente serviços a terceiros.</p></div>'
                       
                },
                {
                id : '3_3',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Imitation Bois</h3><br><p>Para responder à crescente procura de materiais em lacado imitação madeira, a Sosoares SA decidiu em meados de 2004 instalar uma nova unidade para oferecer aos seus clientes, produtos com este novo tratamento com os mesmos padrões de qualidade aplicados.</p></div>'
                },
                {
                id : '3_4',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Secteur Technique</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '3_5',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Service Client</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '4_1',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Lacado</h3><br>'+
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
                id : '4_2',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Anodizacin</h3><br><p>A anodização consiste num processo electrolítico que promove a formação de uma “película” decorativa, protectora e uniforme. Essa “película” ou camada de óxido é classificada e designada por um número correspondente à espessura em microns (µ). A escolha dessa espessura é definida em função da agressividade do meio ambiente e normalizada pela norma <strong>NP1476</strong>.</p>'+
                        '<p>Sendo a espessura normal de 15µ pode-se optar por 20µ para zonas marítimas ou até 25µ em condições muito especiais (proximidade de fábricas que produzam agentes químicos, etc.). No estado anódico normal, o alumínio fica com uma aspecto “mate” leitoso, podendo receber tratamentos mecânicos: Polido (aspecto brilhante) ou Escovado.</p>'+
                        '<p>O Grupo Sosoares dispõe de duas unidades industriais detentoras do certificado de qualidade Europeu EURAS (<strong>QUALANOD</strong>)- Alfa Sul em Mem Martins e Metalfer S.A. em Fermentelos – que asseguram as necessidades do grupo neste tipo de tratamentos, prestando igualmente serviços a terceiros.</p></div>'
                       
                },
                {
                id : '4_3',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Imitación Madera</h3><br><p>Para responder à crescente procura de materiais em lacado imitação madeira, a Sosoares SA decidiu em meados de 2004 instalar uma nova unidade para oferecer aos seus clientes, produtos com este novo tratamento com os mesmos padrões de qualidade aplicados.</p></div>'
                },
                {
                id : '4_4',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Área Técnica</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '4_5',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Asistencia Cliente</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
        ]
    }
});


