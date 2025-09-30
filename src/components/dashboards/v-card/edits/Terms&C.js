import React from 'react';

function Terms() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f4f8', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#333' }}>Terms & Conditions <span style={{ color: 'red' }}>*</span></h2>
      <div style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#fff' }}>
        <div style={{ marginBottom: '10px' }}>
          <select style={{ padding: '5px' }}>
            <option>Normal</option>
          </select>
          <button style={{ marginLeft: '10px', padding: '5px 10px' }}>B</button>
          <button style={{ marginLeft: '5px', padding: '5px 10px' }}>I</button>
          <button style={{ marginLeft: '5px', padding: '5px 10px' }}>U</button>
        </div>
        <textarea
          style={{ width: '100%', height: '200px', padding: '10px', border: '1px solid #ccc', resize: 'vertical' }}
          placeholder="Terms & Conditions"
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <button style={{ backgroundColor: '#4a90e2', color: '#fff', padding: '10px 20px', border: 'none', marginRight: '10px' }}>Save</button>
        <button style={{ backgroundColor: '#9b59b6', color: '#fff', padding: '10px 20px', border: 'none' }}>Discard</button>
      </div>
    </div>
  );
}

export default Terms;