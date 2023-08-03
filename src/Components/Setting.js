import { StyleSheet,View , Text, Image, ScrollView} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import Header from "../Components/Header"
function Setting() {
    return ( 
        <View>
            <Header/>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.settingWrap}>
                    <View style={styles.setting}>
                        <MaterialIcons name="security" size={24} color="blue" />
                        <Text style={styles.settingContent} >Tài khoản và bảo mật</Text>
                    </View>
                    <Text style={styles.vach}></Text>
                    <View style={styles.setting}>
                        <AntDesign name="lock" size={24} color="blue" />
                        <Text style={styles.settingContent} >Quyền riêng tư</Text>
                    </View>
                    </View>
                    <View style={styles.settingWrap}>
                    <View style={styles.setting}>
                        <MaterialIcons name="sd-storage" size={24} color="blue" />
                        <Text style={styles.settingContent} >Dung lượng và dữ liệu</Text>
                    </View>
                    <Text style={styles.vach}></Text>
                    <View style={styles.setting}>
                        <MaterialIcons name="backup" size={24} color="blue" />
                        <Text style={styles.settingContent} >Sao lưu và khôi phục</Text>
                    </View>
                    <Text style={styles.vach}></Text>
                    <View style={styles.setting}>
                        <Ionicons  name="ios-notifications-outline" size={24} color="blue" />
                        <Text style={styles.settingContent} >Thông báo</Text>

                    </View>
                    </View>
                    <View style={styles.settingWrap}>
                    <View style={styles.setting}>
                        <AntDesign name="message1" size={24} color="blue" />
                        <Text style={styles.settingContent} >Tin nhắn</Text>

                    </View>
                    <Text style={styles.vach}></Text>
                    <View style={styles.setting}>
                        <Feather name="clock" size={24} color="blue" />
                        <Text style={styles.settingContent} >Nhật ký</Text>

                    </View>
                    <Text style={styles.vach}></Text>
                    <View style={styles.setting}>
                        <Feather name="phone" size={24} color="blue" />
                        <Text style={styles.settingContent} >Cuộc gọi</Text>
                    </View>
                    <Text style={styles.vach}></Text>
                    <View style={styles.setting}>
                        <FontAwesome5 name="address-book" size={24} color="blue" />
                        <Text style={styles.settingContent} >Danh bạ</Text>
                    </View>
                    </View >

                    <View style={styles.settingWrap}>
                        <View style={styles.setting}>
                            <Ionicons name="information-circle-outline" size={24} color="blue" />
                            <Text style={styles.settingContent} >Thông tin về ứng dụng</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
     )
}
const styles = StyleSheet.create({
    container: {

    },
    settingWrap: {
        marginBottom: 10,
        borderRadius: 10,
    },
    setting: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
    },
    settingContent: {
        paddingLeft: 15,
    },
    vach: {
        height: 0.5,
        backgroundColor: '#c7c3c3',
        marginLeft: 10,
        marginRight: 10,
    }
})
export default Setting