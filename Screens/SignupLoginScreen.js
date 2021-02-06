import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput,Alert } from 'react-native';

export default class SignupLoginScreen extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    }
    
    userSignUp=(username,password)=>{
        firebase.auth().createUserWithEmailAndPassword(username,password)
        .then((response)=>{
            return Alert. alert("User Added Successfully")
        })
        .catch(function (error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }

    userLogin=(username,password)=>{
        firebase.auth().signInWithEmailAndPassword(username,password)
        .then(()=>{
            return Alert. alert("Successfully Login")
        })
        .catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert .alert(errorMessage)
        })
    }
   
    render(){
        return(
     <View>     
    
<Text style={{color:'#ff5722',fontSize:18,fontWeight:'bold',marginLeft:55}} > USERNAME</Text>
<View style={{alignItems:'center'}}>
    <TextInput 
      style={styles.loginBox}
     keyboardType='email-address'
      onChangeText={(text)=>{
          this.setState({
              emailId:text
          })
      }}/>
    </View>

    <Text style={{color:'#ff5722',fontSize:18,fontWeight:'bold',marginLeft:55}} > PASSWORD </Text>
<View style={{alignItems:'center'}}>
    <TextInput
     style={styles.loginBox}
     secureTextEntry={true}
     placeholder="password"
     placeholderTextColor="#ffff"
     onChangeText={(text)=>{
         this.setState({
             password:text
         })
     }}
    
    />
     </View>
    
    <View style={{alignItems:'center'}}>
        <TouchableOpacity
        style={[styles.button,{marginBottom:10}]}
        onPress={()=>{this.userLogin(this.state.username,this.state.password)}}>

       <Text style={{color:'#ff5722',fontSize:18,fontWeight:'bold'}}>LOGIN</Text>
       </TouchableOpacity>
       <TouchableOpacity
          style={styles.button}
          onPress={()=>{this.userSignUp(this.state.username,this.state.password)}}>
<Text  style={{color:'#ff5722',fontSize:18,fontWeight:'bold'}}> SIGN UP </Text>
       
       </TouchableOpacity>
    </View>
    
    </View>
          
        )
    }
    }
    
    const styles=StyleSheet.create({
       
        loginBox:{
            width:400,
            height:50,
            borderBottomWidth:1.5,
            borderColor:'#ff8b65',
            fontSize:20,
            margin:10,
            paddingLeft:10,
    
    
        },
        button:{
            width:300,
            height:50,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:25,
            backgroundColor:'#ff99800',
            shadowColor:'#000',
            shadowOffset:{
                width:0,
                height:8
            },
            shadowOpacity:0.30,
            shadowRadius:10.32,
           elevation:16,
    
    
    
        }
        
    })
    
    
    