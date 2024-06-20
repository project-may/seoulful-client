import ArrowIcon from '/public/assets/arrow-icon.svg';

export const Selectbox = ({
  optionData,
  placeholder,
}: {
  optionData: string[];
  placeholder: string;
}) => {
  return (
    <div className="relative">
      <select className="w-full py-[10px] bg-black-10 text-[14px] text-black-999 text-center rounded-[5px] appearance-none focus:outline-none">
        {placeholder && <option value="">{placeholder}</option>}
        {optionData.map((op, i) => (
          <option key={`op-${i}`} value={op}>
            {op}
          </option>
        ))}
      </select>
      <ArrowIcon className="absolute top-[14px] right-[14px] stroke-black-BBB rotate-90 pointer-events-none" />
    </div>
  );
};
