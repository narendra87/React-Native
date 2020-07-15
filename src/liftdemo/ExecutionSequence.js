import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';


class ExecutionSequence extends Component {
    constructor(props) {
        super(props)
        const { params } = this.props.route;
        this.listUpEntries = params.listUpEntries.sort(function (a, b) { return a - b });
        this.listDownEntries = params.listDownEntries.sort(function (a, b) { return b - a });
        this.finalExecutionArray = this.listUpEntries.concat(this.listDownEntries);
        this.liftArray = this.finalExecutionArray.map((item,index)=>
        <Text style={{fontSize:18}}  key={index.toString()}>
        {(index != this.finalExecutionArray.length - 1) ? `${item}` + "->" : `${item}`}
        </Text>
        );
    }

    render() {

        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontSize:24}}>Order of Execution is :</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    {this.liftArray}
                </View>
            </SafeAreaView>
        );
    }
}

export default ExecutionSequence;