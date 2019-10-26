import React from 'react';
import Counter from './counter';

const Counters = ({
  onReset,
  counters,
  onIncrement,
  onDelete,
  onDecrement
}) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map(counter => (
        <Counter
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          key={counter.id}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
