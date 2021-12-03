import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonBackButton,
  IonButtons,
  IonButton,
  IonIcon,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import React, { useContext, useRef, useState } from "react";
import "./NewMemory.css";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Directory, Filesystem } from "@capacitor/filesystem";
import { base64FromPath } from "@ionic/react-hooks/filesystem";
import MemoryContext from "../context/memoryContext";
import { useHistory } from "react-router";

export default function NewMemory() {
  const [chosenMemoryType, setChosenMemoryType] = useState<"good" | "bad">(
    "good"
  );
  const titleRef = useRef<HTMLIonInputElement>(null);

  const selectMemoryTypeHandler = (event: CustomEvent) => {
    const selectedMemoryType = event.detail.value;
    setChosenMemoryType(selectedMemoryType);
  };

  const memoriesCtx = useContext(MemoryContext);
  const history = useHistory();

  const addMemoryHandler = async () => {
    const enteredTitle = titleRef.current?.value;
    if (
      !enteredTitle ||
      enteredTitle.toString().trim().length === 0 ||
      !takenPhoto ||
      !chosenMemoryType
    ) {
      return;
    }

    const fileName = new Date().getTime() + ".jpeg";
    const base64 = await base64FromPath(takenPhoto!.preview);
    await Filesystem.writeFile({
      path: fileName,
      data: base64,
      directory: Directory.Data,
    });

    memoriesCtx.addMemory(
      fileName,
      base64,
      enteredTitle.toString(),
      chosenMemoryType
    );
    history.length > 0 ? history.goBack() : history.replace("/good-memories");

    const formData = new FormData();
    formData.append("title", enteredTitle.toString());
    formData.append("type", chosenMemoryType);
    formData.append("photo", base64);

    fetch("http://localhost/api.php", { method: "POST", body: formData })
      .then((res) => res.text())
      .then((dat) => console.log(dat))
      .catch((err) => console.error(err));
  };

  const [takenPhoto, setTakenPhoto] = useState<{
    path: string;
    preview: string;
  }>();

  const takePhotoHandler = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 80,
      width: 500,
    });
    console.log(photo);

    if (!photo || !photo.path || !photo.webPath) {
      return;
    }

    setTakenPhoto({
      path: photo.path,
      preview: photo.webPath,
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Add New Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonInput type="text" ref={titleRef}></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-center">
            <IonCol>
              <div className="preview">
                {!takenPhoto && <h3>No photo choosen.</h3>}
                {takenPhoto && <img src={takenPhoto.preview} alt="preview" />}
              </div>
              <IonButton fill="clear" onClick={takePhotoHandler}>
                <IonIcon slot="start" icon={camera} />
                <IonLabel>Take Photo</IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonCol className="ion-text-center">
              <IonButton onClick={addMemoryHandler}>Add Memory</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonSelect onIonChange={selectMemoryTypeHandler} value="good">
                <IonSelectOption value="good">Good Memory</IonSelectOption>
                <IonSelectOption value="bad">Bad Memory</IonSelectOption>
              </IonSelect>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
