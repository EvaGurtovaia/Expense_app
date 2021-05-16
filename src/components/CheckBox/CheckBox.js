import React, { useState } from "react";

const CheckBox = (props) => {
    return (
        <div>
            <input type="checkbox" isChecked={false} key={props.id} />
        </div>
    );
};

export default CheckBox;
