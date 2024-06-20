import Link from 'next/link';

export const ThumbnailHeader = ({
  title,
  url,
  length,
}: {
  title: string;
  url: string;
  length?: number | undefined;
}) => {
  return (
    <div className="flex justify-between items-end">
      <h2 className="flex gap-x-[5px] items-center text-black-333 font-bold text-[17px]">
        <strong className="font-semibold">{title}</strong>
        {length !== undefined && (
          <span className="flex justify-center items-center px-[6px] bg-blue-10 rounded-[5px]">
            <span className="text-[12px] text-black-FFF font-semibold">
              {length}
            </span>
          </span>
        )}
      </h2>
      <Link href={url} className="text-black-999 text-[11px] font-light">
        더보기
      </Link>
    </div>
  );
};
