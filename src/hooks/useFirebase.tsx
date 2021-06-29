/* eslint-disable no-unused-vars */
import { auth, firebase } from '../services/firebase';

import { SignInProvider } from '../types';

const authProviders = {
  google: new firebase.auth.GoogleAuthProvider(),
};

interface UseFirebaseHook {
  auth: firebase.auth.Auth;
  signIn(provider: SignInProvider): Promise<firebase.auth.UserCredential>;
}

export function useFirebase(): UseFirebaseHook {
  async function signIn(
    provider: SignInProvider,
  ): Promise<firebase.auth.UserCredential> {
    const result = await auth.signInWithPopup(authProviders[provider]);

    return result;
  }

  return { auth, signIn };
}
