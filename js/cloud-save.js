import{createClient}from'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.112.4/+esm';

const SUPABASE_URL='https://mznpdwbafzpztkfmdghv.supabase.co';
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_StqMelHFSLmOhCKLe5I4xQ_-rjm4fIU';
const META_KEY='pokegotchi-cloud-meta-v1';
const DEVICE_KEY='pokegotchi-device-id-v1';

export const cloudClient=createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});

export function cloudMeta(){try{return JSON.parse(localStorage.getItem(META_KEY))||{}}catch{return{}}}
export function setCloudMeta(meta){localStorage.setItem(META_KEY,JSON.stringify(meta))}
export function clearCloudMeta(){localStorage.removeItem(META_KEY)}
export function cloudDeviceId(){let id=localStorage.getItem(DEVICE_KEY);if(!id){id=crypto.randomUUID?.()||`device-${Date.now()}-${Math.random().toString(16).slice(2)}`;localStorage.setItem(DEVICE_KEY,id)}return id}

export async function initializeCloudAuth(onChange){const{data,error}=await cloudClient.auth.getSession();if(error)throw error;cloudClient.auth.onAuthStateChange((event,session)=>queueMicrotask(()=>onChange?.(event,session)));return data.session}
export async function cloudSignUp(email,password,captchaToken){return cloudClient.auth.signUp({email,password,options:{emailRedirectTo:'https://pokegotchi.com.br/',captchaToken}})}
export async function cloudSignIn(email,password,captchaToken){return cloudClient.auth.signInWithPassword({email,password,options:{captchaToken}})}
export async function cloudSignInWithGoogle(){return cloudClient.auth.signInWithOAuth({provider:'google',options:{redirectTo:'https://pokegotchi.com.br/'}})}
export async function cloudSignOut(){return cloudClient.auth.signOut()}
export async function cloudDeleteAccount(){const{error}=await cloudClient.rpc('delete_own_account');if(error)return{error};await cloudClient.auth.signOut({scope:'local'});return{error:null}}
export async function cloudResetPassword(email,captchaToken){return cloudClient.auth.resetPasswordForEmail(email,{redirectTo:'https://pokegotchi.com.br/',captchaToken})}
export async function cloudUpdatePassword(password){return cloudClient.auth.updateUser({password})}

export async function fetchCloudSave(userId){const{data,error}=await cloudClient.from('user_saves').select('user_id,save_data,revision,game_version,device_id,created_at,updated_at').eq('user_id',userId).maybeSingle();if(error)throw error;return data}
export async function writeCloudSave(userId,state,revision){const payload={user_id:userId,save_data:state,revision,game_version:'8.9',device_id:cloudDeviceId(),updated_at:new Date().toISOString()},{data,error}=await cloudClient.from('user_saves').upsert(payload,{onConflict:'user_id'}).select('revision,updated_at').single();if(error)throw error;return data}
