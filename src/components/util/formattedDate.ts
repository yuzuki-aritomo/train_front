export const formattedDate = (date: Date, status?: 'monthsDays' | 'holidays'): string => {
  const dayOfWeek: string[] = ['日', '月', '火', '水', '木', '金', '土'];

  const year: string = date.getFullYear().toString().padStart(2, '0');
  const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
  const day: string = date.getDate().toString().padStart(2, '0');
  const hours: string = date.getHours().toString().padStart(2, '0');
  const minutes: string = date.getMinutes().toString().padStart(2, '0');

  switch (status) {
    case 'monthsDays':
      const monthsDays = `${hours}:${minutes}`;
      return monthsDays;
    case 'holidays':
      const holidays = `${year}-${month}-${day}`;
      return holidays;
    default:
      const formattedDate = `${year}年${month}月${day}日(${
        dayOfWeek[date.getDay()]
      })${hours}時${minutes}分`;
      return formattedDate;
  }
};
