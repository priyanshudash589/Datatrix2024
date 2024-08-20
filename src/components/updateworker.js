// src/templates/basic/index.js
import { createClient } from "@supabase/supabase-js";
import renderHtml from "./renderHtml.js";
var basic_default = {
    async fetch(request, env) {
        const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);
        const { data, error } = await supabase
            .from("registration")
            .select("*");
        return new Response(data ? JSON.stringify(data) : error, {
            status: 200,
            headers: {
                "Content-Type": "text/html"
            }
        });
    }
};
export {
    basic_default as default
};
