import React from "react";
import ChildrenListItem from "../ChildrenListItem";
import imagePlus from "./image/plus.svg";

import styles from "./children-list.module.css";

const ChildrenList = ({ personData, onDeleted, onAdd }) => {
  const elements = personData.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <div key={id} className={styles.listItem}>
        <ChildrenListItem 
          {...itemProps}
          onDeleted={() => onDeleted(id)} />
      </div>
    );
  });

  return (
    <div className={styles.list}>
      <div className={styles.listHeader}>
        <div>Дети (макс. 5)</div>
      </div>
      <button 
        className={styles.listButtonAdd}
        onClick={ onAdd }
        >
        <img src={imagePlus} alt="#" />
        <span>Добавить ребенка</span>
      </button>
      <div className={styles.listItems}>{elements}</div>
      <button className={styles.listButtonSave}>Сохранить</button>
    </div>
  );
};

export default ChildrenList;
