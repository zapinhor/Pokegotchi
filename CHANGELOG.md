# Changelog — Pokégotchi

## 8.3 — Coleções utilizáveis

- A Zona de Lazer passa a funcionar como organização visual da coleção, sem bloquear o uso dos Pokémon.
- Pokémon das zonas podem participar diretamente de breeding e expedições, além de receber doces e evoluir.
- Cada cartão da zona ganhou o botão “Mover ao quarto” para preparar o Pokémon para batalhas e jogos.
- A recuperação das necessidades pausa somente enquanto o Pokémon estiver ocupado e continua quando ele retorna.

## 8.2 — Zonas de Lazer

- Quartos e Boxes receberam filtros por nome, espécie, gênero e tipagem.
- Cada insígnia permite comprar uma Zona de Lazer por 20.000 PokéCoins, até oito zonas.
- Cada zona comporta até 12 Pokémon em um cenário animado.
- Saúde, fome, energia, felicidade e higiene se recuperam gradualmente até 100% e não decaem dentro da zona.
- A versão inicial incluiu controles para organizar a entrada e a saída dos Pokémon pelas Boxes.

## 8.1 — Novas comidas

- Ração Pokémon adicionada por 350 PokéCoins, recuperando 50 pontos de fome.
- Ração Pokémon Premium adicionada por 700 PokéCoins, recuperando até 100 pontos de fome.
- A categoria “Berries” do PokéMart foi renomeada para “Alimentos”.
- As rações não substituem berries nos presentes diários nem na alimentação do breeding.

## 8.0 — Gerenciamento de save

- Removido o aviso permanente da troca de domínio.
- Importação e exportação continuam disponíveis dentro de Configurações.
- A tela inicial ganhou a janela “Gerenciar save”, permitindo importar uma jornada antes de entrar no jogo.
- Os textos de backup agora servem como orientação permanente, sem referências à migração de domínio.

## 7.9 — Novo domínio

- Corrigida a inicialização quando o domínio ou navegador ainda não possui uma jornada salva.
- Os botões de importar save, começar uma nova jornada e abrir o changelog voltam a funcionar normalmente.
- Nenhum save é criado ou sobrescrito durante essa correção.

## 7.8 — Código BREEDSORRY

- O código `BREEDSORRY` pode ser resgatado uma vez por jornada.
- O benefício fica guardado até o jogador iniciar o próximo breeding válido.
- Esse breeding leva somente 10 segundos para produzir o ovo e mais 10 segundos para chocá-lo.
- Após o uso, os tempos normais voltam automaticamente.

## 7.7 — Breeding regional

- O breeding preserva a primeira forma regional da linhagem do progenitor não-Ditto.
- Zorua de Hisui com Ditto agora produz corretamente outro Zorua de Hisui.
- A correção também é aplicada a ovos que já estavam em produção ou incubação antes desta versão.
- Outras famílias regionais, como Rattata, Vulpix, Meowth, Ponyta e Zigzagoon, usam a mesma regra.

## 7.6 — Recompensas progressivas

- Recompensas das Áreas de Batalha agora crescem de acordo com o nível do adversário.
- PokéCoins usam uma curva mais forte nas faixas altas, tornando as áreas de nível 100 realmente valiosas.
- Sequências de vitórias concedem bônus gradual de até 50% no XP e nas PokéCoins.
- Cada área mostra uma estimativa de recompensa antes da entrada.
- Luminária Lucky Egg ajustada para 15.000 PokéCoins, mantendo o multiplicador de XP ×2,5.

## 7.5 — Experiência e áreas infinitas

- Exp. Share de 10.000 PokéCoins pode ser equipado em um quarto e concede 80% do XP real obtido pelo parceiro.
- Exp. All de 80.000 PokéCoins é permanente e concede 150% do XP-base aos demais quartos ocupados.
- Luminária Lucky Egg multiplica por 2,5 o XP do Pokémon em uso em todas as atividades.
- Áreas de Batalha agora são sequências infinitas com somente o parceiro atual, encerradas ao sair ou desmaiar.
- Dungeon Infinita também passou a conceder XP por adversário derrotado.

## 7.4 — Áreas de Batalha

- Seis territórios temáticos cobrem os 18 tipos de Pokémon.
- Faixas de dificuldade selecionáveis vão do nível 5 ao 100.
- Cada território recomenda tipos vantajosos contra os adversários locais.

## 7.3 — Respostas dinâmicas

- Conversas ganharam mais respostas, com conjuntos que mudam periodicamente ou a pedido do jogador.

## 7.2 — Conversas expandidas

- As 25 naturezas possuem falas, perguntas e reações próprias.
- Saúde, fome, energia, higiene, felicidade e amizade geram novas variações de conversa.

## 7.1 — Ovos corrigidos

