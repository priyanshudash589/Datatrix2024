export default {
    async fetch(request, env, ctx) {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/json',
        };
        if (request.method === 'OPTIONS') {
            return new Response(null, { headers });
        }
        if (request.method === 'POST') {
            try {

                const body = await request.json();
                const txnid = "VVCTtx" + Math.floor(Math.random() * 900000 + 100000);
                const key = "2PBP7IABZ2"; // Add your key here
                const prodInfo = "event";
                const fname = "eeshwar S";
                const phone = "123457890";
                const email = "me@eeshwar.dev";
                const surl = "http://localhost:8080/PHP/Success.php";
                const furl = "http://localhost:8080/PHP/Failure.php";
                const pan = "uuuiiiddd";
                // get the amount from the request
                let amt = body.amount;
                const salt = "DAH88E3UWQ"; // Add your salt here

                // Hash sequence: key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10|salt
                const hash_string = `${key}|${txnid}|${amt}|${prodInfo}|${fname}|${email}|${pan}||||||||||${salt}`;
                const hash = await sha512(hash_string);

                const params = new URLSearchParams();
                params.append('key', key);
                params.append('txnid', txnid);
                params.append('amount', amt);
                params.append('productinfo', prodInfo);
                params.append('firstname', fname);
                params.append('phone', phone);
                params.append('email', email);
                params.append('surl', surl);
                params.append('furl', furl);
                params.append('hash', hash);
                params.append('udf1', pan);

                const response = await fetch("https://testpay.easebuzz.in/payment/initiateLink", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: params
                });

                const responseData = await response.json();
                return new Response(JSON.stringify(responseData), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                });

            } catch (err) {
                return new Response(`Error: ${err.message}`, { status: 500 });
            }
        } else {
            return new Response('Method Not Allowed', { status: 405 });
        }

        async function sha512(str) {
            const buf = await crypto.subtle.digest('SHA-512', new TextEncoder().encode(str));
            return Array.prototype.map.call(new Uint8Array(buf), x => ('00' + x.toString(16)).slice(-2)).join('');
        }
    },
};
