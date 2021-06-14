import React, { FC } from 'react';

type PropsType = {
	title: string;
	onSetAlbumId: (id: number) => void
	albumId: number
}

const Navbar: FC<PropsType> = ({ title, onSetAlbumId, albumId }: PropsType) => (
	<li className="nav-item">
		<a onClick={() => onSetAlbumId(albumId)} className="nav-link" href="#">{title}</a>
	</li>
);

export default Navbar;