- O breeding consulta a cadeia evolutiva completa e faz o ovo chocar na primeira forma da família.

## 7.0 — Atributos e personalidade

- IVs, EVs, atributos calculados e efeitos das naturezas passaram a valer nas batalhas.
- Amizade máxima ajustada para 255.
- Conversas passaram a reagir à natureza, amizade e condições do Pokémon.

## 6.0 — Dungeon Infinita e Rota de Reide

- Dungeon Infinita adicionada à aba de Batalhas, com equipe de até três Pokémon e dificuldade procedural crescente até todos desmaiarem.
- Sobreviver a pelo menos cinco salas concede um Passe de Reide; marcas maiores concedem passes adicionais.
- Rota de Reide consome um passe e exige cinco batalhas crescentes antes do boss final.
- Bosses podem ser lendários, míticos, pseudo-lendários ou Pokémon extremamente raros, sem Gigantamax.
- Desempenho por HP restante e quantidade de turnos concede de 8 a 13 Premier Balls exclusivas da tentativa.
- Captura do boss usa o sprite oficial da Premier Ball fornecido pela PokéAPI e mantém shiny em 1/200.
- Progresso do desafio e da captura é salvo para resistir a recarregamentos.

## 5.9 — Navegação reorganizada

- As 15 abas agora usam sprites 8-bit próprios e ficam divididas em Cuidados, Atividades, Serviços e Treinador.
- A barra lateral usa duas colunas no computador e duas linhas compactas no celular, reduzindo a rolagem.
- “Loja” foi renomeada para “PokéMart”.
- O ícone de Jogos também passou a ser o favicon do site.

## 5.8 — Egg Groups no Breeding

- Breeding agora exige um Egg Group compartilhado entre parceiros comuns.
- Pokémon do grupo `no-eggs`, pares sem gênero sem Ditto e dois Ditto são bloqueados com uma explicação clara.
- Ditto continua funcionando como coringa para espécies aptas a produzir ovos.
- Cartões exibem os Egg Groups e a seleção ganhou o filtro “Somente compatíveis”.

## 5.7 — Missões por tipagem

- Adicionadas 180 missões permanentes: cinco metas de captura e cinco de batalha para cada um dos 18 tipos.
- Metas progressivas de 5, 10, 25, 50 e 100 ações por tipagem.
- Recompensas crescentes com PokéCoins e Doces de EXP até os tamanhos G e GG.
- Vitórias registram as tipagens dos Pokémon que participaram da equipe vencedora.
- Novas abas “Captura por tipo”, “Batalha por tipo” e “Concluídas”.
- Filtro adicional permite exibir somente uma tipagem escolhida.
- Progresso de captura anterior é recuperado a partir dos Pokémon atualmente possuídos.

## 5.6 — Doces de EXP

- XP direto removido das recompensas de missões fixas, diárias e de ginásio.
- Adicionados Doces de EXP PP, P, M, G e GG com valores de 100, 800, 3.000, 10.000 e 30.000 XP.
- Doces recebidos são guardados na Mochila e podem ser entregues a qualquer Pokémon dos Quartos ou Boxes.
- Nova aba de Doces de EXP adicionada à tela de Quartos para uso rápido.
- Recompensas das missões agora exibem sprites dos itens.
- Missões antigas ainda não resgatadas são migradas automaticamente para doces equivalentes.

## 5.5 — Incenso acumulável

- Contador do Incenso adicionado ao Quintal, com atualização em tempo real.
- Cada Incenso utilizado acrescenta uma hora à duração que já estiver ativa.
- Até 12 horas podem ser acumuladas sem desperdiçar unidades além do limite.
- Enquanto ativo, o Incenso continua gerando uma aparição a cada cinco minutos.

## 5.4 — Nomes após evolução

- Pokémon sem apelido personalizado agora recebem o nome da espécie evoluída.
- Apelidos escolhidos pelo jogador continuam preservados durante todas as evoluções.
- Migração automática corrige Pokémon já evoluídos em saves anteriores, como Squirtle exibido sobre o sprite de Wartortle.

## 5.3 — Formas regionais

- Formas oficiais de Alola, Galar, Hisui e Paldea adicionadas ao conjunto de aparições do Quintal.
- Nomes, tipagens, raridades e sprites próprios preservados após aparição, captura e evolução.
- Rotas regionais especiais adicionadas, incluindo Marowak de Alola, Raichu de Alola, Weezing de Galar e iniciais de Hisui.
- Famílias regionais agora evoluem para suas formas corretas e evoluções exclusivas, como Perrserker, Sirfetch'd, Cursola, Obstagoon, Sneasler, Overqwil e Clodsire.
- Escolha de evolução por pedra corrigida quando um mesmo Pokémon possui mais de um destino possível.
- Status atualizado para exibir a tipagem após a evolução regional.

