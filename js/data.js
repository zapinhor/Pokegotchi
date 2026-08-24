export const STARTERS=[1,4,7,885,39,393,443,215,778,133,25];
export const POKEMON_NAMES={1:'Bulbasaur',4:'Charmander',7:'Squirtle',885:'Dreepy',39:'Jigglypuff',393:'Piplup',443:'Gible',215:'Sneasel',778:'Mimikyu',133:'Eevee',25:'Pikachu'};
export const EVOLUTIONS={1:{level:16,to:2,name:'Ivysaur'},2:{level:32,to:3,name:'Venusaur'},4:{level:16,to:5,name:'Charmeleon'},5:{level:36,to:6,name:'Charizard'},7:{level:16,to:8,name:'Wartortle'},8:{level:36,to:9,name:'Blastoise'},885:{level:50,to:886,name:'Drakloak'},886:{level:60,to:887,name:'Dragapult'},39:{item:'moon-stone',to:40,name:'Wigglytuff'},393:{level:16,to:394,name:'Prinplup'},394:{level:36,to:395,name:'Empoleon'},443:{level:24,to:444,name:'Gabite'},444:{level:48,to:445,name:'Garchomp'},215:{item:'razor-claw',to:461,name:'Weavile'},133:{item:'water-stone',to:134,name:'Vaporeon'},25:{item:'thunder-stone',to:26,name:'Raichu'}};
export const SHOP=[
 {id:'oran',name:'Oran Berry',icon:'🫐',price:18,desc:'+18 saciedade',type:'food',value:18},
 {id:'sitrus',name:'Sitrus Berry',icon:'🍊',price:35,desc:'+30 saciedade e +5 saúde',type:'food',value:30},
 {id:'poke-ball',name:'Pokébola',icon:'🔴',price:45,desc:'Para capturar visitantes',type:'ball',value:1},
 {id:'great-ball',name:'Great Ball',icon:'🔵',price:90,desc:'Chance de captura maior',type:'ball',value:1},
 {id:'thunder-stone',name:'Pedra do Trovão',icon:'⚡',price:280,desc:'Evolui Pokémon compatíveis',type:'evolution'},
 {id:'water-stone',name:'Pedra da Água',icon:'💧',price:280,desc:'Evolui Pokémon compatíveis',type:'evolution'},
 {id:'moon-stone',name:'Pedra da Lua',icon:'🌙',price:280,desc:'Evolui Pokémon compatíveis',type:'evolution'},
 {id:'razor-claw',name:'Garra Afiada',icon:'🗡️',price:320,desc:'Item raro de evolução',type:'evolution'},
 {id:'soft-bed',name:'Cama Snorlax',icon:'🛏️',price:240,desc:'+25% de recuperação de sono',type:'furniture'},
 {id:'toy-box',name:'Baú de Brinquedos',icon:'🧸',price:220,desc:'Felicidade cai mais devagar',type:'furniture'},
 {id:'treadmill',name:'Esteira de EV',icon:'🏃',price:420,desc:'+1 EV após batalhas',type:'furniture'},
 {id:'training-screen',name:'Tela de IV',icon:'🖥️',price:600,desc:'Pequena chance de melhorar IV',type:'furniture'}];
export const WILD_POOL=[10,16,19,29,32,43,52,54,58,63,66,74,92,109,129,172,175,183,198,200,280,300,333,349,425,447,519,659,661,704,742,819,840];
export const LEADERS=[{name:'Brock',id:95,level:12,badge:'Rocha'},{name:'Misty',id:121,level:20,badge:'Cascata'},{name:'Lt. Surge',id:26,level:28,badge:'Trovão'},{name:'Erika',id:45,level:36,badge:'Arco-íris'}];
export const sprite=id=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
