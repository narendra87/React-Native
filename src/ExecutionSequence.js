import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';


class ExecutionSequence extends Component {
    constructor(props) {
        super(props)
        const { params } = this.props.route;
        this.listUpEntries = params.listUpEntries.sort(function (a, b) { return a - b });
        this.listDownEntries = params.listDownEntries.sort(function (a, b) { return b - a });
        this.finalExecutionArray = this.listUpEntries.concat(this.listDownEntries);
        this.liftArray = []
        for (var i = 0; i < this.finalExecutionArray.length; i++) {
            this.liftArray.push(
                <Text style={{fontSize:18}}>
                    {(i != this.finalExecutionArray.length - 1) ? `${this.finalExecutionArray[i]}` + "->" : `${this.finalExecutionArray[i]}`}

                </Text>
            )
        }
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