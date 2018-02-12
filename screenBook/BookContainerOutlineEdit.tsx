import * as React from "react";
import { StyleSheet, View, ScrollView, Button, TextInput, Text } from "react-native";
import { connect, Dispatch } from "react-redux";

import { IState } from "./../reducers/RootReducer";
import { BookActionTypeOutlineText, IBookActionTypeOutlineText } from "./BookActionTypeOutlineText";
import { BookActionSaveOutlineEdit, IBookActionSaveOutlineEdit } from "./BookActionSaveOutlineEdit";

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
    }
});

interface IBookOutlineEditContainer extends IBookOutlineEditContainerStateProps, IBookOutlineEditContainerDispatchProps {};

interface IBookOutlineEditContainerStateProps {
    text: string;
};

interface IBookOutlineEditContainerDispatchProps {
    typeInOutline: (text:string) => IBookActionTypeOutlineText;
    saveOutlineChanges: () => IBookActionSaveOutlineEdit;
};

let MapStateToProps = (state: IState): IBookOutlineEditContainerStateProps => {
    return {
        text: state.CurrentBook.outlineInEditText,
    };
}

let MapDispatchToProps = (dispatch: Dispatch<IState>): IBookOutlineEditContainerDispatchProps => {
    return {
        typeInOutline: (text:string) => dispatch(BookActionTypeOutlineText(text)),
        saveOutlineChanges: () => dispatch(BookActionSaveOutlineEdit()),
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
                        title={"Save"}
                        onPress={this.props.saveOutlineChanges}
                    />
                </View>
                <View style={BookOutlineEditStyles.__content}>
                    <TextInput
                        style={BookOutlineEditStyles.__input}
                        multiline={true}
                        value={this.props.text}
                        onChangeText={this.props.typeInOutline}
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
