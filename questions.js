const questions = [
  {
    id: "3.1-1-1",
    unit: "3.1",
    answer: "a",
    raw: "Questão 1. Peter Drucker criou um método para avaliar se metas são específicas, mensuráveis, alcançáveis, relevantes e temporais. Como esse método é conhecido? Escolha uma: a. método SMART. b. método EMART. c. método KPI. d. método TRAME. e. método TRAMS."
  },
  {
    id: "3.1-2-2",
    unit: "3.1",
    answer: "a",
    raw: "Questão 2. Complete as lacunas sobre BPMS e BPMN: o ______ é mais estruturado e consegue integrar ______ workflows; o workflow torna-se uma ______ parte do BPMS, que é ______ para analisar processos ______. Escolha uma: a. BPMS / diversos / pequena / mais eficaz / interligados. b. BPMS / diversos / grande / menos eficaz / individualmente. c. BPMS / um único / pequena / menos eficaz / interligados. d. BPMN / um único / grande / mais eficaz / individualmente. e. BPMN / diversos / pequena / mais eficaz / interligados."
  },
  {
    id: "3.1-3-3",
    unit: "3.1",
    answer: "d",
    raw: "Questão 3. O processo de descrever todas as funcionalidades que um sistema deve possuir, garantindo que todos tenham a mesma compreensão escrita do problema, recebe qual nome? Escolha uma: a. Processamento de dados. b. Análise de sistemas. c. Engenharia de software. d. Engenharia de requisitos. e. Engenharia de sistemas."
  },
  {
    id: "3.1-1-4",
    unit: "3.1",
    answer: "e",
    raw: "Questão 1. Analisando os princípios e objetivos da Engenharia de Requisitos, como ela pode ser definida? Escolha uma: a. Metodologia que busca classes flexíveis para reuso de código. b. Representação de objetos e suas características funcionais. c. Criação de novas classes a partir de classes existentes. d. Junção de partes isoladas de um programa com informações ocultas. e. Processo de descrever todas as funcionalidades que um sistema deve possuir."
  },
  {
    id: "3.1-2-5",
    unit: "3.1",
    answer: "b",
    raw: "Questão 2. Associe as qualificações dos requisitos às descrições: I. Exatidão. II. Precisão. III. Completude. IV. Consistência. Descrições: 1. Não pode haver conflitos entre requisitos. 2. Reflete decisões acordadas entre as partes. 3. Possui uma única interpretação aceita por clientes e desenvolvedores. 4. Precisa ser um requisito do produto a ser desenvolvido. Escolha uma: a. I-3 / II-4 / III-1 / IV-2. b. I-4 / II-3 / III-2 / IV-1. c. I-2 / II-1 / III-4 / IV-3."
  },
  {
    id: "3.1-3-6",
    unit: "3.1",
    answer: "a",
    raw: "Questão 3. Os requisitos podem ser classificados como: Escolha uma: a. Requisitos de usuários e requisitos de sistema. b. Requisitos de hardware e requisitos de segurança. c. Requisitos não funcionais e requisitos de sistema. d. Requisitos lógicos e requisitos funcionais. e. Requisitos de desenvolvimento e requisitos de análise."
  },
  {
    id: "3.2-1-1",
    unit: "3.2",
    answer: "d",
    raw: "Questão 1. Sobre a classificação de requisitos em essencial, importante e desejável, analise: I. Requisito importante não pode faltar para o software ser implantado. II. Requisito essencial pode ficar para segundo plano. III. Requisito desejável não é imprescindível e pode até ser eliminado. O que está correto? Escolha uma: a. II, apenas. b. II e III, apenas. c. I e II, apenas. d. III, apenas. e. I, apenas."
  },
  {
    id: "3.2-2-2",
    unit: "3.2",
    answer: null,
    raw: "Questão 2. No processo de Engenharia de Requisitos, associe as etapas descrição dos requisitos, análise do problema, especificação dos requisitos e classificação dos requisitos à figura apresentada no material. Escolha uma: a. 1-6-4-3. b. 3-1-6-4. c. 6-3-4-1. d. 4-3-1-6. e. 3-1-4-6.",
    figure: "./assets/3.2-2-2.png"
  },
  {
    id: "3.2-3-3",
    unit: "3.2",
    answer: "d",
    raw: "Questão 3. Associe as qualificações dos requisitos: A. Exatidão. B. Completude. C. Priorização. D. Modificabilidade. E. Rastreabilidade. Descrições: 1. Refletir decisões acordadas. 2. Determinar antecedentes e implicações dos requisitos. 3. Ser requisito do produto. 4. Definir por importância, estabilidade e complexidade. 5. Permitir mudança fácil, completa e consistente. Escolha uma: a. A-3 / B-5 / C-2 / D-4 / E-1. b. A-1 / B-5 / C-2 / D-4 / E-3. c. A-2 / B-4 / C-1 / D-3 / E-5. d. A-3 / B-1 / C-4 / D-5 / E-2. e. A-3 / B-1 / C-5 / D-2 / E-4."
  },
  {
    id: "3.2-1-4",
    unit: "3.2",
    answer: "b",
    raw: "Questão 1. Quando do desenvolvimento de um software, os analistas responsáveis sabem que uma parte importantíssima é o levantamento, classificação e verificação de requisitos. Faça a associação entre as ações da Coluna A e suas explicações da Coluna B: I. Determinação dos requisitos. II. Requisitos funcionais. III. Requisitos não funcionais. IV. Requisitos suplementares. V. Documentação de requisitos. VI. Análise de requisitos. Descrições: 1. São lógicos ou tecnológicos, associados aos requisitos funcionais. 2. Os requisitos são caracterizados, podendo ser permanentes e transitórios, ou evidentes e ocultos, ou obrigatórios e desejados. 3. Lista extensa do que deve ser feito e do que não deve ser feito, sem muito aprofundamento. 4. Refere-se ao que o sistema deve fazer e sob quais condições. 5. Contém a descrição do que será executado pelo sistema, incluindo restrições lógicas e tecnológicas. 6. Referem-se ao sistema como um todo, sendo restrições lógicas ou tecnológicas. Escolha uma: a. I-4 / II-2 / III-6 / IV-1 / V-3 / VI-5. b. I-3 / II-5 / III-1 / IV-6 / V-4 / VI-2. c. I-2 / II-5 / III-1 / IV-3 / V-4 / VI-6. d. I-1 / II-4 / III-6 / IV-2 / V-3 / VI-5. e. I-3 / II-1 / III-5 / IV-4 / V-2 / VI-6."
  },
  {
    id: "3.2-2-5",
    unit: "3.2",
    answer: "e",
    raw: "Questão 2. Sobre controle de mudanças de requisitos, assinale a alternativa correta sobre a atitude da equipe diante de uma necessidade de mudança no projeto. Escolha uma: a. Quando o impacto for pequeno, a implementação da mudança pode ser feita informalmente. b. Mudanças de escopo e requisitos são mais aceitas em contratos de orçamento aberto, cabendo qualquer alteração. c. Cabe apenas ao responsável técnico decidir se deve contatar os responsáveis pelo sistema legado. d. A equipe deve evitar ao máximo implementar mudanças para não impactar tempo e custo. e. Toda necessidade de mudança em requisito deve ser analisada quanto à viabilidade e impactos, com membros do projeto e stakeholders cientes e concordantes, além de atualização dos documentos."
  },
  {
    id: "3.2-3-6",
    unit: "3.2",
    answer: "e",
    raw: "Questão 3. Sobre validação de requisitos, analise: I. Requisitos devem ser consistentes. II. Rastreabilidade exige origem clara. III. A validação identifica inconsistências, ambiguidades e duplicidades. IV. A validação atrasa a entrega e gera retrabalho. Escolha uma: a. I e III, apenas. b. I e II, apenas. c. I, II, III e IV. d. I, III e IV, apenas. e. I, II e III, apenas."
  },
  {
    id: "3.3-1-1",
    unit: "3.3",
    answer: "a",
    raw: "Questão 1. Sobre Diagrama de Caso de Uso, preencha as lacunas com os elementos de modelagem adequados. O ator está no papel de usuário ou outro sistema que interage com o sistema em desenvolvimento, ou seja, é uma posição ________ ao desenvolvimento. O ________ é um conjunto de ações que o sistema executará, representado por uma elipse. A associação liga um ________ ao caso de uso. Os relacionamentos entre casos de uso são include e ________. A ________ ilustra a necessidade de sobreposição de papéis entre atores. Escolha uma: a. externa / caso de uso / ator / extend / generalização. b. externa / plano / ator / extend / generalização. c. externa / caso de uso / requisito / exclude / justaposição. d. interna / caso de uso / requisito / exclude / justaposição. e. interna / plano / ator / extend / generalização.",
    figure: "./assets/3.3-1-1.png"
  },
  {
    id: "3.3-2-2",
    unit: "3.3",
    answer: "b",
    raw: "Questão 2. Sobre modelagem de requisitos, julgue as afirmativas em verdadeiro ou falso e assinale a sequência correta. I. Separar requisitos funcionais dos não funcionais e realizar agrupamentos são atividades desnecessárias. II. Requisitos funcionais com prioridade essencial garantem o funcionamento do sistema. III. As linguagens SysML e UML podem ser utilizadas como técnicas de modelagem de requisitos. IV. A modelagem de requisitos não acrescenta detalhamento em comparação ao início do projeto. Escolha uma: a. F – F – V – V. b. F – V – V – F. c. V – V – F – F. d. V – V – V – F. e. F – V – F – V."
  },
  {
    id: "3.3-3-3",
    unit: "3.3",
    answer: "d",
    raw: "Questão 3. Sobre elicitação de requisitos, julgue as afirmativas em verdadeiro ou falso e assinale a sequência correta. I. A elicitação de requisitos deve acontecer no início do projeto para compreender objetivos e restrições. II. Uma elicitação bem feita aumenta a chance de sucesso do projeto e a satisfação do cliente. III. A elicitação pode ser difícil por envolver stakeholders internos e externos que precisam dedicar tempo ao levantamento. IV. O estudo etnográfico pode ser útil, mas não é considerado uma abordagem completa para esse fim. Escolha uma: a. V – F – V – F. b. F – V – V – F. c. F – F – V – V. d. V – V – V – V. e. V – V – F – F."
  },
  {
    id: "3.3-1-4",
    unit: "3.3",
    answer: "c",
    raw: "Questão 1. A técnica REMO é usada na fase de elicitação de requisitos para integrar a modelagem de processos de negócios com BPMN. Analise: I. A primeira fase foca no entendimento do contexto. II. A segunda fase elabora documento de entendimento do domínio. III. Problemas, necessidades, papéis e recursos são informações opcionais. IV. A segunda fase se concentra na extração e descrição dos requisitos. Escolha uma: a. III e IV, apenas. b. II, apenas. c. I e IV, apenas. d. III, apenas. e. I e II, apenas."
  },
  {
    id: "3.3-2-5",
    unit: "3.3",
    answer: null,
    raw: "Questão 2. Os objetivos do modelo de requisitos incluem descrever o que o cliente solicitou, estabelecer base para o projeto de software e produzir requisitos validáveis na entrega. Organize-os na ordem correta. Escolha uma: a. 2-1-3. b. 1-3-2. c. 1-2-3. d. 2-3-1. e. 3-1-2."
  },
  {
    id: "3.3-3-6",
    unit: "3.3",
    answer: null,
    raw: "Questão 3. Sobre a configuração básica da documentação da especificação de requisitos, associe os campos prioridade, data da última alteração, data de criação, identificador e versão. Escolha uma: a. 4-1-5-3-2. b. 1-5-3-4-2. c. 3-2-1-4-5. d. 2-1-5-4-3. e. 5-3-2-1-4.",
    note: "Gabarito não identificado com segurança no PDF, mas as alternativas foram recuperadas.",
    figure: "./assets/3.3-3-6.png"
  },
  {
    id: "3.3-1-7",
    unit: "3.3",
    answer: "d",
    raw: "Questão 1. Em um diagrama de casos de uso de uma clínica veterinária, avalie as afirmativas sobre ator, casos de uso, relacionamento entre casos e uso de extend. I. Um ator pode fornecer informações, receber informações ou ambas. II. Casos de uso descrevem funcionalidades do sistema e são transações executadas nele. III. Cada caso de uso pode interagir com um ou mais atores e com outros casos de uso. IV. A seta extend é usada para mostrar comportamento opcional compartilhado entre casos de uso. Escolha uma: a. II e III, apenas. b. I e II, apenas. c. II, III e IV, apenas. d. I, II, III e IV. e. I, III e IV, apenas.",
    figure: "./assets/3.3-1-7.png"
  },
  {
    id: "3.3-2-8",
    unit: "3.3",
    answer: "e",
    raw: "Questão 2. Sobre validação de requisitos, avalie as afirmativas referentes a rastreabilidade, realismo, ambiguidade e consistência. I. A rastreabilidade permite saber se o requisito tem origem clara e bem definida. II. O realismo verifica se a tecnologia utilizada pode atender às demandas do sistema projetado. III. A ambiguidade visa garantir que um requisito não entre em conflito com outro requisito. IV. A consistência faz com que o requisito não possua mais de uma interpretação. Escolha uma: a. I, II, III e IV. b. II e III, apenas. c. I, III e IV, apenas. d. II, III e IV, apenas. e. I e II, apenas."
  },
  {
    id: "3.3-3-9",
    unit: "3.3",
    answer: "c",
    raw: "Questão 3. Sobre Engenharia de Requisitos e Gerenciamento de Requisitos, avalie as afirmativas. I. Stakeholders devem participar da elicitação para ajudar a identificar requisitos contraditórios. II. Os requisitos descrevem fluxo de informação, transformação de dados e também restrições de comportamento e desempenho. III. O gerenciamento de requisitos envolve localização, documentação, organização, rastreamento e controle de mudanças. IV. Requisitos funcionais com prioridade desejável são indispensáveis para o software funcionar. Escolha uma: a. II e III, apenas. b. I, III e IV, apenas. c. I, II e III, apenas. d. I, II, III e IV. e. II, III e IV, apenas."
  },
  {
    id: "3.3-4-10",
    unit: "3.3",
    answer: "c",
    raw: "Questão 4. Sobre a documentação da Especificação de Requisitos, assinale a alternativa correta. Escolha uma: a. Deve ter um nome único bem detalhado e não repetido. b. Precisa estar em linguagem técnica por ser a principal comunicação entre programador e analista. c. Deve especificar com detalhes os passos das funcionalidades e das restrições do requisito. d. Deve seguir as normas da ABNT determinando o que será especificado. e. Outro."
  },
  {
    id: "3.3-5-11",
    unit: "3.3",
    answer: null,
    raw: "Questão 5. Sobre as atividades do processo de Elicitação de Requisitos, avalie as afirmativas I a IV e escolha a alternativa correta. I. A pesquisa de requisitos envolve observação da rotina dos processos e de outros softwares utilizados. II. A entrevista com stakeholders costuma ser guiada por questionário para levantar necessidades do sistema. III. Reuniões podem usar brainstorming para descobrir requisitos ainda não determinados e resolver conflitos. IV. Coleta de documentos como relatórios, planilhas e cadernos pode ajudar na clareza das funcionalidades. Escolha uma: a. I, III e IV, apenas. b. II, III e IV, apenas. c. I, II, III e IV. d. I, II e III, apenas. e. I, II e IV, apenas.",
    note: "Gabarito não identificado com segurança no PDF, mas as alternativas foram recuperadas."
  },
  {
    id: "4.1-1-1",
    unit: "4.1",
    answer: null,
    raw: "Questão 1. Sobre paradigma orientado a objetos e UML, julgue as afirmativas em verdadeiro ou falso e assinale a sequência correta. I. A modelagem orientada a objetos começa pela abstração. II. A classe é a representação da abstração, definindo características e ações do objeto. III. Um objeto é parte integrante de uma classe, após a abstração. IV. Toda ação ou comportamento de uma classe é denominado propriedade da classe. Escolha uma: a. F – V – F – V. b. V – V – F – F. c. F – V – V – F. d. V – V – V – F. e. V – F – F – V.",
    note: "Gabarito não identificado com segurança no PDF, mas as alternativas foram recuperadas."
  },
  {
    id: "4.1-2-2",
    unit: "4.1",
    answer: null,
    raw: "Questão 2. Sobre reutilização na orientação a objetos, avalie as afirmativas I a IV e escolha a alternativa correta. I. Os custos de desenvolvimento podem ser reduzidos com reutilização de classes já criadas. II. É necessário pessoal capacitado em abstração orientada a objetos para análise e desenvolvimento. III. Na orientação a objetos é necessária atenção à documentação para auxílio e controle no processo de análise e desenvolvimento. IV. A UML é uma ferramenta para ajudar na modelagem orientada a objetos. Escolha uma: a. I, II e III, apenas. b. II e IV, apenas. c. I e II, apenas. d. III e IV, apenas. e. I, II, III e IV.",
    note: "Gabarito não identificado com segurança no PDF, mas as alternativas foram recuperadas."
  },
  {
    id: "4.1-3-3",
    unit: "4.1",
    answer: null,
    raw: "Questão 3. Sobre herança na orientação a objetos, avalie as afirmativas I a IV e escolha a alternativa correta. I. Em uma estrutura de herança não é recomendado usar encapsulamento. II. A classe genérica é chamada de superclasse e a que herda suas características é a subclasse. III. A superclasse herda as características das subclasses. IV. Uma subclasse deve possuir atributos e métodos específicos que pertençam a ela. Escolha uma: a. I, II e III, apenas. b. III e IV, apenas. c. I, II, III e IV. d. II e IV, apenas. e. I e II, apenas.",
    note: "Gabarito não identificado com segurança no PDF, mas as alternativas foram recuperadas."
  },
  {
    id: "4.1-1-4",
    unit: "4.1",
    answer: "c",
    raw: "Questão 1. Complete as lacunas sobre orientação a objetos: a representação da abstração, as características técnicas e as ações dos objetos são, respectivamente: Escolha uma: a. classe / subclasse / métodos. b. heranças / atributos / métodos. c. classe / atributos / métodos. d. heranças / subclasses / abstração. e. subclasse / atributos / heranças."
  },
  {
    id: "4.1-2-5",
    unit: "4.1",
    answer: "d",
    raw: "Questão 2. A ideia central do paradigma orientado a objetos é a abstração. Complete as lacunas corretamente. Escolha uma: a. classe / um objeto / abstração. b. abstração / um objeto / classe. c. abstração / um atributo / abstração. d. abstração / um objeto / abstração. e. classe / um atributo / classe."
  },
  {
    id: "4.1-3-6",
    unit: "4.1",
    answer: "a",
    raw: "Questão 3. Associe herança, encapsulamento e polimorfismo às respectivas definições. Escolha uma: a. I-3 / II-1 / III-2. b. I-1 / II-3 / III-2. c. I-1 / II-2 / III-3. d. I-3 / II-2 / III-1. e. I-2 / II-3 / III-1."
  },
  {
    id: "4.2-1-1",
    unit: "4.2",
    answer: "d",
    raw: "Questão 1. Sobre o Processo Unificado, julgue as afirmativas em verdadeiro ou falso e assinale a sequência correta. Escolha uma: a. F – V – V – V. b. V – V – F – F. c. V – F – F – V. d. V – V – F – V. e. V – V – V – F."
  },
  {
    id: "4.2-2-2",
    unit: "4.2",
    answer: "e",
    raw: "Questão 2. Sobre as disciplinas fundamentais e de suporte do Modelo de Processo Unificado, assinale a alternativa correta. Escolha uma: a. A implantação modela o produto com diagramas da UML. b. Requisitos identificam atores e estabelecem prazos e princípios técnicos da implementação. c. A modelagem de negócio documenta os requisitos analisados para entender como devem apoiar os processos associados. d. Na implementação é realizada toda a especificação dos requisitos do software. e. Na análise é enfatizada a investigação do problema e dos requisitos; no projeto há ênfase na solução conceitual, criando modelos para satisfazer os requisitos do software."
  },
  {
    id: "4.2-3-3",
    unit: "4.2",
    answer: "e",
    raw: "Questão 3. Sobre ciclo de vida do produto e ciclo de vida de desenvolvimento de software, avalie as afirmativas I a IV e escolha a alternativa correta. I. O Processo Unificado aperfeiçoou modelos incrementais e iterativos, eliminando algumas desvantagens. II. O Processo Unificado surgiu depois da UML, que se originou dos métodos Booch, OMT e OOSE. III. O Processo Unificado é adaptativo, baseado em construção iterativa e incremental. IV. O Processo Unificado é de uso privado e não contempla disciplinas presentes no RUP. Escolha uma: a. I, II e IV, apenas. b. I e II, apenas. c. II, III e IV, apenas. d. I, II, III e IV. e. I, II e III, apenas."
  },
  {
    id: "4.2-1-4",
    unit: "4.2",
    answer: "d",
    raw: "Questão 1. Associe as fases Concepção, Elaboração, Construção e Transição do Processo Unificado às suas descrições. Escolha uma: a. I-4 / II-1 / III-2 / IV-3. b. I-1 / II-3 / III-2 / IV-4. c. I-2 / II-1 / III-4 / IV-3. d. I-4 / II-3 / III-2 / IV-1. e. I-3 / II-4 / III-1 / IV-2."
  },
  {
    id: "4.2-2-5",
    unit: "4.2",
    answer: "e",
    raw: "Questão 2. O ciclo de vida do produto consiste em quais quatro fases? Escolha uma: a. análises, desenvolvimentos, versões e encerramento. b. concepção, crescimento, análises e declínio. c. crescimento, maturidade, segurança e encerramento. d. análises, algoritmos, desenvolvimento e versões. e. concepção, crescimento, maturidade e declínio."
  },
  {
    id: "4.2-3-6",
    unit: "4.2",
    answer: "d",
    raw: "Questão 3. Associe as disciplinas fundamentais do fluxo de trabalho do Processo Unificado às suas características. Coluna A: I. Modelagem de negócio. II. Requisitos. III. Implementação. IV. Implantação. Coluna B: 1. Descreve o que o sistema deve fazer com base em casos de uso e identifica atores. 2. Entrega o produto aos usuários, com aceitação formal, distribuição, instalação e migração. 3. Documenta os objetivos do empreendimento e como ele deve apoiar os processos associados. 4. Tem foco na construção do software, desenvolvimento do código e preparação dos primeiros testes. Escolha uma: a. I-1 / II-3 / III-4 / IV-2. b. I-3 / II-1 / III-2 / IV-4. c. I-3 / II-4 / III-1 / IV-2. d. I-3 / II-1 / III-4 / IV-2. e. I-1 / II-3 / III-2 / IV-4."
  },
  {
    id: "4.3-1-1",
    unit: "4.3",
    answer: "b",
    raw: "Questão 1. Sobre a estrutura de diagramas da UML 2.5.1, julgue as afirmativas e assinale a sequência correta. Escolha uma: a. F – F – F. b. F – F – V. c. V – V – V. d. F – V – F. e. V – V – F.",
    figure: "./assets/4.3-1-1.png"
  },
  {
    id: "4.3-2-2",
    unit: "4.3",
    answer: null,
    raw: "Questão 2. Sobre diagramas UML estáticos e dinâmicos, associe diagrama de casos de uso, diagrama de classe e diagrama de sequência às descrições corretas. Escolha uma: a. I-1 / II-3 / III-2. b. I-2 / II-3 / III-1. c. I-3 / II-2 / III-1. d. I-2 / II-1 / III-3. e. I-1 / II-2 / III-3.",
    note: "As descrições da tabela no PDF ficaram truncadas, mas as alternativas foram recuperadas."
  },
  {
    id: "4.3-3-3",
    unit: "4.3",
    answer: "e",
    raw: "Questão 3. Sobre o Manifesto Ágil e seus princípios, analise as afirmativas. I. O envolvimento do cliente é princípio fundamental, incluindo fornecimento e priorização de requisitos e avaliação das iterações. II. O software é desenvolvido em incrementos e o cliente especifica os requisitos de cada incremento. III. Uma vez definidos, os requisitos não podem mais ser modificados. IV. As habilidades da equipe devem ser reconhecidas e exploradas, permitindo que desenvolvam suas próprias formas de trabalho. Escolha uma: a. I, II, III e IV. b. I e II, apenas. c. I, II e III, apenas. d. I e III, apenas. e. I, II e IV, apenas."
  },
  {
    id: "4.3-1-4",
    unit: "4.3",
    answer: "c",
    raw: "Questão 1. Sobre Extreme Programming (XP), complete as lacunas da sentença com a alternativa correta. O método XP exige uma abordagem extrema para o processo iterativo. O ________ é parte do processo, é adaptável a mudanças, busca a simplicidade do software e seu foco é ________. Uma característica interessante desse método é que o desenvolvimento do código ________. Escolha uma: a. envolvimento do cliente / no valor do negócio / é feito separadamente. b. envolvimento do cliente / no valor do sistema / é feito aos pares. c. envolvimento do cliente / no valor do negócio / é feito aos pares. d. isolamento do cliente / no valor do sistema / é feito separadamente. e. isolamento do cliente / no valor do negócio / é feito aos pares."
  },
  {
    id: "4.3-2-5",
    unit: "4.3",
    answer: "d",
    raw: "Questão 2. Associe os diagramas às suas respectivas características. I. Diagrama de Caso de Uso. II. Diagrama de Classe. III. Diagrama de Sequência. IV. Diagrama de Atividade. Descrições: 1. Fornece visão geral dos objetivos que os usuários desejam alcançar utilizando o sistema. 2. Descreve os passos para a execução de uma atividade, podendo representar atividades em paralelo. 3. Define a estrutura das classes utilizadas pelo sistema, com atributos, métodos e relacionamentos. 4. Mostra a interação entre participantes do cenário ao longo do tempo. Escolha uma: a. I-1 / II-3 / III-2 / IV-4. b. I-1 / II-4 / III-3 / IV-2. c. I-3 / II-1 / III-4 / IV-2. d. I-1 / II-3 / III-4 / IV-2. e. I-3 / II-1 / III-2 / IV-4."
  },
  {
    id: "4.3-3-6",
    unit: "4.3",
    answer: "a",
    raw: "Questão 3. As três transições internas de estado no Diagrama de Máquina de Estados são: Escolha uma: a. entry, do e exit. b. entry, while e do. c. begin, while e exit. d. while, do e exit. e. while, do e end."
  },
  {
    id: "4.3-1-7",
    unit: "4.3",
    answer: "c",
    raw: "Questão 1. Sobre Diagrama de Classes, agregação, composição, associação e generalização/especialização, avalie as afirmativas. I. Agregação é uma associação específica em que a classe filha pode existir independentemente da classe pai. II. Composição é uma associação específica em que, se o objeto da classe pai é destruído, o objeto filho associado deixa de fazer sentido. III. Associação é o relacionamento mais comum e indica uma relação genérica entre classes. IV. Generalização/especialização indica que a classe filha herda características da classe pai. Escolha uma: a. I, II e III, apenas. b. I e II, apenas. c. I, II, III e IV. d. II, III e IV, apenas. e. I, II e IV, apenas."
  },
  {
    id: "4.3-2-8",
    unit: "4.3",
    answer: "d",
    raw: "Questão 2. Sobre diagramas de estrutura e de comportamento da UML 2.5, avalie as afirmativas. I. Diagramas de estrutura representam aspectos estáticos do sistema por meio de objetos, relações e atributos. II. Diagramas estruturais incluem diagrama de caso de uso, diagrama de sequência e diagrama de atividade. III. Diagramas de comportamento incluem diagramas de classe, objetos, componentes, implantação, pacotes e estruturas compostas. IV. Diagramas de comportamento representam aspectos dinâmicos do sistema e mudanças ao longo do tempo. Escolha uma: a. I, II, III e IV. b. I, II e IV, apenas. c. I, II e III, apenas. d. I e IV, apenas. e. II, III e IV, apenas."
  },
  {
    id: "4.3-3-9",
    unit: "4.3",
    answer: "c",
    raw: "Questão 3. Sobre o RUP e as fases Concepção, Elaboração, Construção e Transição, avalie as afirmativas. I. Na Concepção são definidos visão geral, escopo e requisitos iniciais do sistema. II. A Transição é uma visão mais refinada dos requisitos e da arquitetura, com análise de riscos e estimativas. III. A Construção é o momento de desenvolvimento do sistema e preparação para implantação. IV. A Elaboração é a fase de implantação do sistema, ou seja, a entrega. Escolha uma: a. I, II e III, apenas. b. I, II e IV, apenas. c. I e III, apenas. d. I, II, III e IV. e. II e IV, apenas."
  },
  {
    id: "4.3-4-10",
    unit: "4.3",
    answer: "e",
    raw: "Questão 4. Sobre Diagrama de Caso de Uso, avalie as afirmativas. I. O diagrama de caso de uso pode guiar o desenvolvimento do projeto, inclusive implementação e testes. II. No diagrama, o boneco representa o processo e a elipse representa a relação entre processos. III. Os principais elementos do diagrama são ator, caso de uso e relacionamento. IV. Um ator sistêmico pode ser um software, sistema completo, módulo ou componente que interage com a funcionalidade especificada pelo caso de uso. Escolha uma: a. I e II, apenas. b. I, II e III, apenas. c. I, II, III e IV. d. II, III e IV, apenas. e. I, III e IV, apenas.",
    figure: "./assets/4.3-4-10.png"
  },
  {
    id: "4.3-5-11",
    unit: "4.3",
    answer: "c",
    raw: "Questão 5. Sobre Artefato, Disciplina, Papel e Atividade no Processo Unificado, avalie as afirmativas. I. Artefato é qualquer produto de trabalho, como código, banco de dados, diagramas ou modelos. II. Disciplina é a sequência de diagramas gerados na modelagem. III. Papel é a identificação das responsabilidades de cada indivíduo no processo. IV. Atividade é a tarefa executada pelo worker para produzir ou alterar um artefato. Escolha uma: a. I e II, apenas. b. I, II e III, apenas. c. I, III e IV, apenas. d. I, II e IV, apenas. e. I, II, III e IV."
  }
];
