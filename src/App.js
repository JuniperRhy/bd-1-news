import { useEffect, useState } from "react";

import { Howl, Howler } from "howler";
import useSound from "use-sound";

import Background from "./Background";
import BDStandard from "./BD1Standard";
import NewsFeed from "./NewsFeed";

import BDsound1 from "./BD-1/audio/1BD1.mp3";
import BDsound2 from "./BD-1/audio/2BD1.mp3";
import BDsound3 from "./BD-1/audio/3BD1.mp3";
import BDsound4 from "./BD-1/audio/4BD1.mp3";
import BDsound5 from "./BD-1/audio/5BD1.mp3";
import BDsound6 from "./BD-1/audio/6BD1.mp3";
import BDBeep from "./BD-1/audio/BDBeep.mp3";
import HoloActiveSound from "./BD-1/audio/Holoactive.mp3";
import HoloOff from "./BD-1/audio/Holooff.mp3";

import "./App.css";

function App() {
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
    volume: 0.05,
    loop: false,
  });

  const Beep = new Howl({
    src: BDBeep,
    volume: 0.05,
    loop: false,
  });

  const HoloOffSound = new Howl({
    src: HoloOff,
    volume: 0.05,
    loop: false,
  });

  const [play, { stop }] = useSound(HoloActiveSound, {
    volume: 0.1,
    loop: true,
  });

  useEffect(() => {
    isBDClicked ? play() : HoloOffSound.play() && stop();
  }, [isBDClicked]);

  useEffect(() => {
    isBDHover ? BDsound.play() : BDsound.stop();
  });

  window.scrollTo(0, 0);

  console.log(hoverChangeFont);

  return (
    <div
      className="OuterMost"
      style={{ fontFamily: changeFont ? "StarJedi" : "Aurebesh" }}
    >
      <Background />
      <h1
        style={{
          background: changeFont
            ? "rgba(85, 24, 24)"
            : "radial-gradient(#71e3ff, #dbf4ffb0, #b7e8ff18)",
          webkitTextStrokeColor: changeFont
            ? "transparent"
            : "rgb(219, 190, 24)",
          color: changeFont ? "rgb(238, 207, 31)" : "rgb(66, 66, 66)",
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
        m
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
  );
}

export default App;
