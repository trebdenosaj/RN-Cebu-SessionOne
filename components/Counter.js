import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function ChildComponent(props) {
	return (
		<View>
			<Text>I am the Child Component</Text>
			<Text>Count: {props.value}</Text>
		</View>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	const [isEven, setIsEven] = useState(true);

	useEffect(() => {
		if (count % 2 === 0) {
			setIsEven(true);
		} else {
			setIsEven(false);
		}
	});

	return (
		<View style={isEven ? styles.containerEven : styles.containerOdd}>
			<ChildComponent value={count} />
			<Button title="ADD" onPress={() => setCount(count + 1)} />
			<Button title="SUBTRACT" onPress={() => setCount(count - 1)} />
		</View>
	);
}

export default Counter;

const styles = StyleSheet.create({
	containerOdd: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerEven: {
		flex: 1,
		backgroundColor: '#cacaca',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
