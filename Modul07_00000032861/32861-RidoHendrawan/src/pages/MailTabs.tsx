import {
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTabs,
} from "@ionic/react";
import { mailOutline, videocamOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";

import Mail from "./Mail";
import Meet from "./Meet";
import Spam from "./Spam";

const MeetTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet id="main">
        <Redirect exact path="/tabs" to="/tabs/mail" />
        <Route exact path="/tabs/mail" component={Mail} />
        <Route exact path="/tabs/meet" component={Meet} />
        <Route exact path="/tabs/spam" component={Spam} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="mail" href="/tabs/mail">
          <IonIcon icon={mailOutline} />
          <IonLabel>Mail</IonLabel>
        </IonTabButton>
        <IonTabButton tab="meet" href="/tabs/meet">
          <IonIcon icon={videocamOutline} />
          <IonLabel>Meet</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MeetTabs;
