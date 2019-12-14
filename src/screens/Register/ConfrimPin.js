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
const bgImage = require("../../../assets/splash.png");

class ConfrimPin extends Component {
	constructor(props) {
		super(props);
        this.onPressRegisterActivate = this.onPressRegisterActivate.bind(this);
		this.initialState = {
			isLoading: false,			
            error: null,
            verificationCode: '',
		};
		this.state = this.initialState;
	}
    
	onPressRegisterActivate() {
        dismissKeyboard();
        this.setState({
            isLoading: true,
            error: '',
        });

        const { verificationCode } = this.state; 
        const registerActivate = { verificationCode: verificationCode }
        usersApi.createActivation(registerActivate)
        .then((response) => {	
            if(response.user){
                this.setState(this.initialState);
                this.props.navigation.navigate("Home");
            }else{
                this.setState({ isLoading: false });
                console.log('error :', response.errors);
                if(response.errors) {
                    const error = api.exceptionExtractError(response); 
                    Toast.show({
                    type: 'danger',
                    position: 'bottom',
                    text: error,
                    buttonText: "OK",
                    duration:3600
                    })	
                }
            }
            
        })
        .catch((exception) => {
            // Displays only the first error message
            const error = api.exceptionExtractError(exception);
            this.setState({
                isLoading: false,
                ...(error ? { error } : {}),
            });
            if (!error) {
                throw exception;
            }
        });
    }
	 
	render() {
        const { params } = this.props.navigation.state;   
		return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">	
			<ImageBackground source={bgImage} resizeMode='cover' style={styles.imagebackground}>
                <Header style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", paddingTop: Constants.statusBarHeight }} transparentiosBarStyle={"light-content"} transparent noShadow androidStatusBarColor="#FFFFFF">
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' style={{ color: '#FFFFFF' }} />
                        </Button>
                    </Left>
                    <Body />
                    <Right />    
                </Header>		
				<Content style={styles.bg}>
                    <View style={styles.logoContainer}>
                        <Text></Text>
                        <Text style={{ color: '#FFFFFF'}}>Membuat PIN Baru</Text>		  
                    </View>
                    <View style={styles.infoContainer}>
                    <Text style={styles.textinfo}>Silahkan Masukan PIN Anda</Text>
                    </View>   
					<View style={styles.formContainer}>
						 
                        <Item style={styles.input}>
                            <Input style={styles.inputtextcode}									
                                placeholder="_ _ _ _ _ _"
                                placeholderTextColor="rgba(255,255,255,0.7)"  												
                                onChangeText={(verificationCode) => this.setState({ verificationCode })}
                                value={this.state.verificationCode}	
                                returnKeyType = {"go"}
                                maxLength={6}
                                autoFocus
                                ref={'verificationCode'}
                                keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                                onSubmitEditing={this.onPressRegisterActivate} />
                        </Item> 
                        {this.state.isLoading ? (
                            <Spinner size="large" color="#f26623" /> 
                        ) : (
                        <Button transparent block style={styles.btn} onPress={() => this.onPressRegisterActivate()} >
                            <Text style={styles.btnText}>KONFIRM</Text>
                        </Button>						
                        )}
                    </View>       
                </Content>
            </ImageBackground>				
            </KeyboardAvoidingView>
		);
	}
}

export default ConfrimPin;
