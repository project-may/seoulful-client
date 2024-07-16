import React from 'react';
export const EventTitleContentBox = ({
  Icon,
  title,
  content,
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  content: string | null;
}) => {
  return (
    <div className="py-[15px]">
      <div className="flex items-center gap-x-[5px] mb-[10px]">
        <Icon className="w-[12px] fill-black-CCC" />
        <span className="text-[13px] text-black-777">{title}</span>
      </div>
      <p className="text-[14px] text-black-444">{content}</p>
    </div>
  );
};
