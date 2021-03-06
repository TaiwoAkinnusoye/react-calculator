import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import "./App.css";
import Display from './Display';
import Buttons from './Buttons';
import Button from './Button';

class App extends Component {
    
    state = {
        operations: []
    }

    calculateOperations = () => {
        var result = '';
        var operation = '';
        this.state.operations.map((operation, i) => {
            result += operation;
            console.log(result);
        });
        result = String(eval(result));
        console.log(result);
        this.setState({result: result})
    }

    handleClick = (event) => {
        var value = event.target.getAttribute('data-value');

        switch(value) {
            case 'clear':
                this.setState({operations: [], result: ''});
                break;
            case 'equal':
                this.calculateOperations();
                break;
            default: 
            if(this.state.result) {
                this.setState({result: '', operations: []}, () => {
                    this.state.operations.push(value);
                    this.forceUpdate();
                });
            } else {
                this.state.operations.push(value);
            }
            break;
        }
        console.log(operations);
        this.forceUpdate();
    }

    render () {
        return (
            <div className="App">
               <Display data={this.state.operations} result={this.state.result} />
               <Buttons>
               <Button onClick={this.handleClick} label="C" value="clear" />
					<Button onClick={this.handleClick} label="7" value="7" />
					<Button onClick={this.handleClick} label="4" value="4" />
					<Button onClick={this.handleClick} label="1" value="1" />
					<Button onClick={this.handleClick} label="0" value="0" />
					
					<Button onClick={this.handleClick} label="/" value="/" />
					<Button onClick={this.handleClick} label="8" value="8" />
					<Button onClick={this.handleClick} label="5" value="5" />
					<Button onClick={this.handleClick} label="2" value="2" />
					<Button onClick={this.handleClick} label="." value="." />
					
					<Button onClick={this.handleClick} label="X" value="*" />
					<Button onClick={this.handleClick} label="9" value="9" />
					<Button onClick={this.handleClick} label="6" value="6" />
					<Button onClick={this.handleClick} label="3" value="3" />
					<Button label="" value="null" />
					
					<Button onClick={this.handleClick} label="-" value="-" />
					<Button onClick={this.handleClick} label="+" size="2" value="+" />
					<Button onClick={this.handleClick} label="=" size="2" value="equal" />
               </Buttons>
            </div>
        )
    }
};

export default hot(module)(App);