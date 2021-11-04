import PropTypes from 'prop-types';
import s from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }){   
        return (
        <div>
            {options.map((stat) => (
                <button
                    key={stat}
                    name={stat}
                    type="button"
                    className={s.FeedbackOptions}
                    onClick={()=>onLeaveFeedback(stat)}
                >{stat[0].toUpperCase() + stat.slice(1)}</button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
