import {v1} from "uuid";
import {ActionTypes, PostType, ProfilePageType} from "./store";
import ava from "../assets/img/jpg/Morty.jpg";

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeNewTextPostActionType = ReturnType<typeof changeNewTextActionCreator>

let initialState = {
    profile: {
        img: ava,
        name: 'Морцыпанчик Василец',
        birthday: '9 февраля',
        city: 'Минск',
        followers: 1,
        photos: 22
    },
    posts: [
        {
            id: v1(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet est enim, eget iaculis ipsum gravida et. Nullam rhoncus mi quis sem euismod, at sollicitudin purus ornare. Aenean id pretium est. Duis sed tortor in nunc convallis luctus at sit amet velit. In condimentum interdum velit, vel dignissim neque molestie vitae. Sed bibendum facilisis dapibus. Integer ut nisl et ante facilisis placerat nec sit amet nisi. Nulla facilisi. Aenean bibendum justo nec nibh finibus maximus. Sed fermentum pellentesque tellus et luctus.',
            date: '19 июня 2022',
            time: '23:13'
        },
        {
            id: v1(),
            text: 'Ut vehicula imperdiet mauris at vulputate. Aenean porttitor ullamcorper nisl et cursus. Pellentesque porttitor tincidunt nisl, ac cursus nibh mollis ac. Aenean ac ullamcorper nisl. Vivamus aliquet sit amet lorem id tincidunt. Ut euismod commodo dapibus. Integer egestas diam lacinia, egestas ante at, ultricies odio. Vestibulum quam leo, malesuada et sem quis, venenatis viverra nunc. Nulla vulputate felis posuere, luctus ipsum a, venenatis libero. Nulla aliquam erat lacus. Suspendisse sit amet tortor dolor. Nulla nec dui et nibh pharetra luctus. Sed scelerisque magna at odio facilisis aliquam. Pellentesque fermentum leo a erat fermentum porta. Ut sed mauris id felis fringilla tincidunt a sit amet ligula. Nulla semper nisl non metus aliquam, ut egestas nisi blandit.',
            date: '19 июня 2022',
            time: '23:13'
        },
        {
            id: v1(),
            text: 'Morbi et neque auctor, maximus lectus vitae, mattis felis. Duis gravida non tortor at aliquet. Nulla interdum nunc a velit tincidunt, sed sodales erat porta. Ut ligula diam, accumsan ac vestibulum nec, consequat in libero. Quisque at tempus turpis. Integer eleifend sapien tellus, sed egestas turpis efficitur at. Fusce sit amet ante ut odio consequat maximus nec sed massa. Suspendisse eleifend imperdiet nulla at iaculis. Sed quam metus, pellentesque eget cursus id, pharetra aliquet turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam tristique risus eget dolor pellentesque molestie. Nam in vulputate turpis.',
            date: '19 июня 2022',
            time: '23:13'
        },
        {
            id: v1(),
            text: 'Integer consectetur rutrum tempus. Phasellus volutpat nibh eu velit interdum, gravida rhoncus libero mattis. Maecenas dapibus turpis ut velit pharetra congue. Nam placerat risus ac semper egestas. Cras odio nibh, ornare ac varius at, pretium vel sem. Nullam tincidunt blandit nulla. Integer eget ultrices dui. Cras pellentesque feugiat iaculis. Suspendisse pellentesque velit id sem lacinia, ac feugiat nisl gravida. Mauris sit amet neque lacus. Pellentesque nec luctus justo.',
            date: '19 июня 2022',
            time: '23:13'
        }
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let today = new Date();
            let newPost: PostType = {
                id: v1(),
                text: action.postMessage,
                date: today.toISOString().substring(0, 10),
                time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            }
            state.posts.push(newPost)
            return state;
        case 'CHANGE-NEW-TEXT' :
            state.newPostText = action.newText
            return state;
        default:
            return state
    }
}

export const addPostActionCreator = (text: string) => ({type: "ADD-POST", postMessage: text} as const)
export const changeNewTextActionCreator = (text: string) => ({type: "CHANGE-NEW-TEXT", newText: text} as const)