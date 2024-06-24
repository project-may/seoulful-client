import Image from 'next/image';

export const FullpageBackground = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Image
        src={imageUrl}
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-red-to-blue" />
    </div>
  );
};
