import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonCardContent, IonButton, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';

const Spam: React.FC = () => (
	<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton />
				</IonButtons>
				<IonTitle>Spam</IonTitle>
			</IonToolbar>
		</IonHeader>
		
		<IonContent>
			<h1>Spam</h1>
		</IonContent>
	</IonPage>
);

export default Spam;
