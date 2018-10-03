export function createId(title) {
  return title.toLowerCase().split(' ').join('-');
}