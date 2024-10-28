import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { Navigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Navigate to="/login" />;

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const ProfileContainerWrapper = (props) => {
  let { userId } = useParams();
  return <ProfileContainer {...props} userId={userId} />;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getUserProfile })(
  ProfileContainerWrapper
);
