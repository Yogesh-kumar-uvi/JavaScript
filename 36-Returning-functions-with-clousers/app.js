function outer() {
    const a = 5;
    function parent() {
        const b = 6;
        function add() {
            console.log(a + b);
        }
        return add
    }
    return parent()
}

const add1 = outer()

console.dir(add1)


/* 1. outer() function definition

यह सिर्फ define हुआ है, अभी execute नहीं हुआ।

Memory में बस इतना store है कि एक function outer है।

2. const add1 = outer()

अब outer() call होगा।

जब outer() call हुआ:

Execution context बनेगा (यानी outer function का अपना local scope)।

const a = 5; ⇒ अब outer के scope में variable a = 5 store है।

फिर parent नाम का function define हुआ। (लेकिन अभी run नहीं हुआ, बस memory में definition है)।

3. return parent() inside outer

यहाँ parent() call हो गया।

अब parent() run होगा:

const b = 6; ⇒ अब parent के scope में variable b = 6 है।

फिर function add() define होता है।

Add function के अंदर लिखा है: console.log(a + b)।

ध्यान दो:
यहाँ add function a और b को directly use नहीं कर रहा, वो outer scopes से reference बना रहा है।

parent() function अब add को return कर देता है।

4. Return chain समझो

parent() ने add return किया।

outer() ने वही add return कर दिया।

अब add1 variable में add function का reference आ गया है।

5. Closure कैसे बना?

Normally, जब कोई function खत्म हो जाता है तो उसका local scope (variables वगैरह) memory से हट जाता है।
लेकिन यहाँ twist है 👇

add function के अंदर a और b की जरूरत है।

a outer (outer()) का variable है।

b parent (parent()) का variable है।

👉 JavaScript कहता है: "ठीक है, मैं add function को चलाने के लिए उसके lexical environment (यानी जहां वो बनाया गया था) को साथ में pack करके रख लूँगा।"
इसी को closure कहते हैं।

मतलब:

add function के साथ-साथ, a=5 और b=6 भी memory में save रहेंगे।

भले ही outer() और parent() execution खत्म हो चुके हों, उनके variables delete नहीं होंगे क्योंकि अभी भी उनका इस्तेमाल add function को करना है।

6. जब तुम console.dir(add1) करते हो

यह तुम्हें function add दिखाएगा, लेकिन उसके अंदर hidden property होती है [[Scopes]]।
इसमें तुम्हें Closure (a, b) जैसा कुछ दिखाई देगा।
यानी यह proof है कि add function अपने साथ outer scope का data लेकर घूम रहा है */   