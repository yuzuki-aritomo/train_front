import * as holiday_jp from '@holiday-jp/holiday_jp';
import { formattedDate } from '../formattedDate';

export const setDate = (): 1 | 2 | 3 => {
  const now = new Date();
  const holidays: holiday_jp.Holiday[] = holiday_jp.between(
    new Date(formattedDate(now, 'holidays')),
    new Date(formattedDate(now, 'holidays'))
  );

  if (now.getDay() === 6) {
    // 土曜日の場合
    return 2;
  } else if (holidays.length > 0 || now.getDay() === 0) {
    // 日・祝日の場合
    return 3;
  } else {
    // 平日の場合
    return 1;
  }
};
