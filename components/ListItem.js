
import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        // this.deleteItem = this.props.deleteItem.bind(this);
    }
    render() {
        return (
            <TouchableOpacity style={styles.listItem}>
                <View style={styles.listItemView}>
                    <Text style={styles.listItemText}>{this.props.item.name}</Text>
                    <Text style={styles.listItemHint}>{this.props.item.id}</Text>
                    <Text style={styles.icon}  onPress={() => this.props.deleteItem(this.props.item.id)}>x</Text>

                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
      },
      listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      listItemText: {
          fontSize: 18,
      },
      listItemHint: {
        fontSize: 10,
      },
      icon: {
        color: "#E7505A",
        fontSize: 20,
      }
});
