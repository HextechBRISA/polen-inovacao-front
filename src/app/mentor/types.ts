interface ImageUser {
    data: number[];
    type: string;
  };
  
export interface User {
    id: number;
    email: string;
    name: string;
    course: string;
    image: ImageUser;
    category: string;
  };
