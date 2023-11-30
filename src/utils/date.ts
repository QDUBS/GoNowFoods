import { DateTime } from "luxon";
import dayjs from "dayjs";
import moment from 'moment';

const formatRegularDate = (date: Date | undefined) => {
  if(date === undefined){
    date = new Date()
  }
  return DateTime.fromJSDate(date).toFormat("yyyy-MM-dd");
};

const toDisplayMonthAndYear = (date: string) => {
  // return DateTime.fromISO(date).toFormat("MMMM yyyy");
  let parsedDate = moment(date);
  return parsedDate.format("MMMM yyyy")
};

const toDateObject = (dateString: string) => {
  return dayjs(dateString).format();
};

const getYearAndMonthDuration = (startDate: string, endDate: string) => {
  const start = DateTime.fromISO(startDate);
  const end = DateTime.fromISO(endDate);

  const durationObj = end.diff(start, ["years", "months"]).toObject();
  const years = Math.floor(durationObj["years"]!);
  const months = Math.ceil(durationObj["months"]!);
  return years < 1 ? `${months} month(s)` : `${years} years ${months} months`;
};

const getMonthDaysMinutesDuration = (startDate: string) => {
  const start = DateTime.fromISO(startDate);
  const end = DateTime.fromJSDate(new Date());

  const durationObj = end
    .diff(start, ["years", "months", "days", "hours", "minutes", "seconds"])
    .toObject();
  const years = Math.ceil(durationObj["months"]!);
  const months = Math.ceil(durationObj["months"]!);
  const days = Math.ceil(durationObj["days"]!);
  const hours = Math.ceil(durationObj["hours"]!);
  const minutes = Math.ceil(durationObj["minutes"]!);
  const seconds = Math.ceil(durationObj["seconds"]!);

  if (years > 0) {
    return `${years} year(s) ago`;
  }
  if (months > 0) {
    return `${months} month(s) ago`;
  }
  if (days > 0) {
    return `${days} day(s) ago`;
  }
  if (hours > 0) {
    return `${hours} hour(s) ago`;
  }
  if (minutes > 0) {
    return `${minutes} minute(s) ago`;
  }
  if (seconds > 0) {
    return `${seconds} second(s) ago`;
  }
  //return years < 1 ? `${months} month(s)` : `${years} years ${months} months`;
};

export default {
  formatRegularDate,
  toDisplayMonthAndYear,
  toDateObject,
  getYearAndMonthDuration,
  getMonthDaysMinutesDuration,
};
