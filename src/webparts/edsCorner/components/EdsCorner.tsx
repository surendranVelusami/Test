import * as React from 'react';
import styles from './EdsCorner.module.scss';
import { IEdsCornerProps } from './IEdsCornerProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class EdsCorner extends React.Component<IEdsCornerProps, {}> {
  public render(): React.ReactElement<IEdsCornerProps> {
    return (
      <div className={ styles.edsCorner }>
        <div className={ styles.container }>
          <div className={ styles.row }>
          <div><img className={styles.imgStyle} src="https://wintrusttest.sharepoint.com/sites/SPModPOC/Site%20Assets/edsCorner.png"/></div>
            <div><p>Have any questions? E-mail Ed at AskEd@Wintrust.com</p></div>
            <div><audio className={styles.audio} controls controlsList="nodownload"><source src="https://wintrusttest.sharepoint.com/sites/SPModPOC/Site%20Assets/Eds Message_Feb_2021.mp4" type="audio/mp4"/></audio></div>
            <div  className={styles.btnajacent}>
              <div className={styles.ajacent}><button className={styles.btnEdsMessage}>View all Ed's Messages</button></div>
                <div className={styles.ajacent}><button className={styles.btnEdsMessage}>View all Ed's Audio</button></div>
              
            </div>
            <div className={ styles.column }>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}