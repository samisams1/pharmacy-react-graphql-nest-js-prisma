import gql from "graphql-tag"
export const ME_QUERY = gql`
query{
  me{
    username
    firstName
  }
}
`
export const CHANGE_PASSWORD=gql`
mutation ChangePassword($newPassword:String!) {
  changePassword(id:1, password:$newPassword) {
                email
                firstName,
                lastName,
                email,
                phoneNumber,
                password,
  }
}
`