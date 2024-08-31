import Image from 'next/image';

export const FullpageBackground = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Image
        src={imageUrl}
        alt="Background"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover' }}
        quality={55}
        priority={true}
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-red-to-blue" />
    </div>
  );
};
