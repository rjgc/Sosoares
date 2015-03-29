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
                    html: '<h4><strong>História</strong></h4><br><p style="text-align: justify;">Iniciou-se em 26 de Dezembro de 1979 com a continuação da sociedade comercial por cotas “Sosoares Maquinas e Ferragens Lda”, cuja atividade começou por ser o comércio de maquinas e ferragens para a industria de caixilharias de alumínio.</p><br><p style="text-align: justify;">Consequência de uma estratégia e do posicionamento da empresa no mercado orientada para a inovação, qualidade de produto e serviço ao cliente, esta foi traçando sustentadamente o seu percurso de crescimento, transformando-se em Grupo por via de aquisições e participações com o objetivo de verticalizar o seu negócio.</p><br><h4 style="text-align: justify;"><strong>O Presente</strong></h4><br><p style="text-align: justify;">O grupo é hoje constituído por 5 P.M.E’s, “Alfa Sul S.A.” “Alulider, Lda”, “Metalfer S.A.”, “Perfis Oeiras S.A.” e “Sosoares S.A.” – que se complementam entre si no projeto, desenvolvimento, produção, tratamento de superfícies e comercialização de perfis de alumínio e vidro para arquitetura, distribuindo com a marca própria “Sistemas Euro 2000”.</p><br><p style="text-align: justify;">Conta com mais de 250 colaboradores empenhados e motivados, dos quais 28 técnicos comerciais direcionados ao apoio direto aos clientes. Obteve em 2013 um volume de negócios de aproximadamente 32 milhões de euros.</p><br><p style="text-align: justify;">O grupo, atento à atual conjuntura e à evolução da arquitetura de edifícios, conclui recentemente um investimento de cerca de 15 milhões de euros numa unidade de transformação de vidro, integrando as mais recentes tecnologias e uma gama completa de equipamentos de ultima geração na transformação de vidro para arquitetura, tendo como objetivo, por um lado complementar a sua atividade integrando no produto final, os dois materiais de sua produção o alumínio e o vidro, acrescentando-lhes valor e diferenciação, por outro lado dar resposta às solicitações dos profissionais do sector que lideram a corrente arquitetónica visado para a transparência em que o material dominante é o vidro e os fatores de relação são:</p><br><p>I – Estética minimalista (máxima transparência, mínima vista estrutural)</p><br><p>II – Conforto e ambiente</p><ul class="lista"><li>-Iluminação natural</li><li>-Transmissão luminosa</li><li>-Controlo solar (efeito estufa versus ganho solar)</li><li>-Eficiência térmica (redução de percas energéticas)</li></ul><br><p>III – Segurança</p><ul class="lista"><li>-Proteção acidentes pessoais (laminado, temperado, termoendurecido)</li><li>-Anti-intrusão</li><li>-Anti-projectil</li></ul><br><p>IV – Integração Decorativa</p><ul class="lista"><li>-Opacificação</li><li>-Serigrafia</li><li>-Pintura Digital Vitrificada</li><li>-Pintura Digital no P.V.B (laminado)</li></ul>',
                    foto: 'imgs/grupo.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Quem Somos',
                    html: '<h4><strong>Um parceiro continuo… </strong></h4><br><p>O Grupo Sosoares está empenhado e valoriza a parceria com os seus clientes e transformadores, no desenvolvimento do produto, na sua transformação e na assistência pós venda, com o objetivo final de garantir um cliente, satisfeito. Com este objetivo o grupo dispõe de:</p><br><ul class="lista"><li><strong>Gabinete de desenvolvimento</strong> e análise com profissionais qualificados em engenharia e arquitetura para a criação de novos sistemas e complemento dos existentes.</li><br><li><strong>Serralheiro</strong> para formação em oficina e montagem em obra.</li><br><li><strong>Departamento de orçamentação</strong> com 4 orçamentistas para apoio à elaboração de orçamentos aos clientes.</li><br><li><strong>Helpdesk</strong> para apoio na instalação de software de orçamentação, criação e atualização de base de dados assim como formação dos utilizadores.</li><br><li>Uma equipa comercial ao dispor, para divulgação dos sistemas de alumínio e vidro para arquitetura, num total de 17 delegados técnicos comerciais, cuja função é dar apoio aos seus clientes. Assim podem ser minimizados tempos na procura de informação bem como na obtenção das melhores soluções técnicas.</li></ul>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 3,
                    text: 'Missão e Valores',
                    html: 'Desenvolver, produzir e comercializar sistemas de alumínio e vidros para arquitectura que constituam soluções de caixilharia diferenciadas positivamente em funcionalidade, conforto, estética e eficiência energética de forma a assegurar total satisfação dos utilizadores e contribuir para a preservação do planeta.<br><br> Exportar, substituir importações, criar emprego, produzir riqueza, elevar o nível de vida dos colaboradores e potenciar a competitividade dos seus clientes, é a missão do Grupo.',
                    foto: 'imgs/missao.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 4,
                    text: 'Mercados Alvo',
                    html: 'O desenvolvimento de sistemas integrados de caixilharia de alumínio e vidro tem sido uma das prioridades do Grupo Sosoares. Estes sistemas integrados permitem solucionar todas as imposições técnicas e estéticas exigidas pelos empreendimentos arquitectónicos modernos.<br><br> O acompanhamento do projecto desde a fase da arquitectura até à execução da obra, permite a correcta implementação da solução desejada e a constante inovação dos produtos.',
                    foto: 'imgs/target_market.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 5,
                    text: 'Áreas Comerciais',
                    html: '',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                }
                ]
            }
    }
});