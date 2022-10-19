import {v1} from "uuid";
import vika from "../assets/img/jpg/Vika.jpg";
import {ActionTypes} from "../App";

export type UserType = {
    id: string
    name: string
    avatar: string
    profileStatus: string
    isOnline: boolean
    isFriend: boolean
    location: {
        city: string
        country: string
    }
}
export type FriendType = {
    id: string
    name: string
    avatar: string
    isOnline: boolean
    isFriend: boolean
}

export type FriendsPageType = {
    users: UserType[]
    friends: FriendType[]
}

export type FollowAT = ReturnType<typeof followAC>
export type UnfollowAT = ReturnType<typeof unfollowAC>
export type SetUsersAT = ReturnType<typeof setUsersAC>

let initialState = {
    users: [
        {
            id: v1(),
            name: 'Юрий Максимов',
            avatar: 'https://sun9-58.userapi.com/c5780/u139529585/a_87394db2.jpg',
            profileStatus: 'Люблю пить пиво, делать всякую дичь и вообще я лютый фрик',
            isOnline: true,
            isFriend: false,
            location: {
                city: 'Речица',
                country: 'Беларусь'
            }
        },
        {
            id: v1(),
            name: 'Юрий Максимов',
            avatar: 'https://sun9-58.userapi.com/c5780/u139529585/a_87394db2.jpg',
            profileStatus: 'Люблю пить пиво, делать всякую дичь и вообще я лютый фрик',
            isOnline: true,
            isFriend: false,
            location: {
                city: 'Речица',
                country: 'Беларусь'
            }
        },
        {
            id: v1(),
            name: 'Юрий Максимов',
            avatar: 'https://sun9-58.userapi.com/c5780/u139529585/a_87394db2.jpg',
            profileStatus: 'Люблю пить пиво, делать всякую дичь и вообще я лютый фрик',
            isOnline: true,
            isFriend: false,
            location: {
                city: 'Речица',
                country: 'Беларусь'
            }
        },
        {
            id: v1(),
            name: 'Юрий Максимов',
            avatar: 'https://sun9-58.userapi.com/c5780/u139529585/a_87394db2.jpg',
            profileStatus: 'Люблю пить пиво, делать всякую дичь и вообще я лютый фрик',
            isOnline: true,
            isFriend: true,
            location: {
                city: 'Речица',
                country: 'Беларусь'
            }
        }
    ],
    friends: [
        {
            id: v1(),
            name: 'Вика Весна',
            avatar: vika,
            isOnline: true,
            isFriend: true,
        },
        {
            id: v1(),
            name: 'Артём Богданов',
            avatar: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/9liBNdAgGbURea0peiEX1vU2mMreebnLQ0_AE3eZah-SiYCzYxFPYbM44brLZ7E_mgPOyE3gerbTjUp4OTml905T.jpg?size=200x200&quality=96&crop=1,271,1616,1616&ava=1',
            isOnline: true,
            isFriend: true,
        },
        {
            id: v1(),
            name: 'Сергей Чирик',
            avatar: 'https://sun9-85.userapi.com/impf/eH663FhQBe59DwG3pmXf8QlyPHe3nBe8u_FeMQ/oGSTXgBVuR0.jpg?size=480x640&quality=96&sign=6a3fa959d6890c0057a09c04f2d6384b&type=album',
            isOnline: false,
            isFriend: true,
        },
        {
            id: v1(),
            name: 'Владислав Кожановский',
            avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/joeEGBFPzIP62tYdAcxwPC2JNUwZfFTBoeEjZC8fXAdN6zAX95rLHuEoe5WYYuicoCVV8s9uA3SeJ4PCbZFsQOQ8.jpg?size=200x200&quality=96&crop=124,378,558,558&ava=1',
            isOnline: false,
            isFriend: true,
        },
        {
            id: v1(),
            name: 'Дмитрий Чернышёв',
            avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/TiJxuwfm2-qU-WKtL8vsigbqqG4foZen1AMhcSmihVJ57DWwgBIcOlpelOC1biXuFSLT6A.jpg?size=200x279&quality=96&crop=0,5,1163,1624&ava=1',
            isOnline: true,
            isFriend: true,
        },
        {
            id: v1(),
            name: 'Илья Кошкар',
            avatar: 'https://sun9-36.userapi.com/c4120/u54902459/a_cfa9c11f.jpg',
            isOnline: false,
            isFriend: true,
        },
        {
            id: v1(),
            name: 'Юра Максимов',
            avatar: 'https://sun9-58.userapi.com/c5780/u139529585/a_87394db2.jpg',
            isOnline: true,
            isFriend: true,
        },
        {
            id: v1(),
            name: 'Валентин Кобец',
            avatar: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/wm3yUKRbvLZyTM71lhFz42IQNCW65_6PjsFtAhQzgCLRCLzLiSlk2phqcJj2BPxy5Px0PgfFKi0s5nkJVVPEjsWc.jpg?size=200x266&quality=96&crop=0,0,1620,2160&ava=1',
            isOnline: true,
            isFriend: true,
        }
    ],
}

export const friendsReducer = (state: FriendsPageType = initialState, action: ActionTypes): FriendsPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFriend: true}
                    }
                    return u
                })
            };
        case "UNFOLLOW" :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, isFriend: false}
                    }
                    return u
                })
            };
        case "SET-USERS" :
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (id: string) => ({type: 'FOLLOW', userId: id} as const)
export const unfollowAC = (id: string) => ({type: 'UNFOLLOW', userId: id} as const)
export const setUsersAC = (users: UserType[]) => ({type: "SET-USERS", users: users} as const)