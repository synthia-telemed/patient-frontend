import { connect } from "react-redux";

const mapState = (state) => ({
  user: state.user,
});

const HomePage = (props) => {
  console.log(props.name);
  return (
    <div className="">
      <h1 className="typographyHeadingMdSemibold text-primary-600">
        Hello this is home page
      </h1>
      <h1>{props.user.credential}</h1>
    </div>
  );
};
export default connect(mapState)(HomePage);
