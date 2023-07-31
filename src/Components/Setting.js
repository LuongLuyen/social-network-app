import { StyleSheet,View , Text, Image} from 'react-native'
function Setting() {
    return ( 
        <View style={styles.container}>
            <Text>
                Setting
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
export default Setting