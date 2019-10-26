import React from 'react';

function getBadgeClasses({ value }) {
  let classes = 'badge m-2 badge-';
  classes += value === 0 ? 'warning' : 'primary';
  return classes;
}

function formatCount({ value }) {
  return value === 0 ? 'Zero' : value;
}

const Counter = ({ counter, onIncrement, onDelete, onDecrement }) => {
  return (
    <div className="row">
      <div className="col-1">
        <span className={getBadgeClasses(counter)}>{formatCount(counter)}</span>
      </div>
      <div className="col">
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={!counter.value ? 'disabled' : ''}
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Counter;
