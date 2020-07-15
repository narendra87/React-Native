import React, { Component } from 'react';
import { View, SafeAreaView, FlatList, TouchableOpacity, Alert, Text } from 'react-native';
import ListRow from './ListRow';


class LiftScreen extends Component {

    liftDataList = [{ data: { isUpPress: false, isDownPress: false, floorPosition: 6 }, id: "1" },
    { data: { isUpPress: false, isDownPress: false, floorPosition: 5 }, id: "2" },
    { data: { isUpPress: false, isDownPress: false, floorPosition: 4 }, id: "3" },
    { data: { isUpPress: false, isDownPress: false, floorPosition: 3 }, id: "4" },
    { data: { isUpPress: false, isDownPress: false, floorPosition: 2 }, id: "5" },
    { data: { isUpPress: false, isDownPress: false, floorPosition: 1 }, id: "6" },
    { data: { isUpPress: false, isDownPress: false, floorPosition: 0 }, id: "7" },
    ];

    constructor(props) {
        super(props)
        this.listUpEntries = [];
        this.listDownEntries = [];
        this.state = {
            dataSource: this.liftDataList
        }
    }
    handelSelectionChange = (position, isUp, isSelected) => {
        if (isUp) {
            this.state.dataSource[position].data.isUpPress = isSelected
            if (isSelected) {
                this.listUpEntries.push(this.state.dataSource[position].data.floorPosition)
            } else {
                this.listUpEntries.pop(this.state.dataSource[position].data.floorPosition)
            }

        } else {
            this.state.dataSource[position].data.isDownPress = isSelected
            if (isSelected) {
                this.listDownEntries.push(this.state.dataSource[position].data.floorPosition)
            } else {
                this.listDownEntries.pop(this.state.dataSource[position].data.floorPosition)
            }
        }
        this.setState({ dataSource: this.state.dataSource })
    }

    render() {

        return (
            <SafeAreaView style={{ flex: 20 }}>
                <View style={{ margin: 10, flex: 19 }}>
                    <FlatList
                        data={this.state.dataSource}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return <View>
                                <ListRow item={item.data}
                                    position={index}
                                    handelSelectionChange={(position, isUp, isSelected) => this.handelSelectionChange(position, isUp, isSelected)}
                                />
                            </View>
                        }}
                    />
                </View>
                <View style={{ alignItems: "center", flex: 1, width: "100%",justifyContent:'center' }}>
                    <TouchableOpacity style={{ width: 200, height: 50, borderColor: 'black', borderWidth: 2 ,alignItems: "center",justifyContent:'center',backgroundColor:'gray'}}
                        onPress={() => {
                            this.props.navigation.navigate("ExecutionSequence", { listUpEntries: this.listUpEntries, listDownEntries: this.listDownEntries })
                        }}
                    >
                        <Text style={{alignSelf:'center'}}> Start Execution</Text>

                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
export default LiftScreen;