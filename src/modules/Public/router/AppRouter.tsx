import React from  'react';
import Home from '../pages/Home/Home';
import Contactanos from '../pages/Contactanos/Contactanos';

export const Routers = [
        {path: '/', element: <Home></Home>},
        {path: '/contactanos', element: <Contactanos></Contactanos>}
    ];


export default Routers;
