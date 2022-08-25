import { useState } from 'react';
import ErrorMessage from "../components/pages/ErrorMessage/ErrorMessage";

export const withErrorApi = (View: ({setErrorApi}: any) => JSX.Element) => {
    return (({props}:any) => {
        const [errorApi, setErrorApi] = useState<boolean>(false);

        return (
            <>
                {errorApi
                    ? <ErrorMessage />
                    : (
                        <View
                            setErrorApi={setErrorApi}
                            {...props}
                        />
                    )
                }
            </>
        )
    })
}