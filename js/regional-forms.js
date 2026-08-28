// Formas regionais oficiais com IDs próprios na PokéAPI. Variações cosméticas
// (Totem, chapéus e modos temporários) não entram como espécies capturáveis.
const form=(id,base,name,region,types,extra={})=>({id,base,name,region,types,...extra});

export const REGIONAL_FORMS=[
 form(10091,19,'Rattata de Alola','Alola',['dark','normal']),form(10092,20,'Raticate de Alola','Alola',['dark','normal']),
 form(10100,26,'Raichu de Alola','Alola',['electric','psychic']),form(10101,27,'Sandshrew de Alola','Alola',['ice','steel']),
 form(10102,28,'Sandslash de Alola','Alola',['ice','steel']),form(10103,37,'Vulpix de Alola','Alola',['ice']),
 form(10104,38,'Ninetales de Alola','Alola',['ice','fairy']),form(10105,50,'Diglett de Alola','Alola',['ground','steel']),
 form(10106,51,'Dugtrio de Alola','Alola',['ground','steel']),form(10107,52,'Meowth de Alola','Alola',['dark']),
 form(10108,53,'Persian de Alola','Alola',['dark']),form(10109,74,'Geodude de Alola','Alola',['rock','electric']),
 form(10110,75,'Graveler de Alola','Alola',['rock','electric']),form(10111,76,'Golem de Alola','Alola',['rock','electric']),
 form(10112,88,'Grimer de Alola','Alola',['poison','dark']),form(10113,89,'Muk de Alola','Alola',['poison','dark']),
 form(10114,103,'Exeggutor de Alola','Alola',['grass','dragon']),form(10115,105,'Marowak de Alola','Alola',['fire','ghost']),

 form(10161,52,'Meowth de Galar','Galar',['steel']),form(10162,77,'Ponyta de Galar','Galar',['psychic']),
 form(10163,78,'Rapidash de Galar','Galar',['psychic','fairy']),form(10164,79,'Slowpoke de Galar','Galar',['psychic']),
 form(10165,80,'Slowbro de Galar','Galar',['poison','psychic']),form(10166,83,"Farfetch'd de Galar",'Galar',['fighting']),
 form(10167,110,'Weezing de Galar','Galar',['poison','fairy']),form(10168,122,'Mr. Mime de Galar','Galar',['ice','psychic']),
 form(10169,144,'Articuno de Galar','Galar',['psychic','flying'],{legendary:true}),
 form(10170,145,'Zapdos de Galar','Galar',['fighting','flying'],{legendary:true}),
 form(10171,146,'Moltres de Galar','Galar',['dark','flying'],{legendary:true}),
 form(10172,199,'Slowking de Galar','Galar',['poison','psychic']),form(10173,222,'Corsola de Galar','Galar',['ghost']),
 form(10174,263,'Zigzagoon de Galar','Galar',['dark','normal']),form(10175,264,'Linoone de Galar','Galar',['dark','normal']),
 form(10176,554,'Darumaka de Galar','Galar',['ice']),form(10177,555,'Darmanitan de Galar','Galar',['ice']),
 form(10179,562,'Yamask de Galar','Galar',['ground','ghost']),form(10180,618,'Stunfisk de Galar','Galar',['ground','steel']),

 form(10229,58,'Growlithe de Hisui','Hisui',['fire','rock']),form(10230,59,'Arcanine de Hisui','Hisui',['fire','rock']),
 form(10231,100,'Voltorb de Hisui','Hisui',['electric','grass']),form(10232,101,'Electrode de Hisui','Hisui',['electric','grass']),
 form(10233,157,'Typhlosion de Hisui','Hisui',['fire','ghost']),form(10234,211,'Qwilfish de Hisui','Hisui',['dark','poison']),
 form(10235,215,'Sneasel de Hisui','Hisui',['fighting','poison']),form(10236,503,'Samurott de Hisui','Hisui',['water','dark']),
 form(10237,549,'Lilligant de Hisui','Hisui',['grass','fighting']),form(10238,570,'Zorua de Hisui','Hisui',['normal','ghost']),
 form(10239,571,'Zoroark de Hisui','Hisui',['normal','ghost']),form(10240,628,'Braviary de Hisui','Hisui',['psychic','flying']),
 form(10241,705,'Sliggoo de Hisui','Hisui',['steel','dragon']),form(10242,706,'Goodra de Hisui','Hisui',['steel','dragon']),
 form(10243,713,'Avalugg de Hisui','Hisui',['ice','rock']),form(10244,724,'Decidueye de Hisui','Hisui',['grass','fighting']),
 form(10247,550,'Basculin Listrado Branco','Hisui',['water']),

 form(10250,128,'Tauros de Paldea (Combate)','Paldea',['fighting']),form(10251,128,'Tauros de Paldea (Labareda)','Paldea',['fighting','fire']),
 form(10252,128,'Tauros de Paldea (Aquática)','Paldea',['fighting','water']),form(10253,194,'Wooper de Paldea','Paldea',['poison','ground'])
];

