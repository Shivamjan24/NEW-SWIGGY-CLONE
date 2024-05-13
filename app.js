import React from 'react';
import ReactDom from 'react-dom/client';

const Heading = () => {
    return <h1>This is first one</h1>
};
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<Heading />);
