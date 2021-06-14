import React, { ChangeEvent, FC, MouseEvent } from 'react';

type PropsType = {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    searchValue: string;
    onSetSearchValue: (e: MouseEvent, value: string) => void;
    inputValue: string;
}

const Header: FC<PropsType> = ({ handleSearch, inputValue, onSetSearchValue }: PropsType) => (
	<nav className="navbar navbar-light bg-light">
		<a className="navbar-brand">Album</a>
		<form className="form-inline">
			<input onChange={handleSearch} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
			<button onClick={(e) => onSetSearchValue(e, inputValue)} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form>
	</nav>
);

export default Header;
