import { IonContent, IonHeader, IonPage, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';

import Footer from './Footer';
import Menu from './Menu';

const Accueil: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
    
      <Menu/>
     
      </IonContent>
    </IonPage>
  );
};

export default Accueil;