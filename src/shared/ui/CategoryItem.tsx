import Link from 'next/link';

export const CategoryItem = ({
  Icon,
  title,
  url,
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  url: string;
}) => {
  return (
    <li>
      <Link href={url} className="flex flex-col items-center">
        <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-black-60">
          <Icon className="pointer-events-none" />
        </div>
        <p className="mt-[5px] text-[10px] text-black-555">{title}</p>
      </Link>
    </li>
  );
};
