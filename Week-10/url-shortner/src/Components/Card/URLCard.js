import React, { useState, useRef } from "react";

import Card from "./Card";
import { RundedButton } from "../Button/RundedButton";
import { createShortUrl } from "../Api/api";
import { isValidUrl } from "../../Util";

function URLCard() {
  const ref = useRef();
  const [showUrlValidErro, setShowUrValidError] = useState(false);
  const shortUrl = () => {
    const url = ref.current.value;
    if (isValidUrl(url)) {
      createShortUrl()
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setShowUrValidError(false));
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
          />
          {showUrlValidErro && <span className="error">In valid url</span>}
        </div>
        <RundedButton onClick={shortUrl}>Shorten url</RundedButton>
      </div>
    </Card>
  );
}

export default URLCard;
