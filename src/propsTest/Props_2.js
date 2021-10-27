import React from 'react';

class Props_2 extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div>
                <h2>Salom {this.props.name}</h2>
                <h1>He is {this.props.age}</h1>
            </div>
        )
    }
}

export default Props_2;