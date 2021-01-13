import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

const TAG = 'Login'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // console.log(TAG, 'this.props::', this.props)
  }

  render() {
    let { navigation } = this.props
    var testFunction = function () {
      var a = { name: 'zzz' }
      var b = { name: 'vvv' }
      a.child = b
      b.parent = a
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>HomePage</Text>
        <TouchableOpacity
          onPress={() => {
            // navigation.pop('Init')
            console.log("sensors data log: on press event");
            navigation.navigate('Register', {
              sensorsdataparams: {
                name: 'Register',
                $screen_name: 'Register',
                $title: 'Register',
              },
              sensorsdataurl: 'Register',
              fu: testFunction(),
              label:<Text>测试内容</Text>
            })
          }}
          style={{ marginTop: 20 }}
        >
          <Text style={{ color: 'red' }}>Go to DetailPage </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(({ nav }) => ({
  nav,
}))(Login)
