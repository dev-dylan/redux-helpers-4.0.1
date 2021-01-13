'use strict'

/**
 * @Author: lq
 * @Date: 2019-05-07
 * @Project:rn_navigation_redux
 */

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const TAG = 'Detail'

class Detail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
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
          this.props.navigation.push('Register', {
            sensorsdataparams: {
              name: 'detail',
              $screen_name: 'detail',
              $title: 'detail',
            },
            sensorsdataurl: 'detail',
            label:<Text>测试内容</Text>
          })
        }}>go to Detail Page again</Text>
      </View>
    )
  }
}

export default connect(({ nav }) => ({
  nav,
}))(Detail)
