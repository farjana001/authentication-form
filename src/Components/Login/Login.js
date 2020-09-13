import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

library.add(faGoogle, faFacebookF, faGithub, faTwitter); 

const formStyle = {
    width: '70%',
    alignItems: 'center',
    margin: 'auto',
    paddingTop: '80px'
}
const googleBtnStyle = {
    background: 'none',
    border: 'none',
    color: '#5F6368',
    fontWeight: '700'
}

const googleIconStyle = {
    color: '#EA4335',
    marginRight: '5px',
    fontSize: '20px'
}

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }

    return (
        <Form style={formStyle}>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
                <Button style={googleBtnStyle} onClick={handleGoogleSignIn}><FontAwesomeIcon style={googleIconStyle} icon={['fab', 'google']} />Google sign in</Button>
                <Button style={googleBtnStyle}><FontAwesomeIcon style={googleIconStyle} icon={['fab', 'facebook-f']} />Facebook sign in</Button>
                <Button style={googleBtnStyle}><FontAwesomeIcon style={googleIconStyle} icon={['fab', 'github']} />Github sign in</Button>
                <Button style={googleBtnStyle}><FontAwesomeIcon style={googleIconStyle} icon={['fab', 'twitter']} />twitter sign in</Button>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            <Button variant="primary" type="submit">Submit </Button>
        </Form>
    );
};

export default Login;