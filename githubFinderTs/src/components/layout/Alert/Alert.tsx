import React from "react";

export interface Props {
  alert: {
    alertType: string;
    msg: string;
  };
}

const Alert = ({ alert }: any) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.alertType}`}>
        <i className="fa fa-info-circle" />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
