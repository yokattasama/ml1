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
        count: 1,
        token: 1000,
        pageNumber: 0,
        index: 0,
        shouldLast: false,
        shouldNext: false
    }

    goLast = () => {
        let newIndex = this.state.index

        this.setState({
            index: newIndex >= 1 ? newIndex - 1 :  newIndex
        }, function () {
//            console.log(this.state.index)
        })
    }
    goNext = () => {
            let newIndex = this.state.index
            this.setState({
                index: newIndex <= 3 ? newIndex + 1 :  newIndex
            }, function () {
//                 console.log(this.state.index)
             })
        }
    render () {
        return (
            <>
                <Text>{this.state.index}</Text>
                <ViewPage index={this.state.index} />
                <Progress rate={this.state.pageNumber / 5}/>
                <View style={styles.buttons}>
                    <Button title='上一页' onPress={this.goLast} color="#373" disabled={this.state.shouldLast}/>
                    <Button title='下一页' onPress={this.goNext} color="#9a9" disabled={this.state.shouldNext}/>
                </View>
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
    },
    buttons: {
        position: 'absolute',
        bottom: 100,
        flex: 1,
        width: '100%'
    }
})