// src/templates/populated-worker/src/index.js



// | Column Name | Data Type | Constraints |
// | -----------------------| ------------| --------------------------------------|
// | `id` | INTEGER | PRIMARY KEY AUTOINCREMENT, NOT NULL |
// | `ticket_id` | TEXT | UNIQUE |
// | `uuid` | TEXT | NOT NULL |
// | `timestamp` | DATETIME | DEFAULT CURRENT_TIMESTAMP, NOT NULL |
// | `status` | TEXT | NOT NULL |
// | `note` | TEXT |                                      |
// | `eventid` | INTEGER | NOT NULL |
// | `participant1_email` | TEXT |                                      |
// | `participant1_name` | TEXT |                                      |
// | `participant2_email` | TEXT |                                      |
// | `participant2_name` | TEXT |                                      |
// | `participant3_email` | TEXT |                                      |
// | `participant3_name` | TEXT |                                      |
// | `participant1_phone` | TEXT |                                      |
// | `participant2_phone` | TEXT |                                      |
// | `participant3_phone` | TEXT |                                      |
// | `count_pati` | INTEGER |                                      |
// | `team_name` | TEXT |                                      |
// | `college_name` | TEXT |                                      |

// frontendvalidation 

// | Column Name | Data Type | Constraints |
// | ------------------------| -----------| -----------------|
// | `deduction_percentage` | REAL | NOT NULL |
// | `net_amount_debit` | REAL | NOT NULL |
// | `cardCategory` | TEXT | NOT NULL |
// | `unmappedstatus` | TEXT | NOT NULL |
// | `addedon` | DATETIME | NOT NULL |
// | `cash_back_percentage` | REAL | NOT NULL |
// | `bank_ref_num` | TEXT | NOT NULL |
// | `error_Message` | TEXT | NOT NULL |
// | `phone` | TEXT | NOT NULL |
// | `easepayid` | TEXT | NOT NULL |
// | `cardnum` | TEXT | NOT NULL |
// | `upi_va` | TEXT | NOT NULL |
// | `payment_source` | TEXT | NOT NULL |
// | `card_type` | TEXT | NOT NULL |
// | `mode` | TEXT | NOT NULL |
// | `error` | TEXT | NOT NULL |
// | `bankcode` | TEXT | NOT NULL |
// | `name_on_card` | TEXT | NOT NULL |
// | `bank_name` | TEXT | NOT NULL |
// | `issuing_bank` | TEXT | NOT NULL |
// | `PG_TYPE` | TEXT | NOT NULL |
// | `amount` | REAL | NOT NULL |
// | `furl` | TEXT | NOT NULL |
// | `productinfo` | TEXT | NOT NULL |
// | `email` | TEXT | NOT NULL |
// | `status` | TEXT | NOT NULL |
// | `hash` | TEXT | NOT NULL |
// | `firstname` | TEXT | NOT NULL |
// | `surl` | TEXT | NOT NULL |
// | `key` | TEXT | NOT NULL |
// | `merchant_logo` | TEXT | NOT NULL |
// | `udf10` | TEXT |                 |
// | `txnid` | TEXT | NOT NULL |
// | `udf1` | TEXT |                 |
// | `udf3` | TEXT |                 |
// | `udf2` | TEXT |                 |
// | `udf5` | TEXT |                 |
// | `udf4` | TEXT |                 |
// | `udf7` | TEXT |                 |
// | `udf6` | TEXT |                 |
// | `udf9` | TEXT |                 |
// | `udf8` | TEXT |                 |
// | `cancellation_reason` | TEXT | NOT NULL |





