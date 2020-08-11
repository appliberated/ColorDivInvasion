
export function randomColor() {
  return `#${Math.random().toString(16).slice(-6)}`;
}

export function getRandomIntInclusive(min: number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}