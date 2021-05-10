import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, getFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        getFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() == filteredYear;
    });

    return (
        <list>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </list>
    );
};

export default Expenses;
