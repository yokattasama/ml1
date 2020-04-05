//常用属性和方法：
//initialPage：初始选中的页的下标，类型是number
//onPageSelected：在页面切换完成后（当用户在页面间滑动）调用，其中event.nativeEvent.position 是当前页的下标
//setPage：用于ViewPager滚动到指定页面

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View,TouchableHighlight} from 'react-native';
import ViewPager from "@react-native-community/viewpager";
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      pageArr:[require('./src/images/1.jpg'),require('./src/images/2.jpg'),require('./src/images/3.jpg'),require('./src/images/4.jpg'),require('./src/images/5.jpg')],
      swiperIndex:0
    }
  }
  render() {
    const {pageArr,swiperIndex}=this.state;
    return (
      <View style={styles.container}>
        <View style={styles.swiperContainer}>
          <ViewPager style={styles.ViewPager}  initialPage={swiperIndex}
            ref='ViewPager'
            onPageSelected={(event)=>{
              this.setState({
                swiperIndex:event.nativeEvent.position
              })
            }}
          >
            {
              pageArr.map((item,index)=>{
                return (
                  <View style={styles.pageItem} key={index}>
                    <Image style={styles.pageItemImg}  source={item}></Image>
                  </View>
                )
              })
            }
          </ViewPager>
          <View style={styles.pagination}>
            {
              pageArr.map((item,index)=>{
                return (
                  <TouchableHighlight
                    underlayColor='transparent'
                    onPress={()=>{
                      this.refs.ViewPager.setPage(index);//点击滚动到指定页
                      this.setState({
                        swiperIndex:index
                      })
                    }}
                    key={index} style={[styles.paginationItem,{backgroundColor:index==swiperIndex?"red":"#fff"}]}>
                    <Text></Text>
                  </TouchableHighlight>
                )
              })
            }
          </View>
        </View>
      </View>
    );
  }
}
