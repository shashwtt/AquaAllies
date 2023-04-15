import styles from "./Header.module.css";
import Pass from "@/components/pass/Pass";
import { showPlayer } from "../player/Player";


export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <Pass href="/">
          <h1 className={styles.headerTitle} cursor-class="subtle">
            AquaAlly.
          </h1>
        </Pass>
        <div className={styles.options}>
          <Pass href="/">
            <span cursor-class="overlay">home</span>
          </Pass>
          <Pass href="/goals">
            <span cursor-class="overlay">goals</span>
          </Pass>
          <Pass href="/contribute">
            <span cursor-class="overlay">contribute</span>
          </Pass>
        </div>
        <div className={styles.action}>
          <span
            className={styles.actionButton}
            cursor-class="overlay"
            onClick={showPlayer}
          >
            Showreel
            <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
}
