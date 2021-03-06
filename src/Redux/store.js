import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";

let store = {
    _state : {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello guys, how are u?', likes: 15},
                {id: 2, message: 'How are u?', likes: 13},
                {id: 3, message: 'Today was perfect weather', likes: 999},
                {id: 4, message: 'All day thinking about u', likes: 999}
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Yarik', avatar: 'https://i.ebayimg.com/images/g/bqUAAOSwAxpdrz5d/s-l300.jpg'},
                {id: 2, name: 'Oleg', avatar: 'https://pbs.twimg.com/profile_images/872973760378404864/TkFCDPkz.jpg'},
                {
                    id: 3,
                    name: 'Max',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEPsF6NJsVqXpn8KShO7Hvd4z47YQEhnCXvd9HlqXd5po3wW3&s'
                },
                {
                    id: 4,
                    name: 'Vova',
                    avatar: 'https://stezor-img-res.s3.eu-central-1.amazonaws.com/400x0/9dd99de0-75cb-43f1-a50c-d3082022e2a8'
                },
                {
                    id: 5,
                    name: 'Yura',
                    avatar: 'https://pbs.twimg.com/profile_images/837415478452695040/rORx8jgy_400x400.jpg'
                },
                {
                    id: 6,
                    name: 'Oleg Kononenko',
                    avatar: 'https://pbs.twimg.com/profile_images/1015634093558697984/ZR41GPjM.jpg'
                },
                {id: 7, name: 'Andrey', avatar: 'https://pbs.twimg.com/profile_images/968698422751518720/zeP0peZp.jpg'}
            ],
            messagesData: [
                {message: 'Hi', author: 2},
                {message: 'Hello bro, what are u doing?', author: 1},
                {message: 'My university tasks', author: 2},
                {message: 'Not funny, heh', author: 1},
                {message: 'Yeah, but i have hard exam after tomorrow', author: 2},
                {message: 'Oh, pure boy', author: 1},
                {message: 'Ahahahahaha, never mind', author: 2},
            ],
            newMessageText : ''
        },

        sideBar: {
            onlineFriends: [
                {
                    id: 2,
                    name: 'Oleg',
                    avatar: 'https://pbs.twimg.com/profile_images/872973760378404864/TkFCDPkz.jpg',
                    onlineStatus: 1
                },
                {
                    id: 3,
                    name: 'Max',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEPsF6NJsVqXpn8KShO7Hvd4z47YQEhnCXvd9HlqXd5po3wW3&s',
                    onlineStatus: 1
                },
                {
                    id: 4,
                    name: 'Vova',
                    avatar: 'https://stezor-img-res.s3.eu-central-1.amazonaws.com/400x0/9dd99de0-75cb-43f1-a50c-d3082022e2a8',
                    onlineStatus: 0
                },
                {
                    id: 5,
                    name: 'Yura',
                    avatar: 'https://pbs.twimg.com/profile_images/837415478452695040/rORx8jgy_400x400.jpg',
                    onlineStatus: 1
                },
                {
                    id: 6,
                    name: 'Oleg Kononenko',
                    avatar: 'https://pbs.twimg.com/profile_images/1015634093558697984/ZR41GPjM.jpg',
                    onlineStatus: 0
                }
            ]
        }
    },
    _callSubscriber () {},

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
};


export default store;
window.store = store;