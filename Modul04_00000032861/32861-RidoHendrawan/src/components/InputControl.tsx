import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

const InputControl: React.FC<{
    selectedValue: 'cmkg' | 'ftlbs';
    onSelectValue: (value: 'cmkg' | 'ftlbs') => void
}> = props => {
    const inputChangeHandler = (e: CustomEvent) => {
      props. onSelectValue(e.detail.value);
  };
  return (
    <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="cmkg">
        <IonLabel>cm/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;