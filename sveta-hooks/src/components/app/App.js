import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import FrameWork from '../frameWorks';

const App = ({value}) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect (()=>{
    setItems(value)
  }, [value])

  const useInc = (field) => {
    setItems(
      items.map((item) => {
        if (item.name === field) {
          return { ...item, count: item.count + 1 }
        } else
          return item;
      })
    );
    setTotal(total + 1);
  }

  const renderListItems = () => items.map((item) =>
  (<FrameWork
    key={item.name}
    onClick={useInc}
    name={item.name}
    count={item.count} />)
  );

  return (
    <Fragment>
      {renderListItems()}
      <div className='total'>Total  {total}</div>
    </Fragment>
  )
}
export default App;