import React from "react";

export const CustomInput = ({ register, errors, errorMsg, name, ...rest }) => {
    return (
      <>
        <input {...register(name, { required: errors?true:false })} {...rest} />
        {
        errors?
        errors[name] && <p className="text-danger">{errorMsg}</p>
        :
        <></>}
      </>
    );
  }