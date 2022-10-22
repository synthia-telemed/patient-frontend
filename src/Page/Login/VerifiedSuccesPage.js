import { useEffect } from "react";
import { ReactComponent as VerifiedIcon } from "../../Assets/Login/verified_success.svg";
import { useNavigate } from "react-router-dom";
const VerifiedSuccesPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <VerifiedIcon width="56px" height="56px" />
      <h1 className="mt-[22px] typographyHeadingSmMedium">Welcome to Synthia</h1>
    </div>
  );
};
export default VerifiedSuccesPage;
