import gql from "graphql-tag"
export const PATIENT_QUERY = gql`
query Patients {
    patients {
      id
      firstName
      lastName
      dateOfBirth
      martialStatus
      phoneNumber
      email
      address
      country
    }
  }
`
export const CREATE_HABIT_MUTATION = gql`
	mutation CreatePatient($firstName: String!, $lastName: String!,$dateOfBirth:String!,$martialStatus:String!,$phoneNumber:String!,$email:String!,$address:String!,$country:String!) {
		createPatient(firstName: $firstName, lastName: $lastName,dateOfBirth:$dateOfBirth,martialStatus:$martialStatus,phoneNumber:$phoneNumber,email:$email,address:$address,country:$country) {
      firstName,
      lastName
      dateOfBirth
      martialStatus
      phoneNumber
      email
      address
      country
		}
	}  
`
export const UPDATE_PATIENT_MUTATION = gql`
mutation UpdatePost($id: Int!,$firstName: String!, $lastName: String!,$dateOfBirth:String!,$martialStatus:String!,$phoneNumber:String!,$email:String!,$address:String!,$country:String!){
  updatePost(id: $id,firstName: $firstName, lastName: $lastName,dateOfBirth:$dateOfBirth,martialStatus:$martialStatus,phoneNumber:$phoneNumber,email:$email,address:$address,country:$country) {
    id
    firstName
    lastName
      dateOfBirth
      martialStatus
      phoneNumber
      email
      address
      country
  }
}
`

export const DELETE_PATIENT_MUTATION = gql`
	mutation deletePatient($firstName: String!, $lastName: String!,$dateOfBirth:String!,$martialStatus:String!,$phoneNumber:String!,$email:String!,$address:String!,$country:String!) {
		deletePatient(firstName: $firstName, lastName: $lastName,dateOfBirth:$dateOfBirth,martialStatus:$martialStatus,phoneNumber:$phoneNumber,email:$email,address:$address,country:$country) {
      firstName,
      lastName
      dateOfBirth
      martialStatus
      phoneNumber
      email
      address
      country
		}
	}
`