import { StyleSheet,View , Text, Image, ScrollView} from 'react-native'
import mes from '../Utils/Img/1.png'
import chatData from '../Utils/Js/chat'
import Header from "../Components/Header"
function Notification() {
    return ( 
        <View>
            <Header/>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.status}>Mới</Text>
                    <View >
                        <View style={styles.chat}>
                            <Image style={styles.avatar} source={mes}/>
                            <View style={styles.chatContent}>
                                <Text style={styles.userName}>nguoi dung</Text>
                                <Text> hung da binh luan bai viet cua ban</Text>
                            </View>
                        </View>
                        <Text style={styles.vach}></Text>
                    </View>
                    <View >
                        <View style={styles.chat}>
                            <Image style={styles.avatar} source={mes}/>
                            <View style={styles.chatContent}>
                                <Text style={styles.userName}>nguoi dung</Text>
                                <Text> hung da binh luan bai viet cua ban</Text>
                            </View>
                        </View>
                        <Text style={styles.vach}></Text>
                    </View>
                    <Text style={styles.status}>Trước đó</Text>
                    {chatData.map((item)=>(
                        <View key ={item.id}>
                            <View style={styles.chat}>
                                <Image style={styles.avatar} source={item.avtar}/>
                                <View style={styles.chatContent}>
                                    <Text style={styles.userName}>nguoi dung</Text>
                                    <Text>{item.content}</Text>
                                </View>
                            </View>
                            <Text style={styles.vach}></Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
     )
}
const styles = StyleSheet.create({
    container: {
    },
    chat: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
    },
    avatar: {
        width: 50,
        height: 50,
    },
    vach: {
        height: 0.5,
        backgroundColor: '#c7c3c3',
        marginLeft: 10,
        marginRight: 10,
    },
    userName: {
        // fontWeight: 900,
        marginBottom: 5,
    },
    chatContent: {
        marginLeft: 10
    },
    status: {
        marginLeft: 10,
        fontSize: 20,
        // fontWeight: 700,
        padding: 10,
    }
})
export default Notification