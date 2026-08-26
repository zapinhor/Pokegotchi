export const RAID_BOSS_POOLS={
  legendary:[144,145,146,150,243,244,245,249,250,377,378,379,380,381,382,383,384,480,481,482,483,484,485,486,487,488,638,639,640,641,642,643,644,645,646,716,717,718,772,773,785,786,787,788,789,790,791,792,800,888,889,890,894,895,896,897,898,1001,1002,1003,1004,1007,1008,1014,1015,1016,1017,1024],
  mythical:[151,251,385,386,489,490,491,492,493,494,647,648,649,719,720,721,801,802,807,808,809,893,1025],
  pseudo:[149,248,373,376,445,635,706,784,887,998],
  extreme:[131,143,169,186,201,212,214,230,233,242,289,292,306,330,350,359,442,448,461,464,466,467,468,469,473,474,475,477,479,571,612,617,621,625,628,630,637,663,700,711,738,745,746,748,752,754,758,763,766,768,770,771,775,777,778,780,781,858,861,864,865,866,869,870,874,876,877,880,881,882,883]
};
export const RAID_CATEGORY_LABELS={legendary:'Lendário',mythical:'Mítico',pseudo:'Pseudo-lendário',extreme:'Extremamente raro'};
export function chooseRaidBoss(random=Math.random){const roll=random(),category=roll<.08?'mythical':roll<.30?'legendary':roll<.62?'pseudo':'extreme',pool=RAID_BOSS_POOLS[category];return{id:pool[Math.floor(random()*pool.length)],category}}
export const dungeonLevel=(averageLevel,stage)=>Math.max(3,Math.round(averageLevel+stage*1.8));
export const raidLevel=(baseLevel,stage,boss=false)=>Math.max(5,Math.round(baseLevel+stage*2.5+(boss?8:0)));
export const dungeonPassReward=stage=>stage<5?0:Math.min(5,1+Math.floor((stage-5)/10));
export const raidPremierBalls=({remainingHp,turns})=>Math.max(8,Math.min(13,8+Math.floor(Math.max(0,remainingHp)/25)+(turns<=12?2:turns<=20?1:0)));
export const raidCatchChance=category=>({mythical:.08,legendary:.10,pseudo:.16,extreme:.22}[category]||.12);
