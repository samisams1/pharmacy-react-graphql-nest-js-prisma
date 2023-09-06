import gql from "graphql-tag"
export const SALE_QUERY = gql`
query{
    sales{
      id
    }
  }
`
export const CREATE_SALE=gql`
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