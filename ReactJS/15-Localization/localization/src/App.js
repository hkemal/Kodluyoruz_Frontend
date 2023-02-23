import "./App.css";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useEffect, useState } from "react";

function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);
  const messages = {
    "tr-TR": {
      title: "Merhaba Dünya",
      description: "3 yeni mesajınız var",
    },
    "en-US": {
      title: "Hello World",
      description: "You have 3 new messages",
    },
  };

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />
        <p>
          <FormattedMessage id="description" />
        </p>
        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <br />
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
