import { supabase } from './supabase'

export const getVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select(`*, user: user_id (
      username,
      avatar
    )`)
  return [error, data]
}
