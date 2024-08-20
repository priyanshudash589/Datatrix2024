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



// const sample request = {
//     txnid: "1001",
//     firstname: "Dummy Customer",
//     email: "dummycustomer@test.com",
//     phone: "1234567890",
//     key: "DFXXXFDSF",
//     mode: "DC",
//     status: "success",  ##success / failure / userCancelled
//   unmappedstatus: "NA",
//     cardCategory: "NA",
//     addedon: "2016-07-22 17:17:08",
//     payment_source: "Easebuzz",
//     PG_TYPE: "NA",
//     bank_ref_num: "",
//     bankcode: "NA",
//     error: "Successful Transaction",
//     name_on_card: "Dummy",
//     cardnum: "5XX0XXXXXXXX5420",
//     issuing_bank: "",
//     card_type: "Debit Card",
//     easepayid: "XXXXXXX",
//     amount: "100.00",
//     net_amount_debit: "100.00",
//     cash_back_percentage: "50",
//     deduction_percentage: "2.50",
//     productinfo: "Tshirt",
//     udf10: "",
//     udf9: "",
//     udf8: "",
//     udf7: "",
//     udf6: "",
//     udf5: "",
//     udf4: "",
//     udf3: "",
//     udf2: "",
//     udf1: "",
//     hash: "ce2d0588f8648c62db86475xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxb0e8bb4f47fdea955f61b674171f193c883686d2da42300d00e921a217c3",
//     surl: "",
//     furl: "",
//     error_Message: "Successful Transaction",
//     merchant_logo: "NA",
//     upi_va: "customer@bank"
// };

const Database 