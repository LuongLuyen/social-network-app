import { StyleSheet,View , Text, Image,ScrollView, TouchableOpacity} from 'react-native'
import Header from '../Components/Header'
import mes from '../Utils/Img/1.png'
import chatData from '../Utils/Js/chat'
function Chat({navigation}) {
    return ( 
        <View>
            <Header/>
            <ScrollView>
                <View style={styles.active}>
                    <ScrollView horizontal= {true}>
                        <View>
                            <Image style={styles.activeItem} source={mes}/>
                            <Text style={styles.activeUser}>User</Text>
                        </View>
                        <View>
                            <Image style={styles.activeItem} source={mes}/>
                            <Text style={styles.activeUser}>User</Text>
                        </View>
                        <View>
                            <Image style={styles.activeItem} source={mes}/>
                            <Text style={styles.activeUser}>User</Text>
                        </View>
                        <View>
                            <Image style={styles.activeItem} source={mes}/>
                            <Text style={styles.activeUser}>User</Text>
                        </View>
                        <View>
                            <Image style={styles.activeItem} source={mes}/>
                            <Text style={styles.activeUser}>User</Text>
                        </View>
                        <View>
                            <Image style={styles.activeItem} source={mes}/>
                            <Text style={styles.activeUser}>User</Text>
                        </View>
                        <View>
                            <Image style={styles.activeItem} source={mes}/>
                            <Text style={styles.activeUser}>User</Text>
                        </View>
                    </ScrollView>
                </View>
                {chatData.map((item)=>(
                    <View key ={item.id}>
                        <TouchableOpacity style={styles.chat}
                            onPress={()=> 
                                navigation.navigate('ChatMain')
                            }
                        >
                            <Image style={styles.avatar} source={item.avtar}/>
                                <View style={styles.chatContent}>
                                <Text style={styles.userName}>nguoi dung</Text>
                                <Text>{item.content}</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.vach}></Text>
                    </View>
                ))}
            </ScrollView>
        </View>
     )
}
const styles = StyleSheet.create({
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
    active: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
    },
    activeItem: {
        width: 50,
        height: 50,
        marginLeft:10,
        marginRight: 10,
        marginTop: 10,
    },
    activeUser: {
        marginLeft: 20,
        paddingBottom: 10,
        fontWeight: '700'
    },
    userName: {
        fontWeight: '900',
        marginBottom: 5,
        fontSize: 20,
    },
    chatContent: {
        marginLeft: 10
    }
})
export default Chat