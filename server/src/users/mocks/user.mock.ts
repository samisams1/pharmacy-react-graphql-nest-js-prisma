export class UserMock {
    private users: any[];
  
    constructor() {
      // Initialize the mock data
      this.users = [

      {
        "id": 1,
        "username": "jesus",
        "email": "jesus",
        "role": "CUSTOMER"
      },
      {
        "id": 2,
        "username": "john_doe",
        "email": "john.doe@example.com",
        "role": "CUSTOMER"
      }
      ];
    }
  
    findAll(): any[] {
      // Return the mocked users
      return this.users;
    }
  
    getUserById(id: number): any {
      // Find the user with the specified ID from the mocked data
      return this.users.find((user) => user.id === id);
    }
  
    // Add more mock methods as needed
  }
