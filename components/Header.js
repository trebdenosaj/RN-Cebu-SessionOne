import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';

export default function Header(){
	return (
		<View style={styles.header}>
			<Image
				source={{
					uri: 'https://i.pinimg.com/736x/ad/86/00/ad86000ae7f18e5ee5589c66a99edf00.jpg',
				}}
				resizeMode={'cover'}
				style={styles.profileImage}
			/>

			<Text style={styles.name}>Edbert Jason Estevez</Text>
			<Text style={styles.question}>What are your goals today?</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		height: 250,
		backgroundColor: '#4267b2',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: Constants.statusBarHeight,
	},
	profileImage: {
		height: 150,
		width: 150,
		borderRadius: 12,
		marginBottom: 16,
	},
	name: {
		fontSize: 22,
		color: '#fff',
		fontWeight: 'bold',
	},
	question: {
		fontSize: 16,
		color: '#fff',
	},
});
