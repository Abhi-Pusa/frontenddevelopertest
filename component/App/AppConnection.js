import {connect} from 'react-redux';
import {fetchList,sortList,filterList} from '../../action/action';
import App from './App';

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
   return {
    fetchList:() => dispatch(fetchList()),
    sortList:(type) => dispatch(sortList(type)),
    filterList:(type,value) => dispatch(filterList(type,value))
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);