import React from 'react'
import './Master.css';

const BoardMembers = (props) => {
    

    return (
        <>
        <div className="card-deck">
            <div className="card board-card">
                <img className="card-img-top board-image" src="Chrystal.jpg" alt="Card image cap"/>
                <div className="card-body">
                <p className="card-title">Beverly Haller</p>
                </div>
            </div>
            <div className="card board-card">
                <img className="card-img-top board-image" src="Sharon.jpg" alt="Card image cap"/>
                <div className="card-body">
                <p className="card-title">Sharon Ridley</p>
                </div>
            </div>
            <div className="card board-card">
                <img className="card-img-top board-image" src="sue.jpg" alt="Card image cap"/>
                <div className="card-body">
                <p className="card-title">Sue Morgan</p>
                </div>
            </div>
            <div className="card board-card">
                <img className="card-img-top board-image" src="tan.jpg" alt="Card image cap"/>
                <div className="card-body">
                <p className="card-title">Tan Williams</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default BoardMembers;

