import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    let {count} = this.props.home;
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{marginTop: 20}}> home </Text>
        <View onPress={() => this.add(count)}>
          <Text>{count}</Text>
        </View>
        <View
          style={{
            width: 200,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 60,
          }}>
          <TouchableOpacity
            onPress={() => this.change(count, 'add')}
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#ff0000',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24, color: '#ffffff'}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.change(count, 'reduce')}
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#ff0000',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24, color: '#ffffff'}}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  change(count, action) {
    this.props.dispatch({type: 'home/change', payload: {count, action}});
  }
}
const mapStateToProps = ({app, home}) => {
  return {app, home};
};
export default connect(mapStateToProps)(Home);
