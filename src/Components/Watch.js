import { StyleSheet,View , Text, Image, ScrollView} from 'react-native'
import Header from "../Components/Header"
import Bg from '../Utils/Img/a.jpg'
import Avatar from '../Utils/Img/1.png'
function Watch() {
    return ( 
        <View>
            <Header/>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.watch}>
                        <Image style={styles.bg} source={Bg}/>
                        <View style={styles.user}>
                            <Image style={styles.avatar} source={Avatar}/>
                            <Text style={styles.name}>Đây là video xem phim tại đây</Text>
                        </View>
                        <Text style={styles.vach}></Text>
                    </View>
                    <View style={styles.watch}>
                        <Image style={styles.bg} source={Bg}/>
                        <View style={styles.user}>
                            <Image style={styles.avatar} source={Avatar}/>
                            <Text style={styles.name}>Đây là video xem phim tại đây</Text>
                        </View>
                        <Text style={styles.vach}></Text>
                    </View>
                    <View style={styles.watch}>
                        <Image style={styles.bg} source={Bg}/>
                        <View style={styles.user}>
                            <Image style={styles.avatar} source={Avatar}/>
                            <Text style={styles.name}>Đây là video xem phim tại đây</Text>
                        </View>
                        <Text style={styles.vach}></Text>
                    </View>
                </ScrollView>
            </View>
        </View>
     )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    watch: {
        marginTop: 10
    },
    bg: {
        width: 340,
        height: 180,
    },
    avatar: {
        width: 50,
        height: 50
    },
    user: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    name: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16
    },
    vach: {
        height: 0.5,
        backgroundColor: '#c7c3c3',
        marginLeft: 10,
        marginRight: 10,
    },
})
export default Watch