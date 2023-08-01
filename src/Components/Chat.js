import { StyleSheet,View , Text, Image} from 'react-native'
import Header from '../Components/Header'
function Chat() {
    return ( 
        <View>
            <Header/>
            <View style={styles.container}>
                <Text>
                    Chat
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
export default Chat