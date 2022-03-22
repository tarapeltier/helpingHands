import React from 'react'
import './Master.css';

const BoardMembers = (props) => {
    

    return (
        <>
        <div className="card-deck">
            <div className="card board-card">
                <img className="card-img-top board-image rounded-circle" src="beverly.jpg" alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">Beverly Haller</h5>
                </div>
            </div>
            <div className="card board-card">
                <img className="card-img-top board-image rounded-circle" src="Sharon.jpg" alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">Sharon Ridley</h5>
                </div>
            </div>
            <div className="card board-card">
                <img className="card-img-top board-image rounded-circle" src="sue.jpg" alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">Sue Morgan</h5>
                </div>
            </div>
            <div className="card board-card">
                <img className="card-img-top board-image rounded-circle" src="tan.jpg" alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">Tan Williams</h5>
                </div>
            </div>
            </div>
        </>
    )
}

export default BoardMembers;

