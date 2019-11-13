import React, {Component,} from 'react';
import {Text , View, StyleSheet, Image} from 'react-native';
import { FlatList, TouchableOpacity} from 'react-native-gesture-handler';

class Main extends Component{
    constructor(){
        super();
        this.state = {
            lancamentos: [],
            titulo: "",
            sinopse: "",
            duracao: "",
            categoria: "",
            tipo: "",
            dataLanc: "",
            plataforma: "",
        };
    }

    componentDidMount(){
        this._carregarLancamentos();
    }

    Titulo = (event) => {
        this.setState({ titulo: event.target.value })
    }

    Sinopse = (event) => {
        this.setState({ sinopse: event.target.value })
    }

    Duracao = (event) => {
        this.setState({ duracao: event.target.value })
    }

    Categoria = (event) => {
        this.setState({ categoria: event.target.value })
    }

    Tipo = (event) => {
        this.setState({ tipo: event.target.value })
    }

    dataLanc = (event) => {
        this.setState({ dataLanc: event.target.value })
    }

    Plataforma = (event) => {
        this.setState({ plataforma: event.target.value })
    }

    _carregarLancamentos= async () => {
        await fetch('http://192.168.6.220:5000/api/lancamentos')
            .then(resposta => resposta.json())
            .then(data => this.setState({lancamentos: data}))
            .catch(erro => console.warn(erro));
    };

    _Logout = async() => {
        try{
            this.props.navigation.navigate('AuthStack');
        }catch (error) {}
    }

    render(){
        return(
            <FlatList
            data={this.state.lancamentos}
            keyExtractor={item => item.idLancamento}
            renderItem={({item}) => (
                <View>
                    {/* <Button>Escolha Uma Categoria</Button> */}
                    <Text>{item.titulo}</Text>
                    <Text>{item.sinopse}</Text>
                    <Text>{item.duracao}</Text>
                    <Text>{item.categoria}</Text>
                    <Text>{item.tipo}</Text>
                    <Text>{item.dataLancamento}</Text>
                    <Text>{item.plataforma}</Text>
                
                    <FlatList
                        horizontal={true}
                        data={this.state.lancamentos.filter(item => { return item.Categoria === 'Terror' })}
                        keyExtractor={item => item.idLancamento}
                        renderItem={({item}) => (
                            <View>
                            <Image
                            style={styles.img}
                            source={{ uri: item.FotoLanc }}
                            />
                        </View>
                    )}               
                />

                <View>
                    <TouchableOpacity onPress={this._Logout}>
                    <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
                </View>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    tabBarEstilizacao:
    {width: 100}
  })

export default Main;