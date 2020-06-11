import React from 'react';

import AppBar from './AppBar/AppBar';

const layout = (props) => (
    <React.Fragment>
        <div><AppBar /></div>
        <main>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;