import ReactMarkdown from "react-markdown";
import styles from "../Styles/Pages.module.scss";

const MarkdownComponent = ({ text }) => {
  const paragraphs = String(text).split(`\n`);

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <div className={styles.description}>
          <ReactMarkdown key={index} className={styles.paragraphGap}>
              {paragraph}
          </ReactMarkdown>
        </div>
      ))}
    </>
  );
};

export default MarkdownComponent;
