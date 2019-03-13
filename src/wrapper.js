import React from 'react';
import p5 from 'p5';

export default class Wrapper extends React.Component {

  handleCustom = event => {
    console.log(event)
    return event
  }
  

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);
    window.addEventListener('custom', this.handleCustom)
    if( this.canvas.propsChanged ) {
      this.canvas.propsChanged(this.props);
    }
  }
  

  componentWillReceiveProps(newprops) {
    if(this.props.sketch !== newprops.sketch){
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if( this.canvas.propsChanged ) {
      this.canvas.propsChanged(newprops);
    }
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper}></div>;
  }
}