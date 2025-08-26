import NextAuth from "next-auth";
import credentiasProvider from "next-auth/providers/credentials";


 export const authOptions={

    secret: process.env.NEXTAUTH_SECRET,

    session: {
        strategy: "jwt",
    },


    providers:[
        credentiasProvider({

            credentials:{
                email: { label: "Email", type: "text", required: true, placeholder: "Enter your email" },
                password: { label: "Password", type: "password", required: true, placeholder: "Enter your password" }
            },

            async authorize(credentials){

                const {email,password} = credentials;


                if(!credentials){
                    return null;
                }
                if(email){
                    const currentUser=users.find((user)=>user.email===email)
                    if(currentUser){

                        if(currentUser.password===password){

                            return currentUser;

                        }

                    }
                }

                return null
                
            }



        })

    ]
}
  
const handler = NextAuth( authOptions )


const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "alice123"
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    password: "bob456"
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    password: "charlie789"
  },
  {
    id: 4,
    name: "Diana Miller",
    email: "diana@example.com",
    password: "diana321"
  }
];


export { handler as GET, handler as POST };
