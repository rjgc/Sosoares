Ext.define('ItalboxCatalog.store.Group_2', {
        extend: 'Ext.data.TreeStore',
        //defaultRootProperty: 'items',
        config: {
             fields: [
                {name: 'id',type: 'int'},
                {name: 'text',type: 'string'},
                {name: 'html',type: 'string'},
                {name: 'foto',type: 'string'},
               /* {name: 'descricao',type: 'string'},*/
                {name: 'icon', type: 'string' },
             ],
      /*  defaultRootProperty: 'items',
        proxy: {
            type: 'ajax',
            url: 'http://critecns.com/sosoares_app/connect2.php?table=produtos_aluminio'
        },*/
        autoLoad: true,
        /*root: {
            text:'Menu'
        },*/
        //model: 'App.model.Grocery',
            defaultRootProperty: 'items',
            root: {
                text:'Grupo Sosoares',
                items: [{
                    id: 1,
                    text: 'Grupo Sosoares',
                    html: '<h4><strong>Hist�ria</strong></h4><br><p style="text-align: justify;">The Group Sosoares has its origins in the creation of society �Sosoares � M�quinas e Ferragens, Lda� in 26th December of 1979, whose activity began as trade in machinery and hardware for the industry of aluminum window frames.</p><br><p style="text-align: justify;">Consequence of a strategy and the company\'s positioning in the market-oriented to innovation, product quality and customer service, this developed in a sustained way its trajectory, becoming a Group through acquisitions and investments with the aim of having a vertical view of the business.</p><br><h4 style="text-align: justify;"><strong>Present</strong></h4><br><p style="text-align: justify;">The Group is currently composed of 5 SMEs, "Alfa Sul SA" "Alulider, Lda", "Metalfer SA", " Perfis Oeiras SA" and "Sosoares SA" � that complement each other in design, development, production and commercialization of aluminum frames and glass for architecture whose own brand is "Sistemas Euro 2000".</p><br><p style="text-align: justify;">It has more than 250 dedicated and motivated employees, including 28 commercial technicians targeted to direct support to customer service. In 2013 has obtained a turnover of approximately � 32 million.</p><br><p style="text-align: justify;">The group, bearing in mind the current situation and evolution of buildings architecture, recently concluded an investment of around � 15 million in a glass unit, integrating the latest technologies and a full range of modern equipments in transforming glass for architecture. Aiming on one hand to complement its activity by integrating in the final product the two materials such as the aluminum and glass, adding them value and differentiation, on the other hand to meet the demands of professionals of the sector who lead the current architecture target to transparency in which the dominant material is glass and the relation factors are:</p><br><p>I � Minimalist Aesthetics (maximum transparency, minimum structural view)</p><br><p>II � Comfort and environment</p><ul class="lista"><li>-Daylighting</li><li>-Light transmission</li><li>-Solar control (greenhouse versus solar gain)</li><li>-Thermal efficiency (reduction of energy losses)</li></ul><br><p>III � Security</p><ul class="lista"><li>-Injury Protection (laminated, tempered, heat-strengthened)</li><li>-Anti-intrusion</li><li>-Anti-projectile</li></ul><br><p>IV � Decorative Integration</p><ul class="lista"><li>-Opacification</li><li>-Serigraph</li><li>-Digital Painting Glazed</li><li>-Digital Painting in P.V.B (laminated)</li></ul>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Who We Are',
                    html: '<h4><strong>Um parceiro continuo� </strong></h4><br><p>O Grupo Sosoares est� empenhado e valoriza a parceria com os seus clientes e transformadores, no desenvolvimento do produto, na sua transforma��o e na assist�ncia p�s venda, com o objetivo final de garantir um cliente, satisfeito. Com este objetivo o grupo disp�e de:</p><br><ul class="lista"><li><strong>Gabinete de desenvolvimento</strong> e an�lise com profissionais qualificados em engenharia e arquitetura para a cria��o de novos sistemas e complemento dos existentes.</li><li><strong>Serralheiro</strong> para forma��o em oficina e montagem em obra.</li><li><strong>Departamento de or�amenta��o</strong> com 4 or�amentistas para apoio � elabora��o de or�amentos aos clientes.</li><li><strong>Helpdesk</strong> para apoio na instala��o de software de or�amenta��o, cria��o e atualiza��o de base de dados assim como forma��o dos utilizadores.</li><br><li>Uma equipa comercial ao dispor, para divulga��o dos sistemas de alum�nio e vidro para arquitetura, num total de 17 delegados t�cnicos comerciais, cuja fun��o � dar apoio aos seus clientes. Assim podem ser minimizados tempos na procura de informa��o bem como na obten��o das melhores solu��es t�cnicas.</li></ul>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 3,
                    text: 'Mission and Values',
                    html: 'Desenvolver, produzir e comercializar sistemas de alum�nio e vidros para arquitectura que constituam solu��es de caixilharia diferenciadas positivamente em funcionalidade, conforto, est�tica e efici�ncia energ�tica de forma a assegurar total satisfa��o dos utilizadores e contribuir para a preserva��o do planeta.<br> Exportar, substituir importa��es, criar emprego, produzir riqueza, elevar o n�vel de vida dos colaboradores e potenciar a competitividade dos seus clientes, � a miss�o do Grupo.',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 4,
                    text: 'Target markets',
                    html: 'O desenvolvimento de sistemas integrados de caixilharia de alum�nio e vidro tem sido uma das prioridades do Grupo Sosoares. Estes sistemas integrados permitem solucionar todas as imposi��es t�cnicas e est�ticas exigidas pelos empreendimentos arquitect�nicos modernos.<br> O acompanhamento do projecto desde a fase da arquitectura at� � execu��o da obra, permite a correcta implementa��o da solu��o desejada e a constante inova��o dos produtos.',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 5,
                    text: 'Commercial Areas',
                    html: '',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                }
                ]
            }
        
    }



});