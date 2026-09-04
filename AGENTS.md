# PROMPT MESTRE — PROJETO ALMOÇO COM DEUS

Você é um engenheiro de software sênior, arquiteto frontend e designer UI/UX.

Sua missão é desenvolver um website moderno, responsivo, elegante e de fácil manutenção utilizando React + Vite para divulgar o projeto:

“ALMOÇO COM DEUS / JANTAR COM DEUS”

Autor do projeto:
Ev. Mister Gandhi
Também identificado artisticamente como:
Gandhi Compositor

==================================================
1. OBJETIVO DO WEBSITE
==================================================

Criar uma plataforma institucional e evangelística que apresente de maneira organizada, moderna e acolhedora o projeto “Almoço com Deus” / “Jantar com Deus”.

O site deve explicar que o projeto propõe a realização periódica de eventos gratuitos promovidos por igrejas, incluindo:

- almoço;
- jantar;
- cachorro-quente;
- café da manhã;
- música gospel;
- apresentações;
- momentos de comunhão;
- mensagem evangelística;
- recepção de visitantes e famílias.

O visitante deve entender rapidamente:

O que é o projeto?
Quem criou?
Como funciona?
Como uma igreja pode participar?
Como realizar um evento?
Como utilizar os convites?
Quais são as músicas do projeto?
Como entrar em contato?
Como confirmar presença em um evento?

O site NÃO deve parecer uma página improvisada.

Ele precisa transmitir:

acolhimento;
amor;
família;
comunhão;
credibilidade;
organização;
esperança;
alegria;
espiritualidade.

==================================================
2. TECNOLOGIAS
==================================================

Utilizar:

React
Vite
TypeScript
React Router
CSS moderno ou Tailwind CSS
Lucide React para ícones

Preferencialmente utilizar:

React Hook Form
Zod

Não adicionar bibliotecas desnecessárias.

Separar corretamente:

components
pages
sections
assets
data
types
hooks
services
utils

Estrutura sugerida:

src/
 ├── assets/
 │   ├── images/
 │   └── icons/
 │
 ├── components/
 │   ├── Header/
 │   ├── Footer/
 │   ├── Button/
 │   ├── SectionTitle/
 │   ├── MusicCard/
 │   ├── EventCard/
 │   └── InvitationCard/
 │
 ├── sections/
 │   ├── Hero/
 │   ├── About/
 │   ├── HowItWorks/
 │   ├── Objectives/
 │   ├── Invitations/
 │   ├── Music/
 │   ├── Participate/
 │   └── Contact/
 │
 ├── pages/
 │   ├── Home.tsx
 │   ├── Projeto.tsx
 │   ├── Musicas.tsx
 │   ├── Convites.tsx
 │   ├── Eventos.tsx
 │   ├── Contato.tsx
 │   └── NotFound.tsx
 │
 ├── data/
 │   ├── songs.ts
 │   ├── project.ts
 │   └── invitations.ts
 │
 ├── types/
 ├── hooks/
 ├── services/
 ├── utils/
 ├── App.tsx
 └── main.tsx

==================================================
3. IDENTIDADE VISUAL
==================================================

Utilizar como principal referência visual os convites e imagens fornecidos pelo autor.

A identidade possui:

branco;
dourado;
tons discretos de bege;
preto para textos.

O estilo deve ser elegante e clássico.

Usar os elementos dourados de forma equilibrada.

Não transformar o site em algo excessivamente ornamentado.

A aparência deve lembrar:

convite formal;
celebração;
família;
acolhimento;
evento especial.

A cor dourada deve aparecer principalmente em:

botões;
divisores;
bordas;
ícones;
detalhes;
títulos importantes.

Fundo predominantemente branco.

==================================================
4. LOGOTIPO / IDENTIDADE PRINCIPAL
==================================================

Utilizar como uma das principais imagens do projeto a arte:

“À RAINHA DO LAR
COM MUITO
AMOR E CARINHO”

com a coroa dourada.

Essa imagem poderá aparecer na seção destinada às famílias e mães, mas não necessariamente deve funcionar como logotipo oficial do website.

Criar também uma identificação textual principal:

ALMOÇO COM DEUS

subtítulo:

Um momento de comunhão, amor, música e esperança.

Considerar também:

JANTAR COM DEUS

e:

