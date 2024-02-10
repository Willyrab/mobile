import { IonContent,  IonPage } from '@ionic/react';

import './assets/css/Notification.css'
import car from './assets/img_voiture/Img-.jpg';
import cars from './assets/img_voiture/a.png';
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

const Notification: React.FC = () => {
  
  return (
    <IonPage>
      <IonContent >
      <Menu></Menu> 
        <ContainModele></ContainModele>
        {/* <Footer/> */}
      </IonContent>
    </IonPage>
  );

};

const ContainModele: React.FC = () => {
  return (
  
    <div className="historique-container">
    <div className="historique-item">
        <div className="historique-item-header">
            <div className="historique-item-user">John Doe</div>
            <div className="historique-item-date">10 février 2024</div>
        </div>
        <div className="historique-item-content">
            <img src={car} alt="Description de l'image" />
          
            <div className="historique-item-details">Voiture robuste avec 6 vitesses boite manuel</div>
        </div>
    </div>
    <div className="historique-item">
        <div className="historique-item-header">
            <div className="historique-item-user">Smith Alice</div>
            <div className="historique-item-date">10 février 2024</div>
        </div>
        <div className="historique-item-content">
            <img src={cars} alt="Description de l'image" />
          
            <div className="historique-item-details">Voiture Tout terrain, faible kilometrage</div>
        </div>
    </div>


</div>

  );
};

export default Notification;