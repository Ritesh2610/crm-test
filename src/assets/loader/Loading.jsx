import React from 'react'

function Loading() {
    return (
        <div
            className='d-flex justify-content-center align-items-center '
            style={{ height: "300px" }}>
            <span className="spinner-border text-success mt-2" role="status"></span>

        </div>
    )
}

export default Loading