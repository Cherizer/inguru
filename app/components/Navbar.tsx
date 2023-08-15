import React, { useState } from 'react';
import ReactFlagsSelect, { Us } from "react-flags-select";

function Navbar() {
    const [selected, setSelected] = useState("");
    return (
        <nav className="navbar bg-gray-800 flex items-center justify-between p-4">
            <h1 className="navbar-title text-white text-center flex-grow">InGuru</h1>
            <div className="flag-drop ml-auto flex items-center">
            <ReactFlagsSelect
                countries={["GB", "LV", "EE", "LT", "RU"]}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                showSelectedLabel={false}
                showOptionLabel={false}
            />
            </div>
            
            
        </nav>
    );
}

export default Navbar;