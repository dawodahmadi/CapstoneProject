import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDoc, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const firebaseConfig = {
  apiKey: 'AIzaSyDzB5zZnBJgYz2COW1rGT_TsBPVuYBxehs',
  authDomain: 'capstoneproject-827ef.firebaseapp.com',
  databaseURL: 'https://capstoneproject-827ef-default-rtdb.firebaseio.com',
  projectId: 'capstoneproject-827ef',
  storageBucket: 'capstoneproject-827ef.appspot.com',
  messagingSenderId: '328238107734',
  appId: '1:328238107734:web:fc5673ab1deb01d604bff7',
  measurementId: 'G-3PNJ9MH38L',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const ProfileScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async (docId, uid) => {
      try {
        const docRef = doc(db, 'users', docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUser(docSnap.data());
        } else {
          console.log('Document does not exist.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Use a hardcoded docId and UID for now
    const docId = '2LuBni8Z5Dyvj4Sixcck';
    const uid = '2iCI1rebldPCpk9DCgIDOwmdVUg2';

    // Fetch user data using the hardcoded docId and uid
    fetchUserData(docId, uid);
  }, []);

  if (!user) {
    return <Text>Loading...</Text>; // or any loading indicator you prefer
  }

  return (
    <View style={styles.container}>
      <Card elevation={5} style={styles.card}>
        <Card.Content>
          <Avatar.Image size={100} source={{ uri: user.avatar }} style={styles.avatar} />
          <Title style={styles.name}>{user.firstName} {user.lastName}</Title>
          <Paragraph style={styles.email}>{user.email}</Paragraph>
          <Paragraph style={styles.mobileNumber}>{user.mobileNumber}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            icon="account-edit"
            mode="contained"
            onPress={() => console.log('Edit button pressed')}
          >
            Edit Profile
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '80%',
  },
  avatar: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  mobileNumber: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
});

export default ProfileScreen;
