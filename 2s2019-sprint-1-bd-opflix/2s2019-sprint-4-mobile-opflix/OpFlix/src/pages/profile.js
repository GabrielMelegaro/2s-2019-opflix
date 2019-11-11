import React, {Component} from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {Text, View} from 'react-native';

class Profile extends Component{
    static navigationOptions = {
        header: null,
    };

    constructor(){
        super();
        this.state = {
            categorias: [],
        };
    }

    componentDidMount(){
        this._carregarCategorias();
    }

    _carregarCategorias = async () => {
        await fetch('http://192.168.6.220:5000/api/categorias')
            .then(resposta => resposta.json())
            .then(data => this.setState({categorias: data}))
            .catch(erro => console.warn(erro));
    };

    render(){
        return(
            <FlatList
            data={this.state.categorias}
            keyExtractor={item => item.idCategoria}
            renderItem={({item}) => (
                <View>
                    <Text>{item.nomeCategoria}</Text>
                </View>
                )}
            />
        );
    }
}
export default Profile