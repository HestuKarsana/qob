import React from "react";
import { Platform } from "react-native";
import Expo from 'expo';
import { StackNavigator, DrawerNavigator, TabNavigator, TabBarBottom, SwitchNavigator } from "react-navigation";
// import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import { Root, Button, Text, Icon, Footer, FooterTab } from "native-base";
// import * as sessionSelectors from './services/session/selectors';
import Login from "./screens/Login/";
import Beranda from "./screens/Home/";

// import Profile from "./screens/Profile/";
// import editProfile from "./screens/Profile/editProfile";
// import changePassword from "./screens/Users/changePassword";
// import Pengumuman from "./screens/Informasi/pengumuman";

import Register from "./screens/Register/";
import RegistrasiPIn from "./screens/Register/RegistrasiPIn";
import ConfrimPin from "./screens/Register/ConfrimPin";
// import SyaratKetentuan from "./screens/Register/SyaratKetentuan";
/*import LupaPassword from "./screens/LupaPassword/";
import LupaPasswordActivation from "./screens/LupaPassword/LupaPasswordActivation";
import Offices from "./screens/Offices/";
import TrackTrace from "./screens/TrackTrace/";
import CekTarif from "./screens/CekTarif/";
import KodePos from "./screens/KodePos/";
import Riwayat from "./screens/Riwayat/";
import detailRiwayat from "./screens/Riwayat/detailRiwayat";
import Poin from "./screens/Poin/";
import Notifikasi from "./screens/Notifikasi/";
//---> Online Booking
import OnlineBook from "./screens/OnlineBook/";
import RiwayatListOnlineBook from "./screens/OnlineBook/RiwayatListOnlineBook";
import detailOnlineBook from "./screens/OnlineBook/detailOnlineBook";
import detailOnlineBookDirect from "./screens/OnlineBook/detailOnlineBookDirect";
//---> Transaction/Order
import Transaction from "./screens/Transaction/";
import RiwayatListTransaction from "./screens/Transaction/RiwayatListTransaction";
import detailTransaction from "./screens/Transaction/detailTransaction";
import detailTransactionDirect from "./screens/Transaction/detailTransactionDirect";

import BarcodeScan from "./helpers/barcodeScan";
import EmptyView from "./helpers/emptyView";
*/

//----> Tab Main Screen Bottom
const Home = TabNavigator({
  Beranda: { screen: Beranda },
//   Riwayat: { screen: Riwayat },
//   Poin: { screen: Poin },
//   Akun: { screen: Profile }
},
{             
  tabBarComponent: TabBarBottom,
  initialRouteName: 'Beranda', 
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: false,
  tabBarComponent: props => {

    handleTabFocus = (routeName) => {
      // perform your logic here
      // console.log('Token : ', sessionSelectors.get().user.expiresIn);
      // if(sessionSelectors.get().user.token === null){
      //     props.navigation.navigate('Login');
      // }else{
      //     props.navigation.navigate(routeName)
      // }
      props.navigation.navigate(routeName)
    }
      
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Beranda")}>
              <Icon name="ios-home-outline" />
              <Text>Beranda</Text>
            </Button>
            {/* <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => this.handleTabFocus('Riwayat')}>
              <Icon name="ios-list-box-outline" />
              <Text>Riwayat</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => this.handleTabFocus('Poin')}>
              <Icon name="ios-ribbon-outline" />
              <Text>Poin</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => this.handleTabFocus('Akun') }>
              <Icon name="ios-contact-outline" />  
              <Text>Akun</Text>
            </Button> */}
          </FooterTab>
        </Footer>
      );
    }
});

//----> Tab Online Booking
/*const TabOnlineBooking = TabNavigator({
  OnlineBook: {
      screen: OnlineBook,
      navigationOptions: {            
          tabBarLabel: 'Entri'
      }    
  },
  RiwayatListOnlineBook: {
      screen: RiwayatListOnlineBook,
      navigationOptions: {            
          tabBarLabel: 'Riwayat'  
      }
  }
},
{             
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'top',
  tabBarOptions: {
      scrollEnabled: false,
      activeTintColor: '#f26623',
      inactiveTintColor: '#000000',
      upperCaseLabel: false,
      labelStyle: {
          fontSize: 18,
          paddingBottom: 10,
      }, 
      tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
      },
      indicatorStyle: {
          borderBottomColor: '#f26623',
          borderBottomWidth: 3,
      }, 
      style: {
          backgroundColor: '#FFFFFF',
      },       
  }, 
});

//----> Tab Transaction
const TabTransaction = TabNavigator({
  Transaction: {
      screen: Transaction,
      navigationOptions: {            
          tabBarLabel: 'Entri'
      }    
  },
  RiwayatListTransaction: {
      screen: RiwayatListTransaction,
      navigationOptions: {            
          tabBarLabel: 'Riwayat'  
      }
  }
},
{             
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'top',
  tabBarOptions: {
      scrollEnabled: false,
      activeTintColor: '#f26623',
      inactiveTintColor: '#000000',
      upperCaseLabel: false,
      labelStyle: {
          fontSize: 18,
          paddingBottom: 10,
      }, 
      tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
      },
      indicatorStyle: {
          borderBottomColor: '#f26623',
          borderBottomWidth: 3,
      }, 
      style: {
          backgroundColor: '#FFFFFF',
      },       
  }, 
});
*/
const AppNavigator = StackNavigator(
  {
    
    Home: { screen: Home, navigationOptions: { header: null } },
    Login: {  
      screen: Login, 
      navigationOptions: { header: null }
    },
    Register: {  
        screen: Register, 
        navigationOptions: { header: null }
      },
    RegistrasiPIn: {
        screen: RegistrasiPIn,
        navigationOptions: { header: null}
    },
    ConfirmPin: {
        screen: ConfrimPin,
        navigationOptions: { header: null}
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen',       
    // transitionConfig: getSlideFromRightTransition 
  }
);

export default AppNavigator


