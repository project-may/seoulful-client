import React from 'react';
import { EventUiBox } from '@/features/event';
import { BookmarkButton } from '@/shared/ui/BookmarkButton';
import { BackButton } from '@/shared/ui/BackButton';

const eventDetailPage = () => {
  return (
    <div className="relative">
      <div className="sticky top-[30px] z-10 flex items-center justify-between px-[30px] ">
        <BackButton />
        <BookmarkButton
          buttonSize="w-[40px] h-[40px]"
          iconSize="w-[20px] h-[20px]"
        />
      </div>
      <EventUiBox></EventUiBox>
    </div>
  );
};

export default eventDetailPage;
