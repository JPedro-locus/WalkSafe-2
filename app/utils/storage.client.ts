// app/utils/storage.client.ts

// Define interfaces
export interface Comment {
  author: string;
  text: string;
}

export interface Occurrence {
  id: string;
  local: string;
  data: string;       // YYYY-MM-DD
  crime: string;
  descricao: string;
  hasBo: boolean;
  numeroBo?: string;
  comments: Comment[];
}

const OCCURRENCES_KEY = "walksafe_ocorrencias";

/* ========= Reddit RAW payload (resumido para exemplo) ========= */
/* Cole aqui os dados que você trouxe (JSON "ocorrencias": [ ... ]) */
const REDDIT_RAW = {
  ocorrencias: [
    {
      "local": "Boa Viagem",
      "tipo": "Roubo",
      "data": "4 meses atrás",
      "titulo": "Roubo em BV",
      "descricao": "[Post do Reddit] Galera, o que anda acontecendo em Boa viagem? Ontem presenciei um roubo na areia da praia, uma XRE 190 vermelha simplesmente entrou na praia e roubou um grupo que estava reunido, as meninas ficaram apavoradas.",
      "BO_n": null,
      "autor": "Illustrious_Time9188",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Sabe dizer em qual trecho da praia isso aconteceu?"
        },
        {
          "autor": "Illustrious_Time9188",
          "data": "4 meses atrás",
          "comentario": "Primeiro parquinho depois da padaria Boa Viagem."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Tenho a sensação que a segurança do bairro piorou nos últimos anos."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "E a tendência é piorar."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Ouvi algumas vezes que estava tendo bastante assaltos, mas imaginava na orla e não na areia da praia, doideira."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Sinceramente, normal... infelizmente. Você tem que estar ligado aos seus arredores a todo momento, só de ver que você está atento, os possíveis meliantes desistem em boa parte das vezes."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Caramba. Loucura viu…"
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Misericórdia, então tá sério o caso."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Hoje furtaram uma colega do vôlei aqui em BV :/"
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Na Uninassau de BV já teve assalto até a mão armada esses dias."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Meu amigo, eu fui roubado por 3 indivíduos na praia de Boa Viagem. Botaram arma em mim e tudo, me revistaram inteiro e foram embora como se não tivesse acontecido nada."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "É disso para pior em Boa Viagem. Nada novo sob o sol de Recife."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Foi de que horas? Na rua que moro, teve dois roubos de carro em plena luz do dia. Tá assustador."
        }
      ]
    },
    {
      "local": "Próximidades do Shopping Recife",
      "tipo": "Tentativa de assalto / abordagem por vendedores",
      "data": "1 ano atrás",
      "titulo": "Novamente os vendedores de pano",
      "descricao": "[Post do Reddit] Vi um post aqui há algumas semanas falando sobre algumas tentativas de assalto envolvendo vendedores de pano. Pois bem, passei pela mesma situação 2 vezes nas proximidades do Shopping Recife. Não quero generalizar e dizer que isso é uma atitude por parte de todos os vendedores, até porque vários vendem por aqui e fazem disso um meio de vida. Porém, esses geralmente vêm em um grupo de 3 e vivem atormentando quem passa. Na primeira ocorrência, a rua estava deserta e os três saíram de trás de alguns carros parados. Já na segunda, um deles me viu de longe e começou a seguir. Mandei a situação pra algumas páginas daqui de Recife, mas ninguém divulgou nada. Pelo que ouvi de outras pessoas, a situação se arrasta desde o ano passado, então não sei o que esperar da segurança daqui.",
      "BO_n": null,
      "autor": "[deleted]",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Já os vi no estacionamento do shopping!!"
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Obrigado por avisar!"
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "O que me deixa preocupado é que a área daqui é cercada de escolas, fora a quantidade enorme de idosos que frequentam as academias das proximidades. Mesmo assim, já presenciei ameaças aos dois grupos, principalmente nos horários em que as ruas ficam desertas. Me impressiono com a falha da segurança pública nesse sentido."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Tem muitos desses no Carrefour da zona norte, incrível como o estereótipo é sempre o mesmo: malokero de seaway. Se você não compra te olham de cara feia e ficam encarando, isso pq sou um cara relativamente forte, imagino o que esses magrelos não fazem com gente que não se impõe."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Outro dia tava comprando comida num quiosque aí um me abordou pedindo, é toda hora tentando entrar na tua cabeça. A melhor estratégia é ser curto e grosso e não encarar, mete um NÃO e nem olha no olho, passa reto andando rápido. Aí corta logo a graça desses caras"
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Perto do Parque da Jaqueira tem um ninho deles, são muitos. Sempre ignorei, fazendo justamente o que tu falou."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Notei pelos comentários que os que estão na ZN só são insistentes. Os da ZS estão assaltando/furtando mesmo. Cuidado!"
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Na realidade, pelo que conversei com as pessoas do bairro, a presença desse pessoal se faz desde o ano passado através de assaltos. A “venda” dos panos é só uma história que inventaram pra permanecer por aqui. Infelizmente, uma parte das pessoas não percebe isso e a segurança pública não cumpre seu papel."
        }
      ]
    },
    {
      "local": "Boa Vista",
      "tipo": "Roubo / assalto",
      "data": "1 ano atrás",
      "titulo": "Fui assaltado",
      "descricao": "[Post do Reddit] Rapaziada parece mentira, mais hoje fui assaltado! O cara roubou meu celular e foi embora depois de uns 2 minutos ele volta e devolve meu celular, até agora não entendi. Meu celular é um moto g20",
      "BO_n": null,
      "autor": "SpecificBluebird759",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Cara, eu super acredito em você. Eu já fui assaltado naquela primeira parada do Boa Vista perto do posto, num sábado à noite, até hoje fico incrédulo que ele me deu a passagem pra voltar pra casa e ainda me colocou no ônibus, foi no errado? Foi, mas colocou kkkk."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Estava com minha namorada na época, voltando do shopping Recife. Descemos do ônibus na altura do viaduto da caxangá. Não demos nem 5 passos e fomos abordados por um meliante."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Ele roubou meu Gradiente flip. Quando minha namorada deu o Nokia tijolo dela, ele pegou, olhou... devolveu e disse: precisa não"
        }
      ]
    },
    {
      "local": "Centro (Martins de Barros perto do Cais e Fórum)",
      "tipo": "Assalto",
      "data": "4 meses atrás",
      "titulo": "Fui assaltado",
      "descricao": "[Post do Reddit] Fui assaltado pela primeira vez em 22 anos em recife, sensação de merda ainda mais pq minha boysinha tava do lado tbm perder celular pra um noiado trocar por crack.",
      "BO_n": null,
      "autor": "Hasve",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "A sensação é realmente muito mais difícil quando acontece com a mulher do lado. Há uns 10 anos também passei por isso, o cara apontou uma faca logo para minha mulher, o sentimento de impotência é gigante."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Eu sempre andei muito a pé, tarde da noite. Tenho o porte meio intimidador. Mas com minha noiva, na época namorada, fomos assaltados duas vezes, uma delas exatamente como você falou. Sozinho tenho certeza que eu tinha tentado dar um sacode naquele noiado, mas pensei na minha namorada e só entregamos os celulares."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Ser assaltado em Recife é igual a consórcio, um dia você é contemplado. Sinto muito pelo ocorrido."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Agradece que não tenha sido pior. Já fui assaltado por três homens bem maiores que eu e estava com minha mina no dia. Foi tenso , eu reagi na hora e por sorte não aconteceu o pior, recuperei os documentos e coisas sem importância, mas depois fiquei pensando no que poderia ter acontecido."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "O foda é o cara fazer isso na frente de um fórum e sem PM nenhum."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Infelizmente tem que andar em estado de alerta 200%."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "A primeira (e única) vez que fui assaltado, eu estava com minha namorada na época. Saltamos do ônibus nas imediações do viaduto da Caxangá, vindo do Shopping. Depois de uns 5 passos um elemento nos aborda e leva meu dinheiro (deveria ter uns 50 reais na carteira) e meu celular (um Gradiente flip)."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Eu acho que esses desgraçados escolhem casal mesmo, pois o cara pensa na vida da mulher na hora de cogitar reagir."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Eu, minha mulher e uma amiga fomos assaltados um pouco depois daí (praça do diário). Mês passado e fiquei sabendo que teve um na ponte do paço alfândega, duas semanas depois que o mlk foi esfaqueado e desmaiou às 8h da manhã indo pro trabalho. Perderam o freio legal, essa parte da cidade está totalmente largada aos bandidos."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Ontem teve 3 assaltos, contando o meu ali no centro. No primeiro, um cara marretou o noiado e no segundo, foi esfaqueado. Eu ainda pensei em fazer algo quando o cara virou, mas não vale a pena por causa de um celular."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Falou em noiado é centro tlgd. Lugar mais perigoso da cidade."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Acho q já fui assaltado pra mais de 10x, rua de casa, caminho de escola, praça, caminho de trabalho. Não me sinto seguro em canto nenhum."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 meses atrás",
          "comentario": "Dia desses eu fui assaltado com minha mulé (umas 3 da matina), era um líder com uma faca e dois caras extremamente chapados. Aí eles revistaram ela de leve e passaram mais tempo me revistando.\nDetalhe: Só levou meu celular véio com a tela trincada. A coisa boa foi que eu tava com o celular e um livro, pedi pra eles deixarem o livro dizendo que precisava pra estudar, o líder mandou eles me entregarem o livro de volta. De repente eles eram patrocinados pelo CNPQ e a CAPES?"
        }
      ]
    },
    {
      "local": "UFPE",
      "tipo": "Estupro, assaltos, armas e arrastão",
      "data": "10 anos atrás",
      "titulo": "Estupro, assaltos, armas e arrastão assustam estudantes da UFPE",
      "descricao": "[Post do Reddit] Notícia do G1 sobre arrastão e assaltos recorrentes na UFPE, gerando sensação de insegurança para estudantes.",
      "BO_n": null,
      "autor": "mrbewulf",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "10 anos atrás",
          "comentario": "Infelizmente parece que a UFPE sempre continua escura e burocrática como sempre. Ainda assim há alunos que não querem a polícia no campus."
        },
        {
          "autor": "Usuário anônimo",
          "data": "10 anos atrás",
          "comentario": "Isso já é recorrente. No grupo dos estudantes da UFPE, li que ontem mesmo dois meliantes fizeram um 'mini-arrastão' na parada de ônibus que fica perto do Departamento de Odontologia."
        },
        {
          "autor": "Usuário anônimo",
          "data": "10 anos atrás",
          "comentario": "Lamentável, e são quase sempre os mesmos. Essa insegurança, somada a impunidade, estão me fazendo desistir de tentar fazer o doutorado na UFPE :/"
        }
      ]
    },
    {
      "local": "Boa Viagem",
      "tipo": "Roubo, perseguição e tiroteio",
      "data": "1 ano atrás",
      "titulo": "E esse assalto que teve hoje em boa viagem?",
      "descricao": "[Post do Reddit] Deu em perseguição, tiroteio e tudo.",
      "BO_n": null,
      "autor": "llohallo",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Foi agora há pouco? Não vi nada a respeito."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Dá os detalhes rapá."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Foi uma perseguição a um roubo de carro que começou no Cordeiro e terminou em BV."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Fosse em dia de semana normal, tinham nem chegado no Cabanga antes de parar no engarrafamento kkkkk"
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Pela quantidade de policial, roubaram o carro do delegado."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Só mais um dia normal em GTA."
        }
      ]
    },
    {
      "local": "Caxangá",
      "tipo": "Assalto",
      "data": "4 dias atrás",
      "titulo": "Fui assaltado na Caxangá",
      "descricao": "[Post do Reddit] Tava voltando do trabalho ali perto do Petrocal do Cordeiro e fui abordado por um meliante, anunciou o assalto e levantou a blusa pra mostrar algo na cintura, mas foi tão rápido que não consegui identificar sem realmente era alguma arma, pediu a Bicicleta, pediu meu relógio e celular também, mas eu 'resisti' e fui me saindo e ele desistiu da ideia e só levou minha bicicleta. Postar no instagram a foto da bike e pedir ajuda do pessoal tem algum efeito? Ou só deixo isso pra lá e vida que segue?",
      "BO_n": null,
      "autor": "Maleficent_Gold3430",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "4 dias atrás",
          "comentario": "Fica de olho na OLX para ver se tua bike aparece e faça um BO."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 dias atrás",
          "comentario": "Complicado, eu que trabalho na Caxangá entendo perfeitamente. Deus ilumine seus caminhos. Isso foi durante o dia ou já era de noite?"
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 dias atrás",
          "comentario": "Vai na feira do troca do Cordeiro sábado de 8h~9h que é capaz de você encontrar ela lá."
        },
        {
          "autor": "Usuário anônimo",
          "data": "4 dias atrás",
          "comentario": "Já sofri uma tentativa de assalto na caxangá ali na saída José Osório, bem em frente do Compaz. Era domingo, final de 2022 ou 2023, Eu tava na faixa do BRT sentido camaraland quando avisto um cidadão atrás de uma árvore, acho suspeito e verifico se não está vindo carro pra eu atravessar pro outro lado da via. Quando retomo meus olhos para frente o meliante já está vindo em minha direção com a mão na cintura e estava muito próximo. Não tinha uma única alma na rua naquele momento. Eu só consegui fazer um escândalo gritando “Não, saaaai, não não, naaaaao saaaaaaii disgraça” Acho que ele ficou em choque, não veio atrás de mim e eu consegui me desvencilhar."
        }
      ]
    },
    {
      "local": "PE15 / Boa Viagem",
      "tipo": "Assalto",
      "data": "1 mês atrás",
      "titulo": "Assalto em ônibus PE15",
      "descricao": "[Post do Reddit] Após pegar o ônibus que estava quase vazio notei 2 indivíduos suspeitos no fundão do ônibus e sentei na frente, pediram parada um pouco antes do delicatessen/padaria diplomata, eles aproveitaram a garota pegar o celular e pegaram o celular dela e ao mesmo tempo apontando uma peixeira de 14 polegadas na cara da menina, foi uma ação muito rápida, tinha uma quantidade boa de homens no ônibus mas o negócio foi tão rápido que só vieram perceber após os ladrões descerem, Boa Viagem é um dos bairros do Recife que está tomado de noiados, sem polícia presente, sem soluções para esse problema, enfim pessoal, não vacilem.",
      "BO_n": null,
      "autor": "MrDias55",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "1 mês atrás",
          "comentario": "Lendo essa postagem em um pe15 vazio passando pela diplomata kkkkkk..."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 mês atrás",
          "comentario": "Meu amigo foi assaltado essa semana em BV (a pé), por CINCO jovens. Chegaram a bater no cara, e isso durante o dia, com a rua cheia de gente."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 mês atrás",
          "comentario": "Também já presenciei assalto nessa linha. Um cara sem aparência de maloqueiro roubou o celular de uma mulher e desceu como um passageiro normal quando chegou na praça do derby. Ele tava armado."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 mês atrás",
          "comentario": "Nunca imaginei que estivesse tão ruim assim, Jesus."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 mês atrás",
          "comentario": "Boa Viagem tá entregue. Vivemos sem saber quando chegará a nossa vez de ser a próxima vítima."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 mês atrás",
          "comentario": "Boa Viagem está repleta de pedintes, assaltantes, trombadinhas e afins, inclusive fui assaltado à mão armada saindo da garagem há alguns meses"
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 mês atrás",
          "comentario": "O PE15 afogados tb, minha amiga foi assaltada duas semanas seguidas, na segunda vez tinha um policial no ônibus que atirou e matou um dos assaltantes."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 mês atrás",
          "comentario": "Eu lembro do tempo que toda linha tinha pelo menos um policial fardado lá na frente junto com o motorista, das blitz nos ônibus na PE-15 e em outros lugares. Isso intimidava bastante coisa de acontecer."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 mês atrás",
          "comentario": "Cara, eu simplesmente tinha um ritual de ir todo domingo ir na pracinha de BV comer um pastel com caldo de cana, dado a grande quantidade de gente me pedindo pra comprar lanche eu simplesmente morguei de ir e tô indo comer na casa do bolo que não tem nem pastel nem caldo de cana."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 mês atrás",
          "comentario": "Acho muito triste o que vem acontecendo com a zona sul, morei a vida quase toda em setúbal, me mudei há alguns anos pra zona norte, mas toda vez que preciso ir na zs fico triste demais. A cidade ta LARGADA, nunca vi nessa situação. O centro já está entregue, mas bv até os prédios tão se acabando pq tão pichando e ninguém é doido de reclamar pra morrer por isso, fora a quantidade de assaltos em todo canto. Isso pq adoram colocar boa viagem e o recife antigo como cartões postais, imagine os lugares que a gente não consegue ver."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 mês atrás",
          "comentario": "PE15 boa viagem é uma das linhas com mais assaltos, se possível deixe de pegar essa linha."
        }
      ]
    },
    {
      "local": "Zona Sul",
      "tipo": "Assalto",
      "data": "2 anos atrás",
      "titulo": "Galera vendendo pano é assalto. Cuidado.",
      "descricao": "[Post do Reddit] Se em algum lugar vcs verem gente vendendo pano de prato, principalmente com aspecto de maloqueiro, é assalto. Cuidado. Eles utilizam os panos p abordar as pessoas e assaltam. Não é só um grupo que faz isso, é um modos operanti. Já vi vários fazendo.",
      "BO_n": null,
      "autor": "surtoooo",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "2 anos atrás",
          "comentario": "Às vezes compro pano de prato a eles na rua do futuro, sempre tão de boa, nunca fui assaltada."
        },
        {
          "autor": "Usuário anônimo",
          "data": "2 anos atrás",
          "comentario": "Talvez seja na região... Aqui na ZS tão usando isso como tática para roubar o povo. Presenciei três vezes e tentaram cmg hj."
        },
        {
          "autor": "Usuário anônimo",
          "data": "2 anos atrás",
          "comentario": "Tinha um com uma peixeira e ele ficou insistindo, dando desculpa pra eu pegar meu celular da bolsa. Eu bati o pé que não ia, aí ele pegou e saiu."
        },
        {
          "autor": "Usuário anônimo",
          "data": "2 anos atrás",
          "comentario": "Tem uns que ficam plantados em saída de supermercado e a tática deles é insistir ao máximo para abordar."
        }
      ]
    },
    {
      "local": "Ônibus Totó / Planalto",
      "tipo": "Assalto",
      "data": "1 ano atrás",
      "titulo": "Mulher acaba de ser assaltada no ônibus Totó Planalto.",
      "descricao": "[Post do Reddit] Ela estava no assento do fundo e um cara pulou a catraca do ônibus e foi lá pra trás, ele tinha um facão dentro da bermuda e fez o assalto, ele desceu na boa vista",
      "BO_n": null,
      "autor": "Miaswag23",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Você tava dentro do ônibus? Às vezes pego esse ônibus."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Fui assaltada dessa exata maneira em uma linha de afogados. Recife está insalubre demais."
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Lamentável...Aconteceu isso comigo no cdu caxangá 440"
        },
        {
          "autor": "Usuário anônimo",
          "data": "1 ano atrás",
          "comentario": "Sempre preferível sentar na frente."
        }
      ]
    },
    {
      "local": "Recife",
      "tipo": "ameaça / cidadão armado",
      "data": "2 anos atrás",
      "titulo": "Cidadãos com pistola intimidando na rua",
      "descricao": "[Post do Reddit] Tava indo pro trabalho ontem e um garoto meio moleque de periferia tava andando de bike e caiu no meio da pista, creio que ele xingou o motociclista que estava atrás dele ou algo assim pq uns 20 metros na frente o motociclista puxa uma arma e começa a intimidar o moleque, que ficou pedindo desculpas.",
      "BO_n": null,
      "autor": "Ill_Spare_4689",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "2 anos atrás",
          "comentario": "Porte era e continua sendo proibido, mas muitas pessoas possuem armas em casa e algumas andam armadas."
        },
        {
          "autor": "Usuário anônimo",
          "data": "2 anos atrás",
          "comentario": "Uma arma é muito mais barata que um IPhone. Agora dificultou um pouco, mas tem muita gente que comprou legalizada que tá vendendo a preços baixos, além de quem perde suas armas (é roubado). O ruim é que, em qualquer discussão na rua, briga de casal, o covarde que tem uma arma saca e pode fazer uma grande bobagem. Por isso tá rolando tanto feminicídio, tanta morte entre vizinhos, em bares e no trânsito."
        },
        {
          "autor": "Usuário anônimo",
          "data": "2 anos atrás",
          "comentario": "Lembro quando estava fazendo aula de moto para tirar a habilitação lá no R3, e a aula era em uma rua pouco movimentada, o trajeto era todo pintado no chão da rua e um carro chegou e parou bem cima. Então um dos alunos foi pedir com gentileza para se o rapaz poderia retirar o carro para ele praticar, saiu um velho do banco do carona armado e gritando 'Vou sair não, quero ver quem vai me obrigar' os instrutores acalmaram a situação. Mas deu pra  ver que o cara só fez tudo isso pq estava armado, nem havia necessidade desde estacionar o carro em cima tendo tantos lugares, quanto sacar a arma. Parece que o cara só queria uma desculpa pra poder matar alguém..."
        },
        {
          "autor": "Usuário anônimo",
          "data": "2 anos atrás",
          "comentario": "Eu particularmente nunca fui assaltado mas se eu fosse, consideraria a arma sempre como verdadeira, existem alguns 'give aways' da arma ser falsa, o único que você consegue perceber com alguém apontando ela pra você é o tamanho da abertura do cano, talvez não ter balas no tambor do revolver, mas vai por mim, não vale a pena arriscar."
        },
        {
          "autor": "Usuário anônimo",
          "data": "2 anos atrás",
          "comentario": "O malandro quando tá armado com uma arma fria na rua, ele faz o possível pra passar despercebido e fazer o 'trabalho' dele, essa galera que arruma confusão com arma à mostra na rua ou é militar, paisano ou tem costas quentes."
        }
      ]
    },
    {
      "local": "Olinda",
      "tipo": "arrastão / violência em evento",
      "data": "2 anos atrás",
      "titulo": "Arrastões prévias de Olinda",
      "descricao": "[Post do Reddit] Ir para as prévias de Olinda é praticamente um inferno, eu fui hoje e me arrependi, um comboio com aproximadamente 15 meninos de vó fazendo arrastão, um inferno praticamente, anos atrás não era desse jeito, agora está demais, pessoal, se vocês estiverem com vontade de ir não vão, pra quem vai de ônibus você vai certamente ser assaltado e pra quem depende de Uber você vai mofar esperando alguém aceitar mesmo a corrida estando no dinâmico, não recomendo.",
      "BO_n": null,
      "autor": "MrDias55",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "2 anos atrás",
          "comentario": "Indico ir no sábado, blocos menores e mais famílias. Fui com esposa e filhas e correu tudo bem."
        },
        {
          "autor": "Usuário anônimo",
          "data": "2 anos atrás",
          "comentario": "Já tem mais de 10 anos que não vou pra prévias em Olinda. Acabou. É só briga, assalto e arrastão. Dizem que se ir cedo e voltar cedo da pra curtir. Eu não arrisco mais. Na época que eu ia, ali por volta de 2008, chegava por volta das 16h e ficava até as 23h tranquilamente. Voltava andando pra casa e era super tranquilo."
        },
        {
          "autor": "Usuário anônimo",
          "data": "2 anos atrás",
          "comentario": "Eu até ia, mas vi a PM rendendo um maluco com um revolver com 6 balas no tambor, e a mulher dele tava com mais 6 balas na pochete, te pergunto, pra quê? Deixa eu em casa mesmo com meu Zé Delivery."
        }
      ]
    },
    {
      "local": "Arruda / Ilha / Jaqueira",
      "tipo": "violência / briga de gangues",
      "data": "7 meses atrás",
      "titulo": "PAPO SÉRIO: Presidente da Jovem na Restauração, vice assassinado",
      "descricao": "[Post do Reddit] Para segurança de vocês, não fiquem pelas imediações do Arruda, nem da Ilha. Por favor, tomem cuidado hoje. Por favor, tomem cuidado",
      "BO_n": null,
      "autor": "morim",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "7 meses atrás",
          "comentario": "Dia de clássico é dia de ficar em casa, não importa qual o clássico. Em especial, nos períodos que precedem e sucedem os jogos. Recife vira um inferno."
        },
        {
          "autor": "Usuário anônimo",
          "data": "7 meses atrás",
          "comentario": "Alguém sabe como está a região ali próximo a Jaqueira? Preciso buscar minha noiva no fim do plantão dela daqui a pouco ali perto e tô tentando traçar o caminho menos arriscado"
        },
        {
          "autor": "Usuário anônimo",
          "data": "7 meses atrás",
          "comentario": "Estou horrorizada com tanta violência. Não é caso de cancelar esse jogo?"
        }
      ]
    },
    {
      "local": "Clínica Regenerê, Praça do Entroncamento, Graças",
      "tipo": "furto de bicicleta",
      "data": "2 anos atrás",
      "titulo": "Furto de bicicleta nas Graças",
      "descricao": "[Post do Reddit] Furto de bicicleta que ocorreu hoje na clinica regenere em frente à praça do entroncamento. 12:00 Os caras em 30 segundos fazem a operação. A bicicleta tava com cadeado de cabo de aço, só não era U-LOCK. Arrombaram com um alicate de pressão.",
      "BO_n": null,
      "autor": "cerfvolnt",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "2 anos atrás",
          "comentario": "É um assalto em cima do outro. Não economizem na segurança, o cadeado se paga com o tempo, vá por mim."
        }
      ]
    },
    {
      "local": "UFPE",
      "tipo": "assédio / exposição indecente",
      "data": "5 dias atrás",
      "titulo": "Tarado na UFPE",
      "descricao": "[Post do Reddit] Sinto informar que tem um cara em um carro branco completamente nu se masturbando, os guardas tão indo atrás dele e tals. Só pra avisar. Eu e minha amiga vimos ele perto da biblioteca central. Só que eu e outra menina avisamos ao guarda, aí ele saiu em direção a área 2. Literalmente um cara na faixa de uns 20 anos por aí. Tomem cuidado gente. A UF tá cada dia mais caótica.",
      "BO_n": null,
      "autor": "Remarkable-Pie2770",
      "comentarios": [
        {
          "autor": "Usuário anônimo",
          "data": "5 dias atrás",
          "comentario": "Importante filmar o carro e avisar as autoridades. Situação recorrente no campus."
        },
        {
          "autor": "Usuário anônimo",
          "data": "5 dias atrás",
          "comentario": "Pega a placa do carro! É o mínimo quando se vê um crime relacionado a um condutor de veículo, galera!"
        },
        {
          "autor": "Usuário anônimo",
          "data": "5 dias atrás",
          "comentario": "Sinto dizer que provavelmente os guardas não farão nada."
        }
      ]
    }
  ]
};

