import styles from "../styles/Home.module.css";
import { Tabs, Button } from "antd";


const { TabPane } = Tabs;

export default function Home() {
  
  let nftArray;
  let myNFT;

  async function follow(){

  }

  return (
    <div className={styles.container}>
      <img
        className={styles.banner}
        src={"https://ipfs.moralis.io:2053/ipfs/QmNgA9MNWFfRaoKzBt21VghQopnKXBgVxzyGvv5qjsV4Vw/media/2"}
        alt="cover"
      />
      <div className={styles.profile}>
        <div className={styles.profileLeft}>
          <img
            className={styles.profileImg}
            src={"https://ipfs.moralis.io:2053/ipfs/QmNgA9MNWFfRaoKzBt21VghQopnKXBgVxzyGvv5qjsV4Vw/media/1"}
            alt="profileImg"
          />
          <div className={styles.info}>
            <div className={styles.name}>Web3 Mage</div>
            <div className={styles.handle}>moralismage.lens</div>
            <div className={styles.bio}>Buidling web3 solutions with magical moralis mage abilities 🧙‍♂️</div>
            <div className={styles.follow}>
              <div>Followers</div>
              <div>472</div>
            </div>
            <div className={styles.follow}>
              <div>Following</div>
              <div>34</div>
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

