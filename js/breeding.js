export const EGG_GROUP_LABELS={amorphous:'Amorfo',bug:'Inseto',ditto:'Ditto',dragon:'Dragão',fairy:'Fada',field:'Campo',flying:'Voador',grass:'Planta','human-like':'Humanoide',mineral:'Mineral',monster:'Monstro','no-eggs':'Não descoberto',water1:'Água 1',water2:'Água 2',water3:'Água 3'};
export const eggGroupLabel=group=>EGG_GROUP_LABELS[group]||group;
export const eggGroupText=p=>(p?.eggGroups||[]).map(eggGroupLabel).join(' · ')||'Grupo desconhecido';

export function breedingCompatibility(a,b){
  if(!a||!b)return{compatible:false,reason:'Escolha os dois parceiros.'};
  if(a.uid===b.uid)return{compatible:false,reason:'Escolha dois Pokémon diferentes.'};
  const dittoA=Number(a.id)===132,dittoB=Number(b.id)===132;
  if(dittoA&&dittoB)return{compatible:false,reason:'Dois Ditto não podem produzir um ovo.'};
  const groupsA=Array.isArray(a.eggGroups)?a.eggGroups:[],groupsB=Array.isArray(b.eggGroups)?b.eggGroups:[];
  if(!groupsA.length||!groupsB.length)return{compatible:false,reason:'Os Egg Groups ainda não foram carregados.'};
  if(groupsA.includes('no-eggs')||groupsB.includes('no-eggs'))return{compatible:false,reason:'Pokémon do grupo Não descoberto não podem produzir ovos.'};
  if(dittoA||dittoB)return{compatible:true,child:dittoA?b:a,reason:'Compatível com Ditto.'};
  if(a.gender==='genderless'||b.gender==='genderless')return{compatible:false,reason:'Pokémon sem gênero precisam formar par com Ditto.'};
  if(!['male','female'].includes(a.gender)||!['male','female'].includes(b.gender)||a.gender===b.gender)return{compatible:false,reason:'O par precisa ter um macho e uma fêmea.'};
  const shared=groupsA.filter(group=>groupsB.includes(group));
  if(!shared.length)return{compatible:false,reason:'Os parceiros não compartilham um Egg Group.'};
  return{compatible:true,child:a.gender==='female'?a:b,shared,reason:`Egg Group compartilhado: ${shared.map(eggGroupLabel).join(' · ')}.`};
}
