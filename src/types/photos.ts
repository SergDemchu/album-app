export interface Photos {
    albumId: null | number
    id: null | number
    title: string
    url: string
    thumbnailUrl: string
}

export interface Albums {
    userId: number
    id: number
    title: string
}

export enum ActionTypes {
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS'
}

export interface FetchPhotosSuccess {
    type: ActionTypes.FETCH_PHOTOS_SUCCESS
    photos: Array<Photos>
    albums: Array<Albums>
}

export type UserAction = FetchPhotosSuccess

export type PhotosAndAlbumsType = {
    photos: Array<Photos>
    albums: Array<Albums>
    isLoaded: boolean
}
