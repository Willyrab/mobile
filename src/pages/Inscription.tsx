import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import './assets/bootstrap/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios';
import './assets/css/Inscription.css';
import { useHistory } from 'react-router-dom';

const Inscription: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    telephone: '',
    email: '',
    adresse: '',
    motDePasse: ''
});
const [error, setError] = useState('');
  const history = useHistory(); 
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    try {
      const response = await axios.get('https://webservice-production-66d9.up.railway.app/api/insertUser', 
        {
          params: {
            nom : formData.nom,
            prenom : formData.prenom,
            dateNaissance : formData.dateNaissance,
            telephone : formData.telephone,
            email : formData.email,
            adresse : formData.adresse,
            motDepasse : formData.motDePasse
          },
        
        }
      );
      console.log({
        nom : formData.nom,
        prenom : formData.prenom,
        dateNaissance : formData.dateNaissance,
        telephone : formData.telephone,
        email : formData.email,
        adresse : formData.adresse,
        motDepasse : formData.motDePasse
      }); 
      setFormData({
        nom: '',
        prenom: '',
        dateNaissance: '',
        telephone: '',
        email: '',
        adresse: '',
        motDePasse: ''
      });
      alert('Inscription réussie !'); 
      history.push('/welcome');
    } catch (error) {
      console.error('Error sending data:', error); 
      alert('Erreur lors de l\'inscription ! Veuillez réessayer.'); 
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


    return (
      <div className="inscription-container">
    <h1>Inscription</h1> 
    <form onSubmit={handleSubmit} className="norme">
          <div className="column">
              <div>
                  <label htmlFor="nom">Nom:</label>
                  <input type="text" id="nom" name = "nom" value={formData.nom} onChange={handleChange} />
              </div>
              <div>
                  <label htmlFor="prenom">Prenom:</label>
                  <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} />
              </div>
              <div>
                  <label htmlFor="dateNaissance">Date de Naissance:</label>
                  <input type="date" id="dateNaissance" name="dateNaissance"  value={formData.dateNaissance} onChange={handleChange} />
              </div>
              <div>
                  <label htmlFor="telephone">Telephone:</label>
                  <input type="text" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} />
              </div>
          </div>
          <div className="column">
              <div>
                  <label htmlFor="email">Email:</label>
                  <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                  <label htmlFor="adresse">Adresse:</label>
                  <input type="text" id="adresse" name="adresse" value={formData.adresse} onChange={handleChange} />
              </div>
              <div>
                  <label htmlFor="motDePasse">Mot de passe:</label>
                  <input type="password" id="motDePasse" name="motDePasse" value={formData.motDePasse} onChange={handleChange} />
              </div>
              <div>
                  <label htmlFor="confirmation">Confirmation:</label>
                  <input type="password" id="confirmation" name="confirmation"  onChange={handleChange} />
              </div>
          </div>
          <button type="submit" className='btnInscription'>Valider</button>
      </form>
  </div>
    );
  };


export default Inscription;