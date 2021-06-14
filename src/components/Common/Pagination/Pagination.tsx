import React, { FC } from 'react';

type PropsType = {
	setCurrentPage: (num: number) => void;
	currentPage: number;
	pageNumbers: Array<number>;
}

const Pagination: FC<PropsType> = ({ setCurrentPage, currentPage, pageNumbers }: PropsType) => {

	const previousPage = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		e.preventDefault();
		if (currentPage -1 === 0) {
			return;
		}
		setCurrentPage(currentPage - 1);
	};

	const nextPage = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		e.preventDefault();
		if (currentPage +1 > pageNumbers.length) {
			return;
		}
		setCurrentPage(currentPage + 1);
	};

	const paginate = (pageNum: number) => {
		setCurrentPage(pageNum);
	};

	return (
		<nav>
			<ul className="pagination justify-content-center">
				<li onClick={(e) => previousPage(e)} className="page-item"><a className="page-link" href="">Previous</a></li>
				{
					pageNumbers.map((item, id) => {
						const activeLi = currentPage === id + 1 ? 'active' : '';
						return (
							<li key={id} className={`page-item ${activeLi}`}>
								<a onClick={() => paginate(item)} className="page-link" href="#">{item}</a>
							</li>
						);
					})
				}
				<li onClick={(e) => nextPage(e)} className="page-item"><a className="page-link" href="">Next</a></li>
			</ul>
		</nav>
	);
};

export default Pagination;
