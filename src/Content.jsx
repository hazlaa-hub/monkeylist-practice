import React, { useState } from 'react';


const Content = ({ monkeys, handleDelete }) => {
  const [search, setSearch] = useState('');


  const filteredMonkeys = monkeys.filter((monkey) =>
    monkey.Name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <main style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Monkey List</h2>


      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search monkeys by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '10px',
            width: '250px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
      </div>


      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {filteredMonkeys.length ? (
          filteredMonkeys.map((monkey, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                width: '250px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <img
                src={monkey.Image}
                alt={monkey.Name}
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }}
              />


              <h3>{monkey.Name}</h3>
              <p><strong>Location:</strong> {monkey.Location}</p>
              <p style={{ fontSize: '14px', color: '#555' }}>{monkey.Details}</p>


              <button
                onClick={() => handleDelete(monkey.Name)}
                style={{
                  backgroundColor: '#ff4d4d',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p style={{ marginTop: '20px', color: '#777' }}>No monkeys found!</p>
        )}
      </div>
    </main>
  );
};


export default Content;

