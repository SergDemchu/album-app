import { ActionTypes, FetchPhotosSuccess, Photos, PhotosType, UserAction } from '../../types/photos';

const initialState: PhotosType = {
	photos: [],
	a: false
};

const photosReducer = (state = initialState, action: UserAction): PhotosType => {
	switch (action.type) {
	case ActionTypes.FETCH_PHOTOS_SUCCESS:
		return {
			...state, photos: action.photos
		};
	default:
		return state;
	}
};

export const getPhotosAction = (photos: Array<Photos>): FetchPhotosSuccess => ({ type: ActionTypes.FETCH_PHOTOS_SUCCESS, photos });

export default photosReducer;
