import React from "react";
import Input from "../FormComponents/InputField/InputField";
import TextArea from "../FormComponents/TextArea/TextArea";
import Select from "../FormComponents/Select/Select";
import RadioButtons from "../FormComponents/RadioButton/RadioButton";
import CheckBox from "../FormComponents/Checkbox/Checkbox";
import DatePicker from '../FormComponents/DatePicker/DatePicker'
import SelectMultiple from '../FormComponents/SelectMultiple/SelectMultiple'
import InputSelect from '../FormComponents/HybridComponents/Input-Select/Input-Select'
import InputInput from '../FormComponents/HybridComponents/Input-Input/Input-Input'

function FormControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "selectMultiple":
      return <SelectMultiple {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "input-select":
      return <InputSelect {...rest} />;
    case "input-input":
      return <InputInput {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date": return <DatePicker {...rest} />
    default:
      return null;
  }
}

export default FormControl;