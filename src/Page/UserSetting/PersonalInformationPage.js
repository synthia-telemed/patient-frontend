import HeaderWithBack from "../../components/HeaderWithBack";
import PersonalInformationCard from "../../components/SettingPanel/PersonalInformationCard";
import Layout from "../../components/Layout";
const PersonalInformationPage = () => {
  return (
    <Layout>
      <HeaderWithBack textHeader="Personal Information" path="/setting" />
      <PersonalInformationCard title="Name" value="Kavisara Srisuwatcharee" />
      <PersonalInformationCard title="Birthdate" value="20/06/2000" />
      <PersonalInformationCard title="Patient Number" value="HN-103191" />
      <PersonalInformationCard title="National ID Number" value="1-1675-08162-0" />
      <PersonalInformationCard title="Nationality" value="Thai" />
      <PersonalInformationCard title="Weight" value="45 Kg." />
      <PersonalInformationCard title="Height" value="159 cm." />
      <PersonalInformationCard title="Blood Type" value="A" />
    </Layout>
  );
};
export default PersonalInformationPage;
