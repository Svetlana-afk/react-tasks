import React, {Fragment}from 'react';
import './App.css';
import FrameWork from '../frameWorks';

class App extends React.Component {
  state = {
    items: [{ name: "Angular", count: 0 }, { name: "React", count: 0 }, { name: "Vue", count: 0 }],
    total: 0
  }

  inc = (field) => {
    this.setState((state) => {
      return {
        items: (state.items.map((item) => {
          if (item.name === field) {
            return { ...item, count: item.count + 1 }
          } else
            return item;
        })
        ),
        total: state.total + 1
      }
    })
  }

  renderListItems = () => this.state.items.map((item) =>
  (<FrameWork
    key={item.name}
    onClick={this.inc}
    name={item.name}
    count={item.count} />)
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