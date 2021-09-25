import { IonCard, IonCardContent, IonCol } from '@ionic/react';
import { Category } from './TipeKategori';
import './BmiResult.css';

type Props = {
  calculatedBMI: number;
  bmiCategory: Category;
};

const BmiStatus = (bmiCategory: Category) => {
  if (bmiCategory === 'Normal') { return 'success'; }
  if (bmiCategory === 'Obesitas') {return 'danger';}
  return 'warning';
};

const BmiResult = ({ calculatedBMI, bmiCategory }: Props) => (
  <IonCol>
    <IonCard color={BmiStatus(bmiCategory)}>
      <IonCardContent className="ion-text-center">
        <h2>{calculatedBMI}</h2>
        <h1>{bmiCategory}</h1>
      </IonCardContent>
    </IonCard>
  </IonCol>
);

export default BmiResult;