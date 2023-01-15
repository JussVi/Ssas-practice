import React from "react";
import PromoBlock from "../../kit/components/promo-block";
import AboutUsCard from "../../kit/components/about-us-card";

import styles from './style.module.scss'

const HomePage = () => {
  return (
    <div className={styles['promo-block']}>
      <PromoBlock />
      <div className={styles['main-info']}>
        <AboutUsCard title="About us">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt maxime dignissimos minima rerum ipsum molestiae eum, autem similique quidem laborum quod veritatis eveniet est a voluptatibus quo, ab explicabo, excepturi quis minus voluptatem delectus ratione veniam. Amet consequatur magnam a.
        </AboutUsCard>
        <AboutUsCard title="About us">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorem, voluptate iste quibusdam provident error quae perspiciatis pariatur animi obcaecati, nostrum nobis. Iusto rerum fuga aspernatur eius! Atque, velit maiores unde deleniti ex beatae qui.
        </AboutUsCard>
        <AboutUsCard title="About us">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit quas illo repellat magnam quidem animi perferendis a. Quibusdam ea nihil dolores sit ad molestiae, a repellendus, libero nulla illum alias autem ullam cupiditate minus. Ipsam ullam natus veritatis tenetur illum, harum iusto?
        </AboutUsCard>
      </div>
    </div>
  )
}

export default HomePage