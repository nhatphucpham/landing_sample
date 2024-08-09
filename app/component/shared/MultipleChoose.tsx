import React from "react";
import { useEffect, useState } from "react";
import { useForm, Controller, RefCallBack } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface Option {
  id: string;
  text: string;
}

interface MultipleChooseProps {
  options: Option[];
  onChange: any;
  label: string;
  name: string;
  control: any;
  error: any;
}

const MultipleChoose: React.FC<MultipleChooseProps> = React.forwardRef<HTMLElement, MultipleChooseProps>(({
  options,
  onChange,
  label,
  name,
  control,
  error }, ref) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    onChange({ target: { name, value: selectedOptions.join(',') } });
  }, [selectedOptions, onChange, name]);

  const handleSelect = (id: string) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter(optionId => optionId !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  const handleBlur = (field: {
    onChange?: (...event: any[]) => void;
    onBlur: any;
    value?: any;
    disabled?: boolean | undefined;
    name?: string;
    ref?: RefCallBack;
  }) => () => {
    field.onBlur({
      target: {
        name: name,
      },
    });
  }

  return (
    <div className="p-4 rounded-lg border border-gray-800/15 shadow-sm" ref={ref as React.RefObject<HTMLDivElement>}>
      <h2 className="text-xl font-bold mb-4">{label}</h2>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ul className="space-y-2" onBlur={handleBlur(field)}>
            {options.map(option => (
              <li key={option.id}>
                <button
                  type="button"
                  name={name}
                  className={
                    `w-full p-2 border border-gray-300 rounded-lg ${selectedOptions.includes(option.id) ? 'bg-gray-800 text-white hover:bg-gray-600' : 'bg-white hover:bg-gray-200 hover:text-gray-800'
                    } focus:active:bg-gray-800 focus:active:text-white`}
                  onClick={() => {
                    handleSelect(option.id)
                    field.onChange([...selectedOptions, option.id])
                  }}
                  onBlur={handleBlur(field)}
                >
                  {option.text}
                </button>
              </li>
            ))}
          </ul>
        )}
      />
      <p className="text-red-500">{error?.message}</p>
    </div>
  );
});

MultipleChoose.displayName = 'MultipleChoose'; 

export default MultipleChoose;
