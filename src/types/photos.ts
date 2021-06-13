export interface Photos {
    albumId: null | number
    id: null | number
    title: string
    url: string
    thumbnailUrl: string
}

export enum ActionTypes {
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS'
}

export interface FetchPhotosSuccess {
    type: ActionTypes.FETCH_PHOTOS_SUCCESS
    photos: Array<Photos>
}

export type UserAction = FetchPhotosSuccess

export type PhotosType = {
    photos: Array<Photos>
    a: boolean
}
