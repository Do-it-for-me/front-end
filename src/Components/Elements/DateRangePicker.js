import React from "react";

import { DatePicker, Space } from "antd";
import moment from "moment";
const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const { RangePicker } = DatePicker;

export const DateRangePicker = (props) => {
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        /* defaultValue={[
          moment("2015/01/01", dateFormat),
          moment("2015/01/01", dateFormat),
        ]} */
        format={dateFormat}
        onChange={props.onChange}
      />
    </Space>
  );
};

export default DateRangePicker;
