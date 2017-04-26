import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from './components/homePage';
import About from './components/about';
import Header from './components/common/header'

class Apps extends Component {
  render(){
    var Child;
    switch(this.props.route){
      case 'about' : Child = About; break;
      default: Child = Home;
    }
    return(
      <div>
      <Header/>
      <Child/>
      </div>
    );

  }

};

function render(){
  var route = window.location.hash.substr(1);
  ReactDOM.render(<Apps route={route}/>, document.getElementById('root'));
}
window.addEventListener('hashchange', render);
render();