import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import applyInc from '../../actions';
import FrameWork from '../frameWorks';

const App = () => {

  const [items, setItems] = useState({});
  const [total, setTotal] = useState(0);

  const frameWorks = useSelector(state => state.items);
  const frameWorksIds= useSelector(state => state.itemsIds);
  const totalSum = useSelector(state => state.total);
  const dispatch = useDispatch();

  useEffect(() => {
    setItems(frameWorks);
    setTotal(totalSum);
  }, [frameWorks, totalSum])

  const handleIncrement = (id) => {
    dispatch(applyInc(id))
  };

  const renderListItems = () => frameWorksIds.map((id) => {
    if(items[id]) {
      return <FrameWork
      key={id}
      onClick={handleIncrement}
      name={items[id].name}
      count={items[id].count}
      id = {id} />} else {
    return null}});

  return (
    
    <Fragment>
      {renderListItems()}
      <div className='total'>Total  {total}</div>
    </Fragment>
  )
}
export default App;