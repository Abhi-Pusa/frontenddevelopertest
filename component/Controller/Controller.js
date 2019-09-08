import React,{Component} from 'react';
import styles from './Controller.css';

class Controller extends Component{
    constructor(){
        super();
        this.state = {
            activeBtn:0
        }
        this._onClickHandler = this._onClickHandler.bind(this);
    }
    _onClickHandler(type,num){
        this.props.sortList(type);
        this.setState({activeBtn:num});
    }
    _onChangeHandler(type,e){
        //console.log("target",type,e.target.value);
        this.props.filterList(type,e.target.value);
    }
    render(){
        return(
            <div id="controller">
                <div id="controller-wrapper">
                    <div className={(this.state.activeBtn==0)?"controller-btn active":"controller-btn"} onClick={() => this._onClickHandler("alphabetically",0)}>
                        <span>sort <span className="bold">Alphabetically</span></span>
                        <i className={(this.state.activeBtn==0)?"icon active fa fa-sort-alpha-desc":"icon fa fa-sort-alpha-desc"}></i>
                    </div>
                    <div className={(this.state.activeBtn==1)?"controller-btn active":"controller-btn"} onClick={() => this._onClickHandler("price",1)}>
                        <span>sort <span className="bold">By Price</span></span>
                        <i className={(this.state.activeBtn==1)?"icon active fa fa-gbp":"icon fa fa-gbp"}></i>
                    </div>
                    <div className={(this.state.activeBtn==2)?"controller-btn active":"controller-btn"} onClick={() => this._onClickHandler("rating",2)}>
                        <span>sort <span className="bold">By Rating</span></span>
                        <i className={(this.state.activeBtn==2)?"icon active fa fa-star":"icon fa fa-star"}></i>
                    </div>
                    <div className="filter-wapper">
                        <input className="filter-input" placeholder="Filter By Name" onChange={this._onChangeHandler.bind(this,"name")}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Controller;