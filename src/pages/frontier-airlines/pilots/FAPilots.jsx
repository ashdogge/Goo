import React from "react";
import { Link } from "react-router-dom";

import Palindrome from "../../../components/Palindrome";
export const FAPilots = () => {
    return (
        <div className="container">
        <h1>Frontier Airlines - Pilots</h1>
        <Palindrome />
        <Link to="/">Home</Link>
      </div>
    )
}