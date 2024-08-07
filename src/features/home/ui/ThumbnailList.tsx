import { ThumbnailHeader, ThumbnailItem } from '@/shared';
import type { HomeEventDTO } from '../model/types';

export const ThumbnailList = async ({
  title,
  url,
  data,
  page,
}: {
  title: string;
  url: string;
  data: HomeEventDTO[];
  page?: string;
}) => {
  return (
    <div>
      <ThumbnailHeader
        title={title}
        url={url}
        length={page ? data.length : undefined}
      />
      <ul className="flex flex-nowrap overflow-x-auto gap-[15px] mt-[12px] w-full">
        {data.map((thumbnail, i) => (
          <ThumbnailItem key={`thumbnail-${i}`} data={thumbnail} page={page} />
        ))}
      </ul>
    </div>
  );
};
