import React, {useState} from "react";
import styles from "./HelloNameSelection.module.css"

export const HelloNameSelection = () => {
   /**
    * Hooks
    */
        const [name, setName] = useState("");
        const [numOfTimes, setNumOfTimes] = useState(0);
        const [helloNameMessage, setHelloNameMessage] = useState ("");
        const [isEven, setIsEven] = useState(true);

    /**
     * JavaScript Code
     */
        const displayHelloMessage = () => {
            setIsEven(numOfTimes %2 === 0)
            setHelloNameMessage(`You will display "Hello ${name}" a total of ${numOfTimes} times.`
            );
        }

        const ClearName = () => {
            setName ("");
            setNumOfTimes ("");
            setHelloNameMessage("");
        }
    /**
     * HTML Code (JSX)
     */

    return (
        <>
            <div className="mb-3">
                <label htmlFor="HelloNameInput"
                    className="form-label">
                        Name:
                </label>  
                <input type="text" 
                className="form-control" 
                id="helloNameInput"
                placeholder="Enter a Name"
                value={name}
                onChange={ e=> setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="ageInput" 
                className="form-label">
                    Number of Times:
                </label>
                <input type="number" 
                className="form-control"
                id="numOfTimesInput"
                placeholder="Enter Your Age"
                value={numOfTimes}
                onChange={e => setNumOfTimes(e.target.value)}
                />
            </div>
            <h2 className={isEven ? styles.evenColor : styles.oddColor}>{helloNameMessage}</h2>
            <div>
                <button className="btn btn-primary" onClick={displayHelloMessage}>Display Hello!</button>
                {" "}
                <button className="btn btn-danger" onClick={ClearName}>Clear</button>
            </div>
        </>
    )
}