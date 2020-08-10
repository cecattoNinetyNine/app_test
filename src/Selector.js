import React from 'react';
import './Selector.css';

export function Selector()
{   
    return(
        <div className="Selector" id="divSelector">
            <div className="Intervalo" id="divIntervalo">
                Intervalo (dd/mm/aaaa):
            </div>
            <form className="Data" id="divData">
                <input type="text" className="From" id="inputFrom" maxLength="10" size="10" placeholder="dd/mm/aaaa"
                pattern="[1-9]{2}+/[1-9]{2}+/[0-9]{4}" required></input>

                <p> até </p>

                <input type="text" className="To" id="inputTo" maxLength="10" size="10" placeholder="dd/mm/aaaa"
                pattern="[1-9]{2}+/[1-9]{2}+/[0-9]{4}" required></input>
            </form>
        </div>
    );
}

export default Selector;