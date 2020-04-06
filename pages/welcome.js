import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import ViewPage from '../components/viewpage1.js'
import Progress from '../components/progress.js'
export default class WelcomeUI extends React.Component {
    state = {
        shouldChange: true,
        progressId: 0
    }
    changeTo = (id) => {
        console.log('获取到id', id)
        this.setState({
            progressId: id
        })
    }

    render () {
        return (
            <>
                <Text>父组件传出去的id {this.state.progressId}</Text>
                <ViewPage changeToPage={(index) => this.changeTo(index)}/>
                <Progress rate={(this.state.progressId + 1) / 5}/>
            </>
        )
    }
}
const styles = StyleSheet.create({
    vpBox: {
        flex: 1
    },
    vp: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    color1: {
        backgroundColor: '#09a'
    },
    color2: {
        backgroundColor: '#55a'
    },
    color3: {
        backgroundColor: '#595'
    },
    color4: {
        backgroundColor: '#855'
    }
})