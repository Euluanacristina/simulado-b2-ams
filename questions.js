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
    raw: "Questão 2. No processo de Engenharia de Requisitos, associe as etapas descrição dos requisitos, análise do problema, especificação dos requisitos e classificação dos requisitos à figura apresentada no material. Escolha uma: a. 1-6-4-3. b. 3-1-6-4. c. 6-3-4-1. d. 4-3-1-6. e. 3-1-4-6."
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
    answer: null,
    raw: "Questão 1. Faça a associação entre determinação dos requisitos, requisitos funcionais, requisitos não funcionais e requisitos suplementares com suas respectivas explicações."
  },
  {
    id: "3.2-2-5",
    unit: "3.2",
    answer: null,
    raw: "Questão 2. Sobre controle de mudanças de requisitos, assinale a alternativa correta sobre a atitude da equipe diante de uma necessidade de mudança no projeto."
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
    answer: null,
    raw: "Questão 1. Sobre Diagrama de Caso de Uso, preencha as lacunas com os elementos de modelagem adequados, como ator, caso de uso, associação, extend e generalização."
  },
  {
    id: "3.3-2-2",
    unit: "3.3",
    answer: null,
    raw: "Questão 2. Sobre modelagem de requisitos, julgue as afirmativas em verdadeiro ou falso e assinale a sequência correta."
  },
  {
    id: "3.3-3-3",
    unit: "3.3",
    answer: null,
    raw: "Questão 3. Sobre elicitação de requisitos, julgue as afirmativas em verdadeiro ou falso e assinale a sequência correta."
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
    raw: "Questão 3. Sobre a configuração básica da documentação da especificação de requisitos, associe os campos prioridade, data da última alteração, data de criação, identificador e versão."
  },
  {
    id: "3.3-1-7",
    unit: "3.3",
    answer: null,
    raw: "Questão 1. Em um diagrama de casos de uso de uma clínica veterinária, avalie as afirmativas sobre ator, casos de uso, relacionamento entre casos e uso de extend. Escolha a alternativa correta."
  },
  {
    id: "3.3-2-8",
    unit: "3.3",
    answer: null,
    raw: "Questão 2. Sobre validação de requisitos, avalie as afirmativas referentes a rastreabilidade, realismo, ambiguidade e consistência. Escolha a alternativa correta."
  },
  {
    id: "3.3-3-9",
    unit: "3.3",
    answer: null,
    raw: "Questão 3. Sobre Engenharia de Requisitos e Gerenciamento de Requisitos, avalie as afirmativas I a IV e escolha a alternativa correta."
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
    raw: "Questão 5. Sobre as atividades do processo de Elicitação de Requisitos, avalie as afirmativas I a IV e escolha a alternativa correta."
  },
  {
    id: "4.1-1-1",
    unit: "4.1",
    answer: null,
    raw: "Questão 1. Sobre paradigma orientado a objetos e UML, julgue as afirmativas em verdadeiro ou falso e assinale a sequência correta."
  },
  {
    id: "4.1-2-2",
    unit: "4.1",
    answer: null,
    raw: "Questão 2. Sobre reutilização na orientação a objetos, avalie as afirmativas I a IV e escolha a alternativa correta."
  },
  {
    id: "4.1-3-3",
    unit: "4.1",
    answer: null,
    raw: "Questão 3. Sobre herança na orientação a objetos, avalie as afirmativas I a IV e escolha a alternativa correta."
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
    answer: null,
    raw: "Questão 2. Sobre as disciplinas fundamentais e de suporte do Modelo de Processo Unificado, assinale a alternativa correta."
  },
  {
    id: "4.2-3-3",
    unit: "4.2",
    answer: null,
    raw: "Questão 3. Sobre ciclo de vida do produto e ciclo de vida de desenvolvimento de software, avalie as afirmativas I a IV e escolha a alternativa correta."
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
    answer: null,
    raw: "Questão 3. Associe as disciplinas fundamentais do fluxo de trabalho do Processo Unificado às suas características."
  },
  {
    id: "4.3-1-1",
    unit: "4.3",
    answer: "b",
    raw: "Questão 1. Sobre a estrutura de diagramas da UML 2.5.1, julgue as afirmativas e assinale a sequência correta. Escolha uma: a. F – F – F. b. F – F – V. c. V – V – V. d. F – V – F. e. V – V – F."
  },
  {
    id: "4.3-2-2",
    unit: "4.3",
    answer: null,
    raw: "Questão 2. Sobre diagramas UML estáticos e dinâmicos, associe diagrama de casos de uso, diagrama de classe e diagrama de sequência às descrições corretas."
  },
  {
    id: "4.3-3-3",
    unit: "4.3",
    answer: null,
    raw: "Questão 3. Sobre o Manifesto Ágil e seus princípios, analise as afirmativas I a III e escolha a alternativa correta."
  },
  {
    id: "4.3-1-4",
    unit: "4.3",
    answer: null,
    raw: "Questão 1. Sobre Extreme Programming (XP), complete as lacunas da sentença com a alternativa correta."
  },
  {
    id: "4.3-2-5",
    unit: "4.3",
    answer: null,
    raw: "Questão 2. Associe diagrama de caso de uso, diagrama de classe e diagrama de sequência às suas respectivas características."
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
    answer: null,
    raw: "Questão 1. Sobre Diagrama de Classes, agregação, composição, associação e generalização/especialização, avalie as afirmativas I a IV e escolha a alternativa correta."
  },
  {
    id: "4.3-2-8",
    unit: "4.3",
    answer: null,
    raw: "Questão 2. Sobre diagramas de estrutura e de comportamento da UML 2.5, avalie as afirmativas I a III e escolha a alternativa correta."
  },
  {
    id: "4.3-3-9",
    unit: "4.3",
    answer: null,
    raw: "Questão 3. Sobre o RUP e as fases Concepção, Elaboração, Construção e Transição, avalie as afirmativas I a IV e escolha a alternativa correta."
  },
  {
    id: "4.3-4-10",
    unit: "4.3",
    answer: null,
    raw: "Questão 4. Sobre Diagrama de Caso de Uso, avalie as afirmativas I a IV e escolha a alternativa correta."
  },
  {
    id: "4.3-5-11",
    unit: "4.3",
    answer: null,
    raw: "Questão 5. Sobre Artefato, Disciplina, Papel e Atividade no Processo Unificado, avalie as afirmativas I a IV e escolha a alternativa correta."
  }
];
