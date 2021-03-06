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
                    '<p><img class="imagem" style="float: left;  width: 100%;padding: 10px;" src="imgs/comercial.png" alt=""></p>'+
                    '<p>O Grupo Sosoares tem ao disp�r, para divulga��o dos sistemas de alum�nio para arquitectura, um total de 10 delegados t�cnicos e comerciais, cuja fun��o � dar apoio aos nossos clientes. Assim podem ser minimizados tempos na procura de informa��o bem como na obten��o de apoio.</p><br>'+
                    '<p>Com a crescente da necessidade no acompanhamento e aconcelhamento t�cnico, foi imperativo a evolu��o do tradicional vendedor para algu�m que cujos conhecimentos t�cnicos permita algo mais para al�m do apoio comercial, intervindo e formando na elabora��o dos nossos sistemas de caixilharia.</p><br>'+
                    '<p>Para isto, o Grupo Sosoares fez a passagem da categoria de vendedor para delegado t�cnico comercial. Sendo mais que uma simples mudan�a de nome, foi uma crescente e sustentada passagem de conhecimentos para que cada vez mais possamos ser efectivamente um apoio presente e personalizado.</p><br>'+
                    '<h3 class="title3">Or�amenta��o Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left;  width: 100%;padding: 10px;" src="imgs/orcamentacao.jpg" alt=""></p>'+
                    '<p>O Grupo Sosoares garante todos os esclarecimento t�cnicos necess�rios sobre os sistemas para a sua correcta implementa��o. A or�amenta��o dos projectos � um servi�o fi�vel e precioso para os nossos clientes.</p>'+
                    '<p>Para isso contamos com tr�s gabinetes t�cnicos espalhados pelo pa�s com funcion�rios capazes n�o s� de esclarecer todas as d�vidas que possam surgir nos nossos clientes, como tamb�m de aconselhar os melhores sistemas adequados �s mais diversas situa��es. A or�amenta��o dos mais diversos projectos, faz com que os nossos clientes possam ter uma elevada capacidade de resposta perante o cliente final. A fiabilidade e o rigor impostos nas nossas propostas evitam surpresas aquando da adjudica��o dos projectos.</p><br>'+
                    '<h3 class="title3">Estudo Obra / Pormenoriza��o Caixilharia</h3><br>'+
                    '<p><img class="imagem" style="float: left;  width: 100%;padding: 10px;" src="imgs/estudo.png" alt=""></p>'+
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
                    foto: 'imgs/sosoares.jpg',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Contactos',
                    icon: 'icon-call',
                    html:'<h3>Departamento Administrativo</h3>'+
                        '<span id="mails"><a href="mailto:geral@sosoares.pt">geral@sosoares.pt</a></span>'+
                        '<p>Rua do Baldeir�o, 4440-346</p>'+
                        '<p>Sobrado, Valongo - Portugal</p>'+
                        '<p>T +351 224 119 230</p>'+
                        '<p>F +351 224 119 231</p><br>'+
                        '<h3>Departamento Comercial</h3>'+
                        '<span id="mails"><a href="mailto:comercial@sosoares.pt">comercial@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto - Portugal</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                        '<h3>Departamento T�cnico</h3>'+
                        '<span id="mails"><a href="mailto:gabinete.tecnico@sosoares.pt">gabinete.tecnico@sosoares.pt</a></span>'+
                        '<p>Rua do Campo Alegre, 474</p>'+
                        '<p>4150-170 Porto</p>'+
                        '<p>T +351 226 096 709</p>'+
                        '<p>F +351 226 005 642</p><br>'+
                         '<h3>Departamento Desenvolvimento </h3>'+
                        '<span id="mails"><a href="mailto:desenvolvimento@sosoares.pt">desenvolvimento@sosoares.pt</a></span>'+
                        '<p>Travessa do Boleg�o, 146 Apartado1</p>'+
                        '<p>3754-904 Fermentelos</p>'+
                        '<p>T +351 234 729 740</p>'+
                        '<p>F +351 234 729 741</p><br>'+
                         '<h3>Departamento de Exporta��o</h3>'+
                        '<span id="mails"><a href="mailto:export@sosoares.pt">export@sosoares.pt</a></span>'+
                        '<p>Travessa do Boleg�o, 146 Apartado1</p>'+
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
                        text: 'Portugu�s',
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
                        text: 'Fran�ais',
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