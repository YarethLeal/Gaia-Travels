import React from "react";

const Input = ({ register, errors, errorMsg, name, ...rest }) => {
    return (
      <>
        <input {...register(name, { required: errors?true:false })} {...rest}/>
        {
        errors?
        errors[name] && <span className="text-danger">{errorMsg}</span>
        :
      <></>}
      </>
    );
  }

  
export default Input;