'use client'

import React from 'react';
import {Adsense} from "@ctrl/react-adsense";


const GoogleAdComponent = () => {
    return (
        <div>
            <Adsense
                client="ca-pub-9337558103292164"
                slot="7669076034"
                style={{display: 'block'}}
                responsive="true"
                format="auto"
            />
        </div>
    );
};

export default GoogleAdComponent;
