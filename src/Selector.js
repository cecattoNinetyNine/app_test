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
                <input type="text" className="From" id="inputFrom" size="10" placeholder="dd/mm/aaaa"></input>
                <p> até </p>
                <input type="text" className="To" id="inputTo" size="10" placeholder="dd/mm/aaaa"></input>
            </form>
        </div>
    );
}

export default Selector;