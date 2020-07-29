import React from "react";

function FormField({ value, onChange, type, name, label }) {
  return (
    <div>
      <label>
        {label}
        {type === "textarea" ? (
          <textarea
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          ></textarea>
        ) : (
          <input type={type} name={name} value={value} onChange={onChange} />
        )}
      </label>
    </div>
  );
}

export default FormField;
