import { isPlatform } from "@ionic/core";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton,
  IonAlert,
  IonToast,
  IonModal,
  IonInput,
} from "@ionic/react";
import { ban, trash, create, chevronForward, addOutline } from "ionicons/icons";
import React, { useContext, useRef, useState } from "react";
import FriendsContext, { Friend } from "../context/friend-context";

const Meet: React.FC = () => {
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const [startDeleting, setStartDeleting] = useState(false);
  const [startBlocking, setStartBlocking] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<{
    id: string;
    name: string;
    image: string;
  } | null>();
  const [toastMessage, setToastMessage] = useState("");
  const [nameFriend, setNameFriend] = useState("");
  const friendsCtx = useContext(FriendsContext);

  const callFriendHandler = () => {
    console.log("calling...");
  };

  const startBlockFriendHandler = () => {
    setStartBlocking(true);
    slidingOptionsRef.current?.closeOpened();
  };

  const blockFriendHandler = () => {
    setStartBlocking(false);
    setToastMessage("Blocked Friend!");
    console.log("blocking...");
  };

  const startDeleteFriendHandler = (friend: Friend) => {
    setStartDeleting(true);
    setSelectedFriend(friend);
  };

  const deleteFriendHandler = () => {
    if (!selectedFriend) {
      return;
    }

    setStartDeleting(false);
    setToastMessage("Deleted friend!");
    slidingOptionsRef.current?.closeOpened();
    console.log("Deleting...");
    friendsCtx.deleteFriend(selectedFriend.id);
  };

  const startEditFriendHandler = (friendId: string) => {
    const friend = friendsCtx.friends.find((f) => f.id === friendId);
    setSelectedFriend(friend);
    setIsEditing(true);
    slidingOptionsRef.current?.closeOpened();
  };

  const saveEditFriendHandler = () => {
    const enteredName = nameFriend;
    if (!enteredName || !selectedFriend) {
      return;
    }

    friendsCtx.updateFriend(selectedFriend.id, enteredName as string);
    setSelectedFriend(null);
    setIsEditing(false);
  };

  const cancelEditFriendHandler = () => {
    setIsEditing(false);
  };

  // Add friend function
  const cancelAddFriendHandler = () => {
    setIsAdding(false);
  };

  const addFriendHandler = () => {
    console.log("adding friend...");
    setIsAdding(true);
    setSelectedFriend(null);
  };

  const saveAddFriendHandler = () => {
    const enteredName = nameFriend;

    if (!enteredName) return;
    if (selectedFriend === null) {
      friendsCtx.addFriend(
        enteredName.toString(),
        `https://randomuser.me/api/portraits/thumb/men/${Math.floor(
          Math.random() * 90 + 1
        )}.jpg`
      );
    }
    setIsAdding(false);
    console.log(enteredName);
  };

  return (
    <>
      <IonAlert
        isOpen={startDeleting}
        header="Are you sure?"
        message="Do you want to delete your friend? This cannot be undone."
        buttons={[
          {
            text: "No",
            role: "cancel",
            handler: () => {
              setStartDeleting(false);
            },
          },
          {
            text: "Yes",
            handler: () => {
              deleteFriendHandler();
            },
          },
        ]}
      />

      <IonAlert
        isOpen={startBlocking}
        header="Are you sure?"
        message="Do you want to block your friend? This cannot be undone."
        buttons={[
          {
            text: "No",
            role: "cancel",
            handler: () => {
              setStartBlocking(false);
            },
          },
          { text: "Yes", handler: () => blockFriendHandler() },
        ]}
      />
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
        onDidDismiss={() => setToastMessage("")}
      />
      <IonModal isOpen={isEditing}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Edit Friend</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Friend Name</IonLabel>
                  <IonInput
                    type="text"
                    value={selectedFriend?.name}
                    placeholder="Change Name"
                    onIonInput={(e) =>
                      setNameFriend((e.target as HTMLInputElement).value)
                    }
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-text-center">
              <IonCol>
                <IonButton
                  fill="clear"
                  color="dark"
                  onClick={cancelEditFriendHandler}
                >
                  Cancel
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  color="secondary"
                  expand="block"
                  onClick={saveEditFriendHandler}
                >
                  Save
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>

      <IonModal isOpen={isAdding}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Add Friend</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Friend Name</IonLabel>
                  <IonInput
                    type="text"
                    value={selectedFriend?.name}
                    placeholder="Change Name"
                    onIonInput={(e) =>
                      setNameFriend((e.target as HTMLInputElement).value)
                    }
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-text-center">
              <IonCol>
                <IonButton
                  fill="clear"
                  color="dark"
                  onClick={cancelAddFriendHandler}
                >
                  Cancel
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  color="secondary"
                  expand="block"
                  onClick={saveAddFriendHandler}
                >
                  Save
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>

      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={addFriendHandler}>
                  <IonIcon icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
            <IonTitle>Meet</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
            {friendsCtx.friends.map((friend) => (
              <IonItemSliding key={friend.id} ref={slidingOptionsRef}>
                <IonItemOptions side="start">
                  <IonItemOption
                    color="danger"
                    onClick={startBlockFriendHandler}
                  >
                    <IonIcon icon={ban} slot="icon-only" />
                  </IonItemOption>

                  <IonItemOption
                    color="warning"
                    onClick={() => startDeleteFriendHandler(friend)}
                  >
                    <IonIcon icon={trash} slot="icon-only" />
                  </IonItemOption>
                </IonItemOptions>

                <IonItemOptions side="end">
                  <IonItemOption
                    color="warning"
                    onClick={startEditFriendHandler.bind(null, friend.id)}
                  >
                    <IonIcon icon={create} slot="icon-only" />
                  </IonItemOption>
                </IonItemOptions>

                <IonItem lines="full" button onClick={callFriendHandler}>
                  <IonAvatar slot="start">
                    <img src={friend.image} />
                  </IonAvatar>
                  <IonLabel>{friend.name}</IonLabel>
                  <IonIcon icon={chevronForward} slot="end" />
                </IonItem>
              </IonItemSliding>
            ))}
          </IonList>

          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={addFriendHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Meet;
