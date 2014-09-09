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
                    html: '<p><h4><strong>Historia</strong></h4></p><p><br>El Grupo Sosoares tiene sus orígenes en la creación de la sociedad "Sosoares Máquinas y Herramientas SA" en 26 de diciembre de 1979, cuya actividad comenzó como el comercio de maquinaria y equipos para la industria de la carpintería de aluminio.</p><p>Consecuencia de una estrategia y el posicionamiento de la compañía en la innovación, la calidad del producto y servicio al cliente, esto se desarrolló de manera sostenida su trayectoria, convirtiéndose en un grupo a través de adquisiciones e inversiones con el objetivo de tener una visión vertical de la empresa orientada al mercado.</p><p><br><h4><strong>Presente</strong></h4></p><p><br>El Grupo está compuesto por 5 PMEs "Alfa Sul SA" "Alulider, Lda.", "Metalfer SA", "Perfis Oeiras SA" y "Sosoares SA" - que se complementan entre sí en el diseño, desarrollo, producción y comercialización de ventanas de aluminio &nbsp;y vidrios&nbsp;para la&nbsp;arquitectura cuya marca propia es "Sistemas Euro 2000".</p><p>Cuenta con más de 250 empleados dedicados y motivados, entre ellos 28 técnicos comerciales dirigidas al apoyo directo a la atención al cliente. En 2013 ha obtenido una facturación de aproximadamente 32 M €.</p><p><br>El grupo, teniendo en cuenta la situación actual y la evolución de la arquitectura de los edificios, concluyó recientemente una inversión de unos 15 millones de € en una unidad de vidrio, la integración de las últimas tecnologías y una amplia gama de equipos modernos en la transformación de vidrio para la arquitectura. Con el objetivo, por una parte para complementar su actividad mediante la integración en el producto final los dos materiales tales como el aluminio y el vidrio, la adición de ellos valor y la diferenciación, en la otra mano para satisfacer las demandas de los profesionales del sector que conducen el objetivo arquitectura actual de la transparencia en el que el material dominante es de cristal y los factores de relación son:</p><br><p>I – Minimalista Estética (máxima transparencia, mínima vista estructural)</p><br><p>II – Confort y ambiente</p><ul class="lista"><li>-La luz del día</li><li>-Transmisión de la luz</li><li>-Control solar (efecto invernadero en comparación con la ganancia solar)</li><li>-Eficiencia térmica (reducción de pérdidas de energía)</li></ul><br><p>III – Seguridad</p><ul class="lista"><li>-Protección contra lesiones personales (laminado, templado, reforzado contra el calor)</li><li>-Anti-intrusión</li><li>-Anti-proyectil</li></ul><br><p>IV – Integración decorativo</p><ul class="lista"><li>-Opacidad</li><li>-Serigrafía</li><li>-Pintura Digital vitrificada</li><li>-Pintura digital en P.V.B (laminado)</li></ul>',
                    foto: 'imgs/grupo.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 2,
                    text: 'Quienes Somos',
                    html: '<h4><strong>Un asociado continúo...</strong></h4><br><p>El Grupo Sosoares está comprometido y valora la colaboración con sus clientes y transformistas en el desarrollo del producto en su procesamiento y servicios posventa con el objetivo último de garantizar la satisfacción del cliente. Con este objetivo, el grupo cuenta con:</p><br><ul class="lista"><li><strong>Oficina de &nbsp;Desarrollo</strong> y análisis con profesionales calificados en ingeniería &nbsp;y arquitectura para la creación de nuevos sistemas y el aumento de los ya existentes.</li><br><li><strong>Cerrajería</strong> para taller de capacitación y trabajos de montaje.</li><br><li><strong>Oficina de presupuesto</strong> con una equipa de estimadores para apoyar el presupuesto a los clientes.</li><br><li>Soporte <strong>Helpdesk</strong> para la instalación de software de presupuesto, creación y actualización de la base de datos, así como la formación de usuarios.</li><br><li><strong>Un equipo comercial</strong> para proporcionar la divulgación de sistemas de vidrio y aluminio para la arquitectura, delegados técnicos comerciales, cuya función es apoyar a sus clientes. Así que el tiempo puede ser minimizado en la búsqueda de información y la obtención de las mejores soluciones técnicas.</li></ul>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 3,
                    text: 'Misión y Valores',
                    html: '<p><span lang="ES-TRAD">Desarrollar, producir y comercializar sistemas de aluminio y vidrios para la arquitectura que constituyen soluciones de marcos diferenciadas positivamente en la funcionalidad, confort, estética y eficiencia energética para asegurar la satisfacción total de los usuarios y contribuir a la preservación del planeta. </span></p><br><p><span lang="ES-TRAD">Exportación, la sustitución de importaciones, crear empleos, generar riqueza, aumentar el nivel de vida de los empleados y mejorar la competitividad de sus clientes es la misión del Grupo.</span></p>',
                    foto: 'imgs/sosoares.jpg',
                    icon: 'icon-apoio',
                    leaf: true
                },
                {
                    id: 4,
                    text: 'Mercado Objetivo',
                    html: '<p>El desarrollo de los marcos de aluminio integrados y vidrio ha sido una prioridad de Grupo Sosoares.</p><p>Estos sistemas integrados permiten resolver todos los condicionantes técnicos y estéticos exigidos por la evolución de la arquitectura moderna.</p><br><p>El seguimiento del proyecto desde la etapa de la arquitectura para la ejecución de la obra, permite la correcta implementación de la solución deseada y constante innovación de productos.</p>',
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