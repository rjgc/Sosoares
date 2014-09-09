Ext.define('ItalboxCatalog.store.Group_4', {
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
                    html: '<p><h4><strong>Historia</strong></h4></p><p><br>El Grupo Sosoares tiene sus or�genes en la creaci�n de la sociedad "Sosoares M�quinas y Herramientas SA" en 26 de diciembre de 1979, cuya actividad comenz� como el comercio de maquinaria y equipos para la industria de la carpinter�a de aluminio.</p><p>Consecuencia de una estrategia y el posicionamiento de la compa��a en la innovaci�n, la calidad del producto y servicio al cliente, esto se desarroll� de manera sostenida su trayectoria, convirti�ndose en un grupo a trav�s de adquisiciones e inversiones con el objetivo de tener una visi�n vertical de la empresa orientada al mercado.</p><p><br><h4><strong>Presente</strong></h4></p><p><br>El Grupo est� compuesto por 5 PMEs "Alfa Sul SA" "Alulider, Lda.", "Metalfer SA", "Perfis Oeiras SA" y "Sosoares SA" - que se complementan entre s� en el dise�o, desarrollo, producci�n y comercializaci�n de ventanas de aluminio &nbsp;y vidrios&nbsp;para la&nbsp;arquitectura cuya marca propia es "Sistemas Euro 2000".</p><p>Cuenta con m�s de 250 empleados dedicados y motivados, entre ellos 28 t�cnicos comerciales dirigidas al apoyo directo a la atenci�n al cliente. En 2013 ha obtenido una facturaci�n de aproximadamente 32 M �.</p><p><br>El grupo, teniendo en cuenta la situaci�n actual y la evoluci�n de la arquitectura de los edificios, concluy� recientemente una inversi�n de unos 15 millones de � en una unidad de vidrio, la integraci�n de las �ltimas tecnolog�as y una amplia gama de equipos modernos en la transformaci�n de vidrio para la arquitectura. Con el objetivo, por una parte para complementar su actividad mediante la integraci�n en el producto final los dos materiales tales como el aluminio y el vidrio, la adici�n de ellos valor y la diferenciaci�n, en la otra mano para satisfacer las demandas de los profesionales del sector que conducen el objetivo arquitectura actual de la transparencia en el que el material dominante es de cristal y los factores de relaci�n son:</p><br><p>I � Minimalista Est�tica (m�xima transparencia, m�nima vista estructural)</p><br><p>II � Confort y ambiente</p><ul class="lista"><li>-La luz del d�a</li><li>-Transmisi�n de la luz</li><li>-Control solar (efecto invernadero en comparaci�n con la ganancia solar)</li><li>-Eficiencia t�rmica (reducci�n de p�rdidas de energ�a)</li></ul><br><p>III � Seguridad</p><ul class="lista"><li>-Protecci�n contra lesiones personales (laminado, templado, reforzado contra el calor)</li><li>-Anti-intrusi�n</li><li>-Anti-proyectil</li></ul><br><p>IV � Integraci�n decorativo</p><ul class="lista"><li>-Opacidad</li><li>-Serigraf�a</li><li>-Pintura Digital vitrificada</li><li>-Pintura digital en P.V.B (laminado)</li></ul>',
                    foto: 'imgs/grupo.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Quienes Somos',
                    html: '<h4><strong>Un asociado contin�o...</strong></h4><br><p>El Grupo Sosoares est� comprometido y valora la colaboraci�n con sus clientes y transformistas en el desarrollo del producto en su procesamiento y servicios posventa con el objetivo �ltimo de garantizar la satisfacci�n del cliente. Con este objetivo, el grupo cuenta con:</p><br><ul class="lista"><li><strong>Oficina de &nbsp;Desarrollo</strong> y an�lisis con profesionales calificados en ingenier�a &nbsp;y arquitectura para la creaci�n de nuevos sistemas y el aumento de los ya existentes.</li><br><li><strong>Cerrajer�a</strong> para taller de capacitaci�n y trabajos de montaje.</li><br><li><strong>Oficina de presupuesto</strong> con una equipa de estimadores para apoyar el presupuesto a los clientes.</li><br><li>Soporte <strong>Helpdesk</strong> para la instalaci�n de software de presupuesto, creaci�n y actualizaci�n de la base de datos, as� como la formaci�n de usuarios.</li><br><li><strong>Un equipo comercial</strong> para proporcionar la divulgaci�n de sistemas de vidrio y aluminio para la arquitectura, delegados t�cnicos comerciales, cuya funci�n es apoyar a sus clientes. As� que el tiempo puede ser minimizado en la b�squeda de informaci�n y la obtenci�n de las mejores soluciones t�cnicas.</li></ul>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 3,
                    text: 'Misi�n y Valores',
                    html: '<p><span lang="ES-TRAD">Desarrollar, producir y comercializar sistemas de aluminio y vidrios para la arquitectura que constituyen soluciones de marcos diferenciadas positivamente en la funcionalidad, confort, est�tica y eficiencia energ�tica para asegurar la satisfacci�n total de los usuarios y contribuir a la preservaci�n del planeta. </span></p><br><p><span lang="ES-TRAD">Exportaci�n, la sustituci�n de importaciones, crear empleos, generar riqueza, aumentar el nivel de vida de los empleados y mejorar la competitividad de sus clientes es la misi�n del Grupo.</span></p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 4,
                    text: 'Mercado Objetivo',
                    html: '<p>El desarrollo de los marcos de aluminio integrados y vidrio ha sido una prioridad de Grupo Sosoares.</p><p>Estos sistemas integrados permiten resolver todos los condicionantes t�cnicos y est�ticos exigidos por la evoluci�n de la arquitectura moderna.</p><br><p>El seguimiento del proyecto desde la etapa de la arquitectura para la ejecuci�n de la obra, permite la correcta implementaci�n de la soluci�n deseada y constante innovaci�n de productos.</p>',
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