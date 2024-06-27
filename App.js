import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

//Login Page

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Welcome');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://www.india.com/wp-content/uploads/2014/11/datinglikeaboy.jpg' }}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
        <Image 
          source={{ uri: 'https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/10/tinder-1-ap-hero.jpg' }}
          style={{ width: 100, height: 100 ,borderRadius: 150 / 2,
            overflow: "hidden",
            borderWidth: 1,}} 
        />
        <Text style={styles.logo}>Sign In</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

//Welcomescreen page

const WelcomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [interests, setInterests] = useState('');

  const handleContinue = () => {
    // Handle the submission of user details
    console.log({
      name,
      age,
      gender,
      location,
      interests,
    });
    navigation.navigate('Swipe');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://www.india.com/wp-content/uploads/2014/11/datinglikeaboy.jpg' }}
      resizeMode="cover"
      style={styles.background}
    >
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={{ uri: 'https://cdn2.vectorstock.com/i/1000x1000/61/41/avatar-business-woman-graphic-vector-9646141.jpg' }} // Replace with your user logo URL
        style={styles.userLogo}
      />
      <Text style={styles.welcomeText}>Welcome!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#003f5c"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="#003f5c"
        keyboardType="numeric"
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        placeholderTextColor="#003f5c"
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        placeholderTextColor="#003f5c"
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Interests"
        placeholderTextColor="#003f5c"
        onChangeText={setInterests}
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
    </ImageBackground>
  );
};

//Profile Page

const ProfileCard = ({ profile }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: profile.image }} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <Text style={styles.cardName}>{profile.name}</Text>
        <Text style={styles.cardInfo}>{profile.age}, {profile.location}</Text>
        <Text style={styles.cardInfo}>{profile.interests}</Text>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="times" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="star" size={30} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="heart" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SwipeScreen = () => {
  const profiles = [
    { name: 'John Doe', age: 25, location: 'New York', interests: 'Music, Sports', image: 'https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774' },
    { name: 'Jane Smith', age: 22, location: 'Los Angeles', interests: 'Art, Travel', image: 'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { name: 'Mike Johnson', age: 30, location: 'Chicago', interests: 'Cooking, Reading', image: 'https://www.realmenrealstyle.com/wp-content/uploads/2023/08/Attractive-Older-Men-Are-Confident.jpg' },
    { name: 'James Smith', age: 28, location: 'New York', interests: 'Music, Sports', image: 'https://imgk.timesnownews.com/story/men.gif' },
    { name: 'Dwayne Johnson', age: 25, location: 'Florida', interests: 'Music, Sports', image: 'https://www.realmenrealstyle.com/wp-content/uploads/2023/09/man_stylish_wearing_sunglasses.jpg' },
    { name: 'Jeffrey Gomes', age: 27, location: 'New Jersey', interests: 'Music, Sports', image: 'https://content.latest-hairstyles.com/wp-content/uploads/cleanest-high-taper-fade-haircuts-for-men-500x375.jpg' },
    { name: 'Bradd Peter', age: 29, location: 'Stockton', interests: 'Music, Sports', image: 'https://assets.heart.co.uk/2024/10/idris-elba-1710256319-view-0.jpg' },
    { name: 'Joe Smith', age: 31, location: 'New Mexico', interests: 'Music, Sports', image: 'https://manofmany.com/_next/image?url=https%3A%2F%2Fapi.manofmany.com%2Fwp-content%2Fuploads%2F2023%2F06%2FWays-to-Style-Long-Hair-for-Men.jpg&w=1200&q=75' },
    { name: 'Jesse Peterman', age: 33, location: 'Chicago', interests: 'Music, Sports', image: 'https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774' },
  ];

  const onSwiped = (cardIndex) => {
    console.log(`Swiped card at index: ${cardIndex}`);
  };

  const onSwipedAll = () => {
    console.log('All cards swiped');
  };

  return (
    <View style={styles.swipeContainer}>
      <Swiper
        cards={profiles}
        renderCard={(profile) => <ProfileCard profile={profile} />}
        onSwiped={onSwiped}
        onSwipedAll={onSwipedAll}
        cardIndex={0}
        backgroundColor="white"
        stackSize={3}
        animateCardOpacity
        overlayLabels={{
          left: {
            title: 'DISLIKE',
            style: {
              label: {
                backgroundColor: 'red',
                borderColor: 'red',
                color: 'white',
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: -20,
              },
            },
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: 'green',
                borderColor: 'green',
                color: 'white',
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: 20,
              },
            },
          },
        }}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Swipe" component={SwipeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#f08080',
    marginTop: 20,
    marginBottom: 30,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#f08080',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#f08080',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  userLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#f08080"
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffb6c1',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: '#f08080',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 15,
    color: 'black',
  },
  continueButton: {
    width: '80%',
    backgroundColor: '#f08080',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  continueText: {
    color: 'white',
    fontSize: 18,
  },
  swipeContainer: {
    flex: 1,
    backgroundColor: '#f08080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f08080',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#f08080',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardImage: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardDetails: {
    padding: 20,
  },
  cardName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardInfo: {
    fontSize: 18,
    color: '#555',
    marginTop: 5,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  actionButton: {
    padding: 10,
  },
});

export default App;
