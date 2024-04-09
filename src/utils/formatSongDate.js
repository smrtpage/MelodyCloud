import { differenceInWeeks, formatDistanceToNow, format } from 'date-fns';

export function formatSongDate(date) {
  const weeksAgo = differenceInWeeks(new Date(), date);

  if (weeksAgo >= 1) {
    return format(date, 'dd.MM.yyyy');
  }

  return formatDistanceToNow(date, {
    addSuffix: true,
  });
}
