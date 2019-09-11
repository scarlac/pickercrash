import * as React from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Picker} from 'react-native';

const pets = [
  {label: 'Dog', value: 'dog'},
  {label: 'Cat', value: 'cat'},
  {label: 'Bird', value: 'bird'},
];

const foods = [
  {label: 'Thai', value: 'thai'},
  {label: 'Mexican', value: 'mexican'},
  {label: 'Italian', value: 'italian'},
  {label: 'Japanese', value: 'japanese'},
];

export default class App extends React.Component {
  state = {
    favoriteCategory: null,
    favoriteThing: null,
  };

  handleValueChange = (itemValue, itemPosition) => {
    this.setState({favoriteThing: itemValue});
  };

  render() {
    const options = this.state.favoriteCategory === 'foods' ? foods : pets;

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          What is your favoriteCategory thing?
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{backgroundColor: 'yellow', padding: 20}}
            onPress={() =>
              this.setState({
                favoriteCategory: 'pets',
                favoriteThing: pets[0].value,
              })
            }>
            <Text>Pets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: 'yellow', padding: 20}}
            onPress={() =>
              this.setState({
                favoriteCategory: 'foods',
                favoriteThing: foods[0].value,
              })
            }>
            <Text>Foods</Text>
          </TouchableOpacity>
        </View>
        {this.state.favoriteCategory && (
          <Picker
            onValueChange={this.handleValueChange}
            selectedValue={this.state.favoriteThing}>
            {options.map(item => (
              <Picker.Item
                key={item.value}
                value={item.value}
                label={item.label}
              />
            ))}
          </Picker>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
