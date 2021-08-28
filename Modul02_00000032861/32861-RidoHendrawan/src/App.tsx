/* Penambahan Komponen Ionic React */
import { useRef, useState } from "react";
import {IonApp,IonLabel,IonRow,IonTitle,IonToolbar,IonGrid,IonHeader,IonIcon,IonInput,IonItem,IonButton,IonCard,IonCardContent,IonCol,IonContent,} from "@ionic/react";
/* Import Komponen Icons agar Icon dapat digunakan */
import { calculatorOutline, refreshOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  // ============== KALKULATOR MBI

  //Variabel Menambung Nilai Input & Perhitungan
  const [calculatedBMI, setCalculatedBMI] = useState<number>();
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  //Variabel Kategori BMI
  const [KetegoriBMI, setKetegoriBMI] = useState<string>();

  const calculateBMI = () => {
    //Variabel Penampung nilai input
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;
    //Variabel Penampung Kategori MBI
    let kriteriaBMI: string = "";

    //Perhitungan BMI
    if (!enteredHeight || !enteredWeight) return;
    const bmi =
      +enteredWeight / ((+enteredHeight / 100) * (+enteredHeight / 100));
    //Filter Pengkategorian MBI
    if(bmi < 18.5){
       kriteriaBMI = "Kurus";
    }else if(bmi >= 18.5){
        kriteriaBMI = "Normal";
    }else if(bmi > 24.9){
        kriteriaBMI = "Gemuk";
    }else if( bmi >= 30){
        kriteriaBMI = "Obesitas";;
    }
    //Console log & Output Hasil dan Kategori BMI
    console.log(bmi);
    setCalculatedBMI(bmi);
    setKetegoriBMI(kriteriaBMI);
  };

  //Fungsi Reset Input Berat & Tinggi
  const resetBMI = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };

  return (
    <IonApp>

      {/* Header Judul Aplikasi */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonGrid>

        {/* Input Kalkulator BMI */}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Tinggi Badan (Cm)</IonLabel>
                <IonInput ref={heightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Berat Badan (Kg)</IonLabel>
                <IonInput ref={weightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

        {/* Tombol Kalkulator & Reset BMI */}
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton onClick={calculateBMI} className="text-center">
                <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
                Calculate
              </IonButton>
            </IonCol>
            <IonCol onClick={resetBMI} className="ion-text-center">
              <IonButton>
                <IonIcon slot="start" icon={refreshOutline}></IonIcon>
                Reset
              </IonButton>
            </IonCol>
          </IonRow>

        {/* Hasil Output Kalkulator angka & kategori BMI */}
          {calculatedBMI && KetegoriBMI && (
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent className="ion-text-center">
                    <h4>{calculatedBMI}</h4>
                    <h2>{KetegoriBMI}</h2>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          )}

        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;