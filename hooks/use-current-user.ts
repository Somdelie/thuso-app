import { auth } from "@/auth";
import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const session = useSession();

  return session.data?.user;
};

export async function currentUser() {
  const session = await auth();
  return session?.user;
}
