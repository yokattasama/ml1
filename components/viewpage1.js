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
        index: 0,
        pageArr: [0,1,2,3,4,5],
        shouldLast: false,
        shouldNext: false
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
    }
    handlePageSelected = (event) => {
        event.persist()
        this.setState({
            index: event.nativeEvent.position
        }, () => {
           this.props.changeToPage(this.state.index)
           this.state.shouldLast = this.state.index === 0 ? true : false
           this.state.shouldNext = this.state.index === 4 ? true : false
        })
    }
        goLast = () => {
            let newIndex = this.state.index

            this.setState({
                index: newIndex >= 1 ? newIndex - 1 :  newIndex
            }, function () {
                this.goToPage(this.state.index)
            })
        }
        goToPage(index) {
            this.props.changeToPage(index)
            this.refs.ViewPager.setPage(index)
            this.state.shouldLast = index === 0 ? true : false
            this.state.shouldNext = index === 4 ? true : false
        }
        goHome = () => {
            this.goToPage(0)
        }
        goEnd = () => {
            this.goToPage(4)
        }
        goNext = () => {
                let newIndex = this.state.index
                this.setState({
                    index: newIndex <= 3 ? newIndex + 1 :  newIndex
                }, function () {
                    this.goToPage(this.state.index)
                 })
            }
    componentDIdMount () {
    }
    render () {
        return (
            <>
                <Text>子组件接收到的id {this.state.index}</Text>
                <ViewPager
                    onPageSelected={this.handlePageSelected}
                    onPageScroll={this.handleScroll}
                    onPageScrollStateChanged={this.scrollStateChanged}
                    scrollEnabled={true}
                    pageMargin={0}
                    style={styles.vpBox}
                    initialPage={this.state.index}
                    ref="ViewPager"
                    >
                      <View key='1' style={[styles.vp, styles.color1]}><Text>这是第一个页面</Text></View>
                      <View key='2' style={[styles.vp, styles.color2]}><Text>这是第二个页面</Text></View>
                      <View key='3' style={[styles.vp, styles.color3]}><Text>这是第三个页面</Text></View>
                      <View key='4' style={[styles.vp, styles.color4]}><Text>这是第四个页面</Text></View>
                      <View key='5' style={[styles.vp, styles.color5]}><Text>这是第五个页面</Text></View>
                </ViewPager>
                <View style={styles.buttons}>
                    <Button title='首页' onPress={this.goHome} color="#853" disabled={this.state.shouldLast}/>
                    <Button title='上一页' onPress={this.goLast} color="#373" disabled={this.state.shouldLast}/>
                    <Button title='下一页' onPress={this.goNext} color="#9a9" disabled={this.state.shouldNext}/>
                    <Button title='末页' onPress={this.goEnd} color="#358" disabled={this.state.shouldNext}/>
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
    color5: {
        backgroundColor: '#699'
    },
    buttons: {
        position: 'absolute',
        bottom: 100,
        flex: 1,
        width: '100%'
    }
})