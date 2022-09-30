import NotificationHeader from "../../components/Notification/notificationHeader";
import DatepickerIcon from "../../Assets/NotificationIcon/datepicker.svg";
import WalletIcon from "../../Assets/NotificationIcon/wallet.svg";
import NotificationCard from "../../components/Notification/notificationCard";
const NotificationPage = () => {
  return (
    <div>
      <NotificationHeader />
      <NotificationCard
        title="Appointment success!"
        url={DatepickerIcon}
        statusNew={true}
        time="Today 14:30 PM"
        detail="You have an appointment with Dr. Alice Wonderland on December 24 , 2022 , 10:00 am. Don’t forget to activate your remember."
      />
      <NotificationCard
        title="You recieve a new payment"
        url={WalletIcon}
        statusNew={false}
        time="Today 14:30 PM"
        detail="You recieve a new payment. Please payment before 24 hours. "
      />
      <NotificationCard
        title="Schedule changed"
        url={DatepickerIcon}
        statusNew={false}
        time="21 Aug 2022  14:30 PM"
        detail="The schedule appointment is changed from hospital. You have an  appointment with Dr. Alice Wonderland on December 24 , 2022 , 10:00 am. Don’t forget to activate your remember."
      />
    </div>
  );
};
export default NotificationPage;
