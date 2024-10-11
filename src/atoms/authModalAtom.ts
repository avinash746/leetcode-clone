import { atom } from "recoil";
import { authModalState as existingAuthModalState } from "@/atoms/authModalAtom"; // Renamed import

type AuthModalState = {
	isOpen: boolean;
	type: "login" | "register" | "forgotPassword";
};

const initialAuthModalState: AuthModalState = {
	isOpen: false,
	type: "login",
};

export const authModalState = atom<AuthModalState>({
	key: "authModalState",
	default: initialAuthModalState,
});
