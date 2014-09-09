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
                        '<p>A lacagem � um processo de pintura com base em'+ 'poli�ster, termoendurec�vel. Comp�e-se de um ciclo de pr�-tratamento, por imers�o, cujas principias finalidades s�o preparar os'+'perfis para a pintura, proteg�-los da corros�o e maximizar a ades�o da tinta.</p>'+
                        '<br><p>O Pr�-tratamento assenta nas seguintes opera��es:</p>'+
                        '<br><ul class="lista">'+
                        '<li>-Banho de desengorduramento</li>'+
                        '<li>-Lavagem corrente</li>'+
                        '<li>-Decapagem</li>'+
                        '<li>-Lavagem corrente</li>'+
                        '<li>-Passiva��o</li>'+
                        '<li>-Lavagem com �gua</li>'+
                        '<li>-Lavagem com �gua desmineralizada</li>'+
                        '<li>-Estufa de secagem</li>'+
                        '</ul>'+
                        '<br><p>Posteriormente, os perfis de alum�nio dar�o entrada nas unidades de pintura onde as part�culas de p�, carregadas de'+ 'electricidade est�tica, se depositam uniformemente nas superf�cies dos perfis. Depois de transportados para o forno de'+ 'polimeriza��o, a temperatura far� com que se crie uma camada homog�nea, de lacagem, nos perfis.</p>'+
                        '<br><p>Controlo de Produto Acabado:</p>'+
                        '<br><p>Todo o processo decorre em condi��es de controlo, de acordo com a norma de qualidade QUALICOAT.</p>'+
                        '<p>Assim, s�o controlados os banhos de pr�-tratamento, a temperatura de polimeriza��o, verificadas as espessuras da camada de'+'lacagem e a ader�ncia da mesma, bem como a verifica��o da cor por compara��o e brilho (Normas NP EN ISO).</p>'+
                        '<p>Um laborat�rio de apoio com equipamento apropriado garante a realiza��o de ensaios qu�micos e f�sicos.</p>'+
                        '<br><p>Sosoares lacagem, constitui a unidade de lacagem do Grupo Sosoares e � detentora do certificado europeu de qualidade'+
                        'QUALICOAT.</p></div></div>',
                },
                {
                id : '1_2',
                cls: '2',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Anodiza��o</h3><br><p>A anodiza��o consiste num processo electrol�tico que promove a forma��o de uma �pel�cula� decorativa, protectora e uniforme. Essa �pel�cula� ou camada de �xido � classificada e designada por um n�mero correspondente � espessura em microns (�). A escolha dessa espessura � definida em fun��o da agressividade do meio ambiente e normalizada pela norma <strong>NP1476</strong>.</p>'+
                        '<br><p>Sendo a espessura normal de 15� pode-se optar por 20� para zonas mar�timas ou at� 25� em condi��es muito especiais (proximidade de f�bricas que produzam agentes qu�micos, etc.). No estado an�dico normal, o alum�nio fica com uma aspecto �mate� leitoso, podendo receber tratamentos mec�nicos: Polido (aspecto brilhante) ou Escovado.</p>'+
                        '<br><p>O Grupo Sosoares disp�e de duas unidades industriais detentoras do certificado de qualidade Europeu EURAS (<strong>QUALANOD</strong>)- Alfa Sul em Mem Martins e Metalfer S.A. em Fermentelos � que asseguram as necessidades do grupo neste tipo de tratamentos, prestando igualmente servi�os a terceiros.</p></div>'
                       
                },
                {
                id : '1_3',
                cls: '3',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Imita��o Madeira</h3><br><p>Para responder � crescente procura de materiais em lacado imita��o madeira, a Sosoares SA decidiu em meados de 2004 instalar uma nova unidade para oferecer aos seus clientes, produtos com este novo tratamento com os mesmos padr�es de qualidade aplicados.</p></div>'
                },
                {
                id : '1_4',
                cls: '4',
                html: '<div style="margin:10px" class="leaf_panel"><br>'+
                '<h3 class="title3">Comercial Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/comercial.png" alt=""></p>'+
                    '<p>O Grupo Sosoares tem ao disp�r, para divulga��o dos sistemas de alum�nio para arquitectura, um total de 10 delegados t�cnicos e comerciais, cuja fun��o � dar apoio aos nossos clientes. Assim podem ser minimizados tempos na procura de informa��o bem como na obten��o de apoio.</p><br>'+
                    '<p>Com a crescente da necessidade no acompanhamento e aconcelhamento t�cnico, foi imperativo a evolu��o do tradicional vendedor para algu�m que cujos conhecimentos t�cnicos permita algo mais para al�m do apoio comercial, intervindo e formando na elabora��o dos nossos sistemas de caixilharia.</p><br>'+
                    '<p>Para isto, o Grupo Sosoares fez a passagem da categoria de vendedor para delegado t�cnico comercial. Sendo mais que uma simples mudan�a de nome, foi uma crescente e sustentada passagem de conhecimentos para que cada vez mais possamos ser efectivamente um apoio presente e personalizado.</p><br>'+
                    '<h3 class="title3">Or�amenta��o Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/orcamentacao.jpg" alt=""></p>'+
                    '<p>O Grupo Sosoares garante todos os esclarecimento t�cnicos necess�rios sobre os sistemas para a sua correcta implementa��o. A or�amenta��o dos projectos � um servi�o fi�vel e precioso para os nossos clientes.</p>'+
                    '<p>Para isso contamos com tr�s gabinetes t�cnicos espalhados pelo pa�s com funcion�rios capazes n�o s� de esclarecer todas as d�vidas que possam surgir nos nossos clientes, como tamb�m de aconselhar os melhores sistemas adequados �s mais diversas situa��es. A or�amenta��o dos mais diversos projectos, faz com que os nossos clientes possam ter uma elevada capacidade de resposta perante o cliente final. A fiabilidade e o rigor impostos nas nossas propostas evitam surpresas aquando da adjudica��o dos projectos.</p><br>'+
                    '<h3 class="title3">T�cnico Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/technical-support.jpg" alt=""></p>'+
                    '<p>O Grupo Sosoares disp�e de assist�ncia t�cnica em serralharia / obra. Este servi�o visa formar os clientes na transforma��o dos nossos sistemas. Um sistema s� atinge as suas capacidades reais quando � transformado da maneira correcta.</p><br>'+
                    '<p>Os clientes que forem executar uma obra com um sistema novo para a serralharia, podem requerer forma��o t�cnica junto do comercial do Grupo Sosoares. Depois de aprovada, � marcada uma data para a visita do t�cnico. J� na serralharia, o t�nico do Grupo Sosoares faz uma sess�o de forma��o pr�ctica sobre o sistema, para que na execu��o da obra as potencialidades da caixilharia sejam aproveitadas ao m�ximo.</p><br>'+
                    '<h3 class="title3">Estudo Obra / Pormenoriza��o Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Com a crescente preocupa��o nos estudos energ�ticos, uma boa solu��o de caixilharia � cada vez mais influente em todo o desempenho t�rmico e ac�stico de uma habita��o. A nova legisla��o sobre classifica��o energ�tica deixa de ser aconselhada e passa a ser obrigat�ria, fazendo com que cada vez mais os sistemas de caixilharia tenham de ser estudados conforme o tipo de habita��o, localiza��o, orienta��o, etc.</p><br>'+
                    '<p>O Grupo Sosoares acompanha os seus clientes / parceiros em todas as fases, desde a promo��o e apoio, ao aconselhamento e or�amenta��o, para que nada falhe naquilo que possa ter influ�ncia ao n�vel do conforto final da habita��o. Para tal, disp�e de prescritores para apoiar os t�cnicos projectistas durante o estudo e pormenoriza��o de qualquer obra. Com este servi�o tentamos fazer com que as solu��es sejam o mais adequadas poss�vel �s obras que as v�o receber.</p><br>'+
                    '<h3 class="title3">Software Gest�o Serralharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/prefsuite.jpg" alt=""></p>'+
                    '<p>O investimento feito neste programa e no desenvolvimento da base de dados, foi para garantir que o projecto fosse uma mais valia para os nossos clientes.</p><br>'+
                    '<p>Assim, com a constante actualiza��o quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gest�o da serralharia.</p><br>'+
                    '<h3 class="title3">Or�amenta��o / T�cnico Vidro</h3><br>'+
                    '<p>A Sosoares Vidro conta com uma equipa de or�amenta��o pronta a ajudar em qualquer situa��o.</p><br>'+
                    '<p>Assim, com a constante actualiza��o quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gest�o da serralharia.</p><br>'+
                    '<h3 class="title3">T�cnico Extrus�o</h3><br>'+
                    '<p>A Perfis Oeiras t�m ao dispor dos seus clientes um gabinete de apoio e desenvolvimento com levado conhecimento no desenvolvimento de solu��es em perfis extrudidos de alum�nio para os mais diversos mercados, desde as energias renov�veis, passando pela constru��o at� a ind�stria autom�vel.</p><br>'+
                    '<p>Assim os clientes da Perfis Oeiras podem contar com todo o seu apoio na elabora��o de solu��es em perfis extrudidos de alum�nio que v�o de encontro �s suas necessidades.</p><br>'+
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
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Anodizing</h3><br><p>Anodizing consists of an electrolytic procedure which stimulates the formation of a decorative, protective and uniform �pellicle�. This �pellicle� or oxide layer is classified and designated by a number corresponding to thickness in microns (�). The selection of thickness is determined according to the aggressiveness of the environment and regulated by norm NP1476.</p>'+
                        '<br><p>The standard thickness is 15�, though 20� for seashore locations or even 25� under very special conditions (proximity to factories which produce chemicals, among others) are possible options. In a regular anodic state the aluminium acquires a �dull� milky colour, accepting mechanical treatments: Polished (shiny appearance) or Brushed.</p>'+
                        '<br><p>Grupo Sosoares holds two industrial units which have been awarded the EURAS European quality certificate (QUALANOD)- Alfa Sul in Mem Martins and Metalfer S.A. in Fermentelos � which assure the needs of the group regarding this type of treatment, as well as providing services to third parties.</p></div>'
                       
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
                        '<p>Le laquage est un proc�d� de peinture � base de polyester, thermodurcissable. Il se compose d�un cycle de pr�traitement par immersion, dont le but principal est de pr�parer les profil�s � la peinture, les prot�ger de la corrosion et optimiser l�adh�sion de la teinte.</p>'+
                        '<br><p>Le pr�traitement se compose des op�rations suivantes:</p>'+
                        '<br><ul class="lista">'+
                        '<li>-Bain de d�graissage</li>'+
                        '<li>-Rin�age</li>'+
                        '<li>-D�capage</li>'+
                        '<li>-Passivation</li>'+
                        '<li>-Lavage � l�eau</li>'+
                        '<li>-Lavage � l�eau d�min�ralis�e</li>'+
                        '<li>-Four de s�chage</li>'+
                        '</ul>'+
                        '<br><p>Par la suite, les profil�s d�aluminium rejoindront les unit�s de peinture o� les particules de poussi�re, charg�es en �lectricit� statique, se d�posent uniform�ment sur la surface des profil�s. Apr�s ils entreront dans le four de polym�risation, la temp�rature provoquera l�homog�n�isation des diff�rentes couches de laquage sur les profil�s.</p>'+
                        '<br><p>Contr�le des produits finis:</p>'+
                        '<br><p>Tout le processus se d�roule en condition de contr�le en accord avec la norme de qualit� QUALICOAT.</p>'+
                        '<p>Ainsi, les bains de pr�traitement, la temp�rature de polym�risation sont contr�l�s, les �paisseurs des couches de laques et leur adh�rence sont v�rifi�es, les couleurs et leur brillance compar�es (normes NP EN ISO).</p>'+
                        '<p>Un laboratoire de soutien avec l��quipement appropri� garantit la r�alisation des tests chimiques et physiques.</p>'+
                        '<p>Sosoares laquage, constitue l�unit� de laquage du Grupo Sosoares et a obtenu le certificat europ�en de qualit� QUALICOAT.'
                     
                },
                {
                id : '3_2',
                cls: '2',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Anodisation</h3><br><p>L�anodisation est bas�e sur le principe de l��lectrolyse de l�eau qui va permettre la formation d�une � pellicule � d�corative, protectrice et uniforme. Cette � pellicule �, ou couche d�alumine, est class�e et d�sign�e par un num�ro, lui m�me correspondant � son �paisseur en microns (�). L��paisseur est choisie et d�finie en fonction des conditions atmosph�riques auxquelles sera soumis le produit et conforme � la norme NP1476.</p>'+
                        '<br><p>L��paisseur normale est de 15�, elle sera de 20� en zone maritime et, peut aller jusqu�� 25� en conditions sp�ciales (proximit� d�usines qui produisent des produits chimiques etc.). L�aspect de l�aluminium anodis� normal est mate laiteux, il peut aussi recevoir un traitement m�canique lui donnant un aspect : Poli (brillant) ou Bross�.</p>'+
                        '<br><p>Le Grupo Sosoares dispose de deux unit�s industrielles d�tentrices des certificats de qualit� EURAS (QUALANOD) � Alfa Sul � Mem Martins et Metalfer S.A. � Fermentelos � qui r�pondent aux besoins du Groupe dans ce type de traitements mais �galement pour des tiers en tant que prestataires de services.</p></div>'
                       
                },
                {
                id : '3_3',
                cls: '3',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Imitation Bois</h3><br><p>Pour r�pondre � la demande croissante de mat�riaux laqu�s imitation bois, Sosoares S.A a d�cid� courant 2004 d�installer une nouvelle unit� pour offrir � ses clients ces produits b�n�ficiant de ce nouveau traitement dans le respect de ces m�me normes de qualit�.</p></div>'
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
                        '<p>A lacagem � um processo de pintura com base em'+ 'poli�ster, termoendurec�vel. Comp�e-se de um ciclo de pr�-tratamento, por imers�o, cujas principias finalidades s�o preparar os'+'perfis para a pintura, proteg�-los da corros�o e maximizar a ades�o da tinta.</p>'+
                        '<br><p>O Pr�-tratamento assenta nas seguintes opera��es:</p>'+
                        '<br><ul class="lista">'+
                        '<li>-Banho de desengorduramento</li>'+
                        '<li>-Lavagem corrente</li>'+
                        '<li>-Decapagem</li>'+
                        '<li>-Lavagem corrente</li>'+
                        '<li>-Passiva��o</li>'+
                        '<li>-Lavagem com �gua</li>'+
                        '<li>-Lavagem com �gua desmineralizada</li>'+
                        '<li>-Estufa de secagem</li>'+
                        '</ul>'+
                        '<br><p>Posteriormente, os perfis de alum�nio dar�o entrada nas unidades de pintura onde as part�culas de p�, carregadas de'+ 'electricidade est�tica, se depositam uniformemente nas superf�cies dos perfis. Depois de transportados para o forno de'+ 'polimeriza��o, a temperatura far� com que se crie uma camada homog�nea, de lacagem, nos perfis.</p>'+
                        '<br><p>Controlo de Produto Acabado:</p>'+
                        '<br><p>Todo o processo decorre em condi��es de controlo, de acordo com a norma de qualidade QUALICOAT.</p>'+
                        '<p>Assim, s�o controlados os banhos de pr�-tratamento, a temperatura de polimeriza��o, verificadas as espessuras da camada de'+'lacagem e a ader�ncia da mesma, bem como a verifica��o da cor por compara��o e brilho (Normas NP EN ISO).</p>'+
                        '<p>Um laborat�rio de apoio com equipamento apropriado garante a realiza��o de ensaios qu�micos e f�sicos.</p>'+
                        '<p>Sosoares lacagem, constitui a unidade de lacagem do Grupo Sosoares e � detentora do certificado europeu de qualidade'+
                        'QUALICOAT.</p></div></div>'
                },
                {
                id : '4_2',
                cls: '2',
                html:   '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Anodizacin</h3><br><p>A anodiza��o consiste num processo electrol�tico que promove a forma��o de uma �pel�cula� decorativa, protectora e uniforme. Essa �pel�cula� ou camada de �xido � classificada e designada por um n�mero correspondente � espessura em microns (�). A escolha dessa espessura � definida em fun��o da agressividade do meio ambiente e normalizada pela norma <strong>NP1476</strong>.</p>'+
                        '<br><p>Sendo a espessura normal de 15� pode-se optar por 20� para zonas mar�timas ou at� 25� em condi��es muito especiais (proximidade de f�bricas que produzam agentes qu�micos, etc.). No estado an�dico normal, o alum�nio fica com uma aspecto �mate� leitoso, podendo receber tratamentos mec�nicos: Polido (aspecto brilhante) ou Escovado.</p>'+
                        '<br><p>O Grupo Sosoares disp�e de duas unidades industriais detentoras do certificado de qualidade Europeu EURAS (<strong>QUALANOD</strong>)- Alfa Sul em Mem Martins e Metalfer S.A. em Fermentelos � que asseguram as necessidades do grupo neste tipo de tratamentos, prestando igualmente servi�os a terceiros.</p></div>'
                       
                },
                {
                id : '4_3',
                cls: '3',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Imitaci�n Madera</h3><br><p>Para responder � crescente procura de materiais em lacado imita��o madeira, a Sosoares SA decidiu em meados de 2004 instalar uma nova unidade para oferecer aos seus clientes, produtos com este novo tratamento com os mesmos padr�es de qualidade aplicados.</p></div>'
                },
                {
                id : '4_4',
                cls: '4',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">�rea T�cnica</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
                {
                id : '4_5',
                cls: '5',
                html: '<div style="margin:10px" class="leaf_panel"><br><h3 style="font-size: 24px; color:#00aeef !important">Asistencia Cliente</h3><br><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p></div>',
                },
        ]
    }
});


