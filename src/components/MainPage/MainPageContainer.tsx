import React, { FC, useState, useEffect } from 'react';

import CardContainer from '../Card/CardContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import Pagination from '../Common/Pagination/Pagination';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const MainPageContainer: FC = () => {
	const { photos } = useTypedSelector(state => state.photos);
	const { getPhotos } = useActions();

	const [currentPage, setCurrentPage] = useState(1);
	const [photosPerPage, setPostsPerPage] = useState(5);
	const [totalPhotos, setTotalPosts] = useState(100);

	const lastPhotoIndex = currentPage * photosPerPage;
	const firstPhotoIndex = lastPhotoIndex - photosPerPage;
	const currentPhotos = photos.slice(firstPhotoIndex, lastPhotoIndex);

	const [searchValue, setSearchValue] = useState('');

	const paginate = (pageNum: number) => {
		setCurrentPage(pageNum);
	};

	const nextPage = (e: any) => {
		e.preventDefault();
		setCurrentPage(currentPage + 1);
	};

	const previousPage = (e: any) => {
		e.preventDefault();
		setCurrentPage(currentPage - 1);
	};

	useEffect(() => {
		getPhotos();
	}, [currentPage]);

	return (
		<>
			<NavbarContainer
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<CardContainer
				photos={currentPhotos}
				searchValue={searchValue}
			/>
			<Pagination
				nextPage={nextPage}
				paginate={paginate}
				totalPosts={totalPhotos}
				previousPage={previousPage}
				postsPerPage={photosPerPage}
			/>
		</>
	);
};

export default MainPageContainer;
