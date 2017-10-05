import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import CheckBox from 'react-native-check-box'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      keepLoggedIn: true,
    }
  }

  signIn() {
    let isAuthenticated = true
    if (isAuthenticated === true) {
      this.props.onLogIn()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>DocApp</Text>
        <TextInput style={styles.textInput}
                   onChangeText={(username) => this.setState({username})}
                   value={this.state.username}
                   placeholder={'Username'} />
        <TextInput style={styles.textInput}
                   onChangeText={(password) => this.setState({password})}
                   value={this.state.password}
                   secureTextEntry={true}
                   placeholder={'Password'} />
        <CheckBox style={styles.checkBox}
                  isChecked={this.state.keepLoggedIn}
                  onClick={() => this.setState(previousState => {
                    return { keepLoggedIn: !previousState.keepLoggedIn };
                  })} />
        <Text style={styles.checkBoxText}>
            &nbsp;&nbsp;Keep me signed in
          </Text>
        <View style={styles.buttonContainer}>
          <Button onPress={this.signIn.bind(this)}
                  title='Sign In'
                  color='#028bdd' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#4d4d4d',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoText: {
    color: '#028bdd',
    fontSize: 60,
    marginBottom: 40,
  },
  textInput: {
    backgroundColor: '#fff',
    borderColor: '#333',
    borderRadius: 8,
    borderWidth: 1,
    color: '#333',
    fontSize: 15,
    marginBottom: 12,
    padding: 12,
    width: '100%',
  },
  checkBox: {
    backgroundColor: '#4d4d4d',
    height: 20,
    width: 20,
  },
  checkBoxText: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 12,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderColor: '#4d4d4d',
    borderWidth: 1,
  },
})
