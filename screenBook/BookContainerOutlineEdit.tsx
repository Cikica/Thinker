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

interface IBookOutlineEditContainerStateProps {
    text: string;
};

interface IBookOutlineEditContainerDispatchProps {};

let MapStateToProps = (state: IState): IBookOutlineEditContainerStateProps => {
    return {
        text: state.CurrentBook.outline[state.CurrentBook.outlineInEdit]
    };
}

let MapDispatchToProps = (dispatch: Dispatch<IState>): IBookOutlineEditContainerDispatchProps => {
    return {
    };
}

export class BookContainerOutlineEdit extends React.Component<IBookOutlineEditContainer, {}> {

    constructor(props) {
        super(props);
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
                        value={this.props.text}
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
)(BookContainerOutlineEdit);
