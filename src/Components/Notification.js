import { StyleSheet,View , Text, Image} from 'react-native'
import Header from "../Components/Header"
function Notification() {
    return ( 
        <View>
            <Header/>
            <View style={styles.container}>
                <Text>
                    Notification
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
export default Notification