import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export const BookParagraphStyles = StyleSheet.create({
    root: {
        paddingBottom: 5,
    },
    __input: {
        fontSize: 16,
    }
});

export class BookParagraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
    }

    onChangeText(text) {
        this.setState({ text: text });
    }
    
    render() {
        return (
            <View style={BookParagraphStyles.root}>
                <TextInput
                    style={BookParagraphStyles.__input}
                    multiline={true}
                    onChangeText={this.onChangeText.bind(this)}
                    value={this.state.text}
                />
            </View>
        );
    }
}
