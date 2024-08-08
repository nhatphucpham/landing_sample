import { useForm, Controller, Noop, RefCallBack } from "react-hook-form";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './datetime-picker.css';
import { FiCalendar } from 'react-icons/fi';

interface DateTimeInputProps {
  placeholder: string;
  classname?: string;
  name: string;
  control: any;
}

const   DateTimePicker: React.FC<DateTimeInputProps> = ({ placeholder, classname, control, name, ...rest }) => {
  const handleChange = (field: {
    onChange: any;
    onBlur?: Noop;
    value?: any;
    disabled?: boolean | undefined;
    name?: string | undefined;
    ref?: RefCallBack;
  }) => (date: Date | null) => {
    field.onChange({
      target: {
        name: name,
        value: date?.toISOString(),
      },
    });
  }

  const handleBlur = (field: {
    onBlur: any;
    value?: any;
    disabled?: boolean | undefined;
    name?: string | undefined;
    ref?: RefCallBack;
  }) => () => {
    field.onBlur({
      target: {
        name: name,
      },
    });
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DatePicker
          name={name}
          selected={field.value}
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="dd/MM/yyyy"
          placeholderText={placeholder}
          icon={<FiCalendar />}
          showIcon
          className={classname}
          {...rest}
          onChange={handleChange(field)}
          onBlur={handleBlur(field)}
        />
      )}
    />
  );
};

export default DateTimePicker;
