import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { home } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>RentalSpace</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/For-Rent-Sign.png" alt="" />
          <IonCardHeader>
            {/* <IonCardSubtitle>Welcome to Rental Space</IonCardSubtitle> */}
            <IonCardTitle className="title-card">Welcome to RentalSpace</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="content">
            <strong><p>
              A place for all your save rental properties
            </p></strong>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Resources</IonLabel>
          </IonListHeader>
          <IonItem href="https://zillow.com/" target="_blank">
            <IonIcon slot="start" color="medium" icon={home} />
            <IonLabel>Zillow</IonLabel>
          </IonItem>
          <IonItem href="https://trulia.com" target="_blank">
            <IonIcon slot="start" color="medium" icon={home} />
            <IonLabel>Trulia</IonLabel>
          </IonItem>
          <IonItem href="https://hotpads.com" target="_blank">
            <IonIcon slot="start" color="medium" icon={home} />
            <IonLabel>Hot&nbsp;Pads</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
