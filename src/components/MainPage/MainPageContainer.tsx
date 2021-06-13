import React, { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import MainPage from './MainPage';

const MainPageContainer: FC = () => {
	const { photos } = useTypedSelector(state => state.photos);
	const { getPhotos } = useActions();
  
	useEffect(() => {
		getPhotos();
	}, []);
    
	console.log(photos);
	return (
		<div>
			<MainPage />
		</div>
	);
};

export default MainPageContainer;
