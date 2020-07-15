import React, { Component } from 'react';
import {
    StyleSheet,
    View,Button
} from 'react-native';
export default function  FlexDemo ({navigation}){

        return (
            <View style={styles.container}>
            <View style={styles.buttonStyle}>
                <Button
                    title="Flex Direction Demo"
                    onPress={() => {
                        navigation.navigate("FlexDirectionDemo")
                    }} />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title=" Justify Content Demo"
                    onPress={() =>
                        navigation.navigate("JustifyContentDemo")
                    }
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title="Align Self Demo"
                    onPress={() =>
                        navigation.navigate("AlignSelfDemo")
                    }
                />
            </View>
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        margin:20
    },
    buttonStyle: {
        marginTop: 20
    }
});
