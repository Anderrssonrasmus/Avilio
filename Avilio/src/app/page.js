import Image from "next/image";
import styles from "./page.module.scss";
import BrandSlider from "./components/brandSlider/brandSlider";
import WorkSlider from "./components/workSlider/workSlider";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.textBox}>
          <h3>Flexibility, scalability, adaptabilty</h3>
          <h1>Branding, design & scalable e-commerce solutions.</h1>
          <p>
            Suspendisse posuere, tortor a pharetra malesuada, tellus lorem aliquam ipsum,
            eu vulputate dui magna vitae felis. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas.
          </p>
        </section>

        <BrandSlider />
        <WorkSlider />
      </main>
    </div>
  );
}
