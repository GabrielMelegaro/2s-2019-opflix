import React, {Component} from 'react';
import { TextInput } from 'react-native-gesture-handler';

import {
    Text, 
    View,
    TouchableOpacity, 
    AsyncStorage
    } from 'react-native';

class SignIn extends Component {
    static navigationOptions = {
        header: null,
    };
    
    constructor(){
        super();
        this.state = {
            email: 'g@gmail.com',
            senha: '123456',
        };
    }

    _realizarLogin = async () => {
        await fetch('http://192.168.6.220:5000/api/login',{
            method: 'POST',
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha,
            }),
        })
        .then(resposta => resposta.json())
        .then(data => this._IrParaHome(data.token))
        .catch(erro => console.warn(erro));
    };

    _IrParaHome = async (tokenAReceber) => {
        if(tokenAReceber != null){
            try{
                await AsyncStorage.setItem('@opflix:token', tokenAReceber);
                this.props.navigation.navigate('MainNavigator');
            }catch (error) {}
        }
    }

    render(){
        return(
            <View>
                <TextInput
                placeholder="Digite seu Email"
                onChangeText={email => this.setState({email})}
                value={this.state.email}/>
                <TextInput
                placeholder="Digite sua Senha"
                onChangeText={senha => this.setState({senha})}
                value={this.state.senha}/>
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default SignIn