/* ========= Helpers ========= */
const toYMD = (d: Date) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

const sub = (base: Date, qty: number, unit: "dias" | "meses" | "anos") => {
  const d = new Date(base);
  if (unit === "dias") d.setDate(d.getDate() - qty);
  if (unit === "meses") d.setMonth(d.getMonth() - qty);
  if (unit === "anos") d.setFullYear(d.getFullYear() - qty);
  return d;
};

const parsePtBrRelative = (raw: string, now = new Date()): string => {
  const s = raw.trim().toLowerCase();

  if (s === "hoje") return toYMD(now);
  if (s === "ontem") return toYMD(sub(now, 1, "dias"));

  const re = /^(\d+)\s+(dia|dias|m[eê]s|meses|ano|anos)\s+atr[aá]s$/i;
  const m = s.match(re);
  if (m) {
    const qty = parseInt(m[1], 10);
    const unit = m[2];
    if (unit.startsWith("dia")) return toYMD(sub(now, qty, "dias"));
    if (unit.startsWith("mês") || unit.startsWith("mes"))
      return toYMD(sub(now, qty, "meses"));
    if (unit.startsWith("ano")) return toYMD(sub(now, qty, "anos"));
  }

  const dt = new Date(raw);
  if (!isNaN(dt.getTime())) return toYMD(dt);

  return toYMD(now); // fallback
};

