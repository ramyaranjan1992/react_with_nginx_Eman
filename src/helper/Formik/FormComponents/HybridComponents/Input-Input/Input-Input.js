import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../TextError/TextError";
import './Input-Input.css'

export default function Input(props) {
  const { label,name,name1, name2,option, ...rest } = props;
  return (
    <div className="form__control">
      <label htmlFor={name}>{label}</label>
      <div className="form__control__field__div">
        <Field className='input__field1' placeholder='Code' name={name1} id={name1} {...rest} />
        <Field className='input__field2' name={name2} id={name2} {...rest} />
      </div>
      <ErrorMessage name={name1} component={TextError} />
      <ErrorMessage name={name2} component={TextError} />
    </div>
  );
}
