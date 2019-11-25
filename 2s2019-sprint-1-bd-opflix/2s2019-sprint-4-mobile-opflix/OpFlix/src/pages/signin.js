import React, {Component} from 'react';
import { TextInput } from 'react-native-gesture-handler';

import{
    Text, 
    View,
    TouchableOpacity, 
    AsyncStorage,
    ImageBackground,
    StyleSheet,
    } from 'react-native';

class SignIn extends Component {
    static navigationOptions = {
        header: null,
        // TabBarIcon: () => (
        //     <Image
        //         Source={require('../assets/img/download.png')}
        //         style={styles.tabBarEstilizacao}
        //     />
        // )
    };
    
    constructor(){
        super();
        this.state = {
            email: "g@gmail.com",
            senha: "123456",
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

    _IrParaCadastro = async() => {
        try{
            this.props.navigation.navigate('AuthStack1');
        }catch (error) {}
    }

    render(){
        return(
            <View style={style.page}>
            {/* <ImageBackground
                source={require('../assets/img/download.png')}
                style={StyleSheet.absoluteFillObject}
            /> */}
                <TextInput style={style.input1}
                placeholder="Digite seu Email"
                onChangeText={email => this.setState({email})}
                value={this.state.email}/>
                <TextInput style={style.input}
                placeholder="Digite sua Senha"
                onChangeText={senha => this.setState({senha})}
                value={this.state.senha}/>
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text style={style.button}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._IrParaCadastro}>
                    <Text style={style.button}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    page:
    {display: "flex", backgroundColor: "#2F3538", marginTop: 160, },
    input1:
    {color: "#ffffff", display: "flex", marginLeft: 165, marginBottom: 20, marginTop: 20 },
    input:
    {color: "#ffffff", display: "flex", marginLeft: 178, marginBottom: 20, marginTop: 20},
    button:
    {display: "flex",marginBottom: 20, marginTop: 20, textAlign: "center",color: "#ffffff", borderRadius: 30, borderColor: "#B40A1B", borderWidth: 1,}

})
export default SignIn
