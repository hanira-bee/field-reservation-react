import { useCallback, useEffect, useState } from "react";

const fieldsUrl = `${import.meta.env.BASE_URL}fields.json`;

export function useFields() {
    const [state, setState] = useState({
        fields: [],
        timeSlots: [],
        loading: true,
        error: null,
    });
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        async function loadFields() {
            try {
                const response = await fetch(fieldsUrl, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(`Permintaan gagal (${response.status})`);
                }

                const data = await response.json();
                if (!Array.isArray(data.fields) || !Array.isArray(data.timeSlots)) {
                    throw new Error("Format data lapangan tidak valid");
                }

                setState({
                    fields: data.fields,
                    timeSlots: data.timeSlots,
                    loading: false,
                    error: null,
                });
            } catch (error) {
                if (error.name === "AbortError") return;

                setState({
                    fields: [],
                    timeSlots: [],
                    loading: false,
                    error: error.message || "Terjadi kesalahan saat memuat data lapangan",
                });
            }
        }

        loadFields();
        return () => controller.abort();
    }, [attempt]);

    const retry = useCallback(() => {
        setState((current) => ({ ...current, loading: true, error: null }));
        setAttempt((current) => current + 1);
    }, []);

    return { ...state, retry };
}
