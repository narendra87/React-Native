import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.buttonStyle}>
                <Button
                    title="Redux Example"
                    onPress={() => {
                        navigation.navigate("Counter")
                    }} />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title="Flex Demo"
                    onPress={() =>
                        navigation.navigate("FlexDemo")
                    }
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title="Modal Demo"
                    onPress={() =>
                        navigation.navigate("CustomModal")
                    }
                />
                </View>
                 <View style={styles.buttonStyle}>
                <Button
                    title="Timer and Stopwatch"
                    onPress={() =>
                        navigation.navigate("TimerStopwatch")
                    }
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title="Hooks Demo"
                    onPress={() =>
                        navigation.navigate("HooksDemo")
                    }
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title="Flatlist Demo"
                    onPress={() =>
                        navigation.navigate("LiftScreen")
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
