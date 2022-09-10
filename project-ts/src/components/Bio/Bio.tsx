import styles from './Bio.module.css'; 
import userList from '../userList.json';

type BioProps = {
    name: string,
  location?: string,
  city: string,
    km: string,
  diet: string,
    bio:string,
    url?:string
} 
const Profile = (props: BioProps) => {
  return (
    <div>
      <h2 className={styles.name}>{props.name}</h2>
      <p className={styles.city}>{props.city}</p>
      <p className={styles.km}>{props.km}</p>
      <p className={styles.diet}>{props.diet}</p>
      <p className={styles.bio}>{props.bio}</p>
    </div>
  );
};

const Bio = () => {
  return ( 
    <div className={styles.userBio}>
      <div className={styles.userImage}>
        <img className={styles.pf} src={userList[0].url} alt="" />
      </div>
      <br />
      <br />
      <br />
      <div className={styles.userInfo}>
        <Profile name={userList[0].name} city={userList[0].location.city} km={`${userList[0].location.km} km`} diet={userList[0].diet} bio={userList[0].bio} />
      </div>
   </div>
   );
}
 
export default Bio;