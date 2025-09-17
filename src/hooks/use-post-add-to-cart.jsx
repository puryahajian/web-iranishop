import { useMutation, useQueryClient } from '@tanstack/react-query';
import interceptor from '../lib/interceptor';
import qs from "qs";

function usePostAddToCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ result, discountCode }) => {
            // console.log(result)
            const data = JSON.stringify({
                delivery_method : 1,
                payment_method: 1,
                items: result,
                discount_code: discountCode
            });
            // console.log(data)
            
            const response = await interceptor.post(
                `order/mobile/v1/orders/create/`,
                data,
            );
            return response.data;
        },
        onSuccess: (data) => {
            console.log(data)
            // localStorage.removeItem('cart');
        },
        onError: (error) => {
            // console.log(error)
        }
        
    });
}

export default usePostAddToCart;
