const KEY='pokeninho-save-v1';
export function load(){try{return JSON.parse(localStorage.getItem(KEY))}catch{return null}}
export function save(state){state.lastSaved=Date.now();localStorage.setItem(KEY,JSON.stringify(state))}
export function clear(){localStorage.removeItem(KEY)}
export function fresh(id,nickname,name){return{version:1,lastSaved:Date.now(),createdAt:Date.now(),pokemon:{id,name,nickname,level:5,xp:0,health:100,hunger:86,energy:82,happiness:88,hygiene:90,iv:Math.floor(Math.random()*11)+20,ev:0},coins:180,inventory:{'poke-ball':5,'oran':3},furniture:[],caught:[id],seen:[id],badges:[],nextSpawn:Date.now()+180000,wild:null,weather:{code:0,temp:null,label:'Céu limpo',icon:'☀️',day:true,source:'estimado'},dailyClaim:0}}
export function applyOffline(s){const mins=Math.min((Date.now()-(s.lastSaved||Date.now()))/60000,720);if(mins<1)return null;const p=s.pokemon;p.hunger=Math.max(0,p.hunger-mins*.08);p.energy=Math.max(0,p.energy-mins*.045);p.happiness=Math.max(0,p.happiness-mins*(s.furniture.includes('toy-box')?.018:.03));p.hygiene=Math.max(0,p.hygiene-mins*.025);return Math.floor(mins)}
