import { Dispatch } from 'react';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { photoAPI } from '../../api/api';
import { FetchPhotosSuccess } from '../../types/photos';
import { RootState } from '../store';
import { getPhotosAction } from './photosReducer';

type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>;
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;

type ActionsType = InferActionsTypes<typeof getPhotosAction>;
type ThunkType = BaseThunkType<ActionsType>;

export const getPhotos = (): ThunkType => async (dispatch: Dispatch<FetchPhotosSuccess>) => {
	const photos = await photoAPI.getPhotos();
	const albums = await photoAPI.getAlbums();
	dispatch(getPhotosAction(photos, albums));
	return;
};
