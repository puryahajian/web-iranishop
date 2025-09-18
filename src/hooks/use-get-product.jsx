import { useQuery } from "@tanstack/react-query";
import interceptor from "../lib/interceptor";

function useGetProduct(search, enabled = false) {
  console.log(search)
  return useQuery({
    queryKey: ["products", search],
    queryFn: async () => {
      const res = await interceptor.get(
        `product/public/api/v1/products/?search=${search}`
      );
      return res.data;
    },
    enabled: !!search,// فقط وقتی سرچ داری اجرا بشه
  });
}

export default useGetProduct;
