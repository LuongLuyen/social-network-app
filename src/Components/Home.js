import { StyleSheet,View , Text, Image} from 'react-native'
import Header from "../Components/Header"
function Home() {
    return ( 
        <View>
            <Header/>
            <View style={styles.container}>
                <Text>
                    Home
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
        margin: 10
    }
})
export default Home