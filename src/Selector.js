import React from 'react';
import './Selector.css';

export function Selector()
{   
    return(
        <div className="Selector" id="divSelector">
            <div className="Intervalo" id="divIntervalo">
                Intervalo (dd/mm/aaaa):
            </div>
            <div className="Data" id="divData">

            </div>
        </div>
    );
}

export default Selector;