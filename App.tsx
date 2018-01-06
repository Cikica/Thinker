import * as React from "react";
import { Provider } from "react-redux";
import { StyleSheet, View, Text } from "react-native";

import { MakeStore } from "./Store";

import BookChapterContainer from "./containers/BookChapterContainer";

export default class App extends React.Component { 

    constructor(props) {
        super(props);
    }

    render() {
        let store = MakeStore();
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <BookChapterContainer/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        // alignItems: 'center',
    },
});
