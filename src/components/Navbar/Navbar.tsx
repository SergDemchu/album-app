import React, { FC } from 'react';

type PropsType = {
    handleSearch: (event: any) => void;
    searchValue: string;
    setSearchValue: (value: string) => void;
    inputValue: string;
}

const Navbar: FC<PropsType> = ({ handleSearch, inputValue, setSearchValue }: PropsType) => (
	<nav className="navbar navbar-light bg-light">
		<a className="navbar-brand">Navbar</a>
		<form className="form-inline">
			<input onChange={handleSearch} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
			<button onClick={() => setSearchValue(inputValue)} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form>
	</nav>
);

export default Navbar;