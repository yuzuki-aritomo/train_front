export const formattedDate = (date: Date, status?: 'monthsDays'): string => {
  const dayOfWeek: string[] = ['日', '月', '火', '水', '木', '金', '土'];

  let year: string = date.getFullYear().toString();
  let month: string = (date.getMonth() + 1).toString();
  let day: string = date.getDate().toString();
  let hours: string = date.getHours().toString();
  let minutes: string = date.getMinutes().toString();

  // getMonth()の戻り値は0が年の最初の月を示すので+1をしている
  if (month.length === 1) month = month.padStart(2, '0');
  if (year.length === 1) year = year.padStart(2, '0');
  if (day.length === 1) day = day.padStart(2, '0');
  if (hours.length === 1) hours = hours.padStart(2, '0');
  if (minutes.length === 1) minutes = minutes.padStart(2, '0');

  if (status === 'monthsDays') {
    const formattedDate: string = hours + ':' + minutes;
    return formattedDate;
  } else {
    const formattedDate: string =
      year +
      '年' +
      month +
      '月' +
      day +
      '日(' +
      dayOfWeek[date.getDay()] +
      ') ' +
      hours +
      '時' +
      minutes +
      '分';
    return formattedDate;
  }
};
