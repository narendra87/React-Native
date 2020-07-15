import React, { Component } from 'react';
import {
    StyleSheet,
    View,Text
} from 'react-native';

export default function FlexDirectionDemo(){

        return (
            <View style={{flex:1, alignItems: 'center'}}>
                 <Text style = {{padding:20}}>Flex Direction Row alignItems 'center'</Text>
            <View style={styles.flexStyleDirectionRow}>

                <View style={styles.view1Style} />
                <View style={styles.view2Style} />
                <View style={styles.view3Style} />

            </View>
            <Text style = {{padding:20}}>Flex Direction RowReverse alignItems 'Flex-start'</Text>
            <View style={styles.flexStyleDirectionRowReverse}>

                <View style={styles.view1Style} />
                <View style={styles.view2Style} />
                <View style={styles.view3Style} />

            </View>
            </View>
        )
    };



const styles = StyleSheet.create({
    flexStyleDirectionRow: {
        flex: 1,
        width:'100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'pink',
        flexDirection:'row',
        height: 300,
    },
    flexStyleDirectionRowReverse: {
        flex: 1,
        width:'100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'gray',
        flexDirection:'row-reverse'
    },
    view1Style: {
        height: 100,
        width:100,
        backgroundColor: 'blue'
    },
    view2Style: {
        height: 100,
        width:100,
        backgroundColor: 'red'
    },
    view3Style: {
        height: 100,
        width:100,
        backgroundColor: 'green'
    },

});
