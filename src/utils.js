export function shuffle(items){const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy}
export const unique=items=>[...new Set(items.filter(Boolean))]
export const groupOf=s=>['vocabulary','kana_vocabulary'].includes(s.object)?'vocabulary':s.object
export const displayOf=s=>s.data.characters||'◈'
export function primaryMeaning(s){const meanings=s.data.meanings||[];return meanings.find(m=>m.primary&&m.accepted_answer)?.meaning||meanings.find(m=>m.accepted_answer)?.meaning||meanings[0]?.meaning||''}
export function readings(s,primaryOnly=true){const accepted=(s.data.readings||[]).filter(r=>r.accepted_answer);const primary=accepted.filter(r=>r.primary);const chosen=primaryOnly&&primary.length?primary:accepted;return unique(chosen.map(r=>r.reading))}
