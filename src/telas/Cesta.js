
import { StyleSheet, Image, Dimensions, Text, View, Button, Alert } from "react-native"

import topo from "../../assets/topo.png"
import logo from "../../assets/logo.png"
import cartoes from "../../assets/cartoes.png"

const width = Dimensions.get("screen").width
export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhe da cesta</Text>
        <View style={estilos.cesta} >
            <Text>Cesta de Verduras </Text>
            <View style={estilos.fazenda} >
                <Image source={logo} style={estilos.imagemFazenda}></Image>
                <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadozamente da fazenda direto para sua cozinha</Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
            <Image style={estilos.imagemCartao} source={cartoes}/>
            <Button title="COMPRE" onPress={() => {
                Alert.alert('🖕 SE FUDEU\nCAIU NO GOLPE, CARTÃO CLONADO')
            }} />

        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 526 / 728 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeigth: 42,
        fontFamily: "Arial"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,

    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "Arial"
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        margin: 8,

    },
    imagemCartao:{
        width:"100%",
        height:50,
        backgroundColor:"#fff",

    }
})