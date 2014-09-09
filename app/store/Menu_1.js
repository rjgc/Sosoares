Ext.define('ItalboxCatalog.store.Menu_1', {
        extend: 'Ext.data.TreeStore',
        config: {
             fields: [
                {name: 'id',type: 'int'},
                {name: 'text',type: 'string'},
                {name: 'foto', type: 'string' },
                {name: 'html', type: 'string' },
                {name: 'icon', type: 'string' },
             ],
      
        autoLoad: true,
            defaultRootProperty: 'items',
            root: {
                text:'Menu',
                items: [
                {
                    id: 1,
                    text: 'Apoio a Clientes',
                    icon: 'icon-apoio',
                    html: '<h3 class="title3">Comercial Caixilharia</h3><br>'+
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
                    '<table style="width: 100%;">'+
                    '<tbody>'+
                    '<tr>'+
                    '<td><strong>ZONA NORTE</strong><br><br><span>Nuno Oliveira</span><br><br><span>+351 936 456 144</span><br><br><span>nuno.oliveira@sosoares.pt</span>&nbsp;</td></tr>'+
                        '<tr><td><strong>ZONA CENTRO</strong><br><br><span>Nuno Fernandes</span><br><br><span>+351 936 454 274</span><br><br><span>nuno.fernandes@sosoares.pt</span>&nbsp;</td></tr>'+
                        '<tr><td><strong>ZONA SUL</strong><br><br><span>Nélson Morganho</span><br><br><span>+351 918 193 949</span><br><br><span>nelson.morganho@sosoares.pt</span>&nbsp;</td>'+
                        '</tr>'+
                        
                        '</tbody>'+
                    '</table>'+
                    
                    '<h3 class="title3">Software Gestão Serralharia</h3><br>'+
                    '<p><img class="imagem" style="float: left; margin: 10px; max-width: 200px;" src="imgs/prefsuite.jpg" alt=""></p>'+
                    '<p>O investimento feito neste programa e no desenvolvimento da base de dados, foi para garantir que o projecto fosse uma mais valia para os nossos clientes.</p><br>'+
                    '<p>Assim, com a constante actualização quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gestão da serralharia.</p><br>'+
                    '<h3 class="title3">Orçamentação / Técnico Vidro</h3><br>'+
                    '<p>A Sosoares Vidro conta com uma equipa de orçamentação pronta a ajudar em qualquer situação.</p><br>'+
                    '<p>Assim, com a constante actualização quer dos valores quer dos novos sistemas, fazemos com que os nossos clientes tenham mais uma ferramenta para os ajudar na gestão da serralharia.</p><br>'+
                    '<h3 class="title3">Técnico Extrusão</h3><br>'+
                    '<p>A Perfis Oeiras têm ao dispor dos seus clientes um gabinete de apoio e desenvolvimento com levado conhecimento no desenvolvimento de soluções em perfis extrudidos de alumínio para os mais diversos mercados, desde as energias renováveis, passando pela construção até a indústria automóvel.</p><br>'+
                    '<p>Assim os clientes da Perfis Oeiras podem contar com todo o seu apoio na elaboração de soluções em perfis extrudidos de alumínio que vão de encontro às suas necessidades.</p><br>',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Contactos',
                    icon: 'icon-call',
                    html:'<h3>Departamento Administrativo</h3>'+
                        '<span id="mails"><a href="mailto:geral@sosoares.pt">geral@sosoares.pt</a></span>'+
                        '<p>Rua do Baldeirão, 4440-346</p>'+
                        '<p>Sobrado, Valongo - Portugal</p>'+
                        '<p>T +351 224 119 230</p>'+
                        '<p>F +351 224 119 231</p><br>'+
                        '<h3>Departamento Comercial</h3>'+
                        '<span id="mails"><a href="mailto:comercial@sosoares.pt">comercial@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto - Portugal</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                        '<h3>Departamento Técnico</h3>'+
                        '<span id="mails"><a href="mailto:gabinete.tecnico@sosoares.pt">gabinete.tecnico@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                         '<h3>Departamento Desenvolvimento </h3>'+
                        '<span id="mails"><a href="mailto:desenvolvimento@sosoares.pt">desenvolvimento@sosoares.pt</a></span>'+
                        '<p>Travessa do Bolegão, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 740</p>'+
                        '<p>F +351 234 729 741</p><br>'+
                         '<h3>Departamento de Exportação</h3>'+
                        '<span id="mails"><a href="mailto:export@sosoares.pt">export@sosoares.pt</a></span>'+
                        '<p>Travessa do Bolegão, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 743</p>'+
                        '<p>F +351 234 729 741</p>',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                },
                {
                    id: 3,
                    text: 'Onde Estamos',
                    icon: 'icon-local',
                    html: '',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                },
                {
                    id: 4,
                    text: 'Idiomas',
                    icon: 'icon-language',
                    items: [
                    {
                        id: 10,
                        text: 'Português',
                        icon: '',
                        leaf: true,
                    },
                    {
                        id: 11,
                        text: 'English',
                        icon: '',
                        leaf: true,
                    },
                    {
                        id: 12,
                        text: 'Français',
                        icon: '',
                        leaf: true,
                    },
                    {
                        id: 13,
                        text: 'Espanhol',
                        icon: '',
                        leaf: true,
                    }
                    ]
                },
                /*{
                    id: 5,
                    text: 'Ajuda',
                    icon: 'icon-help',
                    html: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus',
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                }*/
                ]
            }
    }
});