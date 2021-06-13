import React, { FC } from 'react';

type PropsType = {
	postsPerPage: number;
	totalPosts: number;
	paginate: (pageNum: number) => void;
	nextPage: (e: any) => void;
	previousPage: (e: any) => void;
};

const Pagination: FC<PropsType> = ({ postsPerPage, totalPosts, paginate, nextPage, previousPage }: PropsType) => {

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<>
			<nav>
				<ul className="pagination justify-content-center">
					<li onClick={previousPage} className="page-item"><a className="page-link" href="">Previous</a></li>
					{
						pageNumbers.map((item, id) => (
							<li key={id} className="page-item">
								<a onClick={() => paginate(item)} className="page-link" href="#">{item}</a>
							</li>
						))
					}
					<li onClick={nextPage} className="page-item"><a className="page-link" href="">Next</a></li>
				</ul>
			</nav>
		</>
	);
};

export default Pagination;
