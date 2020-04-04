import React from 'react'
import {
    StyleSheet
} from 'react-native'
import { ProgressBar } from '@react-native-community/progress-bar-android';

export default class Progress extends React.Component {
    state = {
            progressRate: 0.6
        }
     componentDidMount() {
//        let _this = this
//        setInterval(() => {
//          let progress = (_this.state.progressRate + 0.02) % 1
////          console.log(progress)
//           _this.setState({
//            progressRate: progress
//          })
//        }, 100)
      }
    render () {
        return (
            <>
                <ProgressBar indeterminate={false} {...this.props} progress={this.props.rate} color="#fff" style={styles.fixed} styleAttr='Horizontal'/>
            </>
        )
    }
}

const styles = StyleSheet.create({
    viewPageBox: {
        height: 300
    },
    fixed: {
        position: 'absolute',
        bottom: 55,
        width: '100%'
    }
});