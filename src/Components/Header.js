import { StyleSheet,View , Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
function Header() {
    return ( 
        <View style={styles.header}>
            <View >
                <Text style={styles.name}>Social Network</Text>
            </View>
            <View style={styles.headerUpload}>
                <Feather style={styles.headerUploadItem} name="search" size={24} color="blue" />
                <Ionicons style={styles.headerUploadItem} name="ios-notifications-outline" size={24} color="blue" />
                <AntDesign style={styles.headerUploadItem} name="bars" size={24} color="blue" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    name: {
        color: 'blue',
        fontSize: 20,
        fontWeight: '900'
    },
    header: {
        margin: 10,
        width: 340,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
    },
    headerUpload: {
        flexDirection: 'row',
        marginLeft: '25%',
        display: 'flex',
        justifyContent: 'center'
    },
    headerUploadItem: {
        marginRight: '6%',
    }
})
export default Header