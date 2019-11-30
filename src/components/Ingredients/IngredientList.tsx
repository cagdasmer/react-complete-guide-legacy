import React from 'react';
import PropTypes from 'prop-types';
import { IngredientArray } from '../../types/types';

import './IngredientList.css';

interface IngredientListProps {
  ingredients: IngredientArray;
  onRemoveItem(id: string): void;
}

const IngredientList: React.FC<IngredientListProps> = props => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map(ig => (
          <li
            key={ig.id}
            onClick={(): void => {
              props.onRemoveItem(ig.id);
            }}
          >
            <span>{ig.title}</span>
            <span>{ig.amount}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

export default IngredientList;
