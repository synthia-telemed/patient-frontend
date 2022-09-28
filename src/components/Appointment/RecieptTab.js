import RecieptDetailCard from "./RecieptDetailCard";
import CreditCardBox from "../SettingPanel/CreditCardBox";
import MasterCardIcon from "../../Assets/Payment/mastercard.svg";
import JCBIcon from "../../Assets/Payment/jcb.svg";
import VisaIcon from "../../Assets/Payment/visa.svg";
const RecieptTab = (detailAppointment) => {
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
  console.log(detailAppointment.data.payment.creditcard);
  return (
    <>
      <h1 className="typographyTextMdSemibold mx-[16px] mt-[16px]">
        Summary Expense
      </h1>
      <RecieptDetailCard data={detailAppointment.data.invoice} />
      <h1 className="typographyTextMdSemibold mx-[16px] mt-[16px]">
        Total Charges
      </h1>
      <CardTotalCharges />
      <h1 className="typographyTextMdSemibold mx-[16px] mt-[16px]">
        Payment methods
      </h1>
      {detailAppointment?.data?.payment?.credit_card.brand === "Visa" ? (
        <CreditCardBox
          isDefault={detailAppointment?.data?.payment?.credit_card.is_default}
          key={detailAppointment?.data?.payment?.credit_card.id}
          icon={VisaIcon}
          numberCard={`***${detailAppointment?.data?.payment?.credit_card.last_4_digits}`}
          expireDate={detailAppointment?.data?.payment?.credit_card.expiry}
        />
      ) : detailAppointment?.detailAppointment?.data?.payment?.credit_card
          ?.payment?.credit_card.brand === "MasterCard" ? (
        <CreditCardBox
          isDefault={detailAppointment?.data?.payment?.credit_card.is_default}
          key={detailAppointment?.data?.payment?.credit_card.id}
          icon={MasterCardIcon}
          numberCard={`***${detailAppointment?.data?.payment?.credit_card.last_4_digits}`}
          expireDate={detailAppointment?.data?.payment?.credit_card.expiry}
        />
      ) : (
        <CreditCardBox
          isDefault={detailAppointment?.data?.payment?.credit_card.is_default}
          key={detailAppointment?.data?.payment?.credit_card.id}
          icon={JCBIcon}
          numberCard={`***${detailAppointment?.data?.payment?.credit_card.last_4_digits}`}
          expireDate={detailAppointment?.data?.payment?.credit_card.expiry}
        />
      )}
    </>
  );
};
export default RecieptTab;
