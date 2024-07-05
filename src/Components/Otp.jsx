import React, { useEffect, useRef, useState } from "react";
export default function Otp({ otpLength = 6 }) {
  const [otpField, setOtpField] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  const handleKeyDown = (e, index) => {
    const key = e.key;
    
    if (key === "ArrowRight")
      if (index + 1 < otpField.length) {
        ref.current[index + 1].focus();
        return;
      }
    if (key === "ArrowLeft")
      if (index > 0) {
        ref.current[index - 1].focus();
        return;
      }
    const copyFields = [...otpField];
    if (key === "Backspace") {
      copyFields[index] = "";
      setOtpField(copyFields);
      if (index > 0) ref.current[index - 1].focus();
      return;
    }
    if (isNaN(key)) {
      return;
    }

    copyFields[index] = key;
    if (index + 1 < otpField.length) ref.current[index + 1].focus();
    setOtpField(copyFields);
  };
 
  useEffect(() => {
    ref.current["0"].focus();
  }, []);

  return (
    <div className="container">
      {otpField.map((value, index) => {
        return (
          <input
            type="text"
            ref={(currentInput) => (ref.current[index] = currentInput)}
            key={index}
            value={value}
            onKeyDown={(e) => handleKeyDown(e, index)}
   
          ></input>
        );
      })}
    </div>
  );
}
