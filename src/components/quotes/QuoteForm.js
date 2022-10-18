import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import { Fragment } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finshedEnteringHandler = () => {
    setIsEntering(false);
  };
  const enteringFormHandler = () => {
    setIsEntering(true);
    console.log("mns");
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) => "are you sure you wanna leave?"}
      />
      <Card>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              ref={authorInputRef}
              onChange={enteringFormHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              rows="5"
              ref={textInputRef}
              onChange={enteringFormHandler}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finshedEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
