import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  posts: state.profilePage?.posts,
  newPostText: state.profilePage?.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
  addPost: () => dispatch(addPostActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
