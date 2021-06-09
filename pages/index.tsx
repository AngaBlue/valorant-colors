import Head from "next/head";
import { useEffect, useState } from "react";
import Color from "../components/Color";
import colors from "../constants/colors";
import styles from "../styles/Index.module.scss";
import { toast } from "react-toastify";
import SEO from "../components/SEO";

interface Settings {
  color: keyof typeof colors;
}

export default function Index() {
  const [text, setText] = useState({
    raw: "",
    colored: "",
  });

  const [settings, setSettings] = useState<Settings>({
    color: "rainbow",
  });

  useEffect(() => {
    let colored = "";
    if (settings.color === "rainbow") {
      //Rainbow
      let counter = 0;
      const colorNames = Object.keys(colors);
      colored = text.raw
        .split("")
        .map((l) => {
          if (l !== " ") return `<${colorNames[counter++ % 5]}>${l}</>`;
          return l;
        })
        .join("");
    } else {
      //Color
      colored = `<${settings.color}>${text.raw}</>`;
    }

    setText({ ...text, colored });
  }, [settings.color, text.raw]);

  function copy() {
    navigator.clipboard.writeText(text.colored);
    toast.dark("Copied to clipboard!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  }

  return (
    <div className={styles.container}>
      <SEO />
      <main className={styles.main}>
        <h1 className={styles.title}>Valorant Colored Text</h1>
        <h2>Did you know you can write colored text in Valorant?</h2>
        <div className={styles.colors}>
          {Object.keys(colors).map((name) => (
            <Color
              props={{
                name,
                color: colors[name],
                selected: settings.color === name,
              }}
              onClick={() =>
                setSettings({ ...settings, color: name as keyof typeof colors })
              }
            />
          ))}
        </div>
        <textarea
          className={styles.input}
          placeholder="Enter your text..."
          value={text.raw}
          onChange={(e) => setText({ ...text, raw: e.target.value })}
        />
        <button onClick={copy} className={styles.button}>Copy to Clipboard</button>
      </main>
    </div>
  );
}
