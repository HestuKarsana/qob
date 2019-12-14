import React, { Component } from "react";
import { 
    TouchableOpacity, ImageBackground, Image,
    Entypo, Dimensions, StatusBar, KeyboardAvoidingView
} from "react-native";
import { Container, Content,Header, Body, Left, Right,
Item, Input, Button, Icon, Text, View, Spinner, Toast
} from 'native-base';
import * as Constants from 'expo';
import styles from './styles';

const device = Dimensions.get("window");
const iconLogo = require("../../../assets/icon.png");
const bgImg = require("../../../assets/splash.png");

class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <ImageBackground style={styles.imagebackground} source={bgImg} resizeMode='cover'>
                    <Header style={{ backgroundColor: 'red',
                    paddingTop: Constants.statusBarHeight}}
                    transparentbarStyle={"light-content"} transparent noShadow>
                        <Left/>
                        <Body/>
                        <Right/>
                    </Header>
                    <Content style={styles.bg}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Image source={iconLogo}  resizeMode='contain' style={{ alignItems:'center'}}/>
                            <Text style={{ color:'black'}}>QOB Mobile</Text>
                        </View>
                        <Button block style={styles.btn}>
                            <Text style={styles.btnText}>Login</Text>
                        </Button>
                    </View>
                    <View style={styles.bottomInfo}>
						<Text style={{fontSize:14, color: 'rgba(255,255,255,0.7)'}}>Anda belum punya akun? </Text>
						<Text style={{fontSize:14, color: '#FFFFFF', fontWeight: '500'}} onPress={() => this.props.navigation.navigate("Register")}>Daftar Sekarang</Text>
					</View>
                    </Content>
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}

export default Login;