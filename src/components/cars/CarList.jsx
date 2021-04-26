
import React from "react";
import { Link } from "react-router-dom";
import './style.scss';



const CarList = ({ publications }) => {

    return (
        <div className="car-list">
            {
                publications.length <= 0 && <h3>Пока никто  не добавил объявление <img src="https://freepikpsd.com/wp-content/uploads/2019/10/apple-emoji-png-pack-6-Free-PNG-Images-Transparent.png" width="50px" /></h3>
            }
            {
                publications.map((publication, i) => (
                    <div key={i} className="car-item">
                        <Link to={`/publication/${publication.id}/`}>
                            <div className="car-image">
                                <img src={publication.picture} width="125px" />
                            </div>
                            <div className="car-info">
                                <p>{publication.name}</p>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}
export default CarList;