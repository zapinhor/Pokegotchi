# Histórico consolidado — Pokégotchi

> Backup editorial da conversa de desenvolvimento até 25 de agosto de 2026.
> Este documento preserva decisões, pedidos, correções e ideias em uma forma
> pesquisável. O `CHANGELOG.md` continua sendo a fonte principal das versões
> efetivamente publicadas.

## 1. Origem e direção do projeto

O Pokégotchi nasceu da ideia de transportar um Tamagotchi anteriormente feito
em C# para a web, combinando cuidados no estilo Pou/Tamagotchi com sistemas de
Pokémon. A tecnologia escolhida foi HTML, CSS e JavaScript puro, sem backend,
com publicação no GitHub Pages e persistência no navegador.

Referências visuais discutidas: PokeChill, PokéClicker, Pokémon Auto Chess e
PokéRogue. A direção final adotou pixel art, painéis com contornos fortes,
paleta limitada e aparência de Game Boy/Game Boy Color. O nome inicial
“Pokéninho” foi substituído definitivamente por “Pokégotchi”.

## 2. Fundação do jogo

- Seleção inicial: Bulbasaur, Charmander, Squirtle, Dreepy, Jigglypuff,
  Piplup, Gible, Sneasel, Mimikyu, Eevee e Pikachu.
- Save automático em `localStorage`, com passagem de tempo offline.
- Necessidades de fome, energia, felicidade, higiene, saúde e amizade.
- Progressão com nível, XP, IV, EV, golpes e evolução.
- Três minigames iniciais: Pegar Berries, Memória Pokémon e Treino de Ataque.
- PokéMart, inventário, Pokédex, quintal, batalhas, quartos e Boxes.
- PokéAPI como fonte de dados, sprites, itens, golpes, gritos e espécies.
- Open-Meteo e geolocalização opcional para clima e ciclo local.

## 3. Jornada, cuidados e inventário

A tela inicial passou a oferecer “Continuar jornada” e “Começar nova jornada”,
com confirmação antes de apagar um save existente. O treinador escolhe seu
nome, o Pokémon inicial e pode dar apelidos aos capturados. Pokémon sem apelido
passam a receber corretamente o nome da nova espécie depois de evoluir; apelidos
personalizados são preservados.

O inventário foi dividido em categorias para comida, brincadeira, limpeza,
Pokébolas, berries, poções, itens evolutivos, doces e consumíveis. Itens iniciais
e presentes diários alimentam esse estoque. O presente diário ganhou contador,
botão desabilitado durante a espera, 250 PokéCoins, 10 Pokébolas, 6 Grandes
Bolas, 2 Ultra Bolas e 6 berries aleatórias.

O decaimento das necessidades foi tornado mais dinâmico e também ocorre durante
ausências. Dormindo, o desgaste é reduzido à metade. Energia só se recupera
enquanto o Pokémon está dormindo: uma carga de 0 a 100 leva aproximadamente
oito horas com a cama comum e quatro horas com a cama melhorada. Um contador em
tempo real mostra o restante.

## 4. Quartos, Boxes e móveis

Até seis Pokémon podem ficar ativos em quartos; os demais permanecem nas Boxes.
Cada Pokémon possui tela de status com tipo, gênero, nível, XP, IV, EV, amizade
e necessidades. Os móveis comprados aparecem no cenário e podem ser arrastados,
ter a posição salva, ser recolhidos para um depósito e colocados novamente.

Foram criados cenários próprios de quarto diurno, quarto noturno e quintal,
além de sprites de móveis em pixel art. Móveis podem melhorar sono, felicidade,
IV/EV e conceder bônus cumulativos de EXP. O quarto também exibe o estojo das
oito insígnias de Kanto, recuperando vitórias antigas do save.

## 5. Quintal, clima e captura

O catálogo foi ampliado para as 1.025 espécies principais, incluindo
pseudo-lendários, lendários e míticos. A raridade de aparição e a dificuldade de
captura são fixas por espécie, derivadas de dados oficiais e categorias, para
evitar que dois indivíduos idênticos recebam raridades incompatíveis.

