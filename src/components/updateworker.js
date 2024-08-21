// src/templates/basic/index.js
import { createClient } from "@supabase/supabase-js";
import renderHtml from "./renderHtml.js";
var basic_default = {
    async fetch(request, env) {

        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/x-www-form-urlencoded',
        };

        if (request.method === 'OPTIONS') {
            return new Response(null, { headers });
        }

        // content is coming in formdatan

        if (request.method === 'POST') {
            // return back the form data
            let data = await request.formData();
            let obj = {};
            data.forEach((value, key) => {
                obj[key] = value
            });
            console.log(obj);
            // insert the data into the database
            const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);
            // handle the data for null values
            if (obj.txnid === null) {
                obj.txnid = "";
            }
            if (obj.firstname === null) {
                obj.firstname = "";
            }
            if (obj.email === null) {
                obj.email = "";
            }
            if (obj.phone === null) {
                obj.phone = "";
            }
            if (obj.key === null) {
                obj.key = "";
            }
            if (obj.mode === null) {
                obj.mode = "";
            }
            if (obj.status === null) {
                obj.status = "";
            }
            if (obj.unmappedstatus === null) {
                obj.unmappedstatus = "";
            }
            if (obj.cardCategory === null) {
                obj.cardCategory = "";
            }
            if (obj.addedon === null) {
                obj.addedon = "";
            }
            if (obj.payment_source === null) {
                obj.payment_source = "";
            }
            if (obj.PG_TYPE === null) {
                obj.PG_TYPE = "";
            }
            if (obj.bank_ref_num === null) {
                obj.bank_ref_num = "";
            }
            if (obj.bankcode === null) {
                obj.bankcode = "";
            }
            if (obj.error === null) {
                obj.error = "";
            }
            if (obj.name_on_card === null) {
                obj.name_on_card = "";
            }
            if (obj.cardnum === null) {
                obj.cardnum = "";
            }
            if (obj.issuing_bank === null) {
                obj.issuing_bank = "";
            }
            if (obj.card_type === null) {
                obj.card_type = "";
            }
            if (obj.easepayid === null) {
                obj.easepayid = "";
            }
            if (obj.amount === null) {
                obj.amount = "";
            }
            if (obj.net_amount_debit === null) {
                obj.net_amount_debit = "";
            }
            if (obj.cash_back_percentage === null) {
                obj.cash_back_percentage = "";
            }
            if (obj.deduction_percentage === null) {
                obj.deduction_percentage = "";
            }
            if (obj.productinfo === null) {
                obj.productinfo = "";
            }
            if (obj.udf10 === null) {
                obj.udf10 = ""; 
            }
            if (obj.udf9 === null) {
                obj.udf9 = "";
            }
            if (obj.udf8 === null) {
                obj.udf8 = "";
            }












            const { data1, error } = await supabase.from('public.payments').insert([
                {
                    txtid: obj.txnid,
                    firstname: obj.firstname,
                    email: obj.email,
                    phone: obj.phone,
                    key: obj.key,
                    mode: obj.mode,
                    status: obj.status,
                    unmappedstatus: obj.unmappedstatus,
                    cardCategory: obj.cardCategory,
                    addedon: obj.addedon,
                    payment_source: obj.payment_source,
                    PG_TYPE: obj.PG_TYPE,
                    bank_ref_num: obj.bank_ref_num,
                    bankcode: obj.bankcode,
                    error: obj.error,
                    name_on_card: obj.name_on_card,
                    cardnum: obj.cardnum,
                    issuing_bank: obj.issuing_bank,
                    card_type: obj.card_type,
                    easepayid: obj.easepayid,
                    amount: obj.amount,
                    net_amount_debit: obj.net_amount_debit,
                    cash_back_percentage: obj.cash_back_percentage,
                    deduction_percentage: obj.deduction_percentage,
                    productinfo: obj.productinfo,
                    udf10: obj.udf10,
                    udf9: obj.udf9,
                    udf8: obj.udf8,
                    udf7: obj.udf7,
                    udf6: obj.udf6,
                    udf5: obj.udf5,
                    udf4: obj.udf4,
                    udf3: obj.udf3,
                    udf2: obj.udf2,
                    udf1: obj.udf1,
                    hash: obj.hash,
                    surl: obj.surl,
                    furl: obj.furl,
                    error_Message: obj.error_Message,
                    merchant_logo: obj.merchant_logo,
                    upi_va: obj.upi_va
                }
            ]);
            if (error) {
                return new Response(JSON.stringify(error), { status: 500 });
            }
            return new Response(JSON.stringify(data1), { status: 200 });
        }
    },
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
