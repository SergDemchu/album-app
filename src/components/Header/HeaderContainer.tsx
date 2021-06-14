import React, { ChangeEvent, FC, useState } from 'react';

import Header from './Header';

type PropsType = {
	searchValue: string;
	onSetSearchValue: (e: any, value: string) => void;
}

const HeaderContainer: FC<PropsType> = ({ searchValue, onSetSearchValue }: PropsType) => {

	const [inputValue, setInputValue] = useState('');

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<>
			<Header
				inputValue={inputValue}
				searchValue={searchValue}
				handleSearch={handleSearch}
				onSetSearchValue={onSetSearchValue}
			/>
		</>
	);
};

export default HeaderContainer;