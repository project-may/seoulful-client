import type { EventDetailResType } from '@/shared';

export const extractRelevantData = (data: EventDetailResType) => {
  const ticketPriceTitle = data.ticketPrice ? '이용요금' : '유무료';
  const ticketPriceContent = data.ticketPrice
    ? data.ticketPrice
    : data.isFree
      ? '무료'
      : '유료';

  return {
    theme: data.theme || 'N/A',
    period: data.period,
    place: data.place,
    ticketPrice: ticketPriceContent,
    ticketPriceTitle: ticketPriceTitle,
    useTarget: data.useTarget,
    player: data.player || 'N/A',
    describe: data.describe || 'N/A',
    etcDesc: data.etcDesc || 'N/A',
  };
};
