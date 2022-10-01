import React from "react";

import OTP from "./OTP";
export default function VerifyOtp({
  callback,
  screenNo,
  setScreenNo,
  confirm,
  setCode,
}) {
  return <OTP setCode={setCode} callback={callback} />;
}
