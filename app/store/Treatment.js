Ext.define('ItalboxCatalog.store.Treatment', {
    extend: 'Ext.data.Store',
    config:{
        autoLoad: true,
        fields: [
            { name: 'id', type: 'int' },
            { name: 'cls', type: 'string' },
            { name: 'html', type: 'string' }
        ],
        data : [{
                id : '1_1',
                cls: '1',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Lacagem</h3><br>'+
                        '<p>A lacagem é um processo de pintura com base em'+ 'poliéster, termoendurecível. Compõe-se de um ciclo de pré-tratamento, por imersão, cujas principias finalidades são preparar os'+'perfis para a pintura, protegê-los da corrosão e maximizar a adesão da tinta.</p>'+
                        '<br><p>O Pré-tratamento assenta nas seguintes operações:</p>'+
                        '<br><ul class="lista">'+
                        '<li>-Banho de desengorduramento</li>'+
                        '<li>-Lavagem corrente</li>'+
                        '<li>-Decapagem</li>'+
                        '<li>-Lavagem corrente</li>'+
                        '<li>-Passivação</li>'+
                        '<li>-Lavagem com água</li>'+
                        '<li>-Lavagem com água desmineralizada</li>'+
                        '<li>-Estufa de secagem</li>'+
                        '</ul>'+
                        '<br><p>Posteriormente, os perfis de alumínio darão entrada nas unidades de pintura onde as partículas de pó, carregadas de'+ 'electricidade estática, se depositam uniformemente nas superfícies dos perfis. Depois de transportados para o forno de'+ 'polimerização, a temperatura fará com que se crie uma camada homogénea, de lacagem, nos perfis.</p>'+
                        '<br><p>Controlo de Produto Acabado:</p>'+
                        '<br><p>Todo o processo decorre em condições de controlo, de acordo com a norma de qualidade QUALICOAT.</p>'+
                        '<p>Assim, são controlados os banhos de pré-tratamento, a temperatura de polimerização, verificadas as espessuras da camada de'+'lacagem e a aderência da mesma, bem como a verificação da cor por comparação e brilho (Normas NP EN ISO).</p>'+
                        '<p>Um laboratório de apoio com equipamento apropriado garante a realização de ensaios químicos e físicos.</p>'+
                        '<br><p>Sosoares lacagem, constitui a unidade de lacagem do Grupo Sosoares e é detentora do certificado europeu de qualidade'+
                        'QUALICOAT.</p></div></div>',
                },
                {
                id : '1_2',
                cls: '2',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Anodização</h3><br><p>A anodização consiste num processo electrolítico que promove a formação de uma “película” decorativa, protectora e uniforme. Essa “película” ou camada de óxido é classificada e designada por um número correspondente à espessura em microns (µ). A escolha dessa espessura é definida em função da agressividade do meio ambiente e normalizada pela norma <strong>NP1476</strong>.</p>'+
                        '<br><p>Sendo a espessura normal de 15µ pode-se optar por 20µ para zonas marítimas ou até 25µ em condições muito especiais (proximidade de fábricas que produzam agentes químicos, etc.). No estado anódico normal, o alumínio fica com uma aspecto “mate” leitoso, podendo receber tratamentos mecânicos: Polido (aspecto brilhante) ou Escovado.</p>'+
                        '<br><p>O Grupo Sosoares dispõe de duas unidades industriais detentoras do certificado de qualidade Europeu EURAS (<strong>QUALANOD</strong>)- Alfa Sul em Mem Martins e Metalfer S.A. em Fermentelos – que asseguram as necessidades do grupo neste tipo de tratamentos, prestando igualmente serviços a terceiros.</p></div>'
                       
                },
                {
                id : '1_3',
                cls: '3',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Imitação Madeira</h3><br><p>Para responder à crescente procura de materiais em lacado imitação madeira, a Sosoares SA decidiu em meados de 2004 instalar uma nova unidade para oferecer aos seus clientes, produtos com este novo tratamento com os mesmos padrões de qualidade aplicados.</p></div>'
                },
                {
                id : '1_4',
                cls: '4',
                html: '<div style="margin:10px" class="leaf_panel"><br>'+
                '<h3 class="title3">Comercial Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/comercial.png" alt=""></p>'+
                    '<p>O Grupo Sosoares tem ao dispôr, para divulgação dos sistemas de alumínio para arquitectura, um total de 10 delegados técnicos e comerciais, cuja função é dar apoio aos nossos clientes. Assim podem ser minimizados tempos na procura de informação bem como na obtenção de apoio.</p><br>'+
                    '<p>Com a crescente da necessidade no acompanhamento e aconcelhamento técnico, foi imperativo a evolução do tradicional vendedor para alguém que cujos conhecimentos técnicos permita algo mais para além do apoio comercial, intervindo e formando na elaboração dos nossos sistemas de caixilharia.</p><br>'+
                    '<p>Para isto, o Grupo Sosoares fez a passagem da categoria de vendedor para delegado técnico comercial. Sendo mais que uma simples mudança de nome, foi uma crescente e sustentada passagem de conhecimentos para que cada vez mais possamos ser efectivamente um apoio presente e personalizado.</p><br>'+
                    '<h3 class="title3">Orçamentação Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/orcamentacao.jpg" alt=""></p>'+
                    '<p>O Grupo Sosoares garante todos os esclarecimento técnicos necessários sobre os sistemas para a sua correcta implementação. A orçamentação dos projectos é um serviço fiável e precioso para os nossos clientes.</p>'+
                    '<p>Para isso contamos com três gabinetes técnicos espalhados pelo país com funcionários capazes não só de esclarecer todas as dúvidas que possam surgir nos nossos clientes, como também de aconselhar os melhores sistemas adequados às mais diversas situações. A orçamentação dos mais diversos projectos, faz com que os nossos clientes possam ter uma elevada capacidade de resposta perante o cliente final. A fiabilidade e o rigor impostos nas nossas propostas evitam surpresas aquando da adjudicação dos projectos.</p><br>'+
                    '<h3 class="title3">Técnico Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/technical-support.jpg" alt=""></p>'+
                    '<p>O Grupo Sosoares dispõe de assistência técnica em serralharia / obra. Este serviço visa formar os clientes na transformação dos nossos sistemas. Um sistema só atinge as suas capacidades reais quando é transformado da maneira correcta.</p><br>'+
                    '<p>Os clientes que forem executar uma obra com um sistema novo para a serralharia, podem requerer formação técnica junto do comercial do Grupo Sosoares. Depois de aprovada, é marcada uma data para a visita do técnico. Já na serralharia, o ténico do Grupo Sosoares faz uma sessão de formação práctica sobre o sistema, para que na execução da obra as potencialidades da caixilharia sejam aproveitadas ao máximo.</p><br>'+
                    '<h3 class="title3">Estudo Obra / Pormenorização Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Com a crescente preocupação nos estudos energéticos, uma boa solução de caixilharia é cada vez mais influente em todo o desempenho térmico e acústico de uma habitação. A nova legislação sobre classificação energética deixa de ser aconselhada e passa a ser obrigatória, fazendo com que cada vez mais os sistemas de caixilharia tenham de ser estudados conforme o tipo de habitação, localização, orientação, etc.</p><br>'+
                    '<p>O Grupo Sosoares acompanha os seus clientes / parceiros em todas as fases, desde a promoção e apoio, ao aconselhamento e orçamentação, para que nada falhe naquilo que possa ter influência ao nível do conforto final da habitação. Para tal, dispõe de prescritores para apoiar os técnicos projectistas durante o estudo e pormenorização de qualquer obra. Com este serviço tentamos fazer com que as soluções sejam o mais adequadas possível às obras que as vão receber.</p><br>'+
                    '<h3 class="title3">Software Gestão Serralharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/prefsuite.jpg" alt=""></p>'+
                    '<p>O investimento feito neste programa e no desenvolvimento da base de dados, foi para garantir que o projecto fosse uma mais valia para os nossos clientes.</p><br>'+
                    '<p>Assim, com a constante actualização quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gestão da serralharia.</p><br>'+
                    '<h3 class="title3">Orçamentação / Técnico Vidro</h3><br>'+
                    '<p>A Sosoares Vidro conta com uma equipa de orçamentação pronta a ajudar em qualquer situação.</p><br>'+
                    '<p>Assim, com a constante actualização quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gestão da serralharia.</p><br>'+
                    '<h3 class="title3">Técnico Extrusão</h3><br>'+
                    '<p>A Perfis Oeiras têm ao dispor dos seus clientes um gabinete de apoio e desenvolvimento com levado conhecimento no desenvolvimento de soluções em perfis extrudidos de alumínio para os mais diversos mercados, desde as energias renováveis, passando pela construção até a indústria automóvel.</p><br>'+
                    '<p>Assim os clientes da Perfis Oeiras podem contar com todo o seu apoio na elaboração de soluções em perfis extrudidos de alumínio que vão de encontro às suas necessidades.</p><br>'+
                    '</div>',
                },
                {
                id : '1_5',
                cls: '5',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Apoio Cliente</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '2_1',
                cls: '1',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Lacquering</h3><br>'+
                        '<br><p>Lacquering is a painting process based on thermo-hardening polyester. It is composed of a pre-treatment cycle, by immersion, the main purposes of which are to prepare the profiles for painting, to protect them from corrosion and to maximize the paint adherence.</p>'+
                        '<br><p>Pre-treatment stands on the following procedures:</p>'+
                        '<br><ul class="lista">'+
                        '<li>-De-greasing bath</li>'+
                        '<li>-Water rinse</li>'+
                        '<li>-Pickling</li>'+
                        '<li>-Water rinse</li>'+
                        '<li>-Passivation</li>'+
                        '<li>-Washing with water</li>'+
                        '<li>-Demineralized water rinse</li>'+
                        '<li>-Drying oven</li>'+
                        '</ul>'+
                        '<br><p>Later, the aluminium profiles shall enter the painting units in which the dust particles, loaded with static, shall evenly adhere to the surface of the profiles. After having been taken to the polymerization oven, the temperature shall favour the creation of a homogenous layer of lacquering on the profiles.</p>'+
                        '<br><p>Final Product Control:</p>'+
                        '<br><p>The whole process is developed in accordance with the quality norm QUALICOAT.</p>'+
                        '<p>Thus, the pre-treatment baths and the polymerization temperature are controlled, the thickness of the lacquering layer and its adherence are checked, as well as the colour, by comparison and brightness (Norms NP EN ISO).</p>'+
                        '<p>An appropriately equipped support laboratory assures the performance of chemical and physical tests.</p>'+
                        '<p>Sosoares lacquering is a unit which holds the QUALICOAT European quality certificate.'
                },
                {
                id : '2_2',
                cls: '2',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Anodizing</h3><br><p>Anodizing consists of an electrolytic procedure which stimulates the formation of a decorative, protective and uniform “pellicle”. This “pellicle” or oxide layer is classified and designated by a number corresponding to thickness in microns (µ). The selection of thickness is determined according to the aggressiveness of the environment and regulated by norm NP1476.</p>'+
                        '<br><p>The standard thickness is 15µ, though 20µ for seashore locations or even 25µ under very special conditions (proximity to factories which produce chemicals, among others) are possible options. In a regular anodic state the aluminium acquires a “dull” milky colour, accepting mechanical treatments: Polished (shiny appearance) or Brushed.</p>'+
                        '<br><p>Grupo Sosoares holds two industrial units which have been awarded the EURAS European quality certificate (QUALANOD)- Alfa Sul in Mem Martins and Metalfer S.A. in Fermentelos – which assure the needs of the group regarding this type of treatment, as well as providing services to third parties.</p></div>'
                       
                },
                {
                id : '2_3',
                cls: '3',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Wood Imitation</h3><br><p>To answer the growing demand of wood resembling lacquered materials, Sosoares SA decided in mid-2004 to have a new unit installed to offer its clients products with this new treatment and the same quality patterns.</p></div>'
                },
                {
                id : '2_4',
                cls: '4',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Technical Area</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '2_5',
                cls: '5',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Customer Service</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '3_1',
                cls: '1',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Laquage</h3><br>'+
                        '<p>Le laquage est un procédé de peinture à base de polyester, thermodurcissable. Il se compose d’un cycle de prétraitement par immersion, dont le but principal est de préparer les profilés à la peinture, les protéger de la corrosion et optimiser l’adhésion de la teinte.</p>'+
                        '<br><p>Le prétraitement se compose des opérations suivantes:</p>'+
                        '<br><ul class="lista">'+
                        '<li>-Bain de dégraissage</li>'+
                        '<li>-Rinçage</li>'+
                        '<li>-Décapage</li>'+
                        '<li>-Passivation</li>'+
                        '<li>-Lavage à l’eau</li>'+
                        '<li>-Lavage à l’eau déminéralisée</li>'+
                        '<li>-Four de séchage</li>'+
                        '</ul>'+
                        '<br><p>Par la suite, les profilés d’aluminium rejoindront les unités de peinture où les particules de poussière, chargées en électricité statique, se déposent uniformément sur la surface des profilés. Après ils entreront dans le four de polymérisation, la température provoquera l’homogénéisation des différentes couches de laquage sur les profilés.</p>'+
                        '<br><p>Contrôle des produits finis:</p>'+
                        '<br><p>Tout le processus se déroule en condition de contrôle en accord avec la norme de qualité QUALICOAT.</p>'+
                        '<p>Ainsi, les bains de prétraitement, la température de polymérisation sont contrôlés, les épaisseurs des couches de laques et leur adhérence sont vérifiées, les couleurs et leur brillance comparées (normes NP EN ISO).</p>'+
                        '<p>Un laboratoire de soutien avec l’équipement approprié garantit la réalisation des tests chimiques et physiques.</p>'+
                        '<p>Sosoares laquage, constitue l’unité de laquage du Grupo Sosoares et a obtenu le certificat européen de qualité QUALICOAT.'
                     
                },
                {
                id : '3_2',
                cls: '2',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Anodisation</h3><br><p>L’anodisation est basée sur le principe de l’électrolyse de l’eau qui va permettre la formation d’une « pellicule » décorative, protectrice et uniforme. Cette « pellicule », ou couche d’alumine, est classée et désignée par un numéro, lui même correspondant à son épaisseur en microns (µ). L’épaisseur est choisie et définie en fonction des conditions atmosphériques auxquelles sera soumis le produit et conforme à la norme NP1476.</p>'+
                        '<br><p>L’épaisseur normale est de 15µ, elle sera de 20µ en zone maritime et, peut aller jusqu’à 25µ en conditions spéciales (proximité d’usines qui produisent des produits chimiques etc.). L’aspect de l’aluminium anodisé normal est mate laiteux, il peut aussi recevoir un traitement mécanique lui donnant un aspect : Poli (brillant) ou Brossé.</p>'+
                        '<br><p>Le Grupo Sosoares dispose de deux unités industrielles détentrices des certificats de qualité EURAS (QUALANOD) – Alfa Sul à Mem Martins et Metalfer S.A. à Fermentelos – qui répondent aux besoins du Groupe dans ce type de traitements mais également pour des tiers en tant que prestataires de services.</p></div>'
                       
                },
                {
                id : '3_3',
                cls: '3',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Imitation Bois</h3><br><p>Pour répondre à la demande croissante de matériaux laqués imitation bois, Sosoares S.A a décidé courant 2004 d’installer une nouvelle unité pour offrir à ses clients ces produits bénéficiant de ce nouveau traitement dans le respect de ces même normes de qualité.</p></div>'
                },
                {
                id : '3_4',
                cls: '4',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Secteur Technique</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '3_5',
                cls: '5',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Service Client</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '4_1',
                cls: '1',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Lacado</h3><br>'+
                        '<p>A lacagem é um processo de pintura com base em'+ 'poliéster, termoendurecível. Compõe-se de um ciclo de pré-tratamento, por imersão, cujas principias finalidades são preparar os'+'perfis para a pintura, protegê-los da corrosão e maximizar a adesão da tinta.</p>'+
                        '<br><p>O Pré-tratamento assenta nas seguintes operações:</p>'+
                        '<br><ul class="lista">'+
                        '<li>-Banho de desengorduramento</li>'+
                        '<li>-Lavagem corrente</li>'+
                        '<li>-Decapagem</li>'+
                        '<li>-Lavagem corrente</li>'+
                        '<li>-Passivação</li>'+
                        '<li>-Lavagem com água</li>'+
                        '<li>-Lavagem com água desmineralizada</li>'+
                        '<li>-Estufa de secagem</li>'+
                        '</ul>'+
                        '<br><p>Posteriormente, os perfis de alumínio darão entrada nas unidades de pintura onde as partículas de pó, carregadas de'+ 'electricidade estática, se depositam uniformemente nas superfícies dos perfis. Depois de transportados para o forno de'+ 'polimerização, a temperatura fará com que se crie uma camada homogénea, de lacagem, nos perfis.</p>'+
                        '<br><p>Controlo de Produto Acabado:</p>'+
                        '<br><p>Todo o processo decorre em condições de controlo, de acordo com a norma de qualidade QUALICOAT.</p>'+
                        '<p>Assim, são controlados os banhos de pré-tratamento, a temperatura de polimerização, verificadas as espessuras da camada de'+'lacagem e a aderência da mesma, bem como a verificação da cor por comparação e brilho (Normas NP EN ISO).</p>'+
                        '<p>Um laboratório de apoio com equipamento apropriado garante a realização de ensaios químicos e físicos.</p>'+
                        '<p>Sosoares lacagem, constitui a unidade de lacagem do Grupo Sosoares e é detentora do certificado europeu de qualidade'+
                        'QUALICOAT.</p></div></div>'
                },
                {
                id : '4_2',
                cls: '2',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Anodizacin</h3><br><p>A anodização consiste num processo electrolítico que promove a formação de uma “película” decorativa, protectora e uniforme. Essa “película” ou camada de óxido é classificada e designada por um número correspondente à espessura em microns (µ). A escolha dessa espessura é definida em função da agressividade do meio ambiente e normalizada pela norma <strong>NP1476</strong>.</p>'+
                        '<br><p>Sendo a espessura normal de 15µ pode-se optar por 20µ para zonas marítimas ou até 25µ em condições muito especiais (proximidade de fábricas que produzam agentes químicos, etc.). No estado anódico normal, o alumínio fica com uma aspecto “mate” leitoso, podendo receber tratamentos mecânicos: Polido (aspecto brilhante) ou Escovado.</p>'+
                        '<br><p>O Grupo Sosoares dispõe de duas unidades industriais detentoras do certificado de qualidade Europeu EURAS (<strong>QUALANOD</strong>)- Alfa Sul em Mem Martins e Metalfer S.A. em Fermentelos – que asseguram as necessidades do grupo neste tipo de tratamentos, prestando igualmente serviços a terceiros.</p></div>'
                       
                },
                {
                id : '4_3',
                cls: '3',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Imitación Madera</h3><br><p>Para responder à crescente procura de materiais em lacado imitação madeira, a Sosoares SA decidiu em meados de 2004 instalar uma nova unidade para oferecer aos seus clientes, produtos com este novo tratamento com os mesmos padrões de qualidade aplicados.</p></div>'
                },
                {
                id : '4_4',
                cls: '4',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Área Técnica</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '4_5',
                cls: '5',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Asistencia Cliente</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
        ]
    }
});


