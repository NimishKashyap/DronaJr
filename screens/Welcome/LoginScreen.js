import { useRef, useState } from "react";
import EnterDetails from "../../components/InitalScreens/EnterDetails";
import EnterPhone from "../../components/InitalScreens/EnterPhone";
import GetStarted from "../../components/InitalScreens/GetStarted";
import SelectMode from "../../components/InitalScreens/SelectMode";
import VerifyOtp from "../../components/InitalScreens/VerifyOtp";

import firebase from "firebase/compat/app";
import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";

const app = getApp();
const auth = getAuth();

export default function LoginScreen(props) {
  const recaptchaVerifier = useRef(null);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState(0);
  const [verificationId, setVerificationId] = useState(null);

  const [screenNo, setScreenNo] = useState(1);

  const [name, setName] = useState("");
  const [age, setAge] = useState(10);

  // async function handleSignin(phoneNumber) {
  //   try {
  //     const confirmation = await signInWithPhoneNumber(phoneNumber);
  //     console.log(confirmation);
  //     setConfirm(confirmation);
  //     console.log("Success");

  //     setScreenNo((curr) => curr + 1);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  const handleSignin = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      console.log("Inside handle signin");
      const customized = "+91" + phoneNumber;
      const verificationId = await phoneProvider.verifyPhoneNumber(
        customized,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
    } catch (err) {
      console.error(err);
    }
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (screenNo === 1) {
    return <GetStarted screenNo={screenNo} setScreenNo={setScreenNo} />;
  } else if (screenNo === 2) {
    return (
      <EnterPhone
        {...props}
        recaptchaVerifier={recaptchaVerifier}
        phoneNumber={phoneNumber}
        callback={handleSignin}
        setPhoneNumber={setPhoneNumber}
        screenNo={screenNo}
        setScreenNo={setScreenNo}
      />
    );
  } else if (screenNo === 3) {
    return (
      <VerifyOtp
        screenNo={screenNo}
        setScreenNo={setScreenNo}
        confirm={confirm}
      />
    );
  } else if (screenNo === 4) {
    return (
      <EnterDetails
        {...props}
        name={name}
        age={age}
        setName={setName}
        setAge={setAge}
        screenNo={screenNo}
        setScreenNo={setScreenNo}
      />
    );
  } else if (screenNo === 5) {
    return (
      <SelectMode {...props} screenNo={screenNo} setScreenNo={setScreenNo} />
    );
  }
}
