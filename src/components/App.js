import React from 'react';
import ColorPicker from './ColorPicker';

export default function App() {
  const colorArray = ['red', 'blue', 'yellow'];

  return (
    <>
    <ColorPicker colors = { colorArray } />
    </>
  );
}
