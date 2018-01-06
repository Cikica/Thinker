import * as React from "react";
import { StyleSheet, View, Button, ScrollView } from "react-native";
import { connect, Dispatch } from "react-redux";

import { IState } from "./../reducers/RootReducer";

import { BookParagraph } from "./../components/BookParagraph";
import { BookTitle } from "./../components/BookTitle";

export const BookChapterStyles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: "row",
    },
    __writing: {
        flex: 1,
        paddingLeft: 80,
        paddingRight: 50,
    },
    __controls: {
        width: 180,
        // borderColor: "black",
        // borderWidth: 1,
    },
});

interface IBookChapterContainer extends IBookChapterContainerStateProps, IBookChapterContainerDispatchProps {};

interface IBookChapterContainerStateProps {};

interface IBookChapterContainerDispatchProps {};

let MapStateToProps = (state: IState) => {
    return {
        
    };
}

let MapDispatchToProps = (dispatch: Dispatch<IState>) => {
    return {

    };
}

export class BookChapterContainer extends React.Component<IBookChapterContainer, {}> {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={BookChapterStyles.root}>
                {/* WRITING */}
                <ScrollView style={BookChapterStyles.__writing}>
                    {/* <BookTitle
                        text={this.props.chapter.title}
                    />
                    <BookParagraph
                        text={this.props.chapter.text[0]}
                    /> */}
                </ScrollView>
                {/* CONTROLS */}
                <View style={BookChapterStyles.__controls}>
                    <Button
                        title="Done"
                        onPress={() => {console.log("you is a hoe")}}
                    />
                </View>
            </View>
        );
    }
}

export default connect(
    MapStateToProps,
    MapDispatchToProps,
)(BookChapterContainer);
