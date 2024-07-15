export interface EventDetailResponse {
  data: EventDetail;
  totalCount: number;
}

export interface EventDetail {
  eventId: number;
  categorySeq: number;
  guSeq?: number;
  eventName: string;
  period: string;
  place: string;
  orgName: string;
  useTarget: string;
  ticketPrice: string | null;
  player: string | null;
  describe: string | null;
  etcDesc: string | null;
  homepageLink: string;
  mainImg: string;
  regDate: string;
  isPublic: boolean;
  startDate: string;
  endDate: string;
  theme: string;
  latitude: number;
  longitude: number;
  isFree: boolean;
  detailUrl: string;
}
