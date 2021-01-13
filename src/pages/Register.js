'use strict'

/**
 * @Author: lq
 * @Date: 2019-05-07
 * @Project:rn_navigation_redux
 */

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const TAG = 'Register'

class Register extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(TAG, 'this.props:::', this.props)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text onPress={() => {
            this.props.navigation.popToTop('Tab', {
              sensorsdataparams: {
                name: 'Tab',
                $screen_name: 'Tab',
                $title: 'Tab',
              },
              sensorsdataurl: 'Tab',
              label:<Text>测试内容</Text>
            })
          }}>
          Pop To Top {' '}
        </Text>
        <Text style={{ marginTop: 20 }} onPress={() => {
            this.props.navigation.goBack()
          }}
        >GO Back{' '}
        </Text>
        <Text style={{ marginTop: 20 }} onPress={() => {
          this.props.navigation.push('FirstDetail', {
            sensorsdataparams: {
              name: 'FirstDetail',
              $screen_name: 'FirstDetail',
              $title: 'FirstDetail',
            },
            sensorsdataurl: 'FirstDetail',
            label:<Text>测试内容</Text>
          })
        }}>go to Detail again</Text>
      </View>
    )
  }
}

export default connect(({ nav }) => ({
  nav,
}))(Register)
