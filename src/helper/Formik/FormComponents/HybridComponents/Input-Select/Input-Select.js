import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../TextError/TextError";
import './Input-Select.css'

export default function Input(props) {
  const { label,name,name1, name2,options, ...rest } = props;
  return (
    <div className="form__control">
      <label htmlFor={name}>{label}</label>
        <div className="form__control__field__div">
            <Field className="selet__field" as="select" id={name1} name={name1} {...rest}>
            {options.map((option) => (
                <option key={option.id} id={option.id} value={option.id}>
                {option.value}
                </option>
            ))}
            </Field>
            <Field className='input__field' name={name2} id={name2} {...rest} />
        </div>
        <ErrorMessage name={name2} component={TextError} />
    </div>
  );
}
