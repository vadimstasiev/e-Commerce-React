// source: https://bit.dev/samsteady/react-components/antd-form-field-price-input
import React from "react";
import NumberFormat from "react-number-format";
import * as PropTypes from "prop-types";


class PriceInput extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || ""),
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (changedValue) => {
    const onChange = this.props.onChange;
    if (onChange) {
      if (changedValue.floatValue) {
        onChange(changedValue.floatValue);
      }
    }
  }

  render() {
    const {value, prefix} = this.props
    return (
      <NumberFormat
        onValueChange={this.onChange}
        className={this.props.className}
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
}

PriceInput.propTypes = {
  prefix: PropTypes.string
}

PriceInput.defaultProps = {
  prefix: "£"
}


export default PriceInput;