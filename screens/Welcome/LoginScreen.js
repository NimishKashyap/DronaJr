import { useState } from "react";
import { StyleSheet } from "react-native";
import EnterDetails from "../../components/InitalScreens/EnterDetails";
import EnterPhone from "../../components/InitalScreens/EnterPhone";
import GetStarted from "../../components/InitalScreens/GetStarted";
import SelectMode from "../../components/InitalScreens/SelectMode";

export default function LoginScreen(props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirm, setConfirm] = useState(null);

  const [screenNo, setScreenNo] = useState(1);

  const [name, setName] = useState("");
  const [age, setAge] = useState(10);

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (err) {
      console.error("Invalid code");
    }
  }

  if (screenNo === 1) {
    return <GetStarted screenNo={screenNo} setScreenNo={setScreenNo} />;
  } else if (screenNo === 2) {
    return (
      <EnterPhone
        {...props}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        screenNo={screenNo}
        setScreenNo={setScreenNo}
      />
    );
  } else if (screenNo === 3) {
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
  } else if (screenNo === 4) {
    return (
      <SelectMode {...props} screenNo={screenNo} setScreenNo={setScreenNo} />
    );
  }
}
