import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonCardContent, IonButton, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';

const Settings: React.FC = () => (
	<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton />
				</IonButtons>
				<IonTitle>Settings</IonTitle>
			</IonToolbar>
		</IonHeader>
		
		<IonContent>
			<h1>Settings</h1>
		</IonContent>
	</IonPage>
);

export default Settings;
