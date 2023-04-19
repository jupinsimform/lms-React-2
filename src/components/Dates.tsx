import { days, month } from "../data/Data";

function Dates() {
  const now: Date = new Date();
  const month_names_short = month;
  const day_names_short = days;
  return (
    <>
      <div className="fulldate">
        <div className="date">
          <div className="date_num text-dark">{now.getDate()}</div>
          <div className="month_year">
            <div className="text-dark">{month_names_short[now.getMonth()]}</div>
            <div>{now.getFullYear()}</div>
          </div>
        </div>
        <div className="week text-dark">{day_names_short[now.getDay()]}</div>
      </div>
    </>
  );
}

export default Dates;
