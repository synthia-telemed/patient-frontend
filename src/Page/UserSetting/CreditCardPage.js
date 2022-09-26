import { useEffect, useState } from "react";
import { connect } from "react-redux";
import HeaderWithBack from "../../components/HeaderWithBack";
import AddCreditCardButton from "../../components/SettingPanel/AddCreditCardButton";
import CreditCardBox from "../../components/SettingPanel/CreditCardBox";
import MasterCardIcon from "../../Assets/Payment/mastercard.svg";
import JCBIcon from "../../Assets/Payment/jcb.svg";
import VisaIcon from "../../Assets/Payment/visa.svg";
import apiDefault from "../../apiDefault";

const mapState = (state) => ({
  user: state.user,
});

const CreditCardPage = (props) => {
  useEffect(() => {
    getListPaymentCreditCard();
  }, []);

  const [paymentList, setPaymentList] = useState([]);

  const getListPaymentCreditCard = async () => {
    const res = await apiDefault.get("/payment/credit-card");
    setPaymentList(res.data);
  };

  return (
    <div>
      <HeaderWithBack textHeader="Credit card/Debit card" path="/setting" />
      {paymentList.map((data) =>
        data.brand === "Visa" ? (
          <CreditCardBox
            key={data.id}
            icon={VisaIcon}
            numberCard={`***${data.last_4_digits}`}
            expireDate="16/24"
          />
        ) : data.brand === "MasterCard" ? (
          <CreditCardBox
            key={data.id}
            icon={MasterCardIcon}
            numberCard={`***${data.last_4_digits}`}
            expireDate="16/24"
          />
        ) : (
          <CreditCardBox
            key={data.id}
            icon={JCBIcon}
            numberCard={`***${data.last_4_digits}`}
            expireDate="16/24"
          />
        )
      )}
      {/* <CreditCardBox
        icon={MasterCardIcon}
        numberCard="***8304"
        expireDate="16/24"
      /> */}
      <AddCreditCardButton />
    </div>
  );
};
export default connect(mapState)(CreditCardPage);
