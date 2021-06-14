import React, { FC, useState, useEffect } from 'react';

import CardContainer from '../Card/CardContainer';
import HeaderContainer from '../Header/HeaderContainer';
import NavbarContainer from '../Navbar/NavbarContainer';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const MainPageContainer: FC = () => {
	const { photos, albums } = useTypedSelector(state => state.photos);
	const { getPhotos } = useActions();

	const [searchValue, setSearchValue] = useState('');

	const slicedAlbums = albums.slice(0, 3);

	const onSetSearchValue = (e: any, input: string) => {
		e.preventDefault();
		setSearchValue(input);
	};

	const [clickedAlbumId, setClickedAlbumId] = useState(1);

	const onSetAlbumId = (id: number) => {
		setClickedAlbumId(id);
	};

	useEffect(() => {
		getPhotos();
	}, [clickedAlbumId]);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<HeaderContainer
						searchValue={searchValue}
						onSetSearchValue={onSetSearchValue}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col col-lg-3">
					<NavbarContainer
						albums={slicedAlbums}
						onSetAlbumId={onSetAlbumId}
					/>
				</div>
				<div className="col">
					<CardContainer
						photos={photos.filter((photo) => photo.albumId === clickedAlbumId)}
						searchValue={searchValue}
						clickedAlbumId={clickedAlbumId}
					/>
				</div>
			</div>
		</div>
	);
};

export default MainPageContainer;
