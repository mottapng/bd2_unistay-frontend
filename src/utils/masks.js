export const formatCellphone = (v) => {
  let r = v.replace(/\D/g, '');
  r = r.replace(/^0/, '');

  if (r.length > 11) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (r.length > 7) {
    r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, '($1) $2-$3');
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
  } else if (v.trim() !== '') {
    r = r.replace(/^(\d*)/, '($1');
  }
  return r;
};

export const formatDate = (value) => {
  const sanitizedDate = value.replace(/\D/g, '');
  // Format the date as "DD/MM/YYYY"
  const formattedDate = sanitizedDate
    .replace(/^(\d{2})(\d)/g, '$1/$2') // Add slash after the first two digits
    .replace(/^(\d{2}\/\d{2})(\d{1,4})/g, '$1/$2') // Add slash after the next two digits
    .slice(0, 10); // Limit the input length to 10 characters (DD/MM/YYYY)

  return formattedDate;
};

export const reformatDate = (date) => {
  const new_date = new Date(date);

  const day = new_date.getDate() + 1;
  const month = new_date.getMonth() + 1;
  const year = new_date.getFullYear();

  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');

  return `${formattedDay}/${formattedMonth}/${year}`;
};

export function formatMoney(value) {
  const trimmedValue = value.replace(/^0+/, '');

  const integerPart = trimmedValue.slice(0, -2);
  const decimalPart = trimmedValue.slice(-2);

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `R$ ${formattedInteger},${decimalPart}`;
}
