import React from "react";
import {
    DatePicker,
    useDatePickGetter,
    useDatePickReset,
  } from "@bcad1591/react-date-picker";

const GetDate = () =>{
    const { pickedDates } = useDatePickGetter();
    const resetFunc = useDatePickReset();
  
    var time = pickedDates.firstPickedDate?.toLocaleString()
  
  
    return (
      <div className="date-container">
      <DatePicker disablePreviousDays />
      <div className="start-date">{pickedDates.firstPickedDate?.toLocaleString()}</div>
      <div className="end-date">{pickedDates.secondPickedDate?.toLocaleString()}</div>
      <button type="button" onClick={resetFunc}>
        Reset
      </button>
      <button type="button" onClick={resetFunc}>
        Save
      </button>
    </div>
    )
  }

  export default GetDate;