## 5.2 — Expedições paralelas

- Passe de Expedição consumível por 2.800 PokéCoins, reduzindo uma missão de duas para uma hora.
- Duas expedições simultâneas, uma por evento e com Pokémon diferentes.
- Recompensas escaláveis de XP, PokéCoins e itens conforme dificuldade, resultado e chance calculada.
- Bônus de EXP dos móveis aplicado ao Pokémon que participou da expedição.
- Prévia separada de itens/progresso e Pokémon resgatáveis, com silhuetas para espécies ainda não registradas.
- Seleção visual de Breeding com cartões, pesquisa e filtros por gênero e tipagem.
- Código `EXPEDIÇÕES` oferecendo dois Passes de Expedição.

## 5.1 — Breeding, gênero e resgates

- Expedições agora podem resgatar até 20 Pokémon, com quantidade maior em chances altas e espécies repetidas.
- Gênero adicionado a todos os Pokémon, respeitando a proporção oficial disponível na PokéAPI.
- Centro de Breeding com pares macho/fêmea e Ditto como coringa.
- Produção de ovo em 24 horas, alimentação horária por berry compatível reduzindo duas horas e incubação de seis horas.
- Novos filhotes nascem no nível 1 e podem herdar IV dos pais.
- Slider de volume para controlar a intensidade dos gritos Pokémon.

## 5.0 — Identidade, títulos e expedições

- Sprites oficiais dos 18 tipos adicionados aos visitantes do Quintal, cartões de Quartos/Boxes e todas as telas de Status Pokémon.
- Filtro “Meus títulos” adicionado ao Perfil para listar somente títulos já desbloqueados.
- Nome personalizado do treinador, com migração para saves anteriores e edição pelo Perfil.
- Títulos permanentes, retroativos e equipáveis por tipagem, coleção, captura, batalha, ginásios, cuidados, arcade e eventos.
- Hierarquias próprias para os 18 tipos e títulos especiais como Eeveenático e Campeão de Kanto.
- Evoluções do Eevee corrigidas: cinco pedras, Espeon/Umbreon por amizade e horário, e Sylveon por amizade e golpe Fada.
- Seletor de evolução mostrando cada requisito cumprido ou pendente.
- Eventos Tempestade de Gelo (nível 10) e Emergência no Laboratório (nível 20).
- Expedições repetíveis de duas horas, um Pokémon por vez, com previsão de chance, compatibilidade, risco e passagem offline.
- Fracasso, ferimentos, sucesso parcial, sucesso e grande sucesso definidos antes do envio e protegidos contra recarregamento.
- Centro de Resgate para até 20 Pokémon, com captura individual usando berries, Pokébolas, chance shiny e apelidos.
- Histórico e estatísticas de expedições adicionados.

## 4.0 — Ginásios e missões

- Missões separadas nas abas Fixas, Ginásios e Diárias, com recompensas progressivas e recuperação de vitórias anteriores.
- Novas missões diárias de captura, tipagem, treinadores, alimentação, brincadeiras e minigames; líderes não aparecem mais na rotação diária.
- Estojo com as oito insígnias de Kanto na casa, reconhecendo automaticamente as vitórias já registradas no save.
- Todos os oito ginásios de Kanto, de Brock a Giovanni, com equipes completas.
- Recompensas crescentes por ginásio e Master Ball garantida após Giovanni.
- Master Ball oficial com captura de 100% para qualquer Pokémon.
- Dinheiro e experiência variam conforme espécie, experiência-base e nível do adversário.
- Batalhas reduzem consideravelmente fome, felicidade e higiene da equipe utilizada.
- Três missões permanentes e cinco missões diárias rotativas.
- Missões de captura por tipagem, treinadores, minigames e ginásios.
- Recompensas de missões com PokéCoins, experiência, berries e Pokébolas.

## 3.8 — Códigos promocionais

- Nova aba para resgatar códigos uma vez por jornada.
- `RELEASE1500`: concede 1.500 PokéCoins.
- `WELCOME`: concede um Dratini shiny, enviado para um quarto livre ou para a Box.

## 3.7 — Pacote diário

- Presente diário ampliado para 10 Pokébolas, 6 Grandes Bolas e 2 Ultra Bolas.
- Seis berries sorteadas individualmente, permitindo combinações e repetições.
- A recompensa diária em dinheiro foi aumentada para 250 PokéCoins.

## 3.6 — Temporizador de sono

- Contagem regressiva de sono atualizada a cada segundo.
- Horário calculado conforme a energia atual e o tipo de cama instalada.
- Exibição preservada após fechar e reabrir o jogo.

## 3.5 — Pokédex completa

