import {useRouter} from "next/router";

export function useCasinoNavigation() {
  const router = useRouter();

  return {
    goToGameScreen: (gameId) => router.push(`/game/${gameId}`),
  }
}