A aparição é ponderada por horário, clima, temperatura e tipagem. Fantasmas são
favorecidos à noite; condições chuvosas favorecem tipos relacionados; Pokémon
de Gelo recebem bônus abaixo de 20 °C, adequando o sistema ao clima brasileiro.
Formas regionais de Alola, Galar, Hisui e Paldea aparecem com nome, sprite e
tipagem próprios.

O intervalo normal de aparição é de 10 a 90 minutos. Encontros ocorridos offline
ficam acumulados para o jogador escolher. O Incenso dura uma hora por unidade,
gera encontro a cada cinco minutos, pode ser acumulado até 12 horas e possui
contador no Quintal e na Mochila.

A tela de captura usa um círculo verde, amarelo ou vermelho para comunicar a
dificuldade. O jogador escolhe berry e Pokébola na parte inferior. Há Pokébola,
Grande Bola, Ultra Bola e Master Ball; a Master Ball tem captura garantida.
Berries associadas à tipagem melhoram imediatamente a chance. A chance shiny é
fixa em 1/200. A captura possui feedback visual e permite escolher apelido.

## 6. Loja e itens

O PokéMart foi separado em abas, incluindo Berries, Captura, Cuidados, Evolução
e Móveis. Existe uma berry associada a cada tipo, descrita tanto como alimento
quanto como auxílio de captura. A loja inclui as poções oficiais, Pokébolas,
itens e pedras evolutivas disponíveis, móveis ambientais e consumíveis.

Itens evolutivos não evoluem automaticamente ao serem comprados: vão para a
Mochila e são aplicados ao Pokémon escolhido. Doces de EXP PP, P, M, G e GG
também ficam na Mochila e podem ser usados em qualquer Pokémon.

## 7. Evoluções, formas e tipagens

Evoluções por nível são consultadas na PokéAPI e liberam um botão manual quando
os requisitos são cumpridos. Condições especiais difíceis de reproduzir na web,
como troca ou orientação do console, usam nível 35 como alternativa. Evoluções
por item exigem o item correto na Mochila.

O Eevee possui rotas por pedras, amizade, horário e golpe Fada. Rotas regionais
incluem, entre outras, Marowak de Alola, Raichu de Alola, Weezing de Galar e
evoluções regionais exclusivas. Os ícones oficiais dos 18 tipos são exibidos no
Quintal, Quartos, Boxes e Status. Golpes usam cores coerentes com a tipagem.

## 8. Batalhas e ginásios

As batalhas usam golpes reais aprendidos por nível e a tabela oficial de
efetividade: super efetivo, multiplicadores combinados, pouco efetivo e sem
efeito. O nível de treinadores é ajustado ao progresso do jogador; recompensas
de dinheiro e experiência variam com espécie, experiência-base e nível do
adversário. Batalhas também consomem fome, felicidade e higiene, e derrotas
prejudicam amizade.

Ginásios permitem escolher até três Pokémon. Foram adicionados os oito líderes
de Kanto, com suas equipes, progressão e recompensas. Giovanni concede uma
Master Ball. A Elite dos Quatro ficou explicitamente fora desta etapa.

## 9. Missões, perfil e títulos

As missões foram divididas em permanentes, ginásios, diárias, captura por tipo,
batalha por tipo e concluídas. Existem metas progressivas de 5, 10, 25, 50 e
100 para cada um dos 18 tipos, tanto em captura quanto em vitórias. As diárias
incluem capturas, batalhas, alimentação, brincadeiras e minigames, sem repetir
líderes como tarefas diárias. Recompensas de XP direto foram substituídas por
Doces de EXP, além de moedas, berries e Pokébolas.

O Perfil permite editar o nome do treinador e equipar títulos. Há hierarquias
por tipo e títulos por coleção, capturas, batalhas, ginásios, cuidados, arcade,
eventos e conquistas especiais, como Eeveenático. A aba “Meus títulos” mostra
somente os desbloqueados.

## 10. Eventos, expedições e resgates

