'use client';

import { useEffect, useState } from "react";
import supabase from "@/services/supabase";
import { User } from "@supabase/supabase-js";

export const useSession = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const getSession = () => {
    supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user)
    })
  }
  useEffect(() => {
    getSession()
  }, [])
  return user
};