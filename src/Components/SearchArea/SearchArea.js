import React from 'react';

const SearchArea = () => {
    return (
        <div>
            <div className="body_title text-center">
                <h1>I grow by helping people in need.</h1>
                <div className="search_input my-4 d-flex justify-content-center">
                    <input type="text" style={{ width: '470px' }}
                        className='form-control' />
                    <button
                        className='btn btn-info mx-1'
                    >Search</button>
                </div>

            </div>
        </div>
    );
};

export default SearchArea;