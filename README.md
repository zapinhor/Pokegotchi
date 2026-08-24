# Pokégotchi

Um Tamagotchi Pokémon feito apenas com HTML, CSS e JavaScript. Cuide do seu parceiro, jogue minigames, batalhe, capture visitantes no quintal e acompanhe o clima da sua região.

A interface **Retro Edition** combina sprites pixelados, painéis de batalha clássicos e uma moldura inspirada no Game Boy Color.

## Recursos

- 11 Pokémon iniciais, sprites públicos da PokéAPI e Pokédex local
- Necessidades, passagem de tempo offline, níveis, XP e evoluções
- Mochila com comida, brinquedos, limpeza, Pokébolas e presentes diários
- Até seis quartos ativos e armazenamento em Boxes
- Sono em tempo real: oito horas para recuperar de 0 a 100 de energia
- Pegar Berries, Memória Pokémon e Treino de Ataque
- PokéMart com consumíveis, itens evolutivos e móveis para IV/EV
- Batalhas com golpes reais, aprendizado por nível e efetividade de tipos
- Capturas com berries, três Pokébolas e encontros offline acumulados
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
