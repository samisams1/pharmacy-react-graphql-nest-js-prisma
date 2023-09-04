import gql from "graphql-tag"
export const PATIENT_VITALS_QUERY = gql`
query PatientVitals {
    PatientVitals {
      id
      temperature
      bpSystolic
      bpDiastolic
      notes
      patient
      Patient {
        firstName
      }
    }
  }
`
export const CREATE_PATIENT_VITALS=gql`
mutation CreatePatientVitals($temperature:String!,$bpDiastolic:String!,$bpSystolic:String!,$notes:String!,$patient:Int!) {
  createPatientVitals(temperature:$temperature,bpDiastolic:$bpDiastolic,bpSystolic:$bpSystolic,notes:$notes,patient:$patient) {
    id
    temperature
    bpSystolic
    bpDiastolic
    notes
    Patient {
      id
      firstName
      lastName
      email
    }
  }
}
`