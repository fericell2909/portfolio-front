import React  from 'react';
import { Provider } from 'react-redux';

import { store } from './core/redux/store';
import AppRouter  from './core/router/AppRouter';
import i18next from 'i18next';

 const App = () => {


    return (

        <>
        <Provider store={store as any}>
            <AppRouter />
        </Provider>
        </>
    );
};

export default App;