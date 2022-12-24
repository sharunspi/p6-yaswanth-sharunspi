import React, { useState, useRef } from "react";

import Card from "./Card";
import { RundedButton } from "../Button/RundedButton";
import { createShortUrl } from "../Api/api";
import { isValidUrl } from "../../Util";

function URLCard(props) {
  const ref = useRef();
  const [showUrlValidError, setShowUrValidError] = useState(false);

  const shortUrl = () => {
    const url = ref.current.value;
    if (isValidUrl(url)) {
      props.setUrl(url);
      props.loadStarter(true);

      createShortUrl(url)
        .then((res) => {
          if (res.data.ok) {
            props.shortenUrl(res.data.result.short_link);
          }
        })
        .catch((err) => {
          alert("Error while creating url");
          console.log(err);
        })
        .finally(() => {
          props.loadStarter(false);
          setShowUrValidError(false);
        });
    } else {
      setShowUrValidError(true);
    }
  };

  return (
    <Card>
      <div className="url-card-container">
        <div className="flex column">
          <input
            type={"url"}
            placeholder="shorten a link here"
            required
            ref={ref}
            className="input-url"
            // value={textVal}
          />
          {showUrlValidError && <span className="error">In valid url</span>}
        </div>
        <RundedButton onClick={shortUrl}>Shorten url</RundedButton>
      </div>
    </Card>
  );
}

export default URLCard;
