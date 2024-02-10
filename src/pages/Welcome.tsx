import React, { useState } from 'react';
import { IonContent,IonPage } from '@ionic/react';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/Welcome.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Menu from './Menu';

const Welcome: React.FC = () => {
  
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
        <div className='container'>
        <div className='welcome-message'>
            <h1>Welcome to Our Site</h1>
            <p>Find the perfect used car for you!</p>
            <a href="#" className='btn'>Browse Cars</a>
        </div>
    </div>
  );
};
export default Welcome;