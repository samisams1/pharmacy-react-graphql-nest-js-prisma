import gql from "graphql-tag"
export const CHECKUP_QUERY = gql`
query Checkups {
  checkups {
    id
    symptoms
    diagosis
    checkUpDate
    nextvist
    doctor
    patient
    Patient {
      firstName
    }
    Doctor {
      lastName
    }
  }
}
`
export const CREATE_CHECK_UP=gql`
mutation CreateCheckup($symptoms:String!,$diagosis:String!,$nextvist:String!) {
  createCheckup(symptoms:$symptoms,diagosis:$diagosis,checkUpDate:"sams",nextvist:$nextvist,doctor:1,patient:1) {
    symptoms
    diagosis
    checkUpDate
    nextvist
    doctor
    patient
  }
}
`

