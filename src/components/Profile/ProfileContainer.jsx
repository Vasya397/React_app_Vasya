import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { Navigate, useParams, withRouter } from "react-router-dom";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const ProfileContainerWrapper = (props) => {
  let { userId } = useParams();
  return <ProfileContainer {...props} userId={userId} />;
};

let AuthNavigateComponent = withAuthNavigate(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthNavigateComponent);

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
