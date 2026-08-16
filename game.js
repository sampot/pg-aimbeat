export function newGame(){return{score:0,combo:0,hits:0,misses:0}}
export function quality(beat,tap){const d=Math.abs(tap-beat);return d<=70?"perfect":d<=170?"good":"miss"}
export function hit(state, beat, tap) {
  const q = quality(beat, tap);
  if (q === "miss") {
    miss(state);
    return q;
  }
  const bonus = Math.min(200, state.combo * 10);
  state.combo += 1;
  state.hits += 1;
  state.score += (q === "perfect" ? 300 : 150) + bonus;
  return q;
}
export function miss(state){state.combo=0;state.misses++;return state}