Uma Tarde com Deus

como modalidades do projeto.

==================================================
5. HEADER
==================================================

Criar Header responsivo.

Desktop:

Logo / nome

Almoço com Deus

Links:

Início
O Projeto
Como Funciona
Convites
Músicas
Eventos
Contato

CTA:

“Quero participar”

Mobile:

menu hambúrguer.

Header pode ficar sticky durante a navegação.

==================================================
6. HERO
==================================================

Criar um Hero elegante.

Título:

ALMOÇO COM DEUS

Subtítulo sugerido:

“Uma mesa preparada para receber famílias, compartilhar alegria, música, comunhão e a Palavra de Deus.”

Texto:

Conheça uma iniciativa criada para aproximar pessoas, famílias e igrejas através de momentos especiais de acolhimento e comunhão.

Botões:

CONHEÇA O PROJETO

e

QUERO PARTICIPAR

Adicionar detalhes dourados discretos.

Pode utilizar imagem relacionada ao convite, coroa ou evento.

==================================================
7. SEÇÃO SOBRE O PROJETO
==================================================

Título:

O que é o Almoço com Deus?

Explicar de maneira simples que a proposta é convidar pessoas e famílias para um almoço, jantar ou outro momento de confraternização promovido pela igreja.

O conteúdo deve apresentar o conceito sem colocar todo o documento original diretamente na página.

Adicionar um botão:

“Conheça a história completa”

que leva para /projeto.

==================================================
8. AUTOR
==================================================

Criar seção:

Idealizador do Projeto

Nome:

Ev. Mister Gandhi

Também apresentar:

Gandhi Compositor

Adicionar espaço para fotografia futura.

Adicionar breve biografia.

Evitar inventar informações biográficas que não estejam presentes nos materiais fornecidos.

==================================================
9. COMO FUNCIONA
==================================================

Apresentar visualmente o fluxo:

1. Igreja organiza o evento

2. Convites são entregues às famílias

3. Convidado confirma presença

4. Igreja organiza quantidade de refeições

5. Família comparece ao evento

6. Há almoço/jantar e confraternização

7. Música Gospel

8. Breve mensagem

9. Continuidade do relacionamento com os visitantes

Criar visual moderno utilizando cards ou timeline.

==================================================
10. MODALIDADES
==================================================

Criar cards para:

Almoço com Deus

Jantar com Deus

Cachorro-Quente com Deus

Café da Manhã com Deus

Uma Tarde com Deus

Cada card deve conter breve descrição.

==================================================
11. CONVITES
==================================================

Criar uma seção exclusiva para os convites.

Utilizar as imagens fornecidas:

imagem frente.jpeg

almoço grátis imagem.jpeg

cachorro-quente grátis imagem.jpeg

WhatsApp Image 2026-08-28 at 5.04.05 PM.jpeg

Apresentar:

Frente do convite
Verso almoço
Verso jantar/hot dog
Modelo com informações de endereço

Permitir ampliar a imagem.

Criar botão:

“Ver convite”

e futuramente:

“Baixar para impressão”

Não alterar o texto original das artes sem autorização.

==================================================
12. EVENTOS
==================================================

Criar seção:

Próximos Eventos

Estrutura de dados:

id
titulo
tipo
igreja
endereco
cidade
estado
data
hora
vagas
descricao
imagem
whatsapp

Card exemplo:

Almoço com Deus
Domingo
12:00
30 convidados

Botão:

CONFIRMAR PRESENÇA

Inicialmente utilizar dados mockados.

Preparar arquitetura para posteriormente consumir API.

==================================================
13. CONFIRMAÇÃO DE PRESENÇA
==================================================

Criar formulário.

Campos:

Nome
Telefone / WhatsApp
Número de familiares
Cidade
Igreja/evento
Observação

Botão:

CONFIRMAR PRESENÇA

Adicionar checkbox obrigatório:

“Autorizo o uso dos meus dados exclusivamente para comunicação sobre este evento e atividades relacionadas ao projeto.”

Não cadastrar automaticamente ninguém em listas de mensagens.

Seguir boas práticas de privacidade e LGPD.

==================================================
14. MÚSICAS
==================================================

Criar uma página e uma seção denominada:

MÚSICAS DO PROJETO

Subtítulo:

Gandhi Compositor

