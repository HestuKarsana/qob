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

class Register extends Component{
    constructor(props) {
		super(props);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this._emaiValidate = this._emaiValidate.bind(this);
        this.onPressRegister = this.onPressRegister.bind(this);
		this.initialState = {
			active: false,
			isLoading: false,			
            error: null,
            fullName: '',
            email: '',
            password: '',
            noHP: '+62',
            showPassword: true,
            emailvalidate:false
		};
		this.state = this.initialState;
	}

	toggleSwitch() {
		this.setState({ showPassword: !this.state.showPassword });
    }
    
    _emaiValidate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
        {
            Toast.show({
                type: 'danger',
                position: 'bottom',
                text: 'Email tidak valid!',
                buttonText: "OK",
                duration:3600
            })	
            this.setState({ emailvalidate:false, isLoading: false })
        }else{
            this.setState({ emailvalidate:true, isLoading: true })
        }
    }
    
	onPressRegister = () => {
        dismissKeyboard();
        this.setState({
            isLoading: true,
            error: '',
        });

            const { fullName, email, password, noHP } = this.state; 
            const username = noHP.replace(/^\+[0-9]{2}/, '0')
            const pNoHP = noHP.replace(/^\+/, '')
            const registerData = { user: { email: email, password: password, username: username, fullName: fullName, noHp: pNoHP, timezone: 'ID', language: 'ID', userType: '1'} }
            usersApi.create(registerData)
            .then((response) => {	
                if(response.user){
                    session.authenticate(email, password)
                    .then(() => {
                        usersApi.sendVerification({})
                        .then(() => {	
                            this.setState(this.initialState);
                            this.props.navigation.navigate('RegisterActivation',  { sendTo: noHP } );
                        });
                    });
                }else{
                    this.setState({
                        isLoading: false			        
                    });	
                    const error = api.exceptionExtractError(response); 
                    Toast.show({
                       type: 'danger',
                       position: 'bottom',
                       text: error,
                       buttonText: "OK",
                       duration:3600
                    })	
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

    _showInfo(textinfo){
        Toast.show({
          position: 'bottom',
          text: textinfo,
        })	
    }
    render() {
		return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">	
			<ImageBackground source={bgImg} resizeMode='cover' style={styles.imagebackground}>
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
					<View style={styles.formContainer}>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Nomor Kartu Tanda Penduduk"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Button transparent block style={styles.btn}>
                            <Text style={styles.btnText}>Cek Data Kependudukan</Text>
                        </Button>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Nama Ibu Kandung"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Button transparent block style={styles.btn}>
                            <Text style={styles.btnText}>Validasi Data</Text>
                        </Button>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Nama Lengkap"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Tempat Lahir"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item> 
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Tanggal Lahir"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item> 
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Jenis Kelamin"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Alamat Lengkap"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Propinsi"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Kab./ Kota"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Kecamatan"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Kelurahan"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Kode Pos"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Agama"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Status Perkawinan"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Penghasilan Per Tahun"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Sumber Penghasilan"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Tujuan Penggunaan Dana"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>
                        <Item style={styles.input}>
                            <Icon style={styles.icon} name="idcard" />
                            <Input style={styles.inputtext}									
                                placeholder="Jenis Pekerjaan"
                                placeholderTextColor="rgba(255,255,255,0.7)"  											
                                returnKeyType = {"next"}	
                                onChangeText={fullName => this.setState({ fullName })}
                                value={this.state.fullName}	
                                blurOnSubmit={ false }	
                                maxLength={50}
                                onSubmitEditing ={(event) => {
                                    this.refs.NoHP._root.focus();
                                }}
                                
                            />
                        </Item>

                        {this.state.isLoading ? (
                            <Spinner size="large" color="#f26623" /> 
                        ) : (
                        <Button transparent block
                                style={styles.btn} 
                                
                                onPress={() => this.props.navigation.navigate("RegistrasiPIn")}
                        >
                        <Text style={!this.state.fullName || !this.state.email || !this.state.noHP || !this.state.password ? styles.btnTextDisabled : styles.btnText}>DAFTAR</Text>
                        </Button>						
                        )}
                    </View>
                     
                    <View style={{flex: 1, flexDirection:'row', flexWrap:'wrap', justifyContent: 'center', alignItems: 'center', width: device.width, marginTop: 20 }}>
						<Text style={{fontSize:14, color: 'rgba(255,255,255,0.7)'}}>Sudah punya akun? </Text>
						<Text style={{fontSize:14, color: '#FFFFFF', fontWeight: '500'}} onPress={() => this.props.navigation.navigate("Login")}>Login</Text>
					</View>           
                </Content>
            </ImageBackground>				
            </KeyboardAvoidingView>
		);
	}
}

export default Register;
