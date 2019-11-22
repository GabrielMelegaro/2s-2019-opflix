import React, {Component, Fragment} from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {Text, View, Image, StyleSheet, AsyncStorage} from 'react-native';
import jwt from 'jwt-decode';

class Profile extends Component{
    static navigationOptions = {
        header: null,
    };
    constructor(){
        super();
        this.state = {
            foto: "",
            nome: "",
            email: "",
            token: "",

        };
    }

    componentDidMount(){
        this.tokenAReceber();
    }

    tokenAReceber = async () => {
        let tokenBuscadoDoStorage = await AsyncStorage.getItem('@opflix:token');
        this.setState({ foto: jwt(tokenBuscadoDoStorage).foto })
        this.setState({ nome: jwt(tokenBuscadoDoStorage).nome })
        this.setState({ email: jwt(tokenBuscadoDoStorage).email })
    };

    _Logout = async () => {
        AsyncStorage.removeItem('@opflix:token');
        this.props.navigation.navigate("AuthStack")
    }

    render(){
        return(
            <View style={styles.page}>
                   <Image
                   style={styles.img}
                    source={{  uri: this.state.foto  }}
                   /> 
                    <Text style={styles.textstyle}>{this.state.nome}</Text>
                    <Text style={styles.textstyle}>{this.state.email}</Text>
                    <View>
                        <TouchableOpacity onPress={this._Logout}>
                            <Text style={styles.textstyle}>Logout</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page:
    {backgroundColor: "#2F3538"},
    img:
    { width: 150, height: 150, display: "flex" , borderRadius: 75, paddingbottom: 30,  },
    textstyle:
    {textAlign: "center", color: "#ffffff"}
})

export default Profile;
