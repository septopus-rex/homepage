import type {ReactNode} from 'react';
import styles from './styles.module.css';

export default function SeptopusStatus(): ReactNode {
  return (
    <div className={styles.status}>
      Septopus will start from 6/19 2025. On launch period, no King yet.<span></span>
    </div>
  )
}
