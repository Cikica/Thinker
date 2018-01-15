import * as React from "react";
import { StyleSheet, View, ScrollView, Button, TextInput, Text } from "react-native";
import { connect, Dispatch } from "react-redux";

import { IState } from "./../reducers/RootReducer";

export const BookOutlineEditStyles = StyleSheet.create({
    root: {
        flex: 1,
    },
    __controls: {
        height: 50,
        flexDirection: "row",
        justifyContent: "flex-end",
        
    },
    __content: {
        flex: 1,
        alignItems: "center",
    },
    __input: {
        width: 650,
        fontSize: 20,
        textAlign: "center",
        fontStyle: "italic",
    }
});

interface IBookOutlineEditContainer extends IBookOutlineEditContainerStateProps, IBookOutlineEditContainerDispatchProps {};

interface IBookOutlineEditContainerStateProps {};

interface IBookOutlineEditContainerDispatchProps {};

let MapStateToProps = (state: IState): IBookOutlineEditContainerStateProps => {
    return {
    };
}

let MapDispatchToProps = (dispatch: Dispatch<IState>): IBookOutlineEditContainerDispatchProps => {
    return {
    };
}

export class BookOutlineEditContainer extends React.Component<IBookOutlineEditContainer, {}> {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }

    render() {
        return (
            <View style={BookOutlineEditStyles.root}>
                <View style={BookOutlineEditStyles.__controls}>
                    <Button
                        title={"Done"}
                        onPress={() => {console.log("onOutlineEditDonePress")}}
                    />
                </View>
                <View style={BookOutlineEditStyles.__content}>
                    <TextInput
                        style={BookOutlineEditStyles.__input}
                        multiline={true}
                        value={this.state.text}
                        onChangeText={(text) => {this.setState({text})}}
                    />
                </View>
            </View>
        );
    }
}

export default connect(
    MapStateToProps,
    MapDispatchToProps,
)(BookOutlineEditContainer);
