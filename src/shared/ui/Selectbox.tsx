import { FieldValues, UseFormRegister } from 'react-hook-form';
import ArrowIcon from '/public/assets/arrow-icon.svg';

export const Selectbox = ({
  seq,
  optionData,
  placeholder,
  register,
}: {
  seq: 'guSeq' | 'categorySeq';
  optionData: string[];
  placeholder: string;
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <div className="relative">
      <select
        {...register(seq)}
        className="w-full py-[10px] bg-black-10 text-[14px] text-black-999 text-center rounded-[5px] appearance-none focus:outline-none"
      >
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
