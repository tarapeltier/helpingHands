import React from 'react'
import './Master.css';
import Masonry from 'react-masonry-css';

const BoardMembers = (props) => {
    

    return (
        <>
        <Masonry
            breakpointCols={{default: 4,
                            1000: 3,
                            700: 2}}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            
            <div className="card board-card">
                <img className="card-img-top board-image rounded-circle" src="beverly_headshot2.jpg" alt="Card cap1"/>
                <div className="card-body">
                    <h5 className="card-title board-card-title">Beverly Haller</h5>
                    <h5 className="card-subtitle board-card-subtitle">President</h5>
                </div>
            </div>
            <div className="card board-card">
                <img className="card-img-top board-image rounded-circle" src="lisa_headshot2.jpg" alt="Card cap4"/>
                <div className="card-body">
                    <h5 className="card-title board-card-title">Lisa Ogle</h5>
                    <h5 className="card-subtitle board-card-subtitle">Secretary</h5>
                </div>
            </div>
            <div className="card board-card">
                <img className="card-img-top board-image rounded-circle" src="Olivia.jpeg" alt="Card cap6"/>
                <div className="card-body">
                    <h5 className="card-title board-card-title">Olivia Bartholomew</h5>
                    <h5 className="card-subtitle board-card-subtitle">Treasurer</h5>
                </div>
            </div>
            <div className="card board-card">
                <img className="card-img-top board-image rounded-circle" src="sue.jpg" alt="Card cap3"/>
                <div className="card-body">
                    <h5 className="card-title board-card-title">Sue Ewig</h5>
                    <h5 className="card-subtitle board-card-subtitle">Board Member</h5>
                </div>
            </div>
            <div className="card board-card">
                <img className="card-img-top board-image rounded-circle" src="Tam.jpg" alt="Card cap5"/>
                <div className="card-body">
                    <h5 className="card-title board-card-title">Tam Dalle Molle</h5>
                    <h5 className="card-subtitle board-card-subtitle">Board Member</h5>
                </div>
            </div>
            <div className="card board-card">
                <img className="card-img-top board-image rounded-circle" src="Chrystal.png" alt="Card cap7"/>
                <div className="card-body">
                    <h5 className="card-title board-card-title">Chrystal Terhune</h5>
                    <h5 className="card-subtitle board-card-subtitle">Board Member</h5>
                </div>
            </div>
            <div className="card board-card">
                <img className="card-img-top board-image rounded-circle" src="sharon_headshot3.jpg" alt="Card cap2"/>
                <div className="card-body">
                    <h5 className="card-title board-card-title">Sharon Ladin</h5>
                    <h5 className="card-subtitle board-card-subtitle">Board Member</h5>
                </div>
            </div>
            <div className="card board-card">
                <img className="card-img-top board-image rounded-circle" src="Jacob.jpeg" alt="Card cap8"/>
                <div className="card-body">
                    <h5 className="card-title board-card-title">Jacob Boswell</h5>
                    <h5 className="card-subtitle board-card-subtitle">Board Member</h5>
                </div>
            </div>
        </Masonry>
        
        </>
    )
}

export default BoardMembers;

