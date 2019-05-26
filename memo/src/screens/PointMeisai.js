import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class PointMeisai extends React.Component {

  render() {
    return (
      <View style={this.props.state.pointMeisai ? styles.activeModalContent : styles.nonActiveModalContent}>
        <View style={styles.pointHeader}>
          <Text style={styles.headerText}>ポイント明細</Text>
        </View>
        <View style={styles.pointHeader}>
          <Text style={styles.meisaiButton}>これがホンマのポイント明細やねん</Text>
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
});

export default PointMeisai;
