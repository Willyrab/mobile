
import {IonContent, IonHeader, IonMenu,  IonPage, IonTitle, IonToolbar, IonList, IonItem, IonRouterLink, IonButtons, IonMenuButton, IonMenuToggle } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Header from './Header';
import menuService from './ServiceMenu';
import './assets/css/Menu.css';

function Menu() {

  

  return (
    <>
    <Header></Header>
      <IonMenu contentId="main-content" >
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonList>
          <IonItem>
            <IonMenuToggle>
              <a href="/listeannonce"> Liste des annonces</a>
               
            </IonMenuToggle>
            </IonItem>

          <IonItem>
            <IonMenuToggle>
              <a href="/voituremarque">Ajout Annonce</a>
            </IonMenuToggle>
            </IonItem>
            
            <IonItem>
            <IonMenuToggle>
              <a href="/modelevoiture"> Modification Status</a>
  
            </IonMenuToggle>
            </IonItem>

            <IonItem>
            <IonMenuToggle>
            <a href="/notification">Notification </a>
            </IonMenuToggle>
            </IonItem>

           
          </IonList>
        </IonContent>
      </IonMenu>

      
    
    </>
  );
}

export default Menu;
