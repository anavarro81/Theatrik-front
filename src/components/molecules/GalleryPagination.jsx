
const Pagination = ({totalPlays, playsPerPage, setCurrentPage, currentPage}) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPlays / playsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='flex justify-center py-6 gap-x-6'>
            <button onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}>prev</button>
            {pages?.map((page, index) => 
                    <button 
                        key={index} 
                        onClick={() => setCurrentPage(page)} 
                        className={page == currentPage ? "text-bold bg-orangeDesign text-white w-8 h-8 rounded-full" : "text-grayDesign"}>
                        {page}
                    </button>
                )
            }
            <button onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(totalPlays / playsPerPage)}>post</button>
        </div>
    );
};

export default Pagination;