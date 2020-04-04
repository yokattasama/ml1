import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import ViewPager from '@react-native-community/viewpager';
import Progress from '../components/progress.js'
export default class WelcomeUI extends React.Component {
    state = {
        count: 1,
        token: 1000,
        pageNumber: 0,
    }
    handleScroll = (event) => {
        event.persist()
        let newCount = this.state.count + 1
        this.setState({
            count: newCount,
            pageNumber: event.nativeEvent.position + 1
        })
    }
    scrollStateChanged = (event) => {
        event.persist()
        let a = this.state.token + 1
        this.setState({
            token: a
        })
//        console.log(event)
    }
    render () {
        return (
            <>
                <Text>{this.state.count}</Text>
                <Text>{this.state.token}</Text>
                <ViewPager
                    onPageScroll={this.handleScroll}
                    onPageScrollStateChanged={this.scrollStateChanged}
                    scrollEnabled={true}
                    pageMargin={0}
                    style={styles.vpBox}
                    initialPage={0}
                    >
                    <View key="1" style={[styles.vp, styles.color1]}><Text>这是第一个页面</Text></View>
                    <View key="2" style={[styles.vp, styles.color2]}><Text>这是第二个页面</Text></View>
                    <View key="3" style={[styles.vp, styles.color3]}><Text>这是第三个页面</Text></View>
                    <View key="4" style={[styles.vp, styles.color4]}><Text>这是第四个页面</Text></View>
                    <View key="5" style={[styles.vp, styles.color4]}><Text>这是第五个页面</Text></View>
                </ViewPager>
                <Progress rate={this.state.pageNumber / 5}/>
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