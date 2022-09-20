import HeaderWithBack from "../../components/HeaderWithBack";
import AddCreditCardButton from "../../components/SettingPanel/AddCreditCardButton";
import CreditCardBox from "../../components/SettingPanel/CreditCardBox";
import MasterCardIcon from "../../Assets/Payment/mastercard.svg";
import JCBIcon from "../../Assets/Payment/jcb.svg";
import VisaIcon from "../../Assets/Payment/visa.svg";
const CreditCardPage = () => {
  return (
    <div>
      <HeaderWithBack textHeader="Credit card/Debit card" />
      <CreditCardBox
        icon={MasterCardIcon}
        numberCard="***8304"
        expireDate="16/24"
      />
      <AddCreditCardButton />
    </div>
  );
};
export default CreditCardPage;
