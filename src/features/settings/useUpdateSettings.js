import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateSettings } from '../../services/apiSettings';

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();
  const { isLoading: isUpdatting, mutate: updateSetting } = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      console.log('更新成功！');
      queryClient.invalidateQueries({
        queryKey: ['settings'],
      });
    },
  });
  return { updateSetting, isUpdatting };
};
