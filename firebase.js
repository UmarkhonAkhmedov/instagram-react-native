import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCp50xvdnjcew2tX0ehvR1UVyzcsfRYjFc",
  authDomain: "instagram-38f03.firebaseapp.com",
  projectId: "instagram-38f03",
  storageBucket: "instagram-38f03.appspot.com",
  messagingSenderId: "894017962554",
  appId: "1:894017962554:web:8335c154fd5ad373c1eb03"
};


!firebaseConfig.apps.length ? firebaseConfig.initializeApp(firebaseConfig) : firebaseConfig.app()

export default firebase