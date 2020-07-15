import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

class ListRow extends React.Component {

    render() {
        const { floorPosition, isUpPress, isDownPress } = this.props.item;
        return (
            <View >
                <View style={styles.parentView}>
                    <View
                        style={(isUpPress || isDownPress) ? styles.floorButtonSelected : styles.floorButtonUnselected}
                    />
                    {floorPosition != 6 ?
                        <TouchableOpacity style={isUpPress ? styles.liftButtonSelected : styles.liftButtonUnselected}
                            onPress={() => {
                                this.props.handelSelectionChange(this.props.position, true, !isUpPress)
                            }}
                        >
                            <Image
                                source={require('../src/assets/images/arrow_up_copy.png')}
                                style={styles.imageStyle} />
                            <Text>
                                {floorPosition == 0 ? "Lift Floor G" : "Lift Floor " + `${floorPosition}`}
                            </Text>
                        </TouchableOpacity> : null
                    }
                    {floorPosition != 0 ?
                        <TouchableOpacity style={isDownPress ? styles.liftButtonSelected : styles.liftButtonUnselected}
                            onPress={() => {
                                this.props.handelSelectionChange(this.props.position, false, !isDownPress)
                            }}
                        >
                            <Image
                                source={require('../src/assets/images/arrow_down_copy.png')}
                                style={styles.imageStyle} />
                            <Text>
                                {"Lift Floor " + `${floorPosition}`}
                            </Text>
                        </TouchableOpacity>
                        : null
                    }
                </View>
                {floorPosition == 0 ? <View style={{ width: '100%', height: 2, backgroundColor: 'black' }} /> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentView: {
        flexDirection: "row",
        flex: 1,
        height: 100,
        borderTopWidth: 2,
        borderStartWidth: 2,
        borderEndWidth: 2,
        borderColor: 'black'
    },
    imageStyle: {
        width: 20,
        height: 20
    },
    liftButtonUnselected: {
        flexDirection: "column",
        borderWidth: 2,
        borderColor: 'black',
        margin: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'white'
    },
    liftButtonSelected: {
        flexDirection: "column",
        borderWidth: 2,
        margin: 10,
        borderColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'green'
    },
    floorButtonUnselected: {
        width: 100,
        height: 100,
        borderEndWidth: 2,
        borderEndColor: 'black',
        backgroundColor: 'white'
    },
    floorButtonSelected: {
        width: 100,
        height: 100,
        borderEndWidth: 2,
        borderEndColor: 'black',
        backgroundColor: 'green'
    }
});
export default ListRow;