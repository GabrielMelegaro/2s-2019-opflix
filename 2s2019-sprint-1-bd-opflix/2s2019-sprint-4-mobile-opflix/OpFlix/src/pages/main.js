import React, { Component, } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lista: [],
            // titulo: "",
            // sinopse: "",
            // duracao: "",
            // categoria: "",
            // tipo: "",
            // dataLanc: "",
            // plataforma: "",
        };
    }

    componentDidMount() {
        this._carregarLancamentos();
    }

    // Titulo = (event) => {
    //     this.setState({ titulo: event.target.value })
    // }

    // Sinopse = (event) => {
    //     this.setState({ sinopse: event.target.value })
    // }

    // Duracao = (event) => {
    //     this.setState({ duracao: event.target.value })
    // }

    // Categoria = (event) => {
    //     this.setState({ categoria: event.target.value })
    // }

    // Tipo = (event) => {
    //     this.setState({ tipo: event.target.value })
    // }

    // dataLanc = (event) => {
    //     this.setState({ dataLanc: event.target.value })
    // }

    // Plataforma = (event) => {
    //     this.setState({ plataforma: event.target.value })
    // }

    _carregarLancamentos = async () => {
        await fetch('http://192.168.6.220:5000/api/lancamentos')
            .then(resposta => resposta.json())
            .then(data => this.setState({ lista: data }))
            .catch(erro => console.warn(erro));
    };

    _Logout = async () => {
        try {
            this.props.navigation.navigate('AuthStack');
        } catch (error) { }
    }

    render() {
        return (
            <View>

                <ScrollView>

                    <View style={styles.pagefull}>

                        <FlatList
                            data={this.state.lista}
                            keyExtractor={item => item.idLancamento}
                            renderItem={({ item }) => (
                        <View>
                           {/* <Text>Escolha Uma Categoria</Text> 
                                      <Text>{item.titulo}</Text>
                                    <Text>{item.sinopse}</Text> 
                                      <Text>{item.duracao}</Text>
                                      <Text>{item.categoria}</Text>
                                      <Text>{item.tipo}</Text>
                                      <Text>{item.dataLancamento}</Text>
                                     <Text>{item.plataforma}</Text>   */}
                        </View>
                            )}
                        />

                            <Text style={styles.textLanc}>Ação</Text>

                                <FlatList
                                    horizontal={true}
                                    data={this.state.lista.filter(item => { return item.idCategoria === 7 })}
                                    keyExtractor={item => item.idLancamento}
                                    renderItem={({ item }) => (
                                        <View>
                                            <Image
                                                style={styles.img}
                                                source={{ uri: item.fotoLanc }}
                                            />
                                        </View>
                                    )}
                                />

                                <Text style={styles.textLanc}>Suspense</Text>

                                <FlatList
                                    horizontal={true}
                                    data={this.state.lista.filter(item => { return item.idCategoria === 2 })}
                                    keyExtractor={item => item.idLancamento}
                                    renderItem={({ item }) => (
                                        <View>
                                            <Image
                                                style={styles.img}
                                                source={{ uri: item.fotoLanc }}
                                            />
                                        </View>
                                    )}
                                />

                                <Text style={styles.textLanc}>Terror</Text>

                                <FlatList
                                    horizontal={true}
                                    data={this.state.lista.filter(item => { return item.idCategoria === 1 })}
                                    keyExtractor={item => item.idLancamento}
                                    renderItem={({ item }) => (
                                        <View>
                                            <Image
                                                style={styles.img}
                                                source={{ uri: item.fotoLanc }}
                                            />
                                        </View>
                                    )}
                                />

                                <Text style={styles.textLanc}>Aventura</Text>

                                <FlatList
                                    horizontal={true}
                                    data={this.state.lista.filter(item => { return item.idCategoria === 9 })}
                                    keyExtractor={item => item.idLancamento}
                                    renderItem={({ item }) => (
                                        <View>
                                            <Image
                                                style={styles.img}
                                                source={{ uri: item.fotoLanc }}
                                            />
                                        </View>
                                    )}
                                />
                                <Text style={styles.textLanc}>Documentário</Text>

                                <FlatList
                                    horizontal={true}
                                    data={this.state.lista.filter(item => { return item.idCategoria === 8 })}
                                    keyExtractor={item => item.idLancamento}
                                    renderItem={({ item }) => (
                                        <View>
                                            <Image
                                                style={styles.img}
                                                source={{ uri: item.fotoLanc }}
                                            />
                                        </View>
                                    )}
                                />

                                <Text style={styles.textLanc}>Drama</Text>

                                <FlatList
                                    horizontal={true}
                                    data={this.state.lista.filter(item => { return item.idCategoria === 5 })}
                                    keyExtractor={item => item.idLancamento}
                                    renderItem={({ item }) => (
                                        <View>
                                            <Image
                                                style={styles.img}
                                                source={{ uri: item.fotoLanc }}
                                            />
                                        </View>
                                    )}
                                />
    
                    <View>
                        <TouchableOpacity onPress={this._Logout}>
                            <Text style={styles.textLanc}>Logout</Text>
                        </TouchableOpacity>
                    </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    img:
        { width: 200, height: 200 },
    pagefull:
        { backgroundColor: "#2F3538", },
    textLanc:
        { color: "#ffffff", backgroundColor: "#B40A1B"}
})

export default Main;