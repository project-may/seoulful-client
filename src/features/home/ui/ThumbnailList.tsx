import { ThumbnailHeader, ThumbnailItem } from '@/shared';
import type { ThumbnailItemType } from '@/shared';

export const ThumbnailList = ({
  title,
  url,
  data,
  page,
}: {
  title: string;
  url: string;
  data: ThumbnailItemType[];
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
