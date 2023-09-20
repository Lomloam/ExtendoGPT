import React from 'react'
import {createRoot} from 'react-dom/client';
import '../assets/tailwind.css';

const test = (
    <div>
        <img src= 'logo192.png' alt="flower" />
    </div>
)

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);


