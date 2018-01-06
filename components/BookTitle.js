import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export const BookTitleStyles = StyleSheet.create({
    root: {
        paddingBottom: 15,
    },
    __input: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
    }
});

export class BookTitle extends React.Component {

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
            <View style={BookTitleStyles.root}>
                <TextInput
                    style={BookTitleStyles.__input}
                    multiline={true}
                    onChangeText={this.onChangeText.bind(this)}
                    value={this.state.text}
                />
            </View>
        );
    }
}
