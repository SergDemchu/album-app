import React, { FC, useEffect, useState } from 'react';
import { Photos } from '../../types/photos';
import Card from './Card';
import Pagination from '../Common/Pagination/Pagination';

type PropsType = {
	photos: Array<Photos>;
	searchValue: string;
	clickedAlbumId: number;
}

const CardContainer: FC<PropsType> = ({ photos, searchValue, clickedAlbumId }: PropsType) => {

	const [currentPage, setCurrentPage] = useState(1);
	const [currentPhotos, setCurrentPhotos] = useState([]);
	const [pageNumbers, setPageNumbers] = useState([]);
	const photosPerPage = 15;

	useEffect(() => {
		const lastPhotoIndex = currentPage * photosPerPage;
		const firstPhotoIndex = lastPhotoIndex - photosPerPage;
		const photosSliced = photos.slice(firstPhotoIndex, lastPhotoIndex);
		setCurrentPhotos(photosSliced);
	
		const pageNums = [];
	
		for (let i = 1; i <= Math.ceil(photos.length / photosPerPage); i++) {
			pageNums.push(i);
		}
		setPageNumbers(pageNums);
	}, [photos, currentPage]);

	return (
		<div className="d-flex flex-wrap">
			{
				currentPhotos.map((item, id) => {
					return (
						item.title.toLowerCase().includes(searchValue.toLowerCase()) 
						&& clickedAlbumId === item.albumId
							? <Card
								key={id}
								image={item.thumbnailUrl}
								title={item.title}
							/>
							: null
					);
				})
			}
			<Pagination
				pageNumbers={pageNumbers}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
		</div>
	);
};

export default CardContainer;
