import {Text,Image,View,ScrollView,Button,Alert} from 'react-native';
export default function Produk(){
    return(
        <View
        style={{
            flex:1,
            alignItems:'center'
            }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold',
            textAlign:"center",
        }}>JewerlyV</Text>
        <Text style={{
            fontSize:10,
            fontWeight:'bold',
        }}>produk</Text>
        <ScrollView>
        <Image source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDGXL2SnvyY_63-ETLfkrsXwXwN1gPQjPMA&s.jpg")
        }}style={{width:200,height:200,margin:5}} /> 
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.189.000, tersedia 38pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7Ijow6df9Sre_DHivULHHSBTyO4hmCw82Q&s.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.200.000, tersedia 27pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image 
        source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTbf099mp_bs8JYOqWauB2mVs93wBDaFpxw&s.jpg" )
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.175.000, tersedia 18pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY84XbmoCLggRjv1VhFzUSTiuENe4l7cV74w&s.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.112.000, tersedia 24pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSl9_bhqaYFlbyZpA_azib-rjqe8s_pbtWPA&s.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.155.000, tersedia 15pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLAyycP8btq6ii7A3CubI97ZZU6Y6F1sxZw&s.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.160.000, tersedia 21pcs</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hf2KqdpcO_0d6fTcWeZAyzupqIzIuX9k9g&s.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            fontWeight:'bold',
            color : 'Black',
        }}>Rp.185.000, tersedia 32pcs</Text>
        </ScrollView>
        <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        </View>
    )
}