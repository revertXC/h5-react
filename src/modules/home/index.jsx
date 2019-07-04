import React from 'react';
import {get} from '../../common/config/request/index';

import { connect } from 'react-redux';
import { printText} from "./redux/actions";
import { InputItem} from 'antd-mobile';

class Home extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state = {
            input: 'Hello Redux',
            outInput: ''
        };
    }
    componentDidMount(){
        // get('weekCount-find', {params: {pageSize:10}}).then(res =>{
        //     console.log(res);
        // })
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps.print_text != this.state.outInput){
            this.setState({
                outInput: nextProps.print_text
            })
        }
    }
    updateInput = input => {
        this.setState({ input });
    };

    handleAddTodo = () => {
        this.props.printText(this.state.input);
        this.setState({ input: "" });
    };
    render() {
        return (
            <div>
                <div>Hello Home Page</div>
                <div>
                    <InputItem
                        onChange={v => this.updateInput(v)}
                        value={this.state.input}
                    >文字</InputItem>
                    <button className="add-todo" onClick={this.handleAddTodo}>
                        打印文字
                    </button>
                    <InputItem
                        value={this.state.outInput}
                    >输出文字</InputItem>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    // console.log("mapStateToProps state", state)
    const {Home} = state;
    return {
        print_text: Home && Home.text ? Home.text.content : ''
    };
};

export default connect(
    mapStateToProps,
    { printText}
)(Home);;