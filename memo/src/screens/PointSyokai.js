import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class PointSyokai extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pointHeader}>
          <Text style={styles.headerText}>ポイント</Text>
        </View>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('PointMeisai'); }}>
          <View style={styles.pointHeader}>
            <Text style={styles.meisaiButton}>ポイント明細・履歴</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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

export default PointSyokai;
