import React from 'react';

class Test1 extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props)
    }
    render() {
        return (
            <div>Hello Home Test1</div>
        )
    }
}


export default Test1;