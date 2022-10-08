import styles from "../styles/Home.module.css";
import { Tabs, Button } from "antd";
import { Profile, urqlClient } from "./api/lensCalls";


const { TabPane } = Tabs;

export default function Home( { profile } ) {

  console.log(profile);
  
  let nftArray;
  let myNFT;

  async function follow(){

  }

  return (
    <div className={styles.container}>
      <img
        className={styles.banner}
        src={profile.coverPicture.original.url}
        alt="cover"
      />
      <div className={styles.profile}>
        <div className={styles.profileLeft}>
          <img
            className={styles.profileImg}
            src={profile.picture.original.url}
            alt="profileImg"
          />
          <div className={styles.info}>
            <div className={styles.name}>{profile.name}</div>
            <div className={styles.handle}>{profile.handle}</div>
            <div className={styles.bio}>{profile.bio}</div>
            <div className={styles.follow}>
              <div>Followers</div>
              <div>{profile.stats.totalFollowers}</div>
            </div>
            <div className={styles.follow}>
              <div>Following</div>
              <div>{profile.stats.totalFollowing}</div>
            </div>
          </div>
        </div>
        <div className={styles.profileRight}>
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="I'm Following" key="1">
            <div className={styles.followingNFTs}>
              {nftArray?.map((e) => {
                return (
                  <iframe
                    className={styles.animation}
                    src={e}
                  ></iframe>
                );
              })}
              </div>
            </TabPane>
            <TabPane tab="Follow Me" key="2">
              <div className={styles.followMe}>
                <div>
                <div className={styles.promptOne}>
                  Hey There 👋🏼
                </div>
                <div className={styles.promptTwo}>
                  Give me a follow and receive this cool NFT!
                </div>
                <Button onClick={follow} type="primary">Follow Me</Button>
                </div>
                {myNFT &&
                <iframe className={styles.myNFT} src={myNFT}></iframe>
                }
              </div>
            </TabPane>
            <TabPane tab="Social Posts" key="3" disabled={true} />
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await urqlClient.query(Profile).toPromise();

  return {
    props: { profile: response?.data.profile },
  };
}

