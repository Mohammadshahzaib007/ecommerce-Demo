import React from 'react';



const MyPagination = ({ productPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for( let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++ ) {
        pageNumbers.push(i);
    }



    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map( num => {
                      return  <li key={num} className="page-item">
                            <a onClick={() => paginate(num)} href="#toFirstProduct" className="page-link">
                                {num}
                            </a>
                        </li>
                    })
                }
            </ul>
        </nav>
    );
}

export default MyPagination;