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
                    '<h3 class="title3">Técnico Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/technical-support.jpg" alt=""></p>'+
                    '<p>O Grupo Sosoares dispõe de assistência técnica em serralharia / obra. Este serviço visa formar os clientes na transformação dos nossos sistemas. Um sistema só atinge as suas capacidades reais quando é transformado da maneira correcta.</p><br>'+
                    '<p>Os clientes que forem executar uma obra com um sistema novo para a serralharia, podem requerer formação técnica junto do comercial do Grupo Sosoares. Depois de aprovada, é marcada uma data para a visita do técnico. Já na serralharia, o ténico do Grupo Sosoares faz uma sessão de formação práctica sobre o sistema, para que na execução da obra as potencialidades da caixilharia sejam aproveitadas ao máximo.</p><br>'+
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
                    '<h3 class="title3">Estudo Obra / Pormenorização Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Com a crescente preocupação nos estudos energéticos, uma boa solução de caixilharia é cada vez mais influente em todo o desempenho térmico e acústico de uma habitação. A nova legislação sobre classificação energética deixa de ser aconselhada e passa a ser obrigatória, fazendo com que cada vez mais os sistemas de caixilharia tenham de ser estudados conforme o tipo de habitação, localização, orientação, etc.</p><br>'+
                    '<p>O Grupo Sosoares acompanha os seus clientes / parceiros em todas as fases, desde a promoção e apoio, ao aconselhamento e orçamentação, para que nada falhe naquilo que possa ter influência ao nível do conforto final da habitação. Para tal, dispõe de prescritores para apoiar os técnicos projectistas durante o estudo e pormenorização de qualquer obra. Com este serviço tentamos fazer com que as soluções sejam o mais adequadas possível às obras que as vão receber.</p><br>'+
                    '<table style="">'+
                    '<tbody>'+
                    '<tr>'+
                    '<td><p style="color: #107ca4 !important;"><strong>ZONA NORTE</strong></p><br><span>Nuno Oliveira</span><br><span>+351 936 456 144</span><br><span><a href="mailto:nuno.oliveira@sosoares.pt">nuno.oliveira@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONA CENTRO</strong></p><br><span>Nuno Fernandes</span><br><span>+351 936 454 274</span><br><span><a href="mailto:nuno.fernandes@sosoares.pt">nuno.fernandes@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONA SUL</strong></p><br><span>Nélson Morganho</span><br><span>+351 918 193 949</span><br><span><a href="mailto:nelson.morganho@sosoares.pt">nelson.morganho@sosoares.pt</a></span>&nbsp;</td>'+
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
                html: '<div style="margin:10px" class="leaf_panel"><br>'+
                    '<h3 class="title3">Technical Support Aluminum</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/technical-support.jpg" alt=""></p>'+
                    '<p>Grupo Sosoares relies on technical support regarding blacksmith and construction works. This service aims at supplying our clients with information on our systems. A system will only reach its full purpose if transformed in the correct manner.</p><br>'+
                    '<p>Clients who intend to perform a work with a new metalwork system may require technical training from Grupo Sosoares. Once approved, a date for the technician’s visit is set.</p><br>'+
                    '<p>Once at the blacksmith’s, the technician from Grupo Sosoares develops a practical training session on the system, so that during performance the potential of the frame is applied to the fullest.</p><br>'+ 
                    '<h3 class="title3">Metalwork Management Software</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/prefsuite.jpg" alt=""></p>'+
                    '<p>The investment in this programme and the development of the database was pursued to assure the project would be a gain for our clients.Thus, with the continuous update of both the values as well as the new systems, we provide our clients with an extra tool to aid them in metalwork management.</p><br>'+
                    /*'<h3 class="title3">Budget / Technical Support Glass</h3><br>'+
                    '<p>A Sosoares Vidro conta com uma equipa de orçamentação pronta a ajudar em qualquer situação.</p><br>'+
                    '<p>Assim, com a constante actualização quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gestão da serralharia.</p><br>'+*/
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
                    '<tr><td><p style="color: #107ca4 !important;"><strong>SOUTH AREA</strong></p><br><span>Nélson Morganho</span><br><span>+351 918 193 949</span><br><span><a href="mailto:nelson.morganho@sosoares.pt">nelson.morganho@sosoares.pt</a></span>&nbsp;</td>'+
                    '</tr>'+
                    '</tbody>'+
                    '</table><br><br>',
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
                html: '<div style="margin:10px" class="leaf_panel"><br>'+
                    '<h3 class="title3">Assistance Technique Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/technical-support.jpg" alt=""></p>'+
                    '<p>Le Grupo Sosoares dispose d’une assistance technique en menuiserie/mise en ouvre.</p><br>'+
                    '<p>Ce service a pour objectif de former nos clients sur la modification de nos systèmes. Un système atteint ses réelles capacités quand il est installé de manière correcte.</p><br>'+
                    '<p>Les clients amenés à mettre en œuvre un nouveau système de menuiseries et de châssis, peuvent demander une formation technique par le biais de l’interlocuteur commercial du Grupo Sosoares. Après acceptation, une date est fixée pour la visite du technicien. Actuellement, le technicien du Grupo Sosoares présente une session de formation pratique sur le système afin que lors de l’exécution des travaux, tout le potentiel en matière de menuiseries et châssis soit au maximum mis en ouvre.</p><br>'+
                    '<h3 class="title3">Programme de Gestion en Serrurerie</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/prefsuite.jpg" alt=""></p>'+
                    '<p>L’investissement réalisé sur ce programme et dans le développement de la base de données, avait pour but de garantir que le projet soit une plus value pour nos clients.<br>Ainsi, avec la constante actualisation soit des valeurs soit des nouveaux systèmes, nous permettons à nos clients d’avoir un outil de plus pour les aider dans la gestion de la serrurerie.</p><br>'+
                    /*'<h3 class="title3">Budget / Technical Support Glass</h3><br>'+
                    '<p>A Sosoares Vidro conta com uma equipa de orçamentação pronta a ajudar em qualquer situação.</p><br>'+
                    '<p>Assim, com a constante actualização quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gestão da serralharia.</p><br>'+*/
                    '<h3 class="title3">Client Assistance Extrusion</h3><br>'+
                    '<p>Perfis Oeiras propose à ses clients un bureau et soutien au développement ont conduit à la connaissance dans le développement de solutions en aluminium extrudé pour différents marchés, à partir d\'énergies renouvelables, grâce à la construction de l\'industrie automobile.</p><br>'+
                    '<p>Ainsi, les clients peuvent compter sur Perfis Oeiras tout leur soutien dans le développement de solutions en aluminium extrudé qui répondent à vos besoins.</p><br>'+
                    '</div>',
                },
                {
                id : '3_5',
                cls: '5',
                html: '<div style="margin:10px" class="leaf_panel"><br>'+
                    '<h3 class="title3">Appui Commercial Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/comercial.png" alt=""></p>'+
                    '<p>Le Grupo Sosoares met à votre disposition pour la diffusion de ses systèmes en aluminium pour l’architecture, un total de 10 techniciens et commerciaux dont la fonction est d’aider nos clients. Ainsi, la perte de temps dans la recherche d’informations ou l’obtention d’une assistance est minimisée.</p><br>'+
                    '<p>Avec l’augmentation des besoins dans l’accompagnement et le conseil technique, il était essentiel de faire évoluer le traditionnel vendeur vers quelqu’un, dont les connaissances techniques vont au delà de l’aspect commercial, qui est intervenu et a été formé dans l’élaboration de nos différents systèmes.</p><br>'+ 
                    '<h3 class="title3">Bureau des Devis Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/orcamentacao.jpg" alt=""></p>'+
                    '<p>Le Grupo Sosoares s’engage à donner toutes les explications techniques nécessaires de nos systèmes afin de garantir leur mise en œuvre. Le bureau d’étude des projets élaborant les devis est fiable et précieux pour nos clients.</p>'+
                    '<p>Pour cela, nous comptons trois bureaux techniques dispersés dans le pays avec des employés capables de lever tous les doutes pouvant surgir chez nos clients, mais également de les conseiller sur le système le plus adapté face aux situations les plus diverses.</p><br>'+
                    '<h3 class="title3">Etudes de Travaux / Description Détaillée Aluminium</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Avec la préoccupation croissante dans nos études de consommation d’énergie, une bonne solution de menuiserie est très attractive grâce aux performances thermiques et acoustiques dans une construction.</p><br>'+
                    '<p>La nouvelle législation sur la classification énergétique ne représente plus seulement un conseil, elle devient obligatoire. Ce qui fait que chaque fois les systèmes de châssis doivent être étudiés et conformes au type de construction, localisation, orientation, etc.</p><br>'+
                    '<p>Le Grupo Sosoares accompagne ses clients/partenaires dans toutes les phases, depuis la promotion et l’assistance, le conseil et l’étude des devis, afin que rien n’échoue dans tout ce qui pourrait avoir un impact au niveau du confort final de la construction. C’est pourquoi, les techniciens projeteurs disposent de prescripteurs durant l’étude des détails de chaque chantier.</p><br>'+
                    '<p>Avec ce service, nous tentons de donner à chaque chantier les solutions les plus adaptées.</p><br>'+
                    '<table style="">'+
                    '<tbody>'+
                    '<tr>'+
                    '<td><p style="color: #107ca4 !important;"><strong>ZONE NORD</strong></p><br><span>Nuno Oliveira</span><br><span>+351 936 456 144</span><br><span><a href="mailto:nuno.oliveira@sosoares.pt">nuno.oliveira@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONE CENTRALE</strong></p><br><span>Nuno Fernandes</span><br><span>+351 936 454 274</span><br><span><a href="mailto:nuno.fernandes@sosoares.pt">nuno.fernandes@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONE SUD</strong></p><br><span>Nélson Morganho</span><br><span>+351 918 193 949</span><br><span><a href="mailto:nelson.morganho@sosoares.pt">nelson.morganho@sosoares.pt</a></span>&nbsp;</td>'+
                    '</tr>'+
                    '</tbody>'+
                    '</table><br><br>',
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
                html: '<div style="margin:10px" class="leaf_panel"><br>'+
                      '<h3 class="title3">Soporte Técnico Aluminio</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/technical-support.jpg" alt=""></p>'+
                    '<p>O Grupo Sosoares ofrece asistencia técnica en los talleres/obras. Este servicio tiene como objetivo capacitar a los clientes en la transformación de nuestros sistemas. Un sistema sólo alcanza sus verdaderas capacidades cuando se procesa de la manera correcta.</p><br>'+
                    '<p>Los clientes que ejecutan un proyecto con un nuevo sistema para el cerrajero pueden requerir capacitación técnica al Grupo Sosoares comercial. Una vez aprobado, la fecha y tiene previsto visitar el tecnico.</p><br>'+
                    '<p>Ya en la carpintería, el técnico-Sosoares realiza una sesión de formación práctica en el sistema, por lo que la ejecución de las posibilidades de trabajo de los marcos están plenamente bien hechos.</p><br>'+          
                    '<h3 class="title3">Programa de Gestión de Metalistería</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/prefsuite.jpg" alt=""></p>'+
                    '<p>La inversión realizada en este programa y el desarrollo de la base de datos era asegurarse de que el proyecto era de gran valor para nuestros clientes. </p><br>'+
                    '<p>Por lo tanto, la actualización constante, ya sea los valores o los nuevos sistemas, nos aseguramos de que nuestros clientes tengan una herramienta más para ayudar en la gestión de las ventanas.</p><br>'+   
                   /* '<h3 class="title3">Budget / Technical Support Glass</h3><br>'+
                    '<p>A Sosoares Vidro conta com uma equipa de orçamentação pronta a ajudar em qualquer situação.</p><br>'+
                    '<p>Assim, com a constante actualização quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gestão da serralharia.</p><br>'+*/
                    '<h3 class="title3">Client Assistance Extrusion</h3><br>'+
                    '<p>La Perfis Oeiras ofrece a sus clientes una oficina de apoyo y desarrollo dirigidos al conocimiento en el desarrollo de soluciones en perfiles de aluminio extruido para diferentes mercados, a partir de energías renovables, a través de la construcción para la industria del automóvil. </p><br>'+
                    '<p>Así los clientes pueden confiar a Perfis Oeiras todo su apoyo en el desarrollo de soluciones en perfiles extruidos de aluminio que satisfagan sus necesidades.</p><br>'+
                    '</div>',
                },
                {
                id : '4_5',
                cls: '5',
                html: '<div style="margin:10px" class="leaf_panel"><br>'+
                    '<h3 class="title3">Asistencia al Cliente Aluminio</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/comercial.png" alt=""></p>'+
                    '<p>El Grupo Sosoares tiene a su dispinibilidad, para la difusión de los sistemas de aluminio para arqutectura un total de 10 técnicos y representantes de ventas, cuya función es apoyar a nuestros clientes. Así, el tiempo puede ser minimizado en la búsqueda de información y la obtención de apoyo.</p><br>'+
                    '<p>Con la creciente necesidad de controlar y Asesoría Técnica era imperativo pasar de vendedor tradicional con alguien cuya experiencia permite otra cosa que no sea el apoyo comercial, intervino en la redacción y la formación de nuestros sistemas de marco.</p><br>'+
                    '<p>Para ello, el Grupo Sosoares ha realizado el paso categoría vendedor al delegado técnico comercial. Al ser algo más que un cambio de nombre fue una creciente y sostenida paso del conocimiento para que podamos estar cada vez más en realizar un apoyo personalizado.</p><br>'+
                    '<h3 class="title3">Departamento de Presupuesto Aluminio</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/orcamentacao.jpg" alt=""></p>'+
                    '<p>El Grupo Sosoares asegura que todos los sistemas de clarificación técnicas necesarias para su correcta aplicación. El presupuesto de los proyectos es un servicio confiable y valioso para nuestros clientes.</p>'+
                    '<p>Contamos con tres oficinas técnicas en todo el país con empleados capaces, no sólo para aclarar las dudas que puedan surgir con nuestros clientes, sino también de asesorar a la que mejor se adapte a los más diversos sistemas de situaciones. El presupuesto de los diferentes proyectos, hace que nuestros clientes pueden tener una alta capacidad de respuesta al cliente final. La fiabilidad y la precisión en nuestras propuestas fiscales evitar sorpresas en la adjudicación de los proyectos.</p><br>'+     
                    '<h3 class="title3">Estudio de Obras / Detalle Aluminio</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/estudo.png" alt=""></p>'+
                    '<p>Con la creciente preocupación en estudios de energía, unos buenos marcos de solución es cada vez más influyente en todo el rendimiento acústico y térmico de una vivienda.</p><br>'+
                    '<p>La nueva legislación en materia de calificación de la energía deja de ser asesorado y será obligatorio, de manera que las tramas cada vez más los sistemas tienen que ser estudiadas según el tipo de vivienda, ubicación, orientación, etc.</p><br>'+
                    '<p>El Grupo Sosoares ayuda a sus clientes en todas las fases, desde la promoción y el apoyo, el asesoramiento y la elaboración de presupuestos, para que nada falle en lo que puede tener influencia en el último nivel de confort de la vivienda. </p><br>'+
                    '<p>Para ello, ofrece los prescriptores para apoyar diseñadores durante el estudio técnico y los detalles de cualquier trabajo. Con este servicio, tratamos de hacer que las soluciones son tan apropiados como sea posible a las obras que se van a recibir.</p><br>'+
                    '<table style="">'+
                    '<tbody>'+
                    '<tr>'+
                    '<td><p style="color: #107ca4 !important;"><strong>ZONA NORTE</strong></p><br><span>Nuno Oliveira</span><br><span>+351 936 456 144</span><br><span><a href="mailto:nuno.oliveira@sosoares.pt">nuno.oliveira@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONA CENTRO</strong></p><br><span>Nuno Fernandes</span><br><span>+351 936 454 274</span><br><span><a href="mailto:nuno.fernandes@sosoares.pt">nuno.fernandes@sosoares.pt</a></span>&nbsp;<br><br></td></tr>'+
                    '<tr><td><p style="color: #107ca4 !important;"><strong>ZONA SUR</strong></p><br><span>Nélson Morganho</span><br><span>+351 918 193 949</span><br><span><a href="mailto:nelson.morganho@sosoares.pt">nelson.morganho@sosoares.pt</a></span>&nbsp;</td>'+
                    '</tr>'+
                    '</tbody>'+
                    '</table><br><br>',
                },
        ]
    }
});


