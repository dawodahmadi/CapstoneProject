import authApi from "./AuthApi";

const creatPaymentIntent = (data) => {
    return new Promise(async (resolve, reject) => {
        await authApi.post(`/payment-sheet`,data).then(function (res) {
            resolve(res)
        }).catch(function (error) {
            reject(error)
        })
    })
}

export default creatPaymentIntent

///hjgjhghjghj
