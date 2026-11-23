// localStorage peut être indisponible (navigation privée, cookies bloqués) :
// on ne doit jamais faire planter le site pour une simple préférence.
export function readPreference(key: string): string | null {
	try {
		return localStorage.getItem(key);
	} catch {
		return null;
	}
}

export function savePreference(key: string, value: string): void {
	try {
		localStorage.setItem(key, value);
	} catch {
		// préférence non sauvegardée, sans conséquence
	}
}
