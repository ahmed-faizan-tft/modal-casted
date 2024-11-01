import React, { useState } from 'react';
import Styles from './Paggination.module.css';
import { createPaggination } from '../utils/page';

const Paggination = () => {
    const totalPages = 7;
    const [page, setPage] = useState(1);
    const [pageData, setPageData] = useState(() => createPaggination(totalPages, 1));

    const handlePageChange = (e) => {
        const name = e?.target?.dataset?.name;
        let newPage = page;

        if (name === "prev" && page > 1) {
            newPage = page - 1;
        } else if (name === "next" && page < totalPages) {
            newPage = page + 1;
        } else if (!isNaN(Number(name))) {
            newPage = Number(name);
        }

        if (newPage !== page) {
            setPage(newPage);
            const data = createPaggination(totalPages, newPage);
            setPageData(data);
        }
    };

    return (
        <div className={Styles.container}>
            <ul>
                <li
                    onClick={page > 1 ? handlePageChange : null}
                    style={{ background: page === 1 ? "none" : "" }}
                    data-name="prev"
                >
                    Prev
                </li>
                {
                    pageData && pageData.map((newPageData, index) => (
                        <li
                            key={index}
                            onClick={newPageData !== "..." ? handlePageChange : null}
                            style={{ background: page == newPageData ? "blue" : "" }}

                            data-name={`${newPageData}`}
                        >
                            {newPageData}
                        </li>
                    ))
                }
                <li
                    onClick={page < totalPages ? handlePageChange : null}
                    style={{ background: page === totalPages ? "none" : "" }}
                    data-name="next"
                >
                    Next
                </li>
            </ul>
        </div>
    );
};

export default Paggination;
