import React from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';

// Components
import { BookParagraph } from "./BookParagraph";
import { BookTitle } from "./BookTitle";

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

export class BookChapter extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={BookChapterStyles.root}>
                {/* WRITING */}
                <ScrollView style={BookChapterStyles.__writing}>
                    <BookTitle
                        text={this.props.chapter.title}
                    />
                    <BookParagraph
                        text={this.props.chapter.text[0]}
                    />
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
