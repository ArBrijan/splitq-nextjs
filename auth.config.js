import Credentials from "next-auth/providers/credentials"
import bcryptjs from "bcryptjs"
import { getUserByEmail } from "./lib/user";
import { AuthError } from "next-auth";

export default {
    trustHost: true,
    providers: [Credentials({

        async authorize(data) {
            const { email, password } = data;

            const user = await getUserByEmail(email);

            if (!user) return null

            if(!user.verification) throw new AuthError("Bad Verification")

            const isSamePassword = await bcryptjs.compare(password, user.password)

            if (!isSamePassword) return null
            return user
        }

    })]
}