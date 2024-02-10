import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabButton, IonLabel, IonTabBar, IonCol, IonIcon, IonGrid, IonRow } from '@ionic/react';
import Footer from './Footer';
import './assets/css/voitureMarque.css';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import menuService from './ServiceMenu';
import axios from 'axios';


const VoitureMarque: React.FC = () => {
  useEffect(() => {
    menuService.toggleMenu(false);
  }, []);

  const [marques, setMarques] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [datas, setDatas] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const responseMarques = await axios.get('https://webservice-production-66d9.up.railway.app/marques');
      setMarques(responseMarques.data);
      console.log(responseMarques)

      const responseCategories = await axios.get('https://webservice-production-66d9.up.railway.app/categories');
      setCategories(responseCategories.data);

      const responseModels = await axios.get('https://webservice-production-66d9.up.railway.app/models');
      setModels(responseModels.data);
    }

    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    id_user:'',
    marque: '',
    categorie: '',
    model: '',
    detail: '',
    defaut: '',
    prix: '',
    upload:''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const storedToken = localStorage.getItem('token') ;
      console.log(storedToken);
      const res = await axios.get('https://webservice-production-66d9.up.railway.app/api/getInfoUser', {
        headers: {
            Authorization: `Bearer ${storedToken}`
        }
      });

      // Récupérer le fichier d'image à uploader
      const fileInput = document.getElementById('upload') as HTMLInputElement;
      const file = fileInput.files[0];
      
      // Créer un FormData pour envoyer le fichier
      const formData = new FormData();
      formData.append('file', file);

      // Faire la requête HTTP POST vers l'URL correspondante
      const resp = await axios.post('https://webservice-production-66d9.up.railway.app/app/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setDatas(res.data);
      console.log(res.data.id_user);
      const response = await axios.post('https://webservice-production-66d9.up.railway.app/publier', formData);
      console.log(response.data);
      alert('Annonce publiée avec succès !');
      setFormData({
        id_user: res.data.id_user,
        marque: '',
        categorie: '',
        model: '',
        detail: '',
        defaut: '',
        prix: '',
        upload:''
      });
    } catch (error) {
      console.error('Erreur lors de la publication de l\'annonce :', error);
      alert('Erreur lors de la publication de l\'annonce. Veuillez réessayer.');
    }
  };
  return (
    <IonPage>
      <IonContent>
        <Menu /> 

      <div className="voitureMarque-container">
          <h1>Inserer une annonce</h1> 
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="marque">Marque:</label>
                            <select id="marque" name="marque" value={formData.marque} onChange={handleChange}>
                            <option value="">Sélectionnez une marque</option>
                                {marques.map(marque => (
                                  <option key={marque.id} value={marque.id}>{marque.marqueName}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="categorie">Catégorie:</label>
                            <select id="categorie" name="categorie" value={formData.categorie} onChange={handleChange}>
                            <option value="">Sélectionnez une catégorie</option>
                                {categories.map(categorie => (
                                  <option key={categorie.id} value={categorie.id}>{categorie.categorieName}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="model">Catégorie:</label>
                            <select id="model" name="model" value={formData.model} onChange={handleChange}>
                            <option value="">Sélectionnez un modèle</option>
                              {models.map(model => (
                                <option key={model.id} value={model.id}>{model.modelName}</option>
                              ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="detail">Détail:</label>
                            <textarea id="detail" name="detail" value={formData.detail} onChange={handleChange}>   </textarea>
                        </div>
                        <div>
                            <label htmlFor="defaut">Défaut:</label>
                            <textarea id="defaut" name="defaut" value={formData.defaut} onChange={handleChange}>   </textarea>
                        </div>
                        <div>
                            <label htmlFor="prix">Prix:</label>
                            <input type="number" id="prix" name="prix" value={formData.prix} onChange={handleChange} /> 
                        </div>
                        <div>
                            <label htmlFor="upload">Télécharger fichier image:</label>
                            <input type="file" id="upload" name="upload" value={formData.upload} onChange={handleChange} /> 
                        </div>
                        <button type="submit" className='annonceBtn'>Soumettre</button>
                    </form>
                </div>    
        </IonContent>
    </IonPage>
    
  );
};

export default VoitureMarque;