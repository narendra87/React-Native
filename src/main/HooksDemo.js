import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

export default HooksDemo = () => {
   const [counter, setCounter] = useState(0)
   const [start, setStart] = useState(false)

    useEffect(() => {
        const interval = this.setTimeout(() => {
            setCounter(counter + 1)
           
        }, 500);
        return()=>{
            clearTimeout(interval)
        }
    });

    return (
        <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style= {{fontSize:18}}>
                counter is : {counter}
            </Text>
        </View>
    )
};
