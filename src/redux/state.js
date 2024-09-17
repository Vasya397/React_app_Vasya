const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const createStore = () => {
  let _state = {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 20 },
        { id: 2, message: "It`s my first post", likesCount: 18 },
        { id: 3, message: "It`s my", likesCount: 9 },
        { id: 4, message: "It`s mynecraft", likesCount: 20 },
      ],
      newPostText: "lol-kek",
    },
    messagesPage: {
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
      newMessageBody: "",
    },
  };

  let _callSubscriber = () => {
    console.log("State has changed");
  };

  return {
    getState() {
      return _state;
    },
    subscribe(observer) {
      _callSubscriber = observer; // Подписываемся на изменения состояния
    },

    addPost() {
      let newPost = {
        id: 5,
        message: _state.profilePage.newPostText,
        likesCount: 0,
      };

      _state.profilePage.posts.push(newPost);
      _state.profilePage.newPostText = "";
      _callSubscriber(); // Вызываем подписчика после изменения состояния
    },
    updateNewPostText(newText) {
      _state.profilePage.newPostText = newText;
      _callSubscriber(); // Вызываем подписчика после изменения состояния
    },

    dispatch(action) {
      if (action.type === ADD_POST) {
        let newPost = {
          id: 5,
          message: _state.profilePage.newPostText,
          likesCount: 0,
        };

        _state.profilePage.posts.push(newPost);
        _state.profilePage.newPostText = "";
        _callSubscriber();
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
        _state.profilePage.newPostText = action.newText;
        _callSubscriber();
      } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        _state.messagesPage.newMessageBody = action.body;
        _callSubscriber();
      } else if (action.type === SEND_MESSAGE) {
        let body = _state.messagesPage.newMessageBody;
        _state.messagesPage.newMessageBody = "";
        _state.messagesPage.messages.push({ id: 5, message: body });
        _callSubscriber();
      }
    },
  };
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

const store = createStore();

export default store;
