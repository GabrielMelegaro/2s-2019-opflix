import React, {Component} from 'react';
import { TextInput } from 'react-native-gesture-handler';

import{
    Text, 
    View,
    TouchableOpacity, 
    AsyncStorage, StyleSheet
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
        try{
            console.warn('Cadastro concluido com sucesso, favor retornar a pagina de login!')
        }catch(error){}
    };

    _IrParaLogin = async () => {
        try{ 
            this.props.navigation.navigate('AuthStack');
        }catch (error) {}
    }

    render(){
        return(
            <View style={style.page}>
                <TextInput style={style.inputcadastro}
                placeholder="Digite seu Nome" 
                onChangeText={nome => this.setState({nome})}
                value={this.state.nome}/>
                <TextInput style={style.inputcadastro1}
                placeholder="Digite seu Email"
                onChangeText={email => this.setState({email})}
                value={this.state.email}/>
                <TextInput style={style.inputcadastro2}
                placeholder="Digite sua Senha"
                onChangeText={senha => this.setState({senha})}
                value={this.state.senha}/>
                <TouchableOpacity onPress={this._realizarCadastro}>
                    <Text style={style.button}>Cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._IrParaLogin}>
                    <Text style={style.button}>Voltar ao Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    page:
    {display: "flex", backgroundColor: "#2F3538", height: 660 },
    inputcadastro1:
    {color: "#ffffff", display: "flex", marginLeft: 165, marginBottom: 20, marginTop: 20, },
    inputcadastro:
    {color: "#ffffff", display: "flex", marginLeft: 165, marginBottom: 20, marginTop: 20, },
    inputcadastro2:
    {color: "#ffffff", display: "flex", marginLeft: 178, marginBottom: 20, marginTop: 20, },
    button:
    {display: "flex",marginBottom: 20, marginTop: 20, textAlign: "center",color: "#ffffff", borderRadius: 30, borderColor: "#B40A1B", borderWidth: 1, }
})

export default SignUp