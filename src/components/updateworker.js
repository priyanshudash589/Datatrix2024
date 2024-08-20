// src/templates/basic/index.js
import { createClient } from "@supabase/supabase-js";
import renderHtml from "./renderHtml.js";
var basic_default = {
    async fetch(request, env) {

        if (request.method === 'OPTIONS') {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Content-Type": "application/json"
                }
            });
        }

        if (request.method === 'POST') {
            const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);

            const body = await request.json();
            // insert into transactions table
            const { data, error } = await supabase.from('transactions').insert([{
                txnid: body.txnid,
                firstname: body.firstname,
                email: body.email,
                phone: body.phone,
                key: body.key,
                mode: body.mode,
                status: body.status,
                unmappedstatus: body.unmappedstatus,
                cardCategory: body.cardCategory,
                addedon: body.addedon,
                payment_source: body.payment_source,
                PG_TYPE: body.PG_TYPE,
                bank_ref_num: body.bank_ref_num,
                bankcode: body.bankcode,
                error: body.error,
                name_on_card: body.name_on_card,
                cardnum: body.cardnum,
                issuing_bank: body.issuing_bank,
                card_type: body.card_type,
                easepayid: body.easepayid,
                amount: body.amount,
                net_amount_debit: body.net_amount_debit,
                cash_back_percentage: body.cash_back_percentage,
                deduction_percentage: body.deduction_percentage,
                productinfo: body.productinfo,
                udf10: body.udf10,
                udf9: body.udf9,
                udf8: body.udf8,
                udf7: body.udf7,
                udf6: body.udf6,
                udf5: body.udf5,
                udf4: body.udf4,
                udf3: body.udf3,
                udf2: body.udf2,
                udf1: body.udf1,
                hash: body.hash,
                surl: body.surl,
                furl: body.furl,
                error_Message: body.error_Message,
                merchant_logo: body.merchant_logo,
                upi_va: body.upi_va
            }]);
            if (error) {
                console.log("error", error);
            } else {
                console.log(data);
            }

            //  update status in registration table
            const { data: data1, error: error1 } = await supabase.from('registration').update({
                payment_status: body.status
            }).eq('email', body.email);
            if (error1) {
                console.log("error", error1);
            } else {
                console.log(data1);
            }

            return new Response(data ? JSON.stringify(data) : error, {
                status: 200,
                headers: {
                    "Content-Type": "text/html"
                }
            });
        }
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
