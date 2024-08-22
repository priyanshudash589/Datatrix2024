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

| Column Name | Data Type | Constraints |
| ------------------------| -----------| -----------------|
| `deduction_percentage` | REAL | NOT NULL |
| `net_amount_debit` | REAL | NOT NULL |
| `cardCategory` | TEXT | NOT NULL |
| `unmappedstatus` | TEXT | NOT NULL |
| `addedon` | DATETIME | NOT NULL |
| `cash_back_percentage` | REAL | NOT NULL |
| `bank_ref_num` | TEXT | NOT NULL |
| `error_Message` | TEXT | NOT NULL |
| `phone` | TEXT | NOT NULL |
| `easepayid` | TEXT | NOT NULL |
| `cardnum` | TEXT | NOT NULL |
| `upi_va` | TEXT | NOT NULL |
| `payment_source` | TEXT | NOT NULL |
| `card_type` | TEXT | NOT NULL |
| `mode` | TEXT | NOT NULL |
| `error` | TEXT | NOT NULL |
| `bankcode` | TEXT | NOT NULL |
| `name_on_card` | TEXT | NOT NULL |
| `bank_name` | TEXT | NOT NULL |
| `issuing_bank` | TEXT | NOT NULL |
| `PG_TYPE` | TEXT | NOT NULL |
| `amount` | REAL | NOT NULL |
| `furl` | TEXT | NOT NULL |
| `productinfo` | TEXT | NOT NULL |
| `email` | TEXT | NOT NULL |
| `status` | TEXT | NOT NULL |
| `hash` | TEXT | NOT NULL |
| `firstname` | TEXT | NOT NULL |
| `surl` | TEXT | NOT NULL |
| `key` | TEXT | NOT NULL |
| `merchant_logo` | TEXT | NOT NULL |
| `udf10` | TEXT |                 |
| `txnid` | TEXT | NOT NULL |
| `udf1` | TEXT |                 |
| `udf3` | TEXT |                 |
| `udf2` | TEXT |                 |
| `udf5` | TEXT |                 |
| `udf4` | TEXT |                 |
| `udf7` | TEXT |                 |
| `udf6` | TEXT |                 |
| `udf9` | TEXT |                 |
| `udf8` | TEXT |                 |
| `cancellation_reason` | TEXT | NOT NULL |





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
                    if ( error.message.includes('UNIQUE') ) {
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
