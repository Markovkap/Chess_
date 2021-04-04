import React, { useState } from "react";
import "./styles.css";
import bc from "./images/bc.webp";
import bk from "./images/bk.webp";
import bl from "./images/bl.webp";
import bp from "./images/bp.webp";
import bq from "./images/bq.webp";
import bs from "./images/bs.webp";
import em from "./images/em.png";
import wc from "./images/wc.webp";
import wk from "./images/wk.webp";
import wl from "./images/wl.webp";
import wp from "./images/wp.webp";
import wq from "./images/wq.webp";
import ws from "./images/ws.webp";

const figures = {
  bc,
  bk,
  bl,
  bp,
  bq,
  bs,
  em,
  wc,
  wk,
  wl,
  wp,
  wq,
  ws
};

function Field(props) {
  return (
    <div className="figures">
      {props.field.map((row, index) => (
        <div key={index}>
          {row.map((figure, index) => (
            <img key={index} alt="" src={figures[figure]} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function Chess(props) {
  const [figur, setFigur] = useState({});
  const [field, setField] = useState([
    ["bl", "bc", "bs", "bq", "bk", "bs", "bc", "bl"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["em", "em", "em", "em", "em", "em", "em", "em"],
    ["em", "em", "em", "em", "em", "em", "em", "em"],
    ["em", "em", "em", "em", "em", "em", "em", "em"],
    ["em", "em", "em", "em", "em", "em", "em", "em"],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wl", "wc", "ws", "wq", "wk", "ws", "wc", "wl"]
  ]);

  return (
    <>
      <Field field={field} />
    </>
  );
}
