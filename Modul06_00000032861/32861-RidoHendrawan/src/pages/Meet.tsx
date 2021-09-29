import { IonAvatar, IonButtons, IonContent, IonHeader, IonIcon,IonItemOptions, IonItemSliding, IonLabel, IonList,IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonItemOption } from '@ionic/react';
import { banSharp, createOutline, trash } from 'ionicons/icons';
import { useRef } from 'react';
  
  export const FRIENDS_DATA = [ 
    { id: 'f1', name: 'Lalisa Manoban', avatar: 'https://media.tabloidbintang.com/files/thumb/lisa-blackpink_dok-ig21.JPG/745'},
    { id: 'f2', name: 'Roseanne Park', avatar: 'https://awsimages.detik.net.id/community/media/visual/2021/06/06/rose-blackpink-1_43.jpeg?w=700&q=90' },
    { id: 'f3', name: 'Kim Jennie', avatar: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2020/11/12/1523520390.jpg'},
    { id: 'f3', name: 'Kim Jisoo', avatar: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/08/18/3439435064.jpg'}
  ];
  
  const Meet = () => {
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

    const callFriendHandler = () => {
      console.log('Calling...');
    };
  
    const blockFriendHandler = () => {
      slidingOptionsRef.current?.closeOpened();
      console.log('Blocking...');
    };
  
    const deleteFriendHandler = () => {
      slidingOptionsRef.current?.closeOpened();
      console.log('Deleting...');
    };
  
    const editFriendHandler = () => {
      slidingOptionsRef.current?.closeOpened();
      console.log('Editing...');
    };
  
    return (
      <IonPage>

        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton color="primary" />
            </IonButtons>
            <IonTitle>Meet</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className="ion-padding">
          <IonList>
            {FRIENDS_DATA .map((friend) => (
              <IonItemSliding key={friend.id} ref={slidingOptionsRef}>
                <IonItemOptions side="start">
                  <IonItemOption color="danger" onClick={blockFriendHandler}>
                    <IonIcon icon={banSharp} slot="icon-only" />
                  </IonItemOption>
  
                  <IonItemOption color="warning" onClick={deleteFriendHandler}>
                    <IonIcon icon={trash} slot="icon-only" />
                  </IonItemOption>
                </IonItemOptions>
  
                <IonItemOptions side="end">
                  <IonItemOption color="warning" onClick={editFriendHandler}>
                    <IonIcon icon={createOutline} slot="icon-only" />
                  </IonItemOption>
                </IonItemOptions>
  
                <IonItem key={friend.id} lines="full" onClick={callFriendHandler} button>
                  <IonAvatar slot="start"><img src={friend.avatar}/></IonAvatar>
                  <IonLabel>{friend.name}</IonLabel>
                </IonItem>
              </IonItemSliding>
            ))}
          </IonList>
        </IonContent>

      </IonPage>
    );
  };
  
  export default Meet;