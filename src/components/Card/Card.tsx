import React, { FC } from 'react';

type PropsType = {
    image: string;
    title: string;
}

const Card: FC<PropsType> = ({ image, title }: PropsType) => (
	<div className="card" style={{width: '9rem', margin: '10px'}}>
		<img src={image} className="card-img-top" alt="..." />
		<div className="card-body" style={{ padding: '5px'}}>
			<p className="card-text">{title}</p>
		</div>
	</div>
);

export default Card;