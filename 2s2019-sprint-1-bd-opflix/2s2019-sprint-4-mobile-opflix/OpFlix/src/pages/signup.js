import React, {Component} from 'react';
import { TextInput } from 'react-native-gesture-handler';

import{
    Text, 
    View,
    TouchableOpacity, 
    AsyncStorage
    } from 'react-native';

class SignUp extends Component {
    static navigationOptions = {
        header: null,
    };
    
    constructor(){
        super();
        this.state = {
            nome: "",
            email: "",
            senha: "",
        };
    }

    mudarNome = (event) => {
        this.setState({nome: event.target.value});
    }

    mudarEmail = (event) => {
        this.setState({email: event.target.value});
    }

    mudarSenha = (event) => {
        this.setState({senha: event.target.value});
    }

    _realizarCadastro = async () => {
        await fetch('http://192.168.6.220:5000/api/usuario',{
            method: 'POST',
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha,
            }),
        })
        .then(resposta => resposta.json())
        .then(data => this._IrParaHome(data.token))
        .catch(erro => console.warn(erro));
    };

    _IrParaLogin = async (tokenAReceber) => {
        if(tokenAReceber != null){
            try{
                await AsyncStorage.setItem('@opflix:token', tokenAReceber);
                this.props.navigation.navigate('AuthStack');
            }catch (error) {}
        }
    }

    render(){
        return(
            <View>
                <TextInput
                placeholder="Digite seu Nome"
                onChangeText={nome => this.setState({nome})}
                value={this.state.nome}/>
                <TextInput
                placeholder="Digite seu Email"
                onChangeText={email => this.setState({email})}
                value={this.state.email}/>
                <TextInput
                placeholder="Digite sua Senha"
                onChangeText={senha => this.setState({senha})}
                value={this.state.senha}/>
                <TouchableOpacity onPress={this._realizarCadastro}>
                    <Text>Cadastro</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default SignUp