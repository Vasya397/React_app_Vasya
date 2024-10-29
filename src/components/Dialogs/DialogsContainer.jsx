import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import Dialogs from "./Dialogs";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Dialogs);
