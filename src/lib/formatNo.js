function formatNo(value, addComma) {
  let x = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;');
  x = x.replace('.', ',');
  if (addComma && x.indexOf(',') === -1) {
    x += ',0';
  }
  return x === '' ? 0 : x;
}

export default formatNo;
