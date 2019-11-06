import React, {Component} from 'react';
import { FlatList, TextInput } from 'react-native-gesture-handler';

class Main extends Component{
    constructor(){
        super();
        this.state = {
            lancamentos: [],
            titulo: "",
            idSinopse: "",
            duracao: "",
            idCategoria: "",
            idTipo: "",
            dataLanc: "",
            idPlataforma: "",
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

    render(){
        return(
            <FlatList
            data={this.state.lancamentos}
            keyExtractor={item => item.idLancamento}
            renderItem={({item}) => (
                <View>
                    <Text>{item.titulo}</Text>
                    <Text>{item.idSinopse}</Text>
                    <Text>{item.duracao}</Text>
                    <Text>{item.idCategoria}</Text>
                    <Text>{item.idTipo}</Text>
                    <Text>{item.dataLanc}</Text>
                    <Text>{item.idPlataforma}</Text>
                </View>
                )}
            />
        );
    }
}