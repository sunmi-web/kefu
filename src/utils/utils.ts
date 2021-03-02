export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
export const isMiniprogram = () => {
  if (window.localStorage.getItem('is-miniprogram') || window.location.search === '?U2FsdGVkX1') {
    window.localStorage.setItem('is-miniprogram', 'true');
    return true;
  } else {
    return false;
  }
};
