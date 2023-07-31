import { StyleSheet,View , Text, Image} from 'react-native'
function Watch() {
    return ( 
        <View style={styles.container}>
            <Text>
                Watch
            </Text>
        </View>
     )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }})
export default Watch