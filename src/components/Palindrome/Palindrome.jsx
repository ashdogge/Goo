import React, { useState } from "react";
export const Palindrome = () => {
  /**
   * Hooks
   */

  const [string, setString] = useState("");
  const [reversedString, setReversedString] = useState("");
  const [empty, setEmpty] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  //Palindrome hooks
  const [checkPalindrome, setCheckPalindrome] = useState(false);
  const [renderPalindrome, setRenderPalindrome] = useState(false);
  const [palindrome, setPalindrome] = useState(false);
  /**
   * JavaScript Code
   */

  const displayReverseString = () => {
    //checks if string is empty, updates errorMsg state
    if (string === "") {
      setEmpty(true);
      setErrorMsg("An original string is required.");
      setReversedString("");
      setRenderPalindrome(false);
      return;
    }
    // iterates over characters in 'string' in reverse, concatenates into 'reversed'
    else {
      setErrorMsg("");
      setEmpty(false);
      let reversed = "";
      for (let l = string.length - 1; l >= 0; l--) {
        reversed += string[l];
      }
      setReversedString(reversed);
      /*If checkPalindrome = true, removes spaces from original string and reversed string, and compares them.
      If cleanString = cleanReverse, you have a palindrome :)
      */
      if (checkPalindrome === true) {
        const cleanString = string.toLowerCase().replace(/ /g, "");
        const cleanReverse = reversed.toLowerCase().replace(/ /g, "");

        cleanString === cleanReverse
          ? setPalindrome(true)
          : setPalindrome(false);
        setRenderPalindrome(true);
        return;
      }
    }
  };

  // Handles clearing of input and output fields, resetting page
  const clearString = () => {
    setString("");
    setReversedString("");
    setEmpty(false);
    setRenderPalindrome(false);
    setCheckPalindrome(false);
  };

  /**
   * HTML Code (JSX)
   */

  return (
    <>
      <h1 className="">Reverse String</h1>
      <div className="input-group">
        <span className="input-group-text fw-semibold">Original String</span>
        <input
          type="text"
          className={`form-control ${empty ? "is-invalid" : ""}`}
          onChange={(e) => setString(e.target.value)}
          value={string}
          id="originalString"
        />
      </div>
      <div className={`invalid-feedback ${empty ? "d-block" : ""}`}>
        {errorMsg}
      </div>
      <div className="input-group mt-1">
        <span className="input-group-text fw-semibold">Reversed String</span>
        <input
          readOnly
          type="text"
          className="form-control"
          value={reversedString}
        />
      </div>
      <div>
        <input
          className="form-check-input mt-1 mb-2"
          type="checkbox"
          checked={checkPalindrome}
          onChange={(e) => setCheckPalindrome(e.target.checked)}
        />
        <span className="ms-2 fw-semibold">
          Is the Original String a palindrome?{" "}
        </span>

        {renderPalindrome &&
          (palindrome ? (
            <div className="alert alert-primary mb-1">
              Yes, the Original String of{" "}
              <span className="fw-bold">{reversedString}</span> is a palindrome.
            </div>
          ) : (
            <div className="alert alert-danger mb-1">
              No, the Original String of{" "}
              <span className="fw-bold">{reversedString}</span> is not a
              palindrome.
            </div>
          ))}
      </div>

      <div>
        <button
          className="btn btn-primary me-1 mt-2 ps-3"
          onClick={displayReverseString}
        >
          Display
        </button>
        <button className="btn btn-danger mt-2" onClick={clearString}>
          Clear
        </button>
      </div>
    </>
  );
};
