export function currency(num) {
  const n = parseInt(num, 10);
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`;
}

export function date(time) {
  const localDate = new Date(time * 1000);
  return localDate.toLocaleDateString();
}

export function grindText(grindType) {
  let text = '';
  switch (grindType) {
    case 0:
      text = '不研磨';
      break;
    case 1:
      text = '手沖';
      break;
    case 2:
      text = '虹吸式';
      break;
    case 3:
      text = '義式';
      break;
    default:
      text = '';
  }
  return text;
}
