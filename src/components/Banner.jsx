import React from 'react'
import bnrImage from "../img/bnr.jpg"

function Banner() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 p-0">
                    <img src={bnrImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner