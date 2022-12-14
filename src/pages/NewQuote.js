import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/hooks/use-http";
import { addQuote } from "../lib/lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const quoteDataHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={quoteDataHandler} />
  );
};

export default NewQuote;
