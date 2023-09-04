import gql from "graphql-tag"
export const APPOITMENT_QUERY = gql`
query Appointments {
    appointments {
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
       firstName 
      }
    }
  }
`
export const CREATE_APPOINTMENT =gql`
mutation CreateAppointment($symptoms:String!,$diagosis:String!,$checkUpDate:String!,$nextvist:String!,$doctor:Int!,$patient:Int!) {
  createAppointment(symptoms: $symptoms, diagosis: $diagosis, checkUpDate:$checkUpDate, nextvist: $nextvist, doctor:$doctor, patient:$patient) {
    id
    patient
    symptoms
    diagosis
    checkUpDate
    nextvist
    Doctor {
     email
     firstName
     lastName
    }
    Patient {
      firstName
      lastName
    }
  }
}
`