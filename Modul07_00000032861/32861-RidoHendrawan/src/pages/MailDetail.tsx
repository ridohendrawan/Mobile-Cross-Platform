import { IonPage, IonHeader, IonToolbar, IonContent, IonIcon, IonButton, IonTitle } from '@ionic/react';
import { arrowBack  } from "ionicons/icons";
import { useParams } from 'react-router';
import { MAIL_DATA } from './Mail';

const MailDetail: React.FC = () => {
	const mId = useParams<{mailId: string}>().mailId
	const selectedMail = MAIL_DATA.find(m => m.id === mId)

	return(
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButton slot="start" fill="clear" color="dark" href="/">
						<IonIcon icon={arrowBack} />
					</IonButton>
					<IonTitle>
						{selectedMail ? selectedMail?.subject : 'No mail found'}
					</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<h2>Mail ID: {mId}</h2>
			</IonContent>
		</IonPage>
	)
};

export default MailDetail;
