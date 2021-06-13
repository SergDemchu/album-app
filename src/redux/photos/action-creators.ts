import { Dispatch } from 'react';
import { photoAPI } from '../../api/api';
import { Photos, UserAction } from '../../types/photos';
import { getPhotosAction } from './photosReducer';

export const getPhotos = () => async (dispatch: Dispatch<UserAction>) => {
	const data = await photoAPI.getPhoto();
	dispatch(getPhotosAction(data));
};