Criar cards modernos utilizando thumbnails do YouTube quando possível.

Cada card deverá possuir:

Título
Artista/Compositor
Thumbnail
Botão Assistir
Player incorporado opcional

Músicas fornecidas:

1. “Droga não, stop, Jesus yeeeeeeeeees!”
   Gandhi Compositor

2. “Conta pra ele”
   Gandhi Compositor

3. Música:
https://youtu.be/_DJ0nQJf7cc

4. Música:
https://youtu.be/akjnugoZiMY

5. Música:
https://youtu.be/B0WtI0_yTQA

6. Música:
https://youtu.be/n1mIJv5ESv4

7. Música:
https://youtu.be/Atpt6pblZCE

8. Música:
https://youtu.be/1g723rYLHTs

9. “Olha que tá tudo legal.”
https://youtu.be/roioqs7bfCQ

10. “Filhas de Hiroshima”
https://youtu.be/Zzlb1ow7S9g

IMPORTANTE:

Antes de associar definitivamente um título a um determinado vídeo, verificar o título real do vídeo.

Não inventar correspondência entre título e link.

Criar os dados das músicas em:

src/data/songs.ts

Exemplo:

export interface Song {
  id: number;
  title: string;
  composer: string;
  youtubeUrl?: string;
  youtubeId?: string;
}

==================================================
15. PLAYER DE YOUTUBE
==================================================

Não carregar dez iframes simultaneamente na página inicial.

Usar thumbnail e botão play.

Ao clicar:

abrir modal

OU

carregar iframe somente naquele momento.

Isso melhora desempenho.

Criar componente reutilizável:

<MusicCard />

==================================================
16. OBJETIVOS DO PROJETO
==================================================

Criar seção:

“Nossa missão”

Usar cards.

Conteúdos principais:

Aproximar pessoas da igreja.

Aproximar a igreja das pessoas.

Promover momentos de convivência.

Receber famílias.

Utilizar música e confraternização como elementos de aproximação.

Criar relacionamentos contínuos com visitantes.

Estimular igrejas a realizarem eventos regularmente.

==================================================
17. SEÇÃO PARA IGREJAS
==================================================

Criar:

“Sua igreja pode participar”

Texto:

O projeto pode ser implementado por igrejas e congregações interessadas em promover encontros de confraternização e evangelização.

Botões:

QUERO IMPLEMENTAR

VER COMO FUNCIONA

Criar pequeno guia:

Escolha a data
Defina o cardápio
Organize voluntários
Distribua os convites
Confirme os participantes
Prepare o ambiente
Realize o encontro

==================================================
18. CARDÁPIOS
==================================================

Criar seção opcional:

Ideias de cardápio

Mostrar:

Hot Dog
Hambúrguer com batata frita
Strogonoff
Almôndegas
Macarrão com carne moída
Sobremesas

Não apresentar valores como preços atuais sem indicar que são estimativas do documento original.

==================================================
19. GALERIA
==================================================

Criar estrutura para futura galeria de eventos.

Categorias:

Almoços
Jantares
Apresentações
Famílias
Igrejas participantes

Utilizar dados fictícios apenas quando claramente identificados como demonstração.

==================================================
20. DEPOIMENTOS
==================================================

Preparar seção:

“Histórias que nasceram à mesa”

Não inventar depoimentos reais.

Enquanto não existirem depoimentos fornecidos pelo responsável:

ocultar a seção

OU

usar placeholders explicitamente identificados como demonstração.

==================================================
21. CONTATO
==================================================

Criar página de contato.

Campos:

Nome
E-mail
WhatsApp
Cidade
Igreja
Assunto
Mensagem

Tipos de contato:

Quero realizar o projeto
Quero participar de um evento
Sou cantor/músico
Quero apoiar
Outros

Adicionar integração futura com backend ou serviço de e-mail.

==================================================
22. WHATSAPP
==================================================

Preparar botão flutuante de WhatsApp.

Não colocar número fictício.

Utilizar variável:

VITE_WHATSAPP_NUMBER=

A URL deve ser gerada dinamicamente.

==================================================
23. REDES SOCIAIS
==================================================

Criar área:

YouTube
Instagram
Facebook
WhatsApp

A conta principal de músicas será apresentada como:

Gandhi Compositor

Não criar links fictícios para redes não fornecidas.

