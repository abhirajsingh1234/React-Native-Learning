import React,{useState,useRef} from 'react'
import  {View, Text, SafeAreaView, Button,StyleSheet,TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
export default app;
function app(){
    const[a,seta] = useState(0) // Use useState for UI updates.
    const b =useRef(0) //Use useRef for non-re-rendering values.
    let c = 0 //Use let for temporary variables inside functions.
    c=c+1
    const d = 0 //constant variable
    const update=()=>{
        seta(a+1)
        b.current=b.current+2
    }
    return(
        
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.textcontainer}>{a}</Text>
                <Text style={styles.textcontainer}>{b.current}</Text>
                <Button title = 'Click me' color = 'darkgreen'  onPress = {() => {update()}}></Button>
                <TouchableOpacity style={styles.button} onPress={() => update()}>
                       <Text style={styles.buttonText}>Click Me</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button1} onPress={() => update()}>
                    <Text style={styles.buttonText}>Click Me</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => update()}>
                    <LinearGradient colors={["#FF6F61", "#DE1A1A"]} style={styles.gradientButton}>
                        <Text style={styles.buttonText}>Gradient Button</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.circularButton} onPress={() => update()}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: "gray", opacity: 0.5 }]}
                    disabled={true}
                >
                    <Text style={styles.buttonText}>Disabled</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}
const styles =StyleSheet.create({
    container:{
        paddingTop:100
    },
    textcontainer:{
        fontSize:20,
        paddingLeft:200,
        alignItems:'center',     //left to right  (flex-start, center, flex-end)
    },
    buttoncontainer:{
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        
    },
    button: {
        backgroundColor: "#3498db",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonText: {
        color: "gray",
        fontSize: 16,
        fontWeight: "bold",
      },
      button1: {
        backgroundColor: "#2ecc71",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#27ae60",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5, // For Android shadow
      },
      gradientButton: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      },
      circularButton: {
        backgroundColor: "#f39c12",
        width: 60,
        height: 60,
        borderRadius: 30, // Make it a perfect circle
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5, // For Android
      },
})

