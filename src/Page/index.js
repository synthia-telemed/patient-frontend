import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Preferences } from "@capacitor/preferences";
import { PushNotifications } from "@capacitor/push-notifications";
import { Capacitor } from "@capacitor/core";

const IndexPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkUserLogin = async () => {
    const token = await Preferences.get({ key: "token" });
    if (token.value) {
      dispatch.user.setToken(token.value);
      if (Capacitor.isNativePlatform()) await registerPushnotificationListener();
      return navigate(`/home`);
    }
    return navigate(`/login`);
  };

  const registerPushnotificationListener = async () => {
    await PushNotifications.addListener("pushNotificationReceived", notification => {
      console.log("Push notification received: ", notification.title);
    });

    await PushNotifications.addListener(
      "pushNotificationActionPerformed",
      ({ notification }) => {
        const { appointmentID } = notification.data;
        if (appointmentID) {
          return navigate("/appointment/detail", { state: { appointmentID } });
        }
        return navigate("/home");
      }
    );
  };

  useEffect(() => {
    checkUserLogin();
  }, []);

  return <div></div>;
};

export default IndexPage;
