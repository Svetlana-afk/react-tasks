import React, { Fragment } from 'react';
import './App.css';
import FrameWork from '../frameWorks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      total: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    let total = 0;
    let result = state.items;
    let changed = false;

    props.value.forEach((item) => {
      let id = item.name;
      if (!result[id]) {
        result[id] = item;
        changed = true;
      }
    });

    Object.values(result).map((item) => {
      total += item.count;
    });

    if (state.total !== total) changed = true;

    if (changed)
      return { items: result, total: total };
    else
      return null;
  }

  inc = (field) => {
    let tmp = this.state.items;
    tmp[field].count++;

    this.setState((state) => {
      return {
        items: tmp
      }
    })
  }

  renderListItems = () => Object.keys(this.state.items).map((key) =>
  (<FrameWork
    key={key}
    onClick={this.inc}
    name={this.state.items[key].name}
    count={this.state.items[key].count} />)
  );

  render() {
    return (
      <Fragment>
        {this.renderListItems()}
        <div className='total'>Total  {this.state.total}</div>
      </Fragment>
    )
  }
}
export default App;