==================================================
24. RODAPÉ
==================================================

Footer contendo:

Almoço com Deus

Projeto evangelístico de confraternização e acolhimento.

Idealizador:
Ev. Mister Gandhi

Links rápidos.

Músicas
Convites
Projeto
Contato

Copyright dinâmico:

© {anoAtual} Almoço com Deus

==================================================
25. RESPONSIVIDADE
==================================================

O site deverá funcionar perfeitamente em:

smartphone
tablet
notebook
desktop
monitor grande

Adotar abordagem mobile-first.

Não permitir:

overflow horizontal
textos minúsculos
botões difíceis de clicar
imagens distorcidas

==================================================
26. ACESSIBILIDADE
==================================================

Utilizar HTML semântico.

Adicionar:

alt nas imagens
aria-label quando necessário
contraste adequado
navegação por teclado
focus visível
labels nos formulários

==================================================
27. SEO
==================================================

Configurar:

title
description
OpenGraph
favicon

Título:

Almoço com Deus | Projeto Evangelístico

Description sugerida:

Conheça o projeto Almoço com Deus, uma iniciativa de confraternização, música, acolhimento e evangelização criada por Ev. Mister Gandhi.

==================================================
28. PERFORMANCE
==================================================

Aplicar:

lazy loading
code splitting quando necessário
imagens otimizadas
WebP quando possível
iframe do YouTube sob demanda
React.lazy para páginas secundárias

Objetivo:

Lighthouse acima de 90 sempre que possível.

==================================================
29. BOAS PRÁTICAS
==================================================

Não criar componentes gigantes.

Não duplicar código.

Não deixar textos importantes hardcoded em dezenas de componentes.

Centralizar conteúdos em:

src/data

Criar componentes reutilizáveis.

Usar TypeScript corretamente.

Não utilizar any desnecessariamente.

Não instalar bibliotecas sem necessidade.

Manter nomes de arquivos e componentes claros.

==================================================
30. PREPARAÇÃO PARA BACKEND
==================================================

Apesar da primeira versão ser frontend, preparar o projeto para integração futura com API.

Possíveis entidades:

Church
Event
Visitor
Registration
Song
Invitation
ContactMessage

API futura poderá permitir:

cadastro de igrejas
criação de eventos
confirmação de presença
controle de vagas
cadastro de convidados
envio de mensagens
administração de músicas
administração de convites
dashboard

==================================================
31. PAINEL ADMINISTRATIVO FUTURO
==================================================

Deixar arquitetura preparada para futura rota:

/admin

Possíveis funções:

Login
Dashboard
Eventos
Participantes
Igrejas
Músicas
Convites
Mensagens

Não implementar autenticação falsa apenas para simular segurança.

==================================================
32. PÁGINA INICIAL — ORDEM
==================================================

A Home deverá utilizar aproximadamente esta sequência:

Header

Hero

O que é o projeto

Como funciona

Modalidades

Nossa missão

Convites

Músicas do Gandhi Compositor

Próximo evento

Sua igreja pode participar

Contato

Footer

==================================================
33. ESTILO DE TEXTO
==================================================

O texto deve ser:

acolhedor
respeitoso
positivo
familiar
cristão
simples de compreender

Evitar linguagem excessivamente comercial.

O visitante deve sentir que está sendo convidado para participar de uma iniciativa de acolhimento, e não de uma campanha de vendas.

==================================================
34. REGRA CRÍTICA
==================================================

Nunca inventar informações sobre:

autor
igrejas participantes
datas
endereços
resultados do projeto
quantidade de participantes
depoimentos
contatos
redes sociais

Quando uma informação ainda não estiver disponível, criar a estrutura utilizando placeholder claramente identificado ou variável de configuração.

==================================================
35. EXECUÇÃO
==================================================

Comece criando:

1. arquitetura de diretórios;
2. configuração do React Router;
3. identidade visual global;
4. Header;
5. Hero;
6. Home;
7. seção do projeto;
8. seção das músicas;
9. seção dos convites;
10. Footer.

Depois implemente as páginas secundárias.

Execute o projeto constantemente usando:

npm run dev

Antes de considerar uma etapa concluída, executar:

npm run build

Corrigir qualquer erro TypeScript ou de build.

O código final deve ser limpo, profissional e pronto para continuar evoluindo.