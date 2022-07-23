export function toEnFormat(date){
  return date.split('.').reverse().join('/');
}
export function toRuFormat(date){
  return date.split('/').reverse().join('.');
}