export const REGIONAL_NAMES=Object.fromEntries(REGIONAL_FORMS.map(x=>[x.id,x.name]));
export const regionalName=id=>REGIONAL_NAMES[Number(id)]||null;
export function regionalBreedingBase(parentId,babyBaseId){
  const parent=REGIONAL_FORMS.find(form=>form.id===Number(parentId));
  if(!parent)return Number(babyBaseId);
  return REGIONAL_FORMS.find(form=>form.base===Number(babyBaseId)&&form.region===parent.region)?.id||Number(babyBaseId);
}

const level=(id,name,minLevel,extra={})=>({id,name,trigger:'level-up',minLevel,...extra});
const item=(id,name,item)=>({id,name,trigger:'use-item',item});

// Rotas que não podem ser reconstruídas apenas pela evolution-chain, pois a
// cadeia usa o ID da espécie-base e não o ID da variedade regional.
export const REGIONAL_EVOLUTIONS={
  19:[level(20,'Raticate',20)],10091:[level(10092,'Raticate de Alola',20)],
  25:[item(26,'Raichu','thunder-stone'),item(10100,'Raichu de Alola','thunder-stone')],
  27:[level(28,'Sandslash',22)]
};

// A declaração é montada em etapas para manter cada família regional legível.
Object.assign(REGIONAL_EVOLUTIONS,{
  10101:[item(10102,'Sandslash de Alola','ice-stone')],10103:[item(10104,'Ninetales de Alola','ice-stone')],
  10105:[level(10106,'Dugtrio de Alola',26)],10107:[level(10108,'Persian de Alola',35)],
  10109:[level(10110,'Graveler de Alola',25)],10110:[level(10111,'Golem de Alola',35)],10112:[level(10113,'Muk de Alola',38)],
  102:[item(103,'Exeggutor','leaf-stone'),item(10114,'Exeggutor de Alola','leaf-stone')],
  104:[level(105,'Marowak',28),level(10115,'Marowak de Alola',28,{timeOfDay:'night'})],
  10161:[level(863,'Perrserker',28)],10162:[level(10163,'Rapidash de Galar',40)],
  10164:[level(10165,'Slowbro de Galar',35),level(10172,'Slowking de Galar',35)],10166:[level(865,"Sirfetch'd",35)],
  109:[level(110,'Weezing',35),level(10167,'Weezing de Galar',35)],
  439:[level(122,'Mr. Mime',35),level(10168,'Mr. Mime de Galar',35)],10168:[level(866,'Mr. Rime',42)],
  10173:[level(864,'Cursola',38)],10174:[level(10175,'Linoone de Galar',20)],10175:[level(862,'Obstagoon',35,{timeOfDay:'night'})],
  10176:[item(10177,'Darmanitan de Galar','ice-stone')],10179:[level(867,'Runerigus',35)],
  10229:[item(10230,'Arcanine de Hisui','fire-stone')],10231:[item(10232,'Electrode de Hisui','leaf-stone')],
  156:[level(157,'Typhlosion',36),level(10233,'Typhlosion de Hisui',36)],10234:[level(904,'Overqwil',35)],
  10235:[item(903,'Sneasler','razor-claw')],502:[level(503,'Samurott',36),level(10236,'Samurott de Hisui',36)],
  548:[item(549,'Lilligant','sun-stone'),item(10237,'Lilligant de Hisui','sun-stone')],10238:[level(10239,'Zoroark de Hisui',30)],
  627:[level(628,'Braviary',54),level(10240,'Braviary de Hisui',54)],704:[level(705,'Sliggoo',40),level(10241,'Sliggoo de Hisui',40)],
  10241:[level(10242,'Goodra de Hisui',50)],712:[level(713,'Avalugg',37),level(10243,'Avalugg de Hisui',37)],
  723:[level(724,'Decidueye',34),level(10244,'Decidueye de Hisui',36)],10247:[level(902,'Basculegion',35)],
  10253:[level(980,'Clodsire',20)]
});

export const regionalEvolutionOptions=id=>REGIONAL_EVOLUTIONS[Number(id)]||null;
