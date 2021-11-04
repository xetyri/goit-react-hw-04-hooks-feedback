import PropTypes from 'prop-types';
import s from "./Statistics.module.css";

export default function Statistics ({good, neutral, bad, onTotalFeedbackCount, onPositivePercentageCount}){
    return (
        <div className={s.Statistics}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {onTotalFeedbackCount}</p>
            <p>Positive Feedback: {onPositivePercentageCount}%</p>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    percentage: PropTypes.number,
}
