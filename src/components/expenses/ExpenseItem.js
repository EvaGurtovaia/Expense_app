import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import CheckBox from "../CheckBox/CheckBox";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <CheckBox />
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2 className="expense-item h2">{props.title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;
