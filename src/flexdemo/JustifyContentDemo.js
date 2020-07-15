import React, { Component } from 'react';
import {
    StyleSheet,
    View,Text
} from 'react-native';

export default function justifyContentDemo(){

        return (
            <View style={{flex:1, alignItems: 'flex-start'}}>
                 <Text style = {{padding:20}}>Flex Direction Row alignItems 'center', Justify content 'sapce-between'</Text>
            <View style={styles.flexStyleDirectionRow}>

                <View style={styles.view1Style} />
                <View style={styles.view2Style} />
                <View style={styles.view3Style} />

            </View>
            <Text style = {{padding:20}}>Flex Direction RowReverse alignItems 'Flex-start', Justify content 'sapce-evenly'</Text>
            <View style={styles.flexStyleDirectionRowReverse}>

                <View style={styles.view1Style} />
                <View style={styles.view2Style} />
                <View style={styles.view3Style} />

            </View>
            <Text style = {{padding:20}}>Flex Direction RowReverse alignItems 'Flex-start', Justify content 'sapce-around'</Text>
            <View style={styles.flexStyleDirectionJustifyContentSpaceAround}>

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
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'pink',
        flexDirection:'row',
        height: 300,
    },
    flexStyleDirectionRowReverse: {
        flex: 1,
        width:'100%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        backgroundColor: 'gray',
        flexDirection:'row-reverse'
    },
    flexStyleDirectionJustifyContentSpaceAround: {
        flex: 1,
        width:'100%',
        justifyContent: 'space-around',
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
