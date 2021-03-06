import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    //const [enteredYear, setEnteredYear] = useState(" ");

    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="">
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option ovalue="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
