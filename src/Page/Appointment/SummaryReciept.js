import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderWithBack from "../../components/HeaderWithBack";
import RecieptDetailCard from "../../components/Appointment/RecieptDetailCard";
import PaymentMethod from "../../components/Appointment/PaymentMethod";
import AddCreditCardButton from "../../components/SettingPanel/AddCreditCardButton";
import PrimaryButton from "../../components/Appointment/PrimaryButton";
import apiDefault from "../../apiDefault";

import MasterCardIcon from "../../Assets/Payment/mastercard.svg";
import JCBIcon from "../../Assets/Payment/jcb.svg";
import VisaIcon from "../../Assets/Payment/visa.svg";

const SummaryReciept = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [detailAppointment, setDetailAppointment] = useState({});
  const [paymentList, setPaymentList] = useState([]);
  const [selectPaymentID, setSelectPaymentID] = useState("");

  useEffect(() => {
    getDetailAppointment();
    getListPaymentCreditCard();
  }, []);

  useEffect(() => {
    checkDefaultPayment();
  }, [paymentList]);

  const checkDefaultPayment = () => {
    paymentList.forEach((data) => {
      if (data.is_default === true) {
        setSelectPaymentID(data.id);
      }
    });
  };

  const getListPaymentCreditCard = async () => {
    const res = await apiDefault.get("/payment/credit-card");
    setPaymentList(res.data);
  };
  const getDetailAppointment = async () => {
    const res = await apiDefault.get(`/appointment/${state.appointmentID}`);
    setDetailAppointment(res.data);
  };
  const selectPayment = (id) => {
    setSelectPaymentID(id);
  };
  const onSubmitPayNow = async () => {
    const res = await apiDefault.post(
      `/payment/pay/${detailAppointment.invoice.id}/credit-card/${selectPaymentID}`
    );
    console.log(res.data);
    navigate("/appointment/payment-succeed", {
      state: { appointmentID: detailAppointment.id },
    });
  };
  const CardTotalCharges = () => {
    return (
      <div className="flex justify-center mt-[8px]">
        <div className="w-full mx-[16px] rounded-[8px] p-[16px] shadow-[0px_1px_3px_rgba(16,24,40,0.1)] bg-base-white border-[1px] border-solid border-gray-200">
          <div className="flex flex-col w-full">
            <div className="flex justify-between text-gray-700 w-full typographyTextSmMedium ">
              Amount <span>$ 1000</span>
            </div>
            <div className="flex justify-between text-gray-700 w-full typographyTextSmMedium ">
              Socail Security Scheme{" "}
              <span className="text-error-600">$ -1000</span>
            </div>
            <div className="flex justify-between text-gray-700 w-full mt-[10px] ">
              <h1 className="typographyTextMdSemibold text-primary-500">
                Net Amount
              </h1>
              <h1 className="typographyTextMdSemibold text-primary-500">$ 0</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <HeaderWithBack textHeader="Summary Reciept" path={-1} />
      <h1 className="typographyTextMdSemibold mx-[16px] mt-[16px]">
        Summary Expense
      </h1>
      <RecieptDetailCard data={detailAppointment.invoice} />
      <h1 className="typographyTextMdSemibold mx-[16px] mt-[16px]">
        Total Charges
      </h1>
      <CardTotalCharges />

      {paymentList.map((data) =>
        data.brand === "Visa" ? (
          <PaymentMethod
            isDefault={data.is_default}
            onSelect={selectPaymentID}
            key={data.id}
            value={data.id}
            id={data.id}
            icon={VisaIcon}
            onClick={selectPayment}
            numberCard={`***${data.last_4_digits}`}
            expireDate={data.expiry}
          />
        ) : data.brand === "MasterCard" ? (
          <PaymentMethod
            isDefault={data.is_default}
            onSelect={selectPaymentID}
            id={data.id}
            key={data.id}
            value={data.id}
            icon={MasterCardIcon}
            onClick={selectPayment}
            numberCard={`***${data.last_4_digits}`}
            expireDate={data.expiry}
          />
        ) : (
          <PaymentMethod
            isDefault={data.is_default}
            onSelect={selectPaymentID}
            id={data.id}
            key={data.id}
            value={data.id}
            onClick={selectPayment}
            icon={JCBIcon}
            numberCard={`***${data.last_4_digits}`}
            expireDate={data.expiry}
          />
        )
      )}
      <AddCreditCardButton />
      <PrimaryButton
        text="Pay now"
        onClick={onSubmitPayNow}
        width="235px"
        height="48px"
        marginTop="56px"
      />
    </div>
  );
};
export default SummaryReciept;