type RedditComentario = { autor: string; data?: string; comentario: string };
type RedditItem = {
  local: string;
  tipo: string;
  data: string;
  titulo?: string;
  descricao: string;
  BO_n: string | null;
  autor?: string;
  comentarios?: RedditComentario[];
};

const transformRedditPayload = (
  items: RedditItem[],
  now = new Date()
): Occurrence[] => {
  return items.map((it, idx): Occurrence => ({
    id: `seed-reddit-${idx + 1}`,
    local: it.local,
    data: parsePtBrRelative(it.data, now),
    crime: it.tipo,
    descricao: (it.titulo ? `${it.titulo} — ` : "") + it.descricao,
    hasBo: Boolean(it.BO_n),
    numeroBo: it.BO_n ?? undefined,
    comments: (it.comentarios ?? []).map((c) => ({
      author: c.autor,
      text: c.comentario,
    })),
  }));
};

/* ========= Seed ========= */
const SEED_DATA: Occurrence[] = transformRedditPayload(REDDIT_RAW.ocorrencias);

/* ========= Métodos de acesso ========= */

// Pega ocorrências (seed na primeira visita)
export const getOccurrences = (): Occurrence[] => {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(OCCURRENCES_KEY);
  if (!raw) {
    localStorage.setItem(OCCURRENCES_KEY, JSON.stringify(SEED_DATA));
    return [...SEED_DATA];
  }
  try {
    return JSON.parse(raw) as Occurrence[];
  } catch {
    localStorage.setItem(OCCURRENCES_KEY, JSON.stringify(SEED_DATA));
    return [...SEED_DATA];
  }
};

// Salva uma nova ocorrência
export const saveOccurrence = (
  occurrence: Omit<Occurrence, "id" | "comments">
): Occurrence | undefined => {
  if (typeof window === "undefined") return;
  const occurrences = getOccurrences();
  const newOccurrence: Occurrence = {
    ...occurrence,
    id: new Date().toISOString(),
    comments: [],
  };
  occurrences.unshift(newOccurrence);
  localStorage.setItem(OCCURRENCES_KEY, JSON.stringify(occurrences));
  return newOccurrence;
};

// Adiciona comentário a uma ocorrência
export const addCommentToOccurrence = (
  occurrenceId: string,
  author: string,
  text: string
) => {
  if (typeof window === "undefined") return;
  const occurrences = getOccurrences();
  const idx = occurrences.findIndex((o) => o.id === occurrenceId);
  if (idx > -1) {
    occurrences[idx].comments.push({ author, text });
    localStorage.setItem(OCCURRENCES_KEY, JSON.stringify(occurrences));
  }
};
