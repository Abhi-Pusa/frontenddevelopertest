import React,{Component} from 'react';
import styles from './Accordion.css';

class Accordion extends Component{
    constructor(){
        super();
        this.state={
            open:false
        }
        this.getReadStatement = this.getReadStatement.bind(this);
    }
    getReadStatement(){
        if(!this.state.open){
            return (<span className="bold">Read More</span>)
        }else{
            return (<span className="bold">Read Less</span>)
        }
    }
    getDropDownIcon(){
        if(this.state.open){
            return (<span className="acc-icon fa fa-angle-down"></span>)
        }else{
            return (<span className="acc-icon fa fa-angle-right"></span>)
        }
    }
    _onClickHandler(){
        this.setState({open:!this.state.open});
    }
    render(){
        return(
            <div>
                <p className="accordion-header" onClick={this._onClickHandler.bind(this)}>
                    {this.getReadStatement()} about this hotel
                    {this.getDropDownIcon()}
                </p>
                <div className="accordion-body" style={this.state.open?{maxHeight:"500px"}:{maxHeight:"0px"}}>
                    <p className="content-head bold">Overview</p>
                    <p className="content-body">{this.props.hoteldet}</p>
                </div>
                
            </div>
        )
    }
}

export default Accordion;