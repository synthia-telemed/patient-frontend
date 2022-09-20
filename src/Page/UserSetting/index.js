import ProfileUserIcon from "../../Assets/profileuser.png";
import SettingButton from "../../components/SettingPanel/SettingButton";
import PeopleIcon from "../../Assets/UserSetting/peopleIcon.svg";
import CreditcardIcon from "../../Assets/UserSetting/creditcard.svg";
import AgreementIcon from "../../Assets/UserSetting/agreement.svg";
import PrivacyIcon from "../../Assets/UserSetting/privacy.svg";

const UserSettingPage = () => {
  return (
    <div className="mt-[71px] mx-[15px] h-[90vh]">
      <div className="flex h-[75px]">
        <img src={ProfileUserIcon} alt="" />
        <div className="flex flex-col ml-[16px] justify-center">
          <h1 className="typographyTextMdSemibold">Sansa Stark</h1>
          <h2 className="typographyTextXsMedium text-gray-700">
            Siriraj Piyamaharajkarun Hospital
          </h2>
        </div>
      </div>
      <div className="mt-[24px]">
        <SettingButton
          icon={PeopleIcon}
          title="Personal Information"
          path="/setting/personal-information"
        />
        <SettingButton
          icon={CreditcardIcon}
          title="Add Credit card/Debit card"
          path="/setting/credit-card"
        />
        <SettingButton
          icon={AgreementIcon}
          title="Agreement"
          path="/setting/agreement"
        />
        <SettingButton
          icon={PrivacyIcon}
          title="Privacy"
          path="/setting/privacy"
        />
      </div>
      <button
        onClick={() => {}}
        className="w-[235px] h-[44px] border-solid border-[1.5px] border-primary-500 rounded-[8px] text-primary-500 absolute top-[90%] left-[23%]"
      >
        Logout
      </button>
    </div>
  );
};
export default UserSettingPage;
