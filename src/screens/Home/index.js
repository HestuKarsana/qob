import React, { Component } from "react";
import { TouchableHighlight, TouchableOpacity, StatusBar, Image, FlatList, Dimensions } from "react-native";
import { Container,
  Header,
  Body,
  Left,
  Right,
  Title,
  Content,
  Icon,
  Button,
  Text,
  Spinner,
  View,
  Grid, Col, Row,
  IconNB,
  Footer,
  FooterTab,
  Badge,
  Toast,
  Card,
  CardItem,
  Item,
  Input,
  List,
  ListItem,
  } from "native-base";
import { CheckBox } from 'react-native-elements'
import { WebBrowser, Linking } from 'expo';
import styles from "./styles";
var DeviceWidth = Dimensions.get('window').width;

const iconCekTarif = require("../../../assets/iconmenus/cektarif.png");
const iconPengiriman = require("../../../assets/iconmenus/pengiriman.png");
const iconJemput = require("../../../assets/iconmenus/jemput.png");
const iconNotif = require("../../../assets/iconmenus/notifikasi.png");
const iconHallo = require("../../../assets/iconmenus/hallopos.png");
const iconKodePos = require("../../../assets/iconmenus/kodepos.png");
const iconPromo = require("../../../assets/iconmenus/promo.png");
const iconOffice = require("../../../assets/iconmenus/kantorpos.png");
const iconPON = require("../../../assets/iconmenus/onlinebooking.png");
const iconTransaksi = require("../../../assets/iconmenus/transaksi.png");
const iconBarcode = require("../../../assets/1scan.png");
const iconFB = require("../../../assets/iconmedsos/xfacebook.png");
const iconInstagram = require("../../../assets/iconmedsos/xinstagram.png");
const iconLine = require("../../../assets/iconmedsos/xline.png");
const iconTelegram = require("../../../assets/iconmedsos/xtelegram.png");
const iconTwitter = require("../../../assets/iconmedsos/xtwitter.png");
const iconYoutube = require("../../../assets/iconmedsos/xyoutube.png");

class Beranda extends Component {
  constructor(props) {
    super(props);
    this._onProgressMenu = this._onProgressMenu.bind(this)
    this.state = {
      isLoading: false,
      error: null,
      position: 1,
      interval: null,
      checked: false,
      isDisabled: false,
      jemputKiriman: '1500261',
      haloPOS: '161'
     
    };
  }


  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  _onProgressMenu(){
      Toast.show({
        position: 'bottom',
        text: 'Under Development',
        buttonText: "OK"
      })
  }

  render() {

    return (
      <Container>
        <StatusBar
          backgroundColor={'transparent'}
          translucent
        />
          <View style={styles.container}>
            <Content disableKBDismissScroll>
              {/*------ Trace & Track -----*/}
              <Card transparent>
                <CardItem style={{paddingTop: 2}}>
                  <Content>
                    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                      <Title style={{fontSize:15, fontWeight:'700', color: '#f26623', paddingVertical: 10}}>Lacak Kiriman</Title>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{width:  DeviceWidth/1.2 }}>
                            <Item rounded style={{backgroundColor: '#D8D8D8' }} onPress={() => this.props.navigation.navigate("TrackTrace")}>
                                <Input style={{fontSize:14, height: 35, paddingLeft: 15}}
                                      placeholder="Masukan Nomor Resi"
                                      editable={false}
                                      onTouchStart={()=> this.props.navigation.navigate("TrackTrace")}
                                />
                                <Icon active name='md-search' />
                            </Item>
                        </View>
                        <View style={{width: DeviceWidth/4 }}>
                          <TouchableOpacity style={{paddingVertical:5, paddingLeft: 5 }} onPress={() => this.props.navigation.navigate("BarcodeScan")}>
                            <Image source={iconBarcode} style={{width: 25, height: 25}} />
                          </TouchableOpacity>
                        </View>
                    </View>
                  </Content>
                </CardItem>
              </Card>
              {/*------ Display Menu -----*/}
              <Card transparent>
                <CardItem>

                  <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <View style={{
                      flexDirection: 'row',
                      backgroundColor: "#E6E6E6"}}>
                      <View>
                        <TouchableHighlight underlayColor="#D8D8D8" onPress={() => this.props.navigation.navigate("TabOnlineBooking")}>
                          <View style={{width: DeviceWidth*0.3, height: DeviceWidth*0.3, marginBottom:1, flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}} >
                            <Image source={iconPON} style={{width: 40, height: 40}}/>
                            <Text style={styles.iconText}>QOB</Text>
                          </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="#D8D8D8" onPress={() => this.props.navigation.navigate("CekTarif")}>
                          <View style={{width: DeviceWidth*0.3, height: DeviceWidth*0.3, marginBottom:1, flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}} >
                            <Image source={iconCekTarif} style={{width: 40, height: 40}}/>
                            <Text style={styles.iconText}>Cek Tarif</Text>
                          </View>
                        </TouchableHighlight>
                      </View>                   
                    </View>
                  </View>

                </CardItem>
              </Card>
            </Content>
          </View>


      </Container>
    );
  }
}

export default Beranda;