Os dois primeiros eventos são Tempestade de Gelo (nível recomendado 10) e
Emergência no Laboratório (nível recomendado 20). Cada expedição dura duas horas
e pode ser repetida enquanto o evento estiver disponível. É possível manter
duas expedições simultâneas, uma por evento, com Pokémon diferentes.

Antes de confirmar, o jogo calcula chance, compatibilidade e risco considerando
nível, tipagem, necessidades e bônus. O resultado é definido no envio e pode
variar entre fracasso com ferimentos e grande sucesso. Recompensas incluem XP
para o participante, PokéCoins, itens e até 20 Pokémon resgatados, inclusive com
espécies repetidas. O Passe de Expedição, consumível de 2.800 PokéCoins, reduz
uma expedição para uma hora. O código `EXPEDIÇÕES` fornece dois passes.

Pokémon resgatados ficam em uma central própria e podem ser capturados
individualmente usando o estoque do jogador. A prévia separa itens e espécies;
espécies ainda não registradas aparecem como silhuetas.

## 11. Breeding

Cada Pokémon possui gênero seguindo a proporção disponível na PokéAPI. O Centro
de Breeding aceita pares macho/fêmea e Ditto como coringa. O ovo leva 24 horas
para ser produzido; a cada hora, uma berry compatível pode reduzir duas horas.
Depois, a incubação leva seis horas. Filhotes nascem no nível 1 e podem herdar
IV dos pais. A seleção possui cartões, pesquisa e filtros por gênero e tipo.

A PokéAPI também fornece `egg_groups` em `pokemon-species`. O jogo já consulta
essa informação, mas a compatibilidade oficial por Egg Group ainda não foi
aplicada ao Breeding (ver pendências).

## 12. Áudio, interface e acessibilidade

Gritos oficiais da PokéAPI são reproduzidos em encontros e batalhas. Não há
música de fundo. Um slider controla o volume. A fonte foi ajustada para melhorar
a distinção entre 5/8, C/O e outros caracteres problemáticos. Há um botão de
Ajuda com explicações de cuidados, captura, aparições, móveis, loja, batalhas,
minigames, missões, títulos, eventos e expedições.

## 13. Códigos promocionais

- `RELEASE1500`: 1.500 PokéCoins.
- `WELCOME`: Dratini shiny.
- `EXPEDIÇÕES`: dois Passes de Expedição.

Cada código pode ser resgatado uma vez por jornada.

## 14. Publicação e divulgação

- Repositório: https://github.com/zapinhor/Pokegotchi
- Jogo: https://zapinhor.github.io/Pokegotchi/
- Publicação automática pela branch `main` usando GitHub Actions/Pages.
- O projeto também foi adicionado ao portfólio e recebeu textos estruturados
  para publicação e para a seção Projetos do LinkedIn.

## 15. Ideias discutidas, mas ainda não concluídas

- Aplicar integralmente as regras oficiais de Egg Group no Breeding, incluindo
  `no-eggs`, compatibilidade compartilhada, sem gênero e bloqueio de dois Ditto.
- Mostrar Egg Groups e filtro “Somente compatíveis” na seleção de parceiros.
- Criar um novo conjunto de sprites 8-bit para todas as abas laterais; usar o
  Rotom Dex como referência da Pokédex. O pedido determinou não alterar o site
  antes de aprovar esses visuais, e a geração não foi concluída.
- Login e sincronização em nuvem foram discutidos apenas como possibilidade;
  exigiriam backend/serviço externo e não fazem parte do site estático atual.
- Exportar e importar o save entre navegadores foi discutido como solução sem
  login, mas ainda não aparece nas versões registradas no changelog.
- Métricas de visitantes pelo GitHub foram discutidas, mas nenhum analytics foi
  registrado como implementado.
- Elite dos Quatro ainda não deve ser adicionada até nova decisão.

## 16. Fontes de verdade

Em caso de divergência entre este histórico e o projeto:

1. O código na branch `main` define o comportamento real.
2. `CHANGELOG.md` registra o que foi publicado por versão.
3. `README.md` resume as funcionalidades atuais.
4. Este arquivo preserva o raciocínio e as decisões da conversa.

