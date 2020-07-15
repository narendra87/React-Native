import React, {Component} from 'react';
import {
   StyleSheet,
   View,
  Text,
  Button
} from 'react-native';
import { changeCount } from '../actions/counts'
import { connect } from 'react-redux';

class Counter extends Component{

   increment() {
    let {count } = this.props
    count++
    this.props.changeCurrentCount(count)
  }
  decrement() {
    let {count } = this.props
    count--
    this.props.changeCurrentCount(count)
  }
  render(){
    const {count} = this.props
    return (
    <View style={styles.container}>  
      <Text >
      The Current Count is: {count.toString()}
      </Text>
      <View style = {styles.buttonStyle}>
      <Button 
      title = "Increment"
     onPress={()=> this.increment()

     }
     />
     </View>
     <View style = {styles.buttonStyle}>
 <Button style = {styles.buttonStyle}
    title = "Decrement"
     onPress={()=> this.decrement()

     }
     />
</View>
    </View>
  )
    }

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    marginTop: 20
  }
});

const mapStateToProps = (state) => {
  if(state !=null){
   const {count: countObj } = state;
   const {count} = countObj;
console.log("State:",state)
console.log("count:",count)
  return {
    count
};
  }
};

const mapDispatchToProps = (dispatch) => {
return {
  changeCurrentCount: (count) =>{
   return dispatch(changeCount(count))
}

}
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
