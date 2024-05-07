'use client';
import {useAuth} from "@lib/auth";
import {getDisplayName} from "@lib/common";

export function Navbar() {
  const {loginUser, logout} = useAuth();

  return (
    <nav>
      <div>
        {loginUser
          ? (
            <div>
              <span>{getDisplayName(loginUser)}</span>
              <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>
          ) : (
            <div>Not yet login</div>
          )
        }
      </div>
    </nav>
  );
}
