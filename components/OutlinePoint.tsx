import * as React from "react";
import { StyleSheet, View, Button, Text, TextInput } from "react-native";

export interface IOutlinePointProps {
    text: string;
}

export const OutlinePointStyles = StyleSheet.create({
    root: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 5,
        marginBottom: 10,
        borderColor: "#d3d3d3",
        borderWidth: 1,
        borderStyle: "dashed",
    },
    __text: {
        fontStyle: "italic",
        marginBottom: 5,
    },
    __controls: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export class OutlinePoint extends React.Component<IOutlinePointProps> {
    render() {
        return (
            <View style={OutlinePointStyles.root}>
                {/* TEXT */}
                <Text style={OutlinePointStyles.__text}>{this.props.text}</Text>
                {/* REMOVE/ADD */}
                <View style={OutlinePointStyles.__controls}>
                    <Button 
                        title="-"
                        onPress={() => {console.log("remove card")}}
                    />
                    <Button 
                        title="+"
                        onPress={() => {console.log("add card")}}
                    />
                </View>
            </View>
        );
    }
}
