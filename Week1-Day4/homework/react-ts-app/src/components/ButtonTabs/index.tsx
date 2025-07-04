import React, { useState } from "react";
import styles from "./ButtonTabs.module.css";

const tabData1 = [
  {
    label: "HISTORY",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
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

const tabData2 = [
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

function Tabs1({ tabs }: { tabs: typeof tabData1 }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabs}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`${styles.tabBtn} ${
              active === idx ? styles.active : ""
            }`}
            onClick={() => setActive(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[active].content}</div>
    </div>
  );
}

function Tabs2({ tabs }: { tabs: typeof tabData1 }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabs}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`${styles.tabBtn2} ${
              active === idx ? styles.active2 : ""
            }`}
            onClick={() => setActive(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[active].content}</div>
    </div>
  );
}

export default function ButtonTabs() {
  return (
    <div>
      <h2>Button Tabs</h2>
      <Tabs1 tabs={tabData1} />
      <Tabs2 tabs={tabData2} />
    </div>
  );
}
