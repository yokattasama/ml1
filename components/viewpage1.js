import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import ViewPager from '@react-native-community/viewpager';
export default class ViewPage extends React.Component {
    state = {
        count: 1,
        token: 1000,
        pageNumber: 0,
        index: this.props.index,
        pageArr: [0,1,2,3,4,5]
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
    handlePageSelected = (event) => {
        event.persist()
        this.setState({
            index: event.nativeEvent.position
        }, () => {
            console.log(this.state.index)
        })
    }
    goToPage() {
        this.refs.ViewPager.setPage(this.props.index);
    }
    shouldComponentUpdate (nextProps, nextState) {
        console.log('下一次' + JSON.stringify(nextProps))
        console.log('当前' + this.props.index)
        this.goToPage()
        return true
    }
    render () {
        return (
            <>
                <Text>{this.props.index}</Text>
                <ViewPager
                    ref='ViewPager'
                    onPageSelected={this.handlePageSelected}
                    onPageScroll={this.handleScroll}
                    onPageScrollStateChanged={this.scrollStateChanged}
                    scrollEnabled={true}
                    pageMargin={0}
                    style={styles.vpBox}
                    initialPage={this.state.index}
                    >
                      <View key='1' style={[styles.vp, styles.color1]}><Text>这是第一个页面</Text></View>
                      <View key='2' style={[styles.vp, styles.color2]}><Text>这是第二个页面</Text></View>
                      <View key='3' style={[styles.vp, styles.color3]}><Text>这是第三个页面</Text></View>
                      <View key='4' style={[styles.vp, styles.color4]}><Text>这是第四个页面</Text></View>
                      <View key='5' style={[styles.vp, styles.color5]}><Text>这是第五个页面</Text></View>
                </ViewPager>
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