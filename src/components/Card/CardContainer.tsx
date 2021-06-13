import React, { FC } from 'react';
import { Photos } from '../../types/photos';
import Card from './Card';

type PropsType = {
	photos: Array<Photos>;
	searchValue: string;
}

const CardContainer: FC<PropsType> = ({ photos, searchValue }: PropsType) => {
	return (
		<div>
			{
				photos.map((item, id) => (
					item.title.toLowerCase().includes(searchValue.toLowerCase())
						? <Card
							key={id}
							image={item.thumbnailUrl}
							title={item.title}
						/>
						: null
				))
			}
		</div>
	);
};

export default CardContainer;
