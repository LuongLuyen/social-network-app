import {StyleSheet,View , Text,Image, ScrollView, TextInput} from 'react-native'
import Avatar from '../Utils/Img/1.png'
import { Entypo } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
function ChatMain() {
    const [search, setSearch] = useState("")
    return ( 
       <View style ={styles.container}>
            <View style ={styles.header}>
                <View style ={styles.headerItem}>
                    <Image style ={styles.avatar} source={Avatar}/>
                    <Text style ={styles.name}>
                        Nguyen Van A
                    </Text>
                </View>
                <View style ={styles.headerIcon}>
                    <Entypo style ={styles.headerIconItem} name="phone" size={24} color="blue" />
                    <FontAwesome style ={styles.headerIconItem} name="video-camera" size={24} color="blue" />
                    <FontAwesome style ={styles.headerIconItem} name="th-list" size={24} color="blue" />
                </View>
            </View>
            <Text style={styles.vach}></Text>
            <View style ={styles.main}>
                <ScrollView>
                    <View style ={styles.userOther}>
                        <Image style ={styles.user} source={Avatar}/>
                        <Text style={styles.other}>
                            Đây là tin nhắn của A
                        </Text>
                    </View>
                    <View style ={styles.userYou}>
                        <Text style={styles.you}>
                            Đây là tin nhắn của Bạn
                        </Text>
                    </View>
                    <View style ={styles.userYou}>
                        <Text style={styles.you}>
                            Đây là tin nhắn của Bạn
                        </Text>
                    </View>
                    <View style ={styles.userYou}>
                        <Text style={styles.you}>
                            Đây là tin nhắn của Bạn
                        </Text>
                    </View>
                    <View style ={styles.userYou}>
                        <Text style={styles.you}>
                            Đây là tin nhắn của Bạn
                        </Text>
                    </View>
                    <View style ={styles.userOther}>
                        <Image style ={styles.user} source={Avatar}/>
                        <Text style={styles.other}>
                            Đây là tin nhắn của A
                        </Text>
                    </View>
                    <View style ={styles.userOther}>
                        <Image style ={styles.user} source={Avatar}/>
                        <Text style={styles.other}>
                            Đây là tin nhắn của A
                        </Text>
                    </View>
                    <View style ={styles.userOther}>
                        <Image style ={styles.user} source={Avatar}/>
                        <Text style={styles.other}>
                            Đây là tin nhắn của A
                        </Text>
                    </View>
                    <View style ={styles.userYou}>
                        <Text style={styles.you}>
                            Đây là tin nhắn của Bạn
                        </Text>
                    </View>
                    <View style ={styles.userOther}>
                        <Image style ={styles.user} source={Avatar}/>
                        <Text style={styles.other}>
                            Đây là tin nhắn của A
                        </Text>
                    </View>
                    <View style ={styles.userYou}>
                        <Text style={styles.you}>
                            Đây là tin nhắn của Bạn
                        </Text>
                    </View>
                    <View style ={styles.userYou}>
                        <Text style={styles.you}>
                            Đây là tin nhắn của Bạn
                        </Text>
                    </View>
                    <View style ={styles.userOther}>
                        <Image style ={styles.user} source={Avatar}/>
                        <Text style={styles.other}>
                            Đây là tin nhắn của A
                        </Text>
                    </View>
                    <View style ={styles.userOther}>
                        <Image style ={styles.user} source={Avatar}/>
                        <Text style={styles.other}>
                            Đây là tin nhắn của A
                        </Text>
                    </View>
                    <View style ={styles.userOther}>
                        <Image style ={styles.user} source={Avatar}/>
                        <Text style={styles.other}>
                            Đây là tin nhắn của A
                        </Text>
                    </View>
                </ScrollView>
            </View>
            <Text style={styles.vach}></Text>
            <View style ={styles.footer}>
                <MaterialIcons  style={styles.icon} name="add-to-photos" size={24} color="blue" />
                <TextInput
                    style={styles.input}
                    onChangeText={setSearch}
                    value={search}
                    placeholder="Aa"
                />
                <FontAwesome  style={styles.icon} name="paper-plane" size={24} color="blue" />
            </View>
       </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10
    },
    header: {
        height: '8%',
        flexDirection: 'row',
    },
    headerItem: {
        flexDirection: 'row',
        width: '50%'
    },
    headerIcon: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    avatar: {
        width: '30%',
        height: '100%',
        marginLeft: 10,
        marginRight: 10
    },
    name: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: '800'
    },
    headerIconItem: {
        marginTop: 15,
        marginLeft:5,
        marginRight:5
    },
    main: {
        height: '84%',
    },
    user: {
        width: 40,
        height: 40,
    },
    userOther: {
        flexDirection: 'row',
        marginTop: 10
    },
    other: {
        backgroundColor: '#e1e3e0ee',
        width: '50%',
        borderRadius: 100,
        paddingLeft: 10
    },
    userYou: {
        backgroundColor: '#0084ff',
        marginLeft: '50%',
        justifyContent: 'flex-end',
        marginTop: 10,
        borderRadius: 100,
    },
    you: {
        height: 40,
        marginLeft: 10,
    },
    footer: {
        height: '8%',
        flexDirection: 'row'
    },
    input: {
        height: 40,
        margin: 5,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 100,
        width: 250
    },
    icon: {
        margin: 6,
        fontSize: 30
    },
    vach: {
        height: 0.5,
        backgroundColor: '#c7c3c3',
        marginLeft: 10,
        marginRight: 10,
    },
})
export default ChatMain