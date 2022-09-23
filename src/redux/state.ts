import {v1} from "uuid";
import ava from "../assets/img/jpg/Morty.jpg";
import vika from '../assets/img/jpg/Vika.jpg'

export type DialogType = {
    id: string
    name: string
}

export type PostType = {
    id: string
    text: string
    date: string
    time: string
}

export type MessageType = {
    id: string
    name: string
    message: string
}

export type FriendType = {
    id: string
    name: string
    avatar: string
    isOnline: boolean
}

export type ProfileType = {
    img: string
    name: string
    birthday: string
    city: string
    followers: number
    photos: number
}


export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type FriendsPageType = {
    friends: FriendType[]
}

export type ProfilePageType = {
    profile: ProfileType
    posts: PostType[]
    newPostText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    friendsPage: FriendsPageType
}

export type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}

export type ChangeNewTextPostActionType = {
    type: 'CHANGE-NEW-TEXT',
    newText: string
}

export type storeType = {
    _state: RootStateType
    getState: () => RootStateType
    _rerenderEntireTree: (_state: RootStateType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: AddPostActionType| ChangeNewTextPostActionType) => void
}

export const store: storeType = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Сергей Чирик'},
                {id: v1(), name: 'Юра Максимов'},
                {id: v1(), name: 'Виктор Стороженко'},
                {id: v1(), name: 'Артем Богданов'},
            ],
            messages: [
                {id: v1(), name: 'Сергей Чирик', message: 'hi'},
                {id: v1(), name: 'Артем Богданов', message: 'how are u?'},
                {id: v1(), name: 'Сергей Чирик', message: 'not bad,and u?'},
                {id: v1(), name: 'Артем Богданов', message: 'tnx, im fine'},
            ]
        },
        friendsPage: {
            friends: [
                {
                    id: v1(),
                    name: 'Вика Весна',
                    avatar: vika,
                    isOnline: true
                },
                {
                    id: v1(),
                    name: 'Артём Богданов',
                    avatar: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/9liBNdAgGbURea0peiEX1vU2mMreebnLQ0_AE3eZah-SiYCzYxFPYbM44brLZ7E_mgPOyE3gerbTjUp4OTml905T.jpg?size=200x200&quality=96&crop=1,271,1616,1616&ava=1',
                    isOnline: true
                },
                {
                    id: v1(),
                    name: 'Сергей Чирик',
                    avatar: 'https://sun9-85.userapi.com/impf/eH663FhQBe59DwG3pmXf8QlyPHe3nBe8u_FeMQ/oGSTXgBVuR0.jpg?size=480x640&quality=96&sign=6a3fa959d6890c0057a09c04f2d6384b&type=album',
                    isOnline: false
                },
                {
                    id: v1(),
                    name: 'Владислав Кожановский',
                    avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/joeEGBFPzIP62tYdAcxwPC2JNUwZfFTBoeEjZC8fXAdN6zAX95rLHuEoe5WYYuicoCVV8s9uA3SeJ4PCbZFsQOQ8.jpg?size=200x200&quality=96&crop=124,378,558,558&ava=1',
                    isOnline: false
                },
                {
                    id: v1(),
                    name: 'Дмитрий Чернышёв',
                    avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/TiJxuwfm2-qU-WKtL8vsigbqqG4foZen1AMhcSmihVJ57DWwgBIcOlpelOC1biXuFSLT6A.jpg?size=200x279&quality=96&crop=0,5,1163,1624&ava=1',
                    isOnline: true
                },
                {
                    id: v1(),
                    name: 'Илья Кошкар',
                    avatar: 'https://sun9-36.userapi.com/c4120/u54902459/a_cfa9c11f.jpg',
                    isOnline: false
                },
                {
                    id: v1(),
                    name: 'Юра Максимов',
                    avatar: 'https://sun9-58.userapi.com/c5780/u139529585/a_87394db2.jpg',
                    isOnline: true
                },
                {
                    id: v1(),
                    name: 'Валентин Кобец',
                    avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/wm3yUKRbvLZyTM71lhFz42IQNCW65_6PjsFtAhQzgCLRCLzLiSlk2phqcJj2BPxy5Px0PgfFKi0s5nkJVVPEjsWc.jpg?size=200x266&quality=96&crop=0,0,1620,2160&ava=1',
                    isOnline: true
                }
            ]
        }
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log('state was changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                let today = new Date();
                let newPost: PostType = {
                    id: v1(),
                    text: action.postMessage,
                    date: today.toISOString().substring(0, 10),
                    time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
                }
                this._state.profilePage.posts.push(newPost)
                this._rerenderEntireTree(this._state)
                break;
            case 'CHANGE-NEW-TEXT' :
                this._state.profilePage.newPostText = action.newText
                this._rerenderEntireTree(this._state)
        }
    }
}