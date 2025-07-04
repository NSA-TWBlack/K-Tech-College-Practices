import React, { useState } from "react";
import styles from "./ButtonAccordtions.module.css";

const accordData = [
  {
    label: "HISTORY",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
  {
    label: "APPROACH",
    content:
      "Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
  {
    label: "CULTURE",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
  },
  {
    label: "METHOD",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  },
];

function SingleAccordion({ data }: { data: typeof accordData }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className={styles.accordionCol}>
      <div className={styles.sectionTitle}>Single Accordtions</div>
      {data.map((item, idx) => (
        <div key={item.label} className={styles.accordionItem}>
          <button
            className={`${styles.accordionBtn} ${
              openIdx === idx ? styles.active : ""
            }`}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            {item.label}
          </button>
          {openIdx === idx && (
            <div className={styles.accordionContent}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

function MultiAccordion({ data }: { data: typeof accordData }) {
  const [openArr, setOpenArr] = useState<boolean[]>(
    Array(data.length).fill(false)
  );
  const toggle = (idx: number) => {
    setOpenArr((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };
  return (
    <div className={styles.accordionCol}>
      <div className={styles.sectionTitle}>Multi Accordtions</div>
      {data.map((item, idx) => (
        <div key={item.label} className={styles.accordionItem}>
          <button
            className={`${styles.accordionBtn} ${
              openArr[idx] ? styles.active : ""
            }`}
            onClick={() => toggle(idx)}
          >
            {item.label}
          </button>
          {openArr[idx] && (
            <div className={styles.accordionContent}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ButtonAccordtions() {
  return (
    <div>
      <h2>Button Tabs</h2>
      <div className={styles.accordionWrapper}>
        <SingleAccordion data={accordData} />
        <MultiAccordion data={accordData} />
      </div>
    </div>
  );
}
