export const TYPE_LABELS={normal:'Normal',fire:'Fogo',water:'Água',grass:'Planta',electric:'Elétrico',ice:'Gelo',fighting:'Lutador',poison:'Venenoso',ground:'Terrestre',flying:'Voador',psychic:'Psíquico',bug:'Inseto',rock:'Pedra',ghost:'Fantasma',dragon:'Dragão',dark:'Sombrio',steel:'Aço',fairy:'Fada'};

const finalTypeTitles={normal:['Ícone da Versatilidade','Lenda Cotidiana'],fire:['Senhor das Chamas','Coração Vulcânico'],water:['Guardião dos Mares','Lenda do Oceano'],grass:['Guardião da Floresta','Espírito da Natureza'],electric:['Condutor Supremo','Tempestade Viva'],ice:['Guardião da Geada','Coração Glacial'],fighting:['Campeão Marcial','Punho Lendário'],poison:['Mestre dos Antídotos','Toxina Suprema'],ground:['Guardião da Terra','Abalo Lendário'],flying:['Senhor dos Céus','Horizonte Infinito'],psychic:['Mestre da Mente','Oráculo Pokémon'],bug:['Guardião do Enxame','Monarca dos Insetos'],rock:['Escultor de Montanhas','Rocha Eterna'],ghost:['Guardião do Além','Lenda Espectral'],dragon:['Domador de Dragões','Herdeiro Dracônico'],dark:['Senhor das Sombras','Eclipse Eterno'],steel:['Forjador Supremo','Coração de Aço'],fairy:['Guardião Encantado','Lenda Feérica']};
const typeRanks=[{count:3,level:10,prefix:'Iniciante em'},{count:5,level:20,prefix:'Estudioso de'},{count:8,level:30,prefix:'Especialista em'},{count:12,level:40},{count:18,level:50}];

export function typeTitles(){return Object.entries(TYPE_LABELS).flatMap(([type,label])=>typeRanks.map((rank,i)=>({id:`type-${type}-${i+1}`,category:'Tipos',name:i<3?`${rank.prefix} ${label}`:finalTypeTitles[type][i-3],description:`Tenha ${rank.count} espécies ${label} no nível ${rank.level} ou superior.`,check:({owned})=>{const species=new Set(owned.filter(p=>p.types?.includes(type)&&p.level>=rank.level).map(p=>p.id));return{value:species.size,target:rank.count}}})))}

export const SPECIAL_TITLES=[
 {id:'capture-10',category:'Captura',name:'Capturador Iniciante',description:'Capture 10 Pokémon.',stat:'captures',target:10},
 {id:'capture-50',category:'Captura',name:'Treinador de Campo',description:'Capture 50 Pokémon.',stat:'captures',target:50},
 {id:'capture-100',category:'Captura',name:'Especialista em Captura',description:'Capture 100 Pokémon.',stat:'captures',target:100},
 {id:'capture-250',category:'Captura',name:'Mestre das Pokébolas',description:'Capture 250 Pokémon.',stat:'captures',target:250},
 {id:'capture-500',category:'Captura',name:'Lenda da Captura',description:'Capture 500 Pokémon.',stat:'captures',target:500},
 {id:'battle-10',category:'Batalha',name:'Lutador Iniciante',description:'Vença 10 batalhas.',stat:'battleWins',target:10},
 {id:'battle-50',category:'Batalha',name:'Treinador Experiente',description:'Vença 50 batalhas.',stat:'battleWins',target:50},
 {id:'battle-100',category:'Batalha',name:'Especialista em Combate',description:'Vença 100 batalhas.',stat:'battleWins',target:100},
 {id:'battle-250',category:'Batalha',name:'Mestre da Arena',description:'Vença 250 batalhas.',stat:'battleWins',target:250},
 {id:'battle-500',category:'Batalha',name:'Invencível',description:'Vença 500 batalhas.',stat:'battleWins',target:500},
 {id:'gym-1',category:'Ginásios',name:'Desafiante de Kanto',description:'Conquiste sua primeira insígnia.',source:'badges',target:1},
 {id:'gym-3',category:'Ginásios',name:'Treinador de Ginásio',description:'Conquiste 3 insígnias.',source:'badges',target:3},
 {id:'gym-5',category:'Ginásios',name:'Especialista de Kanto',description:'Conquiste 5 insígnias.',source:'badges',target:5},
 {id:'gym-7',category:'Ginásios',name:'Mestre dos Ginásios',description:'Conquiste 7 insígnias.',source:'badges',target:7},
 {id:'gym-8',category:'Ginásios',name:'Campeão de Kanto',description:'Conquiste as 8 insígnias de Kanto.',source:'badges',target:8},
 {id:'care-100',category:'Cuidados',name:'Amigo dos Pokémon',description:'Alimente ou brinque 100 vezes.',source:'care',target:100},
 {id:'care-500',category:'Cuidados',name:'Coração Pokémon',description:'Realize 500 cuidados de alimentação ou brincadeira.',source:'care',target:500},
 {id:'arcade-50',category:'Arcade',name:'Jogador Frequente',description:'Vença 50 minigames.',stat:'games',target:50},
 {id:'arcade-150',category:'Arcade',name:'Mestre do Arcade',description:'Vença 150 minigames.',stat:'games',target:150},
 {id:'shiny-1',category:'Coleção',name:'Sorte de Principiante',description:'Capture um Pokémon shiny.',source:'shinies',target:1},
 {id:'shiny-5',category:'Coleção',name:'Caçador Shiny',description:'Capture 5 shinies.',source:'shinies',target:5},
 {id:'baby-3',category:'Coleção',name:'Amigo dos Pequenos',description:'Tenha 3 espécies de Pokémon bebê.',source:'babies',target:3},
 {id:'baby-all',category:'Coleção',name:'Mestre do Berçário',description:'Registre todos os Pokémon bebê selecionados.',source:'babies',target:19},
 {id:'eevee-all',category:'Coleção',name:'Eeveenático',description:'Registre Eevee e suas oito evoluções.',source:'eeveelutions',target:9},
 {id:'expedition-1',category:'Expedições',name:'Primeiros Socorros',description:'Conclua uma expedição.',source:'expeditions',target:1},
 {id:'expedition-10',category:'Expedições',name:'Explorador Persistente',description:'Conclua 10 expedições.',source:'expeditions',target:10},
 {id:'rescue-50',category:'Expedições',name:'Equipe de Resgate',description:'Resgate 50 Pokémon.',source:'rescues',target:50},
 {id:'great-10',category:'Expedições',name:'Missão Cumprida',description:'Consiga 10 grandes sucessos.',source:'greatSuccess',target:10},
 {id:'snow-complete',category:'Eventos',name:'Coração de Gelo',description:'Capture as cinco espécies da Tempestade de Gelo.',eventCollection:'snowstorm',target:5},
 {id:'lab-three',category:'Eventos',name:'Escolha Difícil',description:'Capture um inicial de Planta, Fogo e Água no evento.',source:'labTypes',target:3}
];

