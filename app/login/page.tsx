"use client";

import { NextAuthSession } from "@/types";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { ProviderButton } from "@/components/buttons/ProviderButton";

const page: FC = () => {
  const session = useSession().data as NextAuthSession | null;
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <div>
      <h1 className="heading text-center">Sign In</h1>
      {session?.user ? (
        <div className="flex gap-3 md:gap-5 z-20">
          <button
            type="button"
            className="text-white text-lg"
            onClick={() => signOut()}
          >
            Sign Out
          </button>

          <Link href="/profile">
            <Image
              src={session?.user.image ?? ""}
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
            />
          </Link>
        </div>
      ) : (
        <div className="flex gap-4 mt-4 md:mt-8 items-center">
          {providers &&
            Object.values(providers).map((provider) => (
              <ProviderButton
                key={provider.name}
                providerId={provider.id}
                onClick={() => signIn(provider.id)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default page;
