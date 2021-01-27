import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError/TextError";
import '../formStyle.css'
import './Select.css'

export default function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form__control">
      <label htmlFor={name}>{label}</label>
      <Field className="selet__field" as="select" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={`${name}_${option.key}`} id={`${name}_${option.key}`} value={option.value.code}>
            {option.value.description}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}