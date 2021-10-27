import React from 'react';
import './state.css';
class State_lesson extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            // date:new Date(),
        };
    }
    increment(){
        this.setState({count:this.state.count + 1})
    }
    decrement(){
        this.setState({count:this.state.count - 1})
    }
    reset(){
        this.setState({count:0})
    }

    render(){
        return(
            <div>
                
                <div className="count">
                    <div className="center">
                        <div className='counter'>
                            <input value={this.state.count} />
                        </div>
                        <div className="count_button">
                            <button onClick={(e) => this.increment(e)}>+</button>
                            <button onClick={(e) => this.decrement(e)}>-</button>
                        </div>
                        <div className="reset_button">
                            <button onClick={(e) => this.reset(e)}>reset</button>
                        </div>
                    </div>
                    {/* <p>Today is {this.state.date.toLocaleDateString()}</p> */}
                </div>
            </div>
        )
    }
}
export default State_lesson;