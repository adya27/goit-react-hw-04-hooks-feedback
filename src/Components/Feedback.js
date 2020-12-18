import React, { useState } from "react";

import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Statistics/Notification";

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = (evt) => {
    setGood((pr) => pr + 1);
  };

  const handleNeutral = (evt) => {
    setNeutral((pr) => pr + 1);
  };

  const handleBad = (evt) => {
    setBad((pr) => pr + 1);
  };

  const countTotalFeedback = Number(good + neutral + bad);

  const ifInteger = ((good * 100) / countTotalFeedback) % 1 === 0;

  const countPositiveFeedbackPercentage = ifInteger
    ? Number((good * 100) / countTotalFeedback)
    : Number(((good * 100) / countTotalFeedback).toFixed(2));

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />

      {countTotalFeedback > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positiveFeedback={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Section>
  );
}

export default Feedback;