export const BABY_IDS=[172,173,174,175,236,238,239,240,298,360,406,433,438,439,440,446,447,458,848];
export const EEVEELUTION_IDS=[133,134,135,136,196,197,470,471,700];

const snowSpecies=[
 {id:361,tier:'common'},{id:712,tier:'common'},{id:215,tier:'uncommon'},{id:10103,tier:'rare'},{id:996,tier:'very-rare'}
];
const labSpecies=[
 ...[1,4,7,152,155,158].map(id=>({id,tier:'common'})),
 ...[252,255,258,387,390,393,495,498,501].map(id=>({id,tier:'rare'})),
 ...[650,653,656,722,725,728,810,813,816,906,909,912].map(id=>({id,tier:'very-rare'}))
];

export const EVENTS=[
 {id:'snowstorm',name:'Tempestade de Gelo',subtitle:'Pokémon isolados por uma nevasca precisam de ajuda.',recommendedLevel:10,duration:7200000,favored:['fire','fighting','rock','steel','ice'],disfavored:['grass','flying','ground','dragon'],species:snowSpecies,weights:{level:25,type:25,health:15,energy:15,hunger:8,happiness:7,friendship:5}},
 {id:'lab-emergency',name:'Emergência no Laboratório',subtitle:'Um acidente abriu as áreas de segurança e vários iniciais fugiram.',recommendedLevel:20,duration:7200000,favored:['electric','psychic','normal','flying','fairy'],disfavored:['ghost','dark','ground','poison'],species:labSpecies,weights:{level:20,type:20,health:10,energy:15,hunger:5,happiness:15,friendship:15}}
];

export function titleProgress(title,state,owned){if(title.check)return title.check({state,owned});let value=0;if(title.stat)value=state.missionStats?.[title.stat]||0;else if(title.source==='badges')value=state.badges?.length||0;else if(title.source==='care')value=(state.missionStats?.food||0)+(state.missionStats?.play||0);else if(title.source==='shinies')value=owned.filter(p=>p.shiny).length;else if(title.source==='babies')value=new Set(owned.filter(p=>BABY_IDS.includes(p.id)).map(p=>p.id)).size;else if(title.source==='eeveelutions')value=EEVEELUTION_IDS.filter(id=>state.caught?.includes(id)).length;else if(title.source==='expeditions')value=state.expeditionHistory?.length||0;else if(title.source==='rescues')value=state.eventStats?.rescued||0;else if(title.source==='greatSuccess')value=state.eventStats?.greatSuccess||0;else if(title.source==='labTypes')value=['grass','fire','water'].filter(type=>state.eventStats?.labTypes?.includes(type)).length;else if(title.eventCollection)value=title.target&&new Set(state.eventStats?.collections?.[title.eventCollection]||[]).size;return{value:Math.min(value,title.target),target:title.target}}

export const ALL_TITLES=()=>[...typeTitles(),...SPECIAL_TITLES];
