
import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, Alert, TextInput, TouchableOpacity } from 'react-native';
import Header from './components/header';
import ListItem from './components/ListItem';
import { v4 as uuidv4 } from 'uuid';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			items: [
				{ id: uuidv4(), name: 'Apple' },
				{ id: uuidv4(), name: 'Banana' },
				{ id: uuidv4(), name: 'Grapes' },
			]
		};
		this.deleteItem = this.deleteItem.bind(this);
	}

	deleteItem = (id) => {
		// console.log('id:', id)
		this.setState(prevState => {
			let { items } = prevState;
			
			return { items: items.filter(item => item.id != id) };
		});
	};

	addItem = (text) => {
		console.log('text:', text)
		let notEmpty = text.trim().length > 0;

		if (notEmpty) {

			this.setState(
				prevState => {
					let { items } = prevState;
					return {
						items: items.concat({id: uuidv4(),name: text}),
						text: ""
					};
				}
			);
		} else {
			Alert.alert('Invalid Input', 'Enter Item Name First');
		}
		
	}

	render() {
		return (
			<View style={styles.container}>
				<Header title='ToDo App with Class' />
				<TextInput style={styles.input} placeholder="Enter Item Name" onChangeText={(val) => this.state.text = val}></TextInput>
				<TouchableOpacity style={styles.btn} onPress={() => this.addItem(this.state.text)}>
					<Text style={styles.btnText} >
						Add Item
					</Text>
				</TouchableOpacity>
				<FlatList
					data={this.state.items}
					renderItem={({ item }) => <ListItem item={item} deleteItem={this.deleteItem} />}
					keyExtractor={item => item.id}
				></FlatList>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

	},
	input: {
		height: 60,
		padding: 8,
		fontSize: 16,
	},
	btn: {
		backgroundColor: '#e9c46a',
		padding: 8,
		margin: 5,
		borderRadius: 10,
	},
	btnText: {
		color: '#264653',
		fontSize: 20,
		padding: 8,
		textAlign: 'center',
	}
});
