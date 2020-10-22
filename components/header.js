
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Header extends React.Component {
   constructor(props){
       super(props);
   }
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#264653",
        padding: 15,
        height: 60 
    },
    text: {
        color: '#e9c46a',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: "bold",
    }
});
