import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonCardContent, IonButton, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';

export const MAIL_DATA = [
	{ id: 'm1', subject: 'Magang MBKM sudah dimulai' },
	{ id: 'm2', subject: 'Bimbingan Skripsi' },
	{ id: 'm3', subject: 'Progress Laporan' }
]

const Mail: React.FC = () => (
	<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton />
				</IonButtons>
				<IonTitle>Ionic Mail</IonTitle>
			</IonToolbar>
		</IonHeader>

		<IonContent className="ion-padding">
			{ MAIL_DATA.map(mail => (
				<IonCard key={mail.id}>
					<IonCardContent className="ion-text-center">
						<h2>{mail.subject}</h2>
						<IonButton routerLink={`/mail/${mail.id}`}>
							View Email
						</IonButton>
					</IonCardContent>
				</IonCard>
			))}
		</IonContent>
	</IonPage>
);

export default Mail;
