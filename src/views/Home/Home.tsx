import React from "react";
import styles from "./Home.module.scss";
import Diamond from "react-diamond";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { customStyle } from "../../utils/customSyntaxStyle";
import items from "../../utils/items";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const codeString = `
  const items = [
    {
      title: "Part 1",
      onClick() {
        alert("Part 1 clicked");
      },
      image: img1,
    },
    ...
  ]
  <Diamond items={items} />
    `;

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Welcome to React Diamond</h1>
        <p className={styles.description}>
          This is a simple React app created with the Diamond CLI
        </p>
      </div>
      <div className={styles.component}>
        <div className={styles.exampleLandscape} id="container">
          <Diamond items={items} />
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.componentTitle}>Items</h2>
          <p className={styles.componentDescription}>
            The item must be setup like this:
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            className={styles.codeBlock}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Home;
