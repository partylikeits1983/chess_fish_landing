import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
