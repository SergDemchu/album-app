import React, { FC } from 'react';
import { Albums } from '../../types/photos';
import Navbar from './Navbar';

type PropsType = {
	albums: Array<Albums>;
	onSetAlbumId: (id: number) => void;
}

const NavbarContainer: FC<PropsType> = ({ albums, onSetAlbumId }: PropsType) => {

	return (
		<div>
			<ul className="nav flex-column">
				{
					albums.map((item, id) => (
						<Navbar
							onSetAlbumId={onSetAlbumId}
							key={id}
							title={item.title}
							albumId={item.id}
						/>
					))
				}
			</ul>
		</div >
	);
};

export default NavbarContainer;
