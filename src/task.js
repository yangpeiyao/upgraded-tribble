import React,{Component} from 'react';
import{bindActionCreators} from "redux";
import {connect} from "react-redux";
import {requestApiData} from "./actions";

class Task extends Component {
  
componentDidMount(){
    //place we can make the get request
   this.props.requestApiData();
}
numbers = (x,i)=>{
    // eslint-disable-next-line no-unused-expressions
    <div key={x.id.value}>
    <h1>{x.operation}</h1>
    <h1>{x.left}</h1>
    <h1>{x.right}</h1>
    
    </div>
}
    render(){

        const {numbers=[]}=this.props.data;
        return numbers.length?(
            <div>
                numbers and operation:
      {
          numbers.map(parseInt(this.data))
      }
      
     
            </div>
        ):<h1>loading...</h1>
    }
}


const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Task);

