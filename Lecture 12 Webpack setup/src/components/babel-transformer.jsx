import React from 'react';
import * as Babel from 'babel-standalone';

export default class BabelTransformer extends React.Component {
  constructor() {
    super();
    this.state = {
      inputJSX: '/* Add your JSX here */',
      outputJS: '',
      error: ''
    }
    this.transformJSX = this.transformJSX.bind(this);
  }
  
  transformJSX(event) {
    let code = event.target.value;
    try {
      this.setState({
      outputJS: Babel.transform(code, { sourceMaps: true, presets: ['es2015', 'react'] }).code,
      error: ''
      });
      
      console.log(this.state.outputJS);
    }
    catch(error) {
      this.setState({error: error.message})
    }
  }
  render() {
    
    return (
     <div>
      <div className="container" >
        <textarea onChange={this.transformJSX} defaultValue={this.state.inputJSX}></textarea>
        <pre>
          {this.state.outputJS}
        </pre>
             
      </div>
       <footer>{this.state.error}</footer>  
      </div> 
    )
  } 
};
