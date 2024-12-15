import React from 'react';
import { EventUiBox } from '@/features/event';
import { BookmarkButton } from '@/shared/ui/BookmarkButton';
import { BackButton } from '@/shared/ui/BackButton';

import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}event/detail/${params.id}`
  );
  const { data } = await response.json();

  return {
    title: data.eventName,
    description: data.describe ? `${data.describe} | ${data.etcDesc}` : '',
    keywords: [data.eventName, data.orgName],
    openGraph: {
      title: data.eventName,
      description: data.describe ? `${data.describe} | ${data.etcDesc}` : '',
      url: data.detailUrl,
      images: [
        {
          url: data.mainImg,
        },
      ],
      type: 'website',
      locale: 'ko_KR',
    },
  };
}

const eventDetailPage = () => {
  return (
    <div className="relative">
      <div className="sticky top-[30px] z-10 flex items-center justify-between px-[30px] ">
        <BackButton type="other" />
        <BookmarkButton
          buttonSize="w-[40px] h-[40px]"
          iconSize="w-[20px] h-[20px]"
        />
      </div>
      <EventUiBox />
    </div>
  );
};

export default eventDetailPage;
