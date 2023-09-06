import gql from "graphql-tag"
export const CATEGORY_QUERY = gql`
query{
  categories{
    id
    name
  }
}
`
export const CREATE_CATEGORY=gql`
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