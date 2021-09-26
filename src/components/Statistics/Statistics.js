import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {/* {!title ? !title : <h2 className={s.title}>{title}</h2>} */}
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(element => (
          <li
            className={s.item}
            key={element.id}
            style={{
              backgroundColor: `${
                '#' +
                (Math.random().toString(16) + '000000')
                  .substring(2, 8)
                  .toUpperCase()
              }`,
            }}
          >
            <span className={s.label}>{element.label}</span>
            <span className={s.percentage}>{element.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
