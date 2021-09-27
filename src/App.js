import React, {
  createElement,
  useContext,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import { MDXProvider } from "@mdx-js/react";
import Darksoul from "./darksoul.md";

import ReactDOMServer from "react-dom/server";
// Plus components

import Header from "./plus-feature-components/Header/Header";
import DarkSoulHeroText from "./plus-feature-components/Fynd/darkSoulHeroText";
import ScrollingVideo from "./plus-feature-components/Fynd/scrollingVideo";
import { DarkSoulShareButtons } from "./plus-feature-components/Fynd/darksoulShareButtons";
import AuthorBox from "./plus-feature-components/AuthorBox/AuthorBox";
import DarkSoulSubheader from "./plus-feature-components/Fynd/darkSoulSubheader";
import PictureTag from "./plus-feature-components/VisualComponents/Picture/PictureTag";
import { formatFetchedData } from "./lib/dataHandleFunctions";
import Context from "../Context";
import Scrolly from "./plus-feature-components/Scrolly/Scrolly";
import { DarkSoulNewChapter } from "./plus-feature-components/Fynd/darkSoulNewChapter";
import { DarksoulSourceList } from "./plus-feature-components/Fynd/darksoulSourceList";
const useServerEffect = ({ key, effect }) => {

  const context = useContext(Context);
  const [data, setData] = useState(context[key] || null);

  useEffect(() => {
    if (data || typeof window === "undefined") return;
    //console.log("Could not find server rendered data in Client for " + key)
    (async function () {
      const data = await effect();
      setData(data);
    })();
  }, []);

  if (context.requests) {
    context.requests.push(
      effect().then((data) => {
        context[key] = data;
      })
    );
  }
  return data;
};

const DataProvider = (props) => {
  console.log(props)
  const effect = () =>
    formatFetchedData({
      type: props.type,
      value: props.kuvateksti,
      id: props.id,
      style: props.style,
    });

  const data = useServerEffect({
    key: props.id,
    effect,
  });

  if (props.children) {
    return data && props.children(data);
  }

  return data;
};

const components = {
  // Everything in components: <Object> is passed to MDX-file, where you can use them natively w/o importing them.
  wrapper: ({ children, ...props }) => {
    return (
      // Adds classname "yle__article__paragraph fynd" for every p-tag.
      // TODO: This should be solved somehow else.
      <>
        {children.map((e, i) =>
          e.props?.mdxType === "p"
            ? React.cloneElement(e, {
                className: "yle__article__paragraph fynd",
                key: i,
              })
            : e
        )}
      </>
    );
  },
  Header: (props) => {
    return (
      <Header
        articlePublishedText=""
        soundOn={props.soundOn}
        setSound={props.setSound}
        data={[
          {
            type: "otsikko",
            value: props.otsikko,
            style: {
              sisältö: "",
              artikkelitausta: props.artikkelitausta,
            },
          },
          {
            type: "ingressi",
            value: props.ingressi,
            style: { artikkelitausta: props.artikkelitausta },
          },
        ]}
      >
        {props.children}
      </Header>
    );
  },
  DarkSoulHeroText,
  ScrollingVideo,
  DarkSoulShareButtons,
  AuthorBox: (props) => (
    <div className="tekijatboksi centered">
      <AuthorBox {...props} />
    </div>
  ),
  DarkSoulSubheader,
  AloitusKappale: DarkSoulNewChapter,
  Kuva: (props) => (
    <DataProvider {...props} type="kuva">
      {(data) => (
        <PictureTag
          mobileMediaData={data.urls[1] || null}
          desktopMediaData={data.urls[0]}
          positionAbsolute={false}
          id={data.id}
          mediaText={data.value}
          mediaStyling={data.style}
          altText={data.alttext}
        />
      )}
    </DataProvider>
  ),
  LahdeLuettelo: DarksoulSourceList,
  Skrolli: (props) => {
    if (!Array.isArray(props.children)) return null;
    const datas = props.children.map((e) =>
      DataProvider({ ...e, style: props.tyylit })
    );
    const nullsInData = datas.some((el) => el === null);
    return (
      !nullsInData && <Scrolly scrollyData={datas} scrollyIndex={1}></Scrolly>
    );
  },
};

export const App = ({root}) => {
  if (typeof window !== "undefined") {
    // Client side
    const initialData = JSON.parse(decodeURI(root.dataset.ssr));
    return (
      <Context.Provider value={initialData || {}}>
        <MDXProvider components={components}>
          <Darksoul />
        </MDXProvider>
      </Context.Provider>
    );
  } else {
    // Server side
    return (
      <MDXProvider components={components}>
        <Darksoul />
      </MDXProvider>
    );
  }
};
