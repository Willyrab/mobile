import { IonContent,  IonPage } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './assets/css/Listeannonce.css'
import car from './assets/img_voiture/Img-.jpg';

import Menu from './Menu';



export interface Annonce {

  path_img: string,
  nom: string;
  datee: Date;
  marque: string;
  modele: string;
  prix: number,
  id: number;
  
}

const ListeAnnonce: React.FC = () => {
  const [annonces, setAnnonces] = useState<any[]>([]);

  useEffect(() => {
    // Effectuer une requête HTTP GET pour récupérer les annonces
    async function fetchAnnonces() {
      try {
        const response = await axios.get('https://webservice-production-66d9.up.railway.app/annonceValider');
        setAnnonces(response.data);
         // Mettre à jour l'état avec les données des annonces
      } catch (error) {
        console.error('Erreur lors de la récupération des annonces :', error);
      }
    }

    fetchAnnonces();
  }, []);
 
  return (
    <IonPage>
      <IonContent >
      <Menu></Menu> 
        <ContainModele annonces={annonces}/>
        {/* <Footer/> */}
      </IonContent>
    </IonPage>
  );

};

const ContainModele: React.FC<{ annonces: any[] }> = ({ annonces }) => {
  return (
    <div className="anatiny">
      {annonces.map((annonce, index) => (
        <div className="annonce" key={index}>
          <div className="annonce-item">
            <div className="image-container">
              <img src={annonce.photo} alt="Voiture" className="car-image" />
            </div>
            <div className="annonce-details">
              <h2>{annonce.titre}</h2>
              <p>Modèle : <span>{annonce.model}</span></p>
              <p>Catégorie : <span>{annonce.categorie}</span></p>
              <p>Prix : <span>{annonce.prix}</span></p>
              <p>Details : <span>{annonce.detail}</span></p>
            </div>
          </div>
        </div>
      ))}
  
        
    </div>
  );
};

export default ListeAnnonce;