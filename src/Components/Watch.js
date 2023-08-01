import { StyleSheet,View , Text, Image} from 'react-native'
import Header from "../Components/Header"
function Watch() {
    return ( 
        <View>
            <Header/>
            <View style={styles.container}>
                <Text>
                    Setting
                </Text>
            </View>
        </View>
     )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Watch