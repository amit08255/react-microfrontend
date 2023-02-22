import * as React from 'react';
import "./styles.css";

export default function App({ onChange }) {
  return (
    <div className="MicroApp">
      <h1>Micro App</h1>
      <input onChange={onChange} type="text" placeholder="Enter your name" />
    </div>
  );
}
