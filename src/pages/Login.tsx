import React, { useState } from 'react';
import { IonContent,IonPage } from '@ionic/react';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/Login.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    mdp: ''
  });
  const [error, setError] = useState('');
  const history = useHistory(); // Initialiser useHistory

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login',formData);
      console.log(response.data);
      if (response.data !== null) {
        console.log("connecter lery");
        const newToken = response.data;
        localStorage.setItem('token', newToken);
        // Rediriger l'utilisateur vers une autre page après la connexion réussie
        history.push('/welcome');
      }
      setFormData({ email: '', mdp: '' });
    } catch (error) {
      console.error('Error sending data:', error);
      setError('Une erreur s\'est produite lors de la connexion');
    }
  };
    return (
      <div className="annoncelogin-container ">
      <h1>Connection</h1>
      <form onSubmit={handleSubmit} className="norme">
          <div className="column">
              <div>
                  <label htmlFor="email">Email:</label>
                  <input type="text" name="email" id="email" value={formData.email}  onChange={handleChange} />
              </div>
              <div>
                  <label htmlFor="motDePasse">Mot de passe:</label>
                  <input type="password" name="mdp" id="motDePasse" value={formData.mdp} onChange={handleChange} />
              </div>
          </div>
          <div className="buttons-container">
              <button type="submit" className='btnLogin'>Se Connecter</button>
              <a href="/inscription" type="button">S'inscrire</a>
          </div>
      </form>
      {error && <p className="error-message">{error}</p>}
  </div>
  );
};
export default Login;