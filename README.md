# Pokégotchi

Um Tamagotchi Pokémon feito apenas com HTML, CSS e JavaScript. Cuide do seu parceiro, jogue minigames, batalhe, capture visitantes no quintal e acompanhe o clima da sua região.

A interface **Retro Edition** combina sprites pixelados, painéis de batalha clássicos e uma moldura inspirada no Game Boy Color.

## Recursos

- 11 Pokémon iniciais, sprites públicos da PokéAPI e Pokédex local
- Necessidades, passagem de tempo offline, níveis, XP e evoluções
- Formas regionais de Alola, Galar, Hisui e Paldea em aparições e rotas evolutivas
- Mochila com comida, brinquedos, limpeza, Pokébolas e presentes diários
- Até seis quartos ativos e armazenamento em Boxes
- Sono em tempo real: oito horas para recuperar de 0 a 100 de energia
- Cama melhorada que reduz a recuperação completa para aproximadamente quatro horas
- Pegar Berries, Memória Pokémon e Treino de Ataque
- PokéMart com consumíveis, itens evolutivos e móveis para IV/EV
- Batalhas com golpes reais, aprendizado por nível e efetividade de tipos
- Todas as 1.025 espécies principais, com raridades baseadas na PokéAPI e aparições influenciadas por clima, horário e temperatura
- Capturas com berries por tipagem, quatro Pokébolas, feedback visual e encontros offline acumulados
- Pokémon shiny com chance de 1 em 200 e sprites shiny preservados no save
- Incenso de 1 hora, gerando uma aparição a cada 5 minutos
- Gritos oficiais da PokéAPI em encontros e batalhas, com volume ajustável e sem música de fundo
- Cenários diurno/noturno e móveis comprados visíveis no quarto
- Guia de ajuda acessível pelo botão `?`
- Móveis reposicionáveis por arrastar e posições preservadas no save
- Equipe de até três Pokémon contra as equipes completas dos oito líderes de Kanto
- Recompensas escaláveis por batalha e Master Ball garantida após Giovanni
- Missões fixas progressivas, desafios dos oito ginásios e cinco missões diárias rotativas
- Perfil com nome personalizado e títulos equipáveis por tipagem, coleção, batalhas, cuidados e conquistas
- Evoluções completas do Eevee por pedras, amizade, horário e golpe do tipo Fada
- Eventos Tempestade de Gelo e Emergência no Laboratório
- Até duas expedições simultâneas, recompensas escaláveis e Passe consumível para reduzir a duração pela metade
- Prévia de itens e espécies resgatáveis, com silhuetas para Pokémon ainda não registrados
- Gêneros oficiais e Centro de Breeding com Ditto, produção de ovos, berries redutoras e incubação offline
- Poções oficiais da PokéAPI disponíveis na loja e utilizáveis pela Mochila
- Save automático e privado em `localStorage`
- Layout responsivo, pronto para celular e desktop

## Executar localmente

Por usar módulos JavaScript, abra a pasta através de um servidor local. Por exemplo:

```bash
python -m http.server 8080
```

Então acesse `http://localhost:8080`.

## Publicar no GitHub Pages

1. Crie um repositório e envie estes arquivos para a branch `main`.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions**.
4. O fluxo incluído no projeto publicará cada atualização da branch `main`.

Não há chaves secretas nem backend. Geolocalização é solicitada apenas para consultar o clima na API gratuita Open-Meteo; se negada, o ciclo dia/noite usa o relógio do aparelho.

## Créditos

Pokémon e nomes relacionados pertencem à Nintendo, Game Freak e The Pokémon Company. Projeto de fã sem fins comerciais. Dados e sprites via [PokéAPI](https://pokeapi.co/); clima via [Open-Meteo](https://open-meteo.com/).
