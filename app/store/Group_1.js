Ext.define('ItalboxCatalog.store.Group_1', {
        extend: 'Ext.data.TreeStore',
        config: {
             fields: [
                {name: 'id',type: 'int'},
                {name: 'text',type: 'string'},
                {name: 'html',type: 'string'},
                {name: 'foto',type: 'string'},
                {name: 'icon', type: 'string' },
             ],
        autoLoad: true,
            defaultRootProperty: 'items',
            root: {
                text:'Grupo Sosoares',
                items: [{
                    id: 1,
                    text: 'Grupo Sosoares',
                    html: '<h4><strong>Hist�ria</strong></h4><br><p style="text-align: justify;">Iniciou-se em 26 de Dezembro de 1979 com a continua��o da sociedade comercial por cotas �Sosoares Maquinas e Ferragens Lda�, cuja atividade come�ou por ser o com�rcio de maquinas e ferragens para a industria de caixilharias de alum�nio.</p><br><p style="text-align: justify;">Consequ�ncia de uma estrat�gia e do posicionamento da empresa no mercado orientada para a inova��o, qualidade de produto e servi�o ao cliente, esta foi tra�ando sustentadamente o seu percurso de crescimento, transformando-se em Grupo por via de aquisi��es e participa��es com o objetivo de verticalizar o seu neg�cio.</p><br><h4 style="text-align: justify;"><strong>O Presente</strong></h4><br><p style="text-align: justify;">O grupo � hoje constitu�do por 5 P.M.E�s, �Alfa Sul S.A.� �Alulider, Lda�, �Metalfer S.A.�, �Perfis Oeiras S.A.� e �Sosoares S.A.� � que se complementam entre si no projeto, desenvolvimento, produ��o, tratamento de superf�cies e comercializa��o de perfis de alum�nio e vidro para arquitetura, distribuindo com a marca pr�pria �Sistemas Euro 2000�.</p><br><p style="text-align: justify;">Conta com mais de 250 colaboradores empenhados e motivados, dos quais 28 t�cnicos comerciais direcionados ao apoio direto aos clientes. Obteve em 2013 um volume de neg�cios de aproximadamente 32 milh�es de euros.</p><br><p style="text-align: justify;">O grupo, atento � atual conjuntura e � evolu��o da arquitetura de edif�cios, conclui recentemente um investimento de cerca de 15 milh�es de euros numa unidade de transforma��o de vidro, integrando as mais recentes tecnologias e uma gama completa de equipamentos de ultima gera��o na transforma��o de vidro para arquitetura, tendo como objetivo, por um lado complementar a sua atividade integrando no produto final, os dois materiais de sua produ��o o alum�nio e o vidro, acrescentando-lhes valor e diferencia��o, por outro lado dar resposta �s solicita��es dos profissionais do sector que lideram a corrente arquitet�nica visado para a transpar�ncia em que o material dominante � o vidro e os fatores de rela��o s�o:</p><br><p>I � Est�tica minimalista (m�xima transpar�ncia, m�nima vista estrutural)</p><br><p>II � Conforto e ambiente</p><ul class="lista"><li>-Ilumina��o natural</li><li>-Transmiss�o luminosa</li><li>-Controlo solar (efeito estufa versus ganho solar)</li><li>-Efici�ncia t�rmica (redu��o de percas energ�ticas)</li></ul><br><p>III � Seguran�a</p><ul class="lista"><li>-Prote��o acidentes pessoais (laminado, temperado, termoendurecido)</li><li>-Anti-intrus�o</li><li>-Anti-projectil</li></ul><br><p>IV � Integra��o Decorativa</p><ul class="lista"><li>-Opacifica��o</li><li>-Serigrafia</li><li>-Pintura Digital Vitrificada</li><li>-Pintura Digital no P.V.B (laminado)</li></ul>',
                    foto: 'imgs/grupo.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Quem Somos',
                    html: '<h4><strong>Um parceiro continuo� </strong></h4><br><p>O Grupo Sosoares est� empenhado e valoriza a parceria com os seus clientes e transformadores, no desenvolvimento do produto, na sua transforma��o e na assist�ncia p�s venda, com o objetivo final de garantir um cliente, satisfeito. Com este objetivo o grupo disp�e de:</p><br><ul class="lista"><li><strong>Gabinete de desenvolvimento</strong> e an�lise com profissionais qualificados em engenharia e arquitetura para a cria��o de novos sistemas e complemento dos existentes.</li><br><li><strong>Serralheiro</strong> para forma��o em oficina e montagem em obra.</li><br><li><strong>Departamento de or�amenta��o</strong> com 4 or�amentistas para apoio � elabora��o de or�amentos aos clientes.</li><br><li><strong>Helpdesk</strong> para apoio na instala��o de software de or�amenta��o, cria��o e atualiza��o de base de dados assim como forma��o dos utilizadores.</li><br><li>Uma equipa comercial ao dispor, para divulga��o dos sistemas de alum�nio e vidro para arquitetura, num total de 17 delegados t�cnicos comerciais, cuja fun��o � dar apoio aos seus clientes. Assim podem ser minimizados tempos na procura de informa��o bem como na obten��o das melhores solu��es t�cnicas.</li></ul>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 3,
                    text: 'Miss�o e Valores',
                    html: 'Desenvolver, produzir e comercializar sistemas de alum�nio e vidros para arquitectura que constituam solu��es de caixilharia diferenciadas positivamente em funcionalidade, conforto, est�tica e efici�ncia energ�tica de forma a assegurar total satisfa��o dos utilizadores e contribuir para a preserva��o do planeta.<br><br> Exportar, substituir importa��es, criar emprego, produzir riqueza, elevar o n�vel de vida dos colaboradores e potenciar a competitividade dos seus clientes, � a miss�o do Grupo.',
                    foto: 'imgs/missao.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 4,
                    text: 'Mercados Alvo',
                    html: 'O desenvolvimento de sistemas integrados de caixilharia de alum�nio e vidro tem sido uma das prioridades do Grupo Sosoares. Estes sistemas integrados permitem solucionar todas as imposi��es t�cnicas e est�ticas exigidas pelos empreendimentos arquitect�nicos modernos.<br><br> O acompanhamento do projecto desde a fase da arquitectura at� � execu��o da obra, permite a correcta implementa��o da solu��o desejada e a constante inova��o dos produtos.',
                    foto: 'imgs/target_market.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 5,
                    text: '�reas Comerciais',
                    html: '',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                }
                ]
            }
    }
});