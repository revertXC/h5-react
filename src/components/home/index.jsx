import React from 'react';
import {get} from './../../common/config/request'

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        get('weekCount-find', {params: {pageSize:10}}).then(res =>{
            console.log(res);
        })
    }
    render() {
        return (
            <div>Hello Home Page</div>
        )
    }
}


export default Home;