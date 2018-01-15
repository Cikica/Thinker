import * as React from "react";
import { StyleSheet, View, Button, ScrollView, Text } from "react-native";
import { connect, Dispatch } from "react-redux";

import { IState } from "./../reducers/RootReducer";

import { EditOutlineAction, IEditOutlineAction } from "./../actions/EditOutlineAction";

import BookOutlineEditContainer from "./../containers/BookOutlineEditContainer";
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
    __addButton: {
        width: 180,
    }
});

interface IBookContainer extends IBookContainerStateProps, IBookContainerDispatchProps {};

interface IBookContainerStateProps {
    title: string;
    outline: Array<string>;
};

interface IBookContainerDispatchProps {
    eidtOutlinePoint: (pointIndex:number) => IEditOutlineAction;
};

let MapStateToProps = (state: IState): IBookContainerStateProps => {
    return {
        title: state.CurrentBook.title,
        outline: state.CurrentBook.outline,
    };
}

let MapDispatchToProps = (dispatch: Dispatch<IState>): IBookContainerDispatchProps => {
    return {
        eidtOutlinePoint: (pointIndex) => dispatch(EditOutlineAction(pointIndex))
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
                    {/* <View style={BookStyles.__addButton}>
                        <Button
                            title={"+ Add outline point"}
                            onPress={() => {console.log("add outline point")}}
                        />
                    </View> */}
                    {/* DESCRIPTION */}
                    {this.props.outline.map((outlinePoint:string, index) =>
                        <OutlinePoint 
                            key={index}
                            index={index} 
                            text={outlinePoint}
                            onEditOutline={this.props.eidtOutlinePoint}
                        />
                    )}
                </ScrollView>
                <View style={BookStyles.__chapters}>
                    <BookOutlineEditContainer/>
                </View>
            </View>
        );
    }
}

export default connect(
    MapStateToProps,
    MapDispatchToProps,
)(BookContainer);
