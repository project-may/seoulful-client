import { getHomeEvent } from '@/entities/home';
import { getEventDetail } from '@/entities/event';
import FullpageBox from '@/features/FullpageAd/ui/FullpageBox';

export default async function Home() {
  const homeEvent = await getHomeEvent({ limit: 5, offset: 0, isRandom: true });
  const detailPromises = homeEvent.data.map((event) =>
    getEventDetail(event.eventId)
  );
  const recommendData = await Promise.all(detailPromises);

  return (
    <main className="relative w-full h-full bg-gradient-red-to-blue text-black-FFF">
      <FullpageBox recommendData={recommendData} />
    </main>
  );
}
