import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";

const ExpenseItemsList = (props) => {
    const [filteredYear, getFilteredYear] = useState("2019");

    const filterChangeHandler = (selectedYear) => {
        getFilteredYear(selectedYear);
    };
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amoun}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default ExpenseItemsList;
