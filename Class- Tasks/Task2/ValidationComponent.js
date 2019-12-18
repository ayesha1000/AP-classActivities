'use strict';
import React, {Component} from 'react';
import {View, StyleSheet,Text, TextInput, TouchableHighlight} from 'react-native';

import ValidationComponent from 'react-native-form-validator';
export default class Form extends ValidationComponent {
constructor(props) {
super(props);
this.state = {name : "ayesha",
 registrationNo:"109176",
  email: "ayesha@gmail.com",
   gender:"female"

};
this._onPressButton = this._onPressButton.bind(this);
}

_onPressButton(){
var i= this.validate({

    name: {minlength:5, maxlength:10, required: true},
      email: {email: true, required:true},
     gender: { required:true},
     registrationNo:{numbers:true, required :true}


});

}

render() {
return (
<View >
<Text>Name: </Text><TextInput style={styles.main} ref="name" onChangeText={(name) => this.setState({name})} value={this.state.name} />
<Text>Email: </Text><TextInput style={styles.main} ref="email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
<Text>Registration Number: </Text><TextInput style={styles.main} ref="registrationNo" onChangeText={(registrationNo) => this.setState({registrationNo})} value={this.state.registrationNo} />
<Text>Gender</Text><TextInput style={styles.main} ref="gender" onChangeText={(gender) => this.setState({gender})} value={this.state.gender} />

{this.isFieldInError('name') && this.getErrorsInField('name').map(errorMessage => <Text>{errorMessage}</Text>) }
<TouchableHighlight onPress={this._onPressButton}>
<Text>Submit</Text>
</TouchableHighlight>
<Text> {this.getErrorMessages()} </Text>

</View>
); }}

const styles = StyleSheet.create({
    main: {
    
  
      backgroundColor: "lightblue"
    },
  });