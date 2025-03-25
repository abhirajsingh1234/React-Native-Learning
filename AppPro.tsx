import React, {JSX} from 'react'

import {View, Text, SafeAreaView, StyleSheet, useColorScheme} from 'react-native'

function AppPro(): JSX.Element{
    // const isDarkMode = useColorScheme() ==='dark'
    const isDarkMode = true
  return(
    <SafeAreaView style = {[
        styles.container,
        {backgroundColor: isDarkMode ? '#000000' : '#FFFFFF'} // Explicitly set background based on mode
      ]}>
    <View >
        <Text style = {isDarkMode ? styles.WhiteText : styles.DarkText}>Hyy my name is abhiraj singh </Text>
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',     //left to right  (flex-start, center, flex-end)
        justifyContent:'center'    //top to bottom  (flex-start, center, flex-end)
    },
    WhiteText:{
        color:'#FFFFFF'
    },
    DarkText:{
        color:'#000000'
    }
    
})

export default AppPro;