import React from 'react';

import Card from '../UI/Card';
import './Search.css';

// Re-renders when only props change
const Search: React.FC = React.memo(props => {
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" />
        </div>
      </Card>
    </section>
  );
});

export default Search;
