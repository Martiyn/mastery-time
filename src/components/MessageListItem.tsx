import {
  IonItem,
  IonLabel,
  IonNote,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.css';

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonItemSliding>
      <IonItem routerLink={`/message/${message.id}`} detail={false}>
        <div slot="start" className="dot dot-unread"></div>
        <IonLabel className="ion-text-wrap">
          <h2>
            {message.fromName}
            <span className="date">
              <IonNote>{message.date}</IonNote>
            </span>
          </h2>
          <h3>{message.subject}</h3>
          <p>
          
        </p>
        </IonLabel>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption color="danger" onClick={() => console.log('deleted todo item')}>Delete</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default MessageListItem;
