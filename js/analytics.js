const MEASUREMENT_ID='G-MZ3VKBV5WS';
const CONSENT_KEY='pokegotchi-analytics-consent-v1';
let loaded=false;

function applyConsent(value){
  localStorage.setItem(CONSENT_KEY,value);
  document.querySelector('#analytics-consent')?.remove();
  if(value==='granted')loadAnalytics();
  else if(window.gtag)window.gtag('consent','update',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
}

function loadAnalytics(){
  if(loaded)return;
  loaded=true;
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};
  window.gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  window.gtag('js',new Date());
  window.gtag('config',MEASUREMENT_ID,{send_page_view:true});
  const script=document.createElement('script');
  script.async=true;
  script.src=`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.append(script);
}

function showConsent(){
  document.querySelector('#analytics-consent')?.remove();
  const banner=document.createElement('aside');
  banner.id='analytics-consent';
  banner.className='analytics-consent';
  banner.setAttribute('aria-label','Preferências de privacidade');
  banner.innerHTML='<div><b>Privacidade do treinador</b><p>Podemos usar o Google Analytics para contar visitas e entender quais áreas do Pokégotchi são mais usadas. Não enviamos nome, e-mail ou conteúdo do seu save. <a href="privacidade.html">Saiba mais</a></p></div><div class="analytics-consent-actions"><button id="analytics-reject">Agora não</button><button class="primary-button" id="analytics-accept">Permitir estatísticas</button></div>';
  document.body.append(banner);
  banner.querySelector('#analytics-reject').onclick=()=>applyConsent('denied');
  banner.querySelector('#analytics-accept').onclick=()=>applyConsent('granted');
}

export function setupAnalytics(){
  const consent=localStorage.getItem(CONSENT_KEY);
  if(consent==='granted')loadAnalytics();
  else if(consent!== 'denied')showConsent();
}

export function showAnalyticsPreferences(){showConsent()}

export function trackAnalytics(name,params={}){
  if(localStorage.getItem(CONSENT_KEY)==='granted'&&window.gtag)window.gtag('event',name,params);
}
