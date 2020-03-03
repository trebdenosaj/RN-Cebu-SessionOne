import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
// import Counter from './components/Counter';
import Header from './components/Header';

function ListItem({ record, deleteRow }) {
	return (
		<View key={record.id} style={styles.record}>
			<Text style={styles.label}>{record.label}</Text>
			<Button color="orange" title={'Delete'} onPress={() => deleteRow(record.id)} />
		</View>
	);
}

export default function App() {
	const [todo, setTodo] = useState([{ id: 1, label: 'Default' }]);
	const [input, setInput] = useState('');

	const saveTodo = () => {
		let newTodo = {
			id: Date.now(),
			label: input,
		};

		let newList = [...todo, newTodo];
		setTodo(newList);
		setInput('');
	};

	const deleteTodo = id => {
		let filteredTodo = [...todo].filter(row => row.id !== id);
		setTodo(filteredTodo);
	};

	return (
		<View>
			<Header />

			<View style={styles.inputContainer}>
				<TextInput
					value={input}
					style={styles.input}
					placeholder={'Enter goal here . . '}
					onChangeText={value => setInput(value)}
				/>
				<Button title="ADD ITEM" onPress={saveTodo} />
			</View>

			<FlatList
				data={todo}
				renderItem={({ item }) => <ListItem record={item} deleteRow={() => deleteTodo(item.id)} />}
				keyExtractor={item => item.id.toString()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: '#cacaca',
		padding: 12,
		flexDirection: 'row',
	},
	input: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 4,
		fontSize: 16,
	},
	record: {
		backgroundColor: '#E9E9E9',
		marginHorizontal: 12,
		marginVertical: 4,
		padding: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	label: {
		fontSize: 18,
	},
});
