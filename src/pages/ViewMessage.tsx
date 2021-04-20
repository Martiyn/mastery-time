import { useState } from 'react';
import { Message, getMessage } from '../data/messages';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';
import Timer from '../data/timer.js'


function ViewMessage() {
  const [message, setMessage] = useState<Message>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const msg = getMessage(parseInt(params.id, 10));
    setMessage(msg);
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Skills" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {message ? (
          <>
            <IonItem>
              <IonIcon icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {message.fromName}
                  <span className="date">
                    <IonNote>{message.date}</IonNote>
                  </span>
                </h2>
                <h3>
                  To: <IonNote>Me</IonNote>
                </h3>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h1>Time until mastery!</h1>

          <Timer />          
              
            </div>
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;
