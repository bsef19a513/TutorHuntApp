import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
import { Button } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyC4LIPoIKwxvqnZpTbDD3wQJ2LwKx0FtOY",
  authDomain: "tutorhuntapp.firebaseapp.com",
  databaseURL: "https://tutorhuntapp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tutorhuntapp",
  storageBucket: "tutorhuntapp.appspot.com",
  messagingSenderId: "198687905624",
  appId: "1:198687905624:web:d0932d165476b0b3bc772d",
  measurementId: "G-BKCB7CN1YQ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function storeData(data) {
  const newDataRef = push(ref(db));

  set(newDataRef, data)
    .then(() => {
      console.log('Data stored successfully');
    })
    .catch(error => {
      console.log('Error storing data:', error);
    });
}

const MyComponent = () => {
  const handleStoreData = () => {
    const dataToStore = {
      name: 'John Doe',
      age: 25,
      email: 'johndoe@example.com'
    };

    storeData(dataToStore);
  };

  return (
    <Button title="Store Data" onPress={handleStoreData} />
  );
};

export default MyComponent;
