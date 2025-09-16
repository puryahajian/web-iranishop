import { useQuery } from '@tanstack/react-query';
import interceptor from '../lib/interceptor';

const useGetParentCategory = (parentId, page) => {
    console.log(parentId, page)
    const { data, error, isLoading } = useQuery({
        queryKey: ['parentCategories', parentId, page],
        queryFn: () => 
            parentId 
                ? interceptor.get(`/product/public/api/v1/categories/?page=${page}&parent=${parentId}`).then(res => res.data)
                : null,
    });

    return {
        data,
        isLoading,
        error
    };
};

export default useGetParentCategory;