- As 1.025 espécies principais podem aparecer no quintal, incluindo lendários e míticos.
- Taxas de captura baseadas nos valores oficiais da PokéAPI.
- Aparição ponderada por captura, categoria, tipagem, clima, horário e temperatura.
- Pseudo-lendários, lendários e míticos possuem probabilidades especiais extremamente baixas.
- Incenso ampliado para uma hora, com aparições fixas a cada cinco minutos.

## 3.4 — Presente diário

- Contagem regressiva em tempo real até o próximo presente.
- Botão desabilitado e acinzentado depois do resgate.
- Liberação automática à meia-noite no horário local do navegador.

## 3.3 — Amizade e depósito

- Depósito para guardar móveis inacessíveis e recolocá-los no centro do quarto.
- Aba de móveis separada, mantendo todos os móveis comprados recuperáveis.
- Amizade individual de 0 a 100 para cada Pokémon.
- Brincadeiras, alimentação, minigames e vitórias aumentam amizade.
- Derrotas e necessidades críticas prolongadas diminuem amizade.
- Evoluções com condições especiais passam a ser liberadas no nível 35.

## 3.2 — Status e evolução manual

- Tela de status individual para Pokémon dos quartos e das Boxes, com IV, EV, XP e necessidades.
- Evoluções por nível consultadas na PokéAPI e executadas somente pelo botão do treinador.
- Itens evolutivos agora ficam na Mochila e podem ser usados no Pokémon escolhido.
- Paleta completa dos 18 tipos aplicada aos golpes.
- Móveis maiores e todos os móveis comprados continuam reposicionáveis.

## 3.1 — Quartos e equipes

- Sprite do incenso corrigido com recurso oficial da PokéAPI.
- Móveis redimensionados e modo de organização por arrastar, com posições salvas.
- Contadores de PokéCoins e Pokébolas ampliados.
- Tabela interna de clima e tipos favorecidos.
- Indicador de captura corrigido para um círculo real.
- Ginásios permitem escolher uma equipe de até três Pokémon, com troca após desmaio.
- Poção, Super Poção, Hiper Poção, Poção Máxima e Restauração Total adicionadas à loja.
- Decaimento de fome, energia, felicidade e higiene mais rápido; durante o sono, o desgaste é reduzido pela metade.

## 3.0 — Mundo vivo

- Raridade de aparição e dificuldade de captura fixas por espécie.
- Aparições influenciadas por dia, noite, chuva, tempestade, nebulosidade e temperatura.
- Pokémon de Gelo favorecidos abaixo de 20 °C e formas noturnas específicas no catálogo.
- Chance shiny fixa de 1 em 200 por aparição, preservada após a captura.
- Gritos oficiais fornecidos pela PokéAPI em encontros e batalhas, com controle de som.
- Incenso de 1 hora com aparições a cada 5 minutos; intervalo normal de 10–90 minutos.
- Captura com bandeja de Pokébolas, indicador verde/amarelo/vermelho, percentual e animação.
- Berries compatíveis com a tipagem destacadas e bônus refletido imediatamente na chance.
- Cama melhorada reduzindo a recuperação completa de energia de oito para quatro horas.
- Cenários próprios de quarto diurno/noturno e quintal em pixel art.
- Móveis comprados exibidos no quarto com sprites PNG transparentes.
- Guia interno cobrindo cuidados, captura, aparições, móveis, loja, minigames e batalhas.
- Fonte de interface atualizada para melhorar a distinção entre números e letras.

## 2.3 — Tempo e sono

- Corrigida a recuperação de energia durante o sono.
- Parceiro principal novamente vinculado ao Pokémon correspondente nos quartos após carregar o save.
- Fome, felicidade e higiene passam com o tempo aberto e offline, em ritmo reduzido durante o sono.
- Pokémon permanece dormindo quando a energia chega a 100, até ser acordado pelo jogador.

## 2.2 — PokéMart

- Loja dividida em Berries, Captura, Cuidados, Evolução e Móveis.
- Catálogo oficial completo de itens evolutivos da PokéAPI, mais itens clássicos equipáveis usados em evolução.
- Uma berry associada a cada um dos 18 tipos.
- Cinco móveis ambientais com bônus cumulativos de experiência.
- Aviso de localização e correções de sprites, Boxes e captura.

## 2.1 — Jornadas

- Tela de título para continuar ou iniciar uma jornada.
- Confirmação antes de apagar um save.
- Apelidos para Pokémon recém-capturados.
- Recuperação de capturas antigas nas Boxes.

## 2.0 — Expansão

- Inventário, quartos, Boxes e sono em tempo real.
- Encontros acumulados durante períodos offline.
- Captura com raridade, berries por tipo e três classes de Pokébola.
- Golpes oficiais aprendidos por nível e efetividade de tipos.

## 1.0 — Retro Edition

- Cuidados, minigames, PokéMart, Pokédex, batalhas e clima local.
- Interface inspirada nos jogos portáteis clássicos.
