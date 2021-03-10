import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import FrameWork from '../frameWorks';

const App = () => {

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const value = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const items = [];    
    let total = 0;
    for (let key in value) {
      items.push({ name: key, count: value[key] });
      total+=value[key];
    }
    setItems(items);
    setTotal(total)
  }, [value])

  const useInc = (field) => {
    dispatch({type: 'INC', payload: field})
  };

  const renderListItems = () => items.map((item) => (
    <FrameWork
      key={item.name}
      onClick={useInc}
      name={item.name}
      count={item.count} />
  ));

  return (
    <Fragment>
      {renderListItems()}
      <div className='total'>Total  {total}</div>
    </Fragment>
  )
}
export default App;