// source: https://bit.dev/samsteady/react-components/antd-form-field-price-input
import React, {useEffect} from "react";
import NumberFormat from "react-number-format";


const PriceInput = (props) => {
    const {value, prefix} = props

    const onChange = (changedValue) => {
      const onChange = props.onChange;
      if (onChange) {
        if (changedValue.floatValue) {
          onChange(changedValue.floatValue);
        }
      }
    }

    return (
      <NumberFormat
        onValueChange={onChange}
        className={props.className}
        thousandSeparator={true}
        prefix={prefix}
        placeholder={`${prefix}0.00`}
        // trigger="onValueChange"
        decimalScale={2}
        fixedDecimalScale={true}
        // isNumericString={true}
        value={value}
        // getInputRef = {(el) => this._currency_input = el}
      />
    );
}


export default PriceInput;