var src_default = {
    async fetch(request, env) {
        const { DATABASE } = env;
        // const stmt = DATABASE.prepare("SELECT * FROM comments LIMIT 3");
        // const { results } = await stmt.all();
        // return new Response(
        //     renderHtml(JSON.stringify(results, null, 2)),
        //     {
        //         headers: {
        //             "content-type": "text/html"
        //         }
        //     }
        // );

        const url = new URL(request.url);


        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/json',
        };

        if (request.method === 'OPTIONS') {
            return new Response(null, { headers });
        }

        // post in /api/register path 

        if (url.pathname === '/api/register') {
            if (request.method === 'POST') {
                let data = await request.json();

                let obj = data;
                console.log(obj);
                // insert the data into the database

                //  validate the data
                if (obj.ticket_id === null) {
                    obj.ticket_id = "";
                }
                if (obj.uuid === null) {
                    obj.uuid = "";
                }
                if (obj.timestamp === null) {
                    obj.timestamp = new Date().toISOString();
                }
                if (obj.status === null) {
                    obj.status = "";
                }
                if (obj.note === null) {
                    obj.note = "";
                }
                if (obj.eventid === null) {
                    obj.eventid = "";
                }
                if (obj.participant1_email === null) {
                    obj.participant1_email = "";
                }
                if (obj.participant1_name === null) {
                    obj.participant1_name = "";
                }
                if (obj.participant2_email === null) {
                    obj.participant2_email = "";
                }
                if (obj.participant2_name === null) {
                    obj.participant2_name = "";
                }
                if (obj.participant3_email === null) {
                    obj.participant3_email = "";
                }
                if (obj.participant3_name === null) {
                    obj.participant3_name = "";
                }
                if (obj.participant1_phone === null) {
                    obj.participant1_phone = "";
                }
                if (obj.participant2_phone === null) {
                    obj.participant2_phone = "";
                }
                if (obj.participant3_phone === null) {
                    obj.participant3_phone = "";
                }
                if (obj.count_pati === null) {
                    obj.count_pati = "";
                }
                if (obj.team_name === null) {
                    obj.team_name = "";
                }
                if (obj.college_name === null) {
                    obj.college_name = "";
                }
                if (obj.ticket_id === "") {
                    return new Response(
                        JSON.stringify({ message: 'ticket_id is required' }),
                        {
                            headers: headers
                        }
                    );
                }
                if (obj.uuid === "") {
                    return new Response(
                        JSON.stringify({ message: 'uuid is required' }),
                        {
                            headers: headers
                        }
                    );
                }
                obj.status = "Initiated";
                obj.timestamp = new Date().toISOString();





                try {

                    let sql = `
        INSERT INTO registration (
            ticket_id, uuid, timestamp, status, note, eventid,
            participant1_email, participant1_name, participant2_email, participant2_name,
            participant3_email, participant3_name, participant1_phone, participant2_phone,
            participant3_phone, count_pati, team_name, college_name
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

                    const arrArgs = [
                        obj.ticket_id, obj.uuid, obj.timestamp, obj.status, obj.note, obj.eventid,
                        obj.participant1_email, obj.participant1_name, obj.participant2_email, obj.participant2_name,
                        obj.participant3_email, obj.participant3_name, obj.participant1_phone, obj.participant2_phone,
                        obj.participant3_phone, obj.count_pati, obj.team_name, obj.college_name
                    ];
                    const stmt = await DATABASE.prepare(sql).bind(...arrArgs);
                    await stmt.run();
                } catch (error) {
                    console.log(error);
                    if (error.message.includes('UNIQUE')) {
                        return new Response(
                            JSON.stringify({ message: 'Duplicate Entry' }),
                            {
                                headers: headers
                            }
                        );
                    }
                    return new Response(
                        JSON.stringify({ message: error.message }),
                        {
                            headers: headers
                        }
                    );

                }
                return new Response(
                    JSON.stringify({ message: 'Success' }),
                    {
                        headers: headers
                    }
                );
            }

            if (request.method === 'GET') {
                const stmt = DATABASE.prepare("SELECT * FROM registration LIMIT 3");
                const { results } = await stmt.all();
                return new Response(
                    JSON.stringify(results, null, 2),
                    {
                        headers: headers
                    }
                );
            }



            if (request.method === 'DELETE') {
                let data = await request.json();
                let obj = data;
                console.log(obj);
                if (obj.ticket_id === null) {
                    obj.ticket_id = "";
                }
                if (obj.uuid === null) {
                    obj.uuid = "";
                }
                if (obj.ticket_id === "") {
                    return new Response(
                        JSON.stringify({ message: 'ticket_id is required' }),
                        {
                            headers: headers
                        }
                    );
                }


                try {
                    let sql = `DELETE FROM registration WHERE ticket_id = ? `;
                    const stmt = await DATABASE.prepare(sql).bind(obj.ticket_id);
                    await stmt.run();
                } catch (error) {
                    console.log(error);
                    return new Response(
                        JSON.stringify({ message: 'Error' }),
                        {
                            headers: headers
                        }
                    );
                }
                return new Response(
                    JSON.stringify({ message: 'Success' }),
                    {
                        headers: headers
                    }
                );
            }
            return new Response(
                JSON.stringify({ message: 'Invalid Request' }),
                {
                    headers: headers
                }
            );
        }

        //     if (url.pathname === '/api/validate') {

        //         if (request.method === 'POST') {
        //             let data = await request.json();
        //             let obj = data;
        //             console.log(obj);
        //             // insert the data into the database
        //             // handle the data for null values
        //             if (obj.deduction_percentage === null) {
        //                 obj.deduction_percentage = "";
        //             }
        //             if (obj.net_amount_debit === null) {
        //                 obj.net_amount_debit = "";
        //             }
        //             if (obj.cardCategory === null) {
        //                 obj.cardCategory = "";
        //             }
        //             if (obj.unmappedstatus === null) {
        //                 obj.unmappedstatus = "";
        //             }
        //             if (obj.addedon === null) {
        //                 obj.addedon = "";
        //             }
        //             if (obj.cash_back_percentage === null) {
        //                 obj.cash_back_percentage = "";
        //             }
        //             if (obj.bank_ref_num === null) {
        //                 obj.bank_ref_num = "";
        //             }
        //             if (obj.error_Message === null) {
        //                 obj.error_Message = "";
        //             }
        //             if (obj.phone === null) {
        //                 obj.phone = "";
        //             }
        //             if (obj.easepayid === null) {
        //                 obj.easepayid = "";
        //             }
        //             if (obj.cardnum === null) {
        //                 obj.cardnum = "";
        //             }
        //             if (obj.upi_va === null) {
        //                 obj.upi_va = "";
        //             }
        //             if (obj.payment_source === null) {
        //                 obj.payment_source = "";
        //             }
        //             if (obj.card_type === null) {
        //                 obj.card_type = "";
        //             }
        //             if (obj.mode === null) {
        //                 obj.mode = "";
        //             }
        //             if (obj.error === null) {
        //                 obj.error = "";
        //             }
        //             if (obj.bankcode === null) {
        //                 obj.bankcode = "";
        //             }
        //             if (obj.name_on_card === null) {
        //                 obj.name_on_card = "";
        //             }
        //             if (obj.bank_name === null) {
        //                 obj.bank_name = "";
        //             }
        //             if (obj.issuing_bank === null) {
        //                 obj.issuing_bank = "";
        //             }
        //             if (obj.PG_TYPE === null) {
        //                 obj.PG_TYPE = "";
        //             }
        //             if (obj.amount === null) {
        //                 obj.amount = "";
        //             }
        //             if (obj.furl === null) {
        //                 obj.furl = "";
        //             }
        //             if (obj.productinfo === null) {
        //                 obj.productinfo = "";
        //             }
        //             if (obj.email === null) {
        //                 obj.email = "";
        //             }
        //             if (obj.status === null) {
        //                 obj.status = "";
        //             }
        //             if (obj.hash === null) {
        //                 obj.hash = "";
        //             }
        //             if (obj.firstname === null) {
        //                 obj.firstname = "";
        //             }
        //             if (obj.surl === null) {
        //                 obj.surl = "";
        //             }
        //             if (obj.key === null) {
        //                 obj.key = "";
        //             }
        //             if (obj.merchant_logo === null) {
        //                 obj.merchant_logo = "";
        //             }
        //             if (obj.udf10 === null) {
        //                 obj.udf10 = "";
        //             }
        //             if (obj.txnid === null) {
        //                 obj.txnid = "";
        //             }
        //             if (obj.udf1 === null) {
        //                 obj.udf1 = "";
        //             }
        //             if (obj.udf3 === null) {
        //                 obj.udf3 = "";
        //             }
        //             if (obj.udf2 === null) {
        //                 obj.udf2 = "";
        //             }
        //             if (obj.udf5 === null) {
        //                 obj.udf5 = "";
        //             }
        //             if (obj.udf4 === null) {
        //                 obj.udf4 = "";
        //             }
        //             if (obj.udf7 === null) {
        //                 obj.udf7 = "";
        //             }
        //             if (obj.udf6 === null) {
        //                 obj.udf6 = "";
        //             }
        //             if (obj.udf9 === null) {
        //                 obj.udf9 = "";
        //             }
        //             if (obj.udf8 === null) {
        //                 obj.udf8 = "";
        //             }
        //             if (obj.cancellation_reason === null) {
        //                 obj.cancellation_reason = "";
        //             }
        //             if (obj.deduction_percentage === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'deduction_percentage is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.net_amount_debit === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'net_amount_debit is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.cardCategory === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'cardCategory is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.unmappedstatus === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'unmappedstatus is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.addedon === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'addedon is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.cash_back_percentage === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'cash_back_percentage is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.bank_ref_num === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'bank_ref_num is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.error_Message === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'error_Message is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.phone === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'phone is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.easepayid === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'easepayid is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.cardnum === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'cardnum is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.upi_va === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'upi_va is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.payment_source === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'payment_source is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.card_type === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'card_type is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.mode === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'mode is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.error === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'error is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.bankcode === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'bankcode is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.name_on_card === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'name_on_card is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.bank_name === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'bank_name is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.issuing_bank === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'issuing_bank is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.PG_TYPE === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'PG_TYPE is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.amount === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'amount is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.furl === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'furl is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.productinfo === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'productinfo is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.email === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'email is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.status === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'status is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.hash === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'hash is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.firstname === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'firstname is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.surl === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'surl is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.key === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'key is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.merchant_logo === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'merchant_logo is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.udf10 === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'udf10 is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.txnid === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'txnid is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.udf1 === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'udf1 is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.udf3 === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'udf3 is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.udf2 === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'udf2 is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.udf5 === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'udf5 is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.udf4 === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'udf4 is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.udf7 === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'udf7 is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.udf6 === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'udf6 is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.udf9 === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'udf9 is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.udf8 === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'udf8 is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }
        //             if (obj.cancellation_reason === "") {
        //                 return new Response(
        //                     JSON.stringify({ message: 'cancellation_reason is required' }),
        //                     {
        //                         headers: headers
        //                     }
        //                 );
        //             }

        //             try {
        //                 let sql = `
        //     INSERT INTO frontendvalidation (
        //         deduction_percentage, net_amount_debit, cardCategory, unmappedstatus, addedon, cash_back_percentage,
        //         bank_ref_num, error_Message, phone, easepayid, cardnum, upi_va, payment_source, card_type, mode,
        //         error, bankcode, name_on_card, bank_name, issuing_bank, PG_TYPE, amount, furl, productinfo,
        //         email, status, hash, firstname, surl, key, merchant_logo, udf10, txnid, udf1, udf3, udf2, udf5,
        //         udf4, udf7, udf6, udf9, udf8, cancellation_reason
        //     ) VALUES ( ${Array(42).fill('?').join(', ')} )

        // `;

        //                 const arrArgs = [
        //                     obj.deduction_percentage, obj.net_amount_debit, obj.cardCategory, obj.unmappedstatus, obj.addedon, obj.cash_back_percentage,
        //                     obj.bank_ref_num, obj.error_Message, obj.phone, obj.easepayid, obj.cardnum, obj.upi_va, obj.payment_source, obj.card_type, obj.mode,
        //                     obj.error, obj.bankcode, obj.name_on_card, obj.bank_name, obj.issuing_bank, obj.PG_TYPE, obj.amount, obj.furl, obj.productinfo,
        //                     obj.email, obj.status, obj.hash, obj.firstname, obj.surl, obj.key, obj.merchant_logo, obj.udf10, obj.txnid, obj.udf1, obj.udf3, obj.udf2, obj.udf5,
        //                     obj.udf4, obj.udf7, obj.udf6, obj.udf9, obj.udf8, obj.cancellation_reason
        //                 ];
        //                 const stmt = await DATABASE.prepare(sql).bind(...arrArgs);
        //                 await stmt.run();
        //             } catch (error) {
        //                 console.log(error);
        //                 if (error) {
        //                     return new Response(
        //                         JSON.stringify({ message: error.message }),
        //                         {
        //                             headers: headers
        //                         }
        //                     );
        //                 }
        //             }
        //             return new Response(
        //                 JSON.stringify({ message: 'Success' }),
        //                 {
        //                     headers: headers
        //                 }
        //             );

        //         }
        //     }


        if (url.pathname === '/api/frontendvalidation') {
            // update the data 

            if (request.method === 'POST') {

                let data = await request.json();
                let obj = data;
                console.log(obj);

                if (obj.status === null) {
                    obj.status = "";
                }
                if (obj.txnid === null) {
                    obj.txnid = "";
                }

                if (obj.status === "") {
                    return new Response(
                        JSON.stringify({ message: 'status is required' }),
                        {
                            headers: headers
                        }
                    );
                }
                if (obj.txnid === "") {
                    return new Response(
                        JSON.stringify({ message: 'txnid is required' }),
                        {
                            headers: headers
                        }
                    );
                }

                try {
                    var message = '';

                    if (obj.status === 'success') {
                        let sql = `UPDATE registration SET status = ? WHERE ticket_id = ? `;
                        const stmt = await DATABASE.prepare(sql).bind(obj.status, obj.udf1);
                        await stmt.run();
                        message = 'success record updated';
                    }
                    else {
                        // delete the data
                        let sql = `DELETE FROM registration WHERE ticket_id = ? `;
                        const stmt = await DATABASE.prepare(sql).bind(obj.udf1);
                        await stmt.run();
                        message = 'failure record deleted';
                    }

                }
                catch (error) {
                    console.log(error);
                    return new Response(
                        JSON.stringify({ message: error.message }),
                        {
                            headers: headers
                        }
                    );
                }
                return new Response(
                    JSON.stringify({ message: message }),
                    {
                        headers: headers
                    }
                );
            }

            return new Response(
                JSON.stringify({ message: 'Invalid Request' }),
                {
                    headers: headers
                }
            );
        }






        return new Response(
            JSON.stringify({ message: 'Invalid Request' }),
            {
                headers: headers
            }
        );
    }
};
export {
    src_default as default
};
