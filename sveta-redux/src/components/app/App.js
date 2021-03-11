import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import applyInc from '../../actions';
import FrameWork from '../frameWorks';

const App = () => {

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const frameWorks = useSelector(state => state.items);
  const frameWorksName = useSelector(state => state.itemsName);
  const totalSum = useSelector(state => state.total);
  const dispatch = useDispatch();

  useEffect(() => {
    const items = [];
    for (let name of frameWorksName) {
      items.push({ name: name, count: frameWorks[name]});
    }
    setItems(items);
    setTotal(totalSum)
  }, [frameWorks, frameWorksName, totalSum])

  const handleIncrement = (field) => {
    dispatch(applyInc(field))
  };

  const renderListItems = () => items.map((item) => (
    <FrameWork
      key={item.name}
      onClick={handleIncrement}
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