import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';

// Import Komponen Ionic
import { settings, warning, list  } from 'ionicons/icons';
import { IonApp, IonContent, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, IonHeader, IonIcon, IonItem } from '@ionic/react';

// Import Pages 
import Mail from './pages/Mail';
import Spam from './pages/Spam';
import Settings from './pages/Settings';
import MailDetail from './pages/MailDetail';
import MailTabs from './pages/MailTabs';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main">

        <IonHeader>
          <IonToolbar>
            <IonTitle>Ion Mail Sidebar</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem button routerLink="/tabs/mail">
                <IonIcon slot="start" icon={list} />
                <IonLabel>All Mail</IonLabel>
              </IonItem>

              <IonItem button routerLink="/spam">
                <IonIcon slot="start" icon={warning} />
                <IonLabel>Spam</IonLabel>
              </IonItem>

              <IonItem button routerLink="/settings">
                <IonIcon slot="start" icon={settings} />
                <IonLabel>Settings</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="main">
        <Route exact path="/mail" component={Mail}/>
        <Route path="/mail/:mailId" component={MailDetail} />
        <Redirect exact from="/" to="/tabs" />
        <Route path="/tabs" component={MailTabs} />
        <Route path="/spam" component={Spam} />
        <Route path="/settings" component={Settings} />
      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;