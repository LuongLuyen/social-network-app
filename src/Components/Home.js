import { StyleSheet,View , Text, TextInput, Image, ScrollView} from 'react-native'
import { useState } from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import Header from "../Components/Header"
import Avatar from '../Utils/Img/1.png'
import data from "../Utils/Js/data"
function Home() {
    const [name, setName] = useState('')
    return ( 
        <View>
            <Header/>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.you}>
                        <Image style={styles.youAvatar} source={Avatar}/>
                        <TextInput
                            style={styles.input}
                            onChangeText={setName}
                            placeholder="Bạn đang nghĩ gì ?"
                            value={name}
                        />
                        <Ionicons style={styles.youUpload} name="cloud-upload-outline" size={24} color="blue" />
                    </View> 
                    {data.map((item)=>(
                        <View style={styles.item}
                            key ={item.id}>
                                <View style= {styles.itemTitle}>
                                    <Image style={styles.avt} source={item.avt}/>
                                    <Text style={styles.title}> {item.name} </Text>
                                </View>
                            <Text style={styles.vach}></Text>
                                <View>
                                    <Text style={styles.contentText}>{item.content}</Text>
                                </View>
                                <View style={styles.content} >
                                    <Image style={styles.contentImg} source={item.anh}/>
                                </View>
                            <Text style={styles.vach}></Text>
                                <View style={styles.action}>
                                    <Text style={styles.quantity}>100 Like</Text>
                                    <Text style={styles.quantity}>300 bình luận</Text>
                                </View>
                            <Text style={styles.vach}></Text>
                                <View style={styles.action}>
                                    <Text style={styles.feeling}>
                                        <SimpleLineIcons name="like" size={24} color="black" />
                                        Like
                                    </Text>
                                    <Text style={styles.feeling}>
                                        <FontAwesome5 name="comment" size={24} color="black" />
                                        Bình luận
                                    </Text>
                                    <Text style={styles.feeling}>
                                        <Ionicons name="share-outline" size={24} color="black" />
                                        Chia sẻ
                                    </Text>
                                </View> 
                            <Text style={styles.vach}></Text>
                            <View style={styles.comment} >
                                <Image style={styles.commentAvatar} source={item.avt}/>
                                <View style={styles.userComment}>
                                    <Text>User</Text>
                                    <Text>test  binh luan</Text>
                                </View>
                            </View>
                        </View>
                    ))} 
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10
    },
    you: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
        borderRadius:10    
    },
    name: {
        fontSize: 20,
        color: '#12a4ff'
    },
    youAvatar: {
        marginRight: 10,
        width: 40,
        height: 40,
    },
    input: {
        width: '70%',
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 0.4,
        borderRadius: 9999999
    },
    youUpload: {
        paddingTop: 7,
        width: 40,
        height: 40,
        marginLeft: '5%',
    },
    item: {
        marginTop: 20,
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
    },
    itemTitle: {
        flexDirection: 'row',
        padding: 10,
    },
    container: {
        margin: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: '800'
    },
    category: {
        width: '100%',
        height:200
    },
    avt: {
        width: 40,
        height: 40,
    },
    action: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:10,
    },
    contentImg: {
        width: '100%',
        height: 180
    },
    feeling: {
       paddingRight: 30,
       paddingLeft: 30,
       paddingTop:10,
       paddingBottom: 10,
    },
    quantity: {
        paddingRight: 100,
        paddingLeft: 100,
        paddingTop:10,
        paddingBottom: 10,
    },
    vach: {
        height: 0.5,
        backgroundColor: '#c7c3c3'
    },
    contentText: {
        margin: 10,
        marginBottom: 20,
    },
    comment: {
        flexDirection: 'row',
        margin: 10,
    },
    commentAvatar: {
        width: 40,
        height: 40,
    },
    userComment: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#c7c3c3',
        borderRadius: 10,
    },
})
export default Home