export function* fetchData(req) {
    let data: StatusData;
    let a = 1
    if(a===1) {
        data = {
            serialNumber: "1",
            status: "active"
        }
        return {
            data,
            success: true
        }
    } else {
        return {
            data,
            success: false
        }
    }
}

useEffect(() => {
    if(store.getState().auth.state === "Authenticated")
    console.log("test")
}, [store.getState().auth.state])