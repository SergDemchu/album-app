import { ActionTypes, Albums, FetchPhotosSuccess, Photos, PhotosAndAlbumsType, UserAction } from '../../types/photos';

const initialState: PhotosAndAlbumsType = {
	photos: [],
	albums: [],
	isLoaded: false
};

const photosReducer = (state = initialState, action: UserAction): PhotosAndAlbumsType => {
	switch (action.type) {
	case ActionTypes.FETCH_PHOTOS_SUCCESS:
		return {
			...state, photos: action.photos, albums: action.albums
		};
	default:
		return state;
	}
};

export const getPhotosAction = (photos: Array<Photos>, albums: Array<Albums>): FetchPhotosSuccess => ({ type: ActionTypes.FETCH_PHOTOS_SUCCESS, photos, albums });

export default photosReducer;
