export const isoFormatDMY = dateSale => {
  const date = new Date(dateSale);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate() + 1;

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }
  return `${dt}/${month}/${year}`;
};

export const isoFormatYMD = dateSale => {
  const date = new Date(dateSale);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return `${year}/${month}/${dt}`;
};

export const DMYToISODate = date => {
  const arrayDate = date.split('/');
  return new Date(arrayDate[2], Number(arrayDate[1] - 1), arrayDate[0]);
};
