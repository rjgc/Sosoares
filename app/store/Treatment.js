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
                    '<h3 class="title3">T�cnico Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/technical-support.jpg" alt=""></p>'+
                    '<p>O Grupo Sosoares disp�e de assist�ncia t�cnica em serralharia / obra. Este servi�o visa formar os clientes na transforma��o dos nossos sistemas. Um sistema s� atinge as suas capacidades reais quando � transformado da maneira correcta.</p><br>'+
                    '<p>Os clientes que forem executar uma obra com um sistema novo para a serralharia, podem requerer forma��o t�cnica junto do comercial do Grupo Sosoares. Depois de aprovada, � marcada uma data para a visita do t�cnico. J� na serralharia, o t�nico do Grupo Sosoares faz uma sess�o de forma��o pr�ctica sobre o sistema, para que na execu��o da obra as potencialidades da caixilharia sejam aproveitadas ao m�ximo.</p><br>'+
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
                    '<h3 class="title3">Estudo Obra / Pormenoriza��o Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Com a crescente preocupa��o nos estudos energ�ticos, uma boa solu��o de caixilharia � cada vez mais influente em todo o desempenho t�rmico e ac�stico de uma habita��o. A nova legisla��o sobre classifica��o energ�tica deixa de ser aconselhada e passa a ser obrigat�ria, fazendo com que cada vez mais os sistemas de caixilharia tenham de ser estudados conforme o tipo de habita��o, localiza��o, orienta��o, etc.</p><br>'+
                    '<p>O Grupo Sosoares acompanha os seus clientes / parceiros em todas as fases, desde a promo��o e apoio, ao aconselhamento e or�amenta��o, para que nada falhe naquilo que possa ter influ�ncia ao n�vel do conforto final da habita��o. Para tal, disp�e de prescritores para apoiar os t�cnicos projectistas durante o estudo e pormenoriza��o de qualquer obra. Com este servi�o tentamos fazer com que as solu��es sejam o mais adequadas poss�vel �s obras que as v�o receber.</p><br>'+
                    '<table style="">'+
                    '<tbody>'+
                    '<tr>'+
                    '<td><p style="color: #107ca4 !important;"><strong>ZONA NORTE</strong></p><br><span>Nuno Oliveira</span><br><span>+351 936 456 144</span><br><span><a href="mailto:nuno.oliveira@sosoares.pt">nuno.oliveira@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONA CENTRO</strong></p><br><span>Nuno Fernandes</span><br><span>+351 936 454 274</span><br><span><a href="mailto:nuno.fernandes@sosoares.pt">nuno.fernandes@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONA SUL</strong></p><br><span>N�lson Morganho</span><br><span>+351 918 193 949</span><br><span><a href="mailto:nelson.morganho@sosoares.pt">nelson.morganho@sosoares.pt</a></span>&nbsp;</td>'+
                    '</tr>'+
                    '</tbody>'+
                    '</table><br><br>',
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
                html: '<div style="margin:10px" class="leaf_panel"><br>'+
                    '<h3 class="title3">Technical Support Aluminum</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/technical-support.jpg" alt=""></p>'+
                    '<p>Grupo Sosoares relies on technical support regarding blacksmith and construction works. This service aims at supplying our clients with information on our systems. A system will only reach its full purpose if transformed in the correct manner.</p><br>'+
                    '<p>Clients who intend to perform a work with a new metalwork system may require technical training from Grupo Sosoares. Once approved, a date for the technician�s visit is set.</p><br>'+
                    '<p>Once at the blacksmith�s, the technician from Grupo Sosoares develops a practical training session on the system, so that during performance the potential of the frame is applied to the fullest.</p><br>'+ 
                    '<h3 class="title3">Metalwork Management Software</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/prefsuite.jpg" alt=""></p>'+
                    '<p>The investment in this programme and the development of the database was pursued to assure the project would be a gain for our clients.Thus, with the continuous update of both the values as well as the new systems, we provide our clients with an extra tool to aid them in metalwork management.</p><br>'+
                    /*'<h3 class="title3">Budget / Technical Support Glass</h3><br>'+
                    '<p>A Sosoares Vidro conta com uma equipa de or�amenta��o pronta a ajudar em qualquer situa��o.</p><br>'+
                    '<p>Assim, com a constante actualiza��o quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gest�o da serralharia.</p><br>'+*/
                    '<h3 class="title3">Extrusion Client Assistance</h3><br>'+
                    '<p>Perfis Oeiras offers its customers a support office and development led to knowledge in developing solutions in extruded aluminum profiles for different markets, from renewable energies, through construction to the automotive industry.</p><br>'+
                    '<p>So customers can rely on Perfis Oeiras all their support in developing solutions in extruded aluminum profiles that meet your needs.</p><br>'+
                    '</div>',
                
                },
                {
                id : '2_5',
                cls: '5',
                html: '<div style="margin:10px" class="leaf_panel"><br>'+
                    '<h3 class="title3">Aluminum Client Assistance </h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/comercial.png" alt=""></p>'+
                    '<p>As the need for technical assistance and advice grew, the evolution of a traditional salesperson to someone whose technical knowledge goes beyond after-sales service, taking part in the development of our frame systems became imperative.</p><br>'+
                    '<p>In order for such to happen, Grupo Sosoares performed the change from salesperson to technical sales delegate. More than a simple change in category, it has been a growing and supported knowledge enhancement so that we can continuously and efficiently offer a present and personalized assistance.</p><br>'+
                    '<h3 class="title3">Aluminum Budget Department </h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/orcamentacao.jpg" alt=""></p>'+
                    '<p>Grupo Sosoares assures all necessary technical clarification regarding the systems and their correct setting. Project budgeting is a reliable and precious service for our clients.</p>'+
                    '<p>For this we count on three technical departments around the country composed of people who are able to clear all doubts our clients may have, as well as provide advice on the most adequate systems to the most diverse situations. Budgeting the most diverse projects gifts our clients with a wider range of answers for the final client. The reliability and accuracy in our proposals avoid unexpected surprises when it comes to project awarding.</p><br>'+
                    '<h3 class="title3">Aluminum Study of Works / Detailing </h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Regarding the increasing concern about energy studies, a good frame solution is ever more influent in all thermal and acoustic performance in a house.</p><br>'+
                    '<p>The new legislation on energetic classification changes from advisable to mandatory, meaning that frame systems have to be studied according to the type of housing, location, orientation, etc.</p><br>'+
                    '<p>Grupo Sosoares accompanies its clients / partners through all phases, from promotion and support, to advice and budgeting, so that nothing of which influences the comfort in the finished house risks failing. For that, it relies on prescribers to aid design technicians during the study and detailing of any work.</p><br>'+
                    '<p>Through this service we try to mould solutions to works the best way possible.</p><br>'+
                    '<table style="">'+
                    '<tbody>'+
                    '<tr>'+
                    '<td><p style="color: #107ca4 !important;"><strong>NORTH AREA</strong></p><br><span>Nuno Oliveira</span><br><span>+351 936 456 144</span><br><span><a href="mailto:nuno.oliveira@sosoares.pt">nuno.oliveira@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>CENTER AREA</strong></p><br><span>Nuno Fernandes</span><br><span>+351 936 454 274</span><br><span><a href="mailto:nuno.fernandes@sosoares.pt">nuno.fernandes@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>SOUTH AREA</strong></p><br><span>N�lson Morganho</span><br><span>+351 918 193 949</span><br><span><a href="mailto:nelson.morganho@sosoares.pt">nelson.morganho@sosoares.pt</a></span>&nbsp;</td>'+
                    '</tr>'+
                    '</tbody>'+
                    '</table><br><br>',
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
                html: '<div style="margin:10px" class="leaf_panel"><br>'+
                    '<h3 class="title3">Assistance Technique Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/technical-support.jpg" alt=""></p>'+
                    '<p>Le Grupo Sosoares dispose d�une assistance technique en menuiserie/mise en ouvre.</p><br>'+
                    '<p>Ce service a pour objectif de former nos clients sur la modification de nos syst�mes. Un syst�me atteint ses r�elles capacit�s quand il est install� de mani�re correcte.</p><br>'+
                    '<p>Les clients amen�s � mettre en �uvre un nouveau syst�me de menuiseries et de ch�ssis, peuvent demander une formation technique par le biais de l�interlocuteur commercial du Grupo Sosoares. Apr�s acceptation, une date est fix�e pour la visite du technicien. Actuellement, le technicien du Grupo Sosoares pr�sente une session de formation pratique sur le syst�me afin que lors de l�ex�cution des travaux, tout le potentiel en mati�re de menuiseries et ch�ssis soit au maximum mis en ouvre.</p><br>'+
                    '<h3 class="title3">Programme de Gestion en Serrurerie</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/prefsuite.jpg" alt=""></p>'+
                    '<p>L�investissement r�alis� sur ce programme et dans le d�veloppement de la base de donn�es, avait pour but de garantir que le projet soit une plus value pour nos clients.<br>Ainsi, avec la constante actualisation soit des valeurs soit des nouveaux syst�mes, nous permettons � nos clients d�avoir un outil de plus pour les aider dans la gestion de la serrurerie.</p><br>'+
                    /*'<h3 class="title3">Budget / Technical Support Glass</h3><br>'+
                    '<p>A Sosoares Vidro conta com uma equipa de or�amenta��o pronta a ajudar em qualquer situa��o.</p><br>'+
                    '<p>Assim, com a constante actualiza��o quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gest�o da serralharia.</p><br>'+*/
                    '<h3 class="title3">Client Assistance Extrusion</h3><br>'+
                    '<p>Perfis Oeiras propose � ses clients un bureau et soutien au d�veloppement ont conduit � la connaissance dans le d�veloppement de solutions en aluminium extrud� pour diff�rents march�s, � partir d\'�nergies renouvelables, gr�ce � la construction de l\'industrie automobile.</p><br>'+
                    '<p>Ainsi, les clients peuvent compter sur Perfis Oeiras tout leur soutien dans le d�veloppement de solutions en aluminium extrud� qui r�pondent � vos besoins.</p><br>'+
                    '</div>',
                },
                {
                id : '3_5',
                cls: '5',
                html: '<div style="margin:10px" class="leaf_panel"><br>'+
                    '<h3 class="title3">Appui Commercial Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/comercial.png" alt=""></p>'+
                    '<p>Le Grupo Sosoares met � votre disposition pour la diffusion de ses syst�mes en aluminium pour l�architecture, un total de 10 techniciens et commerciaux dont la fonction est d�aider nos clients. Ainsi, la perte de temps dans la recherche d�informations ou l�obtention d�une assistance est minimis�e.</p><br>'+
                    '<p>Avec l�augmentation des besoins dans l�accompagnement et le conseil technique, il �tait essentiel de faire �voluer le traditionnel vendeur vers quelqu�un, dont les connaissances techniques vont au del� de l�aspect commercial, qui est intervenu et a �t� form� dans l��laboration de nos diff�rents syst�mes.</p><br>'+ 
                    '<h3 class="title3">Bureau des Devis Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/orcamentacao.jpg" alt=""></p>'+
                    '<p>Le Grupo Sosoares s�engage � donner toutes les explications techniques n�cessaires de nos syst�mes afin de garantir leur mise en �uvre. Le bureau d��tude des projets �laborant les devis est fiable et pr�cieux pour nos clients.</p>'+
                    '<p>Pour cela, nous comptons trois bureaux techniques dispers�s dans le pays avec des employ�s capables de lever tous les doutes pouvant surgir chez nos clients, mais �galement de les conseiller sur le syst�me le plus adapt� face aux situations les plus diverses.</p><br>'+
                    '<h3 class="title3">Etudes de Travaux / Description D�taill�e Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Avec la pr�occupation croissante dans nos �tudes de consommation d��nergie, une bonne solution de menuiserie est tr�s attractive gr�ce aux performances thermiques et acoustiques dans une construction.</p><br>'+
                    '<p>La nouvelle l�gislation sur la classification �nerg�tique ne repr�sente plus seulement un conseil, elle devient obligatoire. Ce qui fait que chaque fois les syst�mes de ch�ssis doivent �tre �tudi�s et conformes au type de construction, localisation, orientation, etc.</p><br>'+
                    '<p>Le Grupo Sosoares accompagne ses clients/partenaires dans toutes les phases, depuis la promotion et l�assistance, le conseil et l��tude des devis, afin que rien n��choue dans tout ce qui pourrait avoir un impact au niveau du confort final de la construction. C�est pourquoi, les techniciens projeteurs disposent de prescripteurs durant l��tude des d�tails de chaque chantier.</p><br>'+
                    '<p>Avec ce service, nous tentons de donner � chaque chantier les solutions les plus adapt�es.</p><br>'+
                    '<table style="">'+
                    '<tbody>'+
                    '<tr>'+
                    '<td><p style="color: #107ca4 !important;"><strong>ZONE NORD</strong></p><br><span>Nuno Oliveira</span><br><span>+351 936 456 144</span><br><span><a href="mailto:nuno.oliveira@sosoares.pt">nuno.oliveira@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONE CENTRALE</strong></p><br><span>Nuno Fernandes</span><br><span>+351 936 454 274</span><br><span><a href="mailto:nuno.fernandes@sosoares.pt">nuno.fernandes@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONE SUD</strong></p><br><span>N�lson Morganho</span><br><span>+351 918 193 949</span><br><span><a href="mailto:nelson.morganho@sosoares.pt">nelson.morganho@sosoares.pt</a></span>&nbsp;</td>'+
                    '</tr>'+
                    '</tbody>'+
                    '</table><br><br>',
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
                html: '<div style="margin:10px" class="leaf_panel"><br>'+
                      '<h3 class="title3">Soporte T�cnico Aluminio</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/technical-support.jpg" alt=""></p>'+
                    '<p>O Grupo Sosoares ofrece asistencia t�cnica en los talleres/obras. Este servicio tiene como objetivo capacitar a los clientes en la transformaci�n de nuestros sistemas. Un sistema s�lo alcanza sus verdaderas capacidades cuando se procesa de la manera correcta.</p><br>'+
                    '<p>Los clientes que ejecutan un proyecto con un nuevo sistema para el cerrajero pueden requerir capacitaci�n t�cnica al Grupo Sosoares comercial. Una vez aprobado, la fecha y tiene previsto visitar el tecnico.</p><br>'+
                    '<p>Ya en la carpinter�a, el t�cnico-Sosoares realiza una sesi�n de formaci�n pr�ctica en el sistema, por lo que la ejecuci�n de las posibilidades de trabajo de los marcos est�n plenamente bien hechos.</p><br>'+          
                    '<h3 class="title3">Programa de Gesti�n de Metalister�a</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/prefsuite.jpg" alt=""></p>'+
                    '<p>La inversi�n realizada en este programa y el desarrollo de la base de datos era asegurarse de que el proyecto era de gran valor para nuestros clientes. </p><br>'+
                    '<p>Por lo tanto, la actualizaci�n constante, ya sea los valores o los nuevos sistemas, nos aseguramos de que nuestros clientes tengan una herramienta m�s para ayudar en la gesti�n de las ventanas.</p><br>'+   
                   /* '<h3 class="title3">Budget / Technical Support Glass</h3><br>'+
                    '<p>A Sosoares Vidro conta com uma equipa de or�amenta��o pronta a ajudar em qualquer situa��o.</p><br>'+
                    '<p>Assim, com a constante actualiza��o quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gest�o da serralharia.</p><br>'+*/
                    '<h3 class="title3">Client Assistance Extrusion</h3><br>'+
                    '<p>La Perfis Oeiras ofrece a sus clientes una oficina de apoyo y desarrollo dirigidos al conocimiento en el desarrollo de soluciones en perfiles de aluminio extruido para diferentes mercados, a partir de energ�as renovables, a trav�s de la construcci�n para la industria del autom�vil. </p><br>'+
                    '<p>As� los clientes pueden confiar a Perfis Oeiras todo su apoyo en el desarrollo de soluciones en perfiles extruidos de aluminio que satisfagan sus necesidades.</p><br>'+
                    '</div>',
                },
                {
                id : '4_5',
                cls: '5',
                html: '<div style="margin:10px" class="leaf_panel"><br>'+
                    '<h3 class="title3">Asistencia al Cliente Aluminio</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/comercial.png" alt=""></p>'+
                    '<p>El Grupo Sosoares tiene a su dispinibilidad, para la difusi�n de los sistemas de aluminio para arqutectura un total de 10 t�cnicos y representantes de ventas, cuya funci�n es apoyar a nuestros clientes. As�, el tiempo puede ser minimizado en la b�squeda de informaci�n y la obtenci�n de apoyo.</p><br>'+
                    '<p>Con la creciente necesidad de controlar y Asesor�a T�cnica era imperativo pasar de vendedor tradicional con alguien cuya experiencia permite otra cosa que no sea el apoyo comercial, intervino en la redacci�n y la formaci�n de nuestros sistemas de marco.</p><br>'+
                    '<p>Para ello, el Grupo Sosoares ha realizado el paso categor�a vendedor al delegado t�cnico comercial. Al ser algo m�s que un cambio de nombre fue una creciente y sostenida paso del conocimiento para que podamos estar cada vez m�s en realizar un apoyo personalizado.</p><br>'+
                    '<h3 class="title3">Departamento de Presupuesto Aluminio</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/orcamentacao.jpg" alt=""></p>'+
                    '<p>El Grupo Sosoares asegura que todos los sistemas de clarificaci�n t�cnicas necesarias para su correcta aplicaci�n. El presupuesto de los proyectos es un servicio confiable y valioso para nuestros clientes.</p>'+
                    '<p>Contamos con tres oficinas t�cnicas en todo el pa�s con empleados capaces, no s�lo para aclarar las dudas que puedan surgir con nuestros clientes, sino tambi�n de asesorar a la que mejor se adapte a los m�s diversos sistemas de situaciones. El presupuesto de los diferentes proyectos, hace que nuestros clientes pueden tener una alta capacidad de respuesta al cliente final. La fiabilidad y la precisi�n en nuestras propuestas fiscales evitar sorpresas en la adjudicaci�n de los proyectos.</p><br>'+     
                    '<h3 class="title3">Estudio de Obras / Detalle Aluminio</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Con la creciente preocupaci�n en estudios de energ�a, unos buenos marcos de soluci�n es cada vez m�s influyente en todo el rendimiento ac�stico y t�rmico de una vivienda.</p><br>'+
                    '<p>La nueva legislaci�n en materia de calificaci�n de la energ�a deja de ser asesorado y ser� obligatorio, de manera que las tramas cada vez m�s los sistemas tienen que ser estudiadas seg�n el tipo de vivienda, ubicaci�n, orientaci�n, etc.</p><br>'+
                    '<p>El Grupo Sosoares ayuda a sus clientes en todas las fases, desde la promoci�n y el apoyo, el asesoramiento y la elaboraci�n de presupuestos, para que nada falle en lo que puede tener influencia en el �ltimo nivel de confort de la vivienda. </p><br>'+
                    '<p>Para ello, ofrece los prescriptores para apoyar dise�adores durante el estudio t�cnico y los detalles de cualquier trabajo. Con este servicio, tratamos de hacer que las soluciones son tan apropiados como sea posible a las obras que se van a recibir.</p><br>'+
                    '<table style="">'+
                    '<tbody>'+
                    '<tr>'+
                    '<td><p style="color: #107ca4 !important;"><strong>ZONA NORTE</strong></p><br><span>Nuno Oliveira</span><br><span>+351 936 456 144</span><br><span><a href="mailto:nuno.oliveira@sosoares.pt">nuno.oliveira@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONA CENTRO</strong></p><br><span>Nuno Fernandes</span><br><span>+351 936 454 274</span><br><span><a href="mailto:nuno.fernandes@sosoares.pt">nuno.fernandes@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONA SUR</strong></p><br><span>N�lson Morganho</span><br><span>+351 918 193 949</span><br><span><a href="mailto:nelson.morganho@sosoares.pt">nelson.morganho@sosoares.pt</a></span>&nbsp;</td>'+
                    '</tr>'+
                    '</tbody>'+
                    '</table><br><br>',
                },
        ]
    }
});


