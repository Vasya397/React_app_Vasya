const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Che ti delaesh?" },
    { id: 3, message: "Ladno" },
  ],
  dialogs: [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Vitaly" },
    { id: 3, name: "Sanya" },
    { id: 4, name: "Lexa" },
    { id: 5, name: "Misha" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 5, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
