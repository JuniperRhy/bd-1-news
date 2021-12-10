import { useEffect, useState } from "react";

import { Howl } from "howler";
import useSound from "use-sound";

import Background from "./Background/Background";
import BDStandard from "./RactiveSVGs/BD1Standard";
import BDRun from "./RactiveSVGs/BDRun";
import NewsFeed from "./NewsFeed";

import MuteButton from "./RactiveSVGs/MuteButton";

import BDsound1 from "./Media/audio/1BD1.mp3";
import BDsound2 from "./Media/audio/2BD1.mp3";
import BDsound3 from "./Media/audio/3BD1.mp3";
import BDsound4 from "./Media/audio/4BD1.mp3";
import BDsound5 from "./Media/audio/5BD1.mp3";
import BDsound6 from "./Media/audio/6BD1.mp3";
import BDBeep from "./Media/audio/BDBeep.mp3";
import HoloActiveSound from "./Media/audio/Holoactive.mp3";
import HoloOff from "./Media/audio/Holooff.mp3";

import "./App.css";

function App() {
  const [isPageMuted, setIsPageMuted] = useState(true);
  const [isBDClicked, setIsBDClicked] = useState(false);
  const [isBDHover, setIsBDHover] = useState(false);
  const [changeFont, setChangeFont] = useState(false);
  const [hoverChangeFont, setHoverChangeFont] = useState(false);
  const BDsoundArr = [
    BDsound1,
    BDsound2,
    BDsound3,
    BDsound4,
    BDsound5,
    BDsound6,
  ];

  const randomBeeps = () => {
    return BDsoundArr[Math.floor(Math.random() * 6)];
  };

  const BDsound = new Howl({
    src: randomBeeps(),
    volume: isPageMuted ? "0" : "0.05",
    loop: false,
  });

  const Beep = new Howl({
    src: BDBeep,
    volume: isPageMuted ? "0" : "0.05",
    loop: false,
  });

  const HoloOffSound = new Howl({
    src: HoloOff,
    volume: isPageMuted ? "0" : "0.05",
    loop: false,
  });

  const [play, { stop }] = useSound(HoloActiveSound, {
    volume: isPageMuted ? "0" : "0.1",
    loop: true,
  });

  const Scraper = require("scraper-node");
  const scraper = new Scraper("https://www.starwars.com");

  scraper.setPollRate("30m");

  useEffect(() => {
    isBDClicked ? play() : HoloOffSound.play() && stop();
  }, [isBDClicked]);

  useEffect(() => {
    isBDHover ? BDsound.play() : BDsound.stop();
  });

  window.scrollTo(0, 0);

  const axios = require("axios");
  const cheerio = require("cheerio");

  // (async () => {
  //   const args = process.argv.slice(2);
  //   const postCode = args[0] || 2000;
  //   const url = `https://www.domain.com.au/rent/?postcode=${postCode}&excludedeposittaken=1`;
  //   try {
  //     const response = await axios.get(url);
  //     const $ = cheerio.load(response.data);
  //     const noOfProperties = $("h1>strong").text();
  //     console.log(
  //       `${noOfProperties} are open for rent in ${postCode} postcode of Australia on Domain`
  //     );
  //   } catch (e) {
  //     console.error(
  //       `Error while fetching rental properties for ${postCode} - ${e.message}`
  //     );
  //   }
  // })();

  // const articleTagline = $(".cb-content").text();
  // console.log(`tagline ${articleTagline} `);

  // const articleHeader = $(".article-header");
  // console.log(`tagline ${articleHeader} `);

  // const articleTitles = $("article").text();
  // console.log(`titles ${articleTitles} `);

  // const articleText = $("item>div").text();
  // console.log(`${articleText} `);

  (async () => {
    const url = `https://starwarsblog.starwars.com/`;
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      // console.log(response.data);

      /*
      
      function filter<cheerio.Element, cheerio.Element>(this: cheerio.Cheerio<...>, match: (index: number, value: cheerio.Element) => value is cheerio.Element): cheerio.Cheerio<...> (+1 overload)

      Now we see why (h2) => h2 is a number

      (index, h2) => boom

      (method) Array<string>.filter<S>(predicate: (value: string, index: number, array: string[]) => value is S, thisArg?: any): S[] (+1 overload)

      You can see in the standard filter the first parameter given to the callback is the value (the current element), then the index of it, then the whole array itself.



      */ // <--- won't do any normal filter stuff, will just run our custom function and print 'I do what I want...'

      const articleTitles = $("ul.news-articles>li");
      const target = articleTitles.map((_index, li) => li.children);
      console.log("Type of articleTitles: ", target);
    } catch (e) {
      console.error(`Error while fetching   - ${e.message}`);
    }
  })();

  console.log(isPageMuted);

  return (
    // <div className="AppWrapper">

    <div
      className="OuterMost"
      style={{ fontFamily: changeFont ? "StarJedi" : "Aurebesh" }}
    >
      <div className="BDRunContainer">
        <BDRun />
      </div>

      <div className="Non-IntroWapper">
        <Background />
        <MuteButton isPageMuted={isPageMuted} setIsPageMuted={setIsPageMuted} />
        <h1
          style={{
            background: changeFont
              ? "rgba(85, 24, 24)"
              : "radial-gradient(#71e3ff, #dbf4ffb0, #b7e8ff18)",
            marginTop: changeFont ? "0vh" : "1vh",
            marginBottom: changeFont ? "-11vh" : "-8vh",
            webkitTextStrokeColor: changeFont
              ? "transparent"
              : "rgb(219, 190, 24)",
            color: changeFont ? "rgb(238, 207, 31)" : "rgba(238, 207, 31, 90%)",
            zIndex: "top",
          }}
        >
          BD-1's Star Wars News Feed
        </h1>
        <div className="App">
          <button
            onMouseEnter={() => setHoverChangeFont(!hoverChangeFont)}
            onMouseLeave={() => setHoverChangeFont(!hoverChangeFont)}
            onClick={() => {
              setChangeFont(!changeFont);
              Beep.play();
            }}
            style={{
              background: changeFont
                ? "radial-gradient(#71e3ff, #dbf4ffb0, #b7e8ff18)"
                : "rgba(85, 24, 24)",

              fontFamily: changeFont ? "Aurebesh" : "StarJedi",
              fontSize: changeFont ? "" : "1.125rem",
              padding: changeFont ? "" : ".5rem",
              webkitTextStrokeColor: changeFont
                ? "transparent"
                : "rgb(219, 190, 24)",
              color: changeFont ? "rgb(66, 66, 66)" : "rgb(134, 116, 14)",
              boxShadow: hoverChangeFont
                ? "0 0 50px rgb(255, 255, 255)"
                : " 0 0 50px transparent",

              border: hoverChangeFont
                ? "double 0.1rem goldenrod"
                : "double 0.1rem rgba(218, 165, 32, 0.466)",
            }}
          >
            Change Font
          </button>

          <NewsFeed isBDClicked={isBDClicked} changeFont={changeFont} />
          {/* <div>
        <BD1Squat isBDClicked={isBDClicked} setIsBDClicked={setIsBDClicked} />
      </div> */}
          <div>
            <BDStandard
              changeFont={changeFont}
              isBDClicked={isBDClicked}
              setIsBDClicked={setIsBDClicked}
              isBDHover={isBDHover}
              setIsBDHover={setIsBDHover}
            />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
