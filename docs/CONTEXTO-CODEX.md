# Contexto compacto para continuar o Pokégotchi

Leia este arquivo antes de trabalhar no projeto. Ele substitui a necessidade de
carregar toda a conversa antiga.

## Projeto

- Nome: **Pokégotchi**.
- Repositório: `https://github.com/zapinhor/Pokegotchi`.
- Produção: `https://zapinhor.github.io/Pokegotchi/`.
- Stack: HTML, CSS e JavaScript puro com módulos ES; sem backend.
- Dados/sprites/gritos: PokéAPI. Clima: Open-Meteo.
- Persistência: `localStorage`, incluindo passagem de tempo offline.
- Estética: Pokémon retrô/Game Boy Color, pixel art, responsivo.
- Projeto de fã sem fins comerciais.

## Arquivos principais

- `index.html`: estrutura da aplicação.
- `css/styles.css` e `css/retro.css`: layout e identidade visual.
- `js/app.js`: interface e orquestração principal.
- `js/api.js`: consultas e normalização da PokéAPI.
- `js/storage.js`: save, migrações e estado persistido.
- `js/data.js`: catálogos e regras estáticas.
- `js/progression.js`: progressão.
- `js/games.js`: minigames.
- `js/wild-catalog.js`: catálogo de aparições.
- `js/regional-forms.js`: formas e evoluções regionais.
- `assets/backgrounds/` e `assets/furniture/`: cenários e móveis.
- `CHANGELOG.md`: versões publicadas; versão atual registrada: **5.7**.

## Estado funcional atual

O jogo já possui cuidados e sono real, inventário, seis quartos e Boxes,
minigames, PokéMart, batalha por tipagem, oito ginásios de Kanto, missões,
títulos, clima, todas as 1.025 espécies principais, formas regionais, shiny
1/200, captura com berries e quatro Pokébolas, Incenso acumulável, eventos,
duas expedições simultâneas, resgates, gêneros, Breeding, ovos, doces de EXP,
evolução manual, móveis reposicionáveis, presente diário e códigos.

Para detalhes de cada versão, consultar `CHANGELOG.md`. Para decisões e ideias
da conversa, consultar `docs/HISTORICO.md`.

## Regras importantes que não devem regredir

- Não substituir apelidos personalizados durante evolução; atualizar o nome
  automaticamente apenas quando era o nome padrão da espécie anterior.
- Energia recupera somente dormindo: cerca de 8 h com cama comum e 4 h com cama
  melhorada. Desgaste durante o sono fica pela metade.
- Shiny: chance fixa de 1 em 200.
- Incenso: +1 h por unidade, máximo de 12 h, encontro a cada 5 min.
- Aparição normal: intervalo de 10–90 min; raridade fixa por espécie e ponderada
  por clima, horário, temperatura e categoria.
- Gelo favorecido abaixo de 20 °C.
- Master Ball captura qualquer Pokémon com 100% de chance.
- Itens evolutivos comprados vão para a Mochila e são aplicados manualmente.
- Evoluções por nível são manuais; condições especiais não representáveis usam
  nível 35 como alternativa.
- Ginásios usam equipe de até 3 Pokémon; Elite dos Quatro não está autorizada.
- Missões recompensam Doces de EXP em vez de XP direto.
- Expedições duram 2 h; Passe consumível reduz somente uma para 1 h; até duas
  expedições simultâneas com Pokémon diferentes.
- Breeding: ovo em 24 h, berry horária reduz 2 h, incubação em 6 h.
- Não adicionar música de fundo; somente gritos da PokéAPI com volume ajustável.

## Pendências aprovadas ou discutidas

1. **Egg Groups:** `js/api.js` já lê `eggGroups`, mas o Breeding ainda precisa
   validar grupo compartilhado, `no-eggs`, sem gênero, Ditto e dois Ditto.
2. **Navegação:** criar/aprovar sprites 8-bit para as abas laterais. Para a
   Pokédex, usar Rotom Dex como referência. O usuário pediu explicitamente para
   não alterar o site antes de aprovar os sprites.
3. **Save portátil:** exportar/importar save ainda é ideia, não implementação.
4. **Login/nuvem:** apenas discutido; exige serviço externo e decisão técnica.
5. **Analytics:** não implementado.

## Forma de trabalhar

- Antes de editar, conferir `git status`; preservar alterações do usuário.
- Usar `apply_patch` para alterações manuais.
- Atualizar `CHANGELOG.md` e a Ajuda quando uma funcionalidade afetar o jogador.
- Validar sintaxe dos módulos JavaScript e testar a interface localmente.
- Para pedidos de implementação, publicar em `main` somente quando o usuário
  tiver pedido a mudança no site; confirmar o GitHub Pages depois do push.
- Não tratar ideias em `docs/HISTORICO.md` como implementadas sem conferir o
  código e o changelog.

## Prompt recomendado para uma nova tarefa

> Continue o desenvolvimento do Pokégotchi neste repositório. Leia primeiro
> `docs/CONTEXTO-CODEX.md`, depois confira `CHANGELOG.md`, `README.md` e o estado
> atual do Git. Preserve o save existente e as migrações. Minha alteração agora
> é: [descreva aqui].

