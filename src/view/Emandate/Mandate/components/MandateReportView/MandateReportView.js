import React from "react";
import './MandateReportView.css'
import MandateRecordDisplay from '../MandateRecordDisplay/MandateRecordDisplay'

export default function MandateReportView() {
  return <div className='mandateReportView__container'>
      <h2>Responsive Table with DataTables</h2>
      <MandateRecordDisplay />
    </div>
}
