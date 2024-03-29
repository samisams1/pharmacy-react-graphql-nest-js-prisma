import { gql, useQuery } from "@apollo/client"
import React from "react"
import { useNavigate } from "react-router-dom";


export const IS_LOGGED_IN = gql`
query{
  me{
    username
    firstName
  }
}
`

interface Props {
    children?: React.ReactNode
}

function IsAuthenticated({ children }: Props) {
    const { loading, error, data } = useQuery(IS_LOGGED_IN)

    const navigate = useNavigate();
    if (loading) return <p>Loading...</p>
    console.log(data);
    if (error)
        return <p>{error.message}</p>

    if (!data.me) {
        return <>{navigate("/")}</>
        
    }

    return <>{children}</>
}

export default IsAuthenticated