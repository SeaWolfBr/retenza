window.APP_DATA = {
  onboarding: [
    {
      id: "studyType",
      question: "O que você está estudando?",
      options: [
        { value: "concurso",   label: "Concurso público" },
        { value: "vestibular", label: "Vestibular / ENEM" },
        { value: "oab",        label: "OAB / Prova de ordem" },
        { value: "outro",      label: "Outro estudo intenso" }
      ]
    },
    {
      id: "mainProblem",
      question: "Qual sua maior dificuldade na leitura?",
      options: [
        { value: "speed",     label: "Leio muito devagar" },
        { value: "retention", label: "Leio mas não retenho" },
        { value: "focus",     label: "Perco o foco no meio do texto" },
        { value: "fatigue",   label: "Canso rápido ao ler" }
      ]
    },
    {
      id: "sessionDuration",
      question: "Quanto tempo você tem para treinar?",
      options: [
        { value: 5,  label: "5 minutos" },
        { value: 10, label: "10 minutos" }
      ]
    }
  ],

  texts: [
    {
      id: "t1",
      title: "Princípios da Administração Pública",
      category: ["Direito", "Direito Administrativo", "Princípios Constitucionais"],
      tags: ["concurso", "oab"],
      difficulty: "medio",
      body: "A Constituição Federal de 1988, em seu artigo 37, estabelece que a administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência. O princípio da legalidade determina que o administrador público só pode fazer aquilo que a lei expressamente autoriza. Já a impessoalidade exige que os atos administrativos sejam praticados visando o interesse público, sem favorecimentos ou perseguições pessoais. A moralidade administrativa impõe ao agente público uma conduta ética e honesta. A publicidade garante a transparência dos atos, permitindo o controle pela sociedade. Por fim, a eficiência, incluída pela Emenda Constitucional 19 de 1998, exige que a administração atue com produtividade, economicidade e rapidez na prestação dos serviços públicos.",
      quiz: [
        {
          question: "O princípio da legalidade determina que o administrador público só pode agir quando expressamente autorizado por lei.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "O princípio da eficiência foi incluído na Constituição Federal pela Emenda Constitucional nº 19 de 1998.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "O princípio da impessoalidade admite que o agente público pratique atos visando interesses pessoais, desde que devidamente justificados.",
          options: ["Verdadeiro", "Falso"],
          correct: 1
        }
      ]
    },
    {
      id: "t2",
      title: "Ecossistemas Brasileiros e Biodiversidade",
      category: ["Ciências", "Biologia", "Ecossistemas Brasileiros"],
      tags: ["vestibular"],
      difficulty: "medio",
      body: "O Brasil é considerado o país com a maior biodiversidade do planeta, abrigando cerca de 20% de todas as espécies conhecidas. Essa riqueza biológica se distribui por seis grandes biomas: Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e Pantanal. A Amazônia, maior floresta tropical do mundo, ocupa aproximadamente 49% do território nacional e desempenha papel fundamental na regulação do clima global. O Cerrado, segundo maior bioma, é conhecido como o berço das águas por abrigar nascentes de importantes bacias hidrográficas. A Mata Atlântica, apesar de restar apenas cerca de 12% de sua cobertura original, ainda abriga uma enorme quantidade de espécies endêmicas. A Caatinga é o único bioma exclusivamente brasileiro, adaptado ao clima semiárido do Nordeste. O Pantanal é a maior planície alagável do mundo, e o Pampa, no Sul, caracteriza-se por campos nativos com grande diversidade de gramíneas.",
      quiz: [
        {
          question: "O Brasil abriga aproximadamente 20% de todas as espécies conhecidas do planeta.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "O Cerrado é o único bioma exclusivamente brasileiro, adaptado ao clima semiárido do Nordeste.",
          options: ["Verdadeiro", "Falso"],
          correct: 1
        },
        {
          question: "O Pantanal é a maior planície alagável do mundo.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        }
      ]
    },
    {
      id: "t3",
      title: "Interpretação de Texto e Inferência",
      category: ["Linguagens", "Interpretação de Texto", "Inferência e Leitura Ativa"],
      tags: ["concurso", "vestibular", "oab"],
      difficulty: "medio",
      body: "A capacidade de interpretar textos vai muito além da simples decodificação de palavras. Um leitor competente consegue identificar informações explícitas, mas também é capaz de perceber sentidos implícitos, fazer inferências e relacionar o que lê com seus conhecimentos prévios. A inferência é um processo cognitivo no qual o leitor extrai conclusões que não estão diretamente escritas no texto, utilizando pistas contextuais e seu repertório cultural. Em provas de concursos e vestibulares, as questões de interpretação frequentemente exigem que o candidato vá além do texto literal. É preciso identificar a intenção do autor, reconhecer ironias, distinguir fatos de opiniões e compreender relações de causa e consequência. Treinar a leitura ativa, fazendo perguntas ao texto enquanto lê, é uma das estratégias mais eficazes para desenvolver essa habilidade.",
      quiz: [
        {
          question: "A inferência é um processo cognitivo que permite ao leitor extrair conclusões não escritas diretamente no texto.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "Em provas de concursos, o candidato deve se limitar às informações explícitas do texto para responder questões de interpretação.",
          options: ["Verdadeiro", "Falso"],
          correct: 1
        },
        {
          question: "Fazer perguntas ao texto enquanto se lê é uma das estratégias mais eficazes para desenvolver a leitura ativa.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        }
      ]
    },
    {
      id: "t4",
      title: "Direitos e Garantias Fundamentais",
      category: ["Direito", "Direito Constitucional", "Direitos Fundamentais"],
      tags: ["concurso", "oab"],
      difficulty: "medio",
      body: "O artigo 5º da Constituição Federal de 1988 é considerado o mais denso e relevante do texto constitucional brasileiro, especialmente para fins de concursos públicos. Seu caput estabelece o princípio da igualdade formal: todos são iguais perante a lei, sem distinção de qualquer natureza. Essa igualdade alcança tanto brasileiros natos e naturalizados quanto estrangeiros residentes no país, garantindo a todos a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade. São 78 incisos e quatro parágrafos que formam o núcleo dos direitos fundamentais individuais e coletivos no ordenamento jurídico nacional.\n\nEntre os direitos de primeira dimensão — os chamados direitos civis e políticos — destacam-se as liberdades clássicas. O inciso II consagra o princípio da legalidade estrita: ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei. Esse princípio é espelho direto do Estado de Direito e limita o poder do Estado sobre o indivíduo. Já o inciso III proíbe expressamente a tortura e o tratamento desumano ou degradante, sendo essa vedação considerada cláusula pétrea indireta, já que integra o núcleo essencial da dignidade da pessoa humana, protegida pelo artigo 60, parágrafo 4º.\n\nA liberdade de pensamento é amplamente tutelada. O inciso IV garante a livre manifestação do pensamento, mas veda o anonimato — o que significa que o autor de uma manifestação pode ser responsabilizado civil e criminalmente. O inciso IX amplia essa proteção ao assegurar a livre expressão de atividade intelectual, artística, científica e de comunicação, independentemente de censura ou licença. O inciso VIII, por sua vez, protege a liberdade de consciência e de crença, assegurando o livre exercício dos cultos religiosos e a proteção aos locais de culto e suas liturgias.\n\nNo campo da privacidade, o artigo 5º é igualmente robusto. O inciso X declara invioláveis a intimidade, a vida privada, a honra e a imagem das pessoas, assegurado o direito à indenização pelo dano material ou moral decorrente de sua violação. O inciso XI protege o domicílio, considerado asilo inviolável do indivíduo — ninguém pode nele penetrar sem consentimento do morador, salvo em caso de flagrante delito, desastre ou para prestar socorro, ou ainda por determinação judicial durante o dia. O inciso XII trata do sigilo das comunicações, proibindo a interceptação de dados, correspondências e comunicações telefônicas, salvo por ordem judicial para fins de investigação criminal.\n\nOs direitos processuais e as garantias judiciais ocupam grande parte dos incisos. O inciso XXXV estabelece que a lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito — é o princípio da inafastabilidade da jurisdição. O inciso XXXVII proíbe os tribunais de exceção, e o inciso LIII consagra o princípio do juiz natural: ninguém será processado nem sentenciado senão pela autoridade competente. O due process of law aparece no inciso LIV, que determina que ninguém será privado da liberdade ou de seus bens sem o devido processo legal.\n\nO contraditório e a ampla defesa, com os meios e recursos a ela inerentes, são garantidos pelo inciso LV a todos os litigantes em processo judicial ou administrativo e aos acusados em geral. A presunção de inocência está no inciso LVII: ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória. O inciso LXIII assegura ao preso o direito ao silêncio e à assistência da família e de advogado — direitos que compõem o chamado aviso de Miranda no direito comparado.\n\nDentre os remédios constitucionais, destacam-se o habeas corpus, o mandado de segurança, o habeas data e o mandado de injunção. O habeas corpus, previsto no inciso LXVIII, protege a liberdade de locomoção quando ameaçada ou violada por ilegalidade ou abuso de poder. O mandado de segurança, nos incisos LXIX e LXX, defende direito líquido e certo não amparado por habeas corpus ou habeas data, praticado por autoridade pública ou agente de pessoa jurídica no exercício de atribuições públicas. O habeas data, inciso LXXII, garante o acesso a informações relativas ao próprio impetrante constantes em registros públicos ou bancos de dados de entidades governamentais. O mandado de injunção, inciso LXXI, é cabível sempre que a falta de norma regulamentadora torne inviável o exercício de direitos e liberdades constitucionais.\n\nOs parágrafos do artigo 5º também são de grande relevância para provas. O parágrafo 1º determina que as normas definidoras dos direitos e garantias fundamentais têm aplicação imediata — ou seja, independem de lei regulamentadora para produzir efeitos. O parágrafo 2º estabelece que os direitos expressos na Constituição não excluem outros decorrentes do regime e dos princípios por ela adotados, ou dos tratados internacionais em que o Brasil seja parte. O parágrafo 3º, introduzido pela Emenda Constitucional 45 de 2004, determina que os tratados e convenções internacionais sobre direitos humanos aprovados em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes às emendas constitucionais. E o parágrafo 4º reconhece a jurisdição do Tribunal Penal Internacional.",
      quiz: [
        {
          question: "O artigo 5º da CF/1988 garante a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "A liberdade de manifestação do pensamento, prevista no artigo 5º, permite o anonimato como forma de proteção do autor.",
          options: ["Verdadeiro", "Falso"],
          correct: 1
        },
        {
          question: "O habeas corpus protege a liberdade de locomoção quando ameaçada ou violada por ilegalidade ou abuso de poder.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        }
      ]
    },
    {
      id: "t7",
      title: "O Início do Infinito",
      category: ["Filosofia", "Filosofia da Ciência", "Progresso e Conhecimento"],
      tags: ["concurso", "vestibular"],
      difficulty: "medio",
      body: "O progresso que é ao mesmo tempo rápido o suficiente para ser percebido e estável o suficiente para continuar ao longo de muitas gerações foi alcançado apenas uma vez na história da nossa espécie. Ele começou aproximadamente na época da Revolução Científica e ainda está em curso. Incluiu melhorias não apenas na compreensão científica, mas também na tecnologia, nas instituições políticas, nos valores morais, na arte e em todos os aspectos do bem-estar humano.\n\nSempre que houve progresso, houve pensadores influentes que negaram que ele fosse genuíno, que fosse desejável ou até mesmo que o conceito de progresso fosse significativo. Eles deveriam saber melhor. Existe, de fato, uma diferença objetiva entre uma explicação falsa e uma verdadeira, entre o fracasso crônico em resolver um problema e a sua solução, e também entre o errado e o certo, o feio e o belo, o sofrimento e o seu alívio – e, assim, entre estagnação e progresso no sentido mais pleno.\n\nNeste livro, argumento que todo progresso, tanto teórico quanto prático, resultou de uma única atividade humana: a busca pelo que eu chamo de boas explicações. Embora essa busca seja exclusivamente humana, sua eficácia é também um fato fundamental sobre a realidade no nível mais impessoal e cósmico – a saber, que ela se conforma a leis universais da natureza que, de fato, são boas explicações. Essa relação simples entre o cósmico e o humano é uma pista do papel central das pessoas no esquema cósmico das coisas.\n\nO progresso deve chegar ao fim – seja por uma catástrofe ou algum tipo de conclusão – ou é ilimitado? A resposta é a última. Essa ilimitabilidade é o \"infinito\" referido no título deste livro. Explicá-la, e as condições sob as quais o progresso pode ou não ocorrer, envolve uma jornada por praticamente todos os campos fundamentais da ciência e da filosofia.\n\nDe cada um desses campos, aprendemos que, embora o progresso não tenha um fim necessário, ele tem um começo necessário: uma causa, ou um evento com o qual ele se inicia, ou uma condição indispensável para que ele decole e prospere. Cada um desses começos é \"o início do infinito\", visto da perspectiva daquele campo. Muitos parecem, superficialmente, desconectados. Mas todos são facetas de um único atributo da realidade, que o autor chama de o início do infinito.",
      quiz: [
        {
          question: "Segundo o autor, todo progresso teórico e prático resultou de uma única atividade humana: a busca por boas explicações.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "O autor defende que o progresso chegará inevitavelmente a um fim, seja por catástrofe ou por conclusão natural.",
          options: ["Verdadeiro", "Falso"],
          correct: 1
        },
        {
          question: "O texto critica os pensadores que negaram o progresso, afirmando que existe diferença objetiva entre estagnação e avanço.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        }
      ]
    },
    {
      id: "t6",
      title: "A Consciência é Nosso Próprio Ser",
      category: ["Filosofia", "Filosofia da Mente", "Consciência"],
      tags: ["concurso", "vestibular"],
      difficulty: "medio",
      body: "A consciência pode ser comparada a uma pequena chama invisível e vacilante; costuma-se pensar que ela apenas ilumina algo que estaria fora dela, como se o nosso verdadeiro ser existisse em outro lugar, mas, na realidade, somos exatamente essa luz. Assim, quando essa chama enfraquece, é a própria existência que se enfraquece, e quando ela se apaga por completo, deixa de haver existência.\n\nDizer que a consciência nos oferece apenas uma imagem imperfeita do que existe não faz sentido, pois é justamente essa imagem que constitui, para nós, todo o universo possível, já que jamais teremos acesso a outro; do mesmo modo, afirmar que ela nos isola em uma solidão absoluta também é equivocado, porque é nela que surgem e ganham significado as ideias de sociedade, amizade e amor. É no interior da consciência que nascem tanto o desejo quanto o sentimento de possuir algo — e, de certo modo, essa própria consciência já realiza essa posse.\n\nQuando a consciência busca um objeto fora de si e sofre por não poder alcançá-lo, esse sofrimento expressa a experiência de seus próprios limites e, ao mesmo tempo, o impulso de superá-los, pois ela tende a crescer para poder acolher aquilo que ainda não contém; afinal, para a consciência, nada pode existir verdadeiramente como objeto senão aquilo que ela é capaz de integrar em si. Pode-se dizer que a consciência está encerrada em si mesma como em uma prisão, mas é uma prisão singular, pois seus limites não são fixos: eles se deslocam indefinidamente, já que tudo aquilo que antes parecia exterior passa a ser incorporado à medida que a própria consciência se amplia.\n\nNão faz sentido considerar a consciência como uma prisão, a não ser quando o próprio indivíduo se fecha e restringe suas possibilidades; ao contrário, é com o surgimento da consciência que o ser começa a se libertar das limitações puramente materiais, percebendo sua independência e abrindo-se para um horizonte infinito que ultrapassa suas forças, mas não sua esperança. À medida que essa consciência se desenvolve, ela se torna mais receptiva, passa a abarcar cada vez mais o mundo, entra em relação com ele e encontra alegria justamente nessa abertura, ao reconhecer à sua volta inúmeras possibilidades de encontro e conexão.\n\nQualquer estado da consciência, mesmo os mais negativos como o sofrimento ou o pecado, possui mais valor do que a insensibilidade, pois revela que a vida ainda está ativa e capaz de ser afetada; por isso, esses estados não devem ser eliminados, mas transformados, já que tudo aquilo que é retirado da consciência se perde no nada. A plenitude não está em reduzir ou empobrecer a experiência, mas em ampliá-la de modo ordenado, integrando o maior número possível de impulsos e, ao mesmo tempo, depurando suas imperfeições, até alcançar uma consciência mais rica e elevada.",
      quiz: [
        {
          question: "Segundo o texto, quando a consciência se apaga completamente, a própria existência deixa de haver.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "O texto afirma que a consciência é uma prisão de limites fixos e permanentes, da qual o indivíduo não pode escapar.",
          options: ["Verdadeiro", "Falso"],
          correct: 1
        },
        {
          question: "O texto defende que estados negativos como sofrimento possuem mais valor do que a insensibilidade.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        }
      ]
    },
    {
      id: "t5",
      title: "Revolução Industrial e Transformações Sociais",
      category: ["História", "História Moderna", "Revolução Industrial"],
      tags: ["vestibular"],
      difficulty: "medio",
      body: "A Revolução Industrial, iniciada na Inglaterra na segunda metade do século XVIII, transformou profundamente as relações de produção e a organização social. A introdução de máquinas a vapor nas fábricas substituiu gradualmente o trabalho manual e artesanal, aumentando a produtividade e gerando uma migração massiva do campo para as cidades. Esse processo de urbanização acelerada trouxe consequências como a formação de uma classe operária urbana, condições precárias de trabalho, jornadas exaustivas e o uso de mão de obra infantil. Em resposta a essas condições, surgiram os primeiros movimentos sindicais e as lutas por direitos trabalhistas. A Revolução Industrial também impulsionou avanços tecnológicos e científicos que moldaram o mundo moderno, desde os transportes ferroviários até as telecomunicações. Compreender esse período é fundamental para entender as bases da sociedade contemporânea e as desigualdades que persistem até hoje.",
      quiz: [
        {
          question: "A Revolução Industrial teve início na Inglaterra na segunda metade do século XVIII.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "A industrialização provocou o retorno em massa da população das cidades para o campo.",
          options: ["Verdadeiro", "Falso"],
          correct: 1
        },
        {
          question: "Os primeiros movimentos sindicais surgiram como resposta às condições precárias de trabalho geradas pela industrialização.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        }
      ]
    },
    {
      id: "t8",
      title: "Vícios dos Atos Administrativos",
      category: ["Direito", "Direito Administrativo", "Atos Administrativos"],
      tags: ["concurso", "oab"],
      difficulty: "medio",
      body: "A Lei 4.717/1965, ao tratar dos vícios dos atos administrativos, considera incompetente o ato praticado fora das atribuições legais do agente, o que se relaciona ao chamado excesso de poder. Esse excesso ocorre quando o agente público atua além ou fora dos limites de sua competência legal e constitui uma forma de abuso de poder, distinta do desvio de poder, que atinge a finalidade do ato. Maria Sylvia Di Pietro exemplifica o excesso de poder com situações em que a autoridade aplica penalidade mais grave do que poderia ou em que a autoridade policial usa força excessiva. Embora seja vício de competência, esse defeito nem sempre leva à anulação do ato, pois pode ser convalidado, exceto quando envolver competência em razão da matéria ou competência exclusiva. A autora também aponta outras irregularidades relacionadas à competência: a usurpação de função e a função de fato. A usurpação de função ocorre quando alguém sem qualquer investidura em cargo, emprego ou função pública pratica atos como se agente público fosse, configurando crime. Já a função de fato ocorre quando a pessoa foi investida, mas existe ilegalidade na investidura ou impedimento legal para praticar o ato. Nessa hipótese, pela teoria da aparência, os atos ou ao menos seus efeitos podem ser tidos como válidos. Na usurpação de função, por outro lado, prevalece o entendimento de que o ato é inexistente.",
      quiz: [
        {
          question: "O excesso de poder é uma forma de abuso de poder ligada à atuação do agente além dos limites de sua competência.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "A função de fato ocorre quando a pessoa nunca teve qualquer investidura em cargo ou função pública.",
          options: ["Verdadeiro", "Falso"],
          correct: 1
        },
        {
          question: "Na usurpação de função, a doutrina majoritária entende que o ato praticado é inexistente.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        }
      ]
    },
    {
      id: "t9",
      title: "Acesso a Cargos Públicos",
      category: ["Direito", "Direito Administrativo", "Servidores Públicos"],
      tags: ["concurso", "oab"],
      difficulty: "medio",
      body: "A Constituição de 1988 tratou de forma minuciosa do direito administrativo para enfrentar distorções históricas da administração pública brasileira, marcadas pelo patrimonialismo. Nesse contexto, os arts. 37 a 40 concentram regras fundamentais sobre a administração em geral, o servidor em mandato eletivo, o regime dos servidores estatutários e o regime próprio de previdência desses agentes. Com o passar do tempo, parte dessa orientação constitucional foi modificada pela chamada administração gerencial, especialmente por meio das Emendas Constitucionais 19/1998, 20/1998 e 41/2003, associadas à reforma administrativa e previdenciária.\n\nNo estudo dos agentes públicos, têm destaque os arts. 37, 38, 39, 40 e 41 da Constituição, além da Lei 8.112/1990, que disciplina os servidores estatutários federais. Quanto ao acesso a cargos, empregos e funções públicas, os primeiros incisos do art. 37 definem quem pode ingressar na administração e sob quais condições. Com a EC 19/1998, os estrangeiros passaram a poder acessar esses cargos, empregos e funções, desde que exista previsão legal. Para os brasileiros, natos ou naturalizados, o ingresso depende apenas do preenchimento dos requisitos estabelecidos em lei.\n\nO texto também recorda que já existiam previsões específicas para admissão de estrangeiros, como nas universidades, instituições de pesquisa e contratações temporárias de professores e pesquisadores visitantes. Ainda assim, a Constituição reserva certos cargos exclusivamente a brasileiros natos, como os de Presidente e Vice-Presidente da República, Presidentes da Câmara e do Senado, Ministro do STF, integrantes da carreira diplomática, oficiais das Forças Armadas e Ministro da Defesa.",
      quiz: [
        {
          question: "A Constituição de 1988 disciplinou de forma detalhada temas centrais do direito administrativo, incluindo regras sobre agentes e servidores públicos.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "Após a EC 19/1998, os estrangeiros passaram a poder ocupar cargos, empregos e funções públicas apenas quando houver previsão legal.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "Os cargos listados no art. 12, § 3.º, da Constituição podem ser ocupados por brasileiros naturalizados, desde que aprovados em concurso.",
          options: ["Verdadeiro", "Falso"],
          correct: 1
        }
      ]
    },
    {
      id: "t10",
      title: "Exame Psicotécnico em Concurso Público",
      category: ["Direito", "Direito Administrativo", "Concurso Público"],
      tags: ["concurso", "oab"],
      difficulty: "medio",
      body: "Segundo a jurisprudência do STF, o exame psicotécnico em concurso público só pode ser exigido quando houver previsão em lei e no edital, com uso de critérios objetivos e cientificamente reconhecidos, além da garantia de recurso e possibilidade de reexame. A Corte destaca que, sobretudo quando a avaliação tem efeito eliminatório, os parâmetros adotados precisam ser técnicos, controláveis e suficientemente claros para permitir contestação administrativa e controle judicial. Por isso, não basta submeter o candidato a uma avaliação psicológica: é necessário que o procedimento seja transparente, fundamentado e compatível com o acesso ao Judiciário. Dessa orientação decorre que a exigência do psicotécnico depende, cumulativamente, de base legal e editalícia, critérios objetivos de caráter científico e possibilidade de impugnação. Esse entendimento aparece tanto na Súmula Vinculante 44, que condiciona o exame à previsão legal, quanto na Súmula Administrativa AGU 35/2008, que também exige critérios objetivos no edital e recurso administrativo. Se o exame aplicado a um candidato for anulado, ele não fica dispensado da etapa. Nessa hipótese, deve ser realizada nova avaliação, sem os vícios do teste anterior, conforme tese fixada em repercussão geral. No âmbito do Poder Executivo federal, o Decreto 9.739/2019 segue essa mesma linha: a avaliação psicológica exige previsão legal específica, deve constar do edital e utilizar instrumentos capazes de aferir, de forma objetiva e padronizada, a compatibilidade entre as características psicológicas do candidato e as atribuições do cargo. O decreto ainda determina que o resultado final seja divulgado apenas como apto ou inapto, assegura recurso nos termos do edital, impede que os mesmos profissionais que avaliaram o candidato julguem o recurso e prevê que, sendo insuficiente a documentação ou a fundamentação da avaliação, o exame será anulado e repetido por outro profissional.",
      quiz: [
        {
          question: "O STF admite a exigência de exame psicotécnico em concurso público, desde que haja previsão em lei, critérios objetivos de caráter científico e possibilidade de recurso.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "Declarada a nulidade do exame psicotécnico, o candidato deve ser dispensado dessa etapa e prosseguir diretamente no concurso.",
          options: ["Verdadeiro", "Falso"],
          correct: 1
        },
        {
          question: "Pelo Decreto 9.739/2019, os profissionais que realizaram a avaliação psicológica não podem participar do julgamento dos recursos contra seu resultado.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        }
      ]
    },
    {
      id: "t11",
      title: "Validade do Concurso Público",
      category: ["Direito", "Direito Administrativo", "Concurso Público"],
      tags: ["concurso", "oab"],
      difficulty: "medio",
      body: "O art. 37, inciso III, da Constituição estabelece que o concurso público pode ter validade de até dois anos, admitida uma única prorrogação por período igual. Esse prazo corresponde ao tempo em que a administração pode nomear ou contratar os aprovados para o cargo ou emprego oferecido. A contagem começa com a homologação do concurso, ato pelo qual a autoridade competente reconhece a regularidade e a conclusão válida do certame. Somente depois dessa homologação, e dentro do prazo de validade, é possível nomear ou contratar candidatos aprovados. Cabe à administração definir, de forma discricionária, o prazo de validade de cada concurso, devendo essa informação constar no edital. Se o edital nada disser, parte da doutrina entende que o prazo será de dois anos. Também se costuma afirmar que, havendo prorrogação, ela deve ter exatamente a mesma duração do prazo inicial previsto no edital. Assim, se a validade original for de dez meses, a eventual prorrogação também terá de ser de dez meses. Embora essa interpretação seja frequente na doutrina, não decorre de modo evidente da literalidade do texto constitucional. De todo modo, é pacífico que a decisão de prorrogar ou não o prazo de validade do concurso é discricionária. Se houver prorrogação, ela precisa ser formalizada antes do término do prazo inicial, pois, segundo o Supremo Tribunal Federal, não se admite prorrogar concurso já vencido. Além disso, o § 2.º do art. 37 prevê que o desrespeito ao prazo de validade do concurso torna nulo o ato praticado e sujeita a autoridade responsável às sanções legais.",
      quiz: [
        {
          question: "O prazo de validade do concurso público começa a ser contado a partir da homologação do certame.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "A administração pode prorrogar o prazo de validade do concurso mesmo depois de encerrado o prazo inicial, desde que haja justificativa.",
          options: ["Verdadeiro", "Falso"],
          correct: 1
        },
        {
          question: "O desrespeito ao prazo de validade do concurso pode gerar nulidade do ato e responsabilização da autoridade competente.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        }
      ]
    },
    {
      id: "t12",
      title: "Mitologia Grega e Sabedoria Antiga",
      category: ["Filosofia", "Filosofia Antiga", "Mitologia Grega"],
      tags: ["vestibular", "concurso"],
      difficulty: "medio",
      body: "A mitologia grega não deve ser entendida como simples coleção de lendas voltadas ao entretenimento. Em obras como a Odisseia, ela aparece como uma forma antiga de sabedoria, depois desenvolvida pela filosofia grega em linguagem conceitual. Por isso, os mitos continuam relevantes: eles ajudam a pensar o sentido da vida humana, os critérios de uma existência bem-sucedida e o lugar do conflito na experiência dos mortais.\n\nA trajetória de Ulisses mostra isso com clareza. Após dez anos de guerra em Troia, ele vence graças ao estratagema do cavalo de madeira, mas a violência do saque provoca a ira dos deuses. Com o fim do conflito, seu desejo é regressar a Ítaca, reencontrar Penélope e Telêmaco e retomar seu lugar na casa e no reino. Contudo, antes da reconciliação e da ordem, sua história se inicia no caos, sob o signo da discórdia.\n\nEssa desordem tem origem em Éris. No casamento dos futuros pais de Aquiles, a deusa, excluída da festa, surge para semear rivalidade e lança sobre a mesa um pomo de ouro destinado à mais bela. O gesto desperta a disputa entre Hera, Atena e Afrodite. Para não se indispor com nenhuma delas, Zeus transfere a decisão a Páris, jovem troiano criado como pastor, embora fosse filho do rei Príamo.\n\nCada deusa tenta influenciá-lo oferecendo aquilo que simboliza: Hera promete poder e soberania, Atena oferece êxito nas guerras e Afrodite garante o amor da mulher mais bela do mundo. Páris escolhe Afrodite, e dessa escolha nasce a tragédia, porque Helena, a mulher prometida, era esposa de Menelau, rei de Esparta. Assim, o mito sugere que a guerra de Troia nasce da combinação entre vaidade, desejo, promessa e rivalidade, revelando que os mitos gregos não servem apenas para narrar aventuras, mas para refletir sobre a desordem humana e a difícil conquista da harmonia.\n\nUlisses acaba envolvido nesse conflito porque os reis gregos haviam jurado ajudar aquele que se casasse com Helena. Como ela escolhera Menelau, todos ficaram obrigados a socorrê-lo quando ocorreu o rapto. Mesmo tentando escapar da convocação, Ulisses é forçado a partir e permanece por muitos anos distante de seu lugar natural. Depois da guerra, ainda enfrenta uma longa e penosa viagem de retorno, marcada por provas e obstáculos. Com isso, o mito mostra que a sabedoria, a salvação e a vida harmoniosa não são dadas de imediato, mas exigem travessia, sofrimento e conquista.",
      quiz: [
        {
          question: "O texto apresenta a mitologia grega como uma fonte de sabedoria sobre a vida humana, e não apenas como distração literária.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "Zeus escolhe pessoalmente Afrodite como a mais bela para evitar conflitos entre as deusas.",
          options: ["Verdadeiro", "Falso"],
          correct: 1
        },
        {
          question: "A trajetória de Ulisses é usada no texto para mostrar que a harmonia e a sabedoria dependem de uma jornada difícil e conflituosa.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        }
      ]
    },
    {
      id: "t13",
      title: "Crise da Democracia Americana",
      category: ["Filosofia", "Filosofia Política", "Democracia Contemporânea"],
      tags: ["concurso", "vestibular"],
      difficulty: "medio",
      body: "O texto sustenta que a antiga república americana está em processo de desagregação, enquanto uma nova ordem política ainda indefinida começa a surgir. Até meados dos anos 2000, apesar de imperfeições, o sistema ainda preservava elementos básicos de coesão: os eleitores consumiam referências comuns de informação, os partidos conseguiam discutir grandes temas, o Congresso aprovava os orçamentos e boa parte das famílias mantinha expectativa positiva em relação ao futuro do país.\n\nEsse quadro, segundo o autor, foi profundamente abalado por três choques sucessivos: a crise financeira global, a ascensão do populismo e a pandemia. Em tese, uma democracia sólida poderia ter absorvido esses impactos. Nos Estados Unidos, porém, eles expuseram a deterioração acumulada de estruturas políticas e sociais que já vinham se enfraquecendo havia muito tempo.\n\nAs pesquisas de opinião revelam a extensão desse desalento. Grande parte dos eleitores afirma que o país está desmoronando, teme pela sobrevivência da democracia e enxerga uma situação de crise nacional. Ao mesmo tempo, indicadores de felicidade e orgulho cívico recuaram a níveis historicamente baixos, sinalizando perda de confiança não apenas nas instituições, mas no próprio projeto nacional.\n\nO autor argumenta que esse colapso se manifestou também na incapacidade do Estado de cumprir funções elementares. Faltaram respostas adequadas em áreas como abastecimento, segurança, controle de fronteiras, assistência social, fiscalização de grandes interesses econômicos e condução ordenada de processos políticos e militares. Até tarefas antes vistas como básicas passaram a parecer fora de alcance.\n\nNa área da saúde pública, o fracasso foi especialmente grave. Apesar dos recursos econômicos e científicos disponíveis, os Estados Unidos registraram resultados de mortalidade por Covid e queda da expectativa de vida que revelaram grande vulnerabilidade institucional. Para o autor, isso não foi um episódio isolado, mas parte de um processo mais amplo de decadência administrativa e cívica.\n\nPor fim, o texto destaca que a perda de competência do Estado veio acompanhada de erosão da confiança mútua entre os americanos e de descrença em seus líderes. Sem uma base mínima de confiança compartilhada, desaparece também a possibilidade de uma verdade pública comum. Nesse vácuo, proliferam teorias conspiratórias e narrativas rivais, como se o país tivesse reencontrado uma espécie de Torre de Babel, em que grupos já não falam a mesma língua política nem conseguem cooperar em objetivos comuns.",
      quiz: [
        {
          question: "O texto afirma que a crise americana recente resultou da combinação entre choques conjunturais e fragilidades estruturais acumuladas ao longo do tempo.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        },
        {
          question: "Segundo o texto, os Estados Unidos responderam à pandemia de forma exemplar, o que preservou a confiança pública nas instituições.",
          options: ["Verdadeiro", "Falso"],
          correct: 1
        },
        {
          question: "A referência à Torre de Babel serve para ilustrar a fragmentação da linguagem política e a dificuldade de cooperação nacional.",
          options: ["Verdadeiro", "Falso"],
          correct: 0
        }
      ]
    }
  ],

  blog: [
    {
      id: "blog1",
      title: "Por que você esquece o que lê (e como mudar isso)",
      summary: "Seu cérebro não foi feito para guardar tudo. Mas existem técnicas simples que mudam esse padrão — e você pode começar a usar hoje.",
      tag: "Retenção",
      readTime: "4 min",
      body: "Em 1885, o psicólogo Hermann Ebbinghaus descobriu algo que todo estudante deveria saber: sem revisão, esquecemos cerca de 70% do que lemos em apenas 24 horas. Esse fenômeno ficou conhecido como a Curva do Esquecimento. A boa notícia é que também é possível achatar essa curva — ou seja, reter muito mais com menos esforço.\n\nO segredo está no que chamamos de recuperação ativa. Ao invés de reler o mesmo texto passivamente, o cérebro retém bem mais quando é forçado a recuperar a informação por conta própria. É por isso que responder perguntas sobre o que acabou de ler é uma das estratégias mais eficazes que existem.\n\nEstudos em psicologia cognitiva mostram que quem responde questões logo após a leitura retém até 50% mais do conteúdo em comparação com quem simplesmente relê o texto. Esse efeito é chamado de efeito de teste, e ele funciona mesmo quando você erra as respostas — o erro em si já é parte do aprendizado.\n\nNo Retenza, cada sessão de treino termina com um quiz de compreensão. Não é por acaso: é a implementação direta desse princípio. Ler com atenção é uma habilidade. Reter com eficiência é outra. Treinamos as duas juntas."
    },
    {
      id: "blog2",
      title: "RSVP: o método que pode transformar sua velocidade de leitura",
      summary: "Leitura serial palavra por palavra. O que é, por que funciona e como usar essa técnica para estudar com mais ritmo e foco.",
      tag: "Velocidade",
      readTime: "5 min",
      body: "RSVP significa Rapid Serial Visual Presentation — ou apresentação visual serial rápida. O método exibe as palavras de um texto uma de cada vez, no mesmo ponto da tela, eliminando o movimento dos olhos de um lado para o outro.\n\nPor que isso importa? Porque grande parte do tempo que gastamos lendo não é lendo de fato — é movendo os olhos. Estudos de rastreamento ocular mostram que leitores médios fazem entre 4 e 5 fixações por linha, além de regressões frequentes (voltar os olhos para palavras já lidas). O RSVP elimina esses dois problemas de uma vez.\n\nSem precisar mover os olhos, o cérebro pode se concentrar 100% na decodificação do significado. O resultado é uma leitura mais fluida, com menos distração e mais ritmo. Para textos objetivos — como os de concursos e vestibulares — essa vantagem é significativa.\n\nA recomendação para iniciantes é começar em 200–250 palavras por minuto (PPM), que é próxima da velocidade de fala. Conforme o cérebro se adapta ao ritmo, aumentar gradualmente para 300–400 PPM já representa um ganho expressivo sem perda de compreensão.\n\nNo modo Leitura de Arranque do Retenza, você pode ajustar a velocidade em tempo real e treinar com textos temáticos de concurso e vestibular — o contexto certo para aplicar o que aprendeu."
    },
    {
      id: "blog3",
      title: "Leitura ativa: a diferença entre ler e realmente estudar",
      summary: "Passar os olhos pelo texto não é o mesmo que aprender. Entenda o que separa a leitura passiva da leitura que fica na memória.",
      tag: "Técnica",
      readTime: "5 min",
      body: "Existe uma diferença fundamental entre ler e estudar. Leitura passiva é quando você passa os olhos pelo texto sem um objetivo claro, absorvendo as palavras mas sem processar profundamente o significado. Leitura ativa é o oposto: você lê com intenção, fazendo perguntas, buscando conexões e avaliando o que entendeu.\n\nA leitura ativa não é mais lenta. É mais eficiente. Um leitor ativo que passa 20 minutos em um texto retém muito mais do que um leitor passivo que passou 40 minutos no mesmo material.\n\nAlgumas técnicas simples para ativar a leitura: antes de começar, formule uma pergunta sobre o que espera aprender. Durante a leitura, identifique a ideia central de cada parágrafo. Após terminar, tente resumir em uma ou duas frases o que acabou de ler sem olhar para o texto.\n\nEssa última técnica — resumir de memória — é especialmente poderosa para quem estuda para concursos e vestibulares, onde a interpretação de texto é uma competência avaliada diretamente. Não basta entender o que está escrito; é preciso saber o que o autor quis dizer, qual é a intenção do texto e quais conclusões se pode tirar a partir dele.\n\nO quiz de compreensão do Retenza foi pensado exatamente para isso: transformar cada sessão de treino em um exercício de leitura ativa, onde você é avaliado pelo que realmente compreendeu — não pelo que apenas leu."
    }
  ]
};
