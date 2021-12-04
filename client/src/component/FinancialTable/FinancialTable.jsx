import React , { useState , useEffect } from "react";
import styles from "./FinancialTable.module.scss";


function FinancialTable({ socket }) {

  const [dataFinance, setData] = useState([]);

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', function (data) {
      setData(data);
    });
  }, [socket]);

  console.log(dataFinance);

  return (
    <>
      {dataFinance.map((items , idx) =>
        
         (
            <ul className={styles.FinancialTable}>
                <li className={styles.FinancialTableItem}>
                  <div key={items.ticker}>{items.ticker}</div>
                  <div key={items.change}>{items.change}</div>
                  <div key={items.change_percent}>{items.change_percent}</div>
                  <div key={items.dividend}>{items.dividend}</div>
                  <div key={items.exchange}>{items.exchange}</div>
                  <div key={items.last_trade_time}>{items.last_trade_time}</div>
                  <div key={items.price}>{items.price}</div>
                  <div key={items.yield}>{items.yield}</div>
                </li>
            </ul>
          )
      )}
    </>
  );

}

export default FinancialTable;
