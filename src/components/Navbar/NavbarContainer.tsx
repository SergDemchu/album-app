import React, { FC, useState } from 'react';

import Navbar from './Navbar';

type PropsType = {
	searchValue: string;
	setSearchValue: (value: string) => void;
}

const NavbarContainer: FC<PropsType> = ({ searchValue, setSearchValue }: PropsType) => {

	const [inputValue, setInputValue] = useState('');

	const handleSearch = (e: any) => {
		setInputValue(e.target.value);
	};

	return (
		<>
			<Navbar
				inputValue={inputValue}
				searchValue={searchValue}
				handleSearch={handleSearch}
				setSearchValue={setSearchValue}
			/>
		</>
	);
};

export default NavbarContainer;