import { FieldValues, UseFormRegister } from 'react-hook-form';
import ArrowIcon from '/public/assets/arrow-icon.svg';
import { getCategorySeqByName, getGuSeqByName } from '../model/utils';

export const Selectbox = ({
  seqType,
  optionData,
  placeholder,
  register,
}: {
  seqType: 'guSeq' | 'categorySeq';
  optionData: string[];
  placeholder: string;
  register: UseFormRegister<FieldValues>;
}) => {
  const formattedSeqOptionData = optionData.map((option) => {
    switch (seqType) {
      case 'guSeq':
        return {
          seq: getGuSeqByName(option),
          name: option,
        };
      case 'categorySeq':
        return {
          seq: getCategorySeqByName(option),
          name: option,
        };
    }
  });

  return (
    <div className="relative">
      <select
        {...register(seqType)}
        className="w-full py-[10px] bg-black-10 text-[14px] text-black-999 text-center rounded-[5px] appearance-none focus:outline-none"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {formattedSeqOptionData.map(({ seq, name }, idx) => (
          <option key={`op-${idx}`} value={seq}>
            {name}
          </option>
        ))}
      </select>
      <ArrowIcon className="absolute top-[14px] right-[14px] stroke-black-BBB rotate-90 pointer-events-none" />
    </div>
  );
};
