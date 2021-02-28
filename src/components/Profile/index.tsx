import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from '../../styles/components/Profile.module.css';

function Profile() {
  const {level} = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://support.grasshopper.com/assets/images/care/topnav/default-user-avatar.jpg" alt="Alex mengue" />
      <div>
        <strong>Usuário</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;