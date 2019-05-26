import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  Platform,
  WebView,
  TouchableOpacity
} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import PointMeisai from './PointMeisai';

export default class Settings extends React.Component {

  static navigationOptions = {
    title: '各種設定',
    headerTitleStyle: {
      color: 'white',
      flex: 1,
      textAlign: 'center'
    },
    headerStyle: {
      backgroundColor: '#432f2f',
    },
  };

  onRoginNashi = (element, title) => {
    this.props.navigation.navigate('InformationList', {
      element: element,
      title: title,
    })
  }

  state = {
    modalVisible: false,
  };

  openModalKaisha() {
    this.setState({modalVisible:true});
    this.setState({kaishaSetsumei: true});
    this.setState({pointSyokai: false});
    this.setState({pointMeisai: false});
  }

  openModalPointSyokai() {
    this.setState({modalVisible:true});
    this.setState({pointSyokai: true});
    this.setState({pointMeisai: false});
    this.setState({kaishaSetsumei: false});
  }

  openModalPointMeisai() {
    this.setState({modalVisible:true});
    this.setState({pointMeisai: true});
    this.setState({pointSyokai: false});
    this.setState({kaishaSetsumei: false});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    return (
      <View>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>ニックネーム変更</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onRoginNashi} style={styles.buttonContainer}>
            <Text>お知らせ一覧</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text>特典利用履歴</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.openModalPointSyokai()} style={styles.buttonContainer}>
            <Text>ポイント照会</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text>お支払方法変更</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text>toReCuとは？</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text>プライバシーポリシー/個人情報保護方針</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text>toReCu導入をお考えの方</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text>よくあるお問い合わせ</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.openModalKaisha()} style={styles.buttonContainer}>
            <Text>会社説明</Text>
          </TouchableOpacity>
          <Modal
            visible={this.state.modalVisible}
            animationType={'slide'}
            onRequestClose={() => this.closeModal()} >
            <View style={this.state.pointSyokai ? styles.activeModal : styles.nonActiveModal}>
              <View style={this.state.pointSyokai ? styles.activeModalHeader : styles.nonActiveModalHeader}>
                <TouchableOpacity onPress={() => this.closeModal()} style={this.state.pointSyokai ? styles.activeBackButtonContainer : styles.nonActiveBackButtonContainer}>
                  <Text style={this.state.pointSyokai ? styles.activeModalBackButton: styles.nonActiveModalBackButton}>←</Text>
                </TouchableOpacity>
                <View style={this.state.pointSyokai ? styles.activeModalTitleContainer : styles.nonActiveModalTitleContainer}>
                  <Text style={this.state.pointSyokai ? styles.activeModalTitle : styles.nonActiveModalTitle}>ポイント照会</Text>
                </View>
              </View>
              <View style={this.state.pointSyokai ? styles.activeModalContent : styles.nonActiveModalContent}>
                <View style={styles.pointHeader}>
                  <Text style={styles.headerText}>ポイント</Text>
                </View>
                <TouchableOpacity  onPress={() => this.openModalPointMeisai()} style={styles.pointHeader}>
                  <Text style={styles.meisaiButton}>ポイント明細・履歴</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={this.state.pointMeisai ? styles.activeModal : styles.nonActiveModal}>
              <PointMeisai state={this.state.pointMeisai} style={styles} />
            </View>
            <View style={this.state.kaishaSetsumei ? styles.activeModal : styles.nonActiveModal}>
              <View style={this.state.kaishaSetsumei ? styles.activeModalHeader : styles.nonActiveModalHeader}>
                <TouchableOpacity onPress={() => this.closeModal()} style={this.state.kaishaSetsumei ? styles.activeBackButtonContainer : styles.nonActiveBackButtonContainer}>
                  <Text style={this.state.kaishaSetsumei ? styles.activeModalBackButton: styles.nonActiveModalBackButton}>←</Text>
                </TouchableOpacity>
                <View style={this.state.kaishaSetsumei ? styles.activeModalTitleContainer : styles.nonActiveModalTitleContainer}>
                  <Text style={this.state.kaishaSetsumei ? styles.activeModalTitle : styles.nonActiveModalTitle}>会社説明</Text>
                </View>
              </View>
              <Text style={this.state.kaishaSetsumei ? styles.activeModalContent : styles.nonActiveModalContent}>ここに表示内容を記述</Text>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    width: '100%',
    height: '100%',
    backgroundColor: '#dcd3b2',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    width: '100%',
    height: 40,
    paddingLeft: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 1,
    fontSize: 80,
  },
  activeModal: {
    diplay: 'flex',
    flex: 1,
    zIndex: 10,
  },
  activeModalHeader: {
    display: 'flex',
    flex: 1.8,
    backgroundColor: '#432f2f',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeModalTitleContainer: {
    display: 'flex',
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flesDirection: 'row',
  },
  activeBackButtonContainer: {
    display: 'flex',
    position: 'absolute',
    top: 18,
    left: 10,
    width: '40%',
    height: 50,
  },
  activeModalBackButton: {
    display: 'flex',
    color: '#ffffff',
    paddingLeft: 10,
    fontSize: 30,
  },
  activeModalTitle: {
    display: 'flex',
    color: '#ffffff',
    fontSize: 20,
  },
  activeModalContent:{
    display: 'flex',
    flex: 12,
  },
  nonActiveModal: {
    display: 'none',
  },
  nonActiveModalHeader: {
    diplay: 'none',
  },
  nonActiveBackButtonContainer: {
    diplay: 'none',
  },
  nonActiveModalBackButton: {
    diplay: 'none',
  },
  nonActiveModalTitleContainer: {
    diplay: 'none',
  },
  nonActiveModalTitle: {
    diplay: 'none',
  },
  nonActiveModalContent: {
    diplay: 'none',
  },
  pointHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    marginBottom: 4,
  },
  meisaiButton: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#999',
  },
});
