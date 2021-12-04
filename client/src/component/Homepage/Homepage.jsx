import classNames from "classnames";
import FinancialTable from "../FinancialTable/FinancialTable";
import styles from "./Homepage.module.scss";

const cx = classNames.bind(styles)


function Homepage(props) {

  return (
    <main className={styles.Homepage}>
      <section>
        <FinancialTable socket={props.socket}/>
      </section>
    </main>
  );

}

export default Homepage;
