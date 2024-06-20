import Image from 'next/image';
import type { AlertModalPropsType } from '../model/types';

export const AlertModalItem = ({ data }: { data: AlertModalPropsType }) => {
  return (
    <li>
      <button
        type="button"
        className="w-full flex items-center gap-x-[10px] py-[5px]"
      >
        <div className="w-[24px] h-[24px] rounded-full border border-black-FFF overflow-hidden">
          <Image src={data.src} priority alt="포스터" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-[12px] text-black-FFF font-regular">
            <strong className="font-semibold">{data.schedule}</strong>입니다.
          </p>
          <span className="text-[10px] text-black-888">{data.title}</span>
        </div>
      </button>
    </li>
  );
};
