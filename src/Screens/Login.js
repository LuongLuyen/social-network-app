import {SafeAreaView, StyleSheet, TextInput,Button,View , Text} from 'react-native'
import { useState } from 'react'
function Login({navigation}) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    return ( 
        <View style={styles.login}>
            <View style={styles.title}>
                <Text style={styles.title}>Social network</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                placeholder="Tên đăng nhập"
                value={name}
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Mật khẩu"
            />
            <View style={styles.information}>
                <Text>Tài khoản phải từ 6 đến 20 kí tự </Text>
                <Text>Mật khẩu phải từ 6 đến 20 kí tự</Text>
            </View>
            <View style={styles.submit}>
                <View style={styles.submitLogin}>
                    <Button
                        title="Login"
                        onPress={()=> 
                            navigation.navigate('HomeApp')
                        }
                        color= '#333'
                    />
                </View>
                <View style={styles.submitLogin}>
                    <Button
                        title="Sign Up"
                        onPress={() =>
                            navigation.navigate('Login')
                        }
                        color= '#b7b5b5'
                    />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        height: 40,
        margin: 12,
        color: 'blue',
        fontSize: 30,
        bottom: 30,
    },
    login: {
        marginTop: '40%',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 10,
    },
      submit: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
      submitLogin: {
        width: 150,
        padding: 10,
        marginTop: '20%',
    },
      information:{
        marginLeft: 20,
    }
})
export default Login