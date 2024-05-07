'use client';
import {useAuth} from "@lib/auth";

export function Navbar() {
  const {loginUser} = useAuth();

  return (
    <nav>
      <div>
        {loginUser
          ? (
            <div>
              <span>{loginUser.email}</span>
              <span>{loginUser.name}</span>
            </div>
          ) : (
            <div>Not yet login</div>
          )
        }
      </div>
    </nav>
  );
}
