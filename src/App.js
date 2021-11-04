import { useState } from "react";
import Feedback from "./components/FeedbackOptions";
import Statistic from "./components/Statistics";
import Notification from "./components/Notification";
import Section from "./components/Section";
import Container from "./components/Container";

export default function App() {

  const initialState = {
    good: 0,
    bad: 0,
    neutral : 0,
  }
  const [feedback, setFeedback] = useState(initialState);
  const { good, neutral, bad } = feedback;

  const onLeaveFeedback = (name) => {
    setFeedback({
      ...feedback, [name]: feedback[name]+1,
    });
  };

  const onTotalFeedbackCount = good + neutral + bad;
  
  const onPositivePercentageCount =
      good > 0 ? Math.round((good / onTotalFeedbackCount) * 100) : 0;

  const option = Object.keys(feedback);
    return (
      <Section>
        <Container title="Please Leave FeedBack">
          <Feedback
            options={option}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Container>
        <Container title={onTotalFeedbackCount ? "Statistics:" : ""}>
          {onTotalFeedbackCount === 0 ? (
            <Notification />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              onTotalFeedbackCount={onTotalFeedbackCount}
              onPositivePercentageCount={onPositivePercentageCount}
            />
          )}
        </Container>
      </Section>
    );

}

