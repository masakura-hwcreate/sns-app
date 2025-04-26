import { supabase } from "../lib/supabase"

export const postRepository = {
    async create(content, userId) {
        const {data,error} = await supabase
        .from('posts')
        .insert([{ content, user_id: userId }])
        .select();
        if(error != null) throw new Error(error.message);
        return data[0];
    }
}