import React,{Component} from 'react';
import styles from './App.css';
import moment from 'moment';
import Accordion from '../Accordion/Accordion';
import Controller from '../Controller/Controller';

class App extends Component{
    componentDidMount(){
        this.props.fetchList();
    }
    getRatingStart(rating){
        var ratingIcon = [];
        for(var i=0;i<rating;i++){
            ratingIcon.push(<span className="star-icon fa fa-star checked"></span>);
        }
        return ratingIcon;
    }
    getAvailableMessage(departDate,forDay){
        return (<p className="hotel-det">
                    <span className="bold">{moment(departDate).format('Do MMMM YYYY')+' '}</span>
                    for<span className="bold">{" "+forDay+' days'}</span>;
                </p>)
    }
    render(){
        //console.log("this props",this.props.state.loading);
        if(this.props.state.loading){
            return null
        }
        return(
            <div id="pageWrapper">
                <Controller {...this.props} />
                <div id="displayboard">
                    {this.props.state.modifiedList.map((hotel,key)=>{
                        return (
                            <div className="hotel-container">
                                <div className="hotel_wrapper">
                                    <div className="hotel-content-continer left">
                                        <img className="hotel-img" src={hotel.hotelImage} />
                                    </div>
                                    <div className="hotel-content-continer right">
                                        <p className="hotel-name">{hotel.hotelName}</p>
                                        <p>{hotel.location}</p>
                                        <p>{this.getRatingStart(hotel.rating)}</p>
                                        <p className="hotel-det">{hotel.accCapacity}</p>
                                        {this.getAvailableMessage(hotel.departDate,hotel.availableDuration)}
                                        <p>Deprating From <span className="bold">{hotel.departingFrom}</span></p>
                                        <button className="bookNow-btn">
                                            <p>Book Now</p>
                                            <p className="bookNow-price bold">{hotel.price}</p>
                                        </button>
                                        {/* <p>{hotel.status}</p> */}
                                    </div>
                                </div>
                                <Accordion hoteldet={hotel.overview} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App;