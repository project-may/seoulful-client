import Image from 'next/image';

const BookmarkButton = () => {
  return (
    <button className="bg-black-60 font-bold  w-[40px] h-[40px] rounded-full flex justify-center items-center">
      <Image
        src="/assets/bookmark-icon.svg"
        alt="bookmark"
        width={20}
        height={20}
      />
    </button>
  );
};

export default BookmarkButton;
