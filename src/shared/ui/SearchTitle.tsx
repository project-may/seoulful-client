export const SearchTitle = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className=" pt-[15px] pb-[15px]">
      <div className="flex justify-between items-center pb-[7px] list-none">
        <span className="text-[14px] text-black-777 font-semibold">
          {title}
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
};
