import * as React from "react";
import { StyleSheet, View, Button, ScrollView, Text, TextInput } from "react-native";
import { connect, Dispatch } from "react-redux";

import { IState } from "./../reducers/RootReducer";

import { OutlinePoint } from "./../components/OutlinePoint";

export const BookStyles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: "row",
    },
    __outline: {
        flex: 3,
        paddingRight: 20,
    },
    __chapters: {
        flex: 2,
    },
    __title: {
        fontSize: 20,
        paddingBottom: 20,
    },
});

interface IBookContainer extends IBookContainerStateProps, IBookContainerDispatchProps {};

interface IBookContainerStateProps {
    title: string;
    outline: Array<string>;
};

interface IBookContainerDispatchProps {};

let MapStateToProps = (state: IState): IBookContainerStateProps => {
    return {
        title: state.CurrentBook.title,
        outline: state.CurrentBook.outline,
    };
}

let MapDispatchToProps = (dispatch: Dispatch<IState>): IBookContainerDispatchProps => {
    return {

    };
}

export class BookContainer extends React.Component<IBookContainer, {}> {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={BookStyles.root}>
                
                <ScrollView style={BookStyles.__outline}>
                    {/* TITLE */}
                    <Text style={BookStyles.__title}>{this.props.title}</Text>
                    {/* DESCRIPTION */}
                    {this.props.outline.map((outlinePoint:string, index) =>
                        <OutlinePoint 
                            key={index}
                            text={outlinePoint}
                        />
                    )}
                </ScrollView>
                <View style={BookStyles.__chapters}>
                </View>
            </View>
        );
    }
}

export default connect(
    MapStateToProps,
    MapDispatchToProps,
)(BookContainer);
