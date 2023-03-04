import { useEffect } from "react";

function useTitle(title) {
    useEffect(() => {
        document.title = `${title} | Finanzas Personales`;
    }, [])
}

export default useTitle;