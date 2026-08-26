export const STAT_KEYS=['hp','attack','defense','specialAttack','specialDefense','speed'];
export const STAT_LABELS={hp:'HP',attack:'Ataque',defense:'Defesa',specialAttack:'Ataque Esp.',specialDefense:'Defesa Esp.',speed:'Velocidade'};

export const NATURES=[
 {id:'hardy',name:'Hardy',personality:'determinada',likes:'action'},
 {id:'lonely',name:'Lonely',up:'attack',down:'defense',personality:'sensível',likes:'caring'},
 {id:'brave',name:'Brave',up:'attack',down:'speed',personality:'corajosa',likes:'action'},
 {id:'adamant',name:'Adamant',up:'attack',down:'specialAttack',personality:'decidida',likes:'action'},
 {id:'naughty',name:'Naughty',up:'attack',down:'specialDefense',personality:'travessa',likes:'playful'},
 {id:'bold',name:'Bold',up:'defense',down:'attack',personality:'ousada',likes:'action'},
 {id:'docile',name:'Docile',personality:'dócil',likes:'caring'},
 {id:'relaxed',name:'Relaxed',up:'defense',down:'speed',personality:'tranquila',likes:'calm'},
 {id:'impish',name:'Impish',up:'defense',down:'specialAttack',personality:'brincalhona',likes:'playful'},
 {id:'lax',name:'Lax',up:'defense',down:'specialDefense',personality:'despreocupada',likes:'calm'},
 {id:'timid',name:'Timid',up:'speed',down:'attack',personality:'tímida',likes:'caring'},
 {id:'hasty',name:'Hasty',up:'speed',down:'defense',personality:'apressada',likes:'action'},
 {id:'serious',name:'Serious',personality:'séria',likes:'calm'},
 {id:'jolly',name:'Jolly',up:'speed',down:'specialAttack',personality:'alegre',likes:'playful'},
 {id:'naive',name:'Naive',up:'speed',down:'specialDefense',personality:'ingênua',likes:'caring'},
 {id:'modest',name:'Modest',up:'specialAttack',down:'attack',personality:'modesta',likes:'calm'},
 {id:'mild',name:'Mild',up:'specialAttack',down:'defense',personality:'gentil',likes:'caring'},
 {id:'quiet',name:'Quiet',up:'specialAttack',down:'speed',personality:'quieta',likes:'calm'},
 {id:'bashful',name:'Bashful',personality:'reservada',likes:'caring'},
 {id:'rash',name:'Rash',up:'specialAttack',down:'specialDefense',personality:'impulsiva',likes:'action'},
 {id:'calm',name:'Calm',up:'specialDefense',down:'attack',personality:'calma',likes:'calm'},
 {id:'gentle',name:'Gentle',up:'specialDefense',down:'defense',personality:'amável',likes:'caring'},
 {id:'sassy',name:'Sassy',up:'specialDefense',down:'speed',personality:'atrevida',likes:'playful'},
 {id:'careful',name:'Careful',up:'specialDefense',down:'specialAttack',personality:'cuidadosa',likes:'caring'},
 {id:'quirky',name:'Quirky',personality:'excêntrica',likes:'playful'}
];

const bounded=(value,min,max)=>Math.max(min,Math.min(max,Math.floor(Number(value)||0)));
export const natureFor=id=>NATURES.find(n=>n.id===id)||NATURES[0];
export const randomNature=()=>NATURES[Math.floor(Math.random()*NATURES.length)].id;
export const randomIVs=(legacy=null)=>Object.fromEntries(STAT_KEYS.map(key=>[key,bounded(legacy==null?Math.floor(Math.random()*32):Number(legacy)+Math.floor(Math.random()*7)-3,0,31)]));
export function distributeLegacyEvs(total=0){let remaining=bounded(total,0,510);const evs=Object.fromEntries(STAT_KEYS.map(key=>[key,0]));let index=0;while(remaining>0){const key=STAT_KEYS[index++%STAT_KEYS.length],amount=Math.min(4,remaining,252-evs[key]);if(amount>0){evs[key]+=amount;remaining-=amount}if(index>2000)break}return evs}
export const totalEvs=evs=>STAT_KEYS.reduce((sum,key)=>sum+bounded(evs?.[key],0,252),0);
export const averageIv=ivs=>Math.round(STAT_KEYS.reduce((sum,key)=>sum+bounded(ivs?.[key],0,31),0)/STAT_KEYS.length);
export function normalizeTraining(p){if(!p.ivs)p.ivs=randomIVs(Number.isFinite(p.iv)?p.iv:null);if(!p.evs)p.evs=distributeLegacyEvs(Number.isFinite(p.ev)?p.ev:0);for(const key of STAT_KEYS){p.ivs[key]=bounded(p.ivs[key],0,31);p.evs[key]=bounded(p.evs[key],0,252)}let overflow=Math.max(0,totalEvs(p.evs)-510);for(const key of [...STAT_KEYS].reverse())if(overflow){const cut=Math.min(overflow,p.evs[key]);p.evs[key]-=cut;overflow-=cut}p.nature=natureFor(p.nature||randomNature()).id;p.iv=averageIv(p.ivs);p.ev=totalEvs(p.evs);p.friendship=bounded(p.friendship??70,0,255);return p}
export function calculatedStats(base,p){normalizeTraining(p);const level=bounded(p.level||1,1,100),nature=natureFor(p.nature),result={};for(const key of STAT_KEYS){const baseValue=bounded(base?.[key],1,255),inside=2*baseValue+p.ivs[key]+Math.floor(p.evs[key]/4),raw=Math.floor(inside*level/100);if(key==='hp')result.hp=Number(p.id)===292?1:raw+level+10;else{const modifier=nature.up===key?1.1:nature.down===key?0.9:1;result[key]=Math.floor((raw+5)*modifier)}}return result}
export function enemyTraining(level){const iv=Math.min(31,8+Math.floor(level/4)),ev=Math.min(252,Math.max(0,(level-15)*3));return{level,ivs:Object.fromEntries(STAT_KEYS.map(key=>[key,iv])),evs:Object.fromEntries(STAT_KEYS.map(key=>[key,ev])),nature:'hardy'}}
export function grantEvs(p,yields={}){normalizeTraining(p);let room=510-totalEvs(p.evs),gained=0;for(const key of STAT_KEYS){if(room<=0)break;const amount=Math.min(room,252-p.evs[key],Math.max(0,Math.floor(yields[key]||0)));p.evs[key]+=amount;room-=amount;gained+=amount}p.ev=totalEvs(p.evs);return gained}
export function battleDamage({level,power,attack,defense,stab=1,effectiveness=1,critical=1,random=.925}){if(!power||!effectiveness)return 0;const base=Math.floor(Math.floor(Math.floor((2*level/5+2)*power*attack/Math.max(1,defense))/50)+2);return Math.max(1,Math.floor(base*stab*effectiveness*critical*random))}
