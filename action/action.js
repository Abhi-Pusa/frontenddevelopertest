const createDispatchObj = (type,payload) => {
    return {type:type,payload:payload}
}

const sortingFunction = (type,actualList) => {
    var newList = [];
    if(type=="price"){
        newList = actualList.sort((a,b) => {
            let a1 = parseFloat(a.price.replace(',','').substr(1));
            let b1 = parseFloat(b.price.replace(',','').substr(1));
            //console.log("price",a1,b1);
            if(a1>b1){return 1;}
            else if(a1<b1){return -1;}
            else{return 0;}
        });
    }else if(type=="alphabetically"){
        newList = actualList.sort((a,b) => {
            if(a.hotelName>b.hotelName){return 1;}
            else if(a.hotelName<b.hotelName){return -1;}
            else{return 0;}
        });
    }else if(type == "rating"){
        newList = actualList.sort((a,b) => {
            // console.log(a.rating,b.rating);
            if(a.rating>b.rating){return 1;}
            else if(a.rating<b.rating){return -1;}
            else{return 0;}
        });
    }
    return newList;
}

const filterFunction = (type,value,actualList) => {
    let newList = actualList;

    if(type == "name" && value){
        newList = actualList.filter((hotel) => {
            //console.log("abhi",hotel.hotelName,value);
           return (hotel.hotelName.toLowerCase().indexOf(value.toLowerCase()) != -1);
        })
    }else if(type="departdate" && value){
        console.log("this comes here ",type,value,actualList);
        newList = actualList.filter((hotel)=>{
            //console.log("date",new Date(hotel.departDate),new Date(value));
            let departDate =new Date(hotel.departDate).getDate();
            let selectedDate = new Date(value).getDate();
            let departMonth =new Date(hotel.departDate).getMonth();
            let selectedMonth = new Date(value).getMonth();
            let departYear =new Date(hotel.departDate).getFullYear();
            let selectedYear = new Date(value).getFullYear();
            return (departDate==selectedDate && departMonth==selectedMonth && departYear == selectedYear);
        })
    }
    return newList;
}

export const fetchList = () => (dispatch,getState) => {
    //console.log(createDispatchObj("UPDATE_LOADING",true));
    dispatch(createDispatchObj("UPDATE_LOADING",true));
    fetch('/getHotelList').then(res => res.json()).then((result) => {
        //console.log("result of api",result);
        dispatch(createDispatchObj("UPDATE_ACTUALLIST",result[0]["hotelList"]));
        var modifiedList = sortingFunction("alphabetically",result[0]["hotelList"]);
        dispatch(createDispatchObj("UPDATE_MODIFIEDLIST",modifiedList));
        dispatch(createDispatchObj("UPDATE_ERROR",false));
        dispatch(createDispatchObj("UPDATE_LOADING",false));
    },(error) => {
        dispatch(createDispatchObj("UPDATE_ERROR",true));
        dispatch(createDispatchObj("UPDATE_LOADING",false));
        console.log("error",error);
    });
    //console.log(dispatch,getState);
}

export const sortList = (type) => (dispatch,getState) => {
    //console.log(type,getState());
    var {state: actualList} = getState();

    var updatedList = sortingFunction(type,actualList["actualList"]);
    // console.log("changed value",newList);
    dispatch(createDispatchObj("UPDATE_MODIFIEDLIST",updatedList));
}

export const filterList = (type,value) => (dispatch,getState) => {
    var {state: actualList} = getState();
    //console.log("filter function",type,value);
    var updatedList = filterFunction(type,value,actualList["actualList"]);
    dispatch(createDispatchObj("UPDATE_MODIFIEDLIST",updatedList));
}