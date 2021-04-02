import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <input
          type="text"
          placeholder="Enter city"
          autoComplete="off"
          autoFocus="on"
          id="city-input"
        />
        <button>Go!</button>
      </form>
    </div>